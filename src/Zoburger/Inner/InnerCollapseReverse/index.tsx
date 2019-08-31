import React from "react";

import { StyledCollapseReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerCollapseReverse = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledCollapseReverse isActive={isActive} />;
};
