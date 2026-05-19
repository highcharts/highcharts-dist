import type BubbleLegendItem from '../../Series/Bubble/BubbleLegendItem';
import type { EventCallback } from '../Callback';
import type Chart from '../Chart/Chart';
import type { DeepPartial } from '../../Shared/Types';
import type { HTMLDOMElement } from '../Renderer/DOMElementType';
import type LegendBase from './LegendBase';
import type LegendOptions from './LegendOptions';
import type SVGElement from '../Renderer/SVG/SVGElement';
import Series from '../Series/Series.js';
import Point from '../Series/Point.js';
declare module '../Chart/ChartBase' {
    interface ChartBase {
        legend: Legend;
    }
}
declare module '../Series/SeriesOptions' {
    interface SeriesOptions {
        /**
         * The sequential index of the series in the legend.
         *
         * @see [legend.reversed](#legend.reversed)
         *
         * @see [yAxis.reversedStacks](#yAxis.reversedStacks)
         *
         * @sample {highcharts|highstock} highcharts/series/legendindex/
         * Legend in opposite order
         */
        legendIndex?: number;
        /**
         * If true, a checkbox is displayed next to the legend item to allow
         * selecting the series. The state of the checkbox is determined by
         * the `selected` option.
         *
         * @productdesc {highmaps}
         * Note that if a `colorAxis` is defined, the color axis is represented
         * in the legend, not the series.
         *
         * @sample {highcharts} highcharts/plotoptions/series-showcheckbox-true/
         * Show select box
         *
         * @since 1.2.0
         * @default false
         */
        showCheckbox?: boolean;
        /**
         * Whether to display this particular series or series type in the
         * legend. Standalone series are shown in legend by default, and linked
         * series are not. Since v7.2.0 it is possible to show series that use
         * colorAxis by setting this option to `true`.
         *
         * @sample {highcharts} highcharts/plotoptions/series-showinlegend/
         * One series in the legend, one hidden
         */
        showInLegend?: boolean;
    }
    interface SeriesEventsOptions {
        /**
         * Fires when the checkbox next to the series' name in the legend is
         * clicked. One parameter, `event`, is passed to the function. The state
         * of the checkbox is found by `event.checked`. The checked item is
         * found by `event.item`. Return `false` to prevent the default action
         * which is to toggle the select state of the series.
         *
         * @sample {highcharts} highcharts/plotoptions/series-events-checkboxclick/
         * Alert checkbox status
         *
         * @since 1.2.0
         */
        checkboxClick?: SeriesCheckboxClickCallbackFunction;
    }
}
/**
 * Function callback when the checkbox next to the series' name in the legend is
 * clicked.
 *
 * @callback Highcharts.SeriesCheckboxClickCallbackFunction
 *
 * @param {Highcharts.Series} this
 *        The series where the event occurred.
 *
 * @param {Highcharts.SeriesCheckboxClickEventObject} event
 *        Event arguments.
 */
export type SeriesCheckboxClickCallbackFunction = EventCallback<Series, SeriesCheckboxClickEventObject>;
/**
 * Event information regarding check of a series box.
 */
export interface SeriesCheckboxClickEventObject {
    /**
     * Whether the box has been checked.
     */
    checked: boolean;
    /**
     * Related series.
     */
    item: Series;
    /**
     * Related series.
     */
    target: Series;
    /**
     * Event type.
     */
    type: 'checkboxClick';
}
/**
 * The overview of the chart's series. The legend object is instantiated
 * internally in the chart constructor, and is available from the `chart.legend`
 * property. Each chart has only one legend.
 *
 * @class
 * @name Highcharts.Legend
 *
 * @param {Highcharts.Chart} chart
 * The chart instance.
 *
 * @param {Highcharts.LegendOptions} options
 * Legend options.
 */
declare class Legend {
    allItems: Array<Legend.Item>;
    box: SVGElement;
    chart: Chart;
    group: SVGElement;
    options: LegendOptions;
    title?: SVGElement;
    /**
     * Update the legend with new options. Equivalent to running `chart.update`
     * with a legend configuration option.
     *
     * @sample highcharts/legend/legend-update/
     *         Legend update
     *
     * @function Highcharts.Legend#update
     *
     * @param {Highcharts.LegendOptions} options
     * Legend options.
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart after the axis is altered. If doing more
     * operations on the chart, it is a good idea to set redraw to false and
     * call {@link Chart#redraw} after. Whether to redraw the chart.
     *
     * @emits Highcharts.Legends#event:afterUpdate
     */
    update(options: DeepPartial<LegendOptions>, redraw?: boolean): void;
    /**
     * Set the legend item text.
     *
     * @function Highcharts.Legend#setText
     *
     * @param {Highcharts.Point|Highcharts.Series} item
     * The item for which to update the text in the legend.
     */
    setText(item: Legend.Item): void;
}
interface Legend extends LegendBase {
}
declare namespace Legend {
    interface CheckBoxElement extends HTMLDOMElement {
        checked?: boolean;
        x: number;
        y: number;
    }
    type Item = (BubbleLegendItem | Series | Point);
}
export default Legend;
