import type Component from '../Components/Component.js';
import type CSSJSONObject from '../CSSJSONObject';
import type { HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
import type JSON from '../JSON';
import type LayoutType from './Layout';
import type Row from './Row';
import type Serializable from '../Serializable';
import Globals from '../Globals.js';
import GUIElement from './GUIElement.js';
/**
 * @internal
 **/
declare class Cell extends GUIElement {
    /** @internal */
    static fromJSON(json: Cell.JSON, row?: Row): (Cell | undefined);
    /**
     * Constructs an instance of the Cell class.
     *
     * @param {Row} row
     * Reference to the row instance.
     *
     * @param {Cell.Options} options
     * Options for the cell.
     *
     * @param {HTMLElement} cellElement
     * The container of the cell HTML element.
     */
    constructor(row: Row, options: Cell.Options, cellElement?: HTMLElement);
    /**
     * Cell id.
     */
    id: string;
    /**
     * The type of GUI element.
     */
    readonly type: GUIElement.GUIElementType;
    /**
     * Reference to the row instance.
     */
    row: Row;
    /**
     * The cell options.
     */
    options: Cell.Options;
    /**
     * Component mounted in the cell.
     */
    mountedComponent?: Component;
    /**
     * Layout nested in the cell.
     */
    nestedLayout?: LayoutType;
    /**
     * Cell highlight flag.
     */
    isHighlighted?: boolean;
    /**
     * HTML container of a GUIElement.
     */
    container: HTMLElement;
    /**
     * Create a nested layout in the cell and assign it to the nestedCell
     * property.
     * @internal
     */
    setNestedLayout(): void;
    /**
     * Mount component from JSON.
     * @internal
     *
     * @param {Component.JSON} [json]
     * Component JSON.
     *
     * @param {HTMLDOMElement} [cellContainer]
     * Cell container
     *
     * @return {boolean}
     * Returns true, if the component created from JSON is mounted,
     * otherwise false.
     */
    mountComponentFromJSON(json: Component.JSON, cellContainer: (HTMLDOMElement | undefined)): boolean;
    /**
     * Destroy the element, its container, event hooks
     * and mounted component.
     */
    destroy(): void;
    /**
     * Converts the class instance to a class JSON.
     * @internal
     *
     * @return {Cell.JSON}
     * Class JSON of this Cell instance.
     */
    toJSON(): Cell.JSON;
    /**
     * Get the cell's options.
     * @returns
     * The JSON of cell's options.
     *
     * @internal
     *
     */
    getOptions(): Globals.DeepPartial<Cell.Options>;
    protected changeVisibility(setVisible?: boolean): void;
    getParentCell(level: number): (Cell | undefined);
    getOverlappingLevels(align: string, // left, right, top, bottom
    levelMaxGap: number, // max distance between levels
    offset?: number): Array<number>;
    reflow(dashContainerSize?: string): void;
    /**
     * Set cell size.
     *
     * @param width
     * % value or 'auto' or px
     *
     * @param height
     * value in px
     */
    setSize(width?: (string | number), height?: (string | number)): void;
    updateSize(width: string, // % value or 'auto' or px
    rwdMode?: string): void;
    setHighlight(remove?: boolean): void;
    setActiveState(): void;
    /**
     * Enables or disables the loading indicator in the cell.
     *
     * @internal
     */
    setLoadingState(enabled?: boolean): void;
    private convertWidthToValue;
}
declare namespace Cell {
    /**
     * Responsive options of the cell.
     */
    interface CellResponsiveOptions {
        /**
         * The width, that should the cell have in the given responsive mode.
         */
        width: (string | number);
    }
    /**
     * @internal
     **/
    interface JSON extends Serializable.JSON<'Dashboards.Layout.Cell'> {
        options: OptionsJSON;
    }
    /**
     * Options for each cell.
     **/
    interface Options {
        /**
         * Unique cell id.
         **/
        id: string;
        /**
         * Width of the cell. Can be a percentage value, pixels or a fraction.
         *
         * The fraction converts value into percents like in CSS grid is.
         * For example `1/3` means `33.333%`.
         *
         * Examples:
         * ```
         * width: 300 // 300px
         * ```
         * ```
         * width: '300px'
         * ```
         * ```
         * width: '1/3' // 33.333%
         * ```
         * ```
         * width: '33.333%'
         * ```
         *
         *  Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/gui/dimensions/ | Set cell dimensions}
         **/
        width?: (string | number);
        /**
         * Height of the cell.
         *
         * Examples:
         * ```
         * height: 300 // 300px
         * ```
         * ```
         * height: '300px'
         * ```
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/gui/dimensions/ | Set cell dimensions}
         **/
        height?: (string | number);
        /**
         * CSS styles for cell container.
         **/
        style?: CSSJSONObject;
        /**
         * Id of the container that holds the cell.
         **/
        parentContainerId?: string;
        /**
         * @internal
         **/
        mountedComponentJSON?: Component.JSON;
        /**
         * To create a nested layout, add a layout object to a cell.
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/gui/nested-layout/ | Nested layout}
         **/
        layout?: LayoutType.Options;
        /**
         * To create nested layout from JSON config.
         */
        layoutJSON?: LayoutType.JSON;
        /**
         * Options for responsive design.
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/gui/responsive/ | Responsive cell width}
         **/
        responsive?: Record<string, CellResponsiveOptions>;
    }
    /**
     * @internal
     **/
    interface OptionsJSON extends JSON.Object {
        width?: (string | number);
        height?: (string | number);
        containerId: string;
        parentContainerId: string;
        mountedComponentJSON?: Component.JSON;
        style?: CSSJSONObject;
        layoutJSON?: LayoutType.JSON;
    }
}
export default Cell;
