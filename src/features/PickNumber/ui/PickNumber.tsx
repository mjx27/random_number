import { type Dispatch, type JSX } from 'react';

import type { IErrorProps } from '@/shared/models/interfaces/IError';
import { InputRequired } from '@/shared/ui/Input';
import { Layout } from '@/shared/ui/Layout';

import {
  CPickNumberAdvice,
  CPickNumberLength,
  CPickNumberName,
} from '../lib/constants';
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
    const inputElement = e.target;
    const val = inputElement.value.slice(-CPickNumberLength);
    inputElement.style.fontSize = InputSizeHelper.getFontSize(val.length);
    inputElement.style.width = InputSizeHelper.getWidth(val.length);
    setPickedNumber(val === '' ? null : val);
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
