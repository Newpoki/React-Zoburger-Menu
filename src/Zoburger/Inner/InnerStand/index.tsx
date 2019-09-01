import React from "react";

import { StyledStand } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerStand = ({ isActive }: Partial<IInnerProps>) => (
  <StyledStand isActive={isActive} />
);
