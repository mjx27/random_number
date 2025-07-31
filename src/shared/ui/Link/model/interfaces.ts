import type { LinkProps } from 'react-router-dom';

import type { TLinkStyle } from './types';
export interface ILink extends LinkProps {
  styleType: TLinkStyle;
}
