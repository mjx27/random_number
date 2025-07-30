import { useState, type JSX } from 'react';

import {
  type TPickTypeNames,
  CPickTypeNames,
  PickType,
} from '@/features/PickType';
import { Layout } from '@/shared/ui/Layout';

export const MainPage = (): JSX.Element => {
  const { 0: type, 1: setType } = useState<TPickTypeNames>(CPickTypeNames.MATH);
  return (
    <Layout
      as={'main'}
      display="flex"
      flexDirection="column"
      gap="20px"
      alignItems="center"
    >
      <PickType type={type} setType={setType} />
    </Layout>
  );
};
