import styled, { css } from "styled-components";

import { InnerCommonStyle } from "../index.style";
import { IInnerProps } from "../index.interface";

export const StyledArrowReverse = styled.span<Partial<IInnerProps>>`
  ${InnerCommonStyle}

  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
      }

      &::after {
        transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
      }
    `}
`;
