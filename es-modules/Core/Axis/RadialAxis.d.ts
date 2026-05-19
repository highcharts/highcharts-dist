declare module './AxisOptions' {
    interface AxisOptions {
        /**
         * In a polar chart, this is the angle of the Y axis in degrees, where
         * 0 is up and 90 is right. The angle determines the position of the
         * axis line and the labels, though the coordinate system is unaffected.
         * Since v8.0.0 this option is also applicable for X axis (inverted
         * polar).
         *
         * @sample {highcharts} highcharts/xaxis/angle/
         *         Custom X axis' angle on inverted polar chart
         * @sample {highcharts} highcharts/yaxis/angle/
         *         Dual axis polar chart
         *
         * @default   0
         * @since     4.2.7
         * @product   highcharts
         */
        angle?: number;
        /**
         * Polar charts only. Whether the grid lines should draw as a polygon
         * with straight lines between categories, or as circles. Can be either
         * `circle` or `polygon`. Since v8.0.0 this option is also applicable
         * for X axis (inverted polar).
         *
         * @sample {highcharts} highcharts/demo/polar-spider/
         *         Polygon grid lines
         * @sample {highcharts} highcharts/xaxis/gridlineinterpolation/
         *         Circle and polygon on inverted polar
         * @sample {highcharts} highcharts/yaxis/gridlineinterpolation/
         *         Circle and polygon
         *
         * @product    highcharts
         */
        gridLineInterpolation?: ('circle' | 'polygon');
    }
}
declare module '../Chart/ChartBase' {
    interface ChartBase {
        /**
         * The flag is set to `true` if a series of the chart is inverted.
         */
        inverted?: boolean;
    }
}
declare module './PlotLineOrBand/PlotBandOptions' {
    interface PlotBandOptions {
        /**
         * In a gauge chart, this option determines the inner radius of the
         * plot band that stretches along the perimeter. It can be given as
         * a percentage string, like `"100%"`, or as a pixel number, like `100`.
         * By default, the inner radius is controlled by the [thickness](
         * #yAxis.plotBands.thickness) option.
         *
         * @sample {highcharts} highcharts/xaxis/plotbands-gauge
         *         Gauge plot band
         *
         * @since     2.3
         * @product   highcharts
         */
        innerRadius?: (number | string);
        /**
         * In a gauge chart, this option determines the outer radius of the
         * plot band that stretches along the perimeter. It can be given as
         * a percentage string, like `"100%"`, or as a pixel number, like `100`.
         *
         * @sample {highcharts} highcharts/xaxis/plotbands-gauge
         *         Gauge plot band
         *
         * @default   100%
         * @since     2.3
         * @product   highcharts
         */
        outerRadius?: (number | string);
        /**
         * In a gauge chart, this option sets the width of the plot band
         * stretching along the perimeter. It can be given as a percentage
         * string, like `"10%"`, or as a pixel number, like `10`. The default
         * value 10 is the same as the default [tickLength](#yAxis.tickLength),
         * thus making the plot band act as a background for the tick markers.
         *
         * @sample {highcharts} highcharts/xaxis/plotbands-gauge
         *         Gauge plot band
         *
         * @default   10
         * @since     2.3
         * @product   highcharts
         */
        thickness?: (number | string);
    }
}
export {};
