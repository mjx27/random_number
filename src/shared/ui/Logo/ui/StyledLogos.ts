import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { ITheme } from '@/app/providers/StyledProvider/models/interfaces';

const logoStyle = (theme: ITheme) => css`
  padding: ${theme.paddings.paddingLittle2} ${theme.paddings.paddingBig};
  height: 100%;
  letter-spacing: 2px;
  font-size: 2rem;
  border: 2px solid;
  border-radius: ${theme.borderRadiuses.borderRadiusMedium};
`;

export const StyledLogoDark = styled.div(
  (props) => logoStyle(props.theme),
  (props) => ({
    color: props.theme.colorAdd1,
    borderColor: props.theme.colorAdd1,
  })
);

export const StyledLogoLight = styled.div(
  (props) => logoStyle(props.theme),
  (props) => ({
    color: props.theme.colorAdd3,
    borderColor: props.theme.colorAdd3,
  })
);
