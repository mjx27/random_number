import { createIdentityObject } from '@/shared/utils/createIdentityObject';

export const CPickTypeNames = createIdentityObject({
  MATH: 'MATH',
  TRIVIA: 'TRIVIA',
  DATE: 'DATE',
  YEAR: 'YEAR',
} as const);

export const CPickTypesArray = Object.values(CPickTypeNames);
