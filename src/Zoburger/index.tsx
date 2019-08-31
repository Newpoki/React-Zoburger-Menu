import React from "react";
import { IZoburgerProps } from "./index.interface";
import { Button } from "./Button";
import "./hamburgers.css";

export const Zoburger = ({ animation, isActive, onClick }: IZoburgerProps) => {
  const className = isActive
    ? `hamburger hamburger--${animation} is-active`
    : `hamburger hamburger--${animation}`;

  return (
    <Button className={className} onClick={onClick} isActive={isActive}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </Button>
  );
};
