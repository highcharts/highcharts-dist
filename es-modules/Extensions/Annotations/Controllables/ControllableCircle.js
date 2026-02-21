/* *
 *
 *
 * */
'use strict';
import Controllable from './Controllable.js';
import ControllablePath from './ControllablePath.js';
import U from '../../../Core/Utilities.js';
const { defined, merge } = U;
/* *
 *
 *  Class
 *
 * */
/**
 * A controllable circle class.
 *
 * @internal
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.AnnotationControllableCircle
 *
 * @param {Highcharts.Annotation} annotation an annotation instance
 * @param {Highcharts.AnnotationsShapeOptions} options a shape's options
 * @param {number} index of the circle
 */
class ControllableCircle extends Controllable {
    /* *
     *
     *  Constructors
     *
     * */
    constructor(annotation, options, index) {
        super(annotation, options, index, 'shape');
        /* *
         *
         *  Properties
         *
         * */
        this.type = 'circle';
        this.translate = super.translateShape;
    }
    /* *
     *
     *  Functions
     *
     * */
    init(annotation, options, index) {
        const { point, xAxis, yAxis } = options;
        if (point && typeof point !== 'string') {
            if (defined(xAxis)) {
                point.xAxis = xAxis;
            }
            if (defined(yAxis)) {
                point.yAxis = yAxis;
            }
        }
        super.init(annotation, options, index);
    }
    redraw(animation) {
        if (this.graphic) {
            const point = this.points[0], position = this.anchor(point).absolutePosition;
            let r = this.options.r || 0;
            if (position) {
                const yAxis = defined(this.options.yAxis) ?
                    this.chart.yAxis[this.options.yAxis] : void 0;
                if (yAxis && defined(point.y)) {
                    r = this.calculateAnnotationSize(point.y, r, yAxis);
                }
                this.graphic[animation ? 'animate' : 'attr']({
                    x: position.x,
                    y: position.y,
                    r
                });
            }
            else {
                this.graphic.attr({
                    x: 0,
                    y: -9e9
                });
            }
            this.graphic.placed = !!position;
        }
        super.redraw.call(this, animation);
    }
    render(parent) {
        const attrs = this.attrsFromOptions(this.options);
        this.graphic = this.annotation.chart.renderer
            .circle(0, -9e9, 0)
            .attr(attrs)
            .add(parent);
        super.render();
    }
    /**
     * Set the radius.
     *
     * @internal
     * @param {number} r
     *        A radius to be set
     */
    setRadius(r) {
        this.options.r = r;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * A map object which allows to map options attributes to element
 * attributes.
 *
 * @name Highcharts.AnnotationControllableCircle.attrsMap
 * @type {Highcharts.Dictionary<string>}
 */
ControllableCircle.attrsMap = merge(ControllablePath.attrsMap, { r: 'r' });
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default ControllableCircle;
