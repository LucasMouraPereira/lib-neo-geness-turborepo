import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.maxSoft};
    color: ${theme.colors.maxHard};
  `}
`;
