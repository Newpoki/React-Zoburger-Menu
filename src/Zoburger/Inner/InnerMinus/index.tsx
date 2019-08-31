import React from "react";

import { StyledMinus } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerMinus = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledMinus isActive={isActive} />;
};
