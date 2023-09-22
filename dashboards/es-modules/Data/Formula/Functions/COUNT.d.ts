import type { Arguments } from '../FormulaTypes';
import type DataTable from '../../DataTable';
/**
 * Processor for the `COUNT(...values)` implementation. Returns the count of
 * given values that are numbers.
 *
 * @private
 * @function Formula.processorFunctions.COUNT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
declare function COUNT(args: Arguments, table?: DataTable): number;
export default COUNT;
