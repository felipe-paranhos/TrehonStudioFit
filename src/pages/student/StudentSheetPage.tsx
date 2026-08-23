import { ClipboardList } from 'lucide-react'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageHeader } from '../../components/ui/PageHeader'

export function StudentSheetPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Minha rotina" title="Ficha de treino" description="Os dias de treino e seus exercícios serão apresentados em cartões de leitura rápida, próprios para uso durante o treino." />
      <EmptyState icon={ClipboardList} title="Nenhuma ficha ativa" description="Quando o professor publicar sua ficha, ela aparecerá aqui. Fichas anteriores continuam preservadas no histórico da academia." />
    </div>
  )
}
