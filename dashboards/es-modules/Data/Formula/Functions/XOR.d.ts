import type { Arguments } from '../FormulaTypes';
import type DataTable from '../../DataTable';
/**
 * Processor for the `XOR(...tests)` implementation. Returns `TRUE`, if at least
 * one of the given tests differs in result of other tests.
 *
 * @private
 * @function Formula.processorFunctions.AND
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean|number}
 * Result value of the process.
 */
declare function XOR(args: Arguments, table?: DataTable): (boolean | number);
export default XOR;
