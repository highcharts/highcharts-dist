import type DataEvent from '../DataEvent';
import type { RangeModifierOptions } from './RangeModifierOptions';
import DataModifier from './DataModifier.js';
import DataTable from '../DataTable.js';
/**
 * Filters out table rows with a specific value range.
 *
 * @private
 */
declare class RangeModifier extends DataModifier {
    /**
     * Default options for the range modifier.
     */
    static readonly defaultOptions: RangeModifierOptions;
    /**
     * Constructs an instance of the range modifier.
     *
     * @param {Partial<RangeModifier.Options>} [options]
     * Options to configure the range modifier.
     */
    constructor(options?: Partial<RangeModifierOptions>);
    /**
     * Options of the range modifier.
     */
    readonly options: RangeModifierOptions;
    /**
     * Replaces table rows with filtered rows.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with `modified` property as a reference.
     */
    modifyTable<T extends DataTable>(table: T, eventDetail?: DataEvent.Detail): T;
}
declare module './DataModifierType' {
    interface DataModifierTypes {
        Range: typeof RangeModifier;
    }
}
export default RangeModifier;
