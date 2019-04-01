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
     * Layout value for the child nodes in an organization chart. If `hanging`,
     * this node's children will hang below their parent, allowing a tighter
     * packing of nodes in the diagram.
     */
    type SeriesOrganizationNodesLayoutValues = ("hanging"|"normal");
}
export default factory;
export let Highcharts: typeof _Highcharts;
