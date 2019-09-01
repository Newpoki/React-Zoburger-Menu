import React from "react";

import { StyledArrowTurnReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrowTurnReverse = ({ isActive }: Partial<IInnerProps>) => (
  <StyledArrowTurnReverse isActive={isActive} />
);
