import { ClipboardList, CreditCard, Dumbbell, UsersRound } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'

const overviewItems = [
  { label: 'Alunos ativos', icon: UsersRound, detail: 'Aguardando conexão com o Supabase' },
  { label: 'Fichas ativas', icon: ClipboardList, detail: 'Aguardando conexão com o Supabase' },
  { label: 'Exercícios', icon: Dumbbell, detail: 'Aguardando conexão com o Supabase' },
  { label: 'Mensalidades do mês', icon: CreditCard, detail: 'Aguardando conexão com o Supabase' },
]

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Administração"
        title="Visão geral"
        description="O painel reunirá alunos, fichas, exercícios e mensalidades da sua academia. Nesta etapa, os dados reais ainda não são carregados."
      />
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overviewItems.map(({ label, icon: Icon, detail }) => (
          <article key={label} className="rounded-2xl border border-white/8 bg-zinc-900/70 p-5">
            <Icon aria-hidden="true" size={20} className="text-blue-400" />
            <h2 className="mt-7 text-sm font-medium text-zinc-300">{label}</h2>
            <p className="mt-1 text-sm text-zinc-500">{detail}</p>
          </article>
        ))}
      </section>
      <section className="rounded-2xl border border-dashed border-white/12 bg-zinc-900/40 p-6">
        <h2 className="font-semibold text-white">Próxima conexão</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">Depois da revisão desta fundação, a primeira funcionalidade recomendada é autenticação e perfis. Só então os números e a navegação serão alimentados com dados da academia com segurança.</p>
      </section>
    </div>
  )
}
