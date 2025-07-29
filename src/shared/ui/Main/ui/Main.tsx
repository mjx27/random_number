'use client';
import styled from '@emotion/styled';

import type { TDisplayProps } from '@/shared/models/types/TStyles';

import { createDisplay } from '../../Css/createDisplay';

export const StyledMain = styled.main<TDisplayProps>((props) =>
  createDisplay(props)
);
