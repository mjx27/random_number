import type { JSX } from 'react';

import { Logo } from '@/shared/ui/Logo';
import { CLogoStylesNames } from '@/shared/ui/Logo/lib/constants';

export const Header = (): JSX.Element => {
  return (
    <header>
      <Logo styleType={CLogoStylesNames.LIGHT} />
    </header>
  );
};
