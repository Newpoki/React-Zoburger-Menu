import styled, { css } from "styled-components";

import { BaseInner } from "../index.style";
import { IInnerProps } from "../index.interface";

export const StyledElasticReverse = styled(BaseInner)<Partial<IInnerProps>>`
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &::before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease;
  }

  &::after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translate3d(0, 10px, 0) rotate(-135deg);
      transition-delay: 0.075s;

      &::before {
        transition-delay: 0s;
        opacity: 0;
      }

      &::after {
        transform: translate3d(0, -20px, 0) rotate(270deg);
        transition-delay: 0.075s;
      }
    `}
`;
