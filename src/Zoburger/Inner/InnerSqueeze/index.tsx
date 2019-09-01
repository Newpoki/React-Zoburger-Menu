import React from "react";

import { StyledSqueeze } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSqueeze = ({ className, isActive }: Partial<IInnerProps>) => (
  <StyledSqueeze className={className} isActive={isActive} />
);
