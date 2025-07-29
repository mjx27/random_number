import type { Dispatch } from 'react';

export interface IInput {
  setValue: Dispatch<number | string>;
  value: number | string;
  type: 'number' | 'text';
  name: string;
}
