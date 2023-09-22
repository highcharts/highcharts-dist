import type Row from '../Layout/Row.js';
import type Cell from '../Layout/Cell.js';
import EditMode from '../EditMode/EditMode.js';
import { HTMLDOMElement } from '../../Core/Renderer/DOMElementType.js';
import ContextDetection from './ContextDetection.js';
/**
 * Class providing a drag and drop functionality.
 * @internal
 */
declare class DragDrop {
    protected static readonly defaultOptions: DragDrop.Options;
    /**
     * Constructor for the DragDrop class.
     * @internal
     *
     * @param {EditMode} editMode
     * The parent editMode reference.
     *
     * @param {DragDrop.Options} options
     * Options for the DragDrop.
     */
    constructor(editMode: EditMode, options?: DragDrop.Options);
    /**
     * The editMode reference.
     */
    editMode: EditMode;
    /**
     * DragDrop options.
     */
    options: DragDrop.Options;
    /**
     * Dragged element reference.
     */
    context?: Cell | Row;
    /**
     * Pending drag flag.
     */
    isActive?: boolean;
    /**
     * Reference to the Cell that is under the dragging mock element.
     */
    mouseCellContext?: Cell;
    /**
     * Reference to the Row that is under the dragging mock element.
     */
    mouseRowContext?: Row;
    /**
     * Reference to the element that is used on drop to mount dragged element.
     * In most cases the context is the same as mouseContext. Could be different
     * in nested layout when elements overlap.
     */
    dropContext?: Cell | Row;
    /**
     * Dragged element mock.
     */
    mockElement: HTMLDOMElement;
    /**
     * Element to visualize a drop spot.
     */
    dropPointer: DragDrop.DropPointer;
    /**
     * Function to call when drag ends (when no context).
     */
    dragEndCallback?: Function;
    /**
     * Method for showing and positioning drop pointer.
     *
     * @param {number} left
     * Drop pointer left position.
     *
     * @param {number} top
     * Drop pointer top position.
     *
     * @param {number} width
     * Drop pointer width.
     *
     * @param {number} height
     * Drop pointer height.
     */
    private showDropPointer;
    /**
     * Method for hiding drop pointer.
     */
    private hideDropPointer;
    /**
     * Method for positioning drag mock element.
     *
     * @param {PointerEvent} mouseEvent
     * Mouse event.
     */
    setMockElementPosition(mouseEvent: PointerEvent): void;
    /**
     * Method for initializing drag drop events.
     */
    initEvents(): void;
    /**
     * General method used on drag start.
     *
     * @param {PointerEvent} e
     * Mouse event.
     *
     * @param {Cell|Row} context
     * Reference to the dragged context.
     *
     * @param {Function} dragEndCallback
     * Callback invoked on drag end.
     */
    onDragStart(e: PointerEvent, context?: Cell | Row, dragEndCallback?: Function): void;
    /**
     * General method used while dragging.
     *
     * @param {PointerEvent} e
     * Mouse event.
     */
    onDrag(e: PointerEvent): void;
    /**
     * General method used when drag finish.
     */
    onDragEnd(): void;
    /**
     * Sets appropriate drop context and refresh drop pointer position when
     * row is dragged or cell is dragged as a row.
     *
     * @param {PointerEvent} e
     * Mouse event.
     *
     * @param {ContextDetection.ContextDetails} contextDetails
     * Context details (cell, side)
     */
    onRowDrag(e: PointerEvent, contextDetails?: ContextDetection.ContextDetails): void;
    /**
     * Unmounts dropped row and mounts it in a new position.
     */
    onRowDragEnd(): void;
    /**
     * Method used as middleware when cell is dragged.
     * Decides where to pass an event depending on the mouse context.
     *
     * @param {PointerEvent} e
     * Mouse event.
     *
     * @param {ContextDetection.ContextDetails} contextDetails
     * Context details (cell, side)
     */
    onCellDrag(e: PointerEvent, contextDetails?: ContextDetection.ContextDetails): void;
    /**
     * Sets appropriate drop context and refreshes the drop pointer
     * position when a cell is dragged and a cell context is detected.
     *
     * @param {PointerEvent} e
     * Mouse event.
     *
     * @param {ContextDetection.ContextDetails} context
     * Context details (cell, side)
     */
    onCellDragCellCtx(e: PointerEvent, context: ContextDetection.ContextDetails): void;
    /**
     * Sets appropriate drop context and refreshes the drop pointer
     * position when a cell is dragged and a row context is detected.
     *
     * @param {PointerEvent} e
     * Mouse event.
     *
     * @param {Row} mouseRowContext
     * Row context.
     */
    onCellDragRowCtx(e: PointerEvent, mouseRowContext: Row): void;
    /**
     * Unmounts dropped cell and mounts it in a new position.
     * When cell is dragged as a row also creates a new row
     * and mounts cell there.
     *
     * @param {Cell} contextCell
     * Cell used as a dragDrop context.
     */
    onCellDragEnd(contextCell?: Cell): void;
}
declare namespace DragDrop {
    /**
     * Options for Drag and Drop
     */
    interface Options {
        /**
         * Offset how far from the cell edge the context (dragged element)
         * should be detectable.
         */
        cellDropOffset: number;
        /**
         * Size of the drop pointer in pixels.
         */
        dropPointerSize: number;
        /**
         * Whether the drag and drop is enabled.
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/edit-mode/dragdrop-disabled/ | Drag drop disabled}
         */
        enabled: boolean;
        /**
         * Offset how far from the row edge the context (dragged element) should
         * be detectable.
         */
        rowDropOffset: number;
    }
    /**
     * @internal
     */
    interface DropPointer {
        isVisible: boolean;
        element: HTMLDOMElement;
        align: string;
        nested?: boolean;
    }
}
export default DragDrop;
