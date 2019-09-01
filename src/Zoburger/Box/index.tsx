import React from "react";

import { Box as StyledBox } from "./index.style";
import { IBoxProps } from "./index.interface";

export const Box = ({ animation, children, color }: IBoxProps) => {
  return (
    <StyledBox animation={animation} color={color}>
      {children}
    </StyledBox>
  );
};
