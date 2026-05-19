import type Chart from './Chart/Chart';
import type Point from './Series/Point';
import type Pointer from './Pointer';
import type PointerEvent from './PointerEvent';
import type PositionObject from './Renderer/PositionObject';
import type Series from './Series/Series';
import type SVGElement from './Renderer/SVG/SVGElement';
import type TooltipOptions from './TooltipOptions';
import SVGRenderer from './Renderer/SVG/SVGRenderer.js';
declare module './Chart/ChartBase' {
    interface ChartBase {
        tooltip?: Tooltip;
    }
}
declare module './Series/PointBase' {
    interface PointBase {
        isHeader?: boolean;
    }
}
declare module './Series/SeriesBase' {
    interface SeriesBase {
        noSharedTooltip?: boolean;
        tt?: SVGElement;
    }
}
/**
 * Tooltip of a chart.
 *
 * @class
 * @name Highcharts.Tooltip
 *
 * @param {Highcharts.Chart} chart
 * The chart instance.
 *
 * @param {Highcharts.TooltipOptions} options
 * Tooltip options.
 *
 * @param {Highcharts.Pointer} pointer
 * The pointer instance.
 */
declare class Tooltip {
    constructor(chart: Chart, options: TooltipOptions, pointer: Pointer);
    allowShared: boolean;
    /**
     * Chart of the tooltip.
     *
     * @readonly
     * @name Highcharts.Tooltip#chart
     * @type {Highcharts.Chart}
     */
    chart: Chart;
    /**
     * Reference to the tooltip's container, when
     * [Highcharts.Tooltip#outside] is set to true, otherwise it's undefined.
     *
     * @name Highcharts.Tooltip#container
     * @type {Highcharts.HTMLDOMElement|undefined}
     */
    container?: globalThis.HTMLElement;
    distance: number;
    followPointer?: boolean;
    hideTimer?: number;
    showTimer?: number;
    isSticky: boolean;
    label?: SVGElement;
    len?: number;
    /**
     * Used tooltip options.
     *
     * @readonly
     * @name Highcharts.Tooltip#options
     * @type {Highcharts.TooltipOptions}
     */
    options: TooltipOptions;
    /**
     * Whether to allow the tooltip to render outside the chart's SVG
     * element box. By default (false), the tooltip is rendered within the
     * chart's SVG element, which results in the tooltip being aligned
     * inside the chart area.
     *
     * @readonly
     * @name Highcharts.Tooltip#outside
     * @type {boolean}
     *
     * @todo
     * Split tooltip does not support outside in the first iteration. Should
     * not be too complicated to implement.
     */
    outside: boolean;
    /**
     * The pointer instance.
     *
     * @readonly
     * @name Highcharts.Tooltip#pointer
     * @type {Highcharts.Pointer}
     */
    pointer: Pointer;
    /**
     * Reference to the tooltip's renderer, when
     * [Highcharts.Tooltip#outside] is set to true, otherwise it's undefined.
     *
     * @name Highcharts.Tooltip#renderer
     * @type {Highcharts.SVGRenderer|undefined}
     */
    renderer?: SVGRenderer;
    /**
     * When the tooltip is shared, the entire plot area will capture mouse
     * movement or touch events.
     *
     * @readonly
     * @name Highcharts.Tooltip#shared
     * @type {boolean|undefined}
     */
    shared?: boolean;
    /**
     * True, if the tooltip is split into one label per series, with the
     * header close to the axis.
     *
     * @readonly
     * @name Highcharts.Tooltip#split
     * @type {boolean|undefined}
     */
    split?: boolean;
    tracker?: SVGElement;
    tt?: SVGElement;
    /**
     * In case no user defined formatter is given, this will be used. Note that
     * the context here is an object holding point, series, x, y etc.
     *
     * @function Highcharts.Tooltip#defaultFormatter
     *
     * @param {Highcharts.Tooltip} tooltip The tooltip instance.
     *
     * @return {string|Array<string>}
     * Returns a string (single tooltip and shared)
     * or an array of strings (split tooltip)
     */
    defaultFormatter(this: Point, tooltip: Tooltip): (string | Array<string>);
    /**
     * Removes and destroys the tooltip and its elements.
     *
     * @function Highcharts.Tooltip#destroy
     */
    destroy(): void;
    /**
     * Get the CSS class names for the tooltip's label. Styles the label
     * by `colorIndex` or user-defined CSS.
     *
     * @function Highcharts.Tooltip#getClassName
     *
     * @return {string}
     *         The class names.
     */
    getClassName(point: Point, isSplit?: boolean, isHeader?: boolean): string;
    /**
     * Creates the Tooltip label element if it does not exist, then returns it.
     *
     * @function Highcharts.Tooltip#getLabel
     *
     * @return {Highcharts.SVGElement}
     * Tooltip label
     */
    getLabel({ anchorX, anchorY }?: Partial<SVGElement>): SVGElement;
    /**
     * Place the tooltip in a chart without spilling over and not covering the
     * point itself.
     *
     * @function Highcharts.Tooltip#getPosition
     *
     * @param {number} boxWidth
     *        Width of the tooltip box.
     *
     * @param {number} boxHeight
     *        Height of the tooltip box.
     *
     * @param {Highcharts.Point} point
     *        Tooltip related point.
     *
     * @return {Highcharts.PositionObject}
     *         Recommended position of the tooltip.
     */
    getPosition(boxWidth: number, boxHeight: number, point: Tooltip.PositionerPointObject | Point): PositionObject;
    /**
     * Hides the tooltip with a fade out animation.
     *
     * @function Highcharts.Tooltip#hide
     *
     * @param {number} [delay]
     *        The fade out in milliseconds. If no value is provided the value
     *        of the tooltip.hideDelay option is used. A value of 0 disables
     *        the fade out animation.
     */
    hide(delay?: number): void;
    shouldStickOnContact(pointerEvent?: PointerEvent): boolean;
    /**
     * Refresh the tooltip's text and position.
     *
     * @function Highcharts.Tooltip#refresh
     *
     * @param {Highcharts.Point|Array<Highcharts.Point>} pointOrPoints
     *        Either a point or an array of points.
     *
     * @param {Highcharts.PointerEventObject} [mouseEvent]
     *        Mouse event, that is responsible for the refresh and should be
     *        used for the tooltip update.
     */
    refresh(pointOrPoints: (Point | Array<Point>), mouseEvent?: PointerEvent): void;
    /**
     * Updates the tooltip with the provided tooltip options.
     *
     * @function Highcharts.Tooltip#update
     *
     * @param {Highcharts.TooltipOptions} options
     *        The tooltip options to update.
     */
    update(options: TooltipOptions): void;
}
declare namespace Tooltip {
    interface FormatterCallbackFunction {
        (this: Point, tooltip: Tooltip, ctx?: Point): (false | string | Array<string>);
    }
    interface HeaderFormatterEventObject {
        isFooter?: boolean;
        point: Point;
        text?: string;
    }
    interface PositionerCallbackFunction {
        (this: Tooltip, labelWidth: number, labelHeight: number, point: (Point | PositionerPointObject), ctx?: Tooltip, anchor?: [number, number], alignLeft?: boolean): PositionObject;
    }
    interface PositionerPointObject {
        isHeader?: boolean;
        h?: number;
        plotX: number;
        plotY: number;
        negative?: boolean;
        series?: Series;
        ttBelow?: boolean;
    }
    type ShapeValue = ('callout' | 'circle' | 'rect');
}
export default Tooltip;
