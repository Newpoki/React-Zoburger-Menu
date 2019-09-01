import React from "react";

import { StyledBoring } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerBoring = ({ isActive }: Partial<IInnerProps>) => (
  <StyledBoring isActive={isActive} />
);
