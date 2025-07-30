import { createIdentityObject } from '@/shared/utils/createIdentityObject';

export const CInputNames = createIdentityObject({
  REQUIRED: 'REQUIRED',
  DEFAULT: 'DEFAULT',
} as const);
