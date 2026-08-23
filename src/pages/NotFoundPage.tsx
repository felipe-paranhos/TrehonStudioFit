import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-6 text-center text-zinc-100">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">404</p>
        <h1 className="mt-2 text-3xl font-bold">Página não encontrada</h1>
        <Link to="/login" className="mt-6 inline-flex rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500">Voltar para o login</Link>
      </div>
    </main>
  )
}
