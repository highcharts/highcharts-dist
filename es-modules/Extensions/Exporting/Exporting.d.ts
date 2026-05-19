import type { ExportingOptions } from './ExportingOptions';
import type ExportingBase from './ExportingBase';
import type { SVGDOMElement } from '../../Core/Renderer/DOMElementType';
import type Options from '../../Core/Options';
import Chart from '../../Core/Chart/Chart.js';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        /**
         * Exporting object.
         *
         * @name Highcharts.Chart#exporting
         * @type {Highcharts.Exporting}
         */
        exporting?: Exporting;
        /**
         * Deprecated. Use
         * [Exporting.exportChart](https://api.highcharts.com/class-reference/Highcharts.Exporting#exportChart)
         * instead.
         *
         * @deprecated 11.4.1
         */
        exportChart(exportingOptions?: ExportingOptions, chartOptions?: Options): Promise<void>;
        /**
         * Deprecated. Use
         * [Exporting.getChartHTML](https://api.highcharts.com/class-reference/Highcharts.Exporting#getChartHTML)
         * instead.
         *
         * @deprecated 11.4.1
         */
        getChartHTML(applyStyleSheets?: boolean): (string | void);
        /**
         * Deprecated. Use
         * [Exporting.getFilename](https://api.highcharts.com/class-reference/Highcharts.Exporting#getFilename)
         * instead.
         *
         * @deprecated 11.4.1
         */
        getFilename(): (string | void);
        /**
         * Deprecated. Use
         * [Exporting.getSVG](https://api.highcharts.com/class-reference/Highcharts.Exporting#getSVG)
         * instead.
         *
         * @deprecated 11.4.1
         */
        getSVG(chartOptions?: Partial<Options>): string | void;
        /**
         * Deprecated. Use
         * [Exporting.print](https://api.highcharts.com/class-reference/Highcharts.Exporting#print)
         * instead.
         *
         * @deprecated 11.4.1
         */
        print(): void;
    }
}
declare module '../../Core/Chart/ChartOptions' {
    interface ChartEventsOptions {
        /**
         * Fires after a chart is printed through the context menu item or the
         * `Chart.print` method.
         *
         * @sample highcharts/chart/events-beforeprint-afterprint/
         * Rescale the chart to print
         *
         * @since 4.1.0
         * @context Highcharts.Chart
         * @requires modules/exporting
         */
        afterPrint?: Exporting.AfterPrintCallbackFunction;
        /**
         * Fires before a chart is printed through the context menu item or
         * the `Chart.print` method.
         *
         * @sample highcharts/chart/events-beforeprint-afterprint/
         * Rescale the chart to print
         *
         * @since 4.1.0
         * @context Highcharts.Chart
         * @requires modules/exporting
         */
        beforePrint?: Exporting.BeforePrintCallbackFunction;
    }
}
declare module '../../Core/GlobalsBase' {
    interface GlobalsBase {
        Exporting: typeof Exporting;
    }
}
/**
 * The Exporting class provides methods for exporting charts to images. If the
 * exporting module is loaded, this class is instantiated on the chart and
 * available through the `chart.exporting` property. Read more about the
 * [exporting module](https://www.highcharts.com/docs/export-module-overview).
 *
 * @class
 * @name Highcharts.Exporting
 *
 * @param {Highcharts.Chart} chart
 * The chart instance.
 */
export declare class Exporting {
    constructor(chart: Chart, options: ExportingOptions);
    /**
     * Prepare the SVG DOM for exporting
     *
     * @private
     */
    static sanitizeDOM(svg: SVGDOMElement): void;
    /**
     * Get data URL to an image of an SVG and call download on its options
     * object:
     *
     * - **filename:** Name of resulting downloaded file without extension.
     * Default is based on the chart title.
     * - **type:** File type of resulting download. Default is `image/png`.
     * - **scale:** Scaling factor of downloaded image compared to source.
     * Default is `2`.
     * - **libURL:** URL pointing to location of dependency scripts to download
     * on demand.
     *
     * @async
     * @function Highcharts.Exporting#downloadSVG
     *
     * @param {string} svg
     * The generated SVG.
     * @param {Highcharts.ExportingOptions} exportingOptions
     * The exporting options.
     *
     * @requires modules/exporting
     */
    downloadSVG(svg: string, exportingOptions: ExportingOptions): Promise<void>;
    /**
     * Submit an SVG version of the chart along with some parameters for local
     * conversion (PNG, JPEG, and SVG) or conversion on a server (PDF).
     *
     * @sample highcharts/members/chart-exportchart/
     * Export with no options
     * @sample highcharts/members/chart-exportchart-filename/
     * PDF type and custom filename
     * @sample highcharts/exporting/menuitemdefinitions-webp/
     * Export to WebP
     * @sample highcharts/members/chart-exportchart-custom-background/
     * Different chart background in export
     * @sample stock/members/chart-exportchart/
     * Export with Highcharts Stock
     *
     * @async
     * @function Highcharts.Exporting#exportChart
     *
     * @param {Highcharts.ExportingOptions} [exportingOptions]
     * Exporting options in addition to those defined in
     * [exporting](https://api.highcharts.com/highcharts/exporting).
     * @param {Highcharts.Options} [chartOptions]
     * Additional chart options for the exported chart. For example a different
     * background color can be added here, or `dataLabels` for export only.
     *
     * @requires modules/exporting
     */
    exportChart(exportingOptions?: ExportingOptions, chartOptions?: Options): Promise<void>;
    /**
     * Return the unfiltered innerHTML of the chart container. Used as hook for
     * plugins. In styled mode, it also takes care of inlining CSS style rules.
     *
     * @see Chart#getSVG
     *
     * @function Highcharts.Exporting#getChartHTML
     *
     * @param {boolean} [applyStyleSheets]
     * whether or not to apply the style sheets.
     *
     * @return {string}
     * The unfiltered SVG of the chart.
     *
     * @requires modules/exporting
     */
    getChartHTML(applyStyleSheets?: boolean): string;
    /**
     * Get the default file name used for exported charts. By default it creates
     * a file name based on the chart title.
     *
     * @function Highcharts.Exporting#getFilename
     *
     * @return {string}
     * A file name without extension.
     *
     * @requires modules/exporting
     */
    getFilename(): string;
    getSVG(chartOptions: Partial<Options> | undefined, async: true): Promise<string>;
    getSVG(chartOptions?: Partial<Options>, async?: false): string;
    /**
     * Clears away other elements in the page and prints the chart as it is
     * displayed. By default, when the exporting module is enabled, a context
     * button with a drop down menu in the upper right corner accesses this
     * function.
     *
     * @sample highcharts/members/chart-print/
     * Print from a HTML button
     *
     * @function Highcharts.Exporting#print
     *
     * @emits Highcharts.Chart#event:beforePrint
     * @emits Highcharts.Chart#event:afterPrint
     *
     * @requires modules/exporting
     */
    print(): void;
}
export interface Exporting extends ExportingBase {
}
export declare namespace Exporting {
    /**
     * Gets fired after a chart is printed through the context menu item or the
     * Chart.print method.
     *
     * @callback Highcharts.ExportingAfterPrintCallbackFunction
     *
     * @param {Highcharts.Chart} this
     * The chart on which the event occurred.
     * @param {global.Event} event
     * The event that occurred.
     */
    interface AfterPrintCallbackFunction {
        (this: Chart, event: Event): void;
    }
    /**
     * Gets fired before a chart is printed through the context menu item or the
     * Chart.print method.
     *
     * @callback Highcharts.ExportingBeforePrintCallbackFunction
     *
     * @param {Highcharts.Chart} this
     * The chart on which the event occurred.
     * @param {global.Event} event
     * The event that occurred.
     */
    interface BeforePrintCallbackFunction {
        (this: Chart, event: Event): void;
    }
    interface DownloadSVGFunction {
        (svg: string, exportingOptions: ExportingOptions): Promise<void>;
    }
    /**
     * Function to call if the offline-exporting module fails to export a chart
     * on the client side.
     *
     * @callback Highcharts.ExportingErrorCallbackFunction
     *
     * @param {Highcharts.ExportingOptions} options
     * The exporting options.
     * @param {global.Error} err
     * The error from the module.
     */
    interface ErrorCallbackFunction {
        (options: ExportingOptions, err: Error): void;
    }
    interface ExportEventCallback<T> {
        (this: T, eventArguments: (AnyRecord | Event)): (boolean | void | Promise<boolean | void>);
    }
    /**
     * Definition for a menu item in the context menu.
     *
     * @interface Highcharts.ExportingMenuObject
     */
    interface MenuObject {
        /**
         * The click handler for the menu item.
         *
         * @name Highcharts.ExportingMenuObject#onclick
         * @type {Highcharts.EventCallbackFunction<Highcharts.Chart> | undefined}
         */
        onclick?: ExportEventCallback<Chart>;
        /**
         * Indicates a separator line instead of an item.
         *
         * @name Highcharts.ExportingMenuObject#separator
         * @type {boolean | undefined}
         */
        separator?: boolean;
        /**
         * The text for the menu item.
         *
         * @name Highcharts.ExportingMenuObject#text
         * @type {string | undefined}
         */
        text?: string;
        /**
         * If internationalization is required, the key to a language string.
         *
         * @name Highcharts.ExportingMenuObject#textKey
         * @type {string | undefined}
         */
        textKey?: string;
    }
}
