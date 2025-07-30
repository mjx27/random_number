import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { ITheme } from '@/app/providers/StyledProvider/models/interfaces';

interface IProps {
  isActive: boolean;
}

const buttonStyle = (theme: ITheme, { isActive }: IProps) => css`
  padding: ${theme.paddings.paddingLittle1} ${theme.paddings.paddingLittle2};
  letter-spacing: 1px;
  border-radius: ${theme.borderRadiuses.borderRadiusMedium};
  border: 2px solid;
  transition: ${theme.transitions.transitionDefaultFast};
  ${isActive ? activeStyles(theme) : unActiveStyles(theme)}
`;

const activeStyles = (theme: ITheme) => css`
  color: ${theme.colorTextAdd3};
  border-color: ${theme.colorTextAdd3};
`;

const unActiveStyles = (theme: ITheme) => css`
  :hover {
    color: ${theme.colorAdd3};
    border-color: ${theme.colorAdd3};
  }
`;

export const StyledButtonDark = styled.button<IProps>(
  (props) => ({
    color: `${props.theme.colorTextAdd1}`,
    borderColor: `${props.theme.colorAdd1}`,
  }),
  (props) => buttonStyle(props.theme, { isActive: props.isActive })
);

export const StyledButtonLight = styled.button<IProps>(
  (props) => ({
    color: `${props.theme.colorTextAdd2}`,
    borderColor: `${props.theme.colorAdd2}`,
  }),
  (props) => buttonStyle(props.theme, { isActive: props.isActive })
);
