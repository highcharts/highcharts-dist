/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Authors: Paweł Lysy, Grzegorz Blachliński
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import Point from '../../Core/Series/Point.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import { extend, pick } from '../../Shared/Utilities.js';
const { seriesTypes: { column: { prototype: { pointClass: ColumnPoint } } } } = SeriesRegistry;
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 */
class LinkPoint extends ColumnPoint {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(series, options, x, point) {
        super(series, options, x);
        /* *
         *
         *  Properties
         *
         * */
        this.dataLabelOnNull = true;
        this.formatPrefix = 'link';
        this.isLink = true;
        this.node = {};
        this.formatPrefix = 'link';
        this.dataLabelOnNull = true;
        if (point) {
            this.fromNode = point.node.parentNode.point;
            this.visible = point.visible;
            this.toNode = point;
            this.id = this.toNode.id + '-' + this.fromNode.id;
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    update(options, redraw, animation, runEvent) {
        const oldOptions = {
            id: this.id,
            formatPrefix: this.formatPrefix
        };
        Point.prototype.update.call(this, options, this.isLink ? false : redraw, // Hold the redraw for nodes
        animation, runEvent);
        this.visible = this.toNode.visible;
        extend(this, oldOptions);
        if (pick(redraw, true)) {
            this.series.chart.redraw(animation);
        }
    }
}
/* *
 *
 *  Export Default
 *
 * */
export default LinkPoint;
