import styled from "styled-components";

export const Label = styled.span`
  color: ${({ color }) => color};
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
  margin-left: 0.5rem;
  transition: 0.2s;
`;
