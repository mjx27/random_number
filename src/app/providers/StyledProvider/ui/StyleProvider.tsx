import { ThemeProvider } from '@emotion/react';
import type { FC, JSX, PropsWithChildren } from 'react';

import { constTheme } from '../lib/constants';

import { GlobalStyles } from './GlobalStyles';

export const StyleProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}): JSX.Element => {
  return (
    <ThemeProvider theme={constTheme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};
