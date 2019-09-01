import React from "react";

import { IZoburgerProps } from "./index.interface";
import { Button } from "./Button";
import { Box } from "./Box";
import { Inner } from "./Inner";

export const Zoburger = ({
  activeColor,
  animation,
  color,
  isActive,
  onClick
}: IZoburgerProps) => {
  const className = isActive
    ? `hamburger hamburger--${animation} is-active`
    : `hamburger hamburger--${animation}`;

  return (
    <Button className={className} onClick={onClick} isActive={isActive}>
      <Box
        activeColor={activeColor || color}
        animation={animation}
        color={color}
        isActive={isActive}
      >
        <Inner
          animation={animation}
          className="hamburger-inner"
          isActive={isActive}
        />
      </Box>
    </Button>
  );
};
