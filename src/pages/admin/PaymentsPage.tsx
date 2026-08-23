import { WalletCards } from 'lucide-react'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageHeader } from '../../components/ui/PageHeader'

export function PaymentsPage() {
  return (
    <div className="space-y-8">
      <PageHeader eyebrow="Financeiro" title="Mensalidades" description="O controle será manual: competência, valor, vencimento, data de pagamento, forma de pagamento, status e observação." />
      <EmptyState icon={WalletCards} title="Controle financeiro ainda não conectado" description="Não haverá gateway, PIX, cartão integrado ou webhook. Esta área servirá para registrar e acompanhar mensalidades internamente." actionLabel="Registro manual planejado" />
    </div>
  )
}
