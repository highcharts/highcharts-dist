/* *
 *
 *  Highcharts variwide module
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
import H from '../../Core/Globals.js';
var composed = H.composed;
import { addEvent, pushUnique, wrap } from '../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function compose(AxisClass, TickClass) {
    if (pushUnique(composed, 'Variwide')) {
        var tickProto = TickClass.prototype;
        addEvent(AxisClass, 'afterDrawCrosshair', onAxisAfterDrawCrosshair);
        addEvent(AxisClass, 'afterRender', onAxisAfterRender);
        addEvent(TickClass, 'afterGetPosition', onTickAfterGetPosition);
        tickProto.postTranslate = tickPostTranslate;
        wrap(tickProto, 'getLabelPosition', wrapTickGetLabelPosition);
    }
}
/**
 * Same width as the category (#8083)
 * @private
 */
function onAxisAfterDrawCrosshair(e) {
    var _a;
    if (this.variwide && this.cross) {
        this.cross.attr('stroke-width', (_a = e.point) === null || _a === void 0 ? void 0 : _a.crosshairWidth);
    }
}
/**
 * On a vertical axis, apply anti-collision logic to the labels.
 * @private
 */
function onAxisAfterRender() {
    var axis = this;
    this.chart.labelCollectors.push(function () {
        return axis.variwide ? axis.tickPositions
            .filter(function (pos) { return !!axis.ticks[pos].label; })
            .map(function (pos, i) {
            var _a;
            var label = axis.ticks[pos].label;
            label.labelrank = (_a = axis.zData) === null || _a === void 0 ? void 0 : _a[i];
            return label;
        }) : [];
    });
}
/**
 * @private
 */
function onTickAfterGetPosition(e) {
    var axis = this.axis, xOrY = axis.horiz ? 'x' : 'y';
    if (axis.variwide) {
        this[xOrY + 'Orig'] = e.pos[xOrY];
        this.postTranslate(e.pos, xOrY, this.pos);
    }
}
/**
 * @private
 */
function tickPostTranslate(xy, xOrY, index) {
    var axis = this.axis;
    var pos = xy[xOrY] - axis.pos;
    if (!axis.horiz) {
        pos = axis.len - pos;
    }
    pos = axis.series[0].postTranslate(index, pos);
    if (!axis.horiz) {
        pos = axis.len - pos;
    }
    xy[xOrY] = axis.pos + pos;
}
/**
 * @private
 */
function wrapTickGetLabelPosition(proceed, _x, _y, _label, horiz, 
/* eslint-disable @typescript-eslint/no-unused-vars */
_labelOptions, _tickmarkOffset, _index
/* eslint-enable @typescript-eslint/no-unused-vars */
) {
    var args = Array.prototype.slice.call(arguments, 1), xOrY = horiz ? 'x' : 'y';
    // Replace the x with the original x
    if (this.axis.variwide &&
        typeof this[xOrY + 'Orig'] === 'number') {
        args[horiz ? 0 : 1] = this[xOrY + 'Orig'];
    }
    var xy = proceed.apply(this, args);
    // Post-translate
    if (this.axis.variwide && this.axis.categories) {
        this.postTranslate(xy, xOrY, this.pos);
    }
    return xy;
}
/* *
 *
 *  Default Export
 *
 * */
var VariwideComposition = {
    compose: compose
};
export default VariwideComposition;
