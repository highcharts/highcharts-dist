import type { Formula } from './FormulaTypes.js';
/**
 * Formula parser might struggle over a syntax error.
 * @private
 */
export interface FormulaParserError extends Error {
    message: string;
    name: 'FormulaParseError';
}
/**
 * Converts a spreadsheet formula string into a formula array. Throws a
 * `FormulaParserError` when the string can not be parsed.
 *
 * @private
 * @function Formula.parseFormula
 *
 * @param {string} text
 * Spreadsheet formula string, without the leading `=`.
 *
 * @param {boolean} alternativeSeparators
 * * `false` to expect `,` between arguments and `.` in decimals.
 * * `true` to expect `;` between arguments and `,` in decimals.
 *
 * @return {Formula.Formula}
 * Formula array representing the string.
 */
declare function parseFormula(text: string, alternativeSeparators: boolean): Formula;
declare const FormulaParser: {
    parseFormula: typeof parseFormula;
};
export default FormulaParser;
