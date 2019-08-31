import styled, { css } from "styled-components";

import { InnerCommonStyle } from "../index.style";
import { IInnerProps } from "../index.interface";

const commonMinus = css`
  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;
`;

const commonMinusIsActive = css`
  opacity: 0;
  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;
`;

export const StyledMinus = styled.span<Partial<IInnerProps>>`
  ${InnerCommonStyle}

  &::before,
  &::after {
    ${commonMinus}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::before,
      &::after {
        ${commonMinusIsActive}
      }

      &::before {
        top: 0;
      }

      &::after {
        bottom: 0;
      }
    `}
`;
