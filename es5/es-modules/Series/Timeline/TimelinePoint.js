/* *
 *
 *  Timeline Series.
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Daniel Studencki
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Point from '../../Core/Series/Point.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var _a = SeriesRegistry.seriesTypes, LinePoint = _a.line.prototype.pointClass, PiePoint = _a.pie.prototype.pointClass;
import { defined, isNumber, merge, objectEach, pick } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
var TimelinePoint = /** @class */ (function (_super) {
    __extends(TimelinePoint, _super);
    function TimelinePoint(series, options) {
        var _a;
        var _this = _super.call(this, series, options) || this;
        (_a = _this.name) !== null && _a !== void 0 ? _a : (_this.name = 
        // If options is null, we are dealing with a null point
        ((options && options.y !== null) ||
            !series.options.nullInteraction) &&
            'Event' ||
            'Null');
        _this.y = 1;
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    TimelinePoint.prototype.alignConnector = function () {
        var point = this, series = point.series, dataLabel = point.dataLabel, connector = dataLabel.connector, dlOptions = (dataLabel.options || {}), connectorWidth = dlOptions.connectorWidth || 0, chart = point.series.chart, bBox = connector.getBBox(), plotPos = {
            x: bBox.x + (dataLabel.translateX || 0),
            y: bBox.y + (dataLabel.translateY || 0)
        };
        // Include a half of connector width in order to run animation,
        // when connectors are aligned to the plot area edge.
        if (chart.inverted) {
            plotPos.y -= connectorWidth / 2;
        }
        else {
            plotPos.x += connectorWidth / 2;
        }
        var isVisible = chart.isInsidePlot(plotPos.x, plotPos.y);
        connector[isVisible ? 'animate' : 'attr']({
            d: point.getConnectorPath()
        });
        connector.addClass('highcharts-color-' + point.colorIndex);
        if (!series.chart.styledMode) {
            connector.attr({
                stroke: dlOptions.connectorColor || point.color,
                'stroke-width': dlOptions.connectorWidth,
                opacity: dataLabel[defined(dataLabel.newOpacity) ? 'newOpacity' : 'opacity']
            });
        }
    };
    TimelinePoint.prototype.drawConnector = function () {
        var point = this, dataLabel = point.dataLabel, series = point.series;
        if (dataLabel) {
            if (!dataLabel.connector) {
                dataLabel.connector = series.chart.renderer
                    .path(point.getConnectorPath())
                    .attr({
                    zIndex: -1
                })
                    .add(dataLabel);
            }
            if (point.series.chart.isInsidePlot(// #10507
            dataLabel.x || 0, dataLabel.y || 0)) {
                point.alignConnector();
            }
        }
    };
    TimelinePoint.prototype.getConnectorPath = function () {
        var _a;
        var _b = this, _c = _b.plotX, plotX = _c === void 0 ? 0 : _c, _d = _b.plotY, plotY = _d === void 0 ? 0 : _d, series = _b.series, dataLabel = _b.dataLabel, chart = series.chart, xAxisLen = series.xAxis.len, inverted = chart.inverted, direction = inverted ? 'x2' : 'y2';
        if (dataLabel) {
            var targetDLPos = dataLabel.targetPosition, negativeDistance = ((dataLabel.alignAttr || dataLabel)[direction[0]] <
                series.yAxis.len / 2);
            var coords_1 = {
                x1: plotX,
                y1: plotY,
                x2: plotX,
                y2: isNumber(targetDLPos.y) ? targetDLPos.y : dataLabel.y
            };
            // Recalculate coords when the chart is inverted.
            if (inverted) {
                coords_1 = {
                    x1: plotY,
                    y1: xAxisLen - plotX,
                    x2: targetDLPos.x || dataLabel.x,
                    y2: xAxisLen - plotX
                };
            }
            // Subtract data label width or height from expected coordinate so
            // that the connector would start from the appropriate edge.
            if (negativeDistance) {
                coords_1[direction] += dataLabel[inverted ? 'width' : 'height'] || 0;
            }
            // Change coordinates so that they will be relative to data label.
            objectEach(coords_1, function (_coord, i) {
                coords_1[i] -= (dataLabel.alignAttr || dataLabel)[i[0]];
            });
            return chart.renderer.crispLine([
                ['M', coords_1.x1, coords_1.y1],
                ['L', coords_1.x2, coords_1.y2]
            ], ((_a = dataLabel.options) === null || _a === void 0 ? void 0 : _a.connectorWidth) || 0);
        }
        return [];
    };
    TimelinePoint.prototype.isValid = function () {
        return this.options.y !== null;
    };
    TimelinePoint.prototype.setState = function () {
        var proceed = _super.prototype.setState;
        // Prevent triggering the setState method on null points.
        if (!this.isNull || this.series.options.nullInteraction) {
            proceed.apply(this, arguments);
        }
    };
    TimelinePoint.prototype.setVisible = function (visible, redraw) {
        var point = this, series = point.series;
        redraw = pick(redraw, series.options.ignoreHiddenPoint);
        PiePoint.prototype.setVisible.call(point, visible, false);
        // Process new data
        series.processData();
        if (redraw) {
            series.chart.redraw();
        }
    };
    TimelinePoint.prototype.applyOptions = function (options, x, isMock) {
        var series = this.series;
        if (!x && !(options === null || options === void 0 ? void 0 : options.x)) {
            if (isNumber(this.x)) {
                x = this.x;
            }
            else if (isNumber(series === null || series === void 0 ? void 0 : series.xIncrement) || NaN) {
                x = series.xIncrement || 0;
                series.autoIncrement();
            }
        }
        options = Point.prototype.optionsToObject.call(this, options);
        var p = _super.prototype.applyOptions.call(this, options, x, isMock);
        if (!isMock) {
            this.userDLOptions = merge(this.userDLOptions, options.dataLabels);
        }
        return p;
    };
    return TimelinePoint;
}(LinePoint));
/* *
 *
 *  Default Export
 *
 * */
export default TimelinePoint;
