import type { JSX } from 'react';
import { useNavigate } from 'react-router-dom';

import { NumberService } from '@/entities/Fact/lib/utils/NumberService';
import { CRoutesPaths } from '@/shared/constants/CRoutes';
import { CButtonDefaultStylesNames } from '@/shared/ui/Button/lib/constants/CButtonDefault';
import { ButtonDefault } from '@/shared/ui/Button/ui/ButtonDefault';
import { Layout } from '@/shared/ui/Layout';

export const ResultPage = (): JSX.Element => {
  const fact = NumberService.getFactFromStorage();
  const navigate = useNavigate();
  if (!fact) {
    navigate(CRoutesPaths.NOT_FOUND_PAGE);
  }

  const handleClick = () => {
    navigate(CRoutesPaths.MAIN_PAGE);
  };

  return (
    <Layout
      as="main"
      display="flex"
      flexDirection="column"
      gap="20px"
      alignItems="center"
    >
      <h2>TYPE - {fact.type}</h2>
      <h4>{fact.fact}</h4>
      <ButtonDefault
        styleType={CButtonDefaultStylesNames.DEFAULT}
        onClick={handleClick}
      >
        GO TO HOME
      </ButtonDefault>
    </Layout>
  );
};
