import React from "react";

import { StyledMinus } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerMinus = ({ className, isActive }: Partial<IInnerProps>) => (
  <StyledMinus className={className} isActive={isActive} />
);
