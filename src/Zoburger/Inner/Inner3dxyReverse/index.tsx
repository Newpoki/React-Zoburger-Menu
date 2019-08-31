import React from "react";

import { Styled3dxyReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const Inner3dxyReverse = ({ isActive }: Partial<IInnerProps>) => {
  return <Styled3dxyReverse isActive={isActive} />;
};
