/* *
 *
 *  Orthographic projection
 *
 *  (c) 2021-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *  Authors:
 *  - Torstein Honsi
 *
 * */
'use strict';
/* *
 *
 *  Constants
 *
 * */
const deg2rad = Math.PI / 180, scale = 63.78460826781007;
/* *
 *
 *  Class
 *
 * */
/**
 * The orthographic projection is an azimuthal perspective projection,
 * projecting the Earth's surface from an infinite distance to a plane.
 * It gives the illusion of a three-dimensional globe.
 *
 * Its disadvantage is that it fails to render the whole world in one view.
 * However, since the distortion is small at the center of the view, it is great
 * at rendering limited areas of the globe, or at showing the positions of areas
 * on the globe.
 *
 * @class
 * @name Highcharts.Orthographic
 */
class Orthographic {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        /** @internal */
        this.antimeridianCutting = false;
        /** @internal */
        this.bounds = {
            x1: -scale,
            x2: scale,
            y1: -scale,
            y2: scale
        };
    }
    /* *
     *
     *  Functions
     *
     * */
    forward(lonLat) {
        const lonDeg = lonLat[0], latDeg = lonLat[1], lat = latDeg * deg2rad, xy = [
            Math.cos(lat) * Math.sin(lonDeg * deg2rad) * scale,
            Math.sin(lat) * scale
        ];
        if (lonDeg < -90 || lonDeg > 90) {
            xy.outside = true;
        }
        return xy;
    }
    inverse(xy) {
        const x = xy[0] / scale, y = xy[1] / scale, z = Math.sqrt(x * x + y * y), c = Math.asin(z), cSin = Math.sin(c), cCos = Math.cos(c);
        return [
            Math.atan2(x * cSin, z * cCos) / deg2rad,
            Math.asin(z && y * cSin / z) / deg2rad
        ];
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default Orthographic;
