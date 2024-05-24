import { Fill, FixedSize, Space, Types } from "./types";

export const fillStyle = (fill: Fill) => {
  if (fill === "horizontal") {
    return "width: 100%;";
  }
  if (fill === "vertical") {
    return "height: 100%;";
  }
  if (fill === "both") {
    return `
      width: 100%; 
      height: 100%;
    `;
  }
  return undefined;
};
export const fixedSizeStyle = (fixedSize: FixedSize) => {
  if (fixedSize.horizontal && typeof fixedSize.horizontal === "string")
    return fixedSize.horizontal;
  if (fixedSize.horizontal && typeof fixedSize.horizontal !== "string")
    return `${fixedSize.horizontal}px`;
  if (fixedSize.vertical && typeof fixedSize.vertical === "string")
    return fixedSize.vertical;
  if (fixedSize.vertical && typeof fixedSize.vertical !== "string")
    return `${fixedSize.vertical}px`;
};

export const spaceStyle = (space: Space, type: Types, theme: any) => {
  const styles = [];
  if (space.vertical) {
    styles[1] = `${type}-top: ${theme.spacings[space.vertical]};`;
    styles[3] = `${type}-bottom: ${theme.spacings[space.vertical]};`;
  }
  if (space.horizontal) {
    styles[2] = `${type}-right: ${theme.spacings[space.horizontal]};`;
    styles[4] = `${type}-left: ${theme.spacings[space.horizontal]};`;
  }
  if (space.top) {
    styles[1] = `${type}-top: ${theme.spacings[space.top]};`;
  }
  if (space.right) {
    styles[2] = `${type}-right: ${theme.spacings[space.right]};`;
  }
  if (space.bottom) {
    styles[3] = `${type}-bottom: ${theme.spacings[space.bottom]};`;
  }
  if (space.left) {
    styles[4] = `${type}-left: ${theme.spacings[space.left]};`;
  }
  if (space.all) {
    styles[0] = `${type}: ${theme.spacings[space.all]};`;
  }
  return `
    ${styles.map((style) => style).join("")}
  `;
};
