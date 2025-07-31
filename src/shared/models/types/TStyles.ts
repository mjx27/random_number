export type TGap = '5px' | '10px' | '20px' | '40px';
export type TPadding = '5px' | '10px' | '20px' | '30px' | '40px';
export type TTransition =
  | 'all .15s linear'
  | 'all .2s linear'
  | 'all .25s linear'
  | 'all .3s linear';
export type TBorderRadius = '5px' | '8px' | '10px' | '16px' | '20px' | '32px';

export type TDisplay =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'grid'
  | 'none';

export type TFlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';

export type TPlaceItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'flex-start'
  | 'flex-end';

export type TPlaceContent =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type TLayoutProps = Partial<{
  display: TDisplay;
  flexDirection: TFlexDirection;
  alignItems: TPlaceItems;
  justifyItems: TPlaceItems;
  alignContent: TPlaceContent;
  justifyContent: TPlaceContent;
  gap: TGap;
  gridTemplate: string;
  padding: TPadding;
}>;
