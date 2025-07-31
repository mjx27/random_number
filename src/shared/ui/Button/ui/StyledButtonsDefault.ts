import styled from '@emotion/styled';

import { createButtonStyle } from '../lib/utils/createButtonStyle';

export const StyledButtonDefault = styled.button(
  ({ theme }) => createButtonStyle(theme),
  ({ theme }) => ({
    borderColor: theme.colorAdd3,
    color: theme.colorAdd3,

    '&:hover': {
      color: theme.colorMain,
    },
  })
);

export const StyledButtonDefaultFilled = styled.button(
  ({ theme }) => createButtonStyle(theme),
  ({ theme }) => ({
    borderColor: theme.colorAdd3,
    color: theme.colorMain,
    backgroundColor: theme.colorAdd3,

    '&:hover': {
      color: theme.colorAdd3,
      backgroundColor: 'transparent',
    },
  })
);
