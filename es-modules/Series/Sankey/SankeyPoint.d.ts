import type SankeyPointOptions from './SankeyPointOptions';
import type SankeySeries from './SankeySeries';
import NodesComposition from '../NodesComposition.js';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
declare class SankeyPoint extends ColumnSeries.prototype.pointClass {
    className: string;
    column?: number;
    fromNode: SankeyPoint;
    hangsFrom?: SankeyPoint;
    level: number;
    linkBase: Array<number>;
    linkColorMode: ('from' | 'gradient' | 'to');
    linksFrom: Array<SankeyPoint>;
    linksTo: Array<SankeyPoint>;
    mass: number;
    nodeX: number;
    nodeY: number;
    options: SankeyPointOptions;
    outgoing?: boolean;
    series: SankeySeries;
    sum?: number;
    toNode: SankeyPoint;
    weight?: number;
    /**
     * @private
     */
    applyOptions(options: SankeyPointOptions, x?: number): SankeyPoint;
    /**
     * @private
     */
    getClassName(): string;
    /**
     * If there are incoming links, place it to the right of the
     * highest order column that links to this one.
     *
     * @private
     */
    getFromNode(): {
        fromNode?: SankeyPoint;
        fromColumn: number;
    };
    /**
     * Calculate node.column if it's not set by user
     * @private
     */
    setNodeColumn(): void;
    /**
     * @private
     */
    isValid(): boolean;
}
interface SankeyPoint extends NodesComposition.PointComposition {
}
export default SankeyPoint;
