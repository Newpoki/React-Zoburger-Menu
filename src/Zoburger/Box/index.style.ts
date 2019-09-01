import styled from "styled-components";

import { IBoxProps } from "./index.interface";
import { getPerspective, getOverflow } from "./utils";
import { BaseInner } from "../Inner/index.style";

export const Box = styled.span<IBoxProps>`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
  perspective: ${({ animation }) => getPerspective(animation)};
  overflow: ${({ animation }) => getOverflow(animation)};

  ${BaseInner} {
    background-color: ${({ color }) => color};

    &::before,
    &::after {
      background-color: ${({ color }) => color};
    }
  }
`;
