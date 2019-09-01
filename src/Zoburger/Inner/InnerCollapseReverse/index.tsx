import React from "react";

import { StyledCollapseReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerCollapseReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledCollapseReverse className={className} isActive={isActive} />
);
