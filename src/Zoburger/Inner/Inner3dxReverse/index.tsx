import React from "react";

import { Styled3dxReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const Inner3dxReverse = ({ isActive }: Partial<IInnerProps>) => (
  <Styled3dxReverse isActive={isActive} />
);
