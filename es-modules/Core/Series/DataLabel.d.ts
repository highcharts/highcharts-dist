import type DataLabelOptions from './DataLabelOptions';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
declare module './PointOptions' {
    interface PointOptions {
        /**
         * Individual data label for each point. The options are the same as
         * the ones for [plotOptions.series.dataLabels](#plotOptions.series.dataLabels)
         * with exception of `zIndex` which is applied on the data label's
         * parent group.
         *
         * @sample highcharts/point/datalabels/
         *         Show a label for the last value
         */
        dataLabels?: (PointDataLabelOptions | Array<PointDataLabelOptions>);
        /**
         * The rank for all this point's data labels in case of collision. If
         * two data labels are about to overlap, only the one with the highest
         * `labelrank` will be drawn.
         *
         * The `labelrank` set on `series.dataLabels` takes precedence over
         * this.
         */
        labelrank?: number;
    }
}
export interface PointDataLabelOptionsModifier {
    zIndex?: undefined;
}
export type PointDataLabelOptions = DataLabelOptions & PointDataLabelOptionsModifier;
declare module './SeriesOptions' {
    interface SeriesOptions {
        /**
         * Options for the series data labels, appearing next to each data
         * point.
         *
         * Since v6.2.0, multiple data labels can be applied to each single
         * point by defining them as an array of configs.
         *
         * In styled mode, the data labels can be styled with the
         * `.highcharts-data-label-box` and `.highcharts-data-label` class names
         * ([see example](https://www.highcharts.com/samples/highcharts/css/series-datalabels)).
         *
         * @sample {highcharts} highcharts/plotoptions/series-datalabels-enabled
         *         Data labels enabled
         * @sample {highcharts} highcharts/plotoptions/series-datalabels-multiple
         *         Multiple data labels on a bar series
         * @sample {highcharts} highcharts/css/series-datalabels
         *         Styled mode example
         * @sample {highmaps} maps/demo/color-axis
         *         Choropleth map with data labels
         * @sample {highmaps} maps/demo/mappoint-datalabels-mapmarker
         *         Using data labels as map markers
         */
        dataLabels?: (DataLabelOptions | Array<DataLabelOptions>);
    }
}
declare namespace DataLabel {
    interface ConnectorShapeFunction {
        (...args: Array<any>): SVGPath;
    }
}
export default DataLabel;
