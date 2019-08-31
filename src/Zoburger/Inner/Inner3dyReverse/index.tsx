import React from "react";

import { Styled3dyReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const Inner3dyReverse = ({ isActive }: Partial<IInnerProps>) => {
  return <Styled3dyReverse isActive={isActive} />;
};