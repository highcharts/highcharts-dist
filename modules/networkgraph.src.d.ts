/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts.src" {
    /**
     * Formatter callback function.
     *
     * @param this
     *        Data label context to format
     *
     * @return Formatted data label text
     */
    type PlotNetworkDataLabelsFormatterCallbackFunction = (this: (DataLabelsFormatterContextObject|PlotNetworkDataLabelsFormatterContextObject)) => string;
    /**
     * Context for the formatter function.
     */
    interface PlotNetworkDataLabelsFormatterContextObject extends DataLabelsFormatterContextObject {
        /**
         * The color of the node.
         */
        color: ColorString;
        /**
         * The ID of the node.
         */
        key: string;
        /**
         * The point (node) object. The node name, if defined, is available
         * through `this.point.name`. Arrays: `this.point.linksFrom` and
         * `this.point.linksTo` contains all nodes connected to this point.
         */
        point: Point;
    }
    /**
     * **Note:** Only SVG-based renderer supports this option.
     */
    interface PlotNetworkDataLabelsTextPath {
        /**
         * Presentation attributes for the text path.
         */
        attributes: SVGAttributes;
        /**
         * Enable or disable `textPath` option for link's or marker's data
         * labels.
         */
        enabled?: boolean;
    }
}
export default factory;
export let Highcharts: typeof _Highcharts;
