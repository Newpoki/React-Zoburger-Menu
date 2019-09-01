import { TAnimation } from "../index.interface";

export interface IBoxProps {
  activeColor: string;
  animation: TAnimation;
  children: React.ReactElement;
  color: string;
  isActive: boolean;
}
