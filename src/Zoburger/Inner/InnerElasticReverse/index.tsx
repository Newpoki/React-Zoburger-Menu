import React from "react";

import { StyledElasticReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerElasticReverse = ({
  className,
  isActive
}: Partial<IInnerProps>) => (
  <StyledElasticReverse className={className} isActive={isActive} />
);
