/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  Extension for 3d axes
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import H from '../Globals.js';
const { composed } = H;
import U from '../Utilities.js';
const { addEvent, extend, pushUnique, wrap } = U;
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function compose(TickClass) {
    if (pushUnique(composed, 'Axis.Tick3D')) {
        addEvent(TickClass, 'afterGetLabelPosition', onTickAfterGetLabelPosition);
        wrap(TickClass.prototype, 'getMarkPath', wrapTickGetMarkPath);
    }
}
/** @internal */
function onTickAfterGetLabelPosition(e) {
    const axis3D = this.axis.axis3D;
    if (axis3D) {
        extend(e.pos, axis3D.fix3dPosition(e.pos));
    }
}
/** @internal */
function wrapTickGetMarkPath(proceed) {
    const axis3D = this.axis.axis3D, path = proceed.apply(this, [].slice.call(arguments, 1));
    if (axis3D) {
        const start = path[0];
        const end = path[1];
        if (start[0] === 'M' && end[0] === 'L') {
            const pArr = [
                axis3D.fix3dPosition({ x: start[1], y: start[2], z: 0 }),
                axis3D.fix3dPosition({ x: end[1], y: end[2], z: 0 })
            ];
            return this.axis.chart.renderer.toLineSegments(pArr);
        }
    }
    return path;
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const Tick3DAdditions = {
    compose
};
/** @internal */
export default Tick3DAdditions;
