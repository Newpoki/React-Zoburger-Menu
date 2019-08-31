import styled, { css } from "styled-components";

import { InnerCommonStyle } from "../index.style";
import { IInnerProps } from "../index.interface";

export const StyledSlider = styled.span<Partial<IInnerProps>>`
  ${InnerCommonStyle}
  top: 2px;

  &::before {
    top: 10px;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
  }

  &::after {
    top: 20px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translate3d(0, 10px, 0) rotate(45deg);

      &::before {
        transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
        opacity: 0;
      }

      &::after {
        transform: translate3d(0, -20px, 0) rotate(-90deg);
      }
    `}
`;
