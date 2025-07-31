import type { IError } from '@/shared/models/interfaces/IError';

import { CErrorGetNumberMessages } from '../constants';

export class NumberValidation {
  public static validateInputNumber(number: string | null): IError {
    if (!number) {
      return { isError: true, errorMessage: CErrorGetNumberMessages.EMPTY };
    }

    if (!/^\d+$/.test(number)) {
      return {
        isError: true,
        errorMessage: CErrorGetNumberMessages.WRONG_FORMAT,
      };
    }

    return { isError: false };
  }
}
