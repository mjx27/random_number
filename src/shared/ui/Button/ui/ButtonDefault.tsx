import type { JSX } from 'react';

import { CButtonDefaultStyles } from '../lib/constants/CButtonDefault';
import type { IButtonDefault } from '../model/interfaces';

export const ButtonDefault = ({
  styleType,
  ...props
}: IButtonDefault): JSX.Element => {
  const Element = CButtonDefaultStyles[styleType];
  return <Element {...props} />;
};
