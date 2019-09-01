import React from "react";

import { StyledSpinReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSpinReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledSpinReverse className={className} isActive={isActive} />
);
