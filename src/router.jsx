import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy-loaded detail pages — only downloaded when visited
const ProjectDetail   = lazy(() => import('./pages/ProjectDetail'));
const ConsultingDetail = lazy(() => import('./pages/ConsultingDetail'));
const NotFound        = lazy(() => import('./pages/NotFound'));

// Shared fallback shown while the chunk downloads
const PageFallback = () => (
  <div className="min-h-screen bg-bg-primary flex items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <Suspense fallback={<PageFallback />}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'project/:projectId',
        element: (
          <Suspense fallback={<PageFallback />}>
            <ProjectDetail />
          </Suspense>
        ),
      },
      {
        path: 'consulting/:consultingId',
        element: (
          <Suspense fallback={<PageFallback />}>
            <ConsultingDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;