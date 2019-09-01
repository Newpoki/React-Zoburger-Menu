import React from "react";

import { Styled3dxyReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const Inner3dxyReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <Styled3dxyReverse className={className} isActive={isActive} />
);
