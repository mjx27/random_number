'use client';
import styled from '@emotion/styled';

import type { TDisplayProps } from '@/shared/models/types/TStyles';

import { createDisplay } from '../../Css/createDisplay';

export const StyledDiv = styled.div<TDisplayProps>(
  (props) => createDisplay(props),
  (props) => ({
    padding: props.padding,
  })
);
