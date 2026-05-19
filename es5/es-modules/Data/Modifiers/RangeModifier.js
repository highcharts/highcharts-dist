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
 * Slices the table rows based on the specified range.
 */
var RangeModifier = /** @class */ (function (_super) {
    __extends(RangeModifier, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the range modifier.
     *
     * @param {Partial<RangeModifierOptions>} [options]
     * Options to configure the range modifier.
     */
    function RangeModifier(options) {
        var _this = _super.call(this) || this;
        _this.options = merge(RangeModifier.defaultOptions, options);
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
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
    RangeModifier.prototype.modifyTable = function (table, eventDetail) {
        var modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table: table });
        var _a = modifier.options, start = _a.start, end = _a.end;
        start = Math.max(0, start || 0);
        end = Math.min(end || Infinity, table.getRowCount());
        var length = Math.max(end - start, 0);
        var modified = table.getModified();
        modified.deleteRows();
        modified.setRows(table.getRows(start, length));
        modified.setOriginalRowIndexes(Array.from({ length: length }, function (_, i) { return table.getOriginalRowIndex(start + i); }));
        modifier.emit({ type: 'afterModify', detail: eventDetail, table: table });
        return table;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options for the range modifier.
     */
    RangeModifier.defaultOptions = {
        type: 'Range',
        start: 0,
        end: Infinity
    };
    return RangeModifier;
}(DataModifier));
DataModifier.registerType('Range', RangeModifier);
/* *
 *
 *  Default Export
 *
 * */
export default RangeModifier;
