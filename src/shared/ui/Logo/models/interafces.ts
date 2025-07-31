import type { HTMLAttributes } from 'react';

import type { TLogoStyles } from './types';

export interface ILogo extends HTMLAttributes<HTMLDivElement> {
  styleType: TLogoStyles;
}
