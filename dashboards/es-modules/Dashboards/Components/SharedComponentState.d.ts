import type Globals from '../Globals';
import Serializable from '../Serializable.js';
/**
 * Contains presentation information like column order, usually in relation to a
 * table instance.
 */
declare class SharedComponentState implements Serializable<SharedComponentState, SharedComponentState.JSON> {
    /**
     * Sorted array of column names.
     */
    private columnOrder?;
    private columnVisibilityMap;
    private hiddenRowIndexes;
    private hoverPoint?;
    private hoverRow?;
    private selection;
    /**
     * Whether the state has been changed since initialization.
     */
    protected isModified?: boolean;
    /**
     * Emits an event on this table to all registered callbacks of the given
     * event.
     *
     * @param {DataPresentationState.Event} e
     * Event object with event information.
     */
    emit(e: SharedComponentState.Event): void;
    /**
     * Returns an ordered array of column names.
     *
     * @return {Array<string>}
     * Array of column names in order.
     */
    getColumnOrder(): Array<string>;
    getColumnVisibility(columnName: string): boolean | undefined;
    /**
     * Returns a function for `Array.sort` to change the order of an array of
     * column names. Unknown column names come last.
     *
     * @return {DataPresentationState.ColumnOrderCallback}
     * Sort function to change the order.
     */
    getColumnSorter(): SharedComponentState.ColumnOrderCallback;
    /**
     * @return {boolean}
     * Returns true, if the state was changed since initialization.
     */
    isSet(): boolean;
    /**
     * Registers a callback for a specific event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventEmitter.Callback} callback
     * Function to register for an event callback.
     *
     * @return {Function}
     * Function to unregister callback from the event.
     */
    on(type: SharedComponentState.Event['type'], callback: (this: this, e: SharedComponentState.Event) => void): Function;
    /**
     * Sets the order of the columns in place.
     *
     * @param {Array<string>} columnOrder
     * Array of column names in order.
     *
     * @param {DataEventEmitter.Detail} [eventDetail]
     * Custom information for pending events.
     */
    setColumnOrder(columnOrder: Array<string>, eventDetail?: Globals.AnyRecord): void;
    setColumnVisibility(columnVisibility: Record<string, boolean>, eventDetail?: {}): void;
    setHiddenRows(rowIndexes: number[], hidden?: boolean): void;
    getHiddenRows(): number[];
    setHoverPoint(point?: SharedComponentState.PresentationHoverPointType | HTMLElement, eventDetail?: SharedComponentState.HoverPointEventDetails): void;
    getHoverPoint(): (SharedComponentState.PresentationHoverPointType | undefined);
    getSelection(): SharedComponentState.SelectionObjectType;
    setSelection(selection: SharedComponentState.SelectionObjectType, reset?: boolean, eventDetail?: {}): void;
    /**
     * Converts JSON to a presentation state.
     * @internal
     *
     * @param {DataPresentationState.ClassJSON} json
     * JSON (usually with a $class property) to convert.
     *
     * @return {DataPresentationState}
     * Class instance from the JSON.
     */
    fromJSON(json: SharedComponentState.JSON): SharedComponentState;
    /**
     * Converts the presentation state to JSON.
     * @internal
     *
     * @return {SharedComponentState.JSON}
     * JSON of this class instance.
     */
    toJSON(): SharedComponentState.JSON;
}
/**
 * Additionally provided types for events and JSON conversion.
 */
declare namespace SharedComponentState {
    /**
     * Event types related to the column order.
     */
    type ColumnOrderEventType = ('columnOrderChange' | 'afterColumnOrderChange');
    type ColumnVisibilityEventType = ('columnVisibilityChange' | 'afterColumnVisibilityChange');
    type HoverPointEventType = ('hoverPointChange' | 'afterHoverPointChange');
    type selectionEventType = ('selectionChange' | 'afterSelectionChange');
    type eventTypes = (selectionEventType | HoverPointEventType | ColumnVisibilityEventType);
    /**
     * Function to sort an array of column names.
     */
    interface ColumnOrderCallback {
        (a: string, b: string): number;
    }
    interface HoverPointEventDetails {
        detail?: Globals.AnyRecord;
        isDataGrid?: boolean;
        sender?: string;
    }
    /**
     * All information objects of DataPrsentationState events.
     */
    type Event = (ColumnOrderEvent | ColumnVisibilityEvent | PointHoverEvent | SelectionEvent | HiddenRowEvent);
    /**
     * Describes the information object for order-related events.
     */
    interface ColumnOrderEvent {
        type: ColumnOrderEventType;
        detail?: Globals.AnyRecord;
        newColumnOrder: Array<string>;
        oldColumnOrder: Array<string>;
    }
    interface ColumnVisibilityEvent {
        type: ColumnVisibilityEventType;
        detail?: Globals.AnyRecord;
        visibilityMap: Record<string, boolean>;
    }
    interface HiddenRowEvent {
        type: ('afterSetHiddenRows');
        detail?: Globals.AnyRecord;
        hiddenRows: number[];
    }
    interface PointHoverEvent {
        type: HoverPointEventType;
        detail?: Globals.AnyRecord;
        hoverPoint?: PresentationHoverPointType;
        hoverRow?: HTMLElement;
    }
    type ColumnVisibilityType = Record<string, boolean>;
    type SelectionObjectType = Record<string, {
        columnName?: string;
        min?: number;
        max?: number;
    }>;
    type PresentationHoverPointType = Partial<Globals.AnyRecord>;
    interface SelectionEvent {
        type: selectionEventType;
        detail?: Globals.AnyRecord;
        reset: boolean;
        selection: Record<string, {
            min?: number | undefined;
            max?: number | undefined;
        }>;
    }
    /**
     * Describes the class JSON of a presentation state.
     */
    interface JSON extends Serializable.JSON<'Dashboards.SharedComponentState'> {
        columnOrder?: Array<string>;
        visibilityMap?: ColumnVisibilityType;
        hoverpoint?: {
            x: number;
            y: number;
            id: string;
        };
        selection?: SelectionObjectType;
    }
}
export default SharedComponentState;
