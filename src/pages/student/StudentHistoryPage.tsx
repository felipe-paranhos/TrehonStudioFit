import { History } from 'lucide-react'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageHeader } from '../../components/ui/PageHeader'

export function StudentHistoryPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Evolução" title="Histórico" description="Aqui serão listadas as sessões realizadas, com o detalhamento das séries, cargas e repetições de cada exercício." />
      <EmptyState icon={History} title="Nenhum treino registrado" description="Assim que os registros estiverem disponíveis, você poderá revisar sua evolução sem perder os dados de fichas anteriores." />
    </div>
  )
}
