import type AnimationOptions from '../../Core/Animation/AnimationOptions';
import type Chart from '../../Core/Chart/Chart';
import type DrilldownOptions from './DrilldownOptions';
import type Point from '../../Core/Series/Point';
import type { SeriesTypeOptions } from '../../Core/Series/SeriesType';
declare module '../../Core/Axis/AxisBase' {
    interface AxisBase {
        /**
         * Drill down to a given category. This is the same as clicking on an
         * axis label. If multiple series with drilldown are present, all will
         * drill down to the given category.
         *
         * See also `Point.doDrilldown` for drilling down on a single point
         * instance.
         *
         * @function Highcharts.Axis#drilldownCategory
         *
         * @sample highcharts/drilldown/programmatic
         *         Programmatic drilldown
         *
         * @param {number} x
         *        The index of the category
         * @param {global.MouseEvent} [originalEvent]
         *        The original event, used internally.
         *
         * @requires modules/drilldown
         */
        drilldownCategory(x: number, originalEvent?: MouseEvent): void;
    }
}
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        /**
         * Add a series to the chart as drilldown from a specific point in the
         * parent series. This method is used for async drilldown, when clicking
         * a point in a series should result in loading and displaying a more
         * high-resolution series. When not async, the setup is simpler using
         * the [drilldown.series](https://api.highcharts.com/highcharts/drilldown.series)
         * options structure.
         *
         * @sample highcharts/drilldown/async/
         *         Async drilldown
         *
         * @function Highcharts.Chart#addSeriesAsDrilldown
         *
         * @param {Highcharts.Point} point
         * The point from which the drilldown will start.
         *
         * @param {Highcharts.SeriesOptionsType} options
         * The series options for the new, detailed series.
         *
         * @requires modules/drilldown
         */
        addSeriesAsDrilldown(point: Point, options: SeriesTypeOptions): void;
        /**
         * When the chart is drilled down to a child series, calling
         * `chart.drillUp()` will drill up to the parent series.
         *
         * @function Highcharts.Chart#drillUp
         *
         * @sample highcharts/drilldown/programmatic
         *         Programmatic drilldown
         *
         * @requires modules/drilldown
         */
        drillUp(isMultipleDrillUp?: boolean): void;
    }
}
declare module '../../Core/Options' {
    interface Options {
        /**
         * Options for drill down, the concept of inspecting increasingly high
         * resolution data through clicking on chart items like columns or pie
         * slices.
         *
         * @sample {highcharts} highcharts/series-organization/drilldown
         *         Organization chart drilldown
         *
         * @product      highcharts highmaps
         * @requires     modules/drilldown
         * @optionparent drilldown
         */
        drilldown?: DrilldownOptions;
    }
    interface LangOptions {
        /**
         * Drill up button is deprecated since Highcharts v9.3.2. Use
         * [drilldown.breadcrumbs](#drilldown.breadcrumbs) instead.
         *
         * The text for the button that appears when drilling down, linking back
         * to the parent series. The parent series' name is inserted for
         * `{series.name}`.
         *
         * @deprecated 9.3.2
         * @since    3.0.8
         * @product  highcharts highmaps
         * @requires modules/drilldown
         * @apioption lang.drillUpText
         */
        drillUpText?: string;
    }
}
declare module '../../Core/Series/PointOptions' {
    interface PointOptions {
        /**
         * The `id` of a series in the [drilldown.series](#drilldown.series)
         * array to use for a drilldown for this point.
         *
         * @sample {highcharts} highcharts/drilldown/basic/
         *         Basic drilldown
         *
         * @type      {string}
         * @since     3.0.8
         * @product   highcharts
         * @requires  modules/drilldown
         * @apioption series.line.data.drilldown
         */
        drilldown?: string;
    }
}
declare module '../../Core/Renderer/SVG/SVGElementBase' {
    interface SVGElementBase {
        /**
         * A general fadeIn method.
         *
         * @requires modules/drilldown
         *
         * @function Highcharts.SVGElement#fadeIn
         *
         * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
         * The animation options for the element fade.
         */
        fadeIn(animation?: (boolean | Partial<AnimationOptions>)): void;
    }
}
declare namespace Drilldown {
    /**
     * The event arguments when a drilldown point is clicked.
     *
     * @interface Highcharts.DrilldownEventObject
     */
    interface DrilldownEventObject {
        /**
         * If a category label was clicked, which index.
         * @name Highcharts.DrilldownEventObject#category
         * @type {number|undefined}
         */
        category?: number;
        /**
         * The original browser event (usually click) that triggered the
         * drilldown.
         *
         * @name Highcharts.DrilldownEventObject#originalEvent
         * @type {global.Event|undefined}
         */
        originalEvent?: Event;
        /**
         * The originating point.
         *
         * @name Highcharts.DrilldownEventObject#point
         * @type {Highcharts.Point}
         */
        point: Point;
        /**
         * If a category label was clicked, this array holds all points
         * corresponding to the category. Otherwise it is set to false.
         *
         * @name Highcharts.DrilldownEventObject#points
         * @type {boolean|Array<Highcharts.Point>|undefined}
         */
        points?: Array<(boolean | Point)>;
        /**
         * Prevents the default behavior of the event.
         *
         * @name Highcharts.DrilldownEventObject#preventDefault
         * @type {Function}
         */
        preventDefault: Function;
        /**
         * Options for the new series. If the event is utilized for async
         * drilldown, the seriesOptions are not added, but rather loaded async.
         *
         * @name Highcharts.DrilldownEventObject#seriesOptions
         * @type {Highcharts.SeriesOptionsType|undefined}
         */
        seriesOptions?: SeriesTypeOptions;
        /**
         * The event target.
         *
         * @name Highcharts.DrilldownEventObject#target
         * @type {Highcharts.Chart}
         */
        target: Chart;
        /**
         * The event type.
         *
         * @name Highcharts.DrilldownEventObject#type
         * @type {"drilldown"}
         */
        type: 'drilldown';
    }
    /**
     * The event arguments when all the series have been drilled up.
     *
     * @interface Highcharts.DrillupAllEventObject
     */
    interface DrillupAllEventObject {
        /**
        * Prevents the default behavior of the event.
        *
        * @name Highcharts.DrillupAllEventObject#preventDefault
        * @type {Function}
        */
        preventDefault: Function;
        /**
        * The event target.
        *
        * @name Highcharts.DrillupAllEventObject#target
        * @type {Highcharts.Chart}
        */
        target: Chart;
        /**
        * The event type.
        *
        * @name Highcharts.DrillupAllEventObject#type
        * @type {"drillupall"}
        */
        type: 'drillupall';
    }
    /**
     * The event arguments when drilling up from a drilldown series.
     *
     * @interface Highcharts.DrillupEventObject
     */
    interface DrillupEventObject {
        /**
         * Prevents the default behavior of the event.
         *
         * @name Highcharts.DrillupEventObject#preventDefault
         * @type {Function}
         */
        preventDefault: Function;
        /**
        * Options for the new series.
        *
        * @name Highcharts.DrillupEventObject#seriesOptions
        * @type {Highcharts.SeriesOptionsType|undefined}
        */
        seriesOptions?: SeriesTypeOptions;
        /**
        * The event target.
        *
        * @name Highcharts.DrillupEventObject#target
        * @type {Highcharts.Chart}
        */
        target: Chart;
        /**
        * The event type.
        *
        * @name Highcharts.DrillupEventObject#type
        * @type {"drillup"}
        */
        type: 'drillup';
    }
}
export default Drilldown;
