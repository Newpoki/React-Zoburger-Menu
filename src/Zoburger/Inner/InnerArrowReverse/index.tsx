import React from "react";

import { StyledArrowReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrowReverse = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledArrowReverse isActive={isActive} />;
};
