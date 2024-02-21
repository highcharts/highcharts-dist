/**
 * @license Highstock JS v11.3.0 (2024-01-10)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */
(function (factory) {
    if (typeof module === 'object' && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define('highcharts/indicators/wma', ['highcharts', 'highcharts/modules/stock'], function (Highcharts) {
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
    _registerModule(_modules, 'Stock/Indicators/WMA/WMAIndicator.js', [_modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (SeriesRegistry, U) {
        /* *
         *
         *  (c) 2010-2024 Kacper Madej
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        const { sma: SMAIndicator } = SeriesRegistry.seriesTypes;
        const { isArray, merge } = U;
        /* *
         *
         *  Functions
         *
         * */
        // Utils:
        /**
         * @private
         */
        function accumulateAverage(points, xVal, yVal, i, index) {
            const xValue = xVal[i], yValue = index < 0 ? yVal[i] : yVal[i][index];
            points.push([xValue, yValue]);
        }
        /**
         * @private
         */
        function weightedSumArray(array, pLen) {
            // The denominator is the sum of the number of days as a triangular number.
            // If there are 5 days, the triangular numbers are 5, 4, 3, 2, and 1.
            // The sum is 5 + 4 + 3 + 2 + 1 = 15.
            const denominator = (pLen + 1) / 2 * pLen;
            // reduce VS loop => reduce
            return array.reduce(function (prev, cur, i) {
                return [null, prev[1] + cur[1] * (i + 1)];
            })[1] / denominator;
        }
        /**
         * @private
         */
        function populateAverage(points, xVal, yVal, i) {
            const pLen = points.length, wmaY = weightedSumArray(points, pLen), wmaX = xVal[i - 1];
            points.shift(); // remove point until range < period
            return [wmaX, wmaY];
        }
        /* *
         *
         *  Class
         *
         * */
        /**
         * The SMA series type.
         *
         * @private
         * @class
         * @name Highcharts.seriesTypes.wma
         *
         * @augments Highcharts.Series
         */
        class WMAIndicator extends SMAIndicator {
            /* *
             *
             *  Functions
             *
             * */
            getValues(series, params) {
                const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, xValue = xVal[0], wma = [], xData = [], yData = [];
                let range = 1, index = -1, i, wmaPoint, yValue = yVal[0];
                if (xVal.length < period) {
                    return;
                }
                // Switch index for OHLC / Candlestick
                if (isArray(yVal[0])) {
                    index = params.index;
                    yValue = yVal[0][index];
                }
                // Starting point
                const points = [[xValue, yValue]];
                // Accumulate first N-points
                while (range !== period) {
                    accumulateAverage(points, xVal, yVal, range, index);
                    range++;
                }
                // Calculate value one-by-one for each period in visible data
                for (i = range; i < yValLen; i++) {
                    wmaPoint = populateAverage(points, xVal, yVal, i);
                    wma.push(wmaPoint);
                    xData.push(wmaPoint[0]);
                    yData.push(wmaPoint[1]);
                    accumulateAverage(points, xVal, yVal, i, index);
                }
                wmaPoint = populateAverage(points, xVal, yVal, i);
                wma.push(wmaPoint);
                xData.push(wmaPoint[0]);
                yData.push(wmaPoint[1]);
                return {
                    values: wma,
                    xData: xData,
                    yData: yData
                };
            }
        }
        /* *
         *
         *  Static Properties
         *
         * */
        /**
         * Weighted moving average indicator (WMA). This series requires `linkedTo`
         * option to be set.
         *
         * @sample stock/indicators/wma
         *         Weighted moving average indicator
         *
         * @extends      plotOptions.sma
         * @since        6.0.0
         * @product      highstock
         * @requires     stock/indicators/indicators
         * @requires     stock/indicators/wma
         * @optionparent plotOptions.wma
         */
        WMAIndicator.defaultOptions = merge(SMAIndicator.defaultOptions, {
            params: {
                index: 3,
                period: 9
            }
        });
        SeriesRegistry.registerSeriesType('wma', WMAIndicator);
        /* *
         *
         *  Default Export
         *
         * */
        /* *
         *
         *  API Options
         *
         * */
        /**
         * A `WMA` series. If the [type](#series.wma.type) option is not specified, it
         * is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.wma
         * @since     6.0.0
         * @product   highstock
         * @excluding dataParser, dataURL
         * @requires  stock/indicators/indicators
         * @requires  stock/indicators/wma
         * @apioption series.wma
         */
        ''; // adds doclet above to the transpiled file

        return WMAIndicator;
    });
    _registerModule(_modules, 'masters/indicators/wma.src.js', [], function () {


    });
}));