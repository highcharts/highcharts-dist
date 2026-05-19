/* *
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
/**
 * Compute bounds from a path element.
 *
 * @internal
 */
var boundsFromPath = function (path) {
    var x2 = -Number.MAX_VALUE, x1 = Number.MAX_VALUE, y2 = -Number.MAX_VALUE, y1 = Number.MAX_VALUE, validBounds;
    path.forEach(function (seg) {
        var x = seg[seg.length - 2], y = seg[seg.length - 1];
        if (typeof x === 'number' &&
            typeof y === 'number') {
            x1 = Math.min(x1, x);
            x2 = Math.max(x2, x);
            y1 = Math.min(y1, y);
            y2 = Math.max(y2, y);
            validBounds = true;
        }
    });
    if (validBounds) {
        return { x1: x1, y1: y1, x2: x2, y2: y2 };
    }
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var MapUtilities = {
    boundsFromPath: boundsFromPath
};
/** @internal */
export default MapUtilities;
