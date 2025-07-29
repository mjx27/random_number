import type { JSX } from 'react';

import { CButtonStyles } from '../lib/constants';
import type { IButton } from '../model/interfaces';

export const Button = (props: IButton): JSX.Element => {
  const EleButton = CButtonStyles[props.styleType];
  return <EleButton {...props} />;
};
