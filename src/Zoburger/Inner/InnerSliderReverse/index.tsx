import React from "react";

import { StyledSliderReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSliderReverse = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledSliderReverse isActive={isActive} />;
};
