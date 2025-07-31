import type { ButtonHTMLAttributes } from 'react';

import type { TButtonPickStyles, TButtonDeafultStyles } from './types';
export interface IStyledButtonPick {
  isActive: boolean;
}
export interface IButtonPick
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IStyledButtonPick {
  styleType: TButtonPickStyles;
}

export interface IButtonDefault
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: TButtonDeafultStyles;
}
