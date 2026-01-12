/* *
 *
 *  Plugin for resizing axes / panes in a chart.
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Kacper Madej
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import AxisResizer from './AxisResizer.js';
import AxisResizerDefaults from './AxisResizerDefaults.js';
import D from '../../Core/Defaults.js';
const { defaultOptions } = D;
import U from '../../Core/Utilities.js';
const { addEvent, merge, wrap } = U;
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function compose(AxisClass, PointerClass) {
    if (!AxisClass.keepProps.includes('resizer')) {
        merge(true, defaultOptions.yAxis, AxisResizerDefaults);
        // Keep resizer reference on axis update
        AxisClass.keepProps.push('resizer');
        addEvent(AxisClass, 'afterRender', onAxisAfterRender);
        addEvent(AxisClass, 'destroy', onAxisDestroy);
        wrap(PointerClass.prototype, 'runPointActions', wrapPointerRunPointActions);
        wrap(PointerClass.prototype, 'drag', wrapPointerDrag);
    }
}
/**
 * Add new AxisResizer, update or remove it
 * @internal
 */
function onAxisAfterRender() {
    const axis = this, resizer = axis.resizer, resizerOptions = axis.options.resize;
    if (resizerOptions) {
        const enabled = resizerOptions.enabled !== false;
        if (resizer) {
            // Resizer present and enabled
            if (enabled) {
                // Update options
                resizer.init(axis, true);
                // Resizer present, but disabled
            }
            else {
                // Destroy the resizer
                resizer.destroy();
            }
        }
        else {
            // Resizer not present and enabled
            if (enabled) {
                // Add new resizer
                axis.resizer = new AxisResizer(axis);
            }
            // Resizer not present and disabled, so do nothing
        }
    }
}
/**
 * Clear resizer on axis remove.
 * @internal
 */
function onAxisDestroy(e) {
    const axis = this;
    if (!e.keepEvents && axis.resizer) {
        axis.resizer.destroy();
    }
}
/**
 * Prevent default drag action detection while dragging a control line of
 * AxisResizer. (#7563)
 * @internal
 */
function wrapPointerDrag(proceed) {
    const pointer = this;
    if (!pointer.chart.activeResizer) {
        proceed.apply(pointer, [].slice.call(arguments, 1));
    }
}
/**
 * Prevent any hover effects while dragging a control line of AxisResizer.
 * @internal
 */
function wrapPointerRunPointActions(proceed) {
    const pointer = this;
    if (!pointer.chart.activeResizer) {
        proceed.apply(pointer, [].slice.call(arguments, 1));
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const DragPanes = {
    compose
};
/** @internal */
export default DragPanes;
