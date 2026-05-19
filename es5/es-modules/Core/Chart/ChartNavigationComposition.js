/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Paweł Fus
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 * */
'use strict';
/* *
 *
 *  Composition
 *
 * */
/** @internal */
var ChartNavigationComposition;
(function (ChartNavigationComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    function compose(chart) {
        if (!chart.navigation) {
            chart.navigation = new Additions(chart);
        }
        return chart;
    }
    ChartNavigationComposition.compose = compose;
    /* *
     *
     *  Class
     *
     * */
    /**
     * Initializes `chart.navigation` object which delegates `update()` methods
     * to all other common classes (used in exporting and navigationBindings).
     * @internal
     */
    var Additions = /** @class */ (function () {
        /* *
         *
         *  Constructor
         *
         * */
        /** @internal */
        function Additions(chart) {
            /** @internal */
            this.updates = [];
            this.chart = chart;
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Registers an `update()` method in the `chart.navigation` object.
         *
         * @internal
         * @param {UpdateFunction} updateFn
         * The `update()` method that will be called in `chart.update()`.
         */
        Additions.prototype.addUpdate = function (updateFn) {
            this.chart.navigation.updates.push(updateFn);
        };
        /** @internal */
        Additions.prototype.update = function (options, redraw) {
            var _this = this;
            this.updates.forEach(function (updateFn) {
                updateFn.call(_this.chart, options, redraw);
            });
        };
        return Additions;
    }());
    ChartNavigationComposition.Additions = Additions;
})(ChartNavigationComposition || (ChartNavigationComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default ChartNavigationComposition;
