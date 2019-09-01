import React from "react";

import { StyledCollapse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerCollapse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledCollapse className={className} isActive={isActive} />
);
