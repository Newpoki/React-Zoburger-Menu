import React from "react";

import { StyledSpin } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSpin = ({ className, isActive }: Partial<IInnerProps>) => (
  <StyledSpin className={className} isActive={isActive} />
);
