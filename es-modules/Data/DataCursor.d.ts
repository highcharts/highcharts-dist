import type DataTable from './DataTable';
/**
 * This class manages state cursors pointing on {@link Data.DataTable}. It
 * creates a relation between states of the user interface and the table cells,
 * columns, or rows.
 *
 * @class
 * @name Data.DataCursor
 */
declare class DataCursor {
    constructor(stateMap?: StateMap);
    /**
     * Contains arguments currently in use of an emitting loop.
     */
    private readonly emittingRegister;
    /**
     * Contains listeners of states on tables.
     */
    readonly listenerMap: ListenerMap;
    /**
     * Contains lasting states that are kept over multiple changes.
     */
    readonly stateMap: StateMap;
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
    addListener(tableId: TableId, state: State, listener: Listener): this;
    /**
     * @private
     */
    private buildEmittingTag;
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
    emitCursor(table: DataTable, cursor: Type, event?: globalThis.Event, lasting?: boolean): this;
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
    remitCursor(tableId: string, cursor: Type): this;
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
    removeListener(tableId: TableId, state: State, listener: Listener): this;
}
export type Type = (Position | Range);
export interface Position {
    type: 'position';
    column?: string;
    row?: number;
    state: State;
    sourceId?: string;
}
export interface Range {
    type: 'range';
    columns?: Array<string>;
    firstRow: number;
    lastRow: number;
    state: State;
    sourceId?: string;
}
export interface Event {
    cursor: Type;
    cursors: Array<Type>;
    event?: globalThis.Event;
    table: DataTable;
}
export type Listener = (this: DataCursor, e: Event) => void;
export type ListenerMap = Record<TableId, Record<State, Array<Listener>>>;
export type State = string;
export type StateMap = Record<TableId, Record<State, Array<Type>>>;
export type TableId = string;
export type TableMap = Record<TableId, DataTable>;
/**
 * Finds the index of an cursor in an array.
 * @private
 */
export declare function getIndex(needle: Type, cursors: Array<Type>): number;
/**
 * Checks whether two cursor share the same properties.
 * @private
 */
export declare function isEqual(cursorA: Type, cursorB: Type): boolean;
/**
 * Checks whether a cursor is in a range.
 * @private
 */
export declare function isInRange(needle: Type, range: Type): boolean;
/**
 * @private
 */
export declare function toPositions(cursor: Type): Array<Position>;
/**
 * @private
 */
export declare function toRange(cursor: Type, defaultRange?: Range): Range;
export default DataCursor;
