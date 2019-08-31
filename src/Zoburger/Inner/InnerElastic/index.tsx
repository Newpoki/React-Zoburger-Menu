import React from "react";

import { StyledElastic } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerElastic = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledElastic isActive={isActive} />;
};
