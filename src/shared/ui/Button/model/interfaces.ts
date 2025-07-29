import type { ButtonHTMLAttributes } from 'react';

import type { TButtonStyles } from './types';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: TButtonStyles;
}
