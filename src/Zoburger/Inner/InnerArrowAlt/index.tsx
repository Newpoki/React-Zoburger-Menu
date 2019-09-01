import React from "react";

import { StyledArrowAlt } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerArrowAlt = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledArrowAlt className={className} isActive={isActive} />
);
