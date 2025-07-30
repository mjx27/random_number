import type { Dispatch } from 'react';

export interface IError {
  errorMessage: string;
  isError: boolean;
}

export interface IErrorProps extends IError {
  setError: Dispatch<IError>;
}
