/**
 * @license Highstock JS v11.3.0 (2024-01-10)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Pawel Fus, Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */
(function (factory) {
    if (typeof module === 'object' && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define('highcharts/indicators/indicators', ['highcharts', 'highcharts/modules/stock'], function (Highcharts) {
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
    _registerModule(_modules, 'Stock/Indicators/SMA/SMAIndicator.js', [_modules['Core/Chart/Chart.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (Chart, SeriesRegistry, U) {
        /* *
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        const { line: LineSeries } = SeriesRegistry.seriesTypes;
        const { addEvent, fireEvent, error, extend, isArray, merge, pick, splat } = U;
        /* *
         *
         *  Class
         *
         * */
        /**
         * The SMA series type.
         *
         * @private
         */
        class SMAIndicator extends LineSeries {
            /* *
             *
             *  Functions
             *
             * */
            /**
             * @private
             */
            destroy() {
                this.dataEventsToUnbind.forEach(function (unbinder) {
                    unbinder();
                });
                super.destroy.apply(this, arguments);
            }
            /**
             * @private
             */
            getName() {
                const params = [];
                let name = this.name;
                if (!name) {
                    (this.nameComponents || []).forEach(function (component, index) {
                        params.push(this.options.params[component] +
                            pick(this.nameSuffixes[index], ''));
                    }, this);
                    name = (this.nameBase || this.type.toUpperCase()) +
                        (this.nameComponents ? ' (' + params.join(', ') + ')' : '');
                }
                return name;
            }
            /**
             * @private
             */
            getValues(series, params) {
                const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal.length, SMA = [], xData = [], yData = [];
                let i, index = -1, range = 0, SMAPoint, sum = 0;
                if (xVal.length < period) {
                    return;
                }
                // Switch index for OHLC / Candlestick / Arearange
                if (isArray(yVal[0])) {
                    index = params.index ? params.index : 0;
                }
                // Accumulate first N-points
                while (range < period - 1) {
                    sum += index < 0 ? yVal[range] : yVal[range][index];
                    range++;
                }
                // Calculate value one-by-one for each period in visible data
                for (i = range; i < yValLen; i++) {
                    sum += index < 0 ? yVal[i] : yVal[i][index];
                    SMAPoint = [xVal[i], sum / period];
                    SMA.push(SMAPoint);
                    xData.push(SMAPoint[0]);
                    yData.push(SMAPoint[1]);
                    sum -= (index < 0 ?
                        yVal[i - range] :
                        yVal[i - range][index]);
                }
                return {
                    values: SMA,
                    xData: xData,
                    yData: yData
                };
            }
            /**
             * @private
             */
            init(chart, options) {
                const indicator = this;
                super.init.call(indicator, chart, options);
                // Only after series are linked indicator can be processed.
                const linkedSeriesUnbiner = addEvent(Chart, 'afterLinkSeries', function ({ isUpdating }) {
                    // #18643 indicator shouldn't recalculate
                    // values while series updating.
                    if (isUpdating) {
                        return;
                    }
                    const hasEvents = !!indicator.dataEventsToUnbind.length;
                    if (indicator.linkedParent) {
                        if (!hasEvents) {
                            // No matter which indicator, always recalculate after
                            // updating the data.
                            indicator.dataEventsToUnbind.push(addEvent(indicator.linkedParent, 'updatedData', function () {
                                indicator.recalculateValues();
                            }));
                            // Some indicators (like VBP) requires an additional
                            // event (afterSetExtremes) to properly show the data.
                            if (indicator.calculateOn.xAxis) {
                                indicator.dataEventsToUnbind.push(addEvent(indicator.linkedParent.xAxis, indicator.calculateOn.xAxis, function () {
                                    indicator.recalculateValues();
                                }));
                            }
                        }
                        // Most indicators are being calculated on chart's init.
                        if (indicator.calculateOn.chart === 'init') {
                            if (!indicator.processedYData) {
                                indicator.recalculateValues();
                            }
                        }
                        else if (!hasEvents) {
                            // Some indicators (like VBP) has to recalculate their
                            // values after other chart's events (render).
                            const unbinder = addEvent(indicator.chart, indicator.calculateOn.chart, function () {
                                indicator.recalculateValues();
                                // Call this just once.
                                unbinder();
                            });
                        }
                    }
                    else {
                        return error('Series ' +
                            indicator.options.linkedTo +
                            ' not found! Check `linkedTo`.', false, chart);
                    }
                }, {
                    order: 0
                });
                // Make sure we find series which is a base for an indicator
                // chart.linkSeries();
                indicator.dataEventsToUnbind = [];
                indicator.eventsToUnbind.push(linkedSeriesUnbiner);
            }
            /**
             * @private
             */
            recalculateValues() {
                const croppedDataValues = [], indicator = this, oldData = indicator.points || [], oldDataLength = (indicator.xData || []).length, emptySet = {
                    values: [],
                    xData: [],
                    yData: []
                };
                let overwriteData = true, oldFirstPointIndex, oldLastPointIndex, croppedData, min, max, i;
                // Updating an indicator with redraw=false may destroy data.
                // If there will be a following update for the parent series,
                // we will try to access Series object without any properties
                // (except for prototyped ones). This is what happens
                // for example when using Axis.setDataGrouping(). See #16670
                const processedData = indicator.linkedParent.options &&
                    indicator.linkedParent.yData && // #18176, #18177 indicators should
                    indicator.linkedParent.yData.length ? // work with empty dataset
                    (indicator.getValues(indicator.linkedParent, indicator.options.params) || emptySet) : emptySet;
                // We need to update points to reflect changes in all,
                // x and y's, values. However, do it only for non-grouped
                // data - grouping does it for us (#8572)
                if (oldDataLength &&
                    !indicator.hasGroupedData &&
                    indicator.visible &&
                    indicator.points) {
                    // When data is cropped update only avaliable points (#9493)
                    if (indicator.cropped) {
                        if (indicator.xAxis) {
                            min = indicator.xAxis.min;
                            max = indicator.xAxis.max;
                        }
                        croppedData = indicator.cropData(processedData.xData, processedData.yData, min, max);
                        for (i = 0; i < croppedData.xData.length; i++) {
                            // (#10774)
                            croppedDataValues.push([
                                croppedData.xData[i]
                            ].concat(splat(croppedData.yData[i])));
                        }
                        oldFirstPointIndex = processedData.xData.indexOf(indicator.xData[0]);
                        oldLastPointIndex = processedData.xData.indexOf(indicator.xData[indicator.xData.length - 1]);
                        // Check if indicator points should be shifted (#8572)
                        if (oldFirstPointIndex === -1 &&
                            oldLastPointIndex === processedData.xData.length - 2) {
                            if (croppedDataValues[0][0] === oldData[0].x) {
                                croppedDataValues.shift();
                            }
                        }
                        indicator.updateData(croppedDataValues);
                    }
                    else if (indicator.updateAllPoints || // #18710
                        // Omit addPoint() and removePoint() cases
                        processedData.xData.length !== oldDataLength - 1 &&
                            processedData.xData.length !== oldDataLength + 1) {
                        overwriteData = false;
                        indicator.updateData(processedData.values);
                    }
                }
                if (overwriteData) {
                    indicator.xData = processedData.xData;
                    indicator.yData = processedData.yData;
                    indicator.options.data = processedData.values;
                }
                // Removal of processedXData property is required because on
                // first translate processedXData array is empty
                if (indicator.calculateOn.xAxis && indicator.processedXData) {
                    delete indicator.processedXData;
                    indicator.isDirty = true;
                    indicator.redraw();
                }
                indicator.isDirtyData = !!indicator.linkedSeries.length;
                fireEvent(indicator, 'updatedData'); // #18689
            }
            /**
             * @private
             */
            processData() {
                const series = this, compareToMain = series.options.compareToMain, linkedParent = series.linkedParent;
                super.processData.apply(series, arguments);
                if (series.dataModify &&
                    linkedParent &&
                    linkedParent.dataModify &&
                    linkedParent.dataModify.compareValue &&
                    compareToMain) {
                    series.dataModify.compareValue =
                        linkedParent.dataModify.compareValue;
                }
                return;
            }
        }
        /* *
         *
         *  Static Properties
         *
         * */
        /**
         * The parameter allows setting line series type and use OHLC indicators.
         * Data in OHLC format is required.
         *
         * @sample {highstock} stock/indicators/use-ohlc-data
         *         Use OHLC data format to plot line chart
         *
         * @type      {boolean}
         * @product   highstock
         * @apioption plotOptions.line.useOhlcData
         */
        /**
         * Simple moving average indicator (SMA). This series requires `linkedTo`
         * option to be set.
         *
         * @sample stock/indicators/sma
         *         Simple moving average indicator
         *
         * @extends      plotOptions.line
         * @since        6.0.0
         * @excluding    allAreas, colorAxis, dragDrop, joinBy, keys,
         *               navigatorOptions, pointInterval, pointIntervalUnit,
         *               pointPlacement, pointRange, pointStart, showInNavigator,
         *               stacking, useOhlcData
         * @product      highstock
         * @requires     stock/indicators/indicators
         * @optionparent plotOptions.sma
         */
        SMAIndicator.defaultOptions = merge(LineSeries.defaultOptions, {
            /**
             * The name of the series as shown in the legend, tooltip etc. If not
             * set, it will be based on a technical indicator type and default
             * params.
             *
             * @type {string}
             */
            name: void 0,
            tooltip: {
                /**
                 * Number of decimals in indicator series.
                 */
                valueDecimals: 4
            },
            /**
             * The main series ID that indicator will be based on. Required for this
             * indicator.
             *
             * @type {string}
             */
            linkedTo: void 0,
            /**
             * Whether to compare indicator to the main series values
             * or indicator values.
             *
             * @sample {highstock} stock/plotoptions/series-comparetomain/
             *         Difference between comparing SMA values to the main series
             *         and its own values.
             *
             * @type {boolean}
             */
            compareToMain: false,
            /**
             * Paramters used in calculation of regression series' points.
             */
            params: {
                /**
                 * The point index which indicator calculations will base. For
                 * example using OHLC data, index=2 means the indicator will be
                 * calculated using Low values.
                 */
                index: 3,
                /**
                 * The base period for indicator calculations. This is the number of
                 * data points which are taken into account for the indicator
                 * calculations.
                 */
                period: 14
            }
        });
        extend(SMAIndicator.prototype, {
            calculateOn: {
                chart: 'init'
            },
            hasDerivedData: true,
            nameComponents: ['period'],
            nameSuffixes: [],
            useCommonDataGrouping: true
        });
        SeriesRegistry.registerSeriesType('sma', SMAIndicator);
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
         * A `SMA` series. If the [type](#series.sma.type) option is not specified, it
         * is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.sma
         * @since     6.0.0
         * @product   highstock
         * @excluding dataParser, dataURL, useOhlcData
         * @requires  stock/indicators/indicators
         * @apioption series.sma
         */
        (''); // adds doclet above to the transpiled file

        return SMAIndicator;
    });
    _registerModule(_modules, 'Stock/Indicators/EMA/EMAIndicator.js', [_modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (SeriesRegistry, U) {
        /* *
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        const { sma: SMAIndicator } = SeriesRegistry.seriesTypes;
        const { correctFloat, isArray, merge } = U;
        /* *
         *
         *  Class
         *
         * */
        /**
         * The EMA series type.
         *
         * @private
         * @class
         * @name Highcharts.seriesTypes.ema
         *
         * @augments Highcharts.Series
         */
        class EMAIndicator extends SMAIndicator {
            /* *
             *
             *  Functions
             *
             * */
            accumulatePeriodPoints(period, index, yVal) {
                let sum = 0, i = 0, y = 0;
                while (i < period) {
                    y = index < 0 ? yVal[i] : yVal[i][index];
                    sum = sum + y;
                    i++;
                }
                return sum;
            }
            calculateEma(xVal, yVal, i, EMApercent, calEMA, index, SMA) {
                const x = xVal[i - 1], yValue = index < 0 ?
                    yVal[i - 1] :
                    yVal[i - 1][index], y = typeof calEMA === 'undefined' ?
                    SMA : correctFloat((yValue * EMApercent) +
                    (calEMA * (1 - EMApercent)));
                return [x, y];
            }
            getValues(series, params) {
                const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, EMApercent = 2 / (period + 1), EMA = [], xData = [], yData = [];
                let calEMA, EMAPoint, i, index = -1, sum = 0, SMA = 0;
                // Check period, if bigger than points length, skip
                if (yValLen < period) {
                    return;
                }
                // Switch index for OHLC / Candlestick / Arearange
                if (isArray(yVal[0])) {
                    index = params.index ? params.index : 0;
                }
                // Accumulate first N-points
                sum = this.accumulatePeriodPoints(period, index, yVal);
                // first point
                SMA = sum / period;
                // Calculate value one-by-one for each period in visible data
                for (i = period; i < yValLen + 1; i++) {
                    EMAPoint = this.calculateEma(xVal, yVal, i, EMApercent, calEMA, index, SMA);
                    EMA.push(EMAPoint);
                    xData.push(EMAPoint[0]);
                    yData.push(EMAPoint[1]);
                    calEMA = EMAPoint[1];
                }
                return {
                    values: EMA,
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
         * Exponential moving average indicator (EMA). This series requires the
         * `linkedTo` option to be set.
         *
         * @sample stock/indicators/ema
         * Exponential moving average indicator
         *
         * @extends      plotOptions.sma
         * @since        6.0.0
         * @product      highstock
         * @requires     stock/indicators/indicators
         * @optionparent plotOptions.ema
         */
        EMAIndicator.defaultOptions = merge(SMAIndicator.defaultOptions, {
            params: {
                /**
                 * The point index which indicator calculations will base. For
                 * example using OHLC data, index=2 means the indicator will be
                 * calculated using Low values.
                 *
                 * By default index value used to be set to 0. Since
                 * Highcharts Stock 7 by default index is set to 3
                 * which means that the ema indicator will be
                 * calculated using Close values.
                 */
                index: 3,
                period: 9 // @merge 14 in v6.2
            }
        });
        SeriesRegistry.registerSeriesType('ema', EMAIndicator);
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
         * A `EMA` series. If the [type](#series.ema.type) option is not
         * specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.ema
         * @since     6.0.0
         * @product   highstock
         * @excluding dataParser, dataURL
         * @requires  stock/indicators/indicators
         * @apioption series.ema
         */
        ''; // adds doclet above to the transpiled file

        return EMAIndicator;
    });
    _registerModule(_modules, 'masters/indicators/indicators.src.js', [], function () {


    });
}));