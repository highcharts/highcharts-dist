/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Dawid Dragula
 *
 * */
'use strict';
import DataModifier from './DataModifier.js';
import U from '../../Core/Utilities.js';
const { merge } = U;
/* *
 *
 *  Class
 *
 * */
/**
 * Sort table rows according to values of a column.
 *
 */
class SortModifier extends DataModifier {
    /* *
     *
     *  Static Functions
     *
     * */
    static ascending(a, b) {
        return ((a || 0) < (b || 0) ? -1 :
            (a || 0) > (b || 0) ? 1 :
                0);
    }
    static descending(a, b) {
        return ((b || 0) < (a || 0) ? -1 :
            (b || 0) > (a || 0) ? 1 :
                0);
    }
    static compareFactory(direction, customCompare) {
        if (customCompare) {
            if (direction === 'desc') {
                return (a, b) => -customCompare(a, b);
            }
            return customCompare;
        }
        return (direction === 'asc' ?
            SortModifier.ascending :
            SortModifier.descending);
    }
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the sort modifier.
     *
     * @param {Partial<SortDataModifier.Options>} [options]
     * Options to configure the sort modifier.
     */
    constructor(options) {
        super();
        this.options = merge(SortModifier.defaultOptions, options);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Returns index and row for sort reference.
     *
     * @private
     *
     * @param {Highcharts.DataTable} table
     * Table with rows to reference.
     *
     * @return {Array<SortModifier.RowReference>}
     * Array of row references.
     */
    getRowReferences(table) {
        const rows = table.getRows(), rowReferences = [];
        for (let i = 0, iEnd = rows.length; i < iEnd; ++i) {
            rowReferences.push({
                index: i,
                row: rows[i]
            });
        }
        return rowReferences;
    }
    modifyTable(table, eventDetail) {
        const modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table });
        const columnIds = table.getColumnIds(), rowCount = table.getRowCount(), rowReferences = this.getRowReferences(table), { direction, orderInColumn, compare: customCompare } = modifier.options, modified = table.getModified();
        const orderBy = ('columns' in modifier.options ?
            modifier.options.columns :
            [modifier.options.orderByColumn]);
        const orderByIndexes = [];
        for (let i = 0, iEnd = orderBy.length; i < iEnd; ++i) {
            const sort = orderBy[i];
            const isString = typeof sort === 'string';
            const column = isString ? sort : sort.column;
            const columnIndex = columnIds.indexOf(column);
            if (columnIndex === -1) {
                continue;
            }
            orderByIndexes.push({
                columnIndex,
                compare: SortModifier.compareFactory(isString ? direction : (sort.direction || direction), isString ? customCompare : (sort.compare || customCompare))
            });
        }
        if (orderByIndexes.length) {
            rowReferences.sort((a, b) => {
                for (let i = 0, iEnd = orderByIndexes.length; i < iEnd; ++i) {
                    const { columnIndex, compare } = orderByIndexes[i];
                    const result = compare(a.row[columnIndex], b.row[columnIndex]);
                    if (result) {
                        return result;
                    }
                }
                return a.index - b.index;
            });
        }
        if (orderInColumn) {
            const column = [];
            for (let i = 0; i < rowCount; ++i) {
                column[rowReferences[i].index] = i;
            }
            modified.setColumns({ [orderInColumn]: column });
        }
        else {
            const originalIndexes = [];
            const rows = [];
            let rowReference;
            for (let i = 0; i < rowCount; ++i) {
                rowReference = rowReferences[i];
                originalIndexes.push(table.getOriginalRowIndex(rowReference.index));
                rows.push(rowReference.row);
            }
            modified.setRows(rows, 0);
            modified.setOriginalRowIndexes(originalIndexes);
        }
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
 * Default options to group table rows.
 */
SortModifier.defaultOptions = {
    type: 'Sort',
    direction: 'desc',
    orderByColumn: 'y'
};
DataModifier.registerType('Sort', SortModifier);
/* *
 *
 *  Default Export
 *
 * */
export default SortModifier;
