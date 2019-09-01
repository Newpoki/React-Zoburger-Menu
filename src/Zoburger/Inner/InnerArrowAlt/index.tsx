import React from "react";

import { StyledArrowAlt } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrowAlt = ({ isActive }: Partial<IInnerProps>) => (
  <StyledArrowAlt isActive={isActive} />
);
