import { ClipboardList, Dumbbell, History, Home, LogOut } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { BrandLogo } from '../components/brand/BrandLogo'
import { NavigationLink } from '../components/navigation/NavigationLink'
import type { NavigationItem } from '../types/navigation'

const studentNavigation: NavigationItem[] = [
  { label: 'Início', to: '/aluno', icon: Home, end: true },
  { label: 'Ficha', to: '/aluno/ficha', icon: ClipboardList },
  { label: 'Treinar', to: '/aluno/treinar', icon: Dumbbell },
  { label: 'Histórico', to: '/aluno/historico', icon: History },
]

export function StudentLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 lg:flex">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-white/8 bg-zinc-900/70 lg:flex">
        <div className="border-b border-white/8 p-5">
          <BrandLogo />
        </div>
        <nav aria-label="Navegação do aluno" className="flex-1 space-y-1 p-3">
          {studentNavigation.map((item) => (
            <NavigationLink key={item.to} item={item} />
          ))}
        </nav>
        <div className="border-t border-white/8 p-3">
          <Link to="/login" className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white">
            <LogOut aria-hidden="true" size={16} />
            Sair
          </Link>
        </div>
      </aside>

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-white/8 bg-zinc-950 px-4 lg:hidden">
          <BrandLogo compact />
          <div className="flex size-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">AL</div>
        </header>
        <main className="mx-auto w-full max-w-xl flex-1 p-4 pb-24 sm:p-6 lg:max-w-4xl lg:p-8">
          <Outlet />
        </main>
        <nav aria-label="Navegação do aluno" className="fixed inset-x-0 bottom-0 z-20 flex border-t border-white/8 bg-zinc-900/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1 backdrop-blur lg:hidden">
          {studentNavigation.map((item) => (
            <NavigationLink key={item.to} item={item} variant="bottom" />
          ))}
        </nav>
      </div>
    </div>
  )
}
