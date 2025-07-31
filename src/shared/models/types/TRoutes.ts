import type { CRoutesPaths } from '@/shared/constants/CRoutes';

export type TRoutesPaths = (typeof CRoutesPaths)[keyof typeof CRoutesPaths];
