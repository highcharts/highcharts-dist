/**
 * @license Highcharts JS v12.3.0 (2025-06-21)
 * @module highcharts/modules/mouse-wheel-zoom
 * @requires highcharts
 *
 * Non-cartesian series zoom module
 *
 * (c) 2024 Hubert Kozik
 *
 * License: www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
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
;// ./code/es-modules/Extensions/NonCartesianSeriesZoom/NonCartesianSeriesZoom.js
/* *
 *
 *  (c) 2024 Hubert Kozik
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { composed } = (external_highcharts_src_js_default_default());

const { addEvent, pushUnique } = (external_highcharts_src_js_default_default());
/* /* *
 *
 *  Functions
 *
 * */
/**
 * Logic for non-cartesian series zooming and panning
 * @private
 */
function onTransform(params) {
    const chart = this, { trigger, selection, reset, from = {}, to = {} } = params, type = chart.zooming.type;
    if (type !== 'xy') {
        return;
    }
    if (trigger === 'mousewheel' ||
        trigger === 'pan' ||
        selection ||
        reset) {
        chart.series.forEach((series) => {
            if (!series.isCartesian && series.options.zoomEnabled !== false) {
                series.isDirty = true;
                chart.isDirtyBox = true;
                params.hasZoomed = true;
                const { plotSizeX = 0, plotSizeY = 0 } = chart;
                if (trigger === 'pan' && series.zooming) {
                    series.zooming.panX -= (to.x || 0) / plotSizeX;
                    series.zooming.panY -= (to.y || 0) / plotSizeY;
                }
                else {
                    if (Object.keys(from).length) {
                        const { width: toWidth = 1, height: toHeight = 1 } = to, currentScale = Math.abs(series.group?.scaleX || 1);
                        let { x: zoomX = 0, y: zoomY = 0, width: fromWidth = 1, height: fromHeight = 1 } = from, x = zoomX, y = zoomY, scale = series.zooming?.scale ||
                            series.group?.scaleX ||
                            1, width = (series.zooming?.width || 1) * plotSizeX, height = (series.zooming?.height || 1) * plotSizeY;
                        if (Object.keys(to).length) {
                            width = width * (fromWidth / toWidth);
                            height = height * (fromWidth / toHeight);
                            zoomX -= chart.plotLeft;
                            zoomY -= chart.plotTop;
                            x = zoomX - width / 2;
                            y = zoomY - height / 2;
                            scale =
                                Math.min(plotSizeX / width, plotSizeY / height);
                            // Uncomment this block to visualize the zooming
                            // bounding box and the point, which is normalized
                            // position to zoom-in
                            // chart.renderer.circle(
                            //    zoomX + chart.plotLeft,
                            //    zoomY + chart.plotTop,
                            //    2
                            // ).attr({ stroke: 'blue' }).add();
                            // chart.renderer.rect(
                            //    x + chart.plotLeft,
                            //    y + chart.plotTop,
                            //    width,
                            //    height,
                            //    0,
                            //    2
                            // ).attr({ stroke: 'red' }).add();
                            // chart.renderer.circle(
                            //    chart.plotLeft + x + width / 2,
                            //    chart.plotTop + y + height / 2,
                            //    2
                            // ).attr({ stroke: 'blue' }).add();
                        }
                        else {
                            fromWidth /= currentScale;
                            fromHeight /= currentScale;
                            scale = Math.min(plotSizeX / fromWidth, plotSizeY / fromHeight);
                            let prevX = 0, prevY = 0;
                            if (series.zooming) {
                                prevX = series.zooming.x * plotSizeX;
                                prevY = series.zooming.y * plotSizeY;
                            }
                            // Calculate the normalized coefficients of the
                            // rectangle center position
                            const factorX = (zoomX - chart.plotLeft) /
                                ((plotSizeX - fromWidth * currentScale) ||
                                    1), factorY = (zoomY - chart.plotTop) /
                                ((plotSizeY - fromHeight * currentScale) ||
                                    1);
                            width = fromWidth;
                            height = fromHeight;
                            zoomX -= chart.plotLeft;
                            zoomY -= chart.plotTop;
                            zoomX /= currentScale;
                            zoomY /= currentScale;
                            zoomX += prevX + (fromWidth) * factorX;
                            zoomY += prevY + (fromHeight) * factorY;
                            x -= chart.plotLeft;
                            y -= chart.plotTop;
                            x /= currentScale;
                            y /= currentScale;
                            x += prevX;
                            y += prevY;
                            // Uncomment this block to visualize the zooming
                            // bounding box and the point, which is normalized
                            // position to zoom-in
                            // chart.renderer.rect(
                            //    x + chart.plotLeft,
                            //    y + chart.plotTop,
                            //    fromWidth,
                            //    fromHeight,
                            //    0,
                            //    2
                            // ).attr({ stroke: 'red' }).add();
                            // chart.renderer.circle(
                            //    zoomX + chart.plotLeft,
                            //    zoomY + chart.plotTop,
                            //    2
                            // ).attr({ stroke: 'blue' }).add();
                        }
                        series.zooming = {
                            x: x / plotSizeX,
                            y: y / plotSizeY,
                            zoomX: zoomX / plotSizeX,
                            zoomY: zoomY / plotSizeY,
                            width: width / plotSizeX,
                            height: height / plotSizeY,
                            scale,
                            panX: 0,
                            panY: 0
                        };
                        if (scale < 1) {
                            delete series.zooming;
                        }
                    }
                    else {
                        delete series.zooming;
                    }
                }
            }
        });
    }
}
/**
 * Apply zoom into series plot box
 * @private
 */
function onGetPlotBox(e) {
    const { chart, group, zooming } = this;
    let { plotSizeX = 0, plotSizeY = 0 } = chart, { scale, translateX, translateY, name } = e, left = 0, top = 0;
    const initLeft = translateX, initTop = translateY;
    if (chart.inverted) {
        [plotSizeX, plotSizeY] = [plotSizeY, plotSizeX];
    }
    if (group && zooming) {
        scale = zooming.scale;
        left = zooming.zoomX * plotSizeX *
            (scale - (Math.abs(group.scaleX || 1)));
        top = zooming.zoomY * plotSizeY *
            (scale - (Math.abs(group.scaleY || 1)));
        if (name === 'series') {
            zooming.x = Math.max(0, Math.min(1 - zooming.width, zooming.x + (zooming.panX / scale)));
            left += zooming.panX * plotSizeX;
            zooming.panX = 0;
            zooming.y = Math.max(0, Math.min(1 - zooming.height, zooming.y + (zooming.panY / scale)));
            top += zooming.panY * plotSizeY;
            zooming.panY = 0;
        }
        translateX = (group.translateX || initLeft) - left;
        translateY = (group.translateY || initTop) - top;
        // Do not allow to move outside the chart
        // Vertical lock
        if (translateY > initTop) {
            translateY = initTop;
        }
        else if ((group.translateY || initTop) - top <
            (plotSizeY * (1 - scale) + initTop)) {
            translateY = (plotSizeY * (1 - scale)) + initTop;
        }
        // Horizontal lock
        if (translateX > initLeft) {
            translateX = initLeft;
        }
        else if (translateX < (plotSizeX * (1 - scale) + initLeft)) {
            translateX = (plotSizeX * (1 - scale)) + initLeft;
        }
        e.scale = scale;
        e.translateX = translateX;
        e.translateY = translateY;
    }
}
/**
 * Clip series and data labels group with zoom rect
 * @private
 */
function onAfterDrawChartBox() {
    const chart = this;
    let clipRect;
    if (chart.series.find((series) => !!series.zooming)) {
        chart.zoomClipRect || (chart.zoomClipRect = chart.renderer.clipRect());
        chart.zoomClipRect.attr({
            x: chart.plotLeft,
            y: chart.plotTop,
            width: chart.inverted ? chart.clipBox.height :
                chart.clipBox.width,
            height: chart.inverted ? chart.clipBox.width :
                chart.clipBox.height
        });
        clipRect = chart.zoomClipRect;
    }
    chart.seriesGroup?.clip(clipRect);
    chart.dataLabelsGroup?.clip(clipRect);
}
/**
 * Adjust tooltip position to scaled series group
 * @private
 */
function onGetAnchor(params) {
    if (params.point.series &&
        !params.point.series.isCartesian &&
        params.point.series.group &&
        params.point.series.zooming) {
        const chart = params.point.series.chart, scale = params.point.series.zooming.scale, left = (params.point.series.group.translateX || 0), top = (params.point.series.group.translateY || 0);
        params.ret[0] = (params.ret[0] * scale) + left - chart.plotLeft;
        params.ret[1] = (params.ret[1] * scale) + top - chart.plotTop;
    }
}
function onAfterSetChartSize(params) {
    if (params.skipAxes) {
        this.series.forEach((series) => {
            if (series.group && series.zooming) {
                series.group.attr({
                    translateX: 0,
                    translateY: 0,
                    scaleX: 1,
                    scaleY: 1
                });
            }
        });
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * The series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.tiledwebmap
 *
 * @augments Highcharts.Series
 */
class NonCartesianSeriesZoom {
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(ChartClass, SeriesClass, TooltipClass) {
        if (pushUnique(composed, 'NonCartesianSeriesZoom')) {
            addEvent(ChartClass, 'afterDrawChartBox', onAfterDrawChartBox);
            addEvent(ChartClass, 'transform', onTransform);
            addEvent(ChartClass, 'afterSetChartSize', onAfterSetChartSize);
            addEvent(SeriesClass, 'getPlotBox', onGetPlotBox);
            addEvent(TooltipClass, 'getAnchor', onGetAnchor);
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const NonCartesianSeriesZoom_NonCartesianSeriesZoom = (NonCartesianSeriesZoom);
/* *
 *
 *  API Options
 *
 * */
/**
 * Whether to zoom non-cartesian series. If `chart.zooming` is set, the option
 * allows to disable zooming on an individual non-cartesian series. By default
 * zooming is enabled for all series.
 *
 * Note: This option works only for non-cartesian series.
 *
 * @type      {boolean}
 * @since 12.3.0
 * @apioption plotOptions.series.zoomEnabled
 */
/**
 * Whether to zoom non-cartesian series. If `chart.zooming` is set, the option
 * allows to disable zooming on an individual non-cartesian series. By default
 * zooming is enabled for all series.
 *
 * Note: This option works only for non-cartesian series.
 *
 * @type      {boolean}
 * @since 12.3.0
 * @apioption series.zoomEnabled
 */
(''); // Keeps doclets above in JS file

;// ./code/es-modules/masters/modules/non-cartesian-zoom.src.js




const G = (external_highcharts_src_js_default_default());
G.NonCartesianSeriesZoom = G.NonCartesianSeriesZoom || NonCartesianSeriesZoom_NonCartesianSeriesZoom;
G.NonCartesianSeriesZoom.compose(G.Chart, G.Series, G.Tooltip);
/* harmony default export */ const non_cartesian_zoom_src = ((external_highcharts_src_js_default_default()));

export { non_cartesian_zoom_src as default };
