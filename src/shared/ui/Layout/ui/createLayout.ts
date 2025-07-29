import styled from '@emotion/styled';

import type { TLayoutProps } from '@/shared/models/types/TStyles';

import { createLayout } from '../../Css/createLayout';

export const StyledDiv = styled.div<TLayoutProps>((props) =>
  createLayout(props)
);
