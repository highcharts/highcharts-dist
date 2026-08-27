/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import ColumnRangePoint from './ColumnRangePoint.js';
import ColumnRangeSeriesDefaults from './ColumnRangeSeriesDefaults.js';
import H from '../../Core/Globals.js';
const { noop } = H;
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { seriesTypes: { arearange: AreaRangeSeries, column: ColumnSeries, column: { prototype: columnProto } } } = SeriesRegistry;
import { addEvent, clamp, extend, isNumber, merge } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * The ColumnRangeSeries class
 *
 * @internal
 * @class
 * @name Highcharts.seriesTypes.columnrange
 *
 * @augments Highcharts.Series
 */
class ColumnRangeSeries extends AreaRangeSeries {
    /* *
     *
     *  Functions
     *
     * */
    setOptions() {
        // #14359 Prevent side-effect from stacking.
        merge(true, arguments[0], { stacking: void 0 });
        return AreaRangeSeries.prototype.setOptions.apply(this, arguments);
    }
    // Overrides from modules that may be loaded after this module
    // @todo move to compositions
    translate() {
        return columnProto.translate.apply(this);
    }
    // Public crispCol(): BBoxObject {
    //     return columnProto.crispCol.apply(this, arguments as any);
    // }
    // public drawPoints(): void {
    //     return columnProto.drawPoints.apply(this, arguments as any);
    // }
    // public drawTracker(): void {
    //     return columnProto.drawTracker.apply(this, arguments as any);
    // }
    // public getColumnMetrics(): ColumnMetricsObject {
    //     return columnProto.getColumnMetrics.apply(this, arguments as any);
    // }
    pointAttribs() {
        return columnProto.pointAttribs.apply(this, arguments);
    }
    // Public adjustForMissingColumns(): number {
    //     return columnProto.adjustForMissingColumns.apply(this, arguments);
    // }
    // public animate(): void {
    //     return columnProto.animate.apply(this, arguments as any);
    // }
    translate3dPoints() {
        return columnProto.translate3dPoints.apply(this, arguments);
    }
    translate3dShapes() {
        return columnProto.translate3dShapes.apply(this, arguments);
    }
    /**
     * Translate data points from raw values x and y to plotX and plotY
     * @internal
     */
    afterColumnTranslate() {
        const yAxis = this.yAxis, xAxis = this.xAxis, startAngleRad = xAxis.startAngleRad, chart = this.chart, isRadial = this.xAxis.isRadial, safeDistance = Math.max(chart.chartWidth, chart.chartHeight) + 999;
        let height, heightDifference, start, y;
        // eslint-disable-next-line valid-jsdoc
        /**
         * Don't draw too far outside plot area (#6835)
         * @internal
         */
        function safeBounds(pixelPos) {
            return clamp(pixelPos, -safeDistance, safeDistance);
        }
        // Set plotLow and plotHigh
        this.points.forEach((point) => {
            const shapeArgs = point.shapeArgs || {}, minPointLength = this.options.minPointLength, plotY = point.plotY, plotHigh = yAxis.translate(point.high, 0, 1, 0, 1);
            if (isNumber(plotHigh) && isNumber(plotY)) {
                point.plotHigh = safeBounds(plotHigh);
                point.plotLow = safeBounds(plotY);
                // Adjust shape
                y = point.plotHigh;
                height =
                    (point.rectPlotY ?? point.plotY) -
                        point.plotHigh;
                // Adjust for minPointLength
                if (Math.abs(height) < minPointLength) {
                    heightDifference = (minPointLength - height);
                    height += heightDifference;
                    y -= heightDifference / 2;
                    // Adjust for negative ranges or reversed Y axis (#1457)
                }
                else if (height < 0) {
                    height *= -1;
                    y -= height;
                }
                if (isRadial && this.polar) {
                    start = point.barX + startAngleRad;
                    point.shapeType = 'arc';
                    point.shapeArgs = this.polar.arc(y + height, y, start, start + (point.pointWidth || 0));
                }
                else {
                    shapeArgs.height = height;
                    shapeArgs.y = y;
                    const { x = 0, width = 0 } = shapeArgs;
                    // #17912, aligning column range points
                    // merge if shapeArgs contains more properties e.g. for 3d
                    point.shapeArgs = merge(point.shapeArgs, this.crispCol(x, y, width, height));
                    point.tooltipPos = chart.inverted ?
                        [
                            yAxis.len + yAxis.pos - chart.plotLeft - y -
                                height / 2,
                            xAxis.len + xAxis.pos - chart.plotTop - x -
                                width / 2,
                            height
                        ] : [
                        xAxis.left - chart.plotLeft + x + width / 2,
                        yAxis.pos - chart.plotTop + y + height / 2,
                        height
                    ]; // Don't inherit from column tooltip position - #3372
                }
            }
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
ColumnRangeSeries.defaultOptions = merge(ColumnSeries.defaultOptions, AreaRangeSeries.defaultOptions, ColumnRangeSeriesDefaults);
addEvent(ColumnRangeSeries, 'afterColumnTranslate', function () {
    ColumnRangeSeries.prototype.afterColumnTranslate.apply(this);
}, { order: 5 });
extend(ColumnRangeSeries.prototype, {
    directTouch: true,
    pointClass: ColumnRangePoint,
    trackerGroups: ['group', 'dataLabelsGroup'],
    adjustForMissingColumns: columnProto.adjustForMissingColumns,
    animate: columnProto.animate,
    crispCol: columnProto.crispCol,
    drawGraph: noop,
    drawPoints: columnProto.drawPoints,
    getSymbol: noop,
    drawTracker: columnProto.drawTracker,
    getColumnMetrics: columnProto.getColumnMetrics
});
SeriesRegistry.registerSeriesType('columnrange', ColumnRangeSeries);
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default ColumnRangeSeries;
