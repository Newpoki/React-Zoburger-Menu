import React from "react";

import { IInnerProps } from "./index.interface";
import { Inner3dx } from "./Inner3dx";

export const Inner = ({ animation, isActive }: IInnerProps) => {
  switch (animation) {
    case "3dx":
      return <Inner3dx isActive={isActive} />;

    default:
      return <Inner3dx isActive={isActive} />;
  }
};
