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
import { InnerBoring } from "./InnerBoring";
import { InnerCollapse } from "./InnerCollapse";
import { InnerCollapseReverse } from "./InnerCollapseReverse";
import { InnerElastic } from "./InnerElastic";
import { InnerElasticReverse } from "./InnerElasticReverse";
import { InnerEmphatic } from "./InnerEmphatic";
import { InnerEmphaticReverse } from "./InnerEmphaticReverse";
import { InnerMinus } from "./InnerMinus";
import { InnerSlider } from "./InnerSlider";
import { InnerSliderReverse } from "./InnerSliderReverse";
import { InnerSpin } from "./InnerSpin";
import { InnerSpinReverse } from "./InnerSpinReverse";
import { InnerSpring } from "./InnerSpring";
import { InnerSpringReverse } from "./InnerSpringReverse";
import { InnerStand } from "./InnerStand";
import { InnerStandReverse } from "./InnerStandReverse";
import { InnerSqueeze } from "./InnerSqueeze";
import { InnerVortex } from "./InnerVortex";
import { InnerVortexReverse } from "./InnerVortexReverse";

export const Inner = ({ animation, className, isActive }: IInnerProps) => {
  switch (animation) {
    case "3dx":
      return <Inner3dx className={className} isActive={isActive} />;

    case "3dx-r":
      return <Inner3dxReverse className={className} isActive={isActive} />;

    case "3dy":
      return <Inner3dy className={className} isActive={isActive} />;

    case "3dy-r":
      return <Inner3dyReverse className={className} isActive={isActive} />;

    case "3dxy":
      return <Inner3dxy className={className} isActive={isActive} />;

    case "3dxy-r":
      return <Inner3dxyReverse className={className} isActive={isActive} />;

    case "arrow":
      return <InnerArrow className={className} isActive={isActive} />;

    case "arrow-r":
      return <InnerArrowReverse className={className} isActive={isActive} />;

    case "arrowalt":
      return <InnerArrowAlt className={className} isActive={isActive} />;

    case "arrowalt-r":
      return <InnerArrowAltReverse className={className} isActive={isActive} />;

    case "arrowturn":
      return <InnerArrowTurn className={className} isActive={isActive} />;

    case "arrowturn-r":
      return (
        <InnerArrowTurnReverse className={className} isActive={isActive} />
      );

    case "boring":
      return <InnerBoring className={className} isActive={isActive} />;

    case "collapse":
      return <InnerCollapse className={className} isActive={isActive} />;

    case "collapse-r":
      return <InnerCollapseReverse className={className} isActive={isActive} />;

    case "elastic":
      return <InnerElastic className={className} isActive={isActive} />;

    case "elastic-r":
      return <InnerElasticReverse className={className} isActive={isActive} />;

    case "emphatic":
      return <InnerEmphatic className={className} isActive={isActive} />;

    case "emphatic-r":
      return <InnerEmphaticReverse className={className} isActive={isActive} />;

    case "minus":
      return <InnerMinus className={className} isActive={isActive} />;

    case "slider":
      return <InnerSlider className={className} isActive={isActive} />;

    case "slider-r":
      return <InnerSliderReverse className={className} isActive={isActive} />;

    case "spin":
      return <InnerSpin className={className} isActive={isActive} />;

    case "spin-r":
      return <InnerSpinReverse className={className} isActive={isActive} />;

    case "spring":
      return <InnerSpring className={className} isActive={isActive} />;

    case "spring-r":
      return <InnerSpringReverse className={className} isActive={isActive} />;

    case "stand":
      return <InnerStand className={className} isActive={isActive} />;

    case "stand-r":
      return <InnerStandReverse className={className} isActive={isActive} />;

    case "squeeze":
      return <InnerSqueeze className={className} isActive={isActive} />;

    case "vortex":
      return <InnerVortex className={className} isActive={isActive} />;

    case "vortex-r":
      return <InnerVortexReverse className={className} isActive={isActive} />;

    default:
      return <Inner3dx className={className} isActive={isActive} />;
  }
};
