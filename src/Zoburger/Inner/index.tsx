import React from "react";

import { Inner as StyledInner } from "./index.style";
import { IInnerProps } from "./index.interface";

export const Inner = ({ className }: IInnerProps) => {
  return <StyledInner className={className} />;
};
