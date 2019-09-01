import React from "react";

import { Styled3dxy } from "./index.style";
import { IInnerProps } from "../index.interface";

export const Inner3dxy = ({ className, isActive }: Partial<IInnerProps>) => (
  <Styled3dxy className={className} isActive={isActive} />
);
