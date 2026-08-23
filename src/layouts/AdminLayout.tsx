import { useState } from 'react'
import { LayoutDashboard, Menu, WalletCards, Dumbbell, UsersRound, ClipboardList, X, LogOut } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { BrandLogo } from '../components/brand/BrandLogo'
import { NavigationLink } from '../components/navigation/NavigationLink'
import type { NavigationItem } from '../types/navigation'

const adminNavigation: NavigationItem[] = [
  { label: 'Visão geral', to: '/admin', icon: LayoutDashboard, end: true },
  { label: 'Alunos', to: '/admin/alunos', icon: UsersRound },
  { label: 'Exercícios', to: '/admin/exercicios', icon: Dumbbell },
  { label: 'Fichas', to: '/admin/fichas', icon: ClipboardList },
  { label: 'Mensalidades', to: '/admin/mensalidades', icon: WalletCards },
]

type AdminNavigationProps = {
  onNavigate?: () => void
}

function AdminNavigation({ onNavigate }: AdminNavigationProps) {
  return (
    <nav aria-label="Navegação administrativa" className="space-y-1">
      {adminNavigation.map((item) => (
        <NavigationLink key={item.to} item={item} onNavigate={onNavigate} />
      ))}
    </nav>
  )
}

export function AdminLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 lg:flex">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-white/8 bg-zinc-900/70 lg:flex">
        <div className="border-b border-white/8 p-5">
          <BrandLogo />
        </div>
        <div className="flex-1 p-3">
          <AdminNavigation />
        </div>
        <div className="border-t border-white/8 p-3">
          <div className="mb-2 flex items-center gap-3 rounded-xl px-3 py-2">
            <div className="flex size-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">AD</div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">Área administrativa</p>
              <p className="text-xs text-zinc-500">Em configuração</p>
            </div>
          </div>
          <Link to="/login" className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white">
            <LogOut aria-hidden="true" size={16} />
            Sair
          </Link>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-white/8 bg-zinc-950/95 px-4 backdrop-blur lg:hidden">
          <BrandLogo compact />
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="rounded-lg p-2 text-zinc-300 hover:bg-white/5"
          >
            <Menu aria-hidden="true" size={22} />
          </button>
        </header>

        {isMenuOpen && (
          <div className="fixed inset-0 z-30 lg:hidden">
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/60"
            />
            <aside className="relative flex h-full w-72 flex-col border-r border-white/10 bg-zinc-900 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/8 p-5">
                <BrandLogo />
                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg p-2 text-zinc-300 hover:bg-white/5"
                >
                  <X aria-hidden="true" size={20} />
                </button>
              </div>
              <div className="flex-1 p-3">
                <AdminNavigation onNavigate={() => setIsMenuOpen(false)} />
              </div>
            </aside>
          </div>
        )}

        <main className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
