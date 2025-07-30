import type { ButtonHTMLAttributes, ComponentType } from 'react';

import { createIdentityObject } from '@/shared/utils/createIdentityObject';

import type { IStyledButton } from '../../model/interfaces';
import type { TButtonStyles } from '../../model/types';
import { StyledButtonDark, StyledButtonLight } from '../../ui/StyledButtons';

export const CButtonStylesNames = createIdentityObject({
  DARK: 'DARK',
  LIGHT: 'LIGHT',
} as const);

export const CButtonStyles: Record<
  TButtonStyles,
  ComponentType<ButtonHTMLAttributes<HTMLButtonElement> & IStyledButton>
> = {
  [CButtonStylesNames.DARK]: StyledButtonDark,
  [CButtonStylesNames.LIGHT]: StyledButtonLight,
} as const;
