import React from "react";

import { StyledEmphatic } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerEmphatic = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledEmphatic className={className} isActive={isActive} />
);
