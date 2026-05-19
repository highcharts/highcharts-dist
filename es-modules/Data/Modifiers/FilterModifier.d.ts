import type { DataEventDetail } from '../DataEvent';
import type { FilterModifierOptions } from './FilterModifierOptions';
import DataModifier from './DataModifier.js';
import DataTable from '../DataTable.js';
/**
 * Filters out table rows matching a given condition.
 */
declare class FilterModifier extends DataModifier {
    /**
     * Default options for the filter modifier.
     */
    static readonly defaultOptions: FilterModifierOptions;
    /**
     * Compiles a filter condition into a callback function.
     *
     * @param {FilterCondition} condition
     * Condition to compile.
     */
    private static compile;
    /**
     * Constructs an instance of the filter modifier.
     *
     * @param {Partial<FilterModifierOptions>} [options]
     * Options to configure the filter modifier.
     */
    constructor(options?: Partial<FilterModifierOptions>);
    /**
     * Options of the filter modifier.
     */
    readonly options: FilterModifierOptions;
    /**
     * Filters out table rows matching a given condition. If the given table
     * does not have defined a `modified` property, the filtering is applied
     * in-place on the original table rather than on a `modified` copy.
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
        Filter: typeof FilterModifier;
    }
}
export default FilterModifier;
