import React from "react";

import { StyledSqueeze } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSqueeze = ({ isActive }: Partial<IInnerProps>) => (
  <StyledSqueeze isActive={isActive} />
);
