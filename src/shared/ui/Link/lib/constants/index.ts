import type { ComponentType } from 'react';
import type { LinkProps } from 'react-router-dom';

import { createIdentityObject } from '@/shared/utils/createIdentityObject';

import type { TLinkStyle } from '../../model/types';
import {
  StyledLinkActive,
  StyledLinkDark,
  StyledLinkLight,
} from '../../ui/StyledLinks';

export const CLinkStylesNames = createIdentityObject({
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  ACTIVE: 'ACTIVE',
} as const);

export const CLinkStyles: Record<TLinkStyle, ComponentType<LinkProps>> = {
  [CLinkStylesNames.DARK]: StyledLinkDark,
  [CLinkStylesNames.LIGHT]: StyledLinkLight,
  [CLinkStylesNames.ACTIVE]: StyledLinkActive,
} as const;
