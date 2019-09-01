import React from "react";

import { StyledArrowTurn } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrowTurn = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledArrowTurn className={className} isActive={isActive} />
);
