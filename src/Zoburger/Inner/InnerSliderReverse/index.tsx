import React from "react";

import { StyledSliderReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSliderReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledSliderReverse className={className} isActive={isActive} />
);
