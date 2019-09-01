import React from "react";

import { StyledCollapse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerCollapse = ({ isActive }: Partial<IInnerProps>) => (
  <StyledCollapse isActive={isActive} />
);
