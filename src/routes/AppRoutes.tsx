import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminLayout } from '../layouts/AdminLayout'
import { StudentLayout } from '../layouts/StudentLayout'
import { DashboardPage } from '../pages/admin/DashboardPage'
import { ExercisesPage } from '../pages/admin/ExercisesPage'
import { PaymentsPage } from '../pages/admin/PaymentsPage'
import { StudentsPage } from '../pages/admin/StudentsPage'
import { WorkoutSheetsPage } from '../pages/admin/WorkoutSheetsPage'
import { LoginPage } from '../pages/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { StudentHistoryPage } from '../pages/student/StudentHistoryPage'
import { StudentHomePage } from '../pages/student/StudentHomePage'
import { StudentSheetPage } from '../pages/student/StudentSheetPage'
import { StudentTrainingPage } from '../pages/student/StudentTrainingPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="alunos" element={<StudentsPage />} />
        <Route path="exercicios" element={<ExercisesPage />} />
        <Route path="fichas" element={<WorkoutSheetsPage />} />
        <Route path="mensalidades" element={<PaymentsPage />} />
      </Route>

      <Route path="/aluno" element={<StudentLayout />}>
        <Route index element={<StudentHomePage />} />
        <Route path="ficha" element={<StudentSheetPage />} />
        <Route path="treinar" element={<StudentTrainingPage />} />
        <Route path="historico" element={<StudentHistoryPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
