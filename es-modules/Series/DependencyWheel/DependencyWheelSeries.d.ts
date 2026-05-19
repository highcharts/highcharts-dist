import type DependencyWheelSeriesOptions from './DependencyWheelSeriesOptions';
import DependencyWheelPoint from './DependencyWheelPoint.js';
import SankeyColumnComposition from '../Sankey/SankeyColumnComposition.js';
declare const PieSeries: typeof import("../Pie/PieSeries").default, SankeySeries: typeof import("../Sankey/SankeySeries").default;
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.dependencywheel
 *
 * @augments Highcharts.seriesTypes.sankey
 */
declare class DependencyWheelSeries extends SankeySeries {
    static defaultOptions: DependencyWheelSeriesOptions;
    data: Array<DependencyWheelPoint>;
    options: DependencyWheelSeriesOptions;
    nodeColumns: Array<SankeyColumnComposition.ArrayComposition<DependencyWheelPoint>>;
    nodes: Array<DependencyWheelPoint>;
    points: Array<DependencyWheelPoint>;
    animate(init?: boolean): void;
    createNode(id: string): DependencyWheelPoint;
    /**
     * Dependency wheel has only one column, it runs along the perimeter.
     * @private
     */
    createNodeColumns(): Array<SankeyColumnComposition.ArrayComposition>;
    /**
     * Translate from vertical pixels to perimeter.
     * @private
     */
    getNodePadding(): number;
    /**
     * @ignore
     * @todo Override the refactored sankey translateLink and translateNode
     * functions instead of the whole translate function.
     */
    translate(): void;
}
interface DependencyWheelSeries {
    getCenter: typeof PieSeries.prototype.getCenter;
    orderNodes: boolean;
    pointClass: typeof DependencyWheelPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        dependencywheel: typeof DependencyWheelSeries;
    }
}
export default DependencyWheelSeries;
