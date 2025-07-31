import type { ButtonHTMLAttributes, ComponentType } from 'react';

import { createIdentityObject } from '@/shared/utils/createIdentityObject';

import type { TButtonDeafultStyles } from '../../model/types';
import { StyledButtonDefault , StyledButtonDefaultFilled } from '../../ui/StyledButtonsDefault';

export const CButtonDefaultStylesNames = createIdentityObject({
  DEFAULT: 'DEFAULT',
  FILLED: 'FILLED',
} as const);

export const CButtonDefaultStyles: Record<
  TButtonDeafultStyles,
  ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>
> = {
  DEFAULT: StyledButtonDefault,
  FILLED: StyledButtonDefaultFilled,
};
