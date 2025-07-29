import type { Dispatch, JSX } from 'react';

import type { IErrorProps } from '@/shared/models/interfaces/IError';
import { InputRequired } from '@/shared/ui/Input';
import { Layout } from '@/shared/ui/Layout';

import { CPickNumberAdvice, CPickNumberName } from '../lib/constants';
import { getFontSize, getWidth } from '../lib/utils/getSizes';

interface IProps extends IErrorProps {
  setPickedNumber: Dispatch<number | null>;
  pickedNumber: number | null;
}

export const PickNumber = ({
  pickedNumber,
  setPickedNumber,
  ...errorProps
}: IProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    e.target.style.fontSize = getFontSize(val);
    e.target.style.width = getWidth(val);
    if (val.length > 5) {val = val.slice(-5);}
    setPickedNumber(val === '' ? null : Number(val.slice(-5)));
  };

  return (
    <Layout
      display="flex"
      flexDirection="column"
      gap="10px"
      alignItems="center"
    >
      <InputRequired
        maxLength={5}
        {...errorProps}
        value={pickedNumber ?? ''}
        onChange={handleChange}
        type="number"
      />
      <h3>{CPickNumberName}</h3>
      <p>{CPickNumberAdvice}</p>
    </Layout>
  );
};
