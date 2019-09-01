import React from "react";

import { StyledSlider } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSlider = ({ isActive }: Partial<IInnerProps>) => (
  <StyledSlider isActive={isActive} />
);
