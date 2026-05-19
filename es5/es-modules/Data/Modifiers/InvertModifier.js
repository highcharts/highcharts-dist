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
 *  - Wojciech Chmiel
 *  - Sophie Bremer
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
 * Inverts columns and rows in a table.
 *
 * @private
 */
var InvertModifier = /** @class */ (function (_super) {
    __extends(InvertModifier, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the invert modifier.
     *
     * @param {Partial<InvertModifierOptions>} [options]
     * Options to configure the invert modifier.
     */
    function InvertModifier(options) {
        var _this = _super.call(this) || this;
        _this.options = merge(InvertModifier.defaultOptions, options);
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
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
    InvertModifier.prototype.modifyTable = function (table, eventDetail) {
        var modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table: table });
        var modified = table.getModified();
        if (table.hasColumns(['columnIds'])) { // Inverted table
            var columnIdsColumn = ((table.deleteColumns(['columnIds']) || {})
                .columnIds || []), columns = {}, columnIds = [];
            for (var i = 0, iEnd = columnIdsColumn.length; i < iEnd; ++i) {
                columnIds.push('' + columnIdsColumn[i]);
            }
            for (var i = 0, iEnd = table.getRowCount(), row = void 0; i < iEnd; ++i) {
                row = table.getRow(i);
                if (row) {
                    columns[columnIds[i]] = row;
                }
            }
            modified.deleteColumns();
            modified.setColumns(columns);
        }
        else { // Regular table
            var columns = {};
            for (var i = 0, iEnd = table.getRowCount(), row = void 0; i < iEnd; ++i) {
                row = table.getRow(i);
                if (row) {
                    columns["".concat(i)] = row;
                }
            }
            columns.columnIds = table.getColumnIds();
            modified.deleteColumns();
            modified.setColumns(columns);
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
     * Default options for the invert modifier.
     */
    InvertModifier.defaultOptions = {
        type: 'Invert'
    };
    return InvertModifier;
}(DataModifier));
DataModifier.registerType('Invert', InvertModifier);
/* *
 *
 *  Default Export
 *
 * */
export default InvertModifier;
