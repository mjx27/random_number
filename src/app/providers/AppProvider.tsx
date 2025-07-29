import type { JSX, FC, PropsWithChildren } from 'react';

import { StyleProvider } from './StyledProvider';

export const AppProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}): JSX.Element => {
  return <StyleProvider>{children}</StyleProvider>;
};
