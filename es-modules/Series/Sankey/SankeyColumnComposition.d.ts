import type SankeySeries from './SankeySeries';
import type SankeyPoint from './SankeyPoint';
declare namespace SankeyColumnComposition {
    class ArrayComposition<T extends SankeyPoint = SankeyPoint> extends Array<T> {
        sankeyColumn: SankeyColumnAdditions;
    }
    /**
     * SankeyColumn Composition
     * @private
     * @function Highcharts.SankeyColumn#compose
     *
     * @param {Array<SankeyPoint>} points
     * The array of nodes
     * @param {SankeySeries} series
     * Series connected to column
     * @return {ArrayComposition} SankeyColumnArray
     */
    function compose<T extends SankeySeries>(points: Array<T['pointClass']['prototype']>, series: T): ArrayComposition<typeof points[0]>;
    class SankeyColumnAdditions {
        constructor(points: ArrayComposition, series: SankeySeries);
        points: ArrayComposition;
        maxLength?: number;
        maxRadius?: number;
        scale?: number;
        additionalSpace?: number;
        series: SankeySeries;
        /**
         * Calculate translation factor used in column and nodes distribution
         * @private
         * @function Highcharts.SankeyColumn#getTranslationFactor
         *
         * @param {SankeySeries} series
         * The Series
         * @return {number} TranslationFactor
         * Translation Factor
         */
        getTranslationFactor(series: SankeySeries): number;
        /**
         * Get the top position of the column in pixels
         * @private
         * @function Highcharts.SankeyColumn#top
         *
         * @param {number} factor
         * The Translation Factor
         * @return {number} top
         * The top position of the column
         */
        top(factor: number): number;
        /**
         * Get the left position of the column in pixels
         * @private
         * @function Highcharts.SankeyColumn#top
         *
         * @param {number} factor
         * The Translation Factor
         * @return {number} left
         * The left position of the column
         */
        left(factor: number): number;
        /**
         * Calculate sum of all nodes inside specific column
         * @private
         */
        sum(): number;
        /**
         * Get the offset in pixels of a node inside the column
         * @private
         * @function Highcharts.SankeyColumn#offset
         *
         * @param {SankeyPoint} node
         * Sankey node
         * @param {number} factor
         * Translation Factor
         * @return {number} offset
         * Offset of a node inside column
         */
        offset(node: SankeyPoint, factor: number): (Record<string, number> | undefined);
    }
}
export default SankeyColumnComposition;
