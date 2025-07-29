import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { ITheme } from '@/app/providers/StyledProvider/models/interfaces';

const buttonStyle = (theme: ITheme) => css`
  padding: ${theme.paddings.paddingLittle1} ${theme.paddings.paddingLittle2};
  letter-spacing: 1px;
  border-radius: ${theme.borderRadiuses.borderRadiusMedium};
  border: 2px solid;
  transition: ${theme.transitions.transitionDefaultFast};

  &:hover {
    color: ${theme.colorAdd3};
    border-color: ${theme.colorAdd3};
  }
`;

export const StyledButtonDark = styled.button(
  (props) => buttonStyle(props.theme),
  (props) => ({
    color: `${props.theme.colorTextAdd1}`,
    borderColor: `${props.theme.colorAdd1}`,
  })
);

export const StyledButtonLight = styled.button(
  (props) => buttonStyle(props.theme),
  (props) => ({
    color: `${props.theme.colorTextAdd2}`,
    borderColor: `${props.theme.colorAdd2}`,
  })
);

export const StyledButtonActive = styled.button((props) => ({
  padding: `${props.theme.paddings.paddingLittle1} ${props.theme.paddings.paddingLittle2}`,
  color: props.theme.colorTextAdd3,
  letterSpacing: '1px',
  border: `2px solid ${props.theme.colorTextAdd3}`,
  borderRadius: props.theme.borderRadiuses.borderRadiusMedium,
}));
