import type { ReactNode } from 'react'
import { BrandLogo } from '../components/brand/BrandLogo'

type AuthLayoutProps = {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-4 py-8">
      <div className="pointer-events-none absolute left-1/2 top-1/3 size-96 -translate-x-1/2 rounded-full bg-blue-700/15 blur-3xl" />
      <section className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
        <div className="flex justify-center">
          <BrandLogo />
        </div>
        {children}
      </section>
    </main>
  )
}
