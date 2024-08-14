/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    /**
     * (Highmaps) A tiledwebmap series allows user to display dynamically joined
     * individual images (tiles) and join them together to create a map.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `tiledwebmap` series are defined in
     * plotOptions.tiledwebmap.
     *
     * 3. Options for one single series are given in the series instance array.
     * (see online documentation for example)
     *
     * **TypeScript:**
     *
     * - the type option must always be set.
     *
     * - when accessing an array of series, the combined set of all series types
     * is represented by Highcharts.SeriesOptionsType . Narrowing down to the
     * specific type can be done by checking the `type` property. (see online
     * documentation for example)
     */
    interface PlotTiledwebmapOptions {
        /**
         * (Highmaps) Accessibility options for a series.
         */
        accessibility?: Highcharts.SeriesAccessibilityOptionsObject;
        /**
         * (Highmaps) An additional class name to apply to the series' graphical
         * elements. This option does not replace default class names of the
         * graphical element. Changes to the series' color will also be
         * reflected in a chart's legend and tooltip.
         */
        className?: string;
        /**
         * (Highmaps) A reserved subspace to store options and values for
         * customized functionality. Here you can add additional data for your
         * own event callbacks and formatter callbacks.
         */
        custom?: Highcharts.Dictionary<any>;
        /**
         * (Highmaps) A description of the series to add to the screen reader
         * information about the series.
         */
        description?: string;
        /**
         * (Highmaps) General event handlers for the series items. These event
         * hooks can also be attached to the series at run time using the
         * `Highcharts.addEvent` function.
         */
        events?: Highcharts.SeriesEventsOptionsObject;
        /**
         * (Highmaps) Highlight only the hovered point and fade the remaining
         * points.
         *
         * Scatter-type series require enabling the 'inactive' marker state and
         * adjusting opacity. Note that this approach could affect performance
         * with large datasets.
         */
        inactiveOtherPoints?: boolean;
        /**
         * (Highmaps) When set to `false` will prevent the series data from
         * being included in any form of data export.
         *
         * Since version 6.0.0 until 7.1.0 the option was existing undocumented
         * as `includeInCSVExport`.
         */
        includeInDataExport?: boolean;
        /**
         * (Highmaps) What type of legend symbol to render for this series. Can
         * be one of `areaMarker`, `lineMarker` or `rectangle`.
         */
        legendSymbol?: Highcharts.OptionsLegendSymbolValue;
        /**
         * (Highmaps) Opacity of a series parts: line, fill (e.g. area) and
         * dataLabels.
         */
        opacity?: number;
        /**
         * (Highmaps) Same as accessibility.point.descriptionFormat, but for an
         * individual series. Overrides the chart wide configuration.
         */
        pointDescriptionFormat?: Function;
        /**
         * (Highmaps) Provider options for the series.
         */
        provider?: Highcharts.PlotTiledwebmapProviderOptions;
        /**
         * (Highmaps) Whether to display this particular series or series type
         * in the legend. Standalone series are shown in legend by default, and
         * linked series are not. Since v7.2.0 it is possible to show series
         * that use colorAxis by setting this option to `true`.
         */
        showInLegend?: boolean;
        /**
         * (Highmaps) If set to `true`, the accessibility module will skip past
         * the points in this series for keyboard navigation.
         */
        skipKeyboardNavigation?: boolean;
        states?: Highcharts.SeriesStatesOptionsObject;
        /**
         * (Highmaps) Set the initial visibility of the series.
         */
        visible?: boolean;
        /**
         * (Highmaps) Define the z index of the series.
         */
        zIndex?: number;
    }
}
