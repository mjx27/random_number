export type TGap = '5px' | '10px' | '20px' | '40px';
export type TPadding = '5px' | '10px' | '20px' | '30px' | '40px';
export type TTransition =
  | 'all .15s linear'
  | 'all .2s linear'
  | 'all .25s linear'
  | 'all .3s linear';
export type TBorderRadius = '5px' | '8px' | '10px' | '16px' | '20px' | '32px';

export type TDisplay = 'flex' | 'grid' | 'block';
export type TFlexDirection = 'row' | 'column';
export type TAlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';
export type TJustifyItems = 'stretch' | 'flex-start' | 'flex-end' | 'center';

type TFlexAlignment =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type TJustifyContent = TFlexAlignment;
export type TAlignContent = TFlexAlignment;

export type TDisplayProps = Partial<{
  display: TDisplay;
  flexDirection: TFlexDirection;
  alignItems: TAlignItems;
  justifyItems: TJustifyItems;
  alignContent: TAlignContent;
  justifyContent: TJustifyContent;
  gap: TGap;
  gridTemplate: string;
  padding: TPadding;
}>;

export type TIconSize =
  | '10px'
  | '15px'
  | '20px'
  | '25px'
  | '30px'
  | '40px'
  | '50px';
