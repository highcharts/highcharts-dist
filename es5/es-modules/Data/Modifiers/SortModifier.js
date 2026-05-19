/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Dawid Draguła
 *
 * */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import DataModifier from './DataModifier.js';
import { merge } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * Sort table rows according to values of a column.
 *
 */
var SortModifier = /** @class */ (function (_super) {
    __extends(SortModifier, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the sort modifier.
     *
     * @param {Partial<SortModifierOptions>} [options]
     * Options to configure the sort modifier.
     */
    function SortModifier(options) {
        var _this = _super.call(this) || this;
        _this.options = merge(SortModifier.defaultOptions, options);
        return _this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    SortModifier.ascending = function (a, b) {
        return ((a || 0) < (b || 0) ? -1 :
            (a || 0) > (b || 0) ? 1 :
                0);
    };
    SortModifier.descending = function (a, b) {
        return ((b || 0) < (a || 0) ? -1 :
            (b || 0) > (a || 0) ? 1 :
                0);
    };
    SortModifier.compareFactory = function (direction, customCompare) {
        if (customCompare) {
            if (direction === 'desc') {
                return function (a, b) { return -customCompare(a, b); };
            }
            return customCompare;
        }
        return (direction === 'asc' ?
            SortModifier.ascending :
            SortModifier.descending);
    };
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
     * @return {Array<SortRowReference>}
     * Array of row references.
     */
    SortModifier.prototype.getRowReferences = function (table) {
        var rows = table.getRows(), rowReferences = [];
        for (var i = 0, iEnd = rows.length; i < iEnd; ++i) {
            rowReferences.push({
                index: i,
                row: rows[i]
            });
        }
        return rowReferences;
    };
    SortModifier.prototype.modifyTable = function (table, eventDetail) {
        var _a;
        var modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table: table });
        var columnIds = table.getColumnIds(), rowCount = table.getRowCount(), rowReferences = this.getRowReferences(table), _b = modifier.options, direction = _b.direction, orderInColumn = _b.orderInColumn, customCompare = _b.compare, modified = table.getModified();
        var orderBy = ('columns' in modifier.options ?
            modifier.options.columns :
            [modifier.options.orderByColumn]);
        var orderByIndexes = [];
        for (var i = 0, iEnd = orderBy.length; i < iEnd; ++i) {
            var sort = orderBy[i];
            var isString = typeof sort === 'string';
            var column = isString ? sort : sort.column;
            var columnIndex = columnIds.indexOf(column);
            if (columnIndex === -1) {
                continue;
            }
            orderByIndexes.push({
                columnIndex: columnIndex,
                compare: SortModifier.compareFactory(isString ? direction : (sort.direction || direction), isString ? customCompare : (sort.compare || customCompare))
            });
        }
        if (orderByIndexes.length) {
            rowReferences.sort(function (a, b) {
                for (var i = 0, iEnd = orderByIndexes.length; i < iEnd; ++i) {
                    var _a = orderByIndexes[i], columnIndex = _a.columnIndex, compare = _a.compare;
                    var result = compare(a.row[columnIndex], b.row[columnIndex]);
                    if (result) {
                        return result;
                    }
                }
                return a.index - b.index;
            });
        }
        if (orderInColumn) {
            var column = [];
            for (var i = 0; i < rowCount; ++i) {
                column[rowReferences[i].index] = i;
            }
            modified.setColumns((_a = {}, _a[orderInColumn] = column, _a));
        }
        else {
            var originalIndexes = [];
            var rows = [];
            var rowReference = void 0;
            for (var i = 0; i < rowCount; ++i) {
                rowReference = rowReferences[i];
                originalIndexes.push(table.getOriginalRowIndex(rowReference.index));
                rows.push(rowReference.row);
            }
            modified.setRows(rows, 0);
            modified.setOriginalRowIndexes(originalIndexes);
        }
        modifier.emit({ type: 'afterModify', detail: eventDetail, table: table });
        return table;
    };
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
    return SortModifier;
}(DataModifier));
DataModifier.registerType('Sort', SortModifier);
/* *
 *
 *  Default Export
 *
 * */
export default SortModifier;
