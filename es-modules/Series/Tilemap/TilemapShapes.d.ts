import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type DataLabelOptions from '../../Core/Series/DataLabelOptions';
import type Point from '../../Core/Series/Point';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type TilemapPoint from './TilemapPoint';
import type TilemapSeries from './TilemapSeries';
import type { TilemapShapeValue } from './TilemapSeriesOptions';
declare namespace TilemapShapes {
    interface DefinitionObject {
        alignDataLabel(this: TilemapSeries, point: Point, dataLabel: SVGElement, options: DataLabelOptions, alignTo: BBoxObject, isNew?: boolean): void;
        getSeriesPadding(series: TilemapSeries): PaddingObject;
        haloPath(this: TilemapPoint, size: number): SVGPath;
        translate(this: TilemapSeries): void;
    }
    interface PaddingObject {
        xPad: number;
        yPad: number;
    }
}
/**
 * Map of shape types.
 * @private
 */
declare const TilemapShapes: Record<TilemapShapeValue, TilemapShapes.DefinitionObject>;
export default TilemapShapes;
