import styled, { css } from "styled-components";

import { InnerCommonStyle } from "../index.style";
import { IInnerProps } from "../index.interface";

export const StyledSqueeze = styled.span<Partial<IInnerProps>>`
  ${InnerCommonStyle}
  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &::before {
    transition: top 0.075s 0.12s ease, opacity 0.075s ease;
  }

  &::after {
    transition: bottom 0.075s 0.12s ease,
      transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(45deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::before {
        top: 0;
        opacity: 0;
        transition: top 0.075s ease, opacity 0.075s 0.12s ease;
      }

      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease,
          transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    `}
`;