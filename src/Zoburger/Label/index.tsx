import React from "react";

import { Label as StyledLabel } from "./index.style";
import { ILabelProps } from "./index.interface";

export const Label = ({ children, color }: ILabelProps) => (
  <StyledLabel color={color}>{children}</StyledLabel>
);
