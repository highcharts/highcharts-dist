/* *
 *
 *  Highcharts cylinder - a 3D series
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Kacper Madej
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import Color from '../../Core/Color/Color.js';
const { parse: color } = Color;
import SVGElement3D from '../../Core/Renderer/SVG/SVGElement3D.js';
/* *
 *
 *  Class
 *
 * */
class SVGElement3DCylinder extends SVGElement3D {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        super(...arguments);
        this.parts = ['top', 'bottom', 'front', 'back'];
        this.pathType = 'cylinder';
    }
    /* *
     *
     *  Functions
     *
     * */
    fillSetter(fill) {
        this.singleSetterForParts('fill', null, {
            front: fill,
            back: fill,
            top: color(fill).brighten(0.1).get(),
            bottom: color(fill).brighten(-0.1).get()
        });
        // Fill for animation getter (#6776)
        this.color = this.fill = fill;
        return this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default SVGElement3DCylinder;
