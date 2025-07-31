import type { Dispatch } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { TPickTypeNames } from '@/features/PickType';
import { CRoutesPaths } from '@/shared/constants/CRoutes';
import type { IError } from '@/shared/models/interfaces/IError';

import { CErrorGetNumberMessages } from '../constants';

import { NumberService } from './NumberService';
import { NumberValidation } from './NumberValidation';

export const useNumberFacts = (setError: Dispatch<IError>) => {
  const navigate = useNavigate();

  const handleFactResponse = (data: string, type: TPickTypeNames) => {
    const fact = { fact: data, type };
    NumberService.saveFactToStorage(fact);
    navigate(CRoutesPaths.RESULT_PAGE, { replace: true });
  };

  const getRandomFact = async (type: TPickTypeNames) => {
    try {
      const data = await NumberService.fetchRandomFact(type);
      handleFactResponse(data, type);
    } catch {
      setError({
        isError: true,
        errorMessage: CErrorGetNumberMessages.NOT_FETCHED,
      });
    }
  };

  const getNumberFact = useCallback(
    async (number: string | null, type: TPickTypeNames) => {
      const validation = NumberValidation.validateInputNumber(number);
      if (validation.isError) {
        setError(validation);
        return;
      }

      try {
        const data = await NumberService.fetchNumberFact(number!, type);
        handleFactResponse(data, type);
      } catch {
        setError({
          isError: true,
          errorMessage: CErrorGetNumberMessages.NOT_FETCHED,
        });
      }
    },
    [handleFactResponse, setError]
  );

  return { getRandomFact, getNumberFact };
};
