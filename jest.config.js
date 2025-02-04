module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    "@environments/(.*)": "<rootDir>/src/environments/$1",
  },
  "transformIgnorePatterns": [
    "!node_modules/"
  ]
};
