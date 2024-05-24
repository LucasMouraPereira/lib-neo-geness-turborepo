export type Types = "margin" | "padding";

export type Align =
  | "baseline"
  | "center"
  | "flex-end"
  | "flex-start"
  | "stretch";

export type AlignContent =
  | "around"
  | "between"
  | "center"
  | "flex-end"
  | "flex-start"
  | "stretch";

export type Justify =
  | "space-around"
  | "space-between"
  | "center"
  | "flex-end"
  | "space-evenly"
  | "flex-start";

export type Wrap = "wrap" | "wrap-reverse";

export type Overflow = "visible" | "hidden" | "scroll" | "auto";

export type Fill = "horizontal" | "vertical" | "both";

export type Direction = "row" | "column" | "row-reverse" | "column-reverse";

export interface FixedSize {
  horizontal?: string | number;
  vertical?: string | number;
}

export interface Space {
  all?: Spacings;
  horizontal?: Spacings;
  vertical?: Spacings;
  top?: Spacings;
  right?: Spacings;
  left?: Spacings;
  bottom?: Spacings;
}

export interface FlexProps {
  gap?: Spacings;
  inline?: boolean;
  flex?: boolean;
  noShrink?: boolean;
  onClick?: () => void;
  align?: Align;
  alignContent?: AlignContent;
  justify?: Justify;
  wrap?: Wrap;
  overflow?: Overflow;
  background?: Colors;
  direction?: Direction;
  fill?: Fill;
  fixedSize?: FixedSize;
  margin?: Space;
  padding?: Space;
}
