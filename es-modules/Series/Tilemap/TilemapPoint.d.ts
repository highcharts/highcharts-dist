import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type TilemapPointOptions from './TilemapPointOptions';
import type TilemapSeries from './TilemapSeries';
import ColorAxisComposition from '../../Core/Axis/Color/ColorAxisComposition.js';
declare const HeatmapPoint: typeof import("../Heatmap/HeatmapPoint").default;
declare class TilemapPoint extends HeatmapPoint {
    options: TilemapPointOptions;
    pointPadding?: number;
    radius: number;
    series: TilemapSeries;
    tileEdges: Record<string, number>;
    /**
     * @private
     * @function Highcharts.Point#haloPath
     */
    haloPath(): SVGPath;
}
interface TilemapPoint {
    setVisible: ColorAxisComposition.PointComposition['setVisible'];
}
export default TilemapPoint;
