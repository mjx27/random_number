import type { Dispatch, JSX } from 'react';

import { Button, CButtonStylesNames } from '@/shared/ui/Button';
import { Layout } from '@/shared/ui/Layout';

import { CPickTypesArray } from '../lib/constants';
import type { TPickTypeNames } from '../model/types';

interface IProps {
  type: TPickTypeNames;
  setType: Dispatch<TPickTypeNames>;
}

export const PickType = ({ type, setType }: IProps): JSX.Element => {
  const handleClick = (type: TPickTypeNames) => () => setType(type);
  return (
    <Layout display="flex" gap="20px">
      {CPickTypesArray.map((pickType) => (
        <Button
          onClick={handleClick(pickType)}
          styleType={CButtonStylesNames.LIGHT}
          isActive={type === pickType}
        >
          {pickType}
        </Button>
      ))}
    </Layout>
  );
};
