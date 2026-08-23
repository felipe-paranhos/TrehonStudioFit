import { NavLink } from 'react-router-dom'
import type { NavigationItem } from '../../types/navigation'

type NavigationLinkProps = {
  item: NavigationItem
  onNavigate?: () => void
  variant?: 'sidebar' | 'bottom'
}

export function NavigationLink({
  item,
  onNavigate,
  variant = 'sidebar',
}: NavigationLinkProps) {
  const Icon = item.icon

  return (
    <NavLink
      end={item.end}
      to={item.to}
      onClick={onNavigate}
      className={({ isActive }) => {
        if (variant === 'bottom') {
          return [
            'flex min-w-14 flex-1 flex-col items-center gap-1 rounded-xl px-2 py-2 text-[10px] font-medium transition-colors',
            isActive ? 'text-blue-400' : 'text-zinc-500 hover:text-zinc-300',
          ].join(' ')
        }

        return [
          'flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors',
          isActive
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/40'
            : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-100',
        ].join(' ')
      }}
    >
      <Icon aria-hidden="true" size={variant === 'bottom' ? 20 : 18} strokeWidth={1.8} />
      <span>{item.label}</span>
    </NavLink>
  )
}
