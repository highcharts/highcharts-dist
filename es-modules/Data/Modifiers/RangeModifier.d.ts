import type { DataEventDetail } from '../DataEvent';
import type { RangeModifierOptions } from './RangeModifierOptions';
import DataModifier from './DataModifier.js';
import DataTable from '../DataTable.js';
/**
 * Slices the table rows based on the specified range.
 */
declare class RangeModifier extends DataModifier {
    /**
     * Default options for the range modifier.
     */
    static readonly defaultOptions: RangeModifierOptions;
    /**
     * Constructs an instance of the range modifier.
     *
     * @param {Partial<RangeModifierOptions>} [options]
     * Options to configure the range modifier.
     */
    constructor(options?: Partial<RangeModifierOptions>);
    /**
     * Options of the range modifier.
     */
    readonly options: RangeModifierOptions;
    /**
     * Replaces table rows with ranged rows. If the given table does not have
     * defined a `modified` property, the filtering is applied in-place on the
     * original table rather than on a `modified` copy.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with `modified` property as a reference or modified table, if
     * `modified` property of the original table is undefined.
     */
    modifyTable(table: DataTable, eventDetail?: DataEventDetail): DataTable;
}
declare module './DataModifierType' {
    interface DataModifierTypes {
        Range: typeof RangeModifier;
    }
}
export default RangeModifier;
