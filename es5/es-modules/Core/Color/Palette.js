/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import Color from './Color.js';
import H from '../Globals.js';
var charts = H.charts;
import PaletteDefaults from './PaletteDefaults.js';
import { diffObjects, extend, isString, objectEach, merge } from '../../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
var defaultColors = [
    '#2caffe',
    '#544fc5',
    '#00e272',
    '#fe6a35',
    '#6b8abc',
    '#d568fb',
    '#2ee0ca',
    '#fa4b42',
    '#feb56a',
    '#91e8e1'
];
var defaultDarkOverrideColors = [
    null, // Use the same color for the first item in dark mode
    '#00e272',
    '#efdf00'
];
/* *
 * Build the text content for the style tag
 */
var getStyles = function (specifier, cssVars) {
    var reduceToCSS = function (
    // For browsers that don't support color-scheme and light-dark, we need
    // to first set the CSS variables as the light scheme.
    supportsColorScheme) {
        var css = '';
        objectEach(cssVars.light, function (value, key) {
            css += supportsColorScheme && value !== cssVars.dark[key] ?
                "  ".concat(key, ": light-dark(").concat(value, ", ").concat(cssVars.dark[key], ");\n") :
                "  ".concat(key, ": ").concat(value, ";\n");
        });
        return css;
    };
    var legacy = reduceToCSS(), lightDark = reduceToCSS(true);
    var css = "".concat(specifier || ':root', " {\n").concat(legacy, "\n}\n@supports (color: light-dark(#fff, #000)) {\n  ").concat(specifier || ':root', " {\n").concat(lightDark, "\n  }\n}\n.highcharts-container {\n  color-scheme: light dark;\n}\n.highcharts-light .highcharts-container {\n  color-scheme: light;\n}\n.highcharts-dark .highcharts-container {\n  color-scheme: dark;\n}");
    return css;
};
/* *
 *
 *  Class
 *
 * */
/* eslint-disable valid-jsdoc */
/**
 * A Palette class holding the palette colors and lifecycle methods for each
 * chart.
 *
 * @class
 * @name Highcharts.Palette
 *
 * @param {Highcharts.Chart} chart
 *        The chart instance
 * @param {Highcharts.PaletteOptions} options
 *        Palette options
 */
var Palette = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function Palette(renderer, options) {
        this.defaultOptions = PaletteDefaults;
        this.options = merge(PaletteDefaults);
        this.cssVars = { light: {}, dark: {} };
        this.renderer = renderer;
        this.update(options);
    }
    /**
     * Inject the CSS for the palette into the document head or chart
     * container.
     *
     * @internal
     *
     * @param {Highcharts.PaletteOptions} options
     *        Palette options
     */
    Palette.prototype.injectCSS = function (options) {
        var _a, _b, _c, _d;
        var _e = this, cssVars = _e.cssVars, renderer = _e.renderer, hasSpecificPalette = Object.keys(diffObjects(options, this.defaultOptions)).length > 0, colorCount = Math.max(((_a = options.colors) === null || _a === void 0 ? void 0 : _a.length) || 0, defaultColors.length);
        var colorScheme = 'light';
        var addKebab = function (color, key) {
            if (isString(color)) {
                // Kebab-case the key. Sequences of numbers should be kept
                // but with a preceding dash.
                key = key
                    .replace(/([0-9]+)/g, '-$1')
                    .replace(/[A-Z]/g, function (match) { return "-".concat(match.toLowerCase()); });
                cssVars[colorScheme]["--highcharts-".concat(key)] = color;
            }
        };
        var _loop_1 = function (cScheme) {
            var paletteColors = options[cScheme] || {}, interpolated = {}, neutralColor = new Color((paletteColors === null || paletteColors === void 0 ? void 0 : paletteColors.neutralColor) || ''), backgroundColor = new Color((paletteColors === null || paletteColors === void 0 ? void 0 : paletteColors.backgroundColor) || ''), highlightColor = new Color((paletteColors === null || paletteColors === void 0 ? void 0 : paletteColors.highlightColor) || '');
            colorScheme = cScheme;
            // Interpolate keys
            [3, 5, 10, 20, 40, 60, 80, 100].forEach(function (fraction) {
                interpolated["neutralColor".concat(fraction)] = backgroundColor
                    .tweenTo(neutralColor, fraction / 100);
                interpolated["highlightColor".concat(fraction)] = backgroundColor
                    .tweenTo(highlightColor, fraction / 100);
            });
            // Extended data colors per scheme
            for (var i = 0; i < colorCount; i++) {
                var color = 
                // 1. priority to scheme-specific colors
                ((_b = paletteColors === null || paletteColors === void 0 ? void 0 : paletteColors.colors) === null || _b === void 0 ? void 0 : _b[i]) ||
                    (
                    // 2. then fall back to palette-level colors
                    (_c = options.colors) === null || _c === void 0 ? void 0 : _c[i]) ||
                    (
                    // 3. then fall back to dark default colors
                    (_d = (cScheme === 'dark' ? defaultDarkOverrideColors : [])) === null || _d === void 0 ? void 0 : _d[i]) ||
                    // 4. finally, use default colors
                    defaultColors[i];
                addKebab(color || '#888a', "color".concat(i));
            }
            // The rest are stored as named properties
            objectEach(paletteColors, addKebab);
            objectEach(interpolated, addKebab);
            // Default to the light scheme, the dark scheme doesn't define
            // all colors.
            if (cScheme === 'light') {
                extend(cssVars.dark, cssVars.light);
            }
        };
        for (var _i = 0, _f = ['light', 'dark']; _i < _f.length; _i++) {
            var cScheme = _f[_i];
            _loop_1(cScheme);
        }
        // Add a style tag to the chart renderer box
        var defs = renderer.defs.element, specifier = hasSpecificPalette ?
            "*[data-highcharts-chart=\"".concat(renderer.chartIndex, "\"]") :
            '', style = defs
            .querySelector('style.highcharts-palette') ||
            renderer.box.ownerDocument.createElement('style');
        if (!style.parentNode) {
            style.nonce = 'highcharts';
            style.className = 'highcharts-palette';
            defs.appendChild(style);
        }
        style.textContent = getStyles(specifier, cssVars);
    };
    /**
     * Update the palette with new options. May be called directly as
     * `chart.palette.update()` or indirectly from `chart.update({ palette })`.
     *
     * @function Highcharts.Palette#update
     *
     * @param {Highcharts.PaletteOptions} options
     *        New palette options
     */
    Palette.prototype.update = function (options) {
        var renderTo = this.renderer.box.parentElement, chart = charts === null || charts === void 0 ? void 0 : charts[this.renderer.chartIndex];
        options = merge(true, this.options, options);
        if (chart) {
            chart.options.palette = options;
        }
        if (options.injectCSS !== false) {
            this.injectCSS(options);
        }
        if (renderTo) {
            if (isString(options.colorScheme) &&
                ['light', 'dark', 'inherit'].includes(options.colorScheme)) {
                renderTo.style.colorScheme = options.colorScheme;
            }
            else {
                renderTo.style.removeProperty('color-scheme');
            }
        }
    };
    return Palette;
}());
export default Palette;
