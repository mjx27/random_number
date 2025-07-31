import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { ITheme } from '@/app/providers/StyledProvider/models/interfaces';

import { createButtonStyle } from '../lib/utils/createButtonStyle';

interface IProps {
  isActive: boolean;
}

const buttonPickStyle = (theme: ITheme, { isActive }: IProps) => css`
  ${isActive ? activeStyles(theme) : unActiveStyles(theme)}
  ${createButtonStyle(theme)}
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
  (props) => buttonPickStyle(props.theme, { isActive: props.isActive })
);

export const StyledButtonLight = styled.button<IProps>(
  (props) => ({
    color: `${props.theme.colorTextAdd2}`,
    borderColor: `${props.theme.colorAdd2}`,
  }),
  (props) => buttonPickStyle(props.theme, { isActive: props.isActive })
);
