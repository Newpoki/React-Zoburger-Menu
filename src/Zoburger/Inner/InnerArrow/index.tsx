import React from "react";

import { StyledArrow } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrow = ({ className, isActive }: Partial<IInnerProps>) => (
  <StyledArrow className={className} isActive={isActive} />
);
