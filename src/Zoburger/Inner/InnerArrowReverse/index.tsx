import React from "react";

import { StyledArrowReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrowReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => {
  return <StyledArrowReverse className={className} isActive={isActive} />;
};
