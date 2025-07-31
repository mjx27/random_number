import type { IError } from '@/shared/models/interfaces/IError';

export interface IGetData {
  isError: IError;
  data: string;
}
