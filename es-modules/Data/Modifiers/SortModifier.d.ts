import type { DataEventDetail } from '../DataEvent';
import type SortModifierOptions from './SortModifierOptions';
import DataModifier from './DataModifier.js';
import DataTable, { type Row as DataTableRow } from '../DataTable.js';
/** @private */
interface SortRowReference {
    index: number;
    row: DataTableRow;
}
/**
 * Sort table rows according to values of a column.
 *
 */
declare class SortModifier extends DataModifier {
    /**
     * Default options to group table rows.
     */
    static readonly defaultOptions: SortModifierOptions;
    private static ascending;
    private static descending;
    private static compareFactory;
    /**
     * Constructs an instance of the sort modifier.
     *
     * @param {Partial<SortModifierOptions>} [options]
     * Options to configure the sort modifier.
     */
    constructor(options?: Partial<SortModifierOptions>);
    options: SortModifierOptions;
    /**
     * Returns index and row for sort reference.
     *
     * @private
     *
     * @param {Highcharts.DataTable} table
     * Table with rows to reference.
     *
     * @return {Array<SortRowReference>}
     * Array of row references.
     */
    protected getRowReferences(table: DataTable): Array<SortRowReference>;
    modifyTable(table: DataTable, eventDetail?: DataEventDetail): DataTable;
}
declare module './DataModifierType' {
    interface DataModifierTypes {
        Sort: typeof SortModifier;
    }
}
export default SortModifier;
