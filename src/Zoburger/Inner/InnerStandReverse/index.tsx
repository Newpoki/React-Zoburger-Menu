import React from "react";

import { StyledStandReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerStandReverse = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledStandReverse isActive={isActive} />;
};
