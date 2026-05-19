import type ColumnPointType from '../Column/ColumnPoint';
import type PictorialPointOptions from './PictorialPointOptions';
import type PictorialSeries from './PictorialSeries';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
declare const ColumnPoint: typeof ColumnPointType;
declare class PictorialPoint extends ColumnPoint {
    options: PictorialPointOptions;
    series: PictorialSeries;
    pathDef: string | SVGPath | undefined;
    setState(): void;
}
export default PictorialPoint;
