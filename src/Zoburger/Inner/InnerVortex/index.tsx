import React from "react";

import { StyledVortex } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerVortex = ({ isActive }: Partial<IInnerProps>) => (
  <StyledVortex isActive={isActive} />
);
