import axios from 'axios';

import type { IFact } from '@/entities/Fact';
import type { TPickTypeNames } from '@/features/PickType';

import { CAPI_NUMBER, CNumberFactKey } from '../constants';

export class NumberService {
  public static async fetchRandomFact(type: TPickTypeNames): Promise<string> {
    const response = await axios.get(
      `${CAPI_NUMBER}/random/${type.toLowerCase()}`
    );
    return response.data;
  }

  public static async fetchNumberFact(
    number: string,
    type: TPickTypeNames
  ): Promise<string> {
    const response = await axios.get(
      `${CAPI_NUMBER}/${number}/${type.toLowerCase()}`
    );
    return response.data;
  }

  public static saveFactToStorage(fact: IFact): void {
    localStorage.setItem(CNumberFactKey, JSON.stringify(fact));
  }
}
