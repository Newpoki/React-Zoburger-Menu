import React from "react";

import { IHamburgerProps } from "./index.interface";
import "./hamburgers.css";

export const Hamburger = ({ animation, isActive, onClick }: IHamburgerProps) => {
  const className = isActive
    ? `hamburger hamburger--${animation} is-active`
    : `hamburger hamburger--${animation}`;

  return (
    <button className={className} onClick={onClick}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};
