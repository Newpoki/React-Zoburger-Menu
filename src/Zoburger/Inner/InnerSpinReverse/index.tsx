import React from "react";

import { StyledSpinReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSpinReverse = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledSpinReverse isActive={isActive} />;
};
