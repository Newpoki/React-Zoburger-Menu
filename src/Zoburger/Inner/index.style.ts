import styled, { css } from "styled-components";

const BaseInnerCommonStyle = css`
  width: 40px;
  height: 4px;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
`;

// Can't give className attrs because using a styled of this
// So className is erased
export const BaseInner = styled.span`
  ${BaseInnerCommonStyle}
  display: block;
  top: 50%;
  margin-top: -2px;

  &::after,
  &::before {
    ${BaseInnerCommonStyle}
    content: "";
    display: block;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }
`;
