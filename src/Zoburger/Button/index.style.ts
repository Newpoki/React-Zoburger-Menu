import { IButtonProps } from "./index.interface";
import styled from "styled-components";

export const Button = styled.button<IButtonProps>`
  padding: 15px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    opacity: 0.7;
  }
`;
