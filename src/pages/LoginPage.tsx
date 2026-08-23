import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('A autenticação será conectada ao Supabase na próxima etapa. Nenhuma credencial é validada nesta fundação.')
  }

  return (
    <AuthLayout>
      <div className="mt-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">Acesso seguro</p>
        <h1 className="mt-2 text-2xl font-bold text-white">Entre na sua conta</h1>
        <p className="mt-2 text-sm leading-6 text-zinc-400">Gerencie a academia ou acompanhe seu treino pelo celular.</p>
      </div>

      <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-zinc-200">
          E-mail
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="voce@exemplo.com"
            className="mt-2 block w-full rounded-xl border border-white/10 bg-black/20 px-3.5 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-blue-500"
          />
        </label>
        <label className="block text-sm font-medium text-zinc-200">
          Senha
          <span className="relative mt-2 block">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="block w-full rounded-xl border border-white/10 bg-black/20 px-3.5 py-3 pr-12 text-white outline-none placeholder:text-zinc-600 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              className="absolute inset-y-0 right-0 px-3 text-zinc-500 hover:text-zinc-200"
            >
              {showPassword ? <EyeOff aria-hidden="true" size={18} /> : <Eye aria-hidden="true" size={18} />}
            </button>
          </span>
        </label>
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/40 transition-colors hover:bg-blue-500">
          Entrar
          <ArrowRight aria-hidden="true" size={17} />
        </button>
      </form>

      {message && <p role="status" className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-sm leading-5 text-blue-200">{message}</p>}

      <div className="mt-6 rounded-xl border border-white/8 bg-black/20 p-4 text-sm text-zinc-400">
        <div className="flex items-center gap-2 text-zinc-300">
          <ShieldCheck aria-hidden="true" size={17} className="text-blue-400" />
          <span className="font-medium">Fundação sem acesso simulado</span>
        </div>
        <p className="mt-2 leading-5">Use os atalhos abaixo apenas para revisar os layouts enquanto a autenticação ainda não foi implementada.</p>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <Link to="/admin" className="rounded-xl border border-white/10 px-3 py-3 text-center text-sm font-medium text-zinc-200 transition-colors hover:border-blue-500/50 hover:bg-blue-500/10">Ver área administrativa</Link>
        <Link to="/aluno" className="rounded-xl border border-white/10 px-3 py-3 text-center text-sm font-medium text-zinc-200 transition-colors hover:border-blue-500/50 hover:bg-blue-500/10">Ver área do aluno</Link>
      </div>
    </AuthLayout>
  )
}
