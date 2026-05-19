import type { PlotBandOptions } from './PlotBandOptions';
import type { PlotLineOptions } from './PlotLineOptions';
import type SVGElement from '../../Renderer/SVG/SVGElement';
import PlotLineOrBandAxis from './PlotLineOrBandAxis.js';
/**
 * The object wrapper for plot lines and plot bands
 *
 * @class
 * @name Highcharts.PlotLineOrBand
 *
 * @param {Highcharts.Axis} axis
 * Related axis.
 *
 * @param {Highcharts.AxisPlotLinesOptions|Highcharts.AxisPlotBandsOptions} [options]
 * Options to use.
 */
declare class PlotLineOrBand {
    constructor(axis: PlotLineOrBandAxis.Composition, options: (PlotBandOptions | PlotLineOptions));
    /**
     * Related axis.
     *
     * @name Highcharts.PlotLineOrBand#axis
     * @type {Highcharts.Axis}
     */
    axis: PlotLineOrBandAxis.Composition;
    /**
     * The id of the plot line or plot band.
     *
     * @name Highcharts.PlotLineOrBand#id
     * @type {string}
     */
    id?: string;
    /**
     * SVG element of the label.
     *
     * @name Highcharts.PlotLineOrBand#label
     * @type {Highcharts.SVGElement}
     */
    label?: SVGElement;
    /**
     * Options of the plot line or band.
     *
     * @name Highcharts.PlotLineOrBand#options
     * @type {AxisPlotBandsOptions|AxisPlotLinesOptions}
     */
    options: (PlotBandOptions | PlotLineOptions);
    /**
     * SVG element of the plot line or band.
     *
     * @name Highcharts.PlotLineOrBand#svgElem
     * @type {Highcharts.SVGElement}
     */
    svgElem?: SVGElement;
    /**
     * Remove the plot line or band.
     *
     * @function Highcharts.PlotLineOrBand#destroy
     */
    destroy(): void;
}
export default PlotLineOrBand;
