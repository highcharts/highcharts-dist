import type ColumnSeries from './ColumnSeries';
import type ColumnPointOptions from './ColumnPointOptions';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import Point from '../../Core/Series/Point.js';
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        allowShadow?: boolean;
    }
}
export declare class ColumnPoint extends Point {
    allowShadow?: boolean;
    barX: number;
    group?: SVGElement;
    opacity?: number;
    options: ColumnPointOptions;
    pointWidth?: number;
    series: ColumnSeries;
}
export default ColumnPoint;
