import React from "react";

import { StyledSpringReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSpringReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledSpringReverse className={className} isActive={isActive} />
);
