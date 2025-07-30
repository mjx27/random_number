import type { ButtonHTMLAttributes } from 'react';

import type { TButtonStyles } from './types';
export interface IStyledButton {
  isActive: boolean;
}
export interface IButton
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IStyledButton {
  styleType: TButtonStyles;
}
