export type TAnimation =
  | "3dx"
  | "3dx-r"
  | "3dy"
  | "3dy-r"
  | "3dxy"
  | "3dxy-r"
  | "arrow"
  | "arrow-r"
  | "arrowalt"
  | "arrowalt-r"
  | "arrowturn"
  | "arrowturn-r"
  | "boring"
  | "collapse"
  | "collapse-r"
  | "elastic"
  | "elastic-r"
  | "emphatic"
  | "emphatic-r"
  | "minus"
  | "slider"
  | "slider-r"
  | "spin"
  | "spin-r"
  | "spring"
  | "spring-r"
  | "stand"
  | "stand-r"
  | "squeeze"
  | "vortex"
  | "vortex-r";

export interface IZoburgerProps
  extends React.AllHTMLAttributes<HTMLButtonElement> {
  activeColor?: string;
  animation: TAnimation;
  className?: string;
  color?: string;
  isActive: boolean;
  label?: string;
  onClick: () => void;
}
