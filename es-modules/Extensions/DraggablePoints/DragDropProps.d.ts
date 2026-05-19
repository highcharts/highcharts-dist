import type DragDropOptions from './DragDropOptions';
export interface BoxPlotSeriesDragDropOptions extends DragDropOptions {
    /**
     * Allow high value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.boxplot.dragDrop.draggableHigh
     */
    draggableHigh?: boolean;
    /**
     * Allow low value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.boxplot.dragDrop.draggableLow
     */
    draggableLow?: boolean;
    /**
     * Allow Q1 value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.boxplot.dragDrop.draggableQ1
     */
    draggableQ1?: boolean;
    /**
     * Allow Q3 value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.boxplot.dragDrop.draggableQ3
     */
    draggableQ3?: boolean;
}
declare module '../../Series/BoxPlot/BoxPlotSeriesOptions' {
    interface BoxPlotSeriesOptions {
        /**
         * The draggable-points module allows points to be moved around or
         * modified in the chart. In addition to the options mentioned under
         * the `dragDrop` API structure, the module fires three events,
         * [point.dragStart](plotOptions.series.point.events.dragStart),
         * [point.drag](plotOptions.series.point.events.drag) and
         * [point.drop](plotOptions.series.point.events.drop).
         *
         * The `boxplot` series additionally supports: `draggableHigh`,
         * `draggableLow`, `draggableQ1` and `draggableQ3` options.
         *
         * @since        6.2.0
         * @requires     modules/draggable-points
         */
        dragDrop?: BoxPlotSeriesDragDropOptions;
    }
}
export interface ErrorBarSeriesDragDropOptions extends BoxPlotSeriesDragDropOptions {
    draggableQ1?: undefined;
    draggableQ3?: undefined;
}
declare module '../../Series/ErrorBar/ErrorBarSeriesOptions' {
    interface ErrorBarSeriesOptions {
        /**
         * The draggable-points module allows points to be moved around or
         * modified in the chart. In addition to the options mentioned under
         * the `dragDrop` API structure, the module fires three events,
         * [point.dragStart](plotOptions.series.point.events.dragStart),
         * [point.drag](plotOptions.series.point.events.drag) and
         * [point.drop](plotOptions.series.point.events.drop).
         *
         * The `errorbar` series additionally supports: `draggableHigh` and
         * `draggableLow` options.
         *
         * @since        6.2.0
         * @requires     modules/draggable-points
         */
        dragDrop?: ErrorBarSeriesDragDropOptions;
    }
}
export interface BulletSeriesDragDropOptions extends DragDropOptions {
    /**
     * Allow target value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.bullet.dragDrop.draggableTarget
     */
    draggableTarget?: boolean;
}
declare module '../../Series/Bullet/BulletSeriesOptions' {
    interface BulletSeriesOptions {
        /**
         * The draggable-points module allows points to be moved around or
         * modified in the chart. In addition to the options mentioned under
         * the `dragDrop` API structure, the module fires three events,
         * [point.dragStart](plotOptions.series.point.events.dragStart),
         * [point.drag](plotOptions.series.point.events.drag) and
         * [point.drop](plotOptions.series.point.events.drop).
         *
         * The `bullet` series additionally supports: `draggableTarget` option.
         *
         * @since        6.2.0
         * @requires     modules/draggable-points
         */
        dragDrop?: BulletSeriesDragDropOptions;
    }
}
export interface OHLCSeriesDragDropOptions extends DragDropOptions {
    /**
     * Allow close value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.ohlc.dragDrop.draggableClose
     */
    draggableClose?: boolean;
    /**
     * Allow high value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.ohlc.dragDrop.draggableHigh
     */
    draggableHigh?: boolean;
    /**
     * Allow low value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.ohlc.dragDrop.draggableLow
     */
    draggableLow?: boolean;
    /**
     * Allow open value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.ohlc.dragDrop.draggableOpen
     */
    draggableOpen?: boolean;
}
declare module '../../Series/OHLC/OHLCSeriesOptions' {
    interface OHLCSeriesOptions {
        /**
         * The draggable-points module allows points to be moved around or
         * modified in the chart. In addition to the options mentioned under
         * the `dragDrop` API structure, the module fires three events,
         * [point.dragStart](plotOptions.series.point.events.dragStart),
         * [point.drag](plotOptions.series.point.events.drag) and
         * [point.drop](plotOptions.series.point.events.drop).
         *
         * The `ohlc` series additionally supports: `draggableOpen`,
         * `draggableHigh`, `draggableLow` and `draggableClose` options.
         *
         * @since        6.2.0
         * @requires     modules/draggable-points
         */
        dragDrop?: OHLCSeriesDragDropOptions;
    }
}
export interface ColumnRangeSeriesDragDropOptions extends DragDropOptions {
    /**
     * Allow high value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.columnrange.dragDrop.draggableHigh
     */
    draggableHigh?: boolean;
    /**
     * Allow low value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.columnrange.dragDrop.draggableLow
     */
    draggableLow?: boolean;
}
declare module '../../Series/ColumnRange/ColumnRangeSeriesOptions' {
    interface ColumnRangeSeriesOptions {
        /**
         * The draggable-points module allows points to be moved around or
         * modified in the chart. In addition to the options mentioned under
         * the `dragDrop` API structure, the module fires three events,
         * [point.dragStart](plotOptions.series.point.events.dragStart),
         * [point.drag](plotOptions.series.point.events.drag) and
         * [point.drop](plotOptions.series.point.events.drop).
         *
         * The `columnrange` series additionally supports: `draggableHigh` and
         * `draggableLow` options.
         *
         * @since        6.2.0
         * @requires     modules/draggable-points
         */
        dragDrop?: ColumnRangeSeriesDragDropOptions;
    }
}
export interface AreaRangeSeriesDragDropOptions extends DragDropOptions {
    /**
     * Allow high value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.arearange.dragDrop.draggableHigh
     */
    draggableHigh?: boolean;
    /**
     * Allow low value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.arearange.dragDrop.draggableLow
     */
    draggableLow?: boolean;
}
declare module '../../Series/AreaRange/AreaRangeSeriesOptions' {
    interface AreaRangeSeriesOptions {
        /**
         * The draggable-points module allows points to be moved around or
         * modified in the chart. In addition to the options mentioned under
         * the `dragDrop` API structure, the module fires three events,
         * [point.dragStart](plotOptions.series.point.events.dragStart),
         * [point.drag](plotOptions.series.point.events.drag) and
         * [point.drop](plotOptions.series.point.events.drop).
         *
         * The `arearange` series additionally supports: `draggableHigh` and
         * `draggableLow` options.
         *
         * @since        6.2.0
         * @requires     modules/draggable-points
         */
        dragDrop?: AreaRangeSeriesDragDropOptions;
    }
}
export interface XrangeSeriesDragDropOptions extends DragDropOptions {
    /**
     * Allow x value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.xrange.dragDrop.draggableX1
     */
    draggableX1?: boolean;
    /**
     * Allow x2 value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.xrange.dragDrop.draggableX2
     */
    draggableX2?: boolean;
}
declare module '../../Series/XRange/XRangeSeriesOptions' {
    interface XRangeSeriesOptions {
        /**
         * The draggable-points module allows points to be moved around or
         * modified in the chart. In addition to the options mentioned under
         * the `dragDrop` API structure, the module fires three events,
         * [point.dragStart](plotOptions.series.point.events.dragStart),
         * [point.drag](plotOptions.series.point.events.drag) and
         * [point.drop](plotOptions.series.point.events.drop).
         *
         * The `xrange` series additionally supports: `draggableX1` and
         * `draggableX2` options.
         *
         * @since        6.2.0
         * @requires     modules/draggable-points
         */
        dragDrop?: XrangeSeriesDragDropOptions;
    }
}
export interface GanttSeriesDragDropOptions extends DragDropOptions {
    /**
     * Allow end value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.gantt.dragDrop.draggableEnd
     */
    draggableEnd?: boolean;
    /**
     * Allow start value to be dragged individually.
     *
     * @type      {boolean}
     * @default   true
     * @requires  modules/draggable-points
     * @apioption plotOptions.gantt.dragDrop.draggableStart
     */
    draggableStart?: boolean;
}
declare module '../../Series/Gantt/GanttSeriesOptions' {
    interface GanttSeriesOptions {
        /**
         * The draggable-points module allows points to be moved around or
         * modified in the chart. In addition to the options mentioned under
         * the `dragDrop` API structure, the module fires three events,
         * [point.dragStart](plotOptions.series.point.events.dragStart),
         * [point.drag](plotOptions.series.point.events.drag) and
         * [point.drop](plotOptions.series.point.events.drop).
         *
         * The `gantt` series additionally supports: `draggableEnd` and
         * `draggableStart` options.
         *
         * @since        6.2.0
         * @requires     modules/draggable-points
         */
        dragDrop?: GanttSeriesDragDropOptions;
    }
}
