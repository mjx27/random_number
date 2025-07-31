import { useLocation } from 'react-router-dom';

import type { ILink } from '../../model/interfaces';
import type { TLinkStyle } from '../../model/types';
import { CLinkStylesNames } from '../constants';

export const useLinkType = ({ to, styleType }: ILink): TLinkStyle => {
  const { pathname } = useLocation();

  return pathname === to ? CLinkStylesNames.ACTIVE : styleType;
};
