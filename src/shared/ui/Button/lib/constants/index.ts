import type { ButtonHTMLAttributes, ComponentType } from 'react';

import { createIdentityObject } from '@/shared/utils/createIdentityObject';

import type { TButtonStyles } from '../../model/types';
import {
  StyledButtonActive,
  StyledButtonDark,
  StyledButtonLight,
} from '../../ui/StyledButtons';

export const CButtonStylesNames = createIdentityObject({
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  ACTIVE: 'ACTIVE',
} as const);

export const CButtonStyles: Record<
  TButtonStyles,
  ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>
> = {
  [CButtonStylesNames.DARK]: StyledButtonDark,
  [CButtonStylesNames.LIGHT]: StyledButtonLight,
  [CButtonStylesNames.ACTIVE]: StyledButtonActive,
} as const;
