import styled, { css } from "styled-components";

import { BaseInner } from "../index.style";
import { IInnerProps } from "../index.interface";

export const StyledArrowTurn = styled(BaseInner)<Partial<IInnerProps>>`
  transform: rotate(-180deg);

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
