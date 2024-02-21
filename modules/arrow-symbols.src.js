/**
 * @license Highcharts JS v11.3.0 (2024-01-10)
 *
 * Arrow Symbols
 *
 * (c) 2017-2024 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */
(function (factory) {
    if (typeof module === 'object' && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define('highcharts/modules/arrow-symbols', ['highcharts'], function (Highcharts) {
            factory(Highcharts);
            factory.Highcharts = Highcharts;
            return factory;
        });
    } else {
        factory(typeof Highcharts !== 'undefined' ? Highcharts : undefined);
    }
}(function (Highcharts) {
    'use strict';
    var _modules = Highcharts ? Highcharts._modules : {};
    function _registerModule(obj, path, args, fn) {
        if (!obj.hasOwnProperty(path)) {
            obj[path] = fn.apply(null, args);

            if (typeof CustomEvent === 'function') {
                window.dispatchEvent(new CustomEvent(
                    'HighchartsModuleLoaded',
                    { detail: { path: path, module: obj[path] } }
                ));
            }
        }
    }
    _registerModule(_modules, 'Extensions/ArrowSymbols.js', [_modules['Core/Globals.js'], _modules['Core/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2017 Highsoft AS
         *  Authors: Lars A. V. Cabrera
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        const { composed } = H;
        const { pushUnique } = U;
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Creates an arrow symbol. Like a triangle, except not filled.
         * ```
         *                   o
         *             o
         *       o
         * o
         *       o
         *             o
         *                   o
         * ```
         *
         * @private
         * @function
         *
         * @param {number} x
         *        x position of the arrow
         *
         * @param {number} y
         *        y position of the arrow
         *
         * @param {number} w
         *        width of the arrow
         *
         * @param {number} h
         *        height of the arrow
         *
         * @return {Highcharts.SVGPathArray}
         *         Path array
         */
        function arrow(x, y, w, h) {
            return [
                ['M', x, y + h / 2],
                ['L', x + w, y],
                ['L', x, y + h / 2],
                ['L', x + w, y + h]
            ];
        }
        /**
         * Creates a half-width arrow symbol. Like a triangle, except not filled.
         * ```
         *       o
         *    o
         * o
         *    o
         *       o
         * ```
         *
         * @private
         * @function
         *
         * @param {number} x
         *        x position of the arrow
         *
         * @param {number} y
         *        y position of the arrow
         *
         * @param {number} w
         *        width of the arrow
         *
         * @param {number} h
         *        height of the arrow
         *
         * @return {Highcharts.SVGPathArray}
         *         Path array
         */
        function arrowHalf(x, y, w, h) {
            return arrow(x, y, w / 2, h);
        }
        /**
         * @private
         */
        function compose(SVGRendererClass) {
            if (pushUnique(composed, compose)) {
                const symbols = SVGRendererClass.prototype.symbols;
                symbols.arrow = arrow;
                symbols['arrow-filled'] = triangleLeft;
                symbols['arrow-filled-half'] = triangleLeftHalf;
                symbols['arrow-half'] = arrowHalf;
                symbols['triangle-left'] = triangleLeft;
                symbols['triangle-left-half'] = triangleLeftHalf;
            }
        }
        /**
         * Creates a left-oriented triangle.
         * ```
         *             o
         *       ooooooo
         * ooooooooooooo
         *       ooooooo
         *             o
         * ```
         *
         * @private
         * @function
         *
         * @param {number} x
         *        x position of the triangle
         *
         * @param {number} y
         *        y position of the triangle
         *
         * @param {number} w
         *        width of the triangle
         *
         * @param {number} h
         *        height of the triangle
         *
         * @return {Highcharts.SVGPathArray}
         *         Path array
         */
        function triangleLeft(x, y, w, h) {
            return [
                ['M', x + w, y],
                ['L', x, y + h / 2],
                ['L', x + w, y + h],
                ['Z']
            ];
        }
        /**
         * Creates a half-width, left-oriented triangle.
         * ```
         *       o
         *    oooo
         * ooooooo
         *    oooo
         *       o
         * ```
         *
         * @private
         * @function
         *
         * @param {number} x
         *        x position of the triangle
         *
         * @param {number} y
         *        y position of the triangle
         *
         * @param {number} w
         *        width of the triangle
         *
         * @param {number} h
         *        height of the triangle
         *
         * @return {Highcharts.SVGPathArray}
         *         Path array
         */
        function triangleLeftHalf(x, y, w, h) {
            return triangleLeft(x, y, w / 2, h);
        }
        /* *
         *
         *  Default Export
         *
         * */
        const ArrowSymbols = {
            compose
        };

        return ArrowSymbols;
    });
    _registerModule(_modules, 'masters/modules/arrow-symbols.src.js', [_modules['Core/Globals.js'], _modules['Extensions/ArrowSymbols.js']], function (Highcharts, ArrowSymbols) {

        const G = Highcharts;
        ArrowSymbols.compose(G.SVGRenderer);

    });
}));