module.exports = {
  presets: ["next/babel"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "~": "./", // maps ~ to the project root
        },
      },
    ],
  ],
};
