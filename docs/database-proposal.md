# Proposta inicial de banco de dados

Esta é uma proposta para revisão. Não há migrações nesta primeira etapa, pois as políticas RLS e o fluxo de criação de contas precisam ser definidos antes de tornar o schema definitivo.

## Convenções

- Chaves primárias: `uuid`, com `gen_random_uuid()`.
- Auditoria: `created_at timestamptz not null default now()` e `updated_at` nas entidades editáveis.
- Isolamento: entidades de negócio possuem `gym_id` obrigatório. Isso simplifica filtros, índices e futuras políticas RLS por academia.
- Valores monetários: `numeric(10,2)`, nunca `float`.
- Datas de competência: `date` ou `date_trunc('month', ...)`, nunca texto como `"2026-08"`.
- Exclusão: preservar históricos; usar status e arquivamento em vez de apagar registros que já participaram de treino ou pagamento.

## Tabelas

### `gyms`

Representa uma academia. Campos principais: `id`, `name`, `timezone`, `is_active`, timestamps. Nesta fase uma única academia será cadastrada, mas toda informação operacional será vinculada a ela.

### `profiles`

Representa a pessoa que usa ou poderá usar o sistema, sem amarrá-la a uma única academia. Campos: `id`, `auth_user_id` (único e inicialmente opcional, referência a `auth.users`), `full_name`, `email`, `phone`, timestamps.

`auth_user_id` opcional permite cadastrar um aluno antes de criar/convidar sua conta. Quando houver acesso, a RLS identifica a pessoa por esse vínculo com `auth.uid()`.

### `gym_memberships`

Vínculo de uma pessoa com uma academia. Campos: `id`, `gym_id`, `profile_id`, `role` (`admin`, `instructor`, `student`), `is_active`, timestamps; restrição única em `(gym_id, profile_id)`.

Esta é uma tabela pequena, mas evita uma limitação importante: no futuro, a mesma pessoa poderá participar de mais de uma academia sem duplicar sua conta. Um administrador tem as permissões operacionais de professor; por isso não é necessário atribuir dois papéis na primeira versão.

### `students`

Complementa a associação de quem é aluno. Campos: `id`, `gym_id`, `gym_membership_id`, `status` (`active`, `inactive`), `enrolled_at`, `birth_date`, `notes`, timestamps. `gym_membership_id` deve ser único para que uma pessoa tenha um único cadastro de aluno por academia.

O aluno não é apagado quando sai: `status = inactive` bloqueia novos fluxos operacionais e preserva todo o histórico.

### `exercises`

Catálogo da academia. Campos: `id`, `gym_id`, `name`, `muscle_group`, `equipment`, `description`, `video_url`, `thumbnail_url`, `is_active`, timestamps. `video_url` guarda apenas a referência externa (por exemplo, URL YouTube), nunca o arquivo de vídeo.

### `exercise_aliases`

Nomes alternativos pesquisáveis de um exercício. Campos: `id`, `exercise_id`, `alias`. A tabela evita guardar uma lista desnormalizada em texto e facilita busca por apelidos comuns na academia.

### `workout_sheets`

Versão de ficha atribuída a um aluno. Campos: `id`, `gym_id`, `student_id`, `title`, `status` (`draft`, `active`, `archived`), `valid_from`, `archived_at`, `created_by_membership_id`, timestamps.

Ao ativar uma ficha, a anterior do mesmo aluno deve ser arquivada em uma transação. Um índice parcial deve garantir no máximo uma ficha `active` por aluno. Fichas arquivadas nunca são editadas para não alterar prescrições históricas.

### `workout_days`

Dias/blocos dentro de uma ficha. Campos: `id`, `workout_sheet_id`, `name`, `position`, `notes`, timestamps. Exemplos: `Treino A`, `Treino B` e `Treino C`.

### `workout_exercises`

Prescrição de um exercício em um dia de treino. Campos: `id`, `workout_day_id`, `exercise_id`, `position`, `sets`, `repetitions_min`, `repetitions_max`, `rest_seconds`, `suggested_load_kg numeric(6,2)`, `notes`, timestamps.

`repetitions_min` e `repetitions_max` permitem tanto `10` quanto faixa `8–12` sem salvar uma regra importante como texto. Se no futuro surgirem prescrições mais complexas, pode-se adicionar um campo de instrução livre sem perder a estrutura básica.

### `workout_sessions`

Uma realização concreta de um dia de treino. Campos: `id`, `gym_id`, `student_id`, `workout_sheet_id`, `workout_day_id`, `started_at`, `finished_at`, `status` (`in_progress`, `completed`, `cancelled`), `notes`, timestamps.

As chaves para ficha e dia preservam qual prescrição gerou a sessão, mesmo depois que uma nova ficha é publicada.

### `workout_sets`

Registro por série realizada. Campos: `id`, `workout_session_id`, `workout_exercise_id`, `set_number`, `load_kg numeric(6,2)`, `repetitions`, `is_completed`, `notes`, timestamps. Restrição única: `(workout_session_id, workout_exercise_id, set_number)`.

É a fonte do histórico e da sugestão de "anterior" ao iniciar um novo treino. Não é necessário duplicar carga e repetições no nível da sessão.

### `payments`

Controle manual de mensalidades. Campos: `id`, `gym_id`, `student_id`, `competence_date date`, `amount numeric(10,2)`, `due_date`, `paid_at`, `payment_method`, `status` (`pending`, `paid`, `overdue`, `cancelled`), `notes`, `recorded_by_membership_id`, timestamps.

Uma restrição única em `(student_id, competence_date)` evita duas mensalidades para a mesma competência. `status = overdue` pode ser calculado na interface a partir do vencimento, mas armazená-lo permite exceções administrativas; a regra de atualização deverá ser definida na etapa financeira.

## Relacionamentos principais

```text
profiles 1 ── N gym_memberships N ── 1 gyms
gym_memberships 1 ── 0..1 students
gyms 1 ── N exercises 1 ── N exercise_aliases
students 1 ── N workout_sheets 1 ── N workout_days 1 ── N workout_exercises
students 1 ── N workout_sessions 1 ── N workout_sets
students 1 ── N payments
```

As tabelas filhas relacionadas à operação também devem ser verificadas contra o mesmo `gym_id` dos pais — por FK composta, trigger pequena ou política de escrita bem testada. A opção final será definida junto das migrações e RLS.

## RLS prevista (não implementada ainda)

- Aluno: lê seu `profile`, sua `gym_membership`, seu `student`, sua ficha ativa/arquivada e suas sessões/séries; cria e atualiza somente suas sessões em andamento.
- Professor: a `gym_membership` autenticada limita leitura a alunos e exercícios da própria academia; cria e edita fichas e exercícios daquele `gym_id`.
- Administrador: mesma base do professor, mais gestão de vínculos/alunos e mensalidades da própria academia.
- Nenhuma política depende do frontend. A `service_role` não será usada no navegador.

O fluxo de criação de `auth.users` para alunos e professores será definido depois. Como ele requer privilégios administrativos do Supabase, deverá ocorrer por convite ou função server-side, nunca pelo cliente React com `service_role`.
