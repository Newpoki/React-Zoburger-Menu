import React from "react";

import { StyledSlider } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSlider = ({ className, isActive }: Partial<IInnerProps>) => (
  <StyledSlider className={className} isActive={isActive} />
);
