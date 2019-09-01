import React from "react";

import { StyledSpring } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerSpring = ({ isActive }: Partial<IInnerProps>) => (
  <StyledSpring isActive={isActive} />
);
