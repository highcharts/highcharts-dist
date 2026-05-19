import Point from '../../Core/Series/Point.js';
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        /**
         * Pie series only. Whether to display a slice offset from the center.
         *
         * @name Highcharts.Point#sliced
         * @type {boolean|undefined}
         */
        sliced?: boolean;
    }
}
declare class PiePoint extends Point {
    /**
     * Toggle the visibility of a pie slice or other data point. Note that this
     * method is available only for some series, like pie, treemap and sunburst.
     *
     * @function Highcharts.Point#setVisible
     *
     * @param {boolean} [vis]
     * True to show the pie slice or other data point, false to hide. If
     * undefined, the visibility is toggled.
     *
     * @param {boolean} [redraw=true] Whether to redraw the chart after the point is
     * altered. If doing more operations on the chart, it is a good idea to set
     * redraw to false and call {@link Chart#redraw|chart.redraw()} after.
     *
     */
    setVisible(vis: boolean, redraw?: boolean): void;
}
export default PiePoint;
