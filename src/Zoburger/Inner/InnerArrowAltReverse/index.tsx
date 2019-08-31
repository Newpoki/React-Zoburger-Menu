import React from "react";

import { StyledArrowAltReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrowAltReverse = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledArrowAltReverse isActive={isActive} />;
};