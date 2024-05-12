import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "Button/index.tsx",
    output: {
      file: "dist/button.js",
    },
  },
].map((entry) => ({
  ...entry,
  external: ["react/jsx-runtime"],
  plugins: [typescript()],
}));
