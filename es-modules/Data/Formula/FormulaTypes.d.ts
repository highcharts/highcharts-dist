/**
 * Arguments array of a formula function with terms and ranges.
 */
export type Arguments = Array<(Range | Term)>;
/**
 * Formula array with terms and operators.
 */
export type Formula = Array<(Operator | Term)>;
/**
 * Formula function with an arguments array.
 */
export interface Function {
    args: Arguments;
    name: string;
    type: 'function';
}
/**
 * Item in arguments and formulas.
 */
export type Item = (Operator | Range | Term);
/**
 * Formula operators, either basic arithmetic, or basic logic.
 */
export type Operator = ('+' | '-' | '*' | '/' | '^' | '=' | '<' | '<=' | '>' | '>=');
/**
 * Represents a range to cells of a table.
 */
export interface Range {
    beginColumn: number;
    beginColumnRelative?: true;
    beginRow: number;
    beginRowRelative?: true;
    endColumn: number;
    endColumnRelative?: true;
    endRow: number;
    endRowRelative?: true;
    type: 'range';
}
/**
 * Represents a reference to a table cell.
 */
export interface Reference {
    column: number;
    columnRelative?: true;
    row: number;
    rowRelative?: true;
    type: 'reference';
    isNegative?: boolean;
}
/**
 * A term represents some form of processing into a value or is already a value.
 */
export type Term = (Formula | Function | Reference | Value);
/**
 * A value to use in a operation or process.
 */
export type Value = (boolean | number | string);
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
declare function isFormula(item: Item): item is Formula;
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
declare function isFunction(item: Item): item is Function;
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
declare function isOperator(item: Item): item is Operator;
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
declare function isRange(item: Item): item is Range;
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
declare function isReference(item: Item): item is Reference;
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
declare function isValue(item: (Item | null | undefined)): item is Value;
declare const MathFormula: {
    isFormula: typeof isFormula;
    isFunction: typeof isFunction;
    isOperator: typeof isOperator;
    isRange: typeof isRange;
    isReference: typeof isReference;
    isValue: typeof isValue;
};
export default MathFormula;
