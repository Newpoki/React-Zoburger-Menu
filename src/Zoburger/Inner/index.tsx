import React from "react";

import { IInnerProps } from "./index.interface";
import { Inner3dx } from "./Inner3dx";
import { Inner3dxReverse } from "./Inner3dxReverse";

export const Inner = ({ animation, isActive }: IInnerProps) => {
  switch (animation) {
    case "3dx":
      return <Inner3dx isActive={isActive} />;

    case "3dx-r":
      return <Inner3dxReverse isActive={isActive} />;

    default:
      return <Inner3dx isActive={isActive} />;
  }
};
