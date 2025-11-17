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
    interface PlotTiledwebmapAccessibilityPointOptions {
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
     * (Highmaps) Provider options for the series.
     */
    interface PlotTiledwebmapProviderOptions {
        /**
         * (Highmaps) API key for providers that require using one.
         */
        apiKey?: string;
        /**
         * (Highmaps) Subdomain required by each provider. Check the providers
         * documentation for available subdomains.
         */
        subdomain?: string;
        /**
         * (Highmaps) Set a tiles theme. Check the providers documentation for
         * official list of available themes.
         */
        theme?: string;
        /**
         * (Highmaps) Provider type to pull data (tiles) from.
         */
        type?: string;
        /**
         * (Highmaps) Custom URL for providers not specified in providers type.
         * Available variables to use in URL are: `{x}`, `{y}`, `{z}` or
         * `{zoom}`. Remember to always specify a projection, when using a
         * custom URL.
         */
        url?: string;
    }
}
