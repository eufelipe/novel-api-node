module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    transform: {
        '.+\\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
        '@/tests/(.*)': '<rootDir>/tests/$1',
        '@/(.*)': '<rootDir>/src/$1',
    },
}
