import type OrganizationPointOptions from './OrganizationPointOptions';
import type OrganizationSeries from './OrganizationSeries';
import type { OrganizationSeriesNodeOptions } from './OrganizationSeriesOptions';
import type SankeyPoint from './../Sankey/SankeyPoint';
declare const SankeyPointClass: typeof SankeyPoint;
declare class OrganizationPoint extends SankeyPointClass {
    description?: string;
    fromNode: OrganizationPoint;
    image?: OrganizationSeriesNodeOptions['image'];
    linksFrom: Array<OrganizationPoint>;
    linksTo: Array<OrganizationPoint>;
    nodeHeight?: number;
    options: OrganizationPointOptions;
    series: OrganizationSeries;
    title?: string;
    toNode: OrganizationPoint;
    constructor(series: OrganizationSeries, options: OrganizationPointOptions, x?: number);
    /**
     * All nodes in an org chart are equal width.
     * @private
     */
    getSum(): number;
    /**
     * Set node.column for hanging layout
     * @private
     */
    setNodeColumn(): void;
}
export default OrganizationPoint;
