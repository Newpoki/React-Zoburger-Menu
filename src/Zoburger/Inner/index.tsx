import React from "react";

import { IInnerProps } from "./index.interface";
import { Inner3dx } from "./Inner3dx";
import { Inner3dxReverse } from "./Inner3dxReverse";
import { Inner3dy } from "./Inner3dy";
import { Inner3dyReverse } from "./Inner3dyReverse";
import { Inner3dxy } from "./Inner3dxy";

export const Inner = ({ animation, isActive }: IInnerProps) => {
  switch (animation) {
    case "3dx":
      return <Inner3dx isActive={isActive} />;

    case "3dx-r":
      return <Inner3dxReverse isActive={isActive} />;

    case "3dy":
      return <Inner3dy isActive={isActive} />;

    case "3dy-r":
      return <Inner3dyReverse isActive={isActive} />;

    case "3dxy":
      return <Inner3dxy isActive={isActive} />;

    default:
      return <Inner3dx isActive={isActive} />;
  }
};
