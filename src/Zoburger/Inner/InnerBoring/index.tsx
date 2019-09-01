import React from "react";

import { StyledBoring } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerBoring = ({ className, isActive }: Partial<IInnerProps>) => (
  <StyledBoring className={className} isActive={isActive} />
);
