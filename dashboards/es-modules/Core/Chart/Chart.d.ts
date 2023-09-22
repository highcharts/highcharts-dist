import type { AlignObject, AlignValue, VerticalAlignValue } from '../Renderer/AlignObject';
import type AnimationOptions from '../Animation/AnimationOptions';
import type AxisOptions from '../Axis/AxisOptions';
import type AxisType from '../Axis/AxisType';
import type BBoxObject from '../Renderer/BBoxObject';
import type { CSSObject, CursorValue } from '../Renderer/CSSObject';
import type { EventCallback } from '../Callback';
import type { NumberFormatterCallbackFunction, Options } from '../Options';
import type ChartLike from './ChartLike';
import type ChartOptions from './ChartOptions';
import type { ChartPanningOptions, ChartZoomingOptions } from './ChartOptions';
import type ColorAxis from '../Axis/Color/ColorAxis';
import type Point from '../Series/Point';
import type PointerEvent from '../PointerEvent';
import type SeriesOptions from '../Series/SeriesOptions';
import type { SeriesTypeOptions } from '../Series/SeriesType';
import type { HTMLDOMElement } from '../Renderer/DOMElementType';
import type SVGElement from '../Renderer/SVG/SVGElement';
import Axis from '../Axis/Axis.js';
import Pointer from '../Pointer.js';
import Series from '../Series/Series.js';
import SVGRenderer from '../Renderer/SVG/SVGRenderer.js';
import Time from '../Time.js';
import { AxisCollectionKey } from '../Axis/AxisOptions';
declare module '../Axis/AxisLike' {
    interface AxisLike {
        extKey?: string;
        index?: number;
        touched?: boolean;
    }
}
declare module './ChartLike' {
    interface ChartLike {
        resetZoomButton?: SVGElement;
        pan(e: PointerEvent, panning: boolean | ChartPanningOptions): void;
        showResetZoom(): void;
        zoom(event: Pointer.SelectEventObject): void;
        zoomOut(): void;
    }
}
declare module './ChartOptions' {
    interface ChartOptions {
        forExport?: boolean;
        renderer?: string;
        skipClone?: boolean;
    }
}
declare module '../Options' {
    interface Options {
        chart: ChartOptions;
        caption?: Chart.CaptionOptions;
        credits?: Chart.CreditsOptions;
        subtitle?: Chart.SubtitleOptions;
        series?: Array<SeriesTypeOptions>;
        title?: Chart.TitleOptions;
    }
}
declare module '../Series/PointLike' {
    interface PointLike {
        touched?: boolean;
    }
}
declare module '../Series/SeriesLike' {
    interface SeriesLike {
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
 * @param {Highcharts.ChartCallbackFunction} [callback]
 *        Function to run when the chart has loaded and and all external images
 *        are loaded. Defining a
 *        [chart.events.load](https://api.highcharts.com/highcharts/chart.events.load)
 *        handler is equivalent.
 */
declare class Chart {
    static chart(options: Partial<Options>, callback?: Chart.CallbackFunction): Chart;
    static chart(renderTo: (string | globalThis.HTMLElement), options: Partial<Options>, callback?: Chart.CallbackFunction): Chart;
    constructor(options: Partial<Options>, callback?: Chart.CallbackFunction);
    constructor(renderTo: (string | globalThis.HTMLElement), options: Partial<Options>, callback?: Chart.CallbackFunction);
    _cursor?: (CursorValue | null);
    axes: Array<AxisType>;
    axisOffset: Array<number>;
    bounds: Record<string, Record<string, number>>;
    callback?: Chart.CallbackFunction;
    chartBackground?: SVGElement;
    chartHeight: number;
    chartWidth: number;
    clipBox: BBoxObject;
    clipOffset?: Array<number>;
    clipRect?: SVGElement;
    colorCounter: number;
    container: globalThis.HTMLElement;
    containerBox?: {
        height: number;
        width: number;
    };
    credits?: SVGElement;
    caption?: SVGElement;
    eventOptions: Record<string, EventCallback<Series, Event>>;
    hasCartesianSeries?: boolean;
    hasLoaded?: boolean;
    hasRendered?: boolean;
    index: number;
    isDirtyBox?: boolean;
    isDirtyLegend?: boolean;
    isResizing: number;
    labelCollectors: Array<Chart.LabelCollectorFunction>;
    loadingDiv?: HTMLDOMElement;
    loadingShown?: boolean;
    loadingSpan?: HTMLDOMElement;
    margin: Array<number>;
    marginBottom?: number;
    numberFormatter: NumberFormatterCallbackFunction;
    oldChartHeight?: number;
    oldChartWidth?: number;
    options: Options;
    plotBackground?: SVGElement;
    plotBGImage?: SVGElement;
    plotBorder?: SVGElement;
    plotBorderWidth?: number;
    plotBox: BBoxObject;
    plotHeight: number;
    plotLeft: number;
    plotSizeX?: number;
    plotSizeY?: number;
    plotTop: number;
    plotWidth: number;
    pointCount: number;
    pointer: Pointer;
    reflowTimeout?: number;
    renderer: Chart.Renderer;
    renderTo: globalThis.HTMLElement;
    series: Array<Series>;
    seriesGroup?: SVGElement;
    sharedClips: Record<string, (SVGElement | undefined)>;
    spacing: Array<number>;
    spacingBox: BBoxObject;
    styledMode?: boolean;
    subtitle?: SVGElement;
    symbolCounter: number;
    time: Time;
    title?: SVGElement;
    titleOffset: Array<number>;
    userOptions: Partial<Options>;
    xAxis: Array<AxisType>;
    yAxis: Array<AxisType>;
    zooming: ChartZoomingOptions;
    /**
     * Handle the arguments passed to the constructor.
     *
     * @private
     * @function Highcharts.Chart#getArgs
     *
     * @param {...Array<*>} arguments
     * All arguments for the constructor.
     *
     * @emits Highcharts.Chart#event:init
     * @emits Highcharts.Chart#event:afterInit
     */
    getArgs(a: (string | globalThis.HTMLElement | Partial<Options>), b?: (Chart.CallbackFunction | Partial<Options>), c?: Chart.CallbackFunction): void;
    /**
     * Function setting zoom options after chart init and after chart update.
     * Offers support for deprecated options.
     *
     * @private
     * @function Highcharts.Chart#setZoomOptions
     */
    setZoomOptions(): void;
    /**
     * Overridable function that initializes the chart. The constructor's
     * arguments are passed on directly.
     *
     * @function Highcharts.Chart#init
     *
     * @param {Highcharts.Options} userOptions
     *        Custom options.
     *
     * @param {Function} [callback]
     *        Function to run when the chart has loaded and and all external
     *        images are loaded.
     *
     *
     * @emits Highcharts.Chart#event:init
     * @emits Highcharts.Chart#event:afterInit
     */
    init(userOptions: Partial<Options>, callback?: Chart.CallbackFunction): void;
    /**
     * Internal function to unitialize an individual series.
     *
     * @private
     * @function Highcharts.Chart#initSeries
     */
    initSeries(options: SeriesOptions): Series;
    /**
     * Internal function to set data for all series with enabled sorting.
     *
     * @private
     * @function Highcharts.Chart#setSeriesData
     */
    setSeriesData(): void;
    /**
     * Sort and return chart series in order depending on the number of linked
     * series.
     *
     * @private
     * @function Highcharts.Series#getSeriesOrderByLinks
     */
    getSeriesOrderByLinks(): Array<Series>;
    /**
     * Order all series or axes above a given index. When series or axes are
     * added and ordered by configuration, only the last series is handled
     * (#248, #1123, #2456, #6112). This function is called on series and axis
     * initialization and destroy.
     *
     * @private
     * @function Highcharts.Chart#orderItems
     * @param {string} coll The collection name
     * @param {number} [fromIndex=0]
     * If this is given, only the series above this index are handled.
     */
    orderItems(coll: ('colorAxis' | 'series' | 'xAxis' | 'yAxis' | 'zAxis'), fromIndex?: number): void;
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
     * Create the Axis instances based on the config options.
     *
     * @private
     * @function Highcharts.Chart#getAxes
     * @emits Highcharts.Chart#event:afterGetAxes
     * @emits Highcharts.Chart#event:getAxes
     */
    getAxes(): void;
    /**
     * Returns an array of all currently selected points in the chart. Points
     * can be selected by clicking or programmatically by the
     * {@link Highcharts.Point#select}
     * function.
     *
     * @sample highcharts/plotoptions/series-allowpointselect-line/
     *         Get selected points
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
     * Apply a title, subtitle or caption for the chart
     *
     * @private
     * @function Highcharts.Chart#applyDescription
     * @param name {string}
     * Either title, subtitle or caption
     * @param {Highcharts.TitleOptions|Highcharts.SubtitleOptions|Highcharts.CaptionOptions|undefined} explicitOptions
     * The options to set, will be merged with default options.
     */
    applyDescription(name: ('title' | 'subtitle' | 'caption'), explicitOptions?: Chart.DescriptionOptionsType): void;
    /**
     * Internal function to lay out the chart title, subtitle and caption, and
     * cache the full offset height for use in `getMargins`. The result is
     * stored in `this.titleOffset`.
     *
     * @private
     * @function Highcharts.Chart#layOutTitles
     *
     * @param {boolean} [redraw=true]
     * @emits Highcharts.Chart#event:afterLayOutTitles
     */
    layOutTitles(redraw?: boolean): void;
    /**
     * Internal function to get the available size of the container element
     *
     * @private
     * @function Highcharts.Chart#getContainerBox
     */
    getContainerBox(): {
        width: number;
        height: number;
    };
    /**
     * Internal function to get the chart width and height according to options
     * and container size. Sets {@link Chart.chartWidth} and
     * {@link Chart.chartHeight}.
     *
     * @private
     * @function Highcharts.Chart#getChartSize
     */
    getChartSize(): void;
    /**
     * If the renderTo element has no offsetWidth, most likely one or more of
     * its parents are hidden. Loop up the DOM tree to temporarily display the
     * parents, then save the original display properties, and when the true
     * size is retrieved, reset them. Used on first render and on redraws.
     *
     * @private
     * @function Highcharts.Chart#temporaryDisplay
     *
     * @param {boolean} [revert]
     * Revert to the saved original styles.
     */
    temporaryDisplay(revert?: boolean): void;
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
     * Get the containing element, determine the size and create the inner
     * container div to hold the chart.
     *
     * @private
     * @function Highcharts.Chart#afterGetContainer
     * @emits Highcharts.Chart#event:afterGetContainer
     */
    getContainer(): void;
    /**
     * Calculate margins by rendering axis labels in a preliminary position.
     * Title, subtitle and legend have already been rendered at this stage, but
     * will be moved into their final positions.
     *
     * @private
     * @function Highcharts.Chart#getMargins
     * @emits Highcharts.Chart#event:getMargins
     */
    getMargins(skipAxes?: boolean): void;
    /**
     * @private
     * @function Highcharts.Chart#getAxisMargins
     */
    getAxisMargins(): void;
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
     * Toggle the event handlers necessary for auto resizing, depending on the
     * `chart.reflow` option.
     *
     * @private
     * @function Highcharts.Chart#setReflow
     */
    setReflow(): void;
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
     * Set the public chart properties. This is done before and after the
     * pre-render to determine margin sizes.
     *
     * @private
     * @function Highcharts.Chart#setChartSize
     * @emits Highcharts.Chart#event:afterSetChartSize
     */
    setChartSize(skipAxes?: boolean): void;
    /**
     * Initial margins before auto size margins are applied.
     *
     * @private
     * @function Highcharts.Chart#resetMargins
     */
    resetMargins(): void;
    /**
     * Internal function to draw or redraw the borders and backgrounds for chart
     * and plot area.
     *
     * @private
     * @function Highcharts.Chart#drawChartBox
     * @emits Highcharts.Chart#event:afterDrawChartBox
     */
    drawChartBox(): void;
    /**
     * Detect whether a certain chart property is needed based on inspecting its
     * options and series. This mainly applies to the chart.inverted property,
     * and in extensions to the chart.angular and chart.polar properties.
     *
     * @private
     * @function Highcharts.Chart#propFromSeries
     */
    propFromSeries(): void;
    /**
     * Internal function to link two or more series together, based on the
     * `linkedTo` option. This is done from `Chart.render`, and after
     * `Chart.addSeries` and `Series.remove`.
     *
     * @private
     * @function Highcharts.Chart#linkSeries
     * @emits Highcharts.Chart#event:afterLinkSeries
     */
    linkSeries(isUpdating?: boolean): void;
    /**
     * Render series for the chart.
     *
     * @private
     * @function Highcharts.Chart#renderSeries
     */
    renderSeries(): void;
    /**
     * Render all graphics for the chart. Runs internally on initialization.
     *
     * @private
     * @function Highcharts.Chart#render
     */
    render(): void;
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
     * Prepare for first rendering after all data are loaded.
     *
     * @private
     * @function Highcharts.Chart#firstRender
     * @emits Highcharts.Chart#event:beforeRender
     */
    firstRender(): void;
    /**
     * Internal function that runs on chart load, async if any images are loaded
     * in the chart. Runs the callbacks and triggers the `load` and `render`
     * events.
     *
     * @private
     * @function Highcharts.Chart#onload
     * @emits Highcharts.Chart#event:load
     * @emits Highcharts.Chart#event:render
     */
    onload(): void;
    /**
     * Emit console warning if the a11y module is not loaded.
     */
    warnIfA11yModuleNotLoaded(): void;
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
    addColorAxis(options: ColorAxis.Options, redraw?: boolean, animation?: boolean): Axis;
    /**
     * Factory for creating different axis types.
     *
     * @private
     * @function Highcharts.Chart#createAxis
     *
     * @param {string} coll
     *        An axis type.
     *
     * @param {...Array<*>} arguments
     *        All arguments for the constructor.
     *
     * @return {Highcharts.Axis}
     *         The newly generated Axis object.
     */
    createAxis(coll: AxisCollectionKey, options: Chart.CreateAxisOptionsObject): Axis;
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
    /**
     * Zoom into a given portion of the chart given by axis coordinates.
     *
     * @private
     * @function Highcharts.Chart#zoom
     * @param {Highcharts.SelectEventObject} event
     */
    zoom(event: Pointer.SelectEventObject): void;
    /**
     * Pan the chart by dragging the mouse across the pane. This function is
     * called on mouse move, and the distance to pan is computed from chartX
     * compared to the first chartX position in the dragging operation.
     *
     * @private
     * @function Highcharts.Chart#pan
     * @param {Highcharts.PointerEventObject} e
     * @param {string} panning
     */
    pan(e: PointerEvent, panning: ChartPanningOptions | boolean): void;
}
interface Chart extends ChartLike {
    callbacks: Array<Chart.CallbackFunction>;
    collectionsWithInit: Record<string, [Function, Array<any>?]>;
    collectionsWithUpdate: Array<string>;
    propsRequireDirtyBox: Array<string>;
    propsRequireReflow: Array<string>;
    propsRequireUpdateSeries: Array<string>;
}
declare namespace Chart {
    interface AfterUpdateEventObject {
        animation: (boolean | Partial<AnimationOptions>);
        options: Options;
        redraw: boolean;
    }
    interface CallbackFunction {
        (this: Chart, chart: Chart): void;
    }
    interface CaptionOptions {
        align?: AlignValue;
        floating?: boolean;
        margin?: number;
        style: CSSObject;
        text?: string;
        useHTML?: boolean;
        verticalAlign?: VerticalAlignValue;
        widthAdjust?: number;
        x?: number;
        y?: number;
    }
    interface CreateAxisOptionsObject {
        animation: (undefined | boolean | Partial<AnimationOptions>);
        axis: (DeepPartial<AxisOptions> | DeepPartial<ColorAxis.Options>);
        redraw: (undefined | boolean);
    }
    interface CreditsOptions {
        enabled?: boolean;
        href?: string;
        mapText?: string;
        mapTextFull?: string;
        position?: AlignObject;
        style: CSSObject;
        text?: string;
    }
    type DescriptionOptionsType = (TitleOptions | SubtitleOptions | CaptionOptions);
    interface IsInsideOptionsObject {
        axis?: Axis;
        ignoreX?: boolean;
        ignoreY?: boolean;
        inverted?: boolean;
        paneCoordinates?: boolean;
        series?: Series;
        visiblePlotOnly?: boolean;
    }
    interface LabelCollectorFunction {
        (): (Array<(SVGElement | undefined)> | undefined);
    }
    interface Renderer extends SVGRenderer {
        plotBox: BBoxObject;
        spacingBox: BBoxObject;
    }
    interface SubtitleOptions {
        align?: AlignValue;
        floating?: boolean;
        style: CSSObject;
        text?: string;
        useHTML?: boolean;
        verticalAlign?: VerticalAlignValue;
        widthAdjust?: number;
        x?: number;
        y?: number;
    }
    interface TitleOptions {
        align?: AlignValue;
        floating?: boolean;
        margin?: number;
        style: CSSObject;
        text?: string;
        useHTML?: boolean;
        verticalAlign?: VerticalAlignValue;
        widthAdjust?: number;
        x?: number;
        y?: number;
    }
}
export default Chart;
