import React from "react";

import { StyledStand } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerStand = ({ className, isActive }: Partial<IInnerProps>) => (
  <StyledStand className={className} isActive={isActive} />
);
