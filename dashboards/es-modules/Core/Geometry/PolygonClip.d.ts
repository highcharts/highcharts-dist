type XYArray = [number, number] & {
    isIntersection?: boolean;
};
declare namespace PolygonClip {
    const clipLineString: (line: XYArray[], boundsPolygon: XYArray[]) => XYArray[][];
    const clipPolygon: (subjectPolygon: XYArray[], boundsPolygon: XYArray[], closed?: boolean) => Array<XYArray>;
}
export default PolygonClip;
