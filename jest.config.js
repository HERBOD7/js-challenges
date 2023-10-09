module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/*.js?(x)', '**/?(*.)+(test).js'],
    transform: {
        '^.+\\.(js)?$': 'babel-jest',
    },
    testPathIgnorePatterns: ['/node_modules/'],
};