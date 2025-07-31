import type { JSX } from 'react';

import { CButtonPickStyles } from '../lib/constants/CButtonPick';
import type { IButtonPick } from '../model/interfaces';

export const ButtonPick = (props: IButtonPick): JSX.Element => {
  const EleButton = CButtonPickStyles[props.styleType];
  return <EleButton {...props} />;
};
