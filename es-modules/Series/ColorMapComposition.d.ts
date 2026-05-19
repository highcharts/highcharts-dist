import type ColorType from '../Core/Color/ColorType';
import type DashStyleValue from '../Core/Renderer/DashStyleValue';
import type ScatterPoint from './Scatter/ScatterPoint';
import type ScatterSeries from './Scatter/ScatterSeries';
declare module '../Core/Series/PointBase' {
    interface PointBase {
        dataLabelOnNull?: boolean;
    }
}
declare namespace ColorMapComposition {
    interface ColorAttribsType {
        dashstyle?: DashStyleValue;
        fill?: ColorType;
        stroke?: ColorType;
        'stroke-linecap'?: 'butt' | 'round' | 'square';
        'stroke-linejoin'?: 'butt' | 'round' | 'square';
        'stroke-width'?: number;
    }
    export class PointComposition extends ScatterPoint {
        dataLabelOnNull?: boolean;
        moveToTopOnHover?: boolean;
        series: SeriesComposition;
        value: (number | null);
        isValid(): boolean;
    }
    export class SeriesComposition extends ScatterSeries {
        colorProp?: 'fill' | 'stroke';
        data: Array<PointComposition>;
        parallelArrays: Array<string>;
        pointArrayMap: Array<string>;
        points: Array<PointComposition>;
        trackerGroups: Array<string>;
        colorAttribs(point: PointComposition): ColorAttribsType;
    }
    export const pointMembers: {
        dataLabelOnNull: boolean;
        moveToTopOnHover: boolean;
        isValid: typeof pointIsValid;
    };
    export const seriesMembers: {
        colorKey: string;
        axisTypes: Array<"xAxis" | "yAxis" | "colorAxis">;
        parallelArrays: string[];
        pointArrayMap: string[];
        trackerGroups: string[];
        colorAttribs: typeof seriesColorAttribs;
        pointAttribs: (point?: import("./Column/ColumnPoint").ColumnPoint, state?: import("../Core/Series/StatesOptions").StatesOptionsKey) => import("../Core/Renderer/SVG/SVGAttributes").SVGAttributes;
    };
    /**
     * @private
     */
    export function compose<T extends typeof ScatterSeries>(SeriesClass: T): (T & typeof SeriesComposition);
    /**
     * Color points have a value option that determines whether or not it is
     * a null point
     * @private
     */
    function pointIsValid(this: PointComposition): boolean;
    /**
     * Get the color attributes to apply on the graphic
     * @private
     * @function Highcharts.colorMapSeriesMixin.colorAttribs
     * @param {Highcharts.Point} point
     * @return {Highcharts.SVGAttributes}
     *         The SVG attributes
     */
    function seriesColorAttribs(this: SeriesComposition, point: PointComposition): ColorAttribsType;
    export {};
}
export default ColorMapComposition;
