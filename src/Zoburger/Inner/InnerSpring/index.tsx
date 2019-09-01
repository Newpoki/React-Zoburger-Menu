import React from "react";

import { StyledSpring } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSpring = ({ className, isActive }: Partial<IInnerProps>) => (
  <StyledSpring className={className} isActive={isActive} />
);
