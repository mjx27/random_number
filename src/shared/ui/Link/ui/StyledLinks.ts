import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import type { ITheme } from '@/app/providers/StyledProvider/models/interfaces';

const linkStyle = (theme: ITheme) => css`
  transition: ${theme.transitions.transitionDefaultFast};
  letter-spacing: 1px;
  border-bottom: 2px solid transparent;
  font-weight: 400;

  &:hover {
    color: ${theme.colorAdd3};
    border-color: ${theme.colorAdd3};
  }
`;

export const StyledLinkDark = styled(Link)(
  (props) => linkStyle(props.theme),
  (props) => ({
    color: `${props.theme.colorTextAdd3}`,
  })
);

export const StyledLinkLight = styled(Link)(
  (props) => linkStyle(props.theme),
  (props) => ({
    color: props.theme.colorTextAdd1,
  })
);

export const StyledLinkActive = styled(Link)((props) => ({
  color: props.theme.colorAdd1,
  letterSpacing: '1px',
  borderBottom: `2px solid ${props.theme.colorAdd1}`,
}));
