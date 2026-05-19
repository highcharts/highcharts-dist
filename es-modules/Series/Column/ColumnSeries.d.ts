import type ColumnPoint from './ColumnPoint';
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        barW?: number;
        pointXOffset?: number;
    }
}
interface ColumnSeries {
    pointClass: typeof ColumnPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        column: typeof ColumnSeries;
    }
}
export default ColumnSeries;
