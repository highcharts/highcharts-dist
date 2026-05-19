import type { AlignObject, AlignValue, VerticalAlignValue } from '../Renderer/AlignObject';
import type AnimationOptions from '../Animation/AnimationOptions';
import type AxisOptions from '../Axis/AxisOptions';
import type AxisType from '../Axis/AxisType';
import type ColorAxisOptions from '../Axis/Color/ColorAxisOptions';
import type { CSSObject } from '../Renderer/CSSObject';
import type { NumberFormatterCallbackFunction, Options } from '../Options';
import type ChartBase from './ChartBase';
import type ChartOptions from './ChartOptions';
import type { DeepPartial } from '../../Shared/Types';
import type Point from '../Series/Point';
import type { SeriesTypeOptions } from '../Series/SeriesType';
import Axis from '../Axis/Axis.js';
import DataTableCore from '../../Data/DataTableCore.js';
import { DataTableOptionsObject } from '../../Data/DataTableOptions';
import Series from '../Series/Series.js';
import SVGElement from '../Renderer/SVG/SVGElement';
import SVGRenderer from '../Renderer/SVG/SVGRenderer.js';
import Time from '../Time.js';
declare module './ChartBase' {
    interface ChartBase {
        /**
         * Display the zoom button, so users can reset zoom to the default view
         * settings.
         *
         * @emits Highcharts.Chart#event:afterShowResetZoom
         * @emits Highcharts.Chart#event:beforeShowResetZoom
         */
        showResetZoom(): void;
        /**
         * Zoom the chart out after a user has zoomed in. See also
         * [Axis.setExtremes](/class-reference/Highcharts.Axis#setExtremes).
         *
         * @emits Highcharts.Chart#event:selection
         */
        zoomOut(): void;
    }
}
declare module '../Options' {
    interface Options {
        /**
         * General options for the chart.
         */
        chart: ChartOptions;
        /**
         * The chart's caption, which will render below the chart and will be
         * part of exported charts. The caption can be updated after chart
         * initialization through the `Chart.update` or `Chart.caption.update`
         * methods.
         *
         * @sample highcharts/caption/text/
         *         A chart with a caption
         *
         * @since 7.2.0
         */
        caption?: Chart.CaptionOptions;
        /**
         * Highcharts by default puts a credits label in the lower right corner
         * of the chart. This can be changed using these options.
         */
        credits?: Chart.CreditsOptions;
        /**
         * The chart's subtitle. This can be used both to display a subtitle
         * below the main title, and to display random text anywhere in the
         * chart. The subtitle can be updated after chart initialization through
         * the `Chart.setTitle` method.
         *
         * @sample {highcharts} highcharts/title/align-auto/
         *         Default title alignment
         * @sample {highmaps} maps/title/subtitle/
         *         Subtitle options demonstrated
         */
        subtitle?: Chart.SubtitleOptions;
        /**
         * Series options for specific data and the data itself. In TypeScript
         * you have to cast the series options to specific series types, to get
         * all possible options for a series.
         */
        series?: Array<SeriesTypeOptions>;
        /**
         * The chart's main title.
         *
         * @sample {highmaps} maps/title/title/
         *         Title options demonstrated
         * @sample {highcharts} highcharts/title/align-auto/
         *         Default title alignment
         */
        title?: Chart.TitleOptions;
    }
}
declare module '../Series/PointBase' {
    interface PointBase {
        touched?: boolean;
    }
}
declare module '../Series/SeriesBase' {
    interface SeriesBase {
        index?: number;
        touched?: boolean;
    }
}
/**
 * The Chart class. The recommended constructor is {@link Highcharts#chart}.
 *
 * @example
 * let chart = Highcharts.chart('container', {
 *        title: {
 *               text: 'My chart'
 *        },
 *        series: [{
 *            data: [1, 3, 2, 4]
 *        }]
 * })
 *
 * @class
 * @name Highcharts.Chart
 *
 * @param {string|Highcharts.HTMLDOMElement} [renderTo]
 *        The DOM element to render to, or its id.
 *
 * @param {Highcharts.Options} options
 *        The chart options structure.
 *
 * @param {Highcharts.ChartCallbackFunction|true} [callback]
 *        Function to run when the chart has loaded and all external images
 *        are loaded. Defining a
 *        [chart.events.load](https://api.highcharts.com/highcharts/chart.events.load)
 *        handler is equivalent. Set to `true` to return a promise that resolves
 *        when the chart is ready.
 */
declare class Chart {
    static chart(options: Partial<Options>, callback?: Chart.CallbackFunction): Chart;
    static chart(options: Partial<Options>, callback: true): Promise<Chart>;
    static chart(renderTo: (string | globalThis.HTMLElement), options: Partial<Options>, callback?: Chart.CallbackFunction): Chart;
    static chart(renderTo: (string | globalThis.HTMLElement), options: Partial<Options>, callback: true): Promise<Chart>;
    constructor(options: Partial<Options>, callback?: Chart.CallbackFunction | true);
    constructor(renderTo: (string | globalThis.HTMLElement), options: Partial<Options>, callback?: Chart.CallbackFunction | true);
    /**
     * All the axes in the chart.
     *
     * @see  Highcharts.Chart.xAxis
     * @see  Highcharts.Chart.yAxis
     *
     * @name Highcharts.Chart#axes
     * @type {Array<Highcharts.Axis>}
     */
    axes: Array<AxisType>;
    /**
     * The current pixel height of the chart.
     *
     * @name Highcharts.Chart#chartHeight
     * @type {number}
     */
    chartHeight: number;
    /**
     * The current pixel width of the chart.
     *
     * @name Highcharts.Chart#chartWidth
     * @type {number}
     */
    chartWidth: number;
    /**
     * The containing HTML element of the chart. The container is
     * dynamically inserted into the element given as the `renderTo`
     * parameter in the {@link Highcharts#chart} constructor.
     *
     * @name Highcharts.Chart#container
     * @type {Highcharts.HTMLDOMElement}
     */
    container: globalThis.HTMLElement;
    /**
     * The chart's credits label. The label has an `update` method that
     * allows setting new options as per the
     * [credits options set](https://api.highcharts.com/highcharts/credits).
     *
     * @name Highcharts.Chart#credits
     * @type {Highcharts.SVGElement}
     */
    credits?: SVGElement;
    /**
     * The chart's caption. The caption has an `update` method that
     * allows modifying the options directly or indirectly via
     * `chart.update`.
     *
     * @name Highcharts.Chart#caption
     * @type {Highcharts.CaptionObject}
     */
    caption?: SVGElement;
    /**
     * The array of data table instances associated with the chart.
     *
     * @name Highcharts.Chart#dataTable
     * @type {Array<Highcharts.DataTable>}
     */
    dataTable: Array<DataTableCore>;
    /**
     * Index position of the chart in the {@link Highcharts#charts}
     * property.
     *
     * @name Highcharts.Chart#index
     * @type {number}
     * @readonly
     */
    index: number;
    /**
     * Callback function to override the default function that formats
     * all the numbers in the chart. Returns a string with the formatted
     * number.
     *
     * @name Highcharts.Chart#numberFormatter
     * @type {Highcharts.NumberFormatterCallbackFunction}
     */
    numberFormatter: NumberFormatterCallbackFunction;
    /**
     * The options structure for the chart after merging
     * {@link #defaultOptions} and {@link #userOptions}. It contains
     * members for the sub elements like series, legend, tooltip etc.
     *
     * @name Highcharts.Chart#options
     * @type {Highcharts.Options}
     */
    options: Options;
    /**
     * The current height of the plot area in pixels.
     *
     * @name Highcharts.Chart#plotHeight
     * @type {number}
     */
    plotHeight: number;
    /**
     * The current left position of the plot area in pixels.
     *
     * @name Highcharts.Chart#plotLeft
     * @type {number}
     */
    plotLeft: number;
    /**
     * The current top position of the plot area in pixels.
     *
     * @name Highcharts.Chart#plotTop
     * @type {number}
     */
    plotTop: number;
    /**
     * The current width of the plot area in pixels.
     *
     * @name Highcharts.Chart#plotWidth
     * @type {number}
     */
    plotWidth: number;
    /**
     * The renderer instance of the chart. Each chart instance has only one
     * associated renderer.
     *
     * @name Highcharts.Chart#renderer
     * @type {Highcharts.SVGRenderer}
     */
    renderer: SVGRenderer;
    /**
     * All the current series in the chart.
     *
     * @name Highcharts.Chart#series
     * @type {Array<Highcharts.Series>}
     */
    series: Array<Series>;
    /**
     * Whether the chart is in styled mode, meaning all presentational
     * attributes are avoided.
     *
     * @name Highcharts.Chart#styledMode
     * @type {boolean}
     */
    styledMode?: boolean;
    /**
     * The chart subtitle. The subtitle has an `update` method that
     * allows modifying the options directly or indirectly via
     * `chart.update`.
     *
     * @name Highcharts.Chart#subtitle
     * @type {Highcharts.SubtitleObject}
     */
    subtitle?: SVGElement;
    /**
     * The `Time` object associated with the chart. Since v6.0.5,
     * time settings can be applied individually for each chart. If
     * no individual settings apply, the `Time` object is shared by
     * all instances.
     *
     * @name Highcharts.Chart#time
     * @type {Highcharts.Time}
     */
    time: Time;
    /**
     * The chart title. The title has an `update` method that allows
     * modifying the options directly or indirectly via
     * `chart.update`.
     *
     * @sample highcharts/members/title-update/
     *         Updating titles
     *
     * @name Highcharts.Chart#title
     * @type {Highcharts.TitleObject}
     */
    title?: SVGElement;
    /**
     * The original options given to the constructor or a chart factory
     * like {@link Highcharts.chart} and {@link Highcharts.stockChart}.
     * The original options are shallow copied to avoid mutation. The
     * copy, `chart.userOptions`, may later be mutated to reflect
     * updated options throughout the lifetime of the chart.
     *
     * For collections, like `series`, `xAxis` and `yAxis`, the chart
     * user options should always be reflected by the item user option,
     * so for example the following should always be true:
     *
     * `chart.xAxis[0].userOptions === chart.userOptions.xAxis[0]`
     *
     * @name Highcharts.Chart#userOptions
     * @type {Highcharts.Options}
     */
    userOptions: Partial<Options>;
    /**
     * A collection of the X axes in the chart.
     *
     * @name Highcharts.Chart#xAxis
     * @type {Array<Highcharts.Axis>}
     */
    xAxis: Array<AxisType>;
    /**
     * A collection of the Y axes in the chart.
     *
     * @name Highcharts.Chart#yAxis
     * @type {Array<Highcharts.Axis>}
     *
     * @todo
     * Make events official: Fire the event `afterInit`.
     */
    yAxis: Array<AxisType>;
    /**
     * Overridable function that initializes the chart. The constructor's
     * arguments are passed on directly.
     *
     * @function Highcharts.Chart#init
     *
     * @param {Highcharts.Options} userOptions
     *        Custom options.
     *
     * @param {Function|true} [callback]
     *        Function to run when the chart has loaded and all external
     *        images are loaded. Set to `true` to return a promise that
     *        resolves when the chart is ready.
     *
     * @emits Highcharts.Chart#event:init
     * @emits Highcharts.Chart#event:afterInit
     */
    init(userOptions: Partial<Options>, callback?: Chart.CallbackFunction | true): void;
    getDataTable(options: {
        dataTable?: (DataTableCore | DataTableOptionsObject | Array<DataTableCore | DataTableOptionsObject>);
    }): Array<DataTableCore>;
    /**
     * Check whether a given point is within the plot area.
     *
     * @function Highcharts.Chart#isInsidePlot
     *
     * @param {number} plotX
     * Pixel x relative to the plot area.
     *
     * @param {number} plotY
     * Pixel y relative to the plot area.
     *
     * @param {Highcharts.ChartIsInsideOptionsObject} [options]
     * Options object.
     *
     * @return {boolean}
     * Returns true if the given point is inside the plot area.
     */
    isInsidePlot(plotX: number, plotY: number, options?: Chart.IsInsideOptionsObject): boolean;
    /**
     * Redraw the chart after changes have been done to the data, axis extremes
     * chart size or chart elements. All methods for updating axes, series or
     * points have a parameter for redrawing the chart. This is `true` by
     * default. But in many cases you want to do more than one operation on the
     * chart before redrawing, for example add a number of points. In those
     * cases it is a waste of resources to redraw the chart for each new point
     * added. So you add the points and call `chart.redraw()` after.
     *
     * @function Highcharts.Chart#redraw
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     * If or how to apply animation to the redraw. When `undefined`, it applies
     * the animation that is set in the `chart.animation` option.
     *
     * @emits Highcharts.Chart#event:afterSetExtremes
     * @emits Highcharts.Chart#event:beforeRedraw
     * @emits Highcharts.Chart#event:predraw
     * @emits Highcharts.Chart#event:redraw
     * @emits Highcharts.Chart#event:render
     * @emits Highcharts.Chart#event:updatedData
     */
    redraw(animation?: (boolean | Partial<AnimationOptions>)): void;
    /**
     * Get an axis, series or point object by `id` as given in the configuration
     * options. Returns `undefined` if no item is found.
     *
     * @sample highcharts/plotoptions/series-id/
     *         Get series by id
     *
     * @function Highcharts.Chart#get
     *
     * @param {string} id
     * The id as given in the configuration options.
     *
     * @return {Highcharts.Axis|Highcharts.Series|Highcharts.Point|undefined}
     * The retrieved item.
     */
    get(id: string): (Axis | Series | Point | undefined);
    /**
     * Returns an array of all currently selected points in the chart. Points
     * can be selected by clicking or programmatically by the
     * {@link Highcharts.Point#select}
     * function.
     *
     * @sample highcharts/plotoptions/series-allowpointselect-line/
     *         Get selected points
     * @sample highcharts/members/point-select-lasso/
     *         Lasso selection
     * @sample highcharts/chart/events-selection-points/
     *         Rectangle selection
     *
     * @function Highcharts.Chart#getSelectedPoints
     *
     * @return {Array<Highcharts.Point>}
     *         The currently selected points.
     */
    getSelectedPoints(): Array<Point>;
    /**
     * Returns an array of all currently selected series in the chart. Series
     * can be selected either programmatically by the
     * {@link Highcharts.Series#select}
     * function or by checking the checkbox next to the legend item if
     * [series.showCheckBox](https://api.highcharts.com/highcharts/plotOptions.series.showCheckbox)
     * is true.
     *
     * @sample highcharts/members/chart-getselectedseries/
     *         Get selected series
     *
     * @function Highcharts.Chart#getSelectedSeries
     *
     * @return {Array<Highcharts.Series>}
     *         The currently selected series.
     */
    getSelectedSeries(): Array<Series>;
    /**
     * Set a new title or subtitle for the chart.
     *
     * @sample highcharts/members/chart-settitle/
     *         Set title text and styles
     *
     * @function Highcharts.Chart#setTitle
     *
     * @param {Highcharts.TitleOptions} [titleOptions]
     *        New title options. The title text itself is set by the
     *        `titleOptions.text` property.
     *
     * @param {Highcharts.SubtitleOptions} [subtitleOptions]
     *        New subtitle options. The subtitle text itself is set by the
     *        `subtitleOptions.text` property.
     *
     * @param {boolean} [redraw]
     *        Whether to redraw the chart or wait for a later call to
     *        `chart.redraw()`.
     */
    setTitle(titleOptions?: Chart.TitleOptions, subtitleOptions?: Chart.SubtitleOptions, redraw?: boolean): void;
    /**
     * Set the {@link Chart.container|chart container's} class name, in
     * addition to `highcharts-container`.
     *
     * @function Highcharts.Chart#setClassName
     *
     * @param {string} [className]
     * The additional class name.
     */
    setClassName(className?: string): void;
    /**
     * Return the current options of the chart, but only those that differ from
     * default options. Items that can be either an object or an array of
     * objects, like `series`, `xAxis` and `yAxis`, are always returned as
     * array.
     *
     * @sample highcharts/members/chart-getoptions
     *
     * @function Highcharts.Chart#getOptions
     *
     * @since 11.1.0
     */
    getOptions(): DeepPartial<Options>;
    /**
     * Reflows the chart to its container. By default, the Resize Observer is
     * attached to the chart's div which allows to reflows the chart
     * automatically to its container, as per the
     * [chart.reflow](https://api.highcharts.com/highcharts/chart.reflow)
     * option.
     *
     * @sample highcharts/chart/events-container/
     *         Pop up and reflow
     *
     * @function Highcharts.Chart#reflow
     *
     * @param {global.Event} [e]
     *        Event arguments. Used primarily when the function is called
     *        internally as a response to window resize.
     */
    reflow(e?: Event): void;
    /**
     * Resize the chart to a given width and height. In order to set the width
     * only, the height argument may be skipped. To set the height only, pass
     * `undefined` for the width.
     *
     * @sample highcharts/members/chart-setsize-button/
     *         Test resizing from buttons
     * @sample highcharts/members/chart-setsize-jquery-resizable/
     *         Add a jQuery UI resizable
     * @sample stock/members/chart-setsize/
     *         Highcharts Stock with UI resizable
     *
     * @function Highcharts.Chart#setSize
     *
     * @param {number|null} [width]
     *        The new pixel width of the chart. Since v4.2.6, the argument can
     *        be `undefined` in order to preserve the current value (when
     *        setting height only), or `null` to adapt to the width of the
     *        containing element.
     *
     * @param {number|null} [height]
     *        The new pixel height of the chart. Since v4.2.6, the argument can
     *        be `undefined` in order to preserve the current value, or `null`
     *        in order to adapt to the height of the containing element.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether and how to apply animation. When `undefined`, it applies
     *        the animation that is set in the `chart.animation` option.
     *
     *
     * @emits Highcharts.Chart#event:endResize
     * @emits Highcharts.Chart#event:resize
     */
    setSize(width?: (number | null), height?: (number | null), animation?: (boolean | Partial<AnimationOptions>)): void;
    /**
     * Set a new credits label for the chart.
     *
     * @sample highcharts/credits/credits-update/
     *         Add and update credits
     *
     * @function Highcharts.Chart#addCredits
     *
     * @param {Highcharts.CreditsOptions} [credits]
     * A configuration object for the new credits.
     */
    addCredits(credits?: Chart.CreditsOptions): void;
    /**
     * Remove the chart and purge memory. This method is called internally
     * before adding a second chart into the same container, as well as on
     * window unload to prevent leaks.
     *
     * @sample highcharts/members/chart-destroy/
     *         Destroy the chart from a button
     * @sample stock/members/chart-destroy/
     *         Destroy with Highcharts Stock
     *
     * @function Highcharts.Chart#destroy
     *
     * @emits Highcharts.Chart#event:destroy
     */
    destroy(): void;
    /**
     * Add a series to the chart after render time. Note that this method should
     * never be used when adding data synchronously at chart render time, as it
     * adds expense to the calculations and rendering. When adding data at the
     * same time as the chart is initialized, add the series as a configuration
     * option instead. With multiple axes, the `offset` is dynamically adjusted.
     *
     * @sample highcharts/members/chart-addseries/
     *         Add a series from a button
     * @sample stock/members/chart-addseries/
     *         Add a series in Highcharts Stock
     *
     * @function Highcharts.Chart#addSeries
     *
     * @param {Highcharts.SeriesOptionsType} options
     *        The config options for the series.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after adding.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether to apply animation, and optionally animation
     *        configuration. When `undefined`, it applies the animation that is
     *        set in the `chart.animation` option.
     *
     * @return {Highcharts.Series}
     *         The newly created series object.
     *
     * @emits Highcharts.Chart#event:addSeries
     * @emits Highcharts.Chart#event:afterAddSeries
     */
    addSeries(options: SeriesTypeOptions, redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>)): Series;
    /**
     * Add an axis to the chart after render time. Note that this method should
     * never be used when adding data synchronously at chart render time, as it
     * adds expense to the calculations and rendering. When adding data at the
     * same time as the chart is initialized, add the axis as a configuration
     * option instead.
     *
     * @sample highcharts/members/chart-addaxis/
     *         Add and remove axes
     *
     * @function Highcharts.Chart#addAxis
     *
     * @param {Highcharts.AxisOptions} options
     *        The axis options.
     *
     * @param {boolean} [isX=false]
     *        Whether it is an X axis or a value axis.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after adding.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether and how to apply animation in the redraw. When
     *        `undefined`, it applies the animation that is set in the
     *        `chart.animation` option.
     *
     * @return {Highcharts.Axis}
     *         The newly generated Axis object.
     */
    addAxis(options: DeepPartial<AxisOptions>, isX?: boolean, redraw?: boolean, animation?: boolean): Axis;
    /**
     * Add a color axis to the chart after render time. Note that this method
     * should never be used when adding data synchronously at chart render time,
     * as it adds expense to the calculations and rendering. When adding data at
     * the same time as the chart is initialized, add the axis as a
     * configuration option instead.
     *
     * @sample highcharts/members/chart-addaxis/
     *         Add and remove axes
     *
     * @function Highcharts.Chart#addColorAxis
     *
     * @param {Highcharts.ColorAxisOptions} options
     *        The axis options.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after adding.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether and how to apply animation in the redraw. When
     *        `undefined`, it applies the animation that is set in the
     *        `chart.animation` option.
     *
     * @return {Highcharts.Axis}
     *         The newly generated Axis object.
     */
    addColorAxis(options: ColorAxisOptions, redraw?: boolean, animation?: boolean): Axis;
    /**
     * Dim the chart and show a loading text or symbol. Options for the loading
     * screen are defined in {@link
     * https://api.highcharts.com/highcharts/loading|the loading options}.
     *
     * @sample highcharts/members/chart-hideloading/
     *         Show and hide loading from a button
     * @sample highcharts/members/chart-showloading/
     *         Apply different text labels
     * @sample stock/members/chart-show-hide-loading/
     *         Toggle loading in Highcharts Stock
     *
     * @function Highcharts.Chart#showLoading
     *
     * @param {string} [str]
     *        An optional text to show in the loading label instead of the
     *        default one. The default text is set in
     *        [lang.loading](https://api.highcharts.com/highcharts/lang.loading).
     */
    showLoading(str?: string): void;
    /**
     * Hide the loading layer.
     *
     * @see Highcharts.Chart#showLoading
     *
     * @sample highcharts/members/chart-hideloading/
     *         Show and hide loading from a button
     * @sample stock/members/chart-show-hide-loading/
     *         Toggle loading in Highcharts Stock
     *
     * @function Highcharts.Chart#hideLoading
     */
    hideLoading(): void;
    /**
     * A generic function to update any element of the chart. Elements can be
     * enabled and disabled, moved, re-styled, re-formatted etc.
     *
     * A special case is configuration objects that take arrays, for example
     * [xAxis](https://api.highcharts.com/highcharts/xAxis),
     * [yAxis](https://api.highcharts.com/highcharts/yAxis) or
     * [series](https://api.highcharts.com/highcharts/series). For these
     * collections, an `id` option is used to map the new option set to an
     * existing object. If an existing object of the same id is not found, the
     * corresponding item is updated. So for example, running `chart.update`
     * with a series item without an id, will cause the existing chart's series
     * with the same index in the series array to be updated. When the
     * `oneToOne` parameter is true, `chart.update` will also take care of
     * adding and removing items from the collection. Read more under the
     * parameter description below.
     *
     * Note that when changing series data, `chart.update` may mutate the passed
     * data options.
     *
     * See also the
     * [responsive option set](https://api.highcharts.com/highcharts/responsive).
     * Switching between `responsive.rules` basically runs `chart.update` under
     * the hood.
     *
     * @sample highcharts/members/chart-update/
     *         Update chart geometry
     *
     * @function Highcharts.Chart#update
     *
     * @param {Highcharts.Options} options
     *        A configuration object for the new chart options.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart.
     *
     * @param {boolean} [oneToOne=false]
     *        When `true`, the `series`, `xAxis`, `yAxis` and `annotations`
     *        collections will be updated one to one, and items will be either
     *        added or removed to match the new updated options. For example,
     *        if the chart has two series and we call `chart.update` with a
     *        configuration containing three series, one will be added. If we
     *        call `chart.update` with one series, one will be removed. Setting
     *        an empty `series` array will remove all series, but leaving out
     *        the`series` property will leave all series untouched. If the
     *        series have id's, the new series options will be matched by id,
     *        and the remaining ones removed.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether to apply animation, and optionally animation
     *        configuration. When `undefined`, it applies the animation that is
     *        set in the `chart.animation` option.
     *
     * @emits Highcharts.Chart#event:update
     * @emits Highcharts.Chart#event:afterUpdate
     */
    update(options: Partial<Options>, redraw?: boolean, oneToOne?: boolean, animation?: (boolean | Partial<AnimationOptions>)): void;
    /**
     * Shortcut to set the subtitle options. This can also be done from {@link
     * Chart#update} or {@link Chart#setTitle}.
     *
     * @function Highcharts.Chart#setSubtitle
     *
     * @param {Highcharts.SubtitleOptions} options
     *        New subtitle options. The subtitle text itself is set by the
     *        `options.text` property.
     */
    setSubtitle(options: Chart.SubtitleOptions, redraw?: boolean): void;
    /**
     * Set the caption options. This can also be done from {@link
     * Chart#update}.
     *
     * @function Highcharts.Chart#setCaption
     *
     * @param {Highcharts.CaptionOptions} options
     *        New caption options. The caption text itself is set by the
     *        `options.text` property.
     */
    setCaption(options: Chart.CaptionOptions, redraw?: boolean): void;
    /**
     * Display the zoom button, so users can reset zoom to the default view
     * settings.
     *
     * @function Highcharts.Chart#showResetZoom
     *
     * @emits Highcharts.Chart#event:afterShowResetZoom
     * @emits Highcharts.Chart#event:beforeShowResetZoom
     */
    showResetZoom(): void;
    /**
     * Zoom the chart out after a user has zoomed in. See also
     * [Axis.setExtremes](/class-reference/Highcharts.Axis#setExtremes).
     *
     * @function Highcharts.Chart#zoomOut
     *
     * @emits Highcharts.Chart#event:selection
     */
    zoomOut(): void;
}
interface Chart extends ChartBase {
}
declare namespace Chart {
    /**
     * Callback for chart constructors.
     *
     * @param {Highcharts.Chart} chart
     *        Created chart.
     */
    interface CallbackFunction {
        (this: Chart, chart: Chart): void;
    }
    /**
     * The chart's caption, which will render below the chart and will be part
     * of exported charts. The caption can be updated after chart initialization
     * through the `Chart.update` or `Chart.caption.update` methods.
     *
     * @sample highcharts/caption/text/
     *         A chart with a caption
     *
     * @since 7.2.0
     */
    interface CaptionOptions {
        /**
         * The horizontal alignment of the caption. Can be one of "left",
         *  "center" and "right".
         */
        align?: AlignValue;
        /**
         * When the caption is floating, the plot area will not move to make
         * space for it.
         *
         * @default false
         */
        floating?: boolean;
        /**
         * The margin between the caption and the plot area.
         */
        margin?: number;
        /**
         * CSS styles for the caption.
         *
         * In styled mode, the caption style is given in the
         * `.highcharts-caption` class.
         *
         * @sample {highcharts} highcharts/css/titles/
         *         Styled mode
         *
         * @default {"color": "#666666"}
         */
        style: CSSObject;
        /**
         * The caption text of the chart.
         *
         * @sample {highcharts} highcharts/caption/text/
         *         Custom caption
         */
        text?: string;
        /**
         * Whether to
         * [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
         * to render the text.
         *
         * @default false
         */
        useHTML?: boolean;
        /**
         * The vertical alignment of the caption. Can be one of `"top"`,
         * `"middle"` and `"bottom"`. When middle, the caption behaves as
         * floating.
         */
        verticalAlign?: VerticalAlignValue;
        /**
         * The x position of the caption relative to the alignment within
         * `chart.spacingLeft` and `chart.spacingRight`.
         *
         * @default 0
         */
        x?: number;
        /**
         * The y position of the caption relative to the alignment within
         * `chart.spacingTop` and `chart.spacingBottom`.
         */
        y?: number;
    }
    /**
     * Highcharts by default puts a credits label in the lower right corner
     * of the chart. This can be changed using these options.
     */
    interface CreditsOptions {
        /**
         * Whether to show the credits text.
         *
         * @sample {highcharts} highcharts/credits/enabled-false/
         *         Credits disabled
         * @sample {highstock} stock/credits/enabled/
         *         Credits disabled
         * @sample {highmaps} maps/credits/enabled-false/
         *         Credits disabled
         */
        enabled?: boolean;
        /**
         * The URL for the credits label.
         *
         * @sample {highcharts} highcharts/credits/href/
         *         Custom URL and text
         * @sample {highmaps} maps/credits/customized/
         *         Custom URL and text
         *
         * @default https://www.highcharts.com?credits
         */
        href?: string;
        /**
         * Events for the credits label.
         *
         * @declare Highcharts.CreditsEventsOptionsObject
         */
        events?: {
            /**
             * Callback function to handle click events on the credits label.
             * The callback can call `event.preventDefault()` to prevent the
             * default navigation behavior. Alternatively, you can add a general
             * event handler using `Highcharts.addEvent(chart, 'creditsClick',
             * callback)` instead of providing it in the options tree.
             *
             * @sample {highcharts} highcharts/credits/events-click/
             *         Custom click handler
             *
             * @param {Event} event
             *        The click event object.
             */
            click?: (event: Event) => void;
        };
        /**
         * Credits for map source to be concatenated with conventional credit
         * text. By default this is a format string that collects copyright
         * information from the map if available.
         *
         * @see [mapTextFull](#credits.mapTextFull)
         * @see [text](#credits.text)
         *
         * @default   \u00a9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>
         * @since     4.2.2
         * @product   highmaps
         */
        mapText?: string;
        /**
         * Detailed credits for map source to be displayed on hover of credits
         * text. By default this is a format string that collects copyright
         * information from the map if available.
         *
         * @see [mapText](#credits.mapText)
         * @see [text](#credits.text)
         *
         * @default {geojson.copyright}
         * @since   4.2.2
         * @product highmaps
         */
        mapTextFull?: string;
        /**
         * Position configuration for the credits label.
         *
         * @sample {highcharts} highcharts/credits/position-left/
         *         Left aligned
         * @sample {highmaps} maps/credits/customized/
         *         Left aligned
         *
         * @since 2.1
         */
        position?: AlignObject & {
            /** @default 'right' */
            align?: AlignObject['align'];
            /** @default 'bottom' */
            verticalAlign?: AlignObject['verticalAlign'];
            /** @default -10 */
            x?: AlignObject['x'];
            /** @default -5 */
            y?: AlignObject['y'];
        };
        /**
         * CSS styles for the credits label.
         *
         * @see In styled mode, credits styles can be set with the
         *      `.highcharts-credits` class.
         */
        style: CSSObject & {
            /** @default ${palette.neutralColor40} */
            color?: CSSObject['color'];
            /** @default 'pointer' */
            cursor?: CSSObject['cursor'];
            /** @default '0.6em' */
            fontSize?: CSSObject['fontSize'];
        };
        /**
         * The text for the credits label.
         *
         * @productdesc {highmaps}
         * If a map is loaded as GeoJSON, the text defaults to
         * `Highcharts @ {map-credits}`. Otherwise, it defaults to
         * `Highcharts.com`.
         *
         * @sample {highcharts} highcharts/credits/href/
         *         Custom URL and text
         * @sample {highmaps} maps/credits/customized/
         *         Custom URL and text
         */
        text?: string;
        /**
         * Whether to render the credits as HTML
         *
         * @since  next
         * @sample highcharts/palette/branding
         *         Branding with HTML credits
         */
        useHTML?: boolean;
    }
    /**
     * Options for the Chart.isInsidePlot function.
     */
    interface IsInsideOptionsObject {
        axis?: Axis;
        ignoreX?: boolean;
        ignoreY?: boolean;
        inverted?: boolean;
        paneCoordinates?: boolean;
        series?: Series;
        visiblePlotOnly?: boolean;
    }
    /**
     * The chart's subtitle. This can be used both to display a subtitle below
     * the main title, and to display random text anywhere in the chart. The
     * subtitle can be updated after chart initialization through the
     * `Chart.setTitle` method.
     *
     * @sample {highcharts} highcharts/title/align-auto/
     *         Default title alignment
     * @sample {highmaps} maps/title/subtitle/
     *         Subtitle options demonstrated
     */
    interface SubtitleOptions {
        /**
         * The horizontal alignment of the subtitle. Can be one of "left",
         * "center" and "right". Since v12, it defaults to `undefined`, meaning
         * the actual alignment is inherited from the alignment of the main
         * title.
         *
         * @sample {highcharts} highcharts/title/align-auto/
         *         Default title and subtitle alignment, dynamic
         * @sample {highcharts} highcharts/subtitle/align/
         *         Footnote at right of plot area
         * @sample {highstock} stock/chart/subtitle-footnote
         *         Footnote at bottom right of plot area
         *
         * @since 2.0
         */
        align?: AlignValue;
        /**
         * When the subtitle is floating, the plot area will not move to make
         * space for it.
         *
         * @sample {highcharts} highcharts/subtitle/floating/
         *         Floating title and subtitle
         * @sample {highstock} stock/chart/subtitle-footnote
         *         Footnote floating at bottom right of plot area
         *
         * @default false
         * @since   2.1
         */
        floating?: boolean;
        /**
         * CSS styles for the title.
         *
         * In styled mode, the subtitle style is given in the
         * `.highcharts-subtitle` class.
         *
         * @sample {highcharts} highcharts/subtitle/style/
         *         Custom color and weight
         * @sample {highcharts} highcharts/css/titles/
         *         Styled mode
         * @sample {highstock} stock/chart/subtitle-style
         *         Custom color and weight
         * @sample {highstock} highcharts/css/titles/
         *         Styled mode
         * @sample {highmaps} highcharts/css/titles/
         *         Styled mode
         *
         * @default {"color": "#666666"}
         */
        style: CSSObject;
        /**
         * The subtitle of the chart.
         *
         * @sample {highcharts|highstock} highcharts/subtitle/text/
         *         Custom subtitle
         * @sample {highcharts|highstock} highcharts/subtitle/text-formatted/
         *         Formatted and linked text.
         */
        text?: string;
        /**
         * Whether to
         * [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
         * to render the text.
         *
         * @default false
         */
        useHTML?: boolean;
        /**
         * The vertical alignment of the title. Can be one of `"top"`,
         * `"middle"` and `"bottom"`. When middle, the subtitle behaves as
         * floating.
         *
         * @sample {highcharts} highcharts/subtitle/verticalalign/
         *         Footnote at the bottom right of plot area
         * @sample {highstock} stock/chart/subtitle-footnote
         *         Footnote at the bottom right of plot area
         *
         * @since 2.1
         */
        verticalAlign?: VerticalAlignValue;
        /**
         * The x position of the subtitle relative to the alignment within
         * `chart.spacingLeft` and `chart.spacingRight`.
         *
         * @sample {highcharts} highcharts/subtitle/align/
         *         Footnote at right of plot area
         * @sample {highstock} stock/chart/subtitle-footnote
         *         Footnote at the bottom right of plot area
         *
         * @default 0
         * @since   2.0
         */
        x?: number;
        /**
         * The y position of the subtitle relative to the alignment within
         * `chart.spacingTop` and `chart.spacingBottom`. By default the subtitle
         * is laid out below the title unless the title is floating.
         *
         * @sample {highcharts} highcharts/subtitle/verticalalign/
         *         Footnote at the bottom right of plot area
         * @sample {highstock} stock/chart/subtitle-footnote
         *         Footnote at the bottom right of plot area
         *
         * @since 2.0
         */
        y?: number;
    }
    /**
     * The chart's main title.
     *
     * @sample {highmaps} maps/title/title/
     *         Title options demonstrated
     * @sample {highcharts} highcharts/title/align-auto/
     *         Default title alignment
     */
    interface TitleOptions {
        /**
         * The horizontal alignment of the title. Can be one of "left", "center"
         * and "right".
         *
         * Since v12 it defaults to `undefined`, meaning the alignment is
         * computed for best fit. If the text fits in one line, it aligned to
         * the center, but if it is wrapped into multiple lines, it is aligned
         * to the left.
         *
         * @sample {highcharts} highcharts/title/align-auto/
         *         Default alignment, dynamic
         * @sample {highcharts} highcharts/title/align/
         *         Aligned to the plot area (x = 70px = margin left - spacing
         *         left)
         * @sample {highstock} stock/chart/title-align/
         *         Aligned to the plot area (x = 50px = margin left - spacing
         *         left)
         *
         * @since 2.0
         */
        align?: AlignValue;
        /**
         * When the title is floating, the plot area will not move to make space
         * for it.
         *
         * @sample {highcharts} highcharts/chart/zoomtype-none/
         *         False by default
         * @sample {highcharts} highcharts/title/floating/
         *         True - title on top of the plot area
         * @sample {highstock} stock/chart/title-floating/
         *         True - title on top of the plot area
         *
         * @default false
         * @since   2.1
         */
        floating?: boolean;
        /**
         * The margin between the title and the plot area, or if a subtitle
         * is present, the margin between the subtitle and the plot area.
         *
         * @sample {highcharts} highcharts/title/margin-50/
         *         A chart title margin of 50
         * @sample {highcharts} highcharts/title/margin-subtitle/
         *         The same margin applied with a subtitle
         * @sample {highstock} stock/chart/title-margin/
         *         A chart title margin of 50
         *
         * @since 2.1
         */
        margin?: number;
        /**
         * When the title is too wide to fit in the chart, the default behavior
         * is to scale it down to fit, or apply word wrap if it is scaled down
         * to `minScale` and still doesn't fit.
         *
         * The default value reflects the scale, when using default font sizes,
         * when the title font size matches that of the subtitle. The title
         * still stands out as it is bold by default.
         *
         * Set `minScale` to 1 to avoid downscaling.
         *
         * @sample {highcharts} highcharts/title/align-auto/
         *         Downscaling demonstrated
         *
         * @since 12.0.0
         */
        minScale?: number;
        /**
         * CSS styles for the title. Use this for font styling, but use `align`,
         * `x` and `y` for text alignment.
         *
         * Note that the default [title.minScale](#title.minScale) option also
         * affects the rendered font size. In order to keep the font size fixed
         * regardless of title length, set `minScale` to 1.
         *
         * In styled mode, the title style is given in the `.highcharts-title`
         * class.
         *
         * @sample {highcharts} highcharts/title/style/
         *         Custom color and weight
         * @sample {highstock} stock/chart/title-style/
         *         Custom color and weight
         * @sample highcharts/css/titles/
         *         Styled mode
         *
         * @default {highcharts|highmaps} { "color": "#333333", "fontSize": "18px" }
         * @default {highstock} { "color": "#333333", "fontSize": "16px" }
         */
        style: CSSObject;
        /**
         * The title of the chart. To disable the title, set the `text` to
         * `undefined`.
         *
         * @sample {highcharts} highcharts/title/text/
         *         Custom title
         * @sample {highstock} stock/chart/title-text/
         *         Custom title
         *
         * @default {highcharts|highmaps} Chart title
         * @default {highstock} undefined
         */
        text?: string;
        /**
         * Whether to
         * [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
         * to render the text.
         *
         * @default false
         */
        useHTML?: boolean;
        /**
         * The vertical alignment of the title. Can be one of `"top"`,
         * `"middle"` and `"bottom"`. When a value is given, the title behaves
         * as if [floating](#title.floating) were `true`.
         *
         * @sample {highcharts} highcharts/title/verticalalign/
         *         Chart title in bottom right corner
         * @sample {highstock} stock/chart/title-verticalalign/
         *         Chart title in bottom right corner
         *
         * @since 2.1
         */
        verticalAlign?: VerticalAlignValue;
        /**
         * The x position of the title relative to the alignment within
         * `chart.spacingLeft` and `chart.spacingRight`.
         *
         * @sample {highcharts} highcharts/title/align/
         *         Aligned to the plot area (x = 70px = margin left - spacing
         *         left)
         * @sample {highstock} stock/chart/title-align/
         *         Aligned to the plot area (x = 50px = margin left - spacing
         *         left)
         *
         * @default 0
         * @since   2.0
         */
        x?: number;
        /**
         * The y position of the title relative to the alignment within
         * [chart.spacingTop](#chart.spacingTop) and [chart.spacingBottom](
         * #chart.spacingBottom). By default it depends on the font size.
         *
         * @sample {highcharts} highcharts/title/y/
         *         Title inside the plot area
         * @sample {highstock} stock/chart/title-verticalalign/
         *         Chart title in bottom right corner
         *
         * @since 2.0
         */
        y?: number;
    }
}
export default Chart;
