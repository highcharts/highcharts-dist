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
import { isFunction, merge } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * Filters out table rows matching a given condition.
 */
var FilterModifier = /** @class */ (function (_super) {
    __extends(FilterModifier, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the filter modifier.
     *
     * @param {Partial<FilterModifierOptions>} [options]
     * Options to configure the filter modifier.
     */
    function FilterModifier(options) {
        var _this = _super.call(this) || this;
        _this.options = merge(FilterModifier.defaultOptions, options);
        return _this;
    }
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
    FilterModifier.compile = function (condition) {
        var _this = this;
        if (isFunction(condition)) {
            return condition;
        }
        var op = condition.operator;
        switch (op) {
            case 'and': {
                var subs_1 = condition.conditions.map(function (c) { return _this.compile(c); });
                return function (row, table, i) { return subs_1.every(function (cond) { return cond(row, table, i); }); };
            }
            case 'or': {
                var subs_2 = condition.conditions.map(function (c) { return _this.compile(c); });
                return function (row, table, i) { return subs_2.some(function (cond) { return cond(row, table, i); }); };
            }
            case 'not': {
                var sub_1 = this.compile(condition.condition);
                return function (row, table, i) { return !sub_1(row, table, i); };
            }
        }
        var col = condition.columnId, value = condition.value;
        switch (op) {
            case '==':
                // eslint-disable-next-line eqeqeq
                return function (row) { return row[col] == value; };
            case '===':
                return function (row) { return row[col] === value; };
            case '!=':
                // eslint-disable-next-line eqeqeq
                return function (row) { return row[col] != value; };
            case '!==':
                return function (row) { return row[col] !== value; };
            case '>':
                return function (row) { return (row[col] || 0) > (value || 0); };
            case '>=':
                return function (row) { return (row[col] || 0) >= (value || 0); };
            case '<':
                return function (row) { return (row[col] || 0) < (value || 0); };
            case '<=':
                return function (row) { return (row[col] || 0) <= (value || 0); };
            case 'empty':
                return function (row) { return row[col] === null || row[col] === ''; };
        }
        var ignoreCase = condition.ignoreCase;
        var str = function (val) {
            var s = '' + val;
            return (ignoreCase !== null && ignoreCase !== void 0 ? ignoreCase : true) ? s.toLowerCase() : s;
        };
        switch (op) {
            case 'contains':
                return function (row) { return str(row[col]).includes(str(value)); };
            default:
                return function (row) { return str(row[col])[op](str(value)); };
        }
    };
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
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with `modified` property as a reference or modified table, if
     * `modified` property of the original table is undefined.
     */
    FilterModifier.prototype.modifyTable = function (table, eventDetail) {
        var modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table: table });
        var condition = modifier.options.condition;
        if (!condition) {
            // If no condition is set, return the unmodified table.
            return table;
        }
        var matchRow = FilterModifier.compile(condition);
        var modified = table.getModified();
        var rows = [];
        var indexes = [];
        for (var i = 0, iEnd = table.getRowCount(); i < iEnd; ++i) {
            var row = table.getRowObject(i);
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
        modifier.emit({ type: 'afterModify', detail: eventDetail, table: table });
        return table;
    };
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
    return FilterModifier;
}(DataModifier));
DataModifier.registerType('Filter', FilterModifier);
/* *
 *
 *  Default Export
 *
 * */
export default FilterModifier;
