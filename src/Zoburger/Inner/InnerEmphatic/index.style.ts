import styled, { css } from "styled-components";

import { BaseInner } from "../index.style";
import { IInnerProps } from "../index.interface";

export const StyledEmphatic = styled(BaseInner)<Partial<IInnerProps>>`
  transition: background-color 0.125s 0.175s ease-in;

  &::before {
    left: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
      top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
  }

  &::after {
    top: 10px;
    right: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
      top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transition-delay: 0s;
      transition-timing-function: ease-out;
      background-color: transparent !important;

      &::before {
        left: -80px;
        top: -80px;
        transform: translate3d(80px, 80px, 0) rotate(45deg);
        transition: left 0.125s ease-out, top 0.05s 0.125s linear,
          transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
      }

      &::after {
        right: -80px;
        top: -80px;
        transform: translate3d(-80px, 80px, 0) rotate(-45deg);
        transition: right 0.125s ease-out, top 0.05s 0.125s linear,
          transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    `}
`;
