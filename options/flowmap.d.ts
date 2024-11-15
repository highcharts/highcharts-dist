/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highmaps) Point accessibility options for a series.
     */
    interface PlotFlowmapAccessibilityPointOptions {
        /**
         * (Highmaps) Date format to use for points on datetime axes when
         * describing them to screen reader users.
         *
         * Defaults to the same format as in tooltip.
         *
         * For an overview of the replacement codes, see dateFormat.
         */
        dateFormat?: string;
        /**
         * (Highmaps) Formatter function to determine the date/time format used
         * with points on datetime axes when describing them to screen reader
         * users. Receives one argument, `point`, referring to the point to
         * describe. Should return a date format string compatible with
         * dateFormat.
         */
        dateFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highmaps) Whether or not to describe points with the value `null` to
         * assistive technology, such as screen readers.
         */
        describeNull?: boolean;
        /**
         * (Highmaps) A format string to use instead of the default for point
         * descriptions.
         *
         * The context of the format string is the point instance.
         *
         * As opposed to accessibility.point.valueDescriptionFormat, this option
         * replaces the whole description.
         */
        descriptionFormat?: string;
        /**
         * (Highmaps) Formatter function to use instead of the default for point
         * descriptions. Same as `accessibility.point.descriptionFormatter`, but
         * applies to a series instead of the whole chart.
         *
         * Note: Prefer using accessibility.point.valueDescriptionFormat instead
         * if possible, as default functionality such as describing annotations
         * will be preserved.
         */
        descriptionFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highmaps) Decimals to use for the values in the point descriptions.
         * Uses tooltip.valueDecimals if not defined.
         */
        valueDecimals?: number;
        /**
         * (Highmaps) Format to use for describing the values of data points to
         * assistive technology - including screen readers. The point context is
         * available as `{point}`.
         *
         * Other available context variables include `{index}`, `{value}`, and
         * `{xDescription}`.
         *
         * Additionally, the series name, annotation info, and description added
         * in `point.accessibility.description` is added by default if relevant.
         * To override this, use the accessibility.point.descriptionFormatter
         * option.
         */
        valueDescriptionFormat?: string;
        /**
         * (Highmaps) Prefix to add to the values in the point descriptions.
         * Uses tooltip.valuePrefix if not defined.
         */
        valuePrefix?: string;
        /**
         * (Highmaps) Suffix to add to the values in the point descriptions.
         * Uses tooltip.valueSuffix if not defined.
         */
        valueSuffix?: string;
    }
    /**
     * (Highmaps) An array of data points for the series. For the `flowmap`
     * series type, points can be given in the following ways:
     *
     * 1. An array of arrays with options as values. In this case, the values
     * correspond to `from, to, weight`. Example: (see online documentation for
     * example)
     *
     * 2. An array of objects with named values. The following snippet shows
     * only a few settings, see the complete options set below. (see online
     * documentation for example)
     *
     * 3. For objects with named values, instead of using the `mappoint` `id`,
     * you can use `[longitude, latitude]` arrays. (see online documentation for
     * example)
     */
    interface SeriesFlowmapDataOptions {
        /**
         * (Highmaps) A `curveFactor` with a higher value than 0 will curve the
         * link clockwise. A negative value will curve the link counter
         * clockwise. If the value is 0 the link will be straight.
         */
        curveFactor?: number;
        /**
         * (Highmaps) The fill color of an individual link.
         */
        fillColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highmaps) The opacity of the link color fill.
         */
        fillOpacity?: number;
        /**
         * (Highmaps) ID referencing a map point holding coordinates of the link
         * origin or coordinates in terms of array of `[longitude, latitude]` or
         * object with `lon` and `lat` properties.
         */
        from?: (string|Highcharts.LonLatArray|Highcharts.MapLonLatObject);
        /**
         * (Highmaps) If set to `true`, the line will grow towards its end.
         */
        growTowards?: boolean;
        /**
         * (Highmaps) Specify the `lineWidth` of the link.
         */
        lineWidth?: number;
        /**
         * (Highmaps) Specifying a `markerEnd` here will create an arrow symbol
         * indicating the direction of flow at the destination of one individual
         * link. If one has been previously specified at the higher level option
         * it will be overridden for the current link.
         */
        markerEnd?: (Highcharts.SeriesFlowmapDataMarkerEndOptions|null);
        /**
         * (Highmaps) The opacity of an individual link.
         */
        opacity?: number;
        /**
         * (Highmaps) ID referencing a map point holding coordinates of the link
         * origin or coordinates in terms of array of `[longitude, latitude]` or
         * object with `lon` and `lat` properties.
         */
        to?: (string|Highcharts.LonLatArray|Highcharts.MapLonLatObject);
        /**
         * (Highmaps) The weight of a link determines its thickness compared to
         * other links.
         */
        weight?: number;
    }
}
