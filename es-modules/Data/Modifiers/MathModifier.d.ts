import type { DataEventDetail } from '../DataEvent';
import type DataTable from '../DataTable';
import type { Column as DataTableColumn } from '../DataTable';
import type { Formula } from '../Formula/Formula';
import type { MathModifierOptions } from './MathModifierOptions';
import DataModifier from './DataModifier.js';
/**
 * Replaces formula strings in a table with calculated values.
 *
 * @class
 * @name Highcharts.DataModifier.types.MathModifier
 * @augments Highcharts.DataModifier
 */
declare class MathModifier extends DataModifier {
    /**
     * Default options of MathModifier.
     * @private
     */
    static readonly defaultOptions: MathModifierOptions;
    constructor(options: Partial<MathModifierOptions>);
    options: MathModifierOptions;
    modifyTable(table: DataTable, eventDetail?: DataEventDetail): DataTable;
    /**
     * Process a column by replacing formula strings with calculated values.
     *
     * @private
     *
     * @param {Highcharts.DataTable} table
     * Table to extract column from and use as reference.
     *
     * @param {string} columnId
     * Id of column to process.
     *
     * @param {number} rowIndex
     * Row index to start the replacing process from.
     *
     * @return {Highcharts.DataTableColumn}
     * Returns the processed table column.
     */
    protected processColumn(table: DataTable, columnId: string, rowIndex?: number): DataTableColumn;
    /**
     * Process a column by replacing cell values with calculated values from a
     * given formula.
     *
     * @private
     *
     * @param {Highcharts.Formula} formula
     * Formula to use for processing.
     *
     * @param {Highcharts.DataTable} table
     * Table to extract column from and use as reference.
     *
     * @param {number} rowStart
     * Row index to start the replacing process from.
     *
     * @param {number} rowEnd
     * Row index to end the replacing process.
     *
     * @return {Highcharts.DataTableColumn}
     * Returns the processed table column.
     */
    protected processColumnFormula(formula: Formula, table: DataTable, rowStart?: number, rowEnd?: number): DataTableColumn;
}
declare module './DataModifierType' {
    interface DataModifierTypes {
        Math: typeof MathModifier;
    }
}
export default MathModifier;
