import React from "react";

import { StyledArrowTurnReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrowTurnReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledArrowTurnReverse className={className} isActive={isActive} />
);
