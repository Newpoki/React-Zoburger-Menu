import React from "react";

import { StyledVortexReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerVortexReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledVortexReverse className={className} isActive={isActive} />
);
