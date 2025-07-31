import { css } from '@emotion/react';

import type { TLayoutProps } from '@/shared/models/types/TStyles';

export const createLayout = (props: TLayoutProps) => css`
  padding: ${props.padding};
  display: ${props.display};
  flex-direction: ${props.flexDirection};
  place-items: ${props.alignItems} ${props.justifyItems};
  place-content: ${props.alignContent} ${props.justifyContent};
  gap: ${props.gap};
  grid-template: ${props.gridTemplate};
`;
