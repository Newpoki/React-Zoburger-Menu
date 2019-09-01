import React from "react";

import { StyledEmphaticReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerEmphaticReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledEmphaticReverse className={className} isActive={isActive} />
);
