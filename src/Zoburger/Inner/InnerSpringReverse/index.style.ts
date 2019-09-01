import styled, { css } from "styled-components";

import { BaseInner } from "../index.style";
import { IInnerProps } from "../index.interface";

export const StyledSpringReverse = styled(BaseInner)<Partial<IInnerProps>>`
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &::before {
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0s linear;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translate3d(0, -10px, 0) rotate(-45deg);
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::before {
        top: 0;
        transform: rotate(90deg);
        transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      &::after {
        top: 0;
        opacity: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          opacity 0s 0.22s linear;
      }
    `}
`;
