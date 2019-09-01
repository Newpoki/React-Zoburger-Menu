import styled, { css } from "styled-components";

import { BaseInner } from "../index.style";
import { IInnerProps } from "../index.interface";

const commonVortexReverse = css`
  transition-duration: 0s;
  transition-delay: 0.1s;
  transition-timing-function: linear;
`;

const commonVortexReverseIsActive = css`
  transition-delay: 0s;
`;

export const StyledVortexReverse = styled(BaseInner)<Partial<IInnerProps>>`
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);

  &::before,
  &::after {
    ${commonVortexReverse}
  }

  &::before {
    transition-property: top, opacity;
  }

  &::after {
    transition-property: bottom, transform;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(-765deg);
      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);

      &::before,
      &::after {
        ${commonVortexReverseIsActive}
      }

      &::before {
        top: 0;
        opacity: 0;
      }

      &::after {
        bottom: 0;
        transform: rotate(-90deg);
      }
    `}
`;
