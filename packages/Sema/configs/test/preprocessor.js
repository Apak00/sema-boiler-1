/**
 * Transpiles TypeScript to JavaScript code.
 *
 * @link https://github.com/facebook/jest/blob/master/examples/typescript/preprocessor.js
 * @copyright 2004-present Facebook. All Rights Reserved.
 */
// eslint-disable-next-line import/no-extraneous-dependencies
const tsc = require('typescript');
const tsConfig = require('../../tsconfig.json');

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx') || path.endsWith('.js')) {
      return tsc.transpile(src, tsConfig.compilerOptions, path, []);
    }
    return src;
  },
};
