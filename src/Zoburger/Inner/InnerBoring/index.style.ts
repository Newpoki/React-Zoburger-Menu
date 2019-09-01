import styled, { css } from "styled-components";

import { BaseInner } from "../index.style";
import { IInnerProps } from "../index.interface";

const commonBoring = css`
  transition-property: none;
`;

export const StyledBoring = styled(BaseInner)<Partial<IInnerProps>>`
  ${commonBoring}

  &:before, &:after {
    ${commonBoring}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(45deg);
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
