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
import CU from '../../Series/CenteredUtilities.js';
import PaneComposition from './PaneComposition.js';
import PaneDefaults from './PaneDefaults.js';
import { defined, extend, getAlignFactor, isNumber, merge, relativeLength, splat } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * The Pane object allows options that are common to a set of X and Y axes.
 *
 * In the future, this can be extended to basic Highcharts and Highcharts Stock.
 *
 * @internal
 * @class
 * @name Highcharts.Pane
 * @param {Highcharts.PaneOptions} options
 * @param {Highcharts.Chart} chart
 */
var Pane = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function Pane(options, chart) {
        this.coll = 'pane'; // Member of chart.pane
        this.init(options, chart);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initialize the Pane object
     *
     * @internal
     * @function Highcharts.Pane#init
     *
     * @param {Highcharts.PaneOptions} options
     *
     * @param {Highcharts.Chart} chart
     */
    Pane.prototype.init = function (options, chart) {
        this.chart = chart;
        this.background = [];
        chart.pane.push(this);
        this.setOptions(options);
    };
    /**
     * Check if the chart has a series of a specific type
     * @internal
     */
    Pane.prototype.hasSeriesType = function (type) {
        var _a, _b, _c, _d;
        return Boolean(((_b = (_a = this.chart.options) === null || _a === void 0 ? void 0 : _a.chart) === null || _b === void 0 ? void 0 : _b.type) === type ||
            ((_d = (_c = this.chart.options) === null || _c === void 0 ? void 0 : _c.series) === null || _d === void 0 ? void 0 : _d.some(function (s) { return s.type === type; })));
    };
    /**
     * Set options override. Angular charts have a default background (#3318)
     * and an inner size.
     *
     * @internal
     */
    Pane.prototype.setOptions = function (options) {
        this.options = merge(PaneDefaults.pane, this.chart.angular ? {
            // Add a single background element with default properties
            background: {},
            // An inner size for plot bands and axis layout
            innerSize: '85%'
        } : {}, options);
    };
    /**
     * Render the pane with its backgrounds.
     *
     * @internal
     * @function Highcharts.Pane#render
     */
    Pane.prototype.render = function () {
        var options = this.options, renderer = this.chart.renderer;
        if (!this.group) {
            this.group = renderer.g('pane-group')
                .attr({ zIndex: options.zIndex || 0 })
                .add();
        }
        this.updateCenter();
        var backgroundOption = this.options.background;
        // Render the backgrounds
        if (backgroundOption) {
            backgroundOption = splat(backgroundOption);
            var len = Math.max(backgroundOption.length, this.background.length || 0);
            for (var i = 0; i < len; i++) {
                // #6641 - if axis exists, chart is circular and apply
                // background
                if (backgroundOption[i] && this.axis) {
                    this.renderBackground(merge(PaneDefaults.background, 
                    // Defaults inherited from the `pane` option
                    {
                        borderRadius: this.options.borderRadius
                    }, backgroundOption[i]), i);
                }
                else if (this.background[i]) {
                    this.background[i] = this.background[i].destroy();
                    this.background.splice(i, 1);
                }
            }
        }
    };
    /**
     * Render an individual pane background.
     *
     * @internal
     * @function Highcharts.Pane#renderBackground
     *
     * @param {Highcharts.PaneBackgroundOptions} backgroundOptions
     *        Background options
     *
     * @param {number} i
     *        The index of the background in this.backgrounds
     */
    Pane.prototype.renderBackground = function (backgroundOptions, i) {
        var attribs = {
            'class': 'highcharts-pane ' + (backgroundOptions.className || '')
        };
        var method = 'animate';
        if (!this.chart.styledMode) {
            extend(attribs, {
                'fill': backgroundOptions.backgroundColor,
                'stroke': backgroundOptions.borderColor,
                'stroke-width': backgroundOptions.borderWidth
            });
        }
        if (!this.background[i]) {
            this.background[i] = this.chart.renderer
                .path()
                .add(this.group);
            method = 'attr';
        }
        this.background[i][method]({
            'd': this.axis.getPlotBandPath(backgroundOptions.from, backgroundOptions.to, backgroundOptions)
        }).attr(attribs);
    };
    /**
     * Gets the center for the pane and its axis.
     *
     * @internal
     * @function Highcharts.Pane#updateCenter
     */
    Pane.prototype.updateCenter = function () {
        var _this = this;
        var _a, _b, _c;
        var _d = this, axis = _d.axis, chart = _d.chart, options = _d.options, plotHeight = chart.plotHeight, plotWidth = chart.plotWidth, centerY = (_a = options.center) === null || _a === void 0 ? void 0 : _a[1], m = options.margin, labels = (_b = this.axis) === null || _b === void 0 ? void 0 : _b.options.labels, thickness = options.thickness, marginLoose = Array.isArray(m) ?
            m :
            [m, m, m, m], margin = [];
        var size = options.size, sizeFromAngle, appliedCenterMargin = 0, axisLabelMargin = 0;
        // Get the required margin in order to display the data label in or
        // below the center
        var dataLabelMargin = Math.min(chart.series
            .reduce(function (max, s) {
            var _a;
            if (!s.is('gauge') || ((_a = s.yAxis) === null || _a === void 0 ? void 0 : _a.pane) !== _this) {
                return max;
            }
            var dl = splat(s.options.dataLabels)[0];
            var dlMargin = 0;
            if (dl && dl.enabled !== false) {
                // 30 is an approximation of the default data label
                // height. It is not yet rendered.
                dlMargin = (1 - getAlignFactor(dl.verticalAlign)) * 30 +
                    (dl.y || 0);
            }
            return Math.max(max, dlMargin);
        }, 0), plotHeight * 0.3);
        // Get the required margin to make room for the radial axis labels.
        if (labels === null || labels === void 0 ? void 0 : labels.enabled) {
            var fontSize = String(((_c = labels.style) === null || _c === void 0 ? void 0 : _c.fontSize) || ''), 
            // Approximate the line height because we don't have the
            // actual label to measure
            lineHeightGuess = (/px$/.test(fontSize) ?
                parseFloat(fontSize) :
                /em$/.test(fontSize) ?
                    parseFloat(fontSize) * 12 :
                    12) * 1.2, // 1.2 is a line height approximation
            m_1 = Math.max(labels.distance || 0, 0) + lineHeightGuess / 2;
            axisLabelMargin = m_1;
        }
        marginLoose.forEach(function (m, i) {
            margin[i] = m !== null && m !== void 0 ? m : Math.max(axisLabelMargin || 0);
        });
        // Handle auto-positioning when size and center are undefined
        if (axis &&
            (size === void 0 || centerY === void 0)) {
            var endAngleRad = axis.endAngleRad, startAngleRad = axis.startAngleRad, deg2rad = Math.PI * 2 / 360, crossingBottom = (startAngleRad < Math.PI / 2 && endAngleRad > Math.PI / 2) ||
                // Circle background should fill out the plot area
                splat(options.background).some(function (b) { return (b === null || b === void 0 ? void 0 : b.shape) === 'circle'; }), maxAngle = crossingBottom ? Math.PI : Math.max(Math.abs(startAngleRad + Math.PI / 2), Math.abs(endAngleRad + Math.PI / 2)), sin = Math.sin(maxAngle - Math.PI / 2), 
            // The size doesn't increase further to angles below this
            // minimum. For linear gauges, this means that the pivot is kept
            // visible.
            minimumAngle = 90, sizeRatio = 0.5 + 0.5 * Math.max(sin, Math.sin(deg2rad * (minimumAngle - 90)));
            sizeFromAngle = (plotHeight - margin[0] - margin[2]) /
                sizeRatio;
            if (size === void 0) {
                size = Math.max(Math.min(sizeFromAngle, plotWidth - margin[1] - margin[3]), 1);
                // Make sure there is space for the data label (centerMargin)
                var overflow = size + margin[0] + margin[2] +
                    2 * (dataLabelMargin - plotHeight);
                if (overflow > 0) {
                    appliedCenterMargin = overflow;
                    size = Math.max(1, size - appliedCenterMargin);
                }
            }
        }
        // Run the standard centering
        this.center = (axis ||
            {}).center = CU.getCenter.call(this);
        // Apply the auto-positioning
        if (isNumber(size) && size >= 0) {
            this.center[2] = size;
            if (isNumber(thickness)) {
                this.center[3] = this.center[2] - thickness * 2;
            }
            else {
                this.center[3] = Math.min(size, relativeLength(options.innerSize || 0, size));
            }
        }
        if (!defined(centerY)) {
            if (options.size) {
                this.center[1] = plotHeight / 2;
            }
            else if (isNumber(sizeFromAngle)) {
                this.center[1] = (sizeFromAngle +
                    this.center[2] -
                    appliedCenterMargin) / 4 + margin[0];
            }
        }
    };
    /**
     * Destroy the pane item
     *
     * @ignore
     * @internal
     * @function Highcharts.Pane#destroy
     * /
    destroy: function () {
        erase(this.chart.pane, this);
        this.background.forEach(function (background) {
            background.destroy();
        });
        this.background.length = 0;
        this.group = this.group.destroy();
    },
    */
    /**
     * Update the pane item with new options
     *
     * @internal
     * @function Highcharts.Pane#update
     * @param {Highcharts.PaneOptions} options
     *        New pane options
     * @param {boolean} [redraw]
     */
    Pane.prototype.update = function (options, redraw) {
        merge(true, this.options, options);
        this.setOptions(this.options);
        this.render();
        this.chart.axes.forEach(function (axis) {
            if (axis.pane === this) {
                axis.pane = null;
                axis.update({}, redraw);
            }
        }, this);
    };
    /* *
     *
     *  Static Properties
     *
     * */
    Pane.compose = PaneComposition.compose;
    return Pane;
}());
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default Pane;
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @typedef {"arc"|"circle"|"solid"} Highcharts.PaneBackgroundShapeValue
 */
''; // Keeps doclets above in JS file
