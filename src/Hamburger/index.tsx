import React from "react";

import { IZoburgerProps } from "./index.interface";
import "./Zoburgers.css";

export const Zoburger = ({ animation, isActive, onClick }: IZoburgerProps) => {
  const className = isActive
    ? `Zoburger Zoburger--${animation} is-active`
    : `Zoburger Zoburger--${animation}`;

  return (
    <button className={className} onClick={onClick}>
      <span className="Zoburger-box">
        <span className="Zoburger-inner"></span>
      </span>
    </button>
  );
};
