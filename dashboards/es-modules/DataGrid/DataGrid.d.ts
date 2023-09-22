import type DataEvent from '../Data/DataEvent';
import type DataGridOptions from './DataGridOptions';
import DataTable from '../Data/DataTable.js';
import Globals from './Globals.js';
/**
 * Creates a scrollable grid structure with editable data cells.
 */
declare class DataGrid {
    /**
     * Default options for all DataGrid instances.
     */
    static readonly defaultOptions: Required<DataGridOptions>;
    /**
     * Container to create the grid structure into.
     */
    container: HTMLElement;
    /**
     * Options used to create the grid structure.
     */
    options: Required<DataGridOptions>;
    /**
     * Table used to create the grid structure.
     */
    dataTable: DataTable;
    /**
     * The last hovered row.
     * @internal
     */
    hoveredRow?: HTMLElement;
    /**
     * The rendered grid rows.
     * @internal
     */
    rowElements: Array<HTMLElement>;
    /**
     * The observer object that calls the callback when the container is
     * resized.
     * @internal
     */
    containerResizeObserver: ResizeObserver;
    /**
     * The rendered grid.
     * @internal
     */
    private gridContainer;
    /**
     * The outer container inside the grid, which defines the visible view.
     * @internal
     */
    private outerContainer;
    /**
     * The oversized scroll container to provide a scrollbar.
     * @internal
     */
    private scrollContainer;
    /**
     * The inner container with columns, rows, and cells.
     * @internal
     */
    private innerContainer;
    /**
     * The container with the optional header above the grid.
     * @internal
     */
    private headerContainer?;
    /**
     * The input element of a cell after mouse focus.
     * @internal
     */
    cellInputEl?: HTMLInputElement;
    /**
     * The container for the column headers.
     * @internal
     */
    private columnHeadersContainer?;
    /**
     * The column names in a sorted array as rendered (or changed).
     * @internal
     */
    private columnNames;
    /**
     * The dragging placeholder.
     * @internal
     */
    private columnDragHandlesContainer?;
    /**
     * The dragging indicator.
     * @internal
     */
    private columnResizeCrosshair?;
    /**
     * The element when dragging.
     * @internal
     */
    private draggedResizeHandle;
    /**
     * The index of the dragged column.
     * @internal
     */
    private draggedColumnRightIx;
    /**
     * The X position in pixels when starting to drag a column.
     * @internal
     */
    private dragResizeStart?;
    /**
     * The amount of rows before align end of scrolling.
     * @internal
     */
    private prevTop;
    /**
     * The amount of rows to align for end of scrolling.
     * @internal
     */
    private scrollEndRowCount;
    /**
     * Contains the top align offset, when reaching the end of scrolling.
     * @internal
     */
    private scrollEndTop;
    /**
     * Flag to indicate the end of scrolling. Used to align the last cell with
     * the container bottom.
     * @internal
     */
    private bottom;
    /**
     * An array of the min column widths for which the text in headers is not
     * overflown.
     * @internal
     */
    private overflowHeaderWidths;
    /**
     * Creates an instance of DataGrid.
     *
     * @param container
     * Element or element ID to create the grid structure into.
     *
     * @param options
     * Options to create the grid structure.
     */
    constructor(container: (string | HTMLElement), options: Globals.DeepPartial<DataGridOptions>);
    /**
     * Update the data grid with new options.
     *
     * @param options
     * An object with new options.
     */
    update(options: Globals.DeepPartial<DataGridOptions>): void;
    /**
     * Resize a column.
     *
     * @internal
     *
     * @param width
     *        New column width.
     *
     * @param columnNameOrIndex
     *        Name or index of the column to resize, omit to resize all
     *        columns.
     *
     * @emits #afterResizeColumn
     */
    resizeColumn(width: number, columnNameOrIndex?: (string | number)): void;
    /**
     * Emits an event on this data grid to all registered callbacks of the
     * given event.
     *
     * @internal
     *
     * @param e
     * Event object with event information.
     */
    emit<E extends DataEvent>(e: E): void;
    /**
     * Add class to given element to toggle highlight.
     *
     * @internal
     *
     * @param row
     * Row to highlight.
     */
    toggleRowHighlight(row?: HTMLElement): void;
    /**
     * Registers a callback for a specific event.
     *
     * @internal
     *
     * @param type
     * Event type as a string.
     *
     * @param callback
     * Function to register for an event callback.
     *
     * @return
     * Function to unregister callback from the event.
     */
    on<E extends DataEvent>(type: E['type'], callback: DataEvent.Callback<this, E>): Function;
    /**
     * Scroll to a given row.
     *
     * @internal
     *
     * @param row
     * Row number
     */
    scrollToRow(row: number): void;
    /**
     * Check which columns should be displayed based on the individual
     * column `show` option.
     * @internal
     */
    private getColumnsToDisplay;
    /**
     * Determine whether a column is editable or not.
     *
     * @internal
     *
     * @param columnName
     * Name of the column to test.
     *
     * @return
     * Returns true when the column is editable, or false.
     */
    private isColumnEditable;
    /**
     * Get a reference to the underlying DataTable from options, or create one
     * if needed.
     *
     * @internal
     *
     * @return
     * DataTable for the DataGrid instance.
     */
    private initDataTable;
    /**
     * Render the data grid. To be called on first render, as well as when
     * options change, or the underlying data changes.
     * @internal
     */
    private render;
    /**
     * Add internal event listeners to the grid.
     * @internal
     */
    private addEvents;
    /**
     * Changes the content of the rendered cells. This is used to simulate
     * scrolling.
     *
     * @internal
     *
     * @param force
     * Whether to force the update regardless of whether the position of the
     * first row has not been changed.
     */
    private updateVisibleCells;
    /**
     * Handle user scrolling the grid
     *
     * @internal
     *
     * @param e
     * Related scroll event.
     */
    private onScroll;
    /**
     * Handle the user starting interaction with a cell.
     *
     * @internal
     *
     * @param cellEl
     * The clicked cell.
     *
     * @param columnName
     * The column the clicked cell belongs to.
     */
    private onCellClick;
    /**
     * Handle the user clicking somewhere outside the grid.
     *
     * @internal
     *
     * @param e
     * Related mouse event.
     */
    private onDocumentClick;
    /**
     * Handle hovering over rows- highlight proper row if needed.
     *
     * @internal
     *
     * @param e
     * Related mouse event.
     */
    private handleMouseOver;
    /**
     * Remove the <input> overlay and update the cell value
     * @internal
     */
    private removeCellInputElement;
    /**
     * Updates the scroll container to reflect the data size.
     * @internal
     */
    private updateScrollingLength;
    /**
     * Calculates the number of rows to render pending of cell sizes.
     *
     * @internal
     *
     * @return
     * The number rows to render.
     */
    private getNumRowsToDraw;
    /**
     * Internal method that calculates the data grid height. If the container
     * has a height declared in CSS it uses that, otherwise it uses a default.
     * @internal
     */
    getDataGridSize(): number;
    /**
     * Renders a data cell.
     *
     * @internal
     *
     * @param parentRow
     * The parent row to add the cell to.
     *
     * @param columnName
     * The column the cell belongs to.
     */
    private renderCell;
    /**
     * Renders a row of data.
     * @internal
     */
    private renderRow;
    /**
     * Allows formatting of the header cell text based on provided format
     * option. If that is not provided, the column name is returned.
     * @internal
     *
     * @param columnName
     * Column name to format.
     */
    private formatHeaderCell;
    /**
     * Allows formatting of the cell text based on provided format option.
     * If that is not provided, the cell value is returned.
     * @internal
     *
     * @param  cellValue
     * The value of the cell to format.
     *
     * @param  column
     * The column name the cell belongs to.
     */
    private formatCell;
    /**
     * Render a column header for a column.
     *
     * @internal
     *
     * @param parentEl
     * The parent element of the column header.
     *
     * @param columnName
     * The name of the column.
     */
    private renderColumnHeader;
    /**
     * Render the column headers of the table.
     * @internal
     */
    private renderColumnHeaders;
    /**
     * Refresh container elements to adapt them to new container dimensions.
     * @internal
     */
    private updateGridElements;
    /**
     * Update the column headers of the table.
     * @internal
     */
    private updateColumnHeaders;
    /**
     * Redraw existing row elements.
     * @internal
     */
    private redrawRowElements;
    /**
     * Update the column drag handles position.
     * @internal
     */
    private updateDragHandlesPosition;
    /**
     * Render initial rows before the user starts scrolling.
     * @internal
     */
    private renderInitialRows;
    /**
     * Render the drag handles for resizing columns.
     * @internal
     */
    private renderColumnDragHandles;
    /**
     * Renders the crosshair shown when resizing columns.
     *
     * @internal
     *
     * @param container
     * The container to place the crosshair in.
     */
    private renderColumnResizeCrosshair;
    /**
     * On column resize handle click.
     *
     * @internal
     *
     * @param handle
     * The drag handle being clicked.
     *
     * @param colRightIx
     * The column ix to the right of the resize handle.
     *
     * @param e
     * The mousedown event.
     */
    private onHandleMouseDown;
    /**
     * Update as we drag column resizer
     * @internal
     */
    private updateColumnResizeDrag;
    /**
     * Stop resizing a column.
     *
     * @internal
     *
     * @param handle
     * The related resize handle.
     *
     * @param e
     * The related mouse event.
     */
    private stopColumnResize;
    /**
     * Update the size of grid container.
     *
     * @internal
     *
     * @param width
     * The new width in pixel, or `null` for no change.
     *
     * @param height
     * The new height in pixel, or `null` for no change.
     */
    setSize(width?: number | null, height?: number | null): void;
    /**
     * If the grid is in the parent container that has margins, calculate the
     * height of the margins.
     * @internal
     *
     * @param  height
     * The height of the parent container.
     */
    private getMarginHeight;
}
/** @internal */
declare namespace DataGrid {
    /**
     * Possible events fired by DataGrid.
     * @internal
     */
    type Event = (ColumnResizeEvent | CellClickEvent);
    /**
     * Event when a column has been resized.
     * @internal
     */
    interface ColumnResizeEvent extends DataEvent {
        /**
         * Type of the event.
         * @internal
         */
        readonly type: 'afterResizeColumn';
        /**
         * New (or old) width of the column.
         * @internal
         */
        readonly width: number;
        /**
         * New (or old) index of the column.
         * @internal */
        readonly index?: number;
        /**
         * Name of the column.
         * @internal
         */
        readonly name?: string;
    }
    /**
     * Event when a cell has mouse focus.
     * @internal
     */
    interface CellClickEvent {
        /**
         * Type of the event.
         * @internal
         */
        readonly type: 'cellClick';
        /**
         * HTML element with focus.
         * @internal
         */
        readonly input: HTMLElement;
    }
}
export default DataGrid;
