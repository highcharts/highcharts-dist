/* *
 *
 *  (c) 2016-2026 Highsoft AS
 *
 *  Author: Lars A. V. Cabrera
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import H from '../Core/Globals.js';
var composed = H.composed;
import { addEvent, merge, pushUnique, wrap } from '../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
/**
 * Show an indicator on the axis for the current date and time. Can be a
 * boolean or a configuration object similar to
 * [xAxis.plotLines](#xAxis.plotLines).
 *
 * @sample gantt/current-date-indicator/demo
 *         Current date indicator enabled
 * @sample gantt/current-date-indicator/object-config
 *         Current date indicator with custom options
 *
 * @declare   Highcharts.CurrentDateIndicatorOptions
 * @type      {boolean|CurrentDateIndicatorOptions}
 * @default   true
 * @extends   xAxis.plotLines
 * @excluding className, value
 * @product   gantt
 * @apioption xAxis.currentDateIndicator
 */
var defaultOptions = {
    /**
     * @type {Highcharts.ColorType}
     */
    color: 'var(--highcharts-highlight-color-20)',
    width: 2,
    /**
     * @declare Highcharts.AxisCurrentDateIndicatorLabelOptions
     */
    label: {
        /**
         * Format of the label. This options is passed as the first argument to
         * [dateFormat](/class-reference/Highcharts.Time#dateFormat) function.
         *
         * @type      {string|Intl.DateTimeFormatOptions}
         * @product   gantt
         * @default   %[abdYHM]
         * @apioption xAxis.currentDateIndicator.label.format
         */
        format: '%[abdYHM]',
        formatter: function (value, format) {
            return this.axis.chart.time.dateFormat(format || '', value, true);
        },
        rotation: 0,
        /**
         * @type {Highcharts.CSSObject}
         */
        style: {
            /** @internal */
            fontSize: '0.7em'
        }
    }
};
/* *
 *
 *  Functions
 *
 * */
/** @internal */
export function composeCurrentDateIndication(AxisClass, PlotLineOrBandClass) {
    if (pushUnique(composed, 'CurrentDateIndication')) {
        addEvent(AxisClass, 'afterSetOptions', onAxisAfterSetOptions);
        addEvent(PlotLineOrBandClass, 'render', onPlotLineOrBandRender);
        wrap(PlotLineOrBandClass.prototype, 'getLabelText', wrapPlotLineOrBandGetLabelText);
    }
}
/** @internal */
function onAxisAfterSetOptions() {
    var _a;
    var options = this.options, cdiOptions = options.currentDateIndicator;
    if (cdiOptions) {
        var plotLineOptions = typeof cdiOptions === 'object' ?
            merge(defaultOptions, cdiOptions) :
            merge(defaultOptions);
        plotLineOptions.value = Date.now();
        plotLineOptions.className = 'highcharts-current-date-indicator';
        (_a = options.plotLines) !== null && _a !== void 0 ? _a : (options.plotLines = []);
        options.plotLines.push(plotLineOptions);
    }
}
/** @internal */
function onPlotLineOrBandRender() {
    var _a;
    // If the label already exists, update its text
    (_a = this.label) === null || _a === void 0 ? void 0 : _a.attr({
        text: this.getLabelText(this.options.label || {})
    });
}
/** @internal */
function wrapPlotLineOrBandGetLabelText(defaultMethod, defaultLabelOptions) {
    var _a, _b, _c;
    if (this.options.className &&
        this.options.className.indexOf('highcharts-current-date-indicator') !== -1 &&
        typeof ((_a = this.options.label) === null || _a === void 0 ? void 0 : _a.formatter) === 'function') {
        var options = this.options;
        options.value = Date.now();
        return ((_c = (_b = options.label) === null || _b === void 0 ? void 0 : _b.formatter) === null || _c === void 0 ? void 0 : _c.call(this, options.value, options.label.format, this)) || '';
    }
    return defaultMethod.call(this, defaultLabelOptions);
}
