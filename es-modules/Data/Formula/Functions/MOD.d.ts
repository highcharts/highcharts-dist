import type { Arguments } from '../FormulaTypes';
import type DataTable from '../../DataTable';
/**
 * Processor for the `MOD(value1, value2)` implementation. Calculates the rest
 * of the division with the given values.
 *
 * @private
 * @function Formula.processorFunctions.MOD
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
declare function MOD(args: Arguments, table?: DataTable): number;
export default MOD;
