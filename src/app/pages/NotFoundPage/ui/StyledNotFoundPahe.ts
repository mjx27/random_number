import styled from '@emotion/styled';

import { Layout } from '@/shared/ui/Layout';

export const StyledNotFoundPage = styled(Layout)((props) => ({
  '& > h1': {
    color: props.theme.colorAdd3,
    fontSize: '30vw',
  },

  '& > p': {
    color: props.theme.colorAdd2,
    fontSize: '2rem',
  },
}));
