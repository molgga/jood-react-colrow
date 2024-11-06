import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { MainLayout } from '@/layouts/components/main-layout';
import { Component as HomeIndex } from '@/pages/home';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeIndex /> },
      { path: 'about', lazy: () => import('@/pages/about/index') },
    ],
  },
];

export const router = createBrowserRouter(routes);
