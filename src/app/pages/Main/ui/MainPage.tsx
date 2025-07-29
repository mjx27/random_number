import { useState, type JSX } from 'react';

import { PickNumber } from '@/features/PickNumber';
import type { IError } from '@/shared/models/interfaces/IError';
import { Layout } from '@/shared/ui/Layout';

export const MainPage = (): JSX.Element => {
  const { 0: pickedNumber, 1: setPickedNumber } = useState<number | null>(null);
  const { 0: error, 1: setError } = useState<IError>({
    errorMessage: '',
    isError: false,
  });
  return (
    <Layout
      as={'main'}
      display="flex"
      flexDirection="column"
      gap="20px"
      alignItems="center"
    >
      <PickNumber
        {...error}
        setError={setError}
        pickedNumber={pickedNumber}
        setPickedNumber={setPickedNumber}
      />
    </Layout>
  );
};
