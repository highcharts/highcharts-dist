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
import ControlPoint from '../ControlPoint.js';
import D from '../../../Core/Defaults.js';
var defaultOptions = D.defaultOptions;
import MockPoint from '../MockPoint.js';
import { merge } from '../../../Shared/Utilities.js';
if ((_a = defaultOptions.annotations) === null || _a === void 0 ? void 0 : _a.types) {
    /**
    * Options for the crooked line annotation type.
    *
    * @sample highcharts/annotations-advanced/crooked-line/
    *         Crooked line
    *
    * @product      highstock
    * @requires     modules/annotations-advanced
    * @optionparent annotations.types.crookedLine
    */
    defaultOptions.annotations.types.crookedLine = {
        /**
         * @extends   annotations.labelOptions
         * @apioption annotations.types.crookedLine.labelOptions
         */
        /**
         * Additional options for an annotation with the type.
         */
        typeOptions: {
            /**
             * This number defines which xAxis the point is connected to.
             * It refers to either the axis id or the index of the axis
             * in the xAxis array.
             */
            xAxis: 0,
            /**
             * This number defines which yAxis the point is connected to.
             * It refers to either the axis id or the index of the axis
             * in the xAxis array.
             */
            yAxis: 0,
            /**
             * @type      {Array<*>}
             * @apioption annotations.types.crookedLine.typeOptions.points
             */
            /**
             * The x position of the point.
             *
             * @type      {number}
             * @apioption annotations.types.crookedLine.typeOptions.points.x
             */
            /**
             * The y position of the point.
             *
             * @type      {number}
             * @apioption annotations.types.crookedLine.typeOptions.points.y
             */
            /**
             * @type      {number}
             * @excluding positioner, events
             * @apioption annotations.types.crookedLine.typeOptions.points.controlPoint
             */
            /**
             * Line options.
             *
             * @excluding height, point, points, r, type, width
             */
            line: {
                fill: 'none'
            }
        },
        /**
         * @excluding positioner, events
         * @extends annotations.controlPointOptions
         */
        controlPointOptions: {
            positioner: function (target) {
                var graphic = this.graphic, xy = MockPoint.pointToPixels(target.points[this.index]);
                return {
                    x: xy.x - (graphic.width || 0) / 2,
                    y: xy.y - (graphic.height || 0) / 2
                };
            },
            events: {
                drag: function (e, target) {
                    if (target.chart.isInsidePlot(e.chartX - target.chart.plotLeft, e.chartY - target.chart.plotTop, {
                        visiblePlotOnly: true
                    })) {
                        var translation = this.mouseMoveToTranslation(e), typeOptions = target.options.typeOptions;
                        target.translatePoint(translation.x, translation.y, this.index);
                        // Update options:
                        typeOptions.points[this.index].x =
                            target.points[this.index].x;
                        typeOptions.points[this.index].y =
                            target.points[this.index].y;
                        target.redraw(false);
                    }
                }
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
var CrookedLine = /** @class */ (function (_super) {
    __extends(CrookedLine, _super);
    function CrookedLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Overrides default setter to get axes from typeOptions.
     */
    CrookedLine.prototype.setClipAxes = function () {
        var _a, _b;
        this.clipXAxis = this.chart.xAxis[(_a = this.options.typeOptions) === null || _a === void 0 ? void 0 : _a.xAxis];
        this.clipYAxis = this.chart.yAxis[(_b = this.options.typeOptions) === null || _b === void 0 ? void 0 : _b.yAxis];
    };
    CrookedLine.prototype.getPointsOptions = function () {
        var _a;
        var typeOptions = (_a = this.options).typeOptions || (_a.typeOptions = {});
        return (typeOptions.points || []).map(function (pointOptions) {
            if (typeof pointOptions !== 'string') {
                pointOptions.xAxis = typeOptions.xAxis;
                pointOptions.yAxis = typeOptions.yAxis;
            }
            return pointOptions;
        });
    };
    CrookedLine.prototype.getControlPointsOptions = function () {
        return this.getPointsOptions();
    };
    CrookedLine.prototype.addControlPoints = function () {
        this.getControlPointsOptions().forEach(function (pointOptions, i) {
            var controlPoint = new ControlPoint(this.chart, this, merge(this.options.controlPointOptions, pointOptions.controlPoint), i);
            this.controlPoints.push(controlPoint);
            pointOptions.controlPoint = controlPoint.options;
        }, this);
    };
    CrookedLine.prototype.addShapes = function () {
        var _a;
        var typeOptions = (_a = this.options).typeOptions || (_a.typeOptions = {}), shape = this.initShape(merge(typeOptions.line, {
            type: 'path',
            className: 'highcharts-crooked-lines',
            points: this.points.map(function (_point, i) { return (function (target) {
                return target.annotation.points[i];
            }); })
        }), 0);
        typeOptions.line = shape.options;
    };
    return CrookedLine;
}(Annotation));
Annotation.types.crookedLine = CrookedLine;
/* *
 *
 *  Default Export
 *
 * */
export default CrookedLine;
