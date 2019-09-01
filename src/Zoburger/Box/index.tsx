import React from "react";

import { Box as StyledBox } from "./index.style";
import { IBoxProps } from "./index.interface";

export const Box = ({
  activeColor,
  animation,
  children,
  color,
  isActive
}: IBoxProps) => (
  <StyledBox
    activeColor={activeColor}
    animation={animation}
    color={color}
    isActive={isActive}
  >
    {children}
  </StyledBox>
);
