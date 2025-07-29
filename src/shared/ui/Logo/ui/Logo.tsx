import type { JSX } from 'react';

import { CLogoName, CLogoStyles } from '../lib/constants';
import type { ILogo } from '../models/interafces';

export const Logo = ({ styleType }: ILogo): JSX.Element => {
  const Element = CLogoStyles[styleType];
  return <Element>{CLogoName}</Element>;
};
