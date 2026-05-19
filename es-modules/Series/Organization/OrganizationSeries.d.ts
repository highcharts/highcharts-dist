import type OrganizationDataLabelOptions from './OrganizationDataLabelOptions';
import type { OrganizationSeriesOptions } from './OrganizationSeriesOptions';
import type SankeyColumnComposition from '../Sankey/SankeyColumnComposition.js';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGLabel from '../../Core/Renderer/SVG/SVGLabel';
import OrganizationPoint from './OrganizationPoint.js';
declare const SankeySeries: typeof import("../Sankey/SankeySeries").default;
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.organization
 *
 * @augments Highcharts.seriesTypes.sankey
 */
declare class OrganizationSeries extends SankeySeries {
    static defaultOptions: import("../../Core/Series/SeriesOptions").PlotOptionsOf<import("../../Core/Series/Series").default> & import("../../Core/Series/SeriesOptions").PlotOptionsOf<import("../Column/ColumnSeries").default> & import("../../Core/Series/SeriesOptions").PlotOptionsOf<import("../Sankey/SankeySeries").default> & OrganizationSeriesOptions;
    data: Array<OrganizationPoint>;
    options: OrganizationSeriesOptions;
    points: Array<OrganizationPoint>;
    alignDataLabel(point: OrganizationPoint, dataLabel: SVGLabel, options: OrganizationDataLabelOptions): void;
    createNode(id: string): OrganizationPoint;
    pointAttribs(point: OrganizationPoint, state?: StatesOptionsKey): SVGAttributes;
    translateLink(point: OrganizationPoint): void;
    translateNode(node: OrganizationPoint, column: SankeyColumnComposition.ArrayComposition<OrganizationPoint>): void;
    drawDataLabels(): void;
}
interface OrganizationSeries {
    pointClass: typeof OrganizationPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        organization: typeof OrganizationSeries;
    }
}
export default OrganizationSeries;
