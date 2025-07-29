import type { JSX } from 'react';

import { CLinkStyles } from '../lib/constants';
import { useLinkType } from '../lib/utils/useLinkType';
import type { ILink } from '../model/interfaces';

export const Link = ({
  styleType,
  to,
  children,
  ...props
}: ILink): JSX.Element => {
  const linkType = useLinkType({ styleType, to });
  const LinkElement = CLinkStyles[linkType];
  return (
    <LinkElement to={to} {...props}>
      {children}
    </LinkElement>
  );
};
