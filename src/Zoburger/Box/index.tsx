import React from "react";

import { Box as StyledBox } from "./index.style";
import { IBoxProps } from "./index.interface";

export const Box = ({ children }: IBoxProps) => {
  return <StyledBox>{children}</StyledBox>;
};
