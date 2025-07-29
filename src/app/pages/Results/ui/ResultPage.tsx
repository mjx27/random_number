import type { JSX } from 'react';

import { Layout } from '@/shared/ui/Layout';

export const ResultPage = (): JSX.Element => {
  return (
    <Layout
      as={'main'}
      display="flex"
      flexDirection="column"
      gap="20px"
      alignItems="center"
    ></Layout>
  );
};
