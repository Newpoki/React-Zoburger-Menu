import styled, { css } from "styled-components";

import { InnerCommonStyle } from "../index.style";
import { IInnerProps } from "../index.interface";

const common3dy = css`
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Styled3dy = styled.span<Partial<IInnerProps>>`
  ${InnerCommonStyle}
  ${common3dy}
  perspective: 80px;

  &::before,
  &::after {
    ${common3dy}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: transparent !important;
      transform: rotateX(-180deg);

      &::before {
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }

      &::after {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
      }
    `}
`;
