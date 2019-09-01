import React from "react";

import { Styled3dy } from "./index.style";
import { IInnerProps } from "../index.interface";

export const Inner3dy = ({ className, isActive }: Partial<IInnerProps>) => (
  <Styled3dy className={className} isActive={isActive} />
);
