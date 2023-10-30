import type CSSJSONObject from '../CSSJSONObject';
import type JSON from '../JSON';
import type Layout from './Layout.js';
import type Serializable from '../Serializable';
import Globals from '../Globals.js';
import Cell from './Cell.js';
import GUIElement from './GUIElement.js';
import { HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
/**
 * @internal
 **/
declare class Row extends GUIElement {
    /** @internal */
    static fromJSON(json: Row.JSON, layout?: Layout): (Row | undefined);
    static setContainerHeight(rowContainer: HTMLDOMElement, height?: number | string): void;
    /**
     * Constructs an instance of the Row class.
     *
     * @param {Layout} layout
     * Reference to the layout instance.
     *
     * @param {Row.Options} options
     * Options for the row.
     *
     * @param {HTMLElement} rowElement
     * The container of the row HTML element.
     */
    constructor(layout: Layout, options: Row.Options, rowElement?: HTMLElement);
    /**
     * Reference to the layout instance.
     */
    layout: Layout;
    /**
     * Array of the row cells.
     */
    cells: Array<Cell>;
    /**
     * The row options.
     */
    options: Row.Options;
    /**
     * The type of GUI element.
     */
    readonly type: GUIElement.GUIElementType;
    /**
     * HTML container of a GUIElement.
     */
    container: HTMLDOMElement;
    /**
     * Set the row cells using cell options or cellClassName.
     */
    setCells(): void;
    /** @internal */
    setCellsFromJSON(json: Array<Cell.JSON>): void;
    /**
     * Add a new Cell instance to the row cells array.
     *
     * @param {Cell.Options} [options]
     * Options for the row cell.
     *
     * @param {HTMLElement} [cellElement]
     * The container for a new cell HTML element.
     *
     * @return {Cell}
     * Returns the Cell object.
     */
    addCell(options: Cell.Options, cellElement?: HTMLElement, index?: number): Cell;
    /**
     * Destroy the element, its container, event hooks
     * and inner cells.
     */
    destroy(): void;
    /**
     * Converts the class instance to a class JSON.
     * @internal
     *
     * @return {Row.JSON}
     * Class JSON of this Row instance.
     */
    toJSON(): Row.JSON;
    /**
     * Get the row's options.
     * @returns
     * The JSON of row's options.
     *
     * @internal
     *
     */
    getOptions(): Globals.DeepPartial<Row.Options>;
    setSize(height?: number | string): void;
    getCellIndex(cell: Cell): number | undefined;
    mountCell(cell: Cell, index?: number): void;
    unmountCell(cell: Cell): void;
    getVisibleCells(): Array<Cell>;
    protected changeVisibility(setVisible?: boolean, displayStyle?: string): void;
    show(): void;
    setHighlight(remove?: boolean): void;
    getRowLevels(): Array<Row.RowLevel>;
    getRowLevelInfo(posY: number): Row.RowLevelInfo | undefined;
}
declare namespace Row {
    /**
     * @internal
     **/
    interface JSON extends Serializable.JSON<'Dashboards.Layout.Row'> {
        options: OptionsJSON;
    }
    /**
     * Options for the row.
     **/
    interface Options {
        /**
         * A unique id for the row.
         **/
        id?: string;
        /**
         * The id of the container element.
         **/
        parentContainerId?: string;
        /**
         * An array of cells to be added to the row.
         **/
        cells?: Array<Cell.Options>;
        /**
         * CSS styles for the row.
         **/
        style?: CSSJSONObject;
        /**
         * @internal
         **/
        cellsJSON?: Array<Cell.JSON>;
    }
    /**
     * @internal
     **/
    interface OptionsJSON extends JSON.Object {
        containerId: string;
        parentContainerId: string;
        cells: Array<Cell.JSON>;
        style?: CSSJSONObject;
    }
    /**
     * @internal
     **/
    interface RowLevel {
        top: number;
        bottom: number;
        cells: Array<Cell>;
    }
    /**
     * @internal
     **/
    interface RowLevelInfo {
        index: number;
        rowLevels: Array<RowLevel>;
        rowLevel: RowLevel;
    }
}
export default Row;
