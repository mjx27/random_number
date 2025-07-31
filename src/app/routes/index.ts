import { createElement } from 'react';

import type { IRoute } from '@/shared/models/interfaces/IRoutes';

import { NotFoundPage } from '../pages/NotFoundPage';
import { ResultPage } from '../pages/Results';

import { MainPage } from './../pages/Main';

export const CRoutes: IRoute[] = [
  { path: '/', element: createElement(MainPage) },
  { path: '/result', element: createElement(ResultPage) },
  { path: '*', element: createElement(NotFoundPage) },
];
