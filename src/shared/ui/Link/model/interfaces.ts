import type { ReactNode } from 'react';
import type { LinkProps } from 'react-router-dom';

import type { TLinkStyle } from './types';

export interface ILinkProps extends LinkProps {
  children?: ReactNode;
}
export interface ILink extends ILinkProps {
  type: TLinkStyle;
}
