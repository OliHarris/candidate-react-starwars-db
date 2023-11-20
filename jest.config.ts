// jest.config.ts

export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    peopleLukePage1: "<rootDir>/src/api/__ mocks __/peopleLukePage1.json",
    peopleOliverPage1: "<rootDir>/src/api/__ mocks __/peopleOliverPage1.json",
    peoplePage1: "<rootDir>/src/api/__ mocks __/peoplePage1.json",
    starshipsMilleniumPage1:
      "<rootDir>/src/api/__ mocks __/starshipsMilleniumPage1.json",
    starshipsPage1: "<rootDir>/src/api/__ mocks __/starshipsPage1.json",
  },
};
