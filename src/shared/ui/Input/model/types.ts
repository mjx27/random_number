import type { CInputNames } from '../lib/constants';

export type TInputTypes = keyof typeof CInputNames;
export type TInputAttributeType = 'number' | 'text';
