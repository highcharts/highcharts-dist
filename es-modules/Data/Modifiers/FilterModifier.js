/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */
'use strict';
import DataModifier from './DataModifier.js';
import U from '../../Core/Utilities.js';
const { isFunction, merge } = U;
/* *
 *
 *  Class
 *
 * */
/**
 * Filters out table rows matching a given condition.
 */
class FilterModifier extends DataModifier {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Compiles a filter condition into a callback function.
     *
     * @param {FilterCondition} condition
     * Condition to compile.
     */
    static compile(condition) {
        if (isFunction(condition)) {
            return condition;
        }
        const op = condition.operator;
        switch (op) {
            case 'and': {
                const subs = condition.conditions.map((c) => this.compile(c));
                return (row, table, i) => subs.every((cond) => cond(row, table, i));
            }
            case 'or': {
                const subs = condition.conditions.map((c) => this.compile(c));
                return (row, table, i) => subs.some((cond) => cond(row, table, i));
            }
            case 'not': {
                const sub = this.compile(condition.condition);
                return (row, table, i) => !sub(row, table, i);
            }
        }
        const { columnId: col, value } = condition;
        switch (op) {
            case '==':
                // eslint-disable-next-line eqeqeq
                return (row) => row[col] == value;
            case '===':
                return (row) => row[col] === value;
            case '!=':
                // eslint-disable-next-line eqeqeq
                return (row) => row[col] != value;
            case '!==':
                return (row) => row[col] !== value;
            case '>':
                return (row) => (row[col] || 0) > (value || 0);
            case '>=':
                return (row) => (row[col] || 0) >= (value || 0);
            case '<':
                return (row) => (row[col] || 0) < (value || 0);
            case '<=':
                return (row) => (row[col] || 0) <= (value || 0);
            case 'empty':
                return (row) => row[col] === null || row[col] === '';
        }
        const { ignoreCase } = condition;
        const str = (val) => {
            const s = '' + val;
            return (ignoreCase ?? true) ? s.toLowerCase() : s;
        };
        switch (op) {
            case 'contains':
                return (row) => str(row[col]).includes(str(value));
            default:
                return (row) => str(row[col])[op](str(value));
        }
    }
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the filter modifier.
     *
     * @param {Partial<FilterModifier.Options>} [options]
     * Options to configure the filter modifier.
     */
    constructor(options) {
        super();
        this.options = merge(FilterModifier.defaultOptions, options);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Filters out table rows matching a given condition. If the given table
     * does not have defined a `modified` property, the filtering is applied
     * in-place on the original table rather than on a `modified` copy.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with `modified` property as a reference or modified table, if
     * `modified` property of the original table is undefined.
     */
    modifyTable(table, eventDetail) {
        const modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table });
        const { condition } = modifier.options;
        if (!condition) {
            // If no condition is set, return the unmodified table.
            return table;
        }
        const matchRow = FilterModifier.compile(condition);
        const modified = table.getModified();
        const rows = [];
        const indexes = [];
        for (let i = 0, iEnd = table.getRowCount(); i < iEnd; ++i) {
            const row = table.getRowObject(i);
            if (!row) {
                continue;
            }
            if (matchRow(row, table, i)) {
                rows.push(row);
                indexes.push(table.getOriginalRowIndex(i));
            }
        }
        modified.deleteRows();
        modified.setRows(rows);
        modified.setOriginalRowIndexes(indexes);
        modifier.emit({ type: 'afterModify', detail: eventDetail, table });
        return table;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options for the filter modifier.
 */
FilterModifier.defaultOptions = {
    type: 'Filter'
};
DataModifier.registerType('Filter', FilterModifier);
/* *
 *
 *  Default Export
 *
 * */
export default FilterModifier;
