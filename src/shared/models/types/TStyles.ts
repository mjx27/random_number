import type { CSSProperties } from 'react';

export type TGap = '5px' | '10px' | '20px' | '40px';
export type TPadding = '5px' | '10px' | '20px' | '30px' | '40px';
export type TTransition =
  | 'all .15s linear'
  | 'all .2s linear'
  | 'all .25s linear'
  | 'all .3s linear';
export type TBorderRadius = '5px' | '8px' | '10px' | '16px' | '20px' | '32px';

export type TLayoutProps = Partial<{
  display: CSSProperties['display'];
  flexDirection: CSSProperties['flexDirection'];
  alignItems: CSSProperties['alignItems'];
  justifyItems: CSSProperties['justifyItems'];
  alignContent: CSSProperties['alignContent'];
  justifyContent: CSSProperties['justifyContent'];
  gap: TGap;
  gridTemplate: string;
  padding: TPadding;
}>;
