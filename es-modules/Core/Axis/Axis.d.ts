import type AnimationOptions from '../Animation/AnimationOptions';
import type AxisComposition from './AxisComposition';
import type { AxisCollectionKey, AxisCrosshairOptions, AxisLabelFormatterContextObject, AxisOptions, AxisSetExtremesEventObject, AxisTitleOptions, XAxisOptions, YAxisOptions } from './AxisOptions';
import type AxisBase from './AxisBase';
import type { AxisTypeOptions } from './AxisType';
import type Chart from '../Chart/Chart';
import type { DeepPartial } from '../../Shared/Types';
import type Point from '../Series/Point';
import type PointerEvent from '../PointerEvent';
import type Series from '../Series/Series';
import type SVGPath from '../Renderer/SVG/SVGPath';
import type TickPositionsArray from './TickPositionsArray';
import Tick from './Tick.js';
declare module '../Series/SeriesOptions' {
    interface SeriesOptions {
        /**
         * When this is true, the series will not cause the Y axis to cross
         * the zero plane (or [threshold](#plotOptions.series.threshold) option)
         * unless the data actually crosses the plane.
         *
         * For example, if `softThreshold` is `false`, a series of 0, 1, 2,
         * 3 will make the Y axis show negative values according to the
         * `minPadding` option. If `softThreshold` is `true`, the Y axis starts
         * at 0.
         *
         * @since   4.1.9
         * @product highcharts highstock
         * @default true
         */
        softThreshold?: boolean;
        startFromThreshold?: boolean;
        /**
         * The threshold, also called zero level or base level. For line type
         * series this is only used in conjunction with
         * [negativeColor](#plotOptions.series.negativeColor).
         *
         * @see [softThreshold](#plotOptions.series.softThreshold).
         *
         * @default 0
         * @since   3.0
         * @product highcharts highstock
         */
        threshold?: number | null;
    }
}
/**
 * Create a new axis object. Called internally when instantiating a new chart or
 * adding axes by {@link Highcharts.Chart#addAxis}.
 *
 * A chart can have from 0 axes (pie chart) to multiples. In a normal, single
 * series cartesian chart, there is one X axis and one Y axis.
 *
 * The X axis or axes are referenced by {@link Highcharts.Chart.xAxis}, which is
 * an array of Axis objects. If there is only one axis, it can be referenced
 * through `chart.xAxis[0]`, and multiple axes have increasing indices. The same
 * pattern goes for Y axes.
 *
 * If you need to get the axes from a series object, use the `series.xAxis` and
 * `series.yAxis` properties. These are not arrays, as one series can only be
 * associated to one X and one Y axis.
 *
 * A third way to reference the axis programmatically is by `id`. Add an `id` in
 * the axis configuration options, and get the axis by
 * {@link Highcharts.Chart#get}.
 *
 * Configuration options for the axes are given in options.xAxis and
 * options.yAxis.
 *
 * @class
 * @name Highcharts.Axis
 *
 * @param {Highcharts.Chart} chart
 * The Chart instance to apply the axis on.
 *
 * @param {Highcharts.AxisOptions} userOptions
 * Axis options
 */
declare class Axis {
    constructor(chart: Chart, userOptions: DeepPartial<AxisOptions>, coll?: AxisCollectionKey);
    /**
     * If categories are present for the axis, names are used instead of
     * numbers for that axis.
     *
     * Since Highcharts 3.0, categories can also be extracted by giving each
     * point a name and setting axis type to `category`. However, if you
     * have multiple series, best practice remains defining the `categories`
     * array.
     *
     * @see [xAxis.categories](/highcharts/xAxis.categories)
     *
     * @name Highcharts.Axis#categories
     * @type {Array<string>}
     * @readonly
     */
    categories?: Array<string>;
    /**
     * The Chart that the axis belongs to.
     *
     * @name Highcharts.Axis#chart
     * @type {Highcharts.Chart}
     */
    chart: Chart;
    /**
     * The collection where the axis belongs, for example `xAxis`, `yAxis`
     * or `colorAxis`. Corresponds to properties on Chart, for example
     * {@link Chart.xAxis}.
     *
     * @name Highcharts.Axis#coll
     * @type {string}
     */
    coll: AxisCollectionKey;
    /**
     * The processed crosshair options.
     *
     * @name Highcharts.Axis#crosshair
     * @type {boolean|Highcharts.AxisCrosshairOptions}
     */
    crosshair?: AxisCrosshairOptions;
    crossShowTimer?: number;
    /**
     * Whether the axis is horizontal.
     *
     * @name Highcharts.Axis#horiz
     * @type {boolean|undefined}
     */
    horiz?: boolean;
    /**
     * Whether the axis is the x-axis.
     */
    isXAxis?: boolean;
    /**
     * The length of the axis in terms of pixels.
     */
    len: number;
    /**
     * The maximum value of the axis. In a logarithmic axis, this is the
     * logarithm of the real value, and the real value can be obtained from
     * {@link Axis#getExtremes}.
     */
    max?: number;
    /**
     * The minimum value of the axis. In a logarithmic axis, this is the
     * logarithm of the real value, and the real value can be obtained from
     * {@link Axis#getExtremes}.
     */
    min?: number;
    /**
     * List of minor ticks mapped by position on the axis.
     *
     * @see {@link Highcharts.Tick}
     */
    minorTicks: Record<string, Tick>;
    /**
     * Current options for the axis after merge of defaults and user's
     * options.
     */
    options: (AxisOptions | XAxisOptions | YAxisOptions);
    /**
     * The position of the axis in terms of pixels, compared to the chart
     * edge. In a horizontal axis it is the same as `chart.plotLeft` unless
     * the axis is explicitly positioned, and in a default vertical axis it
     * is the same as `chart.plotTop`.
     */
    pos: number;
    /**
     * Whether the axis is reversed. Based on the `axis.reversed`,
     * option, but inverted charts have reversed xAxis by default.
     */
    reversed?: boolean;
    /**
     * All series associated to the axis.
     */
    series: Array<Series>;
    /**
     * The side on which the axis is rendered. 0 is top, 1 is right, 2
     * is bottom and 3 is left.
     */
    side: number;
    /**
     * Contains the current positions that are laid out on the axis. The
     * positions are numbers in terms of axis values. In a category axis
     * they are integers, in a datetime axis they are also integers, but
     * designating milliseconds.
     *
     * This property is read only - for modifying the tick positions, use
     * the `tickPositioner` callback or [axis.tickPositions](
     * https://api.highcharts.com/highcharts/xAxis.tickPositions) option
     * instead.
     */
    tickPositions: TickPositionsArray;
    /**
     * List of major ticks mapped by position on axis.
     *
     * @see {@link Highcharts.Tick}
     */
    ticks: Record<string, Tick>;
    /**
     * User's options for this axis without defaults.
     */
    userOptions: DeepPartial<AxisOptions>;
    /**
     * Overridable function to initialize the axis.
     *
     * @see {@link Axis}
     *
     * @function Highcharts.Axis#init
     *
     * @param {Highcharts.Chart} chart
     * The Chart instance to apply the axis on.
     *
     * @param {AxisOptions} userOptions
     * Axis options.
     *
     * @emits Highcharts.Axis#event:afterInit
     * @emits Highcharts.Axis#event:init
     */
    init(chart: Chart, userOptions: DeepPartial<AxisOptions>, coll?: AxisCollectionKey): void;
    /**
     * The default label formatter. The context is a special config object for
     * the label. In apps, use the
     * [labels.formatter](https://api.highcharts.com/highcharts/xAxis.labels.formatter)
     * instead, except when a modification is needed.
     *
     * @function Highcharts.Axis#defaultLabelFormatter
     *
     * @param {Highcharts.AxisLabelsFormatterContextObject} this
     * Formatter context of axis label.
     *
     * @return {string}
     * The formatted label content.
     */
    defaultLabelFormatter(this: AxisLabelFormatterContextObject): string;
    /**
     * Translate a value in terms of axis units into pixels within the chart.
     *
     * @function Highcharts.Axis#toPixels
     *
     * @param {number|string} value
     * A value in terms of axis units. For datetime axes, a timestamp or
     * date/time string is accepted.
     *
     * @param {boolean} [paneCoordinates=false]
     * Whether to return the pixel coordinate relative to the chart or just the
     * axis/pane itself.
     *
     * @return {number}
     * Pixel position of the value on the chart or axis.
     */
    toPixels(value: number | string, paneCoordinates?: boolean): number;
    /**
     * Translate a pixel position along the axis to a value in terms of axis
     * units.
     *
     * @function Highcharts.Axis#toValue
     *
     * @param {number} pixel
     * The pixel value coordinate.
     *
     * @param {boolean} [paneCoordinates=false]
     * Whether the input pixel is relative to the chart or just the axis/pane
     * itself.
     *
     * @return {number}
     * The axis value.
     */
    toValue(pixel: number, paneCoordinates?: boolean): number;
    /**
     * Create the path for a plot line that goes from the given value on
     * this axis, across the plot to the opposite side. Also used internally for
     * grid lines and crosshairs.
     *
     * @function Highcharts.Axis#getPlotLinePath
     *
     * @param {Highcharts.AxisPlotLinePathOptionsObject} options
     * Options for the path.
     *
     * @return {Highcharts.SVGPathArray|null}
     * The SVG path definition for the plot line.
     */
    getPlotLinePath(options: Axis.PlotLinePathOptions): (SVGPath | undefined);
    /**
     * Internal function to get the tick positions of a linear axis to round
     * values like whole tens or every five.
     *
     * @function Highcharts.Axis#getLinearTickPositions
     *
     * @param {number} tickInterval
     * The normalized tick interval.
     *
     * @param {number} min
     * Axis minimum.
     *
     * @param {number} max
     * Axis maximum.
     *
     * @return {Array<number>}
     * An array of axis values where ticks should be placed.
     */
    getLinearTickPositions(tickInterval: number, min: number, max: number): Array<number>;
    /**
     * Resolve the new minorTicks/minorTickInterval options into the legacy
     * loosely typed minorTickInterval option.
     *
     * @function Highcharts.Axis#getMinorTickInterval
     *
     * @return {number|"auto"|null}
     * Legacy option
     */
    getMinorTickInterval(): ('auto' | undefined | number);
    /**
     * Internal function to return the minor tick positions. For logarithmic
     * axes, the same logic as for major ticks is reused.
     *
     * @function Highcharts.Axis#getMinorTickPositions
     *
     * @return {Array<number>}
     * An array of axis values where ticks should be placed.
     */
    getMinorTickPositions(): Array<number>;
    /**
     * Set the minimum and maximum of the axes after render time. If the
     * `startOnTick` and `endOnTick` options are true, the minimum and maximum
     * values are rounded off to the nearest tick. To prevent this, these
     * options can be set to false before calling setExtremes. Also, setExtremes
     * will not allow a range lower than the `minRange` option, which by default
     * is the range of five points.
     *
     * @sample highcharts/members/axis-setextremes/
     *         Set extremes from a button
     * @sample highcharts/members/axis-setextremes-datetime/
     *         Set extremes on a datetime axis
     * @sample highcharts/members/axis-setextremes-off-ticks/
     *         Set extremes off ticks
     * @sample stock/members/axis-setextremes/
     *         Set extremes in Highcharts Stock
     *
     * @function Highcharts.Axis#setExtremes
     *
     * @param {number|string} [min]
     * The new minimum value. For datetime axes, date strings are accepted.
     *
     * @param {number|string} [max]
     * The new maximum value. For datetime axes, date strings are accepted.
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart or wait for an explicit call to
     * {@link Highcharts.Chart#redraw}
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation=true]
     * Enable or modify animations.
     *
     * @param {*} [eventArguments]
     * Arguments to be accessed in event handler.
     *
     * @emits Highcharts.Axis#event:setExtremes
     */
    setExtremes(min?: number | string, max?: number | string, redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>), eventArguments?: Partial<AxisSetExtremesEventObject>): void;
    /**
     * Get the current extremes for the axis.
     *
     * @sample highcharts/members/axis-getextremes/
     *         Report extremes by click on a button
     *
     * @function Highcharts.Axis#getExtremes
     *
     * @return {Highcharts.ExtremesObject}
     * An object containing extremes information.
     */
    getExtremes(): Axis.ExtremesObject;
    /**
     * Get the zero plane either based on zero or on the min or max value.
     * Used in bar and area plots.
     *
     * @function Highcharts.Axis#getThreshold
     *
     * @param {number} threshold
     * The threshold in axis values.
     *
     * @return {number}
     * The translated threshold position in terms of pixels, and corrected to
     * stay within the axis bounds.
     */
    getThreshold(threshold: number): number;
    /**
     * Return true if the axis has associated data.
     *
     * @function Highcharts.Axis#hasData
     *
     * @return {boolean}
     * True if the axis has associated visible series and those series have
     * either valid data points or explicit `min` and `max` settings.
     */
    hasData(): boolean;
    /**
     * Adds the title defined in axis.options.title.
     *
     * @function Highcharts.Axis#addTitle
     *
     * @param {boolean} [display]
     * Whether or not to display the title.
     */
    addTitle(display?: boolean): void;
    /**
     * Internal function to get the path for the axis line. Extended for polar
     * charts.
     *
     * @function Highcharts.Axis#getLinePath
     *
     * @param {number} lineWidth
     * The line width in pixels.
     *
     * @return {Highcharts.SVGPathArray}
     * The SVG path definition in array form.
     */
    getLinePath(lineWidth: number): SVGPath;
    /**
     * Render the axis line. Called internally when rendering and redrawing the
     * axis.
     *
     * @function Highcharts.Axis#renderLine
     */
    renderLine(): void;
    /**
     * Render a minor tick into the given position. If a minor tick already
     * exists in this position, move it.
     *
     * @function Highcharts.Axis#renderMinorTick
     *
     * @param {number} pos
     * The position in axis values.
     *
     * @param {boolean} slideIn
     * Whether the tick should animate in from last computed position
     */
    renderMinorTick(pos: number, slideIn?: boolean): void;
    /**
     * Render a major tick into the given position. If a tick already exists
     * in this position, move it.
     *
     * @function Highcharts.Axis#renderTick
     *
     * @param {number} pos
     * The position in axis values.
     *
     * @param {number} i
     * The tick index.
     *
     * @param {boolean} slideIn
     * Whether the tick should animate in from last computed position
     */
    renderTick(pos: number, i: number, slideIn?: boolean): void;
    /**
     * Record old scaling for updating/animation.
     *
     * @private
     */
    saveOld(): void;
    /**
     * Internal function to draw a crosshair.
     *
     * @function Highcharts.Axis#drawCrosshair
     *
     * @param {Highcharts.PointerEventObject} [e]
     * The event arguments from the modified pointer event, extended with
     * `chartX` and `chartY`
     *
     * @param {Highcharts.Point} [point]
     * The Point object if the crosshair snaps to points.
     *
     * @emits Highcharts.Axis#event:afterDrawCrosshair
     * @emits Highcharts.Axis#event:drawCrosshair
     */
    drawCrosshair(e?: PointerEvent, point?: Point): void;
    /**
     * Hide the crosshair if visible.
     *
     * @function Highcharts.Axis#hideCrosshair
     */
    hideCrosshair(): void;
    /**
     * Update an axis object with a new set of options. The options are merged
     * with the existing options, so only new or altered options need to be
     * specified.
     *
     * @sample highcharts/members/axis-update/
     *         Axis update demo
     *
     * @function Highcharts.Axis#update
     *
     * @param {Highcharts.AxisOptions} options
     * The new options that will be merged in with existing options on the axis.
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart after the axis is altered. If doing more
     * operations on the chart, it is a good idea to set redraw to false and
     * call {@link Chart#redraw} after.
     */
    update(options: DeepPartial<AxisTypeOptions>, redraw?: boolean): void;
    /**
     * Remove the axis from the chart.
     *
     * @sample highcharts/members/chart-addaxis/
     *         Add and remove axes
     *
     * @function Highcharts.Axis#remove
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart following the remove.
     */
    remove(redraw?: boolean): void;
    /**
     * Update the axis title by options after render time.
     *
     * @sample highcharts/members/axis-settitle/
     *         Set a new Y axis title
     *
     * @function Highcharts.Axis#setTitle
     *
     * @param {Highcharts.AxisTitleOptions} titleOptions
     * The additional title options.
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart after setting the title.
     */
    setTitle(titleOptions: AxisTitleOptions, redraw?: boolean): void;
    /**
     * Set new axis categories and optionally redraw.
     *
     * @sample highcharts/members/axis-setcategories/
     *         Set categories by click on a button
     *
     * @function Highcharts.Axis#setCategories
     *
     * @param {Array<string>} categories
     * The new categories.
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart.
     */
    setCategories(categories: Array<string>, redraw?: boolean): void;
}
interface Axis extends AxisComposition, AxisBase {
}
declare namespace Axis {
    /**
     * The returned object literal from the {@link Highcharts.Axis#getExtremes}
     * function.
     */
    interface ExtremesObject {
        /**
         * The maximum value of the axis' associated series.
         */
        dataMax: number;
        /**
         * The minimum value of the axis' associated series.
         */
        dataMin: number;
        /**
         * The maximum axis value, either automatic or set manually. If the `max` option
         * is not set, `maxPadding` is 0 and `endOnTick` is false, this value will be
         * the same as `dataMax`.
         */
        max: number;
        /**
         * The minimum axis value, either automatic or set manually. If the `min` option
         * is not set, `minPadding` is 0 and `startOnTick` is false, this value will be
         * the same as `dataMin`.
         */
        min: number;
        /**
         * The user defined maximum, either from the `max` option or from a zoom or
         * `setExtremes` action.
         */
        userMax?: number;
        /**
         * The user defined minimum, either from the `min` option or from a zoom or
         * `setExtremes` action.
         */
        userMin?: number;
    }
    /**
     * Options for the path on the Axis to be calculated.
     */
    interface PlotLinePathOptions {
        /**
         * Used in Highcharts Stock. When `true`, plot paths (crosshair,
         * plotLines, gridLines) will be rendered on all axes when defined on
         * the first axis.
         */
        acrossPanes?: boolean;
        /**
         * If `false`, the function will return null when it falls outside the
         * axis bounds. If `true`, the function will return a path aligned to
         * the plot area sides if it falls outside. If `pass`, it will return a
         * path outside.
         */
        force?: (boolean | string);
        /**
         * Line width used for calculation crisp line coordinates.
         * Defaults to 1.
         */
        lineWidth?: number;
        /**
         * Use old coordinates (for resizing and rescaling). If not set,
         * defaults to `false`.
         */
        old?: boolean;
        /**
         * Used in Polar axes. Reverse the positions for concatenation of
         * polygonal plot bands.
         */
        reverse?: boolean;
        /**
         * If given, return the plot line path of a pixel position on the axis.
         */
        translatedValue?: number;
        /**
         * Axis value.
         */
        value?: number;
    }
}
export default Axis;
