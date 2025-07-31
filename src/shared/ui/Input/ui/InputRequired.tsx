import type { InputHTMLAttributes, JSX } from 'react';

import type { IErrorProps } from '@/shared/models/interfaces/IError';

import { StyledInput, StyledInputRequired } from './StyledInput';

export const InputRequired = ({
  isError,
  errorMessage,
  setError,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & IErrorProps): JSX.Element => {
  const handleClick = () => setError({ isError: false, errorMessage: '' });
  return (
    <StyledInputRequired isError={isError}>
      {isError && <p>{errorMessage}</p>}
      <StyledInput {...props} onClick={handleClick} />
    </StyledInputRequired>
  );
};
