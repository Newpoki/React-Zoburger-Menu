import React from "react";

import { StyledSpringReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSpringReverse = ({ isActive }: Partial<IInnerProps>) => (
  <StyledSpringReverse isActive={isActive} />
);
