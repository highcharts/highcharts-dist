/* *
 *
 *  (c) 2020-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */
'use strict';
/* *
 *
 *  Class
 *
 * */
/**
 * This class manages state cursors pointing on {@link Data.DataTable}. It
 * creates a relation between states of the user interface and the table cells,
 * columns, or rows.
 *
 * @class
 * @name Data.DataCursor
 */
var DataCursor = /** @class */ (function () {
    /* *
     *
     *  Static Properties
     *
     * */
    /* *
     *
     *  Constructor
     *
     * */
    function DataCursor(stateMap) {
        if (stateMap === void 0) { stateMap = {}; }
        this.emittingRegister = [];
        this.listenerMap = {};
        this.stateMap = stateMap;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * This function registers a listener for a specific state and table.
     *
     * @example
     * ```TypeScript
     * dataCursor.addListener(myTable.id, 'hover', (e: DataCursorEvent) => {
     *     if (e.cursor.type === 'position') {
     *         console.log(`Hover over row #${e.cursor.row}.`);
     *     }
     * });
     * ```
     *
     * @function #addListener
     *
     * @param {Data.DataCursorTableId} tableId
     * The ID of the table to listen to.
     *
     * @param {Data.DataCursorState} state
     * The state on the table to listen to.
     *
     * @param {Data.DataCursorListener} listener
     * The listener to register.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    DataCursor.prototype.addListener = function (tableId, state, listener) {
        var listenerMap = this.listenerMap[tableId] = (this.listenerMap[tableId] ||
            {});
        var listeners = listenerMap[state] = (listenerMap[state] ||
            []);
        listeners.push(listener);
        return this;
    };
    /**
     * @private
     */
    DataCursor.prototype.buildEmittingTag = function (e) {
        return (e.cursor.type === 'position' ?
            [
                e.table.id,
                e.cursor.column,
                e.cursor.row,
                e.cursor.state,
                e.cursor.type
            ] :
            [
                e.table.id,
                e.cursor.columns,
                e.cursor.firstRow,
                e.cursor.lastRow,
                e.cursor.state,
                e.cursor.type
            ]).join('\0');
    };
    /**
     * This function emits a state cursor related to a table. It will provide
     * lasting state cursors of the table to listeners.
     *
     * @example
     * ```ts
     * dataCursor.emit(myTable, {
     *     type: 'position',
     *     column: 'city',
     *     row: 4,
     *     state: 'hover',
     * });
     * ```
     *
     * @param {Data.DataTable} table
     * The related table of the cursor.
     *
     * @param {Data.DataCursorType} cursor
     * The state cursor to emit.
     *
     * @param {Event} [event]
     * Optional event information from a related source.
     *
     * @param {boolean} [lasting]
     * Whether this state cursor should be kept until it is cleared with
     * {@link DataCursor#remitCursor}.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    DataCursor.prototype.emitCursor = function (table, cursor, event, lasting) {
        var _a;
        var tableId = table.id, state = cursor.state, listeners = (this.listenerMap[tableId] &&
            this.listenerMap[tableId][state]);
        if (listeners) {
            var stateMap = this.stateMap[tableId] = ((_a = this.stateMap[tableId]) !== null && _a !== void 0 ? _a : {});
            var cursors = stateMap[cursor.state] || [];
            if (lasting) {
                if (!cursors.length) {
                    stateMap[cursor.state] = cursors;
                }
                if (getIndex(cursor, cursors) === -1) {
                    cursors.push(cursor);
                }
            }
            var e = {
                cursor: cursor,
                cursors: cursors,
                table: table
            };
            if (event) {
                e.event = event;
            }
            var emittingRegister = this.emittingRegister, emittingTag = this.buildEmittingTag(e);
            if (emittingRegister.indexOf(emittingTag) >= 0) {
                // Break call stack loops
                return this;
            }
            try {
                this.emittingRegister.push(emittingTag);
                for (var i = 0, iEnd = listeners.length; i < iEnd; ++i) {
                    listeners[i].call(this, e);
                }
            }
            finally {
                var index = this.emittingRegister.indexOf(emittingTag);
                if (index >= 0) {
                    this.emittingRegister.splice(index, 1);
                }
            }
        }
        return this;
    };
    /**
     * Removes a lasting state cursor.
     *
     * @function #remitCursor
     *
     * @param {string} tableId
     * ID of the related cursor table.
     *
     * @param {Data.DataCursorType} cursor
     * Copy or reference of the cursor.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    DataCursor.prototype.remitCursor = function (tableId, cursor) {
        var cursors = (this.stateMap[tableId] &&
            this.stateMap[tableId][cursor.state]);
        if (cursors) {
            var index = getIndex(cursor, cursors);
            if (index >= 0) {
                cursors.splice(index, 1);
            }
        }
        return this;
    };
    /**
     * This function removes a listener.
     *
     * @function #addListener
     *
     * @param {Data.DataCursorTableId} tableId
     * The ID of the table the listener is connected to.
     *
     * @param {Data.DataCursorState} state
     * The state on the table the listener is listening to.
     *
     * @param {Data.DataCursorListener} listener
     * The listener to deregister.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    DataCursor.prototype.removeListener = function (tableId, state, listener) {
        var listeners = (this.listenerMap[tableId] &&
            this.listenerMap[tableId][state]);
        if (listeners) {
            var index = listeners.indexOf(listener);
            if (index >= 0) {
                listeners.splice(index, 1);
            }
        }
        return this;
    };
    return DataCursor;
}());
/* *
 *
 *  Functions
 *
 * */
/**
 * Finds the index of an cursor in an array.
 * @private
 */
export function getIndex(needle, cursors) {
    if (needle.type === 'position') {
        for (var cursor = void 0, i = 0, iEnd = cursors.length; i < iEnd; ++i) {
            cursor = cursors[i];
            if (cursor.type === 'position' &&
                cursor.state === needle.state &&
                cursor.column === needle.column &&
                cursor.row === needle.row) {
                return i;
            }
        }
    }
    else {
        var columnNeedle = JSON.stringify(needle.columns);
        for (var cursor = void 0, i = 0, iEnd = cursors.length; i < iEnd; ++i) {
            cursor = cursors[i];
            if (cursor.type === 'range' &&
                cursor.state === needle.state &&
                cursor.firstRow === needle.firstRow &&
                cursor.lastRow === needle.lastRow &&
                JSON.stringify(cursor.columns) === columnNeedle) {
                return i;
            }
        }
    }
    return -1;
}
/**
 * Checks whether two cursor share the same properties.
 * @private
 */
export function isEqual(cursorA, cursorB) {
    if (cursorA.type === 'position' && cursorB.type === 'position') {
        return (cursorA.column === cursorB.column &&
            cursorA.row === cursorB.row &&
            cursorA.state === cursorB.state);
    }
    if (cursorA.type === 'range' && cursorB.type === 'range') {
        return (cursorA.firstRow === cursorB.firstRow &&
            cursorA.lastRow === cursorB.lastRow &&
            (JSON.stringify(cursorA.columns) ===
                JSON.stringify(cursorB.columns)));
    }
    return false;
}
/**
 * Checks whether a cursor is in a range.
 * @private
 */
export function isInRange(needle, range) {
    if (range.type === 'position') {
        range = toRange(range);
    }
    if (needle.type === 'position') {
        needle = toRange(needle, range);
    }
    var needleColumns = needle.columns;
    var rangeColumns = range.columns;
    return (needle.firstRow >= range.firstRow &&
        needle.lastRow <= range.lastRow &&
        (!needleColumns ||
            !rangeColumns ||
            needleColumns.every(function (column) { return rangeColumns.indexOf(column) >= 0; })));
}
/**
 * @private
 */
export function toPositions(cursor) {
    if (cursor.type === 'position') {
        return [cursor];
    }
    var columns = (cursor.columns || []);
    var positions = [];
    var state = cursor.state;
    for (var row = cursor.firstRow, rowEnd = cursor.lastRow; row < rowEnd; ++row) {
        if (!columns.length) {
            positions.push({
                type: 'position',
                row: row,
                state: state
            });
            continue;
        }
        for (var column = 0, columnEnd = columns.length; column < columnEnd; ++column) {
            positions.push({
                type: 'position',
                column: columns[column],
                row: row,
                state: state
            });
        }
    }
    return positions;
}
/**
 * @private
 */
export function toRange(cursor, defaultRange) {
    var _a, _b, _c, _d;
    if (cursor.type === 'range') {
        return cursor;
    }
    var range = {
        type: 'range',
        firstRow: ((_b = (_a = cursor.row) !== null && _a !== void 0 ? _a : (defaultRange && defaultRange.firstRow)) !== null && _b !== void 0 ? _b : 0),
        lastRow: ((_d = (_c = cursor.row) !== null && _c !== void 0 ? _c : (defaultRange && defaultRange.lastRow)) !== null && _d !== void 0 ? _d : Number.MAX_VALUE),
        state: cursor.state
    };
    if (typeof cursor.column !== 'undefined') {
        range.columns = [cursor.column];
    }
    return range;
}
/* *
 *
 *  Default Export
 *
 * */
export default DataCursor;
