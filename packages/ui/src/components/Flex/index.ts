import styled, { css } from "styled-components";
import { fillStyle, fixedSizeStyle, spaceStyle } from "./utils";
import { FlexProps } from './types'

export const Flex = styled.div<FlexProps>`
  ${({
    theme,
    gap,
    inline,
    flex,
    noShrink,
    onClick,
    align,
    alignContent,
    justify,
    wrap,
    overflow,
    background,
    direction,
    fill,
    fixedSize,
    margin,
    padding,
  }) => css`
    ${inline &&
    css`
      display: inline-flex;
    `}
    ${flex &&
    css`
      flex: 1;
    `}
    ${gap &&
    css`
      gap: ${theme.spacing[gap]};
    `}
    ${noShrink &&
    css`
      flex-shrink: 0;
    `}
    ${onClick &&
    css`
      cursor: pointer;
    `}
    ${align &&
    css`
      align-items: ${align};
    `}
    ${alignContent &&
    css`
      align-content: ${alignContent};
    `}
    ${justify &&
    css`
      justify-content: ${justify};
    `}
    ${wrap &&
    css`
      flex-wrap: ${wrap};
    `}
    ${overflow &&
    css`
      overflow: ${overflow};
    `}
    ${background &&
    css`
      background-color: ${theme.colors[background]};
    `}
    ${direction &&
    css`
      flex-direction: ${direction};
    `}
    ${fill &&
    css`
      ${fillStyle(fill)};
    `}
    ${fixedSize &&
    css`
      ${fixedSizeStyle(fixedSize)};
    `}
    ${margin &&
    css`
      ${spaceStyle(margin, "margin", theme)};
    `}
    ${padding &&
    css`
      ${spaceStyle(padding, "padding", theme)};
    `}
  `}
`;
