/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */
'use strict';
/* *
 *
 *  Constants
 *
 * */
/**
 * Array of all possible operators.
 * @private
 */
const operators = ['+', '-', '*', '/', '^', '=', '<', '<=', '>', '>='];
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests an item for a Formula array.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a formula (or argument) array.
 */
function isFormula(item) {
    return Array.isArray(item);
}
/**
 * Tests an item for a Function structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a formula function.
 */
function isFunction(item) {
    return (typeof item === 'object' &&
        !(Array.isArray(item)) &&
        item.type === 'function');
}
/**
 * Tests an item for an Operator string.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is an operator string.
 */
function isOperator(item) {
    return (typeof item === 'string' &&
        operators.indexOf(item) >= 0);
}
/**
 * Tests an item for a Range structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a range.
 */
function isRange(item) {
    return (typeof item === 'object' &&
        !(Array.isArray(item)) &&
        item.type === 'range');
}
/**
 * Tests an item for a Reference structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a reference.
 */
function isReference(item) {
    return (typeof item === 'object' &&
        !(Array.isArray(item)) &&
        item.type === 'reference');
}
/**
 * Tests an item for a Value structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem|null|undefined} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a value.
 */
function isValue(item) {
    return (typeof item === 'boolean' ||
        typeof item === 'number' ||
        typeof item === 'string');
}
/* *
 *
 *  Default Export
 *
 * */
const MathFormula = {
    isFormula,
    isFunction,
    isOperator,
    isRange,
    isReference,
    isValue
};
export default MathFormula;
