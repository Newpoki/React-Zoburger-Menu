import React from "react";

import { StyledElasticReverse } from "./index.style";
import { IInnerProps } from "../index.interface";

export const InnerElasticReverse = ({ isActive }: Partial<IInnerProps>) => {
  return <StyledElasticReverse isActive={isActive} />;
};
