import { Dumbbell } from 'lucide-react'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageHeader } from '../../components/ui/PageHeader'

export function StudentTrainingPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Registrar" title="Treinar" description="Cada exercício permitirá registrar carga e repetições por série, com referência ao último treino realizado." />
      <EmptyState icon={Dumbbell} title="Selecione uma ficha para começar" description="O registro de treino será liberado quando houver uma ficha ativa. Os dados serão salvos por sessão, exercício e série para manter o histórico detalhado." />
    </div>
  )
}
