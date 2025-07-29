import {
  type TGap,
  type TPadding,
  type TBorderRadius,
  type TTransition,
} from '@/shared/models/types/TStyles';

interface IGaps {
  gapLittle: TGap;
  gapMedium: TGap;
  gapBig: TGap;
}

interface IPaddings {
  paddingLittle1: TPadding;
  paddingLittle2: TPadding;
  paddingMedium: TPadding;
  paddingBig: TPadding;
}

interface ITransitions {
  transitionDefaultSlow: TTransition;
  transitionDefaultFast: TTransition;
  transitionUnDefaultSlow?: TTransition;
  transitionUnDefaultFast?: TTransition;
}

interface borderRadiusLow {
  borderRadiusLittle: TBorderRadius;
  borderRadiusMedium: TBorderRadius;
  borderRadiusBig: TBorderRadius;
}

export interface ITheme {
  gaps: IGaps;
  paddings: IPaddings;
  borderRadiuses: borderRadiusLow;
  colorTextMain: string;
  colorTextAdd1: string;
  colorTextAdd2: string;
  colorTextAdd3: string;
  colorMain: string;
  colorAdd1: string;
  colorAdd2: string;
  colorAdd3: string;
  transitions: ITransitions;
}
