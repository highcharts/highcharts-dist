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
import Controllable from './Controllable.js';
import ControllablePath from './ControllablePath.js';
import { defined, merge } from '../../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * A controllable rect class.
 *
 * @internal
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.AnnotationControllableRect
 *
 * @param {Highcharts.Annotation} annotation
 * An annotation instance.
 *
 * @param {Highcharts.AnnotationsShapeOptions} options
 * A rect's options.
 *
 * @param {number} index
 * Index of the rectangle
 */
var ControllableRect = /** @class */ (function (_super) {
    __extends(ControllableRect, _super);
    /* *
     *
     *  Constructors
     *
     * */
    function ControllableRect(annotation, options, index) {
        var _this = _super.call(this, annotation, options, index, 'shape') || this;
        /* *
         *
         *  Properties
         *
         * */
        _this.type = 'rect';
        _this.translate = _super.prototype.translateShape;
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    ControllableRect.prototype.init = function (annotation, options, index) {
        var point = options.point, xAxis = options.xAxis, yAxis = options.yAxis;
        if (point && typeof point !== 'string') {
            if (defined(xAxis)) {
                point.xAxis = xAxis;
            }
            if (defined(yAxis)) {
                point.yAxis = yAxis;
            }
        }
        _super.prototype.init.call(this, annotation, options, index);
    };
    ControllableRect.prototype.render = function (parent) {
        var attrs = this.attrsFromOptions(this.options);
        this.graphic = this.annotation.chart.renderer
            .rect(0, -9e9, 0, 0)
            .attr(attrs)
            .add(parent);
        _super.prototype.render.call(this);
    };
    ControllableRect.prototype.redraw = function (animation) {
        if (this.graphic) {
            var point = this.points[0], position = this.anchor(point).absolutePosition;
            var width = this.options.width || 0, height = this.options.height || 0;
            if (position) {
                var xAxis = defined(this.options.xAxis) ?
                    this.chart.xAxis[this.options.xAxis] : void 0, yAxis = defined(this.options.yAxis) ?
                    this.chart.yAxis[this.options.yAxis] : void 0;
                if (xAxis && defined(point.x)) {
                    width = this.calculateAnnotationSize(point.x, width, xAxis);
                }
                if (yAxis && defined(point.y)) {
                    height = this.calculateAnnotationSize(point.y, height, yAxis);
                }
                this.graphic[animation ? 'animate' : 'attr']({
                    x: position.x,
                    y: position.y,
                    width: width,
                    height: height
                });
            }
            else {
                this.attr({
                    x: 0,
                    y: -9e9
                });
            }
            this.graphic.placed = Boolean(position);
        }
        _super.prototype.redraw.call(this, animation);
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * A map object which allows to map options attributes to element attributes
     *
     * @type {Annotation.ControllableRect.AttrsMap}
     */
    ControllableRect.attrsMap = merge(ControllablePath.attrsMap, {
        width: 'width',
        height: 'height'
    });
    return ControllableRect;
}(Controllable));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default ControllableRect;
