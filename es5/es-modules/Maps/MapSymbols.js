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
/* *
 *
 *  Variables
 *
 * */
var symbols;
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function bottomButton(x, y, w, h, options) {
    if (options) {
        var r = (options === null || options === void 0 ? void 0 : options.r) || 0;
        options.brBoxY = y - r;
        options.brBoxHeight = h + r;
    }
    return symbols.roundedRect(x, y, w, h, options);
}
/** @internal */
function compose(SVGRendererClass) {
    symbols = SVGRendererClass.prototype.symbols;
    symbols.bottombutton = bottomButton;
    symbols.topbutton = topButton;
}
/** @internal */
function topButton(x, y, w, h, options) {
    if (options) {
        var r = (options === null || options === void 0 ? void 0 : options.r) || 0;
        options.brBoxHeight = h + r;
    }
    return symbols.roundedRect(x, y, w, h, options);
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var MapSymbols = {
    compose: compose
};
/** @internal */
export default MapSymbols;
