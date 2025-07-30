import { useState, type JSX } from 'react';

import { PickNumber } from '@/features/PickNumber';
import {
  type TPickTypeNames,
  CPickTypeNames,
  PickType,
} from '@/features/PickType';
import type { IError } from '@/shared/models/interfaces/IError';
import { Layout } from '@/shared/ui/Layout';

export const MainPage = (): JSX.Element => {
  const { 0: pickedNumber, 1: setPickedNumber } = useState<string | null>(null);
  const { 0: error, 1: setError } = useState<IError>({
    errorMessage: '',
    isError: false,
  });
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
      <PickNumber
        {...error}
        setError={setError}
        pickedNumber={pickedNumber}
        setPickedNumber={setPickedNumber}
      />
    </Layout>
  );
};
