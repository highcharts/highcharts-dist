import type { GeoJSONGeometryMultiPoint } from '../../Maps/GeoJSON';
import type MapPointOptions from './MapPointOptions';
import type MapSeries from './MapSeries';
import type { MapBounds } from '../../Maps/MapViewOptions';
import type PointerEvent from '../../Core/PointerEvent';
import type { PointShortOptions } from '../../Core/Series/PointOptions';
import type Projection from '../../Maps/Projection';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement.js';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type AnimationOptions from '../../Core/Animation/AnimationOptions';
import ColorMapComposition from '../ColorMapComposition.js';
declare const ScatterPoint: typeof import("../Scatter/ScatterPoint").default;
declare class MapPoint extends ScatterPoint {
    /**
     * Get the projected path based on the geometry. May also be called on
     * mapData options (not point instances), hence static.
     * @private
     */
    static getProjectedPath(point: MapPoint, projection?: Projection): SVGPath;
    bounds?: MapBounds;
    colorInterval?: number;
    geometry?: GeoJSONGeometryMultiPoint;
    group?: SVGElement;
    insetIndex?: number;
    labelrank?: number;
    middleX?: number;
    middleY?: number;
    options: MapPointOptions;
    path: SVGPath;
    projectedPath?: SVGPath;
    properties?: Record<string, (number | string)>;
    series: MapSeries;
    /**
     * Extend the Point object to split paths.
     * @private
     */
    applyOptions(options: (MapPointOptions | PointShortOptions), x?: number, isMock?: boolean): MapPoint;
    /**
     * Get the bounds in terms of projected units
     * @private
     */
    getProjectedBounds(projection: Projection): (MapBounds | undefined);
    /**
     * Stop the fade-out
     * @private
     */
    onMouseOver(e?: PointerEvent): void;
    setVisible(vis?: boolean): void;
    /**
     * Highmaps only. Zoom in on the point using the global animation.
     *
     * @sample maps/members/point-zoomto/
     *         Zoom to points from buttons
     *
     * @requires modules/map
     *
     * @function Highcharts.Point#zoomTo
     */
    zoomTo(animOptions?: (boolean | Partial<AnimationOptions>)): void;
}
interface MapPoint extends ColorMapComposition.PointComposition {
    value: ColorMapComposition.PointComposition['value'];
    isValid: ColorMapComposition.PointComposition['isValid'];
}
export default MapPoint;
