import styled from "styled-components";

import { IBoxProps } from "./index.interface";
import { getPerspective } from "./utils";

export const Box = styled.span<IBoxProps>`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
  perspective: ${({ animation }) => getPerspective(animation)};
`;
