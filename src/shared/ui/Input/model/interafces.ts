import type { Dispatch } from 'react';

import type { TInputAttributeType } from './types';

export interface IInput {
  setValue: Dispatch<number | string>;
  value: number | string;
  type: TInputAttributeType;
  name: string;
}
