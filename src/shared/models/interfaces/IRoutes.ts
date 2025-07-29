import type { JSX } from '@emotion/react/jsx-runtime';

import type { TRoutesPaths } from '../types/TRoutes';

export interface IRoute {
  path: TRoutesPaths;
  element: JSX.Element;
}
