import React from "react";

import { StyledSpin } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSpin = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledSpin isActive={isActive} />;
};