/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Authors: Kamil Musialowski, Markus Barstad
 *
 *  Shared cross marker symbol registration used by series modules.
 *  This keeps `cross` out of Core SVG symbols while allowing modules
 *  like PointAndFigure and Contour to compose it when needed.
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import H from '../Core/Globals.js';
import { pushUnique } from '../Shared/Utilities.js';
const { composed } = H;
/* *
 *
 *  Composition
 *
 * */
var CrossSymbol;
(function (CrossSymbol) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Register the shared `cross` symbol on a renderer class.
     *
     * @private
     */
    function compose(SVGRendererClass) {
        if (pushUnique(composed, 'Series.CrossSymbol')) {
            SVGRendererClass.prototype.symbols.cross = cross;
        }
    }
    CrossSymbol.compose = compose;
    /**
     * Cross marker path.
     * @private
     */
    function cross(x, y, w, h) {
        return [
            ['M', x, y],
            ['L', x + w, y + h],
            ['M', x + w, y],
            ['L', x, y + h],
            ['Z']
        ];
    }
})(CrossSymbol || (CrossSymbol = {}));
/* *
 *
 *  Default Export
 *
 * */
export default CrossSymbol;
