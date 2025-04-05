/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts" {
    interface Chart {
        fullscreen: Fullscreen;
        /**
         * Exporting module required. Submit an SVG version of the chart to a
         * server along with some parameters for conversion.
         *
         * @param exportingOptions
         *        Exporting options in addition to those defined in exporting.
         *
         * @param chartOptions
         *        Additional chart options for the exported chart. For example a
         *        different background color can be added here, or `dataLabels`
         *        for export only.
         */
        exportChart(exportingOptions: ExportingOptions, chartOptions: Options): void;
        /**
         * Exporting and offline-exporting modules required. Export a chart to
         * an image locally in the user's browser.
         *
         * @param exportingOptions
         *        Exporting options, the same as in
         *        Highcharts.Chart#exportChart.
         *
         * @param chartOptions
         *        Additional chart options for the exported chart. For example a
         *        different background color can be added here, or `dataLabels`
         *        for export only.
         */
        exportChartLocal(exportingOptions?: ExportingOptions, chartOptions?: Options): void;
        /**
         * Return the unfiltered innerHTML of the chart container. Used as hook
         * for plugins. In styled mode, it also takes care of inlining CSS style
         * rules.
         *
         * @return The unfiltered SVG of the chart.
         */
        getChartHTML(): string;
        /**
         * Get the default file name used for exported charts. By default it
         * creates a file name based on the chart title.
         *
         * @return A file name without extension.
         */
        getFilename(): string;
        /**
         * Return an SVG representation of the chart.
         *
         * @param chartOptions
         *        Additional chart options for the generated SVG representation.
         *        For collections like `xAxis`, `yAxis` or `series`, the
         *        additional options is either merged in to the original item of
         *        the same `id`, or to the first item if a common id is not
         *        found.
         *
         * @return The SVG representation of the rendered chart.
         *
         * @fires Highcharts.Chart#getSVG
         */
        getSVG(chartOptions?: Options): string;
        /**
         * Exporting module required. Clears away other elements in the page and
         * prints the chart as it is displayed. By default, when the exporting
         * module is enabled, a context button with a drop down menu in the
         * upper right corner accesses this function.
         *
         * @fires Highcharts.Chart#beforePrint
         * @fires Highcharts.Chart#afterPrint
         */
        print(): void;
    }
    /**
     * Get data URL to an image of an SVG and call download on it options
     * object:
     *
     * - **filename:** Name of resulting downloaded file without extension.
     * Default is `chart`.
     *
     * - **type:** File type of resulting download. Default is `image/png`.
     *
     * - **scale:** Scaling factor of downloaded image compared to source.
     * Default is `1`.
     *
     * - **libURL:** URL pointing to location of dependency scripts to download
     * on demand. Default is the exporting.libURL option of the global
     * Highcharts options pointing to our server.
     *
     * @param svg
     *        The generated SVG
     *
     * @param options
     *        The exporting options
     *
     * @param failCallback
     *        The callback function in case of errors
     *
     * @param successCallback
     *        The callback function in case of success
     */
    function downloadSVGLocal(svg: string, options: ExportingOptions, failCallback: Function, successCallback?: Function): void;
    /**
     * Resolve CSS variables into hex colors
     */
    function resolveCSSVariables(): void;
}
export default factory;
export let Highcharts: typeof _Highcharts;
