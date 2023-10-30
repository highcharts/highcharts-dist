import type Axis from '../Axis/Axis';
import type { AxisCollectionKey } from '../Axis/AxisOptions';
import type BBoxObject from '../Renderer/BBoxObject';
import type { HTMLDOMElement } from '../Renderer/DOMElementType';
import type Options from '../Options';
import type Series from '../Series/Series';
import type SVGElement from '../Renderer/SVG/SVGElement';
import type SVGPath from '../Renderer/SVG/SVGPath';
import type SVGRenderer from '../Renderer/SVG/SVGRenderer';
import Chart from '../Chart/Chart.js';
import '../Pointer.js';
declare module '../Axis/AxisLike' {
    interface AxisLike {
        crossLabel?: SVGElement;
    }
}
declare module './ChartLike' {
    interface ChartLike {
        _labelPanes?: Record<string, Axis>;
    }
}
declare module '../Options' {
    interface Options {
        isStock?: boolean;
    }
}
declare module '../Series/SeriesLike' {
    interface SeriesLike {
        clipBox?: BBoxObject;
        forceCropping(): boolean | undefined;
    }
}
declare module '../Renderer/SVG/SVGRendererLike' {
    interface SVGRendererLike {
        crispPolyLine(points: SVGPath, width: number): SVGPath;
    }
}
/**
 * Stock-optimized chart. Use {@link Highcharts.Chart|Chart} for common charts.
 *
 * @requires modules/stock
 *
 * @class
 * @name Highcharts.StockChart
 * @extends Highcharts.Chart
 */
declare class StockChart extends Chart {
    /**
     * Initializes the chart. The constructor's arguments are passed on
     * directly.
     *
     * @function Highcharts.StockChart#init
     *
     * @param {Highcharts.Options} userOptions
     *        Custom options.
     *
     * @param {Function} [callback]
     *        Function to run when the chart has loaded and and all external
     *        images are loaded.
     *
     *
     * @emits Highcharts.StockChart#event:init
     * @emits Highcharts.StockChart#event:afterInit
     */
    init(userOptions: Partial<Options>, callback?: Chart.CallbackFunction): void;
    /**
     * Factory for creating different axis types.
     * Extended to add stock defaults.
     *
     * @private
     * @function Highcharts.StockChart#createAxis
     * @param {string} coll
     * An axis type.
     * @param {Chart.CreateAxisOptionsObject} options
     * The axis creation options.
     */
    createAxis(coll: AxisCollectionKey, options: Chart.CreateAxisOptionsObject): Axis;
}
declare namespace StockChart {
    /** @private */
    function compose(AxisClass: typeof Axis, SeriesClass: typeof Series, SVGRendererClass: typeof SVGRenderer): void;
    /**
     * Factory function for creating new stock charts. Creates a new
     * {@link Highcharts.StockChart|StockChart} object with different default
     * options than the basic Chart.
     *
     * @example
     * let chart = Highcharts.stockChart('container', {
     *     series: [{
     *         data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
     *         pointInterval: 24 * 60 * 60 * 1000
     *     }]
     * });
     *
     * @function Highcharts.stockChart
     *
     * @param {string|Highcharts.HTMLDOMElement} [renderTo]
     *        The DOM element to render to, or its id.
     *
     * @param {Highcharts.Options} options
     *        The chart options structure as described in the
     *        [options reference](https://api.highcharts.com/highstock).
     *
     * @param {Highcharts.ChartCallbackFunction} [callback]
     *        A function to execute when the chart object is finished
     *        rendering and all external image files (`chart.backgroundImage`,
     *        `chart.plotBackgroundImage` etc) are loaded. Defining a
     *        [chart.events.load](https://api.highcharts.com/highstock/chart.events.load)
     *        handler is equivalent.
     *
     * @return {Highcharts.StockChart}
     *         The chart object.
     */
    function stockChart(a: (string | HTMLDOMElement | Options), b?: (Chart.CallbackFunction | Options), c?: Chart.CallbackFunction): StockChart;
}
export default StockChart;
