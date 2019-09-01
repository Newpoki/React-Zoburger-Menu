import React from "react";

import { Styled3dy } from "./index.style";
import { IInnerProps } from "../index.interface";

export const Inner3dy = ({ isActive }: Partial<IInnerProps>) => (
  <Styled3dy isActive={isActive} />
);
