import type { ComponentType } from 'react';

import type { CLinkStylesNames } from '../lib/constants';

import type { ILinkProps } from './interfaces';

export type TLinkStyle = keyof typeof CLinkStylesNames;
export type TLinkComponentsMap = Record<TLinkStyle, ComponentType<ILinkProps>>;
