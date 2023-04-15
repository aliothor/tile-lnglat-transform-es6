// rollup.config.js
const config = {
  input: "src/index.js",
  output: [
    {
      file: "build/index.mjs",
      format: "es",
    },
    {
        file: "build/index.cjs",
        format: "cjs",
      },
      {
        name: 'TileLnglatTransform',
        file: "build/index.js",
        format: "umd",
      },
  ],
};

export default config;
