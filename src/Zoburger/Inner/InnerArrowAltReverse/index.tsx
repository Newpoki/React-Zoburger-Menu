import React from "react";

import { StyledArrowAltReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrowAltReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledArrowAltReverse className={className} isActive={isActive} />
);
