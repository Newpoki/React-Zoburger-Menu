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
      {label && <span>{label}</span>}
    </>
  </Button>
);
