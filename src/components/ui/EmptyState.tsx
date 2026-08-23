import type { LucideIcon } from 'lucide-react'

type EmptyStateProps = {
  icon: LucideIcon
  title: string
  description: string
  actionLabel?: string
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
}: EmptyStateProps) {
  return (
    <section className="rounded-2xl border border-white/8 bg-zinc-900/70 p-8 text-center sm:p-10">
      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        <Icon aria-hidden="true" size={27} strokeWidth={1.6} />
      </div>
      <h2 className="mt-5 text-lg font-semibold text-white">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-400">{description}</p>
      {actionLabel && (
        <span className="mt-5 inline-flex rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-zinc-500">
          {actionLabel}
        </span>
      )}
    </section>
  )
}
