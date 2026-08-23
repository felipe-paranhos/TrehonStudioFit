# Trehon Studio Fit

Fundação do sistema de gestão da Trehon Studio Fit. O produto atenderá administradores, professores e alunos, com prioridade para consulta e registro de treinos no celular e gestão operacional no desktop.

Esta primeira etapa entrega a navegação, os layouts responsivos e a preparação segura para o Supabase. Ela **não** implementa autenticação real, CRUDs, tabelas, RLS ou pagamentos.

## Tecnologias

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Supabase JS (cliente preparado, ainda sem chamadas)

## Como executar

Pré-requisito: Node.js 20 ou superior. O projeto usa pnpm; se necessário, ative-o com `corepack enable`.

```bash
pnpm install
pnpm dev
```

Para validar tipos e build:

```bash
pnpm typecheck
pnpm build
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha com as credenciais públicas do seu projeto Supabase:

```bash
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
```

O arquivo `.env` está ignorado pelo Git. Nunca use nem exponha a `service_role` no frontend.

Enquanto as variáveis não estiverem presentes, a aplicação continua exibindo a fundação visual; o cliente em `src/services/supabase/client.ts` permanece `null` e não deve ser usado sem verificação.

## Rotas disponíveis

| Área | Rotas |
| --- | --- |
| Login | `/login` |
| Administração | `/admin`, `/admin/alunos`, `/admin/exercicios`, `/admin/fichas`, `/admin/mensalidades` |
| Aluno | `/aluno`, `/aluno/ficha`, `/aluno/treinar`, `/aluno/historico` |

As duas áreas podem ser visualizadas pelos atalhos na tela de login enquanto a autenticação não for conectada. Esses atalhos não representam autorização de produção.

## Estrutura

```text
src/
├── app/              # composição mínima da aplicação
├── components/       # componentes visuais compartilhados
├── layouts/          # cascas de navegação por público
├── pages/            # telas agrupadas por área
├── routes/           # definição de rotas
├── services/         # integrações externas (Supabase)
├── styles/           # estilos globais e Tailwind
└── types/            # tipos de uso transversal
docs/
└── database-proposal.md
```

Não foram criadas pastas de `features` vazias. Elas entrarão quando houver lógica real de alunos, exercícios, fichas, autenticação ou pagamentos; assim a estrutura continua simples e orientada ao que existe.

## Status atual

- [x] React, TypeScript, Vite, Tailwind e React Router configurados
- [x] Layout administrativo responsivo
- [x] Layout do aluno mobile-first
- [x] Tela de login visual (sem autenticação simulada)
- [x] Cliente Supabase preparado por variáveis de ambiente
- [x] Proposta inicial de banco de dados documentada
- [ ] Schema SQL, RLS e autenticação
- [ ] CRUD de alunos e exercícios
- [ ] Montagem de fichas, registro de treino e mensalidades

## Próximo passo recomendado

Revisar [`docs/database-proposal.md`](docs/database-proposal.md) e decidir o fluxo de criação de contas (convite do Supabase ou cadastro assistido por função server-side). Com isso aprovado, a próxima etapa deve criar migrações, RLS e a autenticação básica antes de iniciar qualquer CRUD.
