import { type Dispatch, type JSX } from 'react';

import type { IErrorProps } from '@/shared/models/interfaces/IError';
import { InputRequired } from '@/shared/ui/Input';
import { Layout } from '@/shared/ui/Layout';

import { CPickNumberAdvice, CPickNumberName } from '../lib/constants';
import { InputSizeHelper } from '../lib/utils/InputSizeHelper';

interface IProps extends IErrorProps {
  setPickedNumber: Dispatch<string | null>;
  pickedNumber: string | null;
}

export const PickNumber = ({
  pickedNumber,
  setPickedNumber,
  ...errorProps
}: IProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    e.target.style.fontSize = InputSizeHelper.getFontSize(val);
    e.target.style.width = InputSizeHelper.getWidth(val);
    setPickedNumber(val === '' ? null : val.slice(-5));
  };

  return (
    <Layout
      display="flex"
      flexDirection="column"
      gap="10px"
      alignItems="center"
    >
      <InputRequired
        {...errorProps}
        value={pickedNumber ?? ''}
        onChange={handleChange}
        type="text"
      />
      <h3>{CPickNumberName}</h3>
      <p>{CPickNumberAdvice}</p>
    </Layout>
  );
};
