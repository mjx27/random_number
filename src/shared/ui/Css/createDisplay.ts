import { css } from '@emotion/react';

import type { TDisplayProps } from '@/shared/models/types/TStyles';

export const createDisplay = (props: TDisplayProps) => css`
  display: ${props.display};
  flex-direction: ${props.flexDirection};
  place-items: ${props.alignItems} ${props.justifyItems};
  place-content: ${props.alignContent} ${props.justifyContent};
  gap: ${props.gap};
  grid-template: ${props.gridTemplate};
`;
