import React from "react";

import { StyledStandReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerStandReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledStandReverse className={className} isActive={isActive} />
);
