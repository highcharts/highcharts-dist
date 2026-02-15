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
class ControllableRect extends Controllable {
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
        this.type = 'rect';
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
    render(parent) {
        const attrs = this.attrsFromOptions(this.options);
        this.graphic = this.annotation.chart.renderer
            .rect(0, -9e9, 0, 0)
            .attr(attrs)
            .add(parent);
        super.render();
    }
    redraw(animation) {
        if (this.graphic) {
            const point = this.points[0], position = this.anchor(point).absolutePosition;
            let width = this.options.width || 0, height = this.options.height || 0;
            if (position) {
                const xAxis = defined(this.options.xAxis) ?
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
                    width,
                    height
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
        super.redraw(animation);
    }
}
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
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default ControllableRect;
