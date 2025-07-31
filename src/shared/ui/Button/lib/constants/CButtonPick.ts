import type { ButtonHTMLAttributes, ComponentType } from 'react';

import { createIdentityObject } from '@/shared/utils/createIdentityObject';

import type { IStyledButtonPick } from '../../model/interfaces';
import type { TButtonPickStyles } from '../../model/types';
import {
  StyledButtonDark,
  StyledButtonLight,
} from '../../ui/StyledButtonsPick';

export const CButtonPickStylesNames = createIdentityObject({
  DARK: 'DARK',
  LIGHT: 'LIGHT',
} as const);

export const CButtonPickStyles: Record<
  TButtonPickStyles,
  ComponentType<ButtonHTMLAttributes<HTMLButtonElement> & IStyledButtonPick>
> = {
  [CButtonPickStylesNames.DARK]: StyledButtonDark,
  [CButtonPickStylesNames.LIGHT]: StyledButtonLight,
} as const;
