import type { JSX } from 'react';

import { CLinkStyles } from '../lib/constants';
import { useLinkType } from '../lib/utils/useLinkType';
import type { ILink } from '../model/interfaces';

export const Link = ({ type, to, children }: ILink): JSX.Element => {
  const linkType = useLinkType({ type, to });
  const LinkElement = CLinkStyles[linkType];
  return <LinkElement to={to}>{children}</LinkElement>;
};
