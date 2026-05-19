import type SVGAttributes from '../Core/Renderer/SVG/SVGAttributes';
import Chart from '../Core/Chart/Chart.js';
import DataTableCore from '../Data/DataTableCore.js';
import Series from '../Core/Series/Series.js';
import SVGElement from '../Core/Renderer/SVG/SVGElement.js';
type CenterObject = {
    positions: Array<number>;
};
declare module '../Core/Series/SeriesBase' {
    interface SeriesBase {
        onPoint?: SeriesOnPointComposition.Additions;
        onPointSupported?: boolean;
    }
}
declare module '../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        onPoint?: OnPoint;
    }
}
interface OnPoint {
    connectorOptions?: SVGAttributes;
    id: string;
    position?: Position;
    z?: number;
}
interface Position {
    x?: number;
    y?: number;
    offsetX?: number;
    offsetY?: number;
}
declare namespace SeriesOnPointComposition {
    class SeriesComposition extends Series {
        onPoint: Additions;
    }
    /**
     * Extends the series with a small addition.
     *
     * @private
     */
    function compose<T extends typeof Series>(SeriesClass: T, ChartClass: typeof Chart): (typeof SeriesComposition & T);
    /**
     * @private
     */
    class Additions {
        /**
         * @private
         */
        constructor(series: SeriesComposition);
        chart: Chart;
        connector?: SVGElement;
        dataTable?: DataTableCore;
        options?: OnPoint;
        radii?: Array<number>;
        series: SeriesComposition;
        /**
         * @ignore
         */
        getColumn: (columnId: string, modified?: boolean, matchLength?: boolean) => Array<number>;
        /**
         * @ignore
         */
        getRadii: () => void;
        /**
         * @ignore
         */
        getRadius: (zMin: number, zMax: number, minSize: number, maxSize: number, value: (number | null | undefined), yValue?: (number | null)) => (number | null);
        /**
         * @ignore
         */
        getPxExtremes: () => {
            minPxSize: number;
            maxPxSize: number;
        };
        /**
         * @ignore
         */
        getZExtremes: () => {
            zMin: number;
            zMax: number;
        } | undefined;
        /**
         * Draw connector line that starts from the initial point's position
         * and ends in the center of the series.
         * @private
         */
        drawConnector(): void;
        /**
         * Get connector line path and styles that connects series and point.
         *
         * @private
         *
         * @return {Highcharts.SVGAttributes} attribs - the path and styles.
         */
        getConnectorAttributes(): SVGAttributes | void;
        /**
         * Initialize Series on point on series init.
         *
         * @ignore
         */
        seriesAfterInit(this: Series): void;
        /**
         * @ignore
         */
        seriesAfterRender(this: Series): void;
        /**
         * Recalculate series.center (x, y and size).
         *
         * @ignore
         */
        seriesGetCenter(this: Series, e: CenterObject): void;
        /**
         * @ignore
         */
        seriesShowOrHide(this: Series): void;
        /**
         * Calculate required radius (z data) before original translate.
         *
         * @ignore
         * @function Highcharts.Series#translate
         */
        seriesTranslate(this: Series): void;
        /**
         * @ignore
         */
        chartGetZData(this: Chart): void;
    }
}
export default SeriesOnPointComposition;
