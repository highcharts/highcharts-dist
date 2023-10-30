import type Chart from './Chart/Chart';
import type Point from './Series/Point';
import type Pointer from './Pointer';
import type PointerEvent from './PointerEvent';
import type PositionObject from './Renderer/PositionObject';
import type SizeObject from './Renderer/SizeObject';
import type SVGElement from './Renderer/SVG/SVGElement';
import type SVGRenderer from './Renderer/SVG/SVGRenderer';
import type TooltipOptions from './TooltipOptions';
declare module './Chart/ChartLike' {
    interface ChartLike {
        tooltip?: Tooltip;
    }
}
declare module './Series/PointLike' {
    interface PointLike {
        isHeader?: boolean;
        tooltipPos?: Array<number>;
    }
}
declare module './Series/SeriesLike' {
    interface SeriesLike {
        noSharedTooltip?: boolean;
        tt?: SVGElement;
    }
}
declare module './Series/SeriesOptions' {
    interface SeriesOptions {
        tooltip?: DeepPartial<TooltipOptions>;
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
 */
declare class Tooltip {
    constructor(chart: Chart, options: TooltipOptions);
    allowShared: boolean;
    chart: Chart;
    container?: globalThis.HTMLElement;
    crosshairs: Array<null>;
    distance: number;
    followPointer?: boolean;
    hideTimer?: number;
    isHidden: boolean;
    isSticky: boolean;
    label?: SVGElement;
    len?: number;
    now: Record<string, number>;
    options: TooltipOptions;
    outside: boolean;
    renderer?: SVGRenderer;
    shared?: boolean;
    split?: boolean;
    tooltipTimeout?: number;
    tracker?: SVGElement;
    tt?: SVGElement;
    /**
     * Build the body (lines) of the tooltip by iterating over the items and
     * returning one entry for each item, abstracting this functionality allows
     * to easily overwrite and extend it.
     *
     * @private
     * @function Highcharts.Tooltip#bodyFormatter
     */
    bodyFormatter(items: Array<Point>): Array<string>;
    /**
     * Destroy the single tooltips in a split tooltip.
     * If the tooltip is active then it is not destroyed, unless forced to.
     *
     * @private
     * @function Highcharts.Tooltip#cleanSplit
     *
     * @param {boolean} [force]
     * Force destroy all tooltips.
     */
    cleanSplit(force?: boolean): void;
    /**
     * In case no user defined formatter is given, this will be used. Note that
     * the context here is an object holding point, series, x, y etc.
     *
     * @function Highcharts.Tooltip#defaultFormatter
     *
     * @param {Highcharts.Tooltip} tooltip
     *
     * @return {string|Array<string>}
     * Returns a string (single tooltip and shared)
     * or an array of strings (split tooltip)
     */
    defaultFormatter(this: Tooltip.FormatterContextObject, tooltip: Tooltip): (string | Array<string>);
    /**
     * Removes and destroys the tooltip and its elements.
     *
     * @function Highcharts.Tooltip#destroy
     */
    destroy(): void;
    /**
     * Extendable method to get the anchor position of the tooltip
     * from a point or set of points
     *
     * @private
     * @function Highcharts.Tooltip#getAnchor
     */
    getAnchor(points: (Point | Array<Point>), mouseEvent?: PointerEvent): Array<number>;
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
    getLabel(): SVGElement;
    /**
     * Get the total area available area to place the tooltip
     *
     * @private
     */
    getPlayingField(): SizeObject;
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
    getPosition(boxWidth: number, boxHeight: number, point: Point): PositionObject;
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
    /**
     * Initialize tooltip.
     *
     * @private
     * @function Highcharts.Tooltip#init
     *
     * @param {Highcharts.Chart} chart
     *        The chart instance.
     *
     * @param {Highcharts.TooltipOptions} options
     *        Tooltip options.
     */
    init(chart: Chart, options: TooltipOptions): void;
    shouldStickOnContact(pointerEvent?: PointerEvent): boolean;
    /**
     * Moves the tooltip with a soft animation to a new position.
     *
     * @private
     * @function Highcharts.Tooltip#move
     *
     * @param {number} x
     *
     * @param {number} y
     *
     * @param {number} anchorX
     *
     * @param {number} anchorY
     */
    move(x: number, y: number, anchorX: number, anchorY: number): void;
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
     * Render the split tooltip. Loops over each point's text and adds
     * a label next to the point, then uses the distribute function to
     * find best non-overlapping positions.
     *
     * @private
     * @function Highcharts.Tooltip#renderSplit
     *
     * @param {string|Array<(boolean|string)>} labels
     *
     * @param {Array<Highcharts.Point>} points
     */
    renderSplit(labels: (string | Array<(boolean | string)>), points: Array<Point>): void;
    /**
     * If the `stickOnContact` option is active, this will add a tracker shape.
     *
     * @private
     * @function Highcharts.Tooltip#drawTracker
     */
    private drawTracker;
    /**
     * @private
     */
    styledModeFormat(formatString: string): string;
    /**
     * Format the footer/header of the tooltip
     * #3397: abstraction to enable formatting of footer and header
     *
     * @private
     * @function Highcharts.Tooltip#tooltipFooterHeaderFormatter
     */
    tooltipFooterHeaderFormatter(labelConfig: Point.PointLabelObject, isFooter?: boolean): string;
    /**
     * Updates the tooltip with the provided tooltip options.
     *
     * @function Highcharts.Tooltip#update
     *
     * @param {Highcharts.TooltipOptions} options
     *        The tooltip options to update.
     */
    update(options: TooltipOptions): void;
    /**
     * Find the new position and perform the move
     *
     * @private
     * @function Highcharts.Tooltip#updatePosition
     *
     * @param {Highcharts.Point} point
     */
    updatePosition(point: Point): void;
}
declare namespace Tooltip {
    interface FormatterCallbackFunction {
        (this: FormatterContextObject, tooltip: Tooltip): (false | string | Array<string>);
    }
    interface FormatterContextObject extends Point.PointLabelObject {
        points?: Array<FormatterContextObject>;
    }
    interface PositionerCallbackFunction {
        (this: Tooltip, labelWidth: number, labelHeight: number, point: (Point | PositionerPointObject)): PositionObject;
    }
    interface PositionerPointObject {
        isHeader: true;
        plotX: number;
        plotY: number;
    }
    type ShapeValue = ('callout' | 'circle' | 'rect');
    /**
     * @private
     */
    function compose(PointerClass: typeof Pointer): void;
}
export default Tooltip;
