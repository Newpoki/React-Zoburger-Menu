import styled, { css } from "styled-components";

import { InnerCommonStyle } from "../index.style";
import { IInnerProps } from "../index.interface";

export const StyledArrowAltReverse = styled.span<Partial<IInnerProps>>`
  ${InnerCommonStyle}

  &:before {
    transition: top 0.1s 0.1s ease,
      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:after {
    transition: bottom 0.1s 0.1s ease,
      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        top: 0;
        transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);
        transition: top 0.1s ease,
          transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
      }

      &::after {
        bottom: 0;
        transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);
        transition: bottom 0.1s ease,
          transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
      }
    `}
`;
