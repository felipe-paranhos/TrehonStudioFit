import { ArrowRight, CalendarDays, Dumbbell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/ui/PageHeader'

export function StudentHomePage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Olá" title="Seu treino" description="Consulte sua ficha, registre cada série e acompanhe sua evolução com poucos toques." />
      <section className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-zinc-900 p-6">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
          <Dumbbell aria-hidden="true" size={24} />
        </div>
        <h2 className="mt-6 text-xl font-bold text-white">Pronto para o treino de hoje?</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-300">Quando sua ficha estiver ativa, os treinos aparecerão aqui com as orientações do professor.</p>
        <Link to="/aluno/ficha" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500">
          Ver minha ficha
          <ArrowRight aria-hidden="true" size={17} />
        </Link>
      </section>
      <section className="rounded-2xl border border-white/8 bg-zinc-900/70 p-5">
        <div className="flex items-center gap-3">
          <CalendarDays aria-hidden="true" size={20} className="text-blue-400" />
          <div>
            <h2 className="font-semibold text-white">Seu histórico ficará disponível aqui</h2>
            <p className="mt-1 text-sm leading-5 text-zinc-400">O sistema mostrará as cargas e repetições do último treino para facilitar o registro de hoje.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
