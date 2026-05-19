import type { Exporting } from '../Exporting/Exporting';
import type ExportingOptions from '../Exporting/ExportingOptions';
import type Options from '../../Core/Options';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        /**
         * Deprecated. Use
         * [Exporting.exportChart](https://api.highcharts.com/class-reference/Highcharts.Exporting#exportChart)
         * instead.
         *
         * @deprecated 12.2.0
         */
        exportChartLocal(exportingOptions?: ExportingOptions, chartOptions?: Options): Promise<void>;
    }
}
declare module '../../Core/GlobalsBase' {
    interface GlobalsBase {
        /**
         * Deprecated. Use
         * [Exporting.downloadSVG](https://api.highcharts.com/class-reference/Highcharts.Exporting#downloadSVG)
         * instead.
         *
         * Get data URL to an image of an SVG and call download on it options
         * object:
         *
         * - **filename:** Name of resulting downloaded file without extension.
         * Default is `chart`.
         * - **type:** File type of resulting download. Default is `image/png`.
         * - **scale:** Scaling factor of downloaded image compared to source.
         * Default is `2`.
         * - **libURL:** URL pointing to location of dependency scripts to
         * download on demand. Default is the `exporting.libURL` option of the
         * global Highcharts options pointing to our server.
         *
         * @deprecated 11.4.4
         *
         * @param {string} svg
         * The generated SVG
         *
         * @param {Highcharts.ExportingOptions} options
         * The exporting options
         */
        downloadSVGLocal: Exporting.DownloadSVGFunction;
    }
}
declare namespace OfflineExporting {
    /**
     * Get data URL to an image of an SVG and call download on it options
     * object:
     * - **filename:** Name of resulting downloaded file without extension.
     * Default is `chart`.
     *
     * - **type:** File type of resulting download. Default is `image/png`.
     *
     * - **scale:** Scaling factor of downloaded image compared to source.
     * Default is `1`.
     * - **libURL:** URL pointing to location of dependency scripts to download
     * on demand.
     *
     * @function Highcharts.downloadSVGLocal
     * @deprecated
     *
     * @param {string} svg
     * The generated SVG
     *
     * @param {Highcharts.ExportingOptions} options
     * The exporting options
     *
     */
    function downloadSVGLocal(svg: string, options: ExportingOptions): Promise<void>;
}
export default OfflineExporting;
