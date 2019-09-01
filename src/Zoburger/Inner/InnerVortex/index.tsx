import React from "react";

import { StyledVortex } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerVortex = ({ className, isActive }: Partial<IInnerProps>) => (
  <StyledVortex className={className} isActive={isActive} />
);
