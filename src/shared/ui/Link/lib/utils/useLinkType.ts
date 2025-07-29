import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import type { ILink } from '../../model/interfaces';
import type { TLinkStyle } from '../../model/types';
import { CLinkStylesNames } from '../constants';

export const useLinkType = ({ to, type }: ILink): TLinkStyle => {
  const { pathname } = useLocation();

  return useMemo(
    () => (pathname === to ? CLinkStylesNames.active : type),
    [pathname, to, type]
  );
};
