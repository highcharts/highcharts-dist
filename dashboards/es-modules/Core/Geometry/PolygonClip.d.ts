interface XYArray extends XYPair {
    isIntersection?: boolean;
}
type XYPair = [number, number];
/**
 * Simple line string clipping. Clip to bounds and insert intersection points.
 * @private
 */
declare function clipLineString(line: Array<XYArray>, boundsPolygon: Array<XYArray>): XYArray[][];
/**
 * Clip a polygon to another polygon using the Sutherland/Hodgman algorithm.
 * @private
 */
declare function clipPolygon(subjectPolygon: XYArray[], boundsPolygon: XYArray[], closed?: boolean): Array<XYArray>;
declare const PolygonClip: {
    clipLineString: typeof clipLineString;
    clipPolygon: typeof clipPolygon;
};
export default PolygonClip;
