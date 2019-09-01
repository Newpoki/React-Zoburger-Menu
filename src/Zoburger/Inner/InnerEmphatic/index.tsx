import React from "react";

import { StyledEmphatic } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerEmphatic = ({ isActive }: Partial<IInnerProps>) => (
  <StyledEmphatic isActive={isActive} />
);
