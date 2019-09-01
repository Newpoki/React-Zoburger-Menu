import styled, { css } from "styled-components";

import { BaseInner } from "../index.style";
import { IInnerProps } from "../index.interface";

const common3dxyReverse = css`
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Styled3dxyReverse = styled(BaseInner)<Partial<IInnerProps>>`
  ${common3dxyReverse}
  perspective: 80px;

  &::before,
  &::after {
    ${common3dxyReverse}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: transparent !important;
      transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);

      &::before {
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }

      &::after {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
      }
    `}
`;
