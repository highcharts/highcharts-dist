/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "./globals";
import * as _Highcharts from "./highcharts";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "./highcharts" {
    interface Point {
        /**
         * Array for multiple SVG graphics representing the point in the chart.
         * Only used in cases where the point can not be represented by a single
         * graphic.
         */
        graphics?: Array<SVGElement>;
        /**
         * Range series only. The high or maximum value for each data point.
         */
        high?: number;
        /**
         * Range series only. The low or minimum value for each data point.
         */
        low?: number;
    }
    interface SVGElement {
        /**
         * Attach a polygon to a bounding box if the element contains a
         * textPath.
         *
         * @param event
         *        An event containing a bounding box object
         *
         * @return Returns the bounding box object.
         */
        setPolygon(event: any): BBoxObject;
        /**
         * Draw text along a textPath for a dataLabel.
         *
         * @param event
         *        An event containing label options
         */
        setTextPath(event: any): void;
        /**
         * Set a text path for a `text` or `label` element, allowing the text to
         * flow along a path.
         *
         * In order to unset the path for an existing element, call
         * `setTextPath` with `{ enabled: false }` as the second argument.
         *
         * Text path support is not bundled into `highcharts.js`, and requires
         * the `modules/textpath.js` file. However, it is included in the script
         * files of those series types that use it by default
         *
         * @param path
         *        Path to follow. If undefined, it allows changing options for
         *        the existing path.
         *
         * @param textPathOptions
         *        Options.
         *
         * @return Returns the SVGElement for chaining.
         */
        setTextPath(path: (SVGElement|undefined), textPathOptions: DataLabelsTextPathOptionsObject): SVGElement;
    }
    /**
     * Merge the default options with custom options and return the new options
     * structure. Commonly used for defining reusable templates.
     *
     * @param options
     *        The new custom chart options.
     */
    function setOptions(options: Options): void;
    /**
     * If ranges are not specified, determine ranges from rendered bubble series
     * and render legend again.
     */
    function chartDrawChartBox(): void;
    /**
     * Wrap the getOffset method to return zero offset for title or labels in a
     * radial axis.
     */
    function getOffset(): void;
    /**
     * Find the path for plot lines perpendicular to the radial axis.
     */
    function getPlotLinePath(): void;
    /**
     * Find the position for the axis title, by default inside the gauge.
     */
    function getTitlePosition(): void;
    /**
     * Finalize modification of axis instance with radial logic.
     */
    function onAxisAfterInit(): void;
    /**
     * Wrap auto label align to avoid setting axis-wide rotation on radial axes.
     * (#4920)
     */
    function onAxisAutoLabelAlign(): void;
    /**
     * Add logic to pad each axis with the amount of pixels necessary to avoid
     * the bubbles to overflow.
     */
    function onAxisFoundExtremes(): void;
    /**
     * Prepare axis translation.
     */
    function onAxisInitialAxisTranslation(): void;
    function onChartAfterDrawChartBox(): void;
    function onChartGetAxes(): void;
    /**
     * Update default options for radial axes from setOptions method.
     */
    function onGlobalSetOptions(): void;
    /**
     * Start the bubble legend creation process.
     */
    function onLegendAfterGetAllItems(): void;
    /**
     * Toggle bubble legend depending on the visible status of bubble series.
     */
    function onLegendItemClick(): void;
    function onPointerAfterGetHoverData(): void;
    /**
     * Add special cases within the Tick class' methods for radial axes.
     */
    function onTickAfterGetPosition(): void;
    /**
     * Prevent setting Y axis dirty.
     */
    function renderHidden(): void;
}
export default factory;
export let Highcharts: typeof _Highcharts;
