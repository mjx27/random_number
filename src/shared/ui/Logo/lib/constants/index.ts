import type { ComponentType, HTMLAttributes } from 'react';

import { createIdentityObject } from '@/shared/utils/createIdentityObject';

import type { TLogoStyles } from '../../models/types';
import { StyledLogoDark, StyledLogoLight } from '../../ui/StyledLogos';

export const CLogoStylesNames = createIdentityObject({
  DARK: 'DARK',
  LIGHT: 'LIGHT',
} as const);

export const CLogoStyles: Record<
  TLogoStyles,
  ComponentType<HTMLAttributes<HTMLDivElement>>
> = {
  DARK: StyledLogoDark,
  LIGHT: StyledLogoLight,
};

export const CLogoName = 'RANDOM NUMBER';
