import type DataExtremesObject from '../../Core/Series/DataExtremesObject';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type WaterfallSeriesOptions from './WaterfallSeriesOptions';
import Axis from '../../Core/Axis/Axis.js';
import Chart from '../../Core/Chart/Chart.js';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
import WaterfallAxis from '../../Core/Axis/WaterfallAxis.js';
import WaterfallPoint from './WaterfallPoint.js';
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        showLine?: WaterfallSeries['showLine'];
    }
}
/**
 * Waterfall series type.
 *
 * @private
 */
declare class WaterfallSeries extends ColumnSeries {
    static defaultOptions: WaterfallSeriesOptions;
    static compose: typeof WaterfallAxis.compose;
    chart: WaterfallSeries.WaterfallChart;
    data: Array<WaterfallPoint>;
    options: WaterfallSeriesOptions;
    points: Array<WaterfallPoint>;
    stackedYNeg: Array<number>;
    stackedYPos: Array<number>;
    stackKey: 'waterfall';
    xData: Array<number>;
    yAxis: WaterfallAxis;
    yData: Array<any>;
    generatePoints(): void;
    processData(force?: boolean): undefined;
    toYData(pt: WaterfallPoint): any;
    pointAttribs(point: WaterfallPoint, state: StatesOptionsKey): SVGAttributes;
    getGraphPath(this: WaterfallSeries): SVGPath;
    getCrispPath(this: WaterfallSeries): SVGPath;
    drawGraph(): void;
    setStackedPoints(axis: Axis): void;
    getExtremes(): DataExtremesObject;
}
interface WaterfallSeries {
    pointClass: typeof WaterfallPoint;
    pointValKey: string;
    showLine: boolean;
}
declare namespace WaterfallSeries {
    interface WaterfallChart extends Chart {
        axes: Array<WaterfallAxis>;
    }
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        waterfall: typeof WaterfallSeries;
    }
}
export default WaterfallSeries;
