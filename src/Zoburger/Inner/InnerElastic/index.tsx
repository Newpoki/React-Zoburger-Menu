import React from "react";

import { StyledElastic } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerElastic = ({ className, isActive }: Partial<IInnerProps>) => (
  <StyledElastic className={className} isActive={isActive} />
);
