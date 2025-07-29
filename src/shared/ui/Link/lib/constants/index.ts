import { createIdentityObject } from '@shared/utils/createIdentityObject';

import type { TLinkComponentsMap } from '../../model/types';
import {
  StyledLinkActive,
  StyledLinkDark,
  StyledLinkLight,
} from '../../ui/StyledLinks';

export const CLinkStylesNames = createIdentityObject({
  dark: 'dark',
  light: 'light',
  active: 'active',
} as const);

export const CLinkStyles: TLinkComponentsMap = {
  dark: StyledLinkDark,
  light: StyledLinkLight,
  active: StyledLinkActive,
} as const;
