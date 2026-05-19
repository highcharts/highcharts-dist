/* *
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
var _a;
import Annotation from '../Annotation.js';
import D from '../../../Core/Defaults.js';
var defaultOptions = D.defaultOptions;
import MockPoint from '../MockPoint.js';
import { merge, pick } from '../../../Shared/Utilities.js';
if ((_a = defaultOptions.annotations) === null || _a === void 0 ? void 0 : _a.types) {
    /**
     * Options for the vertical line annotation type.
     *
     * @sample highcharts/annotations-advanced/vertical-line/
     *         Vertical line
     *
     * @extends      annotations.types.crookedLine
     * @excluding    labels, shapes, controlPointOptions
     * @product      highstock
     * @requires     modules/annotations-advanced
     * @optionparent annotations.types.verticalLine
     */
    defaultOptions.annotations.types.verticalLine = {
        typeOptions: {
            /**
             * @ignore
             */
            yOffset: 10,
            /**
             * Label options.
             *
             * @extends annotations.types.crookedLine.labelOptions
             */
            label: {
                offset: -40,
                point: function (target) {
                    return target.annotation.points[0];
                },
                allowOverlap: true,
                backgroundColor: 'none',
                borderWidth: 0,
                crop: true,
                overflow: 'none',
                shape: 'rect',
                text: '{y:.2f}'
            },
            /**
             * Connector options.
             *
             * @extends   annotations.shapeOptions
             * @excluding height, r, type, width
             */
            connector: {
                strokeWidth: 1,
                markerEnd: 'arrow'
            }
        },
        labelOptions: {
            style: {
                color: 'var(--highcharts-neutral-color-80)',
                fontSize: '0.7em'
            }
        }
    };
}
/* *
 *
 *  Class
 *
 * */
/** @internal */
var VerticalLine = /** @class */ (function (_super) {
    __extends(VerticalLine, _super);
    function VerticalLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    VerticalLine.connectorFirstPoint = function (target) {
        var _a, _b, _c, _d;
        var annotation = target.annotation, chart = annotation.chart, inverted = chart.inverted, point = annotation.points[0], left = pick((_a = point.series.yAxis) === null || _a === void 0 ? void 0 : _a.left, 0), top = pick((_b = point.series.yAxis) === null || _b === void 0 ? void 0 : _b.top, 0), offset = ((_d = (_c = annotation.options.typeOptions) === null || _c === void 0 ? void 0 : _c.label) === null || _d === void 0 ? void 0 : _d.offset) || 0, y = MockPoint.pointToPixels(point, true)[inverted ? 'x' : 'y'];
        return {
            x: point.x,
            xAxis: point.series.xAxis,
            y: y + offset +
                (inverted ? (left - chart.plotLeft) : (top - chart.plotTop))
        };
    };
    VerticalLine.connectorSecondPoint = function (target) {
        var _a;
        var annotation = target.annotation, chart = annotation.chart, inverted = chart.inverted, typeOptions = annotation.options.typeOptions, point = annotation.points[0], left = pick(point.series.yAxis && point.series.yAxis.left, 0), top = pick(point.series.yAxis && point.series.yAxis.top, 0), y = MockPoint.pointToPixels(point, true)[inverted ? 'x' : 'y'];
        var yOffset = (typeOptions === null || typeOptions === void 0 ? void 0 : typeOptions.yOffset) || 0;
        if ((((_a = typeOptions === null || typeOptions === void 0 ? void 0 : typeOptions.label) === null || _a === void 0 ? void 0 : _a.offset) || 0) < 0) {
            yOffset *= -1;
        }
        return {
            x: point.x,
            xAxis: point.series.xAxis,
            y: y + yOffset +
                (inverted ? (left - chart.plotLeft) : (top - chart.plotTop))
        };
    };
    /* *
     *
     *  Functions
     *
     * */
    VerticalLine.prototype.getPointsOptions = function () {
        var _a;
        return ((_a = this.options.typeOptions) === null || _a === void 0 ? void 0 : _a.point) ?
            [this.options.typeOptions.point] : [];
    };
    VerticalLine.prototype.addShapes = function () {
        var _a;
        var typeOptions = this.options.typeOptions, connector = this.initShape(merge(typeOptions.connector, {
            type: 'path',
            points: [
                VerticalLine.connectorFirstPoint,
                VerticalLine.connectorSecondPoint
            ],
            className: 'highcharts-vertical-line'
        }), 0);
        typeOptions.connector = connector.options;
        // Update to be able to save the chart after drag (#18584).
        ((_a = this.userOptions).typeOptions || (_a.typeOptions = {})).point = typeOptions.point;
    };
    VerticalLine.prototype.addLabels = function () {
        var typeOptions = this.options.typeOptions, labelOptions = typeOptions.label, offset = (labelOptions === null || labelOptions === void 0 ? void 0 : labelOptions.offset) || 0;
        var x = 0, y = offset, verticalAlign = offset < 0 ? 'bottom' : 'top', align = 'center';
        if (this.chart.inverted) {
            x = offset;
            y = 0;
            verticalAlign = 'middle';
            align = offset < 0 ? 'right' : 'left';
        }
        var label = this.initLabel(merge(labelOptions, {
            verticalAlign: verticalAlign,
            align: align,
            x: x,
            y: y
        }));
        typeOptions.label = label.options;
    };
    return VerticalLine;
}(Annotation));
Annotation.types.verticalLine = VerticalLine;
/* *
 *
 *  Default Export
 *
 * */
export default VerticalLine;
