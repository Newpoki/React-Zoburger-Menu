import React from "react";

import { StyledArrow } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrow = ({ isActive }: Partial<IInnerProps>) => (
  <StyledArrow isActive={isActive} />
);
