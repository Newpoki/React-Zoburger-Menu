import React from "react";

import { Label as StyledLabel } from "./index.style";
import { ILabelProps } from "./index.interface";

const Label = ({ children, color }: ILabelProps) => (
  <StyledLabel color={color}>{children}</StyledLabel>
);

export { Label, StyledLabel };
