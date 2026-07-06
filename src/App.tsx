import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/layout/RootLayout'

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage })),
)
const ProjectsPage = lazy(() =>
  import('@/pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })),
)
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
)
const ResumePage = lazy(() =>
  import('@/pages/ResumePage').then((m) => ({ default: m.ResumePage })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const CaseStudyPage = lazy(() =>
  import('@/pages/CaseStudyPage').then((m) => ({ default: m.CaseStudyPage })),
)

function PageLoader() {
  return (
    <div className="paper-texture flex min-h-screen items-center justify-center">
      <div className="h-1 w-16 animate-pulse rounded-full bg-[var(--color-beige)] dark:bg-[var(--color-beige-dark)]" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:slug" element={<CaseStudyPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
