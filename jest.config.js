import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
const config = {
  testEnvironment: "jsdom",
  transform: {
    ...tsJestTransformCfg,
  },
  setupFilesAfterFramework: ["<rootDir>/jest.setup.js"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};

export default config;
