import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./index.ts",
    output: {
      file: "dist/index.js",
    },
  },
].map((entry) => ({
  ...entry,
  external: ["react/jsx-runtime"],
  plugins: [typescript()],
}));
