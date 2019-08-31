import React from "react";

import { IInnerProps } from "./index.interface";
import { Inner3dx } from "./Inner3dx";
import { Inner3dxReverse } from "./Inner3dxReverse";
import { Inner3dy } from "./Inner3dy";
import { Inner3dyReverse } from "./Inner3dyReverse";
import { Inner3dxy } from "./Inner3dxy";
import { Inner3dxyReverse } from "./Inner3dxyReverse";
import { InnerArrow } from "./InnerArrow";
import { InnerArrowReverse } from "./InnerArrowReverse";
import { InnerArrowAlt } from "./InnerArrowAlt";
import { InnerArrowAltReverse } from "./InnerArrowAltReverse";
import { InnerArrowTurn } from "./InnerArrowTurn";
import { InnerArrowTurnReverse } from "./InnerArrowTurnReverse";

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

    case "3dxy-r":
      return <Inner3dxyReverse isActive={isActive} />;

    case "arrow":
      return <InnerArrow isActive={isActive} />;

    case "arrow-r":
      return <InnerArrowReverse isActive={isActive} />;

    case "arrowalt":
      return <InnerArrowAlt isActive={isActive} />;

    case "arrowalt-r":
      return <InnerArrowAltReverse isActive={isActive} />;

    case "arrowturn":
      return <InnerArrowTurn isActive={isActive} />;

    case "arrowturn-r":
      return <InnerArrowTurnReverse isActive={isActive} />;

    default:
      return <Inner3dx isActive={isActive} />;
  }
};
