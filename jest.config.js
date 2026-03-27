import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
const config = {
  testEnvironment: "jsdom",
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^@/invitation/(.*)$": "<rootDir>/src/invitation/$1",
    "^@/guests/(.*)$": "<rootDir>/src/guests/$1",
    "^@/ceremony/(.*)$": "<rootDir>/src/ceremony/$1",
    "^@/venue/(.*)$": "<rootDir>/src/venue/$1",
    "^@/rsvp/(.*)$": "<rootDir>/src/rsvp/$1",
    "^@/shared/(.*)$": "<rootDir>/src/_shared/$1",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};

export default config;
