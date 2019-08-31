import React from "react";
import { IZoburgerProps } from "./index.interface";
import { Button } from "./Button";
import "./hamburgers.css";
import { Box } from "./Box";
import { Inner } from "./Inner";

export const Zoburger = ({ animation, isActive, onClick }: IZoburgerProps) => {
  const className = isActive
    ? `hamburger hamburger--${animation} is-active`
    : `hamburger hamburger--${animation}`;

  return (
    <Button className={className} onClick={onClick} isActive={isActive}>
      <Box>
        <Inner className="hamburger-inner" />
      </Box>
    </Button>
  );
};
