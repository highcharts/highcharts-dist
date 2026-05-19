/* *
 *
 *  Exporting module
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
 *  Composition
 *
 * */
/** @internal */
var ExportingSymbols;
(function (ExportingSymbols) {
    /* *
     *
     *  Constants
     *
     * */
    const modifiedClasses = [];
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @internal
     */
    function compose(SVGRendererClass) {
        if (modifiedClasses.indexOf(SVGRendererClass) === -1) {
            modifiedClasses.push(SVGRendererClass);
            const symbols = SVGRendererClass.prototype.symbols;
            symbols.menu = menu;
            symbols.menuball = menuball.bind(symbols);
        }
    }
    ExportingSymbols.compose = compose;
    /**
     * @internal
     */
    function menu(x, y, width, height) {
        const arr = [
            ['M', x, y + 2.5],
            ['L', x + width, y + 2.5],
            ['M', x, y + height / 2 + 0.5],
            ['L', x + width, y + height / 2 + 0.5],
            ['M', x, y + height - 1.5],
            ['L', x + width, y + height - 1.5]
        ];
        return arr;
    }
    /**
     * @internal
     */
    function menuball(x, y, width, height) {
        const h = (height / 3) - 2;
        let path = [];
        path = path.concat(this.circle(width - h, y, h, h), this.circle(width - h, y + h + 4, h, h), this.circle(width - h, y + 2 * (h + 4), h, h));
        return path;
    }
})(ExportingSymbols || (ExportingSymbols = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default ExportingSymbols;
