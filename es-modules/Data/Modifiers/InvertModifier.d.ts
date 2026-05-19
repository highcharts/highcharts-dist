import type { DataEventDetail } from '../DataEvent';
import type InvertModifierOptions from './InvertModifierOptions';
import DataModifier from './DataModifier.js';
import DataTable from '../DataTable.js';
/**
 * Inverts columns and rows in a table.
 *
 * @private
 */
declare class InvertModifier extends DataModifier {
    /**
     * Default options for the invert modifier.
     */
    static readonly defaultOptions: InvertModifierOptions;
    /**
     * Constructs an instance of the invert modifier.
     *
     * @param {Partial<InvertModifierOptions>} [options]
     * Options to configure the invert modifier.
     */
    constructor(options?: Partial<InvertModifierOptions>);
    /**
     * Options of the invert modifier.
     */
    options: InvertModifierOptions;
    /**
     * Inverts rows and columns in the table. If the given table does not have
     * defined a `modified` property, the filtering is applied in-place on the
     * original table rather than on a `modified` copy.
     *
     * @param {DataTable} table
     * Table to invert.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with inverted `modified` property as a reference or modified table,
     * if `modified` property of the original table is undefined.
     */
    modifyTable(table: DataTable, eventDetail?: DataEventDetail): DataTable;
}
declare module './DataModifierType' {
    interface DataModifierTypes {
        Invert: typeof InvertModifier;
    }
}
export default InvertModifier;
