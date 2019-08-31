import React from "react";

import { StyledArrowTurn } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrowTurn = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledArrowTurn isActive={isActive} />;
};
