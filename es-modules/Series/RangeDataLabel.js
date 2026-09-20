/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Andrzej Buleczka
 *
 * */
'use strict';
import ColumnSeries from './Column/ColumnSeries.js';
import { crisp, isNumber } from '../Shared/Utilities.js';
/* *
 *
 *  Declarations
 *
 * */
var RangeDataLabel;
(function (RangeDataLabel) {
    const plotYKeys = {
        close: ['plotClose'],
        high: ['highPlot', 'plotHigh'],
        low: ['lowPlot', 'plotLow'],
        median: ['medianPlot'],
        open: ['plotOpen'],
        q1: ['q1Plot'],
        q3: ['q3Plot'],
        y: ['plotY']
    };
    /* *
     *
     *  Functions
     *
     * */
    function getPointPlotY(point, pointValKey) {
        const keys = plotYKeys[pointValKey] ?? [];
        for (const key of keys) {
            const value = point[key];
            if (isNumber(value)) {
                return value;
            }
        }
    }
    function getBelow(point, options, plotY) {
        const plotHigh = getPointPlotY(point, 'high'), plotLow = getPointPlotY(point, 'low');
        if (isNumber(plotHigh) && isNumber(plotLow)) {
            return options.inside ?
                plotY === Math.min(plotHigh, plotLow) :
                plotY === Math.max(plotHigh, plotLow);
        }
        return false;
    }
    function compose(SeriesClass) {
        const seriesProto = SeriesClass.prototype;
        seriesProto.alignDataLabel = alignDataLabel;
        return SeriesClass;
    }
    RangeDataLabel.compose = compose;
    /**
     * Default formatter for range series data labels. Renders the value of
     * the point key the label is aligned to, so the legacy high and low
     * labels keep showing their respective values without an explicit format.
     * Does not modify `point.y`. Falls back to `point.y` (the value of
     * `series.pointValKey`) for an unresolved key.
     * @internal
     */
    function formatter(options) {
        const rawValue = options.alignToKey ?
            this.getNestedProperty(options.alignToKey) :
            this.y, value = isNumber(rawValue) ? rawValue : this.y;
        return isNumber(value) ?
            this.series.chart.numberFormatter(value, -1) :
            '';
    }
    RangeDataLabel.formatter = formatter;
    /**
     * Rewrite a label's `format` so that `{y}` and `{point.y}` references
     * resolve to the value of the point key the label is aligned to, keeping
     * the legacy per-label `{y}` behavior of range data labels.
     * @internal
     */
    function applyAlignToKeyValue(options) {
        const { alignToKey, format } = options;
        // An explicit `format` ignores `alignToKey`, so its `{y}` (and
        // `{point.y}`) tokens point at the whole point. Rewrite them to the
        // aligned key so each range label keeps rendering its own value.
        // The default formatter already reads `alignToKey`.
        if (alignToKey && format) {
            options.format = format.replace(/\{(?:point\.)?y([:}])/g, '{point.' + alignToKey + '$1');
        }
    }
    RangeDataLabel.applyAlignToKeyValue = applyAlignToKeyValue;
    function resolveAlignToKey(series, rawKey) {
        return rawKey && series.pointArrayMap.indexOf(rawKey) > -1 ?
            rawKey :
            series.pointValKey;
    }
    RangeDataLabel.resolveAlignToKey = resolveAlignToKey;
    function alignDataLabel(point, dataLabel, options, alignTo, isNew) {
        const series = this, alignToKey = resolveAlignToKey(series, options.alignToKey), plotY = getPointPlotY(point, alignToKey), shapeArgs = point.shapeArgs, originalPlotY = point.plotY, originalDlBox = point.dlBox, originalBelow = point.below;
        if (isNumber(plotY)) {
            point.plotY = plotY;
            if (shapeArgs && !options.inside) {
                point.dlBox = {
                    x: shapeArgs.x ?? 0,
                    y: crisp(plotY, series.borderWidth, series.chart.inverted),
                    width: shapeArgs.width ?? 0,
                    height: 0
                };
            }
            const below = point.below = getBelow(point, options, plotY);
            if (series.chart.inverted) {
                options.align ?? (options.align = below ? 'right' : 'left');
            }
            else {
                options.verticalAlign ?? (options.verticalAlign = below ? 'top' : 'bottom');
            }
        }
        ColumnSeries.prototype.alignDataLabel.call(series, point, dataLabel, options, alignTo, isNew);
        point.plotY = originalPlotY;
        point.dlBox = originalDlBox;
        point.below = originalBelow;
    }
    RangeDataLabel.alignDataLabel = alignDataLabel;
})(RangeDataLabel || (RangeDataLabel = {}));
/* *
 *
 *  Default Export
 *
 * */
export default RangeDataLabel;
