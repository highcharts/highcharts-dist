/**
 * @license Highstock JS v12.2.0 (2025-04-07)
 * @module highcharts/indicators/price-envelopes
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2025 Paweł Fus
 *
 * License: www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__modules_stock_src_js_b3d80146__ from "../modules/stock.src.js";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/

;// external ["../highcharts.src.js","default"]
const external_highcharts_src_js_default_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"];
var external_highcharts_src_js_default_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_namespaceObject);
;// external "../modules/stock.src.js"
var x = (y) => {
	var x = {}; __webpack_require__.d(x,
    	y); return x
    } 
    var y = (x) => (() => (x))
    const stock_src_js_namespaceObject = x({  });
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// ./code/es-modules/Stock/Indicators/MultipleLinesComposition.js
/**
 *
 *  (c) 2010-2025 Wojciech Chmiel
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: { prototype: smaProto } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { defined, error, merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
var MultipleLinesComposition;
(function (MultipleLinesComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    /**
     * Additional lines DOCS names. Elements of linesApiNames array should
     * be consistent with DOCS line names defined in your implementation.
     * Notice that linesApiNames should have decreased amount of elements
     * relative to pointArrayMap (without pointValKey).
     *
     * @private
     * @type {Array<string>}
     */
    const linesApiNames = ['bottomLine'];
    /**
     * Lines ids. Required to plot appropriate amount of lines.
     * Notice that pointArrayMap should have more elements than
     * linesApiNames, because it contains main line and additional lines ids.
     * Also it should be consistent with amount of lines calculated in
     * getValues method from your implementation.
     *
     * @private
     * @type {Array<string>}
     */
    const pointArrayMap = ['top', 'bottom'];
    /**
     * Names of the lines, between which the area should be plotted.
     * If the drawing of the area should
     * be disabled for some indicators, leave this option as an empty array.
     * Names should be the same as the names in the pointArrayMap.
     *
     * @private
     * @type {Array<string>}
     */
    const areaLinesNames = ['top'];
    /**
     * Main line id.
     *
     * @private
     * @type {string}
     */
    const pointValKey = 'top';
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Composition useful for all indicators that have more than one line.
     * Compose it with your implementation where you will provide the
     * `getValues` method appropriate to your indicator and `pointArrayMap`,
     * `pointValKey`, `linesApiNames` properties. Notice that `pointArrayMap`
     * should be consistent with the amount of lines calculated in the
     * `getValues` method.
     *
     * @private
     */
    function compose(IndicatorClass) {
        const proto = IndicatorClass.prototype;
        proto.linesApiNames = (proto.linesApiNames ||
            linesApiNames.slice());
        proto.pointArrayMap = (proto.pointArrayMap ||
            pointArrayMap.slice());
        proto.pointValKey = (proto.pointValKey ||
            pointValKey);
        proto.areaLinesNames = (proto.areaLinesNames ||
            areaLinesNames.slice());
        proto.drawGraph = indicatorDrawGraph;
        proto.getGraphPath = indicatorGetGraphPath;
        proto.toYData = indicatorToYData;
        proto.translate = indicatorTranslate;
        return IndicatorClass;
    }
    MultipleLinesComposition.compose = compose;
    /**
     * Generate the API name of the line
     *
     * @private
     * @param propertyName name of the line
     */
    function getLineName(propertyName) {
        return ('plot' +
            propertyName.charAt(0).toUpperCase() +
            propertyName.slice(1));
    }
    /**
     * Create translatedLines Collection based on pointArrayMap.
     *
     * @private
     * @param {string} [excludedValue]
     *        Main line id
     * @return {Array<string>}
     *         Returns translated lines names without excluded value.
     */
    function getTranslatedLinesNames(indicator, excludedValue) {
        const translatedLines = [];
        (indicator.pointArrayMap || []).forEach((propertyName) => {
            if (propertyName !== excludedValue) {
                translatedLines.push(getLineName(propertyName));
            }
        });
        return translatedLines;
    }
    /**
     * Draw main and additional lines.
     *
     * @private
     */
    function indicatorDrawGraph() {
        const indicator = this, pointValKey = indicator.pointValKey, linesApiNames = indicator.linesApiNames, areaLinesNames = indicator.areaLinesNames, mainLinePoints = indicator.points, mainLineOptions = indicator.options, mainLinePath = indicator.graph, gappedExtend = {
            options: {
                gapSize: mainLineOptions.gapSize
            }
        }, 
        // Additional lines point place holders:
        secondaryLines = [], secondaryLinesNames = getTranslatedLinesNames(indicator, pointValKey);
        let pointsLength = mainLinePoints.length, point;
        // Generate points for additional lines:
        secondaryLinesNames.forEach((plotLine, index) => {
            // Create additional lines point place holders
            secondaryLines[index] = [];
            while (pointsLength--) {
                point = mainLinePoints[pointsLength];
                secondaryLines[index].push({
                    x: point.x,
                    plotX: point.plotX,
                    plotY: point[plotLine],
                    isNull: !defined(point[plotLine])
                });
            }
            pointsLength = mainLinePoints.length;
        });
        // Modify options and generate area fill:
        if (indicator.userOptions.fillColor && areaLinesNames.length) {
            const index = secondaryLinesNames.indexOf(getLineName(areaLinesNames[0])), secondLinePoints = secondaryLines[index], firstLinePoints = areaLinesNames.length === 1 ?
                mainLinePoints :
                secondaryLines[secondaryLinesNames.indexOf(getLineName(areaLinesNames[1]))], originalColor = indicator.color;
            indicator.points = firstLinePoints;
            indicator.nextPoints = secondLinePoints;
            indicator.color = indicator.userOptions.fillColor;
            indicator.options = merge(mainLinePoints, gappedExtend);
            indicator.graph = indicator.area;
            indicator.fillGraph = true;
            smaProto.drawGraph.call(indicator);
            indicator.area = indicator.graph;
            // Clean temporary properties:
            delete indicator.nextPoints;
            delete indicator.fillGraph;
            indicator.color = originalColor;
        }
        // Modify options and generate additional lines:
        linesApiNames.forEach((lineName, i) => {
            if (secondaryLines[i]) {
                indicator.points = secondaryLines[i];
                if (mainLineOptions[lineName]) {
                    indicator.options = merge(mainLineOptions[lineName].styles, gappedExtend);
                }
                else {
                    error('Error: "There is no ' + lineName +
                        ' in DOCS options declared. Check if linesApiNames' +
                        ' are consistent with your DOCS line names."');
                }
                indicator.graph = indicator['graph' + lineName];
                smaProto.drawGraph.call(indicator);
                // Now save lines:
                indicator['graph' + lineName] = indicator.graph;
            }
            else {
                error('Error: "' + lineName + ' doesn\'t have equivalent ' +
                    'in pointArrayMap. To many elements in linesApiNames ' +
                    'relative to pointArrayMap."');
            }
        });
        // Restore options and draw a main line:
        indicator.points = mainLinePoints;
        indicator.options = mainLineOptions;
        indicator.graph = mainLinePath;
        smaProto.drawGraph.call(indicator);
    }
    /**
     * Create the path based on points provided as argument.
     * If indicator.nextPoints option is defined, create the areaFill.
     *
     * @private
     * @param points Points on which the path should be created
     */
    function indicatorGetGraphPath(points) {
        let areaPath, path = [], higherAreaPath = [];
        points = points || this.points;
        // Render Span
        if (this.fillGraph && this.nextPoints) {
            areaPath = smaProto.getGraphPath.call(this, this.nextPoints);
            if (areaPath && areaPath.length) {
                areaPath[0][0] = 'L';
                path = smaProto.getGraphPath.call(this, points);
                higherAreaPath = areaPath.slice(0, path.length);
                // Reverse points, so that the areaFill will start from the end:
                for (let i = higherAreaPath.length - 1; i >= 0; i--) {
                    path.push(higherAreaPath[i]);
                }
            }
        }
        else {
            path = smaProto.getGraphPath.apply(this, arguments);
        }
        return path;
    }
    /**
     * @private
     * @param {Highcharts.Point} point
     *        Indicator point
     * @return {Array<number>}
     *         Returns point Y value for all lines
     */
    function indicatorToYData(point) {
        const pointColl = [];
        (this.pointArrayMap || []).forEach((propertyName) => {
            pointColl.push(point[propertyName]);
        });
        return pointColl;
    }
    /**
     * Add lines plot pixel values.
     *
     * @private
     */
    function indicatorTranslate() {
        const pointArrayMap = this.pointArrayMap;
        let LinesNames = [], value;
        LinesNames = getTranslatedLinesNames(this);
        smaProto.translate.apply(this, arguments);
        this.points.forEach((point) => {
            pointArrayMap.forEach((propertyName, i) => {
                value = point[propertyName];
                // If the modifier, like for example compare exists,
                // modified the original value by that method, #15867.
                if (this.dataModify) {
                    value = this.dataModify.modifyValue(value);
                }
                if (value !== null) {
                    point[LinesNames[i]] = this.yAxis.toPixels(value, true);
                }
            });
        });
    }
})(MultipleLinesComposition || (MultipleLinesComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Indicators_MultipleLinesComposition = (MultipleLinesComposition);

;// ./code/es-modules/Stock/Indicators/PriceEnvelopes/PriceEnvelopesIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { sma: SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend, isArray, merge: PriceEnvelopesIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Price Envelopes series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.priceenvelopes
 *
 * @augments Highcharts.Series
 */
class PriceEnvelopesIndicator extends SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    init() {
        super.init.apply(this, arguments);
        // Set default color for lines:
        this.options = PriceEnvelopesIndicator_merge({
            topLine: {
                styles: {
                    lineColor: this.color
                }
            },
            bottomLine: {
                styles: {
                    lineColor: this.color
                }
            }
        }, this.options);
    }
    getValues(series, params) {
        const period = params.period, topPercent = params.topBand, botPercent = params.bottomBand, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, 
        // 0- date, 1-top line, 2-middle line, 3-bottom line
        PE = [], 
        // Middle line, top line and bottom line
        xData = [], yData = [];
        let ML, TL, BL, date, slicedX, slicedY, point, i;
        // Price envelopes requires close value
        if (xVal.length < period ||
            !isArray(yVal[0]) ||
            yVal[0].length !== 4) {
            return;
        }
        for (i = period; i <= yValLen; i++) {
            slicedX = xVal.slice(i - period, i);
            slicedY = yVal.slice(i - period, i);
            point = super.getValues({
                xData: slicedX,
                yData: slicedY
            }, params);
            date = point.xData[0];
            ML = point.yData[0];
            TL = ML * (1 + topPercent);
            BL = ML * (1 - botPercent);
            PE.push([date, TL, ML, BL]);
            xData.push(date);
            yData.push([TL, ML, BL]);
        }
        return {
            values: PE,
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
 * Price envelopes indicator based on [SMA](#plotOptions.sma) calculations.
 * This series requires the `linkedTo` option to be set and should be loaded
 * after the `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/price-envelopes
 *         Price envelopes
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/price-envelopes
 * @optionparent plotOptions.priceenvelopes
 */
PriceEnvelopesIndicator.defaultOptions = PriceEnvelopesIndicator_merge(SMAIndicator.defaultOptions, {
    marker: {
        enabled: false
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span><b> {series.name}</b><br/>Top: {point.top}<br/>Middle: {point.middle}<br/>Bottom: {point.bottom}<br/>'
    },
    params: {
        period: 20,
        /**
         * Percentage above the moving average that should be displayed.
         * 0.1 means 110%. Relative to the calculated value.
         */
        topBand: 0.1,
        /**
         * Percentage below the moving average that should be displayed.
         * 0.1 means 90%. Relative to the calculated value.
         */
        bottomBand: 0.1
    },
    /**
     * Bottom line options.
     */
    bottomLine: {
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line. If not set, it's inherited from
             * [plotOptions.priceenvelopes.color](
             * #plotOptions.priceenvelopes.color).
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    /**
     * Top line options.
     *
     * @extends plotOptions.priceenvelopes.bottomLine
     */
    topLine: {
        styles: {
            lineWidth: 1
        }
    },
    dataGrouping: {
        approximation: 'averages'
    }
    /**
     * Option for fill color between lines in Price Envelopes Indicator.
     *
     * @sample {highstock} stock/indicators/indicator-area-fill
     *      Background fill between lines.
     *
     * @type      {Highcharts.Color}
     * @since 11.0.0
     * @apioption plotOptions.priceenvelopes.fillColor
     *
     */
});
extend(PriceEnvelopesIndicator.prototype, {
    areaLinesNames: ['top', 'bottom'],
    linesApiNames: ['topLine', 'bottomLine'],
    nameComponents: ['period', 'topBand', 'bottomBand'],
    nameBase: 'Price envelopes',
    pointArrayMap: ['top', 'middle', 'bottom'],
    parallelArrays: ['x', 'y', 'top', 'bottom'],
    pointValKey: 'middle'
});
Indicators_MultipleLinesComposition.compose(PriceEnvelopesIndicator);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('priceenvelopes', PriceEnvelopesIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const PriceEnvelopes_PriceEnvelopesIndicator = ((/* unused pure expression or super */ null && (PriceEnvelopesIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A price envelopes indicator. If the [type](#series.priceenvelopes.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.priceenvelopes
 * @since     6.0.0
 * @excluding dataParser, dataURL
 * @product   highstock
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/price-envelopes
 * @apioption series.priceenvelopes
 */
''; // To include the above in the js output

;// ./code/es-modules/masters/indicators/price-envelopes.src.js





/* harmony default export */ const price_envelopes_src = ((external_highcharts_src_js_default_default()));

export { price_envelopes_src as default };
