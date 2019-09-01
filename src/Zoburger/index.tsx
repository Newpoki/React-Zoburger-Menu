import React from "react";

import { IZoburgerProps } from "./index.interface";
import { Button } from "./Button";
import { Box } from "./Box";
import { Inner } from "./Inner";

export const Zoburger = ({
  activeColor,
  animation,
  className = "",
  color = "#000",
  isActive,
  onClick,
  ...others
}: IZoburgerProps) => (
  <Button
    className={className}
    onClick={onClick}
    isActive={isActive}
    {...others}
  >
    <Box
      activeColor={activeColor || color}
      animation={animation}
      color={color}
      isActive={isActive}
    >
      <Inner animation={animation} isActive={isActive} />
    </Box>
  </Button>
);
