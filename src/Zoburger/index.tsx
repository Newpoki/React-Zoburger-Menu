import React from "react";
import { IZoburgerProps } from "./index.interface";
import { Button } from "./Button";
import "./hamburgers.css";
import { Box } from "./Box";

export const Zoburger = ({ animation, isActive, onClick }: IZoburgerProps) => {
  const className = isActive
    ? `hamburger hamburger--${animation} is-active`
    : `hamburger hamburger--${animation}`;

  return (
    <Button className={className} onClick={onClick} isActive={isActive}>
      <Box>
        <span className="hamburger-inner"></span>
      </Box>
    </Button>
  );
};
