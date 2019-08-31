import styled, { css } from "styled-components";

import { InnerCommonStyle } from "../index.style";
import { IInnerProps } from "../index.interface";

export const StyledSpring = styled.span<Partial<IInnerProps>>`
  ${InnerCommonStyle}
  top: 2px;
  transition: background-color 0s 0.13s linear;

  &::before {
    top: 10px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &::after {
    top: 20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transition-delay: 0.22s;
      background-color: transparent !important;

      &::before {
        top: 0;
        transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }

      &::after {
        top: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 10px, 0) rotate(-45deg);
      }
    `}
`;
