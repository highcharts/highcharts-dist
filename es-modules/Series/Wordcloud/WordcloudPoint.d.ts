import type PolygonBoxObject from '../../Core/Renderer/PolygonBoxObject';
import type SizeObject from '../../Core/Renderer/SizeObject';
import type WordcloudPointOptions from './WordcloudPointOptions';
import type WordcloudUtils from './WordcloudUtils';
declare const ColumnPoint: typeof import("../Column/ColumnPoint").ColumnPoint;
import WordcloudSeries from './WordcloudSeries';
declare class WordcloudPoint extends ColumnPoint {
    dimensions: SizeObject;
    lastCollidedWith?: WordcloudPoint;
    options: WordcloudPointOptions;
    polygon?: WordcloudUtils.PolygonObject;
    rect?: PolygonBoxObject;
    rotation?: (boolean | number);
    series: WordcloudSeries;
    isValid(): boolean;
}
interface WordcloudPoint {
    weight: number;
}
export default WordcloudPoint;
