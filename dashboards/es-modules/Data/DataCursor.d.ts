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
    /**
     * Semantic version string of the DataCursor class.
     * @internal
     */
    static readonly version: string;
    constructor(stateMap?: DataCursor.StateMap);
    /**
     * Contains arguments currently in use of an emitting loop.
     */
    private readonly emittingRegister;
    /**
     * Contains listeners of states on tables.
     */
    readonly listenerMap: DataCursor.ListenerMap;
    /**
     * Contains lasting states that are kept over multiple changes.
     */
    readonly stateMap: DataCursor.StateMap;
    /**
     * This function registers a listener for a specific state and table.
     *
     * @example
     * ```TypeScript
     * dataCursor.addListener(myTable.id, 'hover', (e: DataCursor.Event) => {
     *     if (e.cursor.type === 'position') {
     *         console.log(`Hover over row #${e.cursor.row}.`);
     *     }
     * });
     * ```
     *
     * @function #addListener
     *
     * @param {Data.DataCursor.TableId} tableId
     * The ID of the table to listen to.
     *
     * @param {Data.DataCursor.State} state
     * The state on the table to listen to.
     *
     * @param {Data.DataCursor.Listener} listener
     * The listener to register.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    addListener(tableId: DataCursor.TableId, state: DataCursor.State, listener: DataCursor.Listener): this;
    /**
     * @private
     */
    private buildEmittingTag;
    /**
     * This function emits a state cursor related to a table. It will provide
     * lasting state cursors of the table to listeners.
     *
     * @example
     * ```TypeScript
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
     * @param {Data.DataCursor.Type} cursor
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
    emitCursor(table: DataTable, cursor: DataCursor.Type, event?: Event, lasting?: boolean): this;
    /**
     * @param {Data.DataTable} table
     * The related table of the cursor.
     *
     * @param {string} group
     * The related group on the table.
     *
     * @param {Data.DataCursor.Type} cursor
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
    emitCursor(table: DataTable, group: string, cursor: DataCursor.Type, event?: Event, lasting?: boolean): this;
    /**
     * Removes a lasting state cursor.
     *
     * @function #remitCursor
     *
     * @param {string} tableId
     * ID of the related cursor table.
     *
     * @param {Data.DataCursor.Type} cursor
     * Copy or reference of the cursor.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    remitCursor(tableId: string, cursor: DataCursor.Type): this;
    /**
     * This function removes a listener.
     *
     * @function #addListener
     *
     * @param {Data.DataCursor.TableId} tableId
     * The ID of the table the listener is connected to.
     *
     * @param {Data.DataCursor.State} state
     * The state on the table the listener is listening to.
     *
     * @param {Data.DataCursor.Listener} listener
     * The listener to deregister.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    removeListener(tableId: DataCursor.TableId, state: DataCursor.State, listener: DataCursor.Listener): this;
}
/**
 * @class Data.DataCursor
 */
declare namespace DataCursor {
    type Type = (Position | Range);
    interface Position {
        type: 'position';
        column?: string;
        row?: number;
        state: State;
    }
    interface Range {
        type: 'range';
        columns?: Array<string>;
        firstRow: number;
        lastRow: number;
        state: State;
    }
    interface Event {
        cursor: Type;
        cursors: Array<Type>;
        event?: globalThis.Event;
        group?: string;
        table: DataTable;
    }
    type Listener = (this: DataCursor, e: Event) => void;
    type ListenerMap = Record<TableId, Record<State, Array<Listener>>>;
    type State = string;
    type StateMap = Record<TableId, Record<State, Array<Type>>>;
    type TableId = string;
    type TableMap = Record<TableId, DataTable>;
    /**
     * Finds the index of an cursor in an array.
     * @private
     */
    function getIndex(needle: DataCursor.Type, cursors: Array<DataCursor.Type>): number;
    /**
     * Checks whether two cursor share the same properties.
     * @private
     */
    function isEqual(cursorA: Type, cursorB: Type): boolean;
    /**
     * Checks whether a cursor is in a range.
     * @private
     */
    function isInRange(needle: Type, range: Type): boolean;
    /**
     * @private
     */
    function toPositions(cursor: Type): Array<Position>;
    /**
     * @private
     */
    function toRange(cursor: Type, defaultRange?: Range): Range;
}
export default DataCursor;
