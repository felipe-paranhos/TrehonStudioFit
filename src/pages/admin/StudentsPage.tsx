import { UsersRound } from 'lucide-react'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageHeader } from '../../components/ui/PageHeader'

export function StudentsPage() {
  return (
    <div className="space-y-8">
      <PageHeader eyebrow="Cadastros" title="Alunos" description="Aqui ficará a gestão de alunos ativos e inativos, mantendo o histórico de fichas, treinos e mensalidades." />
      <EmptyState icon={UsersRound} title="Cadastro de alunos será o próximo módulo" description="A tela já está reservada para listagem, busca e status. O CRUD será implementado somente após definir autenticação, perfis e as políticas de acesso." actionLabel="Sem dados de demonstração" />
    </div>
  )
}
