import type CoreGeometryObject from '../../Core/Geometry/GeometryObject';
import type ItemSeriesOptions from './ItemSeriesOptions';
import ItemPoint from './ItemPoint.js';
declare const PieSeries: typeof import("../Pie/PieSeries").default;
/**
 * The item series type.
 *
 * @requires modules/item-series
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.item
 *
 * @augments Highcharts.seriesTypes.pie
 */
declare class ItemSeries extends PieSeries {
    static defaultOptions: ItemSeriesOptions;
    borderWidth?: number;
    data: Array<ItemPoint>;
    itemSize?: number;
    options: ItemSeriesOptions;
    points: Array<ItemPoint>;
    slots?: Array<ItemSeries.GeometryObject>;
    /**
     * Fade in the whole chart.
     * @private
     */
    animate(init?: boolean): void;
    drawDataLabels(): void;
    drawPoints(): void;
    getRows(): number;
    /**
     * Get the semi-circular slots.
     * @private
     */
    getSlots(): (Array<ItemSeries.GeometryObject> | undefined);
    translate(positions?: Array<number>): void;
}
interface ItemSeries {
    pointClass: typeof ItemPoint;
}
declare namespace ItemSeries {
    interface GeometryObject extends CoreGeometryObject {
        angle: number;
    }
    interface RowContainerObject {
        angle: number;
        row: RowObject;
    }
    interface RowObject {
        colCount: number;
        rowLength: number;
        rowRadius: number;
    }
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        item: typeof ItemSeries;
    }
}
export default ItemSeries;
