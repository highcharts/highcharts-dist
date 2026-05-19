import type ColorType from '../Color/ColorType';
import type Legend from './Legend';
import type LegendItem from './LegendItem';
import type Series from '../Series/Series';
declare module '../Axis/AxisBase' {
    interface AxisBase extends LegendItem {
    }
}
declare module '../Series/PointBase' {
    interface PointBase extends LegendItem {
    }
}
declare module '../Series/SeriesBase' {
    interface SeriesBase extends LegendItem {
        /**
         * Legend data for the series.
         *
         * @since 10.3.0
         */
        legendItem?: LegendItem['legendItem'];
    }
}
declare module '../Series/SeriesOptions' {
    interface SeriesOptions {
        /**
         * What type of legend symbol to render for this series. Can be one of
         * `areaMarker`, `lineMarker` or `rectangle`.
         *
         * @sample {highcharts} highcharts/series/legend-symbol/
         *         Change the legend symbol
         *
         * @default 'rectangle'
         * @since   11.0.1
         */
        legendSymbol?: string;
        /**
         * Defines the color of the legend symbol for this series. Defaults to
         * undefined, in which case the series color is used. Does not work with
         * styled mode.
         *
         * @sample {highcharts|highstock} highcharts/series/legend-symbol-color/
         *         Change the legend symbol color
         *
         * @since   12.0.0
         * @product highcharts highstock highmaps
         */
        legendSymbolColor?: ColorType;
    }
}
declare namespace LegendSymbol {
    /**
     * Draw a line, a point marker and an area in the legend.
     *
     * @function Highcharts.LegendSymbolMixin.areaMarker
     *
     * @param {Highcharts.Legend} legend
     * The legend object.
     */
    function areaMarker(this: Series, legend: Legend, item?: LegendItem): void;
    /**
     * Draw a line and a point marker in the legend.
     *
     * @function Highcharts.LegendSymbolMixin.lineMarker
     *
     * @param {Highcharts.Legend} legend
     * The legend object.
     */
    function lineMarker(this: Series, legend: Legend, item?: LegendItem, hasArea?: boolean): void;
}
export default LegendSymbol;
