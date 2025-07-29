import type { JSX } from 'react';

import { StyledNotFoundPage } from './StyledNotFoundPahe';

export const NotFoundPage = (): JSX.Element => {
  return (
    <StyledNotFoundPage
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <h1>404</h1>
      <p>Ooops... Page not found</p>
    </StyledNotFoundPage>
  );
};
