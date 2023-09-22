import type { HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
import type JSON from '../JSON';
import type Cell from '../Layout/Cell.js';
import type Serializable from '../Serializable';
import EditMode from '../EditMode/EditMode';
/**
 * Class providing a resizing functionality.
 */
declare class Resizer {
    /**
     * Creates a new instance of the Resizer class based on JSON.
     * @internal
     */
    static fromJSON(editMode: EditMode, json: Resizer.JSON): Resizer | undefined;
    protected static readonly defaultOptions: Resizer.Options;
    /**
     * Constructor for the Resizer class.
     *
     * @param {EditMode} editMode
     * The parent editMode reference.
     *
     * @param {Resizer.Options} options
     * Options for the Resizer.
     */
    constructor(editMode: EditMode, options?: Resizer.Options);
    /**
     * The editMode reference.
     */
    editMode: EditMode;
    /**
     * Resizer options.
     */
    options: Resizer.Options;
    /**
     * Resized element reference.
     */
    currentCell: Cell | undefined;
    /**
     * Dimension of current resizing (x or y).
     */
    currentDimension: string | undefined;
    /**
     * Type of resizing.
     */
    isX: boolean;
    /**
     * Type of resizing.
     */
    isY: boolean;
    /**
     * Reference to right handler
     */
    snapRight: HTMLDOMElement | undefined;
    /**
     * Reference to bottom handler
     */
    snapBottom: HTMLDOMElement | undefined;
    /**
     * Pending resizer flag
     */
    isActive: boolean;
    /**
     * Reference to start position of resizer
     */
    startX: number;
    /**
     * Array of siblings which have auto-flex width and we need to apply static
     * width for resizing event. After resizing cells revert widths to auto.
     */
    tempSiblingsWidth: Array<Cell>;
    /**
     * Reference to ResizeObserver, which allows running 'unobserve'.
     * @internal
     */
    private resizeObserver?;
    /**
     * Add Snap - create snaps and add events.
     *
     */
    addSnaps(): void;
    /**
     * Hide snaps
     *
     */
    disableResizer(): void;
    /**
     * Update snap position.
     *
     * @param cell
     * Cell reference
     */
    setSnapPositions(cell: Cell): void;
    /**
     * Method detects siblings and auto-width applied by flex. The resizer
     * requires static widths for correct calculations, so we need to apply
     * temporary width on siblings.
     */
    setTempWidthSiblings(): void;
    /**
     * Revert widths to auto.
     */
    revertSiblingsAutoWidth(): void;
    /**
     * Add mouse events to snaps
     *
     */
    addResizeEvents(): void;
    /**
     * General method used on resizing.
     *
     * @param {global.Event} e
     * A mouse event.
     *
     */
    onMouseMove(e: PointerEvent): void;
    /**
     * Destroy resizer
     */
    destroy(): void;
    /**
     * Converts the class instance to a class JSON.
     * @internal
     *
     * @return {Resizer.JSON}
     * Class JSON of this Resizer instance.
     */
    toJSON(): Resizer.JSON;
}
interface Resizer {
    mouseDownSnapX?: Function;
    mouseDownSnapY?: Function;
    mouseMoveSnap?: Function;
    mouseUpSnap?: Function;
}
declare namespace Resizer {
    /**
     * Resizer options
     */
    interface Options {
        /**
         * Weather the resizer is enabled or not.
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/edit-mode/resize-disabled/ | Resize disabled}
         */
        enabled: boolean;
        /**
         * Resizer type.
         */
        type: 'x' | 'y' | 'xy';
        /**
         * Options for the snap mechanism.
         */
        snap: SnapOptions;
        /**
         * Style of the snap element.
         */
        styles: ElementStyles;
    }
    interface ResizedCell extends Cell {
        resizer?: Snap;
    }
    /**
     * Style of the snap element.
     */
    interface ElementStyles {
        /**
         * Width of the border on the left side of the element in pixels.
         */
        borderLeft?: number;
        /**
         * Width of the border on the right side of the element in pixels.
         */
        borderRight?: number;
        /**
         * Width of the border on the top side of the element in pixels.
         */
        borderTop?: number;
        /**
         * Width of the border on the bottom side of the element in pixels.
         */
        borderBottom?: number;
        /**
         * Minimum width of the element in pixels.
         */
        minWidth?: number;
        /**
         * Minimum height of the element in pixels.
         */
        minHeight?: number;
    }
    interface Snap {
        snapX?: HTMLDOMElement | undefined;
        snapY?: HTMLDOMElement | undefined;
    }
    /**
     * Options for the snap mechanism.
     */
    interface SnapOptions {
        /**
         * Width of the element in pixels.
         */
        width?: number;
        /**
         * Height of the element in pixels.
         */
        height?: number;
    }
    /** @internal */
    interface HTMLDOMElementEvents extends HTMLDOMElement {
        hcEvents: Record<string, Array<Function>>;
    }
    interface JSON extends Serializable.JSON<'Dashboards.Action.Resizer'> {
        options: JSONOptions;
    }
    interface JSONOptions extends JSON.Object {
        enabled: boolean;
        styles: ElementStylesJSON;
        type: 'x' | 'y' | 'xy';
        snap: SnapJSON;
    }
    interface SnapJSON extends JSON.Object {
        width?: number;
        height?: number;
    }
    interface ElementStylesJSON extends JSON.Object {
        borderLeft?: number;
        borderRight?: number;
        borderTop?: number;
        borderBottom?: number;
        minWidth?: number;
        minHeight?: number;
    }
    interface ResizePointer {
        isVisible: boolean;
        element: HTMLDOMElement;
    }
    interface CellSiblings {
        prev: Array<Cell>;
        next: Array<Cell>;
    }
}
export default Resizer;
