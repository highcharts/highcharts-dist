import type ColorString from '../../Core/Color/ColorString';
import type PointOptions from '../../Core/Series/PointOptions.js';
import type TreegraphSeries from './TreegraphSeries';
import type { OrganizationLinkOptions } from '../Organization/OrganizationSeriesOptions.js';
import TreegraphPoint from './TreegraphPoint.js';
import TreegraphPointOptions from './TreegraphPointOptions.js';
declare const ColumnPoint: typeof import("../Column/ColumnPoint").ColumnPoint;
export interface TreegraphLinkOptions extends OrganizationLinkOptions {
    /**
     * For the orthogonal link type, this defines how far down the link bends.
     * A number defines the pixel offset from the start of the link, and a
     * percentage defines the relative position on the link. For example, a
     * `bendAt` of `50%` means that the link bends in the middle.
     *
     * @since 12.5.0
     * @default '50%'
     */
    bendAt?: number | string;
    /**
     * The color of the links between nodes.
     *
     * @default ${palette.neutralColor60}
     */
    color?: ColorString;
    /**
     * Modifier of the shape of the curved link. Works best for values between 0
     * and 1, where 0 is a straight line, and 1 is a shape close to the default
     * one.
     *
     * @default 0.5
     *
     * @product highcharts
     *
     * @since 10.3.0
     */
    curveFactor?: number;
    /**
     * The line width of the links connecting nodes, in pixels.
     *
     * @default 1
     */
    lineWidth?: number;
    /**
     * Radius for the rounded corners of the links between nodes. Works for
     * `orthogonal` link type.
     *
     * @default 10
     */
    radius?: number;
    /**
     * Type of the link shape.
     *
     * @sample highcharts/series-treegraph/link-types
     *         Different link types
     *
     * @product highcharts
     * @default 'curved'
     */
    type?: 'curved' | 'orthogonal' | 'straight';
}
export interface LinkPointOptions extends TreegraphPointOptions {
    link?: TreegraphLinkOptions;
}
/**
 * @private
 * @class
 */
declare class LinkPoint extends ColumnPoint {
    constructor(series: TreegraphSeries, options: string | number | PointOptions | (string | number | null)[], x?: number, point?: TreegraphPoint);
    dataLabelOnNull: boolean;
    formatPrefix: string;
    isLink: boolean;
    node: {};
    update(options: TreegraphPointOptions | LinkPointOptions, redraw?: boolean, animation?: boolean, runEvent?: boolean): void;
}
interface LinkPoint {
    options: LinkPointOptions;
    fromNode: TreegraphPoint;
    toNode: TreegraphPoint;
}
export default LinkPoint;
