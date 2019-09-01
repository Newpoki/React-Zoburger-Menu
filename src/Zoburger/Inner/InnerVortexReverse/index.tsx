import React from "react";

import { StyledVortexReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerVortexReverse = ({ isActive }: Partial<IInnerProps>) => (
  <StyledVortexReverse isActive={isActive} />
);
