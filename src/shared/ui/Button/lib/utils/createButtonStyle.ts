import { css } from '@emotion/react';

import type { ITheme } from '@/app/providers/StyledProvider/models/interfaces';

export const createButtonStyle = (theme: ITheme) => css`
  padding: ${theme.paddings.paddingLittle1} ${theme.paddings.paddingLittle2};
  letter-spacing: 1px;
  border-radius: ${theme.borderRadiuses.borderRadiusMedium};
  border: 2px solid;
  transition: ${theme.transitions.transitionDefaultFast};
`;
