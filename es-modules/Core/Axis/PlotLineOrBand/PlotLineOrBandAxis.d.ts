import type Axis from '../Axis';
import type PlotBandOptions from './PlotBandOptions';
import type PlotLineOptions from './PlotLineOptions';
import type PlotLineOrBand from './PlotLineOrBand';
import type SVGPath from '../../Renderer/SVG/SVGPath';
declare module '../AxisOptions' {
    interface AxisOptions {
        plotBands?: Array<PlotBandOptions>;
        plotLines?: Array<PlotLineOptions>;
    }
}
declare namespace PlotLineOrBandAxis {
    class Composition extends Axis {
        /**
         * Add a plot band after render time.
         *
         * @sample highcharts/members/axis-addplotband/
         *         Toggle the plot band from a button
         *
         * @function Highcharts.Axis#addPlotBand
         *
         * @param {Highcharts.AxisPlotBandsOptions} options
         * A configuration object for the plot band, as defined in
         * [xAxis.plotBands](https://api.highcharts.com/highcharts/xAxis.plotBands).
         *
         * @return {Highcharts.PlotLineOrBand|undefined}
         * The added plot band, or `undefined` if the options are not valid.
         */
        addPlotBand(options: PlotBandOptions): (PlotLineOrBand | undefined);
        /**
         * Add a plot line after render time.
         *
         * @sample highcharts/members/axis-addplotline/
         *         Toggle the plot line from a button
         *
         * @function Highcharts.Axis#addPlotLine
         *
         * @param {Highcharts.AxisPlotLinesOptions} options
         * A configuration object for the plot line, as defined in
         * [xAxis.plotLines](https://api.highcharts.com/highcharts/xAxis.plotLines).
         *
         * @return {Highcharts.PlotLineOrBand|undefined}
         * The added plot line, or `undefined` if the options are not valid.
         */
        addPlotLine(options: PlotLineOptions): (PlotLineOrBand | undefined);
        /**
         * Internal function to create the SVG path definition for a plot band.
         *
         * @function Highcharts.Axis#getPlotBandPath
         *
         * @param {number} from
         * The axis value to start from.
         *
         * @param {number} to
         * The axis value to end on.
         *
         * @param {Highcharts.AxisPlotBandsOptions|Highcharts.AxisPlotLinesOptions} options
         * The plotBand or plotLine configuration object.
         *
         * @return {Highcharts.SVGPathArray}
         * The SVG path definition in array form.
         */
        getPlotBandPath(from: number, to: number, options?: (PlotBandOptions | PlotLineOptions)): SVGPath;
        /**
         * Remove a plot band by its id.
         *
         * @sample highcharts/members/axis-removeplotband/
         *         Remove plot band by id
         * @sample highcharts/members/axis-addplotband/
         *         Toggle the plot band from a button
         *
         * @function Highcharts.Axis#removePlotBand
         *
         * @param {string} id
         *        The plot band's `id` as given in the original configuration
         *        object or in the `addPlotBand` option.
         */
        removePlotBand(id: string): void;
        /**
         * Remove a plot line by its id.
         *
         * @sample highcharts/xaxis/plotlines-id/
         *         Remove plot line by id
         * @sample highcharts/members/axis-addplotline/
         *         Toggle the plot line from a button
         *
         * @function Highcharts.Axis#removePlotLine
         *
         * @param {string} id
         *        The plot line's `id` as given in the original configuration
         *        object or in the `addPlotLine` option.
         */
        removePlotLine(id: string): void;
    }
}
export default PlotLineOrBandAxis;
