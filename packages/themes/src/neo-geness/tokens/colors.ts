export const colors = {
  maxSoft: "#FFFFFF",
  softest: "#FEFFFF",
  soft: "#DAD7D7",
  hardest: "#495057",
  hard: "#212529",
  harder: "#191B21",
  maxHard: "#000000",
  blue: {
    maxSoft: "#37A1ED",
    softest: "#3F8AFA",
    maxHard: "#593FFA",
  },
  yellow: {
    maxSoft: "#F7F651",
    maxHard: "#FBDD40"
  }
} as const;

export type Colors = keyof typeof colors
export type BlueColors = keyof typeof colors.blue
export type YellowColors = keyof typeof colors.yellow
