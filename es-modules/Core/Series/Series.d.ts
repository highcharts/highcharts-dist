import type AnimationOptions from '../Animation/AnimationOptions';
import type AxisType from '../Axis/AxisType';
import type Chart from '../Chart/Chart';
import type ColorType from '../Color/ColorType';
import type { DataTableOptionsObject } from '../../Data/DataTableOptions';
import type { DeepPartial } from '../../Shared/Types';
import type PointerEvent from '../PointerEvent';
import type { PointOptions, PointShortOptions } from './PointOptions';
import type SeriesBase from './SeriesBase';
import type { SeriesOptions, SeriesZonesOptions } from './SeriesOptions';
import type { SeriesTypeRegistry, SeriesTypeOptions } from './SeriesType';
import type { StatesOptionsKey } from './StatesOptions';
import type SVGAttributes from '../Renderer/SVG/SVGAttributes';
import type SVGPath from '../Renderer/SVG/SVGPath';
import DataTableCore from '../../Data/DataTableCore.js';
import Point from './Point.js';
import SeriesRegistry from './SeriesRegistry.js';
declare const seriesTypes: SeriesTypeRegistry;
import SVGElement from '../Renderer/SVG/SVGElement.js';
declare module './PointBase' {
    interface PointBase {
        /**
         * Contains the point's index in the `Series.points` array.
         *
         * @readonly
         */
        index: number;
        /**
         * The translated X value for the point in terms of pixels. Relative
         * to the X axis position if the series has one, otherwise relative
         * to the plot area. Depending on the series type this value might
         * not be defined.
         *
         * In an inverted chart the x-axis is going from the bottom to the
         * top so the `plotX` value is the number of pixels from the bottom
         * of the axis.
         *
         * @see Highcharts.Point#pos
         */
        plotX?: number;
        /**
         * The translated Y value for the point in terms of pixels. Relative
         * to the Y axis position if the series has one, otherwise relative
         * to the plot area. Depending on the series type this value might
         * not be defined.
         *
         * In an inverted chart the y-axis is going from right to left
         * so the `plotY` value is the number of pixels from the right
         * of the `yAxis`.
         *
         * @see Highcharts.Point#pos
         */
        plotY?: number;
    }
}
/**
 * This is the base series prototype that all other series types inherit from.
 * A new series is initialized either through the
 * [series](https://api.highcharts.com/highcharts/series)
 * option structure, or after the chart is initialized, through
 * {@link Highcharts.Chart#addSeries}.
 *
 * The object can be accessed in a number of ways. All series and point event
 * handlers give a reference to the `series` object. The chart object has a
 * {@link Highcharts.Chart#series|series} property that is a collection of all
 * the chart's series. The point objects and axis objects also have the same
 * reference.
 *
 * Another way to reference the series programmatically is by `id`. Add an id
 * in the series configuration options, and get the series object by
 * {@link Highcharts.Chart#get}.
 *
 * Configuration options for the series are given in three levels. Options for
 * all series in a chart are given in the
 * [plotOptions.series](https://api.highcharts.com/highcharts/plotOptions.series)
 * object. Then options for all series of a specific type
 * are given in the plotOptions of that type, for example `plotOptions.line`.
 * Next, options for one single series are given in the series array, or as
 * arguments to `chart.addSeries`.
 *
 * The data in the series is stored in various arrays.
 *
 * - First, `series.options.data` contains all the original config options for
 *   each point whether added by options or methods like `series.addPoint`.
 *
 * - The `series.dataTable` refers to an instance of [DataTableCore](https://api.highcharts.com/class-reference/Highcharts.Data)
 *   or `DataTable` that contains the data in a tabular format. Individual
 *   columns can be read from `series.getColumn()`.
 *
 * - Next, `series.data` contains those values converted to points, but in case
 *   the series data length exceeds the `cropThreshold`, or if the data is
 *   grouped, `series.data` doesn't contain all the points. It only contains the
 *   points that have been created on demand.
 *
 * - Then there's `series.points` that contains all currently visible point
 *   objects. In case of cropping, the cropped-away points are not part of this
 *   array. The `series.points` array starts at `series.cropStart` compared to
 *   `series.data` and `series.options.data`. If however the series data is
 *   grouped, these can't be correlated one to one.
 *
 * @class
 * @name Highcharts.Series
 *
 * @param {Highcharts.Chart} chart
 * The chart instance.
 *
 * @param {Highcharts.SeriesOptionsType|object} options
 * The series options.
 */
declare class Series {
    /**
     * Registry of all available series types.
     *
     * @name Highcharts.Series.types
     * @type {Highcharts.Dictionary<typeof_Highcharts.Series>}
     */
    static readonly types: SeriesTypeRegistry;
    /**
     * Registers a series class to be accessible via `Series.types`.
     *
     * @function Highcharts.Series.registerType
     *
     * @param {string} seriesType
     * The series type as an identifier string in lower case.
     *
     * @param {Function} SeriesClass
     * The series class as a class pattern or a constructor function with
     * prototype.
     */
    static readonly registerType: typeof SeriesRegistry.registerSeriesType;
    /**
     * Read only. The chart that the series belongs to.
     */
    chart: Chart;
    /**
     * Series color as used by the legend and some series types.
     */
    color?: (ColorType);
    /**
     * Read only. An array containing those values converted to points.
     * In case the series data length exceeds the `cropThreshold`, or if
     * the data is grouped, `series.data` doesn't contain all the
     * points. Also, in case a series is hidden, the `data` array may be
     * empty. In case of cropping, the `data` array may contain `undefined`
     * values, instead of points. To access raw values,
     * `series.options.data` will always be up to date. `Series.data` only
     * contains the points that have been created on demand. To modify the
     * data, use
     * {@link Highcharts.Series#setData} or
     * {@link Highcharts.Point#update}.
     *
     * @see Series.points
     */
    data: Array<Point>;
    /**
     * Contains the maximum value of the series' data point. Some series
     * types like `networkgraph` do not support this property as they
     * lack a `y`-value.
     *
     * @readonly
     */
    dataMax?: number;
    /**
     * Contains the minimum value of the series' data point. Some series
     * types like `networkgraph` do not support this property as they
     * lack a `y`-value.
     *
     * @readonly
     */
    dataMin?: number;
    /**
     * Contains the series' index in the `Chart.series` array.
     *
     * @readonly
     */
    index: number;
    /**
     * The parent series of the current series, if the current
     * series has a [linkedTo](https://api.highcharts.com/highcharts/series.line.linkedTo)
     * setting.
     *
     * @readonly
     */
    linkedParent?: Series;
    /**
     * All child series that are linked to the current series through the
     * [linkedTo](https://api.highcharts.com/highcharts/series.line.linkedTo)
     * option.
     *
     * @readonly
     */
    linkedSeries: Array<Series>;
    /**
     * The series name as given in the options. Defaults to "Series {n}".
     */
    name: string;
    /**
     * Read only. The series' current options. To update, use
     * {@link Series#update}.
     */
    options: SeriesOptions;
    /**
     * An array containing all currently visible point objects. In case
     * of cropping, the cropped-away points are not part of this array.
     * The `series.points` array starts at `series.cropStart` compared
     * to `series.data` and `series.options.data`. If however the series
     * data is grouped, these can't be correlated one to one. To modify
     * the data, use {@link Highcharts.Series#setData} or
     * {@link Highcharts.Point#update}.
     */
    points: Array<Point>;
    /**
     * Read only. The series' selected state as set by
     * {@link Highcharts.Series#select}.
     */
    selected?: boolean;
    /**
     * Read only. The series' type, like "line", "area", "column" etc.
     * The type in the series options anc can be altered using
     * {@link Series#update}.
     */
    type: string;
    /**
     * Contains series options by the user without defaults.
     */
    userOptions: DeepPartial<SeriesTypeOptions>;
    /**
     * Read only. The series' visibility state as set by
     * {@link Series#show}, {@link Series#hide}, or in the initial
     * configuration. True by default.
     *
     * @default true
     */
    visible: boolean;
    /**
     * Read only. The unique xAxis object associated
     * with the series.
     */
    xAxis: AxisType;
    /**
     * Read only. The unique yAxis object associated
     * with the series.
     */
    yAxis: AxisType;
    /**
     * Check whether the series item is itself or inherits from a certain
     * series type.
     *
     * @function Highcharts.Series#is
     * @param {string} type The type of series to check for, can be either
     *        featured or custom series types. For example `column`, `pie`,
     *        `ohlc` etc.
     *
     * @return {boolean}
     *        True if this item is or inherits from the given type.
     */
    is<K extends keyof SeriesTypeRegistry>(type: K): this is InstanceType<typeof seriesTypes[K]>;
    /**
     * Return the name for the series. Looks for a `name` in the options. If not
     * found, looks for a column name in the data mapping. If not found, returns
     * a default name based on the series type and index in `Series {n}`"
     * format. This method can be simply overridden as series name format can
     * vary (e.g. technical indicators).
     *
     * @function Highcharts.Series#getName
     *
     * @return {string} The series name.
     */
    getName(): string;
    getDataColumnKeys(): Array<string>;
    /**
     * Apply a new set of data to the series and optionally redraw it. The new
     * data array is passed by reference (except in case of `updatePoints`), and
     * may later be mutated when updating the chart data.
     *
     * Note the difference in behavior when setting the same amount of points,
     * or a different amount of points, as handled by the `updatePoints`
     * parameter.
     *
     * @sample highcharts/members/series-setdata/
     *         Set new data from a button
     * @sample highcharts/members/series-setdata-pie/
     *         Set data in a pie
     * @sample stock/members/series-setdata/
     *         Set new data in Highcharts Stock
     * @sample maps/members/series-setdata/
     *         Set new data in Highmaps
     *
     * @function Highcharts.Series#setData
     *
     * @param {Array<Highcharts.PointOptionsType>|Highcharts.DataTableOptionsObject|Highcharts.DataTable|undefined} data
     *        Takes an array of data in the same format as described under
     *        `series.{type}.data` for the given series type, for example a line
     *        series would take data in the form described under
     *        [series.line.data](https://api.highcharts.com/highcharts/series.line.data).
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the series is altered. If doing
     *        more operations on the chart, it is a good idea to set redraw to
     *        false and call {@link Chart#redraw} after.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        When the updated data is the same length as the existing data,
     *        points will be updated by default, and animation visualizes how
     *        the points are changed. Set false to disable animation, or a
     *        configuration object to set duration or easing.
     *
     * @param {boolean} [updatePoints=true]
     *        When this is true, points will be updated instead of replaced
     *        whenever possible. This occurs a) when the updated data is the
     *        same length as the existing data, b) when points are matched by
     *        their id's, or c) when points can be matched by X values. This
     *        allows updating with animation and performs better. In this case,
     *        the original array is not passed by reference. Set `false` to
     *        prevent.
     */
    setData(data?: (Array<PointOptions | PointShortOptions> | DataTableOptionsObject | DataTableCore), redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>), updatePoints?: boolean): void;
    /**
     * Translate data points from raw data values to chart specific
     * positioning data needed later in the `drawPoints` and `drawGraph`
     * functions. This function can be overridden in plugins and custom
     * series type implementations.
     *
     * @function Highcharts.Series#translate
     *
     * @emits Highcharts.Series#events:translate
     */
    translate(): void;
    /**
     * Return the series points with null points filtered out.
     *
     * @function Highcharts.Series#getValidPoints
     *
     * @param {Array<Highcharts.Point>} [points]
     * The points to inspect, defaults to {@link Series.points}.
     *
     * @param {boolean} [insideOnly=false]
     * Whether to inspect only the points that are inside the visible view.
     *
     * @param {boolean} [allowNull=false]
     * Whether to allow null points to pass as valid points.
     *
     * @return {Array<Highcharts.Point>}
     * The valid points.
     */
    getValidPoints(points?: Array<Point>, insideOnly?: boolean, allowNull?: boolean): Array<Point>;
    /**
     * Animate in the series. Called internally twice. First with the `init`
     * parameter set to true, which sets up the initial state of the
     * animation. Then when ready, it is called with the `init` parameter
     * undefined, in order to perform the actual animation.
     *
     * @function Highcharts.Series#animate
     *
     * @param {boolean} [init]
     * Initialize the animation.
     */
    animate(init?: boolean): void;
    /**
     * Draw the markers for line-like series types, and columns or other
     * graphical representation for {@link Highcharts.Point} objects for other
     * series types. The resulting element is typically stored as
     * {@link Highcharts.Point#graphic}, and is created on the first call and
     * updated and moved on subsequent calls.
     *
     * @function Highcharts.Series#drawPoints
     */
    drawPoints(points?: Array<Point>): void;
    /**
     * Get non-presentational attributes for a point. Used internally for
     * both styled mode and classic. Can be overridden for different series
     * types.
     *
     * @see Series#pointAttribs
     *
     * @function Highcharts.Series#markerAttribs
     *
     * @param {Highcharts.Point} point
     * The Point to inspect.
     *
     * @param {string} [state]
     * The state, can be either `hover`, `select` or undefined.
     *
     * @return {Highcharts.SVGAttributes}
     * A hash containing those attributes that are not settable from CSS.
     */
    markerAttribs(point: Point, state?: StatesOptionsKey): SVGAttributes;
    /**
     * Get the translation and scale for the plot area of this series.
     *
     * @function Highcharts.Series#getPlotBox
     */
    getPlotBox(name?: string): Series.PlotBoxTransform;
    /**
     * Render the graph and markers. Called internally when first rendering
     * and later when redrawing the chart. This function can be extended in
     * plugins, but normally shouldn't be called directly.
     *
     * @function Highcharts.Series#render
     *
     * @emits Highcharts.Series#event:afterRender
     */
    render(): void;
    /**
     * Find the nearest point from a pointer event. This applies to series that
     * use k-d-trees to get the nearest point. Native pointer events must be
     * normalized using `Pointer.normalize`, that adds `chartX` and `chartY`
     * properties.
     *
     * @sample highcharts/demo/synchronized-charts
     *         Synchronized charts with tooltips
     *
     * @function Highcharts.Series#searchPoint
     *
     * @param {Highcharts.PointerEvent} e
     *        The normalized pointer event
     * @param {boolean} [compareX=false]
     *        Search only by the X value, not Y
     *
     * @return {Point|undefined}
     *        The closest point to the pointer event
     */
    searchPoint(e: PointerEvent, compareX?: boolean): (Point | undefined);
    /**
     * Add a point to the series after render time. The point can be added at
     * the end, or by giving it an X value, to the start or in the middle of the
     * series.
     *
     * Alternatively, when the chart is using data table for the data, a point
     * can be added by running `dataTable.setRow`.
     *
     * @sample highcharts/members/series-addpoint-append/
     *         Append point
     * @sample highcharts/members/series-addpoint-append-and-shift/
     *         Append and shift
     * @sample highcharts/datatable/live-chart/
     *         Append and shift with data table
     * @sample highcharts/members/series-addpoint-x-and-y/
     *         Both X and Y values given
     * @sample highcharts/members/series-addpoint-pie/
     *         Append pie slice
     * @sample stock/members/series-addpoint/
     *         Append 100 points in Highcharts Stock
     * @sample stock/members/series-addpoint-shift/
     *         Append and shift in Highcharts Stock
     * @sample maps/members/series-addpoint/
     *         Add a point in Highmaps
     *
     * @function Highcharts.Series#addPoint
     *
     * @param {Highcharts.PointOptionsType} options
     *        The point options. If options is a single number, a point with
     *        that y value is appended to the series. If it is an array, it will
     *        be interpreted as x and y values respectively. If it is an
     *        object, advanced options as outlined under `series.data` are
     *        applied.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the point is added. When adding
     *        more than one point, it is highly recommended that the redraw
     *        option be set to false, and instead {@link Chart#redraw} is
     *        explicitly called after the adding of points is finished.
     *        Otherwise, the chart will redraw after adding each point.
     *
     * @param {boolean} [shift=false]
     *        If true, a point is shifted off the start of the series as one is
     *        appended to the end.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether to apply animation, and optionally animation
     *        configuration.
     *
     * @param {boolean} [withEvent=true]
     *        Used internally, whether to fire the series `addPoint` event.
     *
     * @emits Highcharts.Series#event:addPoint
     */
    addPoint(options: (PointOptions | PointShortOptions), redraw?: boolean, shift?: boolean, animation?: (boolean | Partial<AnimationOptions>), withEvent?: boolean): void;
    /**
     * Remove a point from the series. Unlike the
     * {@link Highcharts.Point#remove} method, this can also be done on a point
     * that is not instantiated because it is outside the view or subject to
     * Highcharts Stock data grouping.
     *
     * @sample highcharts/members/series-removepoint/
     *         Remove cropped point
     *
     * @function Highcharts.Series#removePoint
     *
     * @param {number} i
     *        The index of the point in the {@link Highcharts.Series.data|data}
     *        array.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the point is added. When
     *        removing more than one point, it is highly recommended that the
     *        `redraw` option be set to `false`, and instead {@link
     *        Highcharts.Chart#redraw} is explicitly called after the adding of
     *        points is finished.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether and optionally how the series should be animated.
     *
     * @emits Highcharts.Point#event:remove
     */
    removePoint(i: number, redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>)): void;
    /**
     * Remove a series and optionally redraw the chart.
     *
     * @sample highcharts/members/series-remove/
     *         Remove first series from a button
     *
     * @function Highcharts.Series#remove
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or wait for an explicit call to
     *        {@link Highcharts.Chart#redraw}.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether to apply animation, and optionally animation
     *        configuration.
     *
     * @param {boolean} [withEvent=true]
     *        Used internally, whether to fire the series `remove` event.
     *
     * @emits Highcharts.Series#event:remove
     */
    remove(redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>), withEvent?: boolean, keepEvents?: boolean): void;
    /**
     * Update the series with a new set of options. For a clean and precise
     * handling of new options, all methods and elements from the series are
     * removed, and it is initialized from scratch. Therefore, this method is
     * more performance expensive than some other utility methods like {@link
     * Series#setData} or {@link Series#setVisible}.
     *
     * Note that `Series.update` may mutate the passed `data` options.
     *
     * @sample highcharts/members/series-update/
     *         Updating series options
     * @sample maps/members/series-update/
     *         Update series options in Highmaps
     *
     * @function Highcharts.Series#update
     *
     * @param {Highcharts.SeriesOptionsType} options
     *        New options that will be merged with the series' existing options.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the series is altered. If doing
     *        more operations on the chart, it is a good idea to set redraw to
     *        false and call {@link Chart#redraw} after.
     *
     * @emits Highcharts.Series#event:update
     * @emits Highcharts.Series#event:afterUpdate
     */
    update(options: DeepPartial<SeriesTypeOptions>, redraw?: boolean): void;
    /**
     * Runs on mouse over the series graphical items.
     *
     * @function Highcharts.Series#onMouseOver
     * @emits Highcharts.Series#event:mouseOver
     */
    onMouseOver(): void;
    /**
     * Runs on mouse out of the series graphical items.
     *
     * @function Highcharts.Series#onMouseOut
     *
     * @emits Highcharts.Series#event:mouseOut
     */
    onMouseOut(): void;
    /**
     * Set the state of the series. Called internally on mouse interaction
     * operations, but it can also be called directly to visually
     * highlight a series.
     *
     * @function Highcharts.Series#setState
     *
     * @param {Highcharts.SeriesStateValue|""} [state]
     *        The new state, can be either `'hover'`, `'inactive'`, `'select'`,
     *        or `''` (an empty string), `'normal'` or `undefined` to set to
     *        normal state.
     * @param {boolean} [inherit]
     *        Determines if state should be inherited by points too.
     */
    setState(state?: StatesOptionsKey, inherit?: boolean): void;
    /**
     * Show or hide the series.
     *
     * @function Highcharts.Series#setVisible
     *
     * @param {boolean} [visible]
     * True to show the series, false to hide. If undefined, the visibility is
     * toggled.
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart after the series is altered. If doing more
     * operations on the chart, it is a good idea to set redraw to false and
     * call {@link Chart#redraw|chart.redraw()} after.
     *
     * @emits Highcharts.Series#event:hide
     * @emits Highcharts.Series#event:show
     */
    setVisible(visible?: boolean, redraw?: boolean): void;
    /**
     * Show the series if hidden.
     *
     * @sample highcharts/members/series-hide/
     *         Toggle visibility from a button
     *
     * @function Highcharts.Series#show
     * @emits Highcharts.Series#event:show
     */
    show(): void;
    /**
     * Hide the series if visible. If the
     * [chart.ignoreHiddenSeries](https://api.highcharts.com/highcharts/chart.ignoreHiddenSeries)
     * option is true, the chart is redrawn without this series.
     *
     * @sample highcharts/members/series-hide/
     *         Toggle visibility from a button
     *
     * @function Highcharts.Series#hide
     * @emits Highcharts.Series#event:hide
     */
    hide(): void;
    /**
     * Select or unselect the series. This means its
     * {@link Highcharts.Series.selected|selected}
     * property is set, the checkbox in the legend is toggled and when selected,
     * the series is returned by the {@link Highcharts.Chart#getSelectedSeries}
     * function.
     *
     * @sample highcharts/members/series-select/
     *         Select a series from a button
     *
     * @function Highcharts.Series#select
     *
     * @param {boolean} [selected]
     * True to select the series, false to unselect. If undefined, the selection
     * state is toggled.
     *
     * @emits Highcharts.Series#event:select
     * @emits Highcharts.Series#event:unselect
     */
    select(selected?: boolean): void;
}
interface Series extends SeriesBase {
    pointClass: typeof Point;
}
declare namespace Series {
    /**
     * Translation and scale for the plot area of a series.
     */
    interface PlotBoxTransform extends SVGAttributes {
        scaleX: number;
        scaleY: number;
        translateX: number;
        translateY: number;
    }
    interface ZoneObject extends SeriesZonesOptions {
        area?: SVGElement;
        clip?: SVGElement;
        graph?: SVGElement;
        lineClip?: SVGPath;
        simpleClip?: SVGElement;
        translated?: number;
    }
}
export default Series;
