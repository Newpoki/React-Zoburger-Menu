import React from "react";

import { Styled3dx } from "./index.style";
import { IInnerProps } from "../index.interface";

export const Inner3dx = ({ isActive }: Partial<IInnerProps>) => {
  return <Styled3dx isActive={isActive} />;
};
