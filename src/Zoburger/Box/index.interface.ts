import { TAnimation } from "../index.interface";

export interface IBoxProps {
  activeColor: string;
  animation: TAnimation;
  children: React.ReactElement;
  className: string;
  color: string;
  isActive: boolean;
}
