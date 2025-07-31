import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { ITheme } from '@/app/providers/StyledProvider/models/interfaces';
import type { IError } from '@/shared/models/interfaces/IError';

const InputStyles = (theme: ITheme) => css`
  padding: ${theme.paddings.paddingLittle2} ${theme.paddings.paddingMedium};
  border: 2px solid ${theme.colorAdd2};
  border-radius: ${theme.borderRadiuses.borderRadiusMedium};
  color: ${theme.colorTextAdd2};
`;

export const StyledInputRequired = styled.div<Pick<IError, 'isError'>>(
  (props) => ({
    position: 'relative',
    width: 'auto',

    '&>p': {
      padding: props.theme.paddings.paddingLittle1,
      position: 'absolute',
      zIndex: 1,
      top: '-15px',
      left: '5px',
      color: '#F00',
      backgroundColor: props.theme.colorMain,
    },

    '&>input': {
      height: '100%',
      width: '10vw',
      border: `2px solid ${props.isError ? '#FF0000' : props.theme.colorAdd2}`,
      textAlign: 'center',
      fontSize: '10vw',
      borderRadius: props.theme.borderRadiuses.borderRadiusLittle,

      '&:focus': {
        borderColor: 'transparent',
        color: props.theme.colorAdd3,
      },
    },
  })
);

export const StyledInput = styled.input((props) => InputStyles(props.theme));
