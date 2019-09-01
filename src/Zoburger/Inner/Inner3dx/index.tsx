import React from "react";

import { Styled3dx } from "./index.style";
import { IInnerProps } from "../index.interface";

export const Inner3dx = ({ className, isActive }: Partial<IInnerProps>) => (
  <Styled3dx className={className} isActive={isActive} />
);
