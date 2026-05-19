import type DataTable from '../DataTable';
import type { Arguments, Formula, Range, Reference, Term, Value } from './FormulaTypes';
/**
 * Formula processor might not process a term.
 * @private
 */
export interface FormulaProcessError extends Error {
    message: string;
    name: 'FormulaProcessError';
}
export interface ProcessorFunction {
    (args: Arguments, table?: DataTable, reference?: Reference): (Value | Array<Value>);
}
/**
 * Converts non-number types to a logic number.
 *
 * @param {Highcharts.FormulaValue} value
 * Value to convert.
 *
 * @return {number}
 * Number value. `NaN` if not convertable.
 */
declare function asNumber(value: Value): number;
/**
 * Converts an argument to Value and in case of a range to an array of Values.
 *
 * @function Highcharts.Formula.getArgumentValue
 *
 * @param {Highcharts.FormulaRange|Highcharts.FormulaTerm} arg
 * Formula range or term to convert.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Highcharts.FormulaValue|Array<Highcharts.FormulaValue>}
 * Converted value.
 */
declare function getArgumentValue(arg: (Range | Term), table?: DataTable): (Value | Array<Value>);
/**
 * Converts all arguments to Values and in case of ranges to arrays of Values.
 *
 * @function Highcharts.Formula.getArgumentsValues
 *
 * @param {Highcharts.FormulaArguments} args
 * Formula arguments to convert.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Array<(Highcharts.FormulaValue|Array<Highcharts.FormulaValue>)>}
 * Converted values.
 */
declare function getArgumentsValues(args: Arguments, table?: DataTable): Array<(Value | Array<Value>)>;
/**
 * Extracts cell values from a table for a given range.
 *
 * @function Highcharts.Formula.getRangeValues
 *
 * @param {Highcharts.FormulaRange} range
 * Formula range to use.
 *
 * @param {Highcharts.DataTable} table
 * Table to extract from.
 *
 * @return {Array<Highcharts.FormulaValue>}
 * Extracted values.
 */
declare function getRangeValues(range: Range, table: DataTable): Array<Value>;
/**
 * Extracts the cell value from a table for a given reference.
 *
 * @private
 *
 * @param {Highcharts.FormulaReference} reference
 * Formula reference to use.
 *
 * @param {Highcharts.DataTable} table
 * Table to extract from.
 *
 * @return {Highcharts.FormulaValue}
 * Extracted value. 'undefined' might also indicate that the cell was not found.
 */
declare function getReferenceValue(reference: Reference, table: DataTable): Value;
/**
 * Processes a formula array on the given table. If the formula does not contain
 * references or ranges, then no table has to be provided.
 *
 * Performs formulas considering the operators precedence.
 *
 * // Example of the `2 * 3 + 4` formula:
 * 2 -> values: [2], operators: []
 * * -> values: [2], operators: [*]
 * 3 -> values: [2, 3], operators: [*]
 * // Since the higher precedence operator exists (* > +), perform it first.
 * + -> values: [6], operators: [+]
 * 4 -> values: [6, 4], operators: [+]
 * // When non-higher precedence operators remain, perform rest calculations.
 * -> values: [10], operators: []
 *
 * @private
 * @function Highcharts.processFormula
 *
 * @param {Highcharts.Formula} formula
 * Formula array to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Highcharts.FormulaValue}
 * Result value of the process. `NaN` indicates an error.
 */
declare function processFormula(formula: Formula, table?: DataTable): Value;
/**
 * Registers a function for the FormulaProcessor.
 *
 * @param {string} name
 * Name of the function in spreadsheets notation with upper case.
 *
 * @param {Highcharts.FormulaFunction} processorFunction
 * ProcessorFunction for the FormulaProcessor. This is an object so that it
 * can take additional parameter for future validation routines.
 *
 * @return {boolean}
 * Return true, if the ProcessorFunction has been registered.
 */
declare function registerProcessorFunction(name: string, processorFunction: ProcessorFunction): boolean;
/**
 * Translates relative references and ranges in-place.
 *
 * @param {Highcharts.Formula} formula
 * Formula to translate references and ranges in.
 *
 * @param {number} [columnDelta=0]
 * Column delta to translate to. Negative translate back.
 *
 * @param {number} [rowDelta=0]
 * Row delta to translate to. Negative numbers translate back.
 *
 * @return {Highcharts.Formula}
 * Formula with translated reference and ranges. This formula is equal to the
 * first argument.
 */
declare function translateReferences<T extends Arguments | Formula>(formula: T, columnDelta?: number, rowDelta?: number): T;
declare const FormulaProcessor: {
    asNumber: typeof asNumber;
    getArgumentValue: typeof getArgumentValue;
    getArgumentsValues: typeof getArgumentsValues;
    getRangeValues: typeof getRangeValues;
    getReferenceValue: typeof getReferenceValue;
    processFormula: typeof processFormula;
    processorFunctions: Record<string, ProcessorFunction>;
    registerProcessorFunction: typeof registerProcessorFunction;
    translateReferences: typeof translateReferences;
};
export default FormulaProcessor;
