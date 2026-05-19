import type WindbarbPointOptions from './WindbarbPointOptions';
import ColumnSeries from '../Column/ColumnSeries.js';
import WindbarbSeries from './WindbarbSeries.js';
declare class WindbarbPoint extends ColumnSeries.prototype.pointClass {
    beaufort: string;
    beaufortLevel: number;
    direction: number;
    options: WindbarbPointOptions;
    series: WindbarbSeries;
    value: number;
    isValid(): boolean;
}
export default WindbarbPoint;
