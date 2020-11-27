module.exports = {
  rootDir: './../../',
  clearMocks: true,
  setupFiles: ['<rootDir>/configs/test/shim.js', '<rootDir>/configs/test/enzyme.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx,mjs}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  testURL: 'http://localhost',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/__tests__/**/*.(ts|js)?(x)', '<rootDir>/src/**/?(*.)+(spec|test).(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: false,
  errorOnDeprecated: true,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      diagnostics: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@src/(.*)$': '<rootDir>/src/$1',
    '@configs/(.*)$': '<rootDir>/configs/$1',
    '@api/(.*)$': '<rootDir>/src/api/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@router/(.*)$': '<rootDir>/src/router/$1',
    '@store/(.*)$': '<rootDir>/src/store/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};