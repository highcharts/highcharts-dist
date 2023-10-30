import type CSSJSONObject from '../CSSJSONObject';
import type Board from '../Board.js';
import type JSON from '../JSON';
import type Serializable from '../Serializable';
import Cell from './Cell.js';
import Row from './Row.js';
import GUIElement from './GUIElement.js';
import Globals from '../Globals.js';
/**
 * @internal
 **/
declare class Layout extends GUIElement {
    /** @internal */
    static fromJSON(json: Layout.JSON, board: Board, parentCell?: Cell): Layout | undefined;
    /** @internal */
    static importLocal(id: string, board: Board): Layout | undefined;
    /**
     * Constructs an instance of the Layout class.
     *
     * @param {Dashboard} board
     * Reference to the dashboard instance.
     *
     * @param {Layout.Options} options
     * Options for the layout.
     */
    constructor(board: Board, options: Layout.Options, parentCell?: Cell);
    /**
     * Reference to the dashboard instance.
     */
    board: Board;
    /**
     * Array of the layout rows.
     */
    rows: Array<Row>;
    /**
     * The type of GUI element.
     */
    readonly type: GUIElement.GUIElementType;
    /**
     * The layout options.
     */
    options: Layout.Options;
    copyId?: string;
    level: number;
    parentCell?: Cell;
    /**
     * HTML container of a GUIElement.
     */
    container: HTMLElement;
    /**
     * Set the layout rows using rows options or rowClassName.
     */
    setRows(): void;
    /** @internal */
    setRowsFromJSON(json: Array<Row.JSON>): void;
    /**
     * Add a new Row instance to the layout rows array.
     *
     * @param {Row.Options} options
     * Options of a row.
     *
     * @param {HTMLElement} rowElement
     * The container for a new row HTML element.
     *
     * @return {Row}
     * Returns the Row object.
     */
    addRow(options: Row.Options, rowElement?: HTMLElement, index?: number): Row;
    /**
     * Destroy the element, its container, event hooks
     * and inner rows.
     */
    destroy(): void;
    /**
     * Export layout's options and save in the local storage
     * @internal
     */
    exportLocal(): void;
    getRowIndex(row: Row): number | undefined;
    mountRow(row: Row, index: number): void;
    unmountRow(row: Row): void;
    getVisibleRows(): Array<Row>;
    protected changeVisibility(setVisible?: boolean): void;
    /**
     * Converts the class instance to a class JSON.
     * @internal
     *
     * @return {Layout.JSON}
     * Class JSON of this Layout instance.
     */
    toJSON(): Layout.JSON;
    /**
     * Get the layout's options.
     * @returns
     * The JSON of layout's options.
     *
     * @internal
     *
     */
    getOptions(): Globals.DeepPartial<Layout.Options>;
}
interface Layout {
    options: Layout.Options;
}
declare namespace Layout {
    /**
     * @internal
     **/
    interface JSON extends Serializable.JSON<'Dashboards.Layout'> {
        options: OptionsJSON;
    }
    /**
     * Each layout's options.
     **/
    interface Options {
        /**
         * Unique id of the layout.
         **/
        id?: string;
        /**
         * Id of the parent container.
         * @internal
         **/
        parentContainerId?: string;
        /**
         * @internal
         **/
        copyId?: string;
        /**
         * The class name of the layout container.
         **/
        layoutClassName?: string;
        /**
         * The class name applied to each row that is in that exact layout.
         * Note that the layout container is also treated as a row thus this
         * class is also being applied to the layout container.
         **/
        rowClassName?: string;
        /**
         * The class name applied to each cell that is in that exact layout.
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/gui/cell-class-name/ | Set cell class names}
         **/
        cellClassName?: string;
        /**
         * An array of rows. Each row can contain an array of cells.
         **/
        rows?: Array<Row.Options>;
        /**
         * CSS styles of the layout.
         **/
        style?: CSSJSONObject;
        /**
         * @internal
         **/
        rowsJSON?: Array<Row.JSON>;
    }
    /**
     * @internal
     **/
    interface OptionsJSON extends JSON.Object {
        containerId: string;
        parentContainerId: string;
        rows: Array<Row.JSON>;
        style?: CSSJSONObject;
    }
}
export default Layout;
