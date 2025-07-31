import type { Dispatch, JSX } from 'react';

import { useNumberFacts } from '@/entities/Fact';
import type { TPickTypeNames } from '@/features/PickType';
import type { IError } from '@/shared/models/interfaces/IError';
import { CButtonDefaultStylesNames } from '@/shared/ui/Button/lib/constants/CButtonDefault';
import { ButtonDefault } from '@/shared/ui/Button/ui/ButtonDefault';
import { Layout } from '@/shared/ui/Layout';


interface IProps {
  setError: Dispatch<IError>;
  pickedNumber: null | string;
  type: TPickTypeNames;
}

export const GetResult = ({
  setError,
  type,
  pickedNumber,
}: IProps): JSX.Element => {
  const { getRandomFact, getNumberFact } = useNumberFacts(setError);
  const handleClickNumber =
    (pickedNumber: null | string, type: TPickTypeNames) => () => {
      getNumberFact(pickedNumber, type);
    };
  const handleClicRandom = (type: TPickTypeNames) => () => {
    getRandomFact(type);
  };
  return (
    <Layout display="flex" gap="20px">
      <ButtonDefault
        styleType={CButtonDefaultStylesNames.FILLED}
        onClick={handleClickNumber(pickedNumber, type)}
        aria-label="Generate fact for entered number"
      >
        Generate
      </ButtonDefault>

      <ButtonDefault
        styleType={CButtonDefaultStylesNames.FILLED}
        onClick={handleClicRandom(type)}
        aria-label="Generate random fact"
      >
        Random
      </ButtonDefault>
    </Layout>
  );
};
