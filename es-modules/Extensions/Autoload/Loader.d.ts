import type Options from '../../Core/Options';
/**
 * The Loader class for autoloading of Highcharts modules. This class is part of
 * the `highcharts-autoload.js` bundle, and is used for dynamically loading
 * Highcharts modules on demand based on the chart configuration options.
 *
 * The Loader analyzes the chart options for features that require additional
 * modules. The Loader will load the required modules asynchronously before
 * instantiating the chart.
 *
 * For styled mode and Stock Tools, the Loader also adds the required CSS files.
 * An exception is when using ESM modules, where you need to define the CSS in
 * link tags.
 *
 * No extra configuration is required to use the Loader, the static class
 * methods below are for advanced use cases.
 *
 * @example
 * const chart = await Highcharts.chart({
 *     chart: {
 *         type: 'arearange'
 *     },
 *     series: [[0, 2], [4, 3]]
 * }, true) ;
 *
 * @sample highcharts/global/autoload-esm ESM setup with bubble chart and
 *         modules
 * @sample highcharts/global/autoload UMD setup with stock chart and modules
 *
 * @class
 * @name Highcharts.Loader
 */
export default class Loader {
    /**
     * Given a Highcharts configuration object, this function will return an
     * array of the required script files. Can be used for preloading files
     * before instanciating the chart.
     *
     * @function Highcharts.Loader#getFiles
     *
     * @param {Partial<Options>} options The Highcharts configuration object.
     * @return {Array<string>} An array of file names.
     */
    static getFiles: (options: Partial<Options>) => Array<string>;
    /**
     * Set the root URL and extension for script files. By default, the root and
     * extension are guessed from the script tag that loads
     * `highcharts-autoload.js`, or from the current script if running in ESM
     * mode.
     *
     * @function Highcharts.Loader#setRoot
     *
     * @param {string} [userRoot]
     *        The root URL for script files. When loading from
     *        `code.highcharts.com`, this defaults to
     *        `https://code.highcharts.com/`.
     * @param {string} [userExtension]
     *        The extension for script files. This defaults to `.js` when
     *        invoked from `highcharts-autoload.js`, and `.src.js` when invoked
     *        from `highcharts-autoload.src.js`.
     */
    static setRoot: (userRoot?: string, userExtension?: string) => void;
    /**
     * Add script files to the list of modules to load. This is useful for
     * dynamically loading modules that have no reference in the options
     * structure.
     *
     * @example
     * // Load the accessibility and exporting modules without having to set
     * // `accessibility.enabled` and `exporting.enabled` in the chart options.
     * Highcharts.Loader.use(['modules/accessibility', 'modules/exporting']);
     *
     * @function Highcharts.Loader#use
     *
     * @param {Array<string>} files An array of files to add.
     */
    static use: (files: Array<string>) => void;
}
