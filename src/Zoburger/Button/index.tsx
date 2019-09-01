import React from "react";

import { Button as StyledButton } from "./index.style";
import { IButtonProps } from "./index.interface";

const Button = ({ children, className, isActive, onClick }: IButtonProps) => (
  <StyledButton
    aria-label="Menu"
    aria-controls="navigation"
    aria-expanded={isActive}
    className={className}
    isActive={isActive}
    onClick={onClick}
    type="button"
  >
    {children}
  </StyledButton>
);

export { Button, StyledButton };
