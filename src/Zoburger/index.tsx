import React from "react";

import { IZoburgerProps } from "./index.interface";
import { Button, StyledButton } from "./Button";
import { Box, StyledBox } from "./Box";
import {
  Inner,
  Styled3dx,
  Styled3dxReverse,
  Styled3dy,
  Styled3dyReverse,
  Styled3dxy,
  Styled3dxyReverse,
  StyledArrow,
  StyledArrowReverse,
  StyledArrowAlt,
  StyledArrowAltReverse,
  StyledArrowTurn,
  StyledArrowTurnReverse,
  StyledBoring,
  StyledCollapse,
  StyledCollapseReverse,
  StyledElastic,
  StyledElasticReverse,
  StyledEmphatic,
  StyledEmphaticReverse,
  StyledMinus,
  StyledSlider,
  StyledSliderReverse,
  StyledSpin,
  StyledSpinReverse,
  StyledSpring,
  StyledSpringReverse,
  StyledStand,
  StyledStandReverse,
  StyledSqueeze,
  StyledVortex,
  StyledVortexReverse
} from "./Inner";
import { Label, StyledLabel } from "./Label";

const Zoburger = ({
  activeColor,
  animation,
  className = "",
  color = "#000",
  isActive,
  label,
  onClick,
  ...others
}: IZoburgerProps) => (
  <Button
    className={`zoburger__button ${className}`}
    isActive={isActive}
    onClick={onClick}
    {...others}
  >
    <>
      <Box
        activeColor={activeColor || color}
        animation={animation}
        className={`zoburger__box ${className}`}
        color={color}
        isActive={isActive}
      >
        <Inner
          animation={animation}
          className={`zoburger__inner ${className}`}
          isActive={isActive}
        />
      </Box>
      {label && (
        <Label color={isActive && activeColor ? activeColor : color}>
          {label}
        </Label>
      )}
    </>
  </Button>
);

export {
  Zoburger,
  StyledBox,
  StyledButton,
  StyledLabel,
  Styled3dx,
  Styled3dxReverse,
  Styled3dy,
  Styled3dyReverse,
  Styled3dxy,
  Styled3dxyReverse,
  StyledArrow,
  StyledArrowReverse,
  StyledArrowAlt,
  StyledArrowAltReverse,
  StyledArrowTurn,
  StyledArrowTurnReverse,
  StyledBoring,
  StyledCollapse,
  StyledCollapseReverse,
  StyledElastic,
  StyledElasticReverse,
  StyledEmphatic,
  StyledEmphaticReverse,
  StyledMinus,
  StyledSlider,
  StyledSliderReverse,
  StyledSpin,
  StyledSpinReverse,
  StyledSpring,
  StyledSpringReverse,
  StyledStand,
  StyledStandReverse,
  StyledSqueeze,
  StyledVortex,
  StyledVortexReverse
};
