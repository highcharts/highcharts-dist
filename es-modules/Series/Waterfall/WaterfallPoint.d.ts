import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type WaterfallPointOptions from './WaterfallPointOptions';
import type WaterfallSeries from './WaterfallSeries';
import ColumnSeries from '../Column/ColumnSeries.js';
declare class WaterfallPoint extends ColumnSeries.prototype.pointClass {
    below?: boolean;
    box?: BBoxObject;
    isIntermediateSum?: boolean;
    isSum?: boolean;
    minPointLengthOffset?: number;
    options: WaterfallPointOptions;
    series: WaterfallSeries;
    getClassName(): string;
    isValid(): boolean;
}
export default WaterfallPoint;
