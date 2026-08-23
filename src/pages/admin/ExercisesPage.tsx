import { Dumbbell } from 'lucide-react'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageHeader } from '../../components/ui/PageHeader'

export function ExercisesPage() {
  return (
    <div className="space-y-8">
      <PageHeader eyebrow="Biblioteca" title="Exercícios" description="O catálogo terá busca por nome e aliases, grupo muscular, equipamento, thumbnail e acesso rápido ao vídeo demonstrativo." />
      <EmptyState icon={Dumbbell} title="Biblioteca de exercícios ainda vazia" description="Os vídeos não serão enviados ao backend: o catálogo armazenará somente a URL ou identificador do provedor externo e seus metadados." actionLabel="Catálogo será criado na próxima etapa" />
    </div>
  )
}
