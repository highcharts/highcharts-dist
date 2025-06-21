/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
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
}
export default _Highcharts;
