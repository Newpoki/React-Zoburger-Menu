import React from "react";

import { StyledEmphaticReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerEmphaticReverse = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledEmphaticReverse isActive={isActive} />;
};
