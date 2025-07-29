import type { JSX } from 'react';
import { useNavigate } from 'react-router-dom';

import { CLogoName, CLogoStyles } from '../lib/constants';
import type { ILogo } from '../models/interafces';

export const Logo = ({ styleType }: ILogo): JSX.Element => {
  const navigate = useNavigate();
  const Element = CLogoStyles[styleType];
  const handleClick = () => {
    void navigate('/', { replace: true });
  };
  return <Element onClick={handleClick}>{CLogoName}</Element>;
};
