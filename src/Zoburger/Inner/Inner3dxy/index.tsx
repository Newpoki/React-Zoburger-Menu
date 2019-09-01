import React from "react";

import { Styled3dxy } from "./index.style";
import { IInnerProps } from "../index.interface";

export const Inner3dxy = ({ isActive }: Partial<IInnerProps>) => (
  <Styled3dxy isActive={isActive} />
);
