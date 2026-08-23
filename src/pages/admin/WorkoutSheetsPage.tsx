import { ClipboardList } from 'lucide-react'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageHeader } from '../../components/ui/PageHeader'

export function WorkoutSheetsPage() {
  return (
    <div className="space-y-8">
      <PageHeader eyebrow="Planejamento" title="Fichas de treino" description="Cada ficha terá dias de treino e exercícios ordenados. Ao publicar uma nova ficha, a anterior será arquivada em vez de apagada." />
      <EmptyState icon={ClipboardList} title="Nenhuma ficha exibida nesta fundação" description="A implementação futura priorizará a montagem visual dos exercícios, com busca, grupo muscular, thumbnail e prévia de vídeo — não apenas um select de nomes." actionLabel="Modelagem pronta para versionamento" />
    </div>
  )
}
