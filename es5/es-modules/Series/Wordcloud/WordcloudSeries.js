/* *
 *
 *  Highcharts module which enables visualization of a word cloud.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygård
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 * */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import DPU from '../DrawPointUtilities.js';
import H from '../../Core/Globals.js';
var noop = H.noop;
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var ColumnSeries = SeriesRegistry.seriesTypes.column;
import WordcloudPoint from './WordcloudPoint.js';
import WordcloudSeriesDefaults from './WordcloudSeriesDefaults.js';
import WU from './WordcloudUtils.js';
import { extend, isArray, isNumber, isObject, merge } from '../../Shared/Utilities.js';
var archimedeanSpiral = WU.archimedeanSpiral, extendPlayingField = WU.extendPlayingField, getBoundingBoxFromPolygon = WU.getBoundingBoxFromPolygon, getPlayingField = WU.getPlayingField, getPolygon = WU.getPolygon, getRandomPosition = WU.getRandomPosition, getRotation = WU.getRotation, getScale = WU.getScale, getSpiral = WU.getSpiral, intersectionTesting = WU.intersectionTesting, isPolygonsColliding = WU.isPolygonsColliding, rectangularSpiral = WU.rectangularSpiral, rotate2DToOrigin = WU.rotate2DToOrigin, rotate2DToPoint = WU.rotate2DToPoint, squareSpiral = WU.squareSpiral, updateFieldBoundaries = WU.updateFieldBoundaries;
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.wordcloud
 *
 * @augments Highcharts.Series
 */
var WordcloudSeries = /** @class */ (function (_super) {
    __extends(WordcloudSeries, _super);
    function WordcloudSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * Functions
     *
     */
    WordcloudSeries.prototype.pointAttribs = function (point, state) {
        var attribs = H.seriesTypes.column.prototype
            .pointAttribs.call(this, point, state);
        delete attribs.stroke;
        delete attribs['stroke-width'];
        return attribs;
    };
    /**
     * Calculates the fontSize of a word based on its weight.
     *
     * @private
     * @function Highcharts.Series#deriveFontSize
     *
     * @param {number} [relativeWeight=0]
     * The weight of the word, on a scale 0-1.
     *
     * @param {number} [maxFontSize=1]
     * The maximum font size of a word.
     *
     * @param {number} [minFontSize=1]
     * The minimum font size of a word.
     *
     * @return {number}
     * Returns the resulting fontSize of a word. If minFontSize is larger then
     * maxFontSize the result will equal minFontSize.
     */
    WordcloudSeries.prototype.deriveFontSize = function (relativeWeight, maxFontSize, minFontSize) {
        var weight = isNumber(relativeWeight) ? relativeWeight : 0, max = isNumber(maxFontSize) ? maxFontSize : 1, min = isNumber(minFontSize) ? minFontSize : 1;
        return Math.floor(Math.max(min, weight * max));
    };
    WordcloudSeries.prototype.drawPoints = function () {
        if (this.zooming ||
            (this.defaultScale &&
                this.group.scaleX !== this.defaultScale)) {
            return;
        }
        var series = this, hasRendered = series.hasRendered, xAxis = series.xAxis, yAxis = series.yAxis, chart = series.chart, group = series.group, options = series.options, animation = options.animation, allowExtendPlayingField = options.allowExtendPlayingField, renderer = chart.renderer, placed = [], placementStrategy = series.placementStrategy[options.placementStrategy], rotation = options.rotation, weights = series.points.map(function (p) {
            return p.weight;
        }), maxWeight = Math.max.apply(null, weights), 
        // `concat()` prevents from sorting the original array.
        points = series.points.concat().sort(function (a, b) { return (b.weight - a.weight // Sort descending
        ); });
        var testElement = renderer.text().add(group), field;
        // Reset the scale before finding the dimensions (#11993).
        // SVGGRaphicsElement.getBBox() (used in SVGElement.getBBox(boolean))
        // returns slightly different values for the same element depending on
        // whether it is rendered in a group which has already defined scale
        // (e.g. 6) or in the group without a scale (scale = 1).
        series.group.attr({
            scaleX: 1,
            scaleY: 1
        });
        // Get the dimensions for each word.
        // Used in calculating the playing field.
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var point = points_1[_i];
            var relativeWeight = 1 / maxWeight * point.weight, fontSize = series.deriveFontSize(relativeWeight, options.maxFontSize, options.minFontSize), css = extend({
                fontSize: fontSize + 'px'
            }, options.style);
            testElement.css(css).attr({
                x: 0,
                y: 0,
                text: point.name
            });
            var bBox = testElement.getBBox(true);
            point.dimensions = {
                height: bBox.height,
                width: bBox.width
            };
        }
        // Calculate the playing field.
        field = getPlayingField(xAxis.len, yAxis.len, points);
        var spiral = getSpiral(series.spirals[options.spiral], {
            field: field
        });
        // Draw all the points.
        for (var _a = 0, points_2 = points; _a < points_2.length; _a++) {
            var point = points_2[_a];
            var relativeWeight = 1 / maxWeight * point.weight, fontSize = series.deriveFontSize(relativeWeight, options.maxFontSize, options.minFontSize), css = extend({
                fontSize: fontSize + 'px'
            }, options.style), placement = placementStrategy(point, {
                data: points,
                field: field,
                placed: placed,
                rotation: rotation
            }), attr = extend(series.pointAttribs(point, (point.selected && 'select')), {
                align: 'center',
                'alignment-baseline': 'middle',
                'dominant-baseline': 'middle', // #15973: Firefox
                x: placement.x,
                y: placement.y,
                text: point.name,
                rotation: isNumber(placement.rotation) ?
                    placement.rotation :
                    void 0
            }), polygon = getPolygon(placement.x, placement.y, point.dimensions.width, point.dimensions.height, placement.rotation), rectangle = getBoundingBoxFromPolygon(polygon);
            var delta = intersectionTesting(point, {
                rectangle: rectangle,
                polygon: polygon,
                field: field,
                placed: placed,
                spiral: spiral,
                rotation: placement.rotation
            }), animate = void 0;
            // If there is no space for the word, extend the playing field.
            if (!delta && allowExtendPlayingField) {
                // Extend the playing field to fit the word.
                field = extendPlayingField(field, rectangle);
                // Run intersection testing one more time to place the word.
                delta = intersectionTesting(point, {
                    rectangle: rectangle,
                    polygon: polygon,
                    field: field,
                    placed: placed,
                    spiral: spiral,
                    rotation: placement.rotation
                });
            }
            // Check if point was placed, if so delete it, otherwise place it
            // on the correct positions.
            if (isObject(delta)) {
                attr.x = (attr.x || 0) + delta.x;
                attr.y = (attr.y || 0) + delta.y;
                rectangle.left += delta.x;
                rectangle.right += delta.x;
                rectangle.top += delta.y;
                rectangle.bottom += delta.y;
                field = updateFieldBoundaries(field, rectangle);
                placed.push(point);
                point.isNull = false;
                point.isInside = true; // #15447
            }
            else {
                point.isNull = true;
            }
            if (animation) {
                // Animate to new positions
                animate = {
                    x: attr.x,
                    y: attr.y
                };
                // Animate from center of chart
                if (!hasRendered) {
                    attr.x = 0;
                    attr.y = 0;
                    // Or animate from previous position
                }
                else {
                    delete attr.x;
                    delete attr.y;
                }
            }
            DPU.draw(point, {
                animatableAttribs: animate,
                attribs: attr,
                css: css,
                group: group,
                renderer: renderer,
                shapeArgs: void 0,
                shapeType: 'text'
            });
        }
        // Destroy the element after use.
        testElement = testElement.destroy();
        // Scale the series group to fit within the plotArea.
        series.defaultScale = getScale(xAxis.len, yAxis.len, field);
        series.field = field;
        series.group.attr({
            scaleX: series.defaultScale,
            scaleY: series.defaultScale
        });
    };
    WordcloudSeries.prototype.hasData = function () {
        var series = this;
        return (isObject(series) &&
            series.visible === true &&
            isArray(series.points) &&
            series.points.length > 0);
    };
    WordcloudSeries.prototype.getPlotBox = function (name) {
        var _a;
        var series = this, _b = this, chart = _b.chart, group = _b.group, zooming = _b.zooming, _c = chart.plotSizeX, plotSizeX = _c === void 0 ? 0 : _c, _d = chart.plotSizeY, plotSizeY = _d === void 0 ? 0 : _d, inverted = chart.inverted, 
        // Swap axes for inverted (#2339)
        xAxis = series[(inverted ? 'yAxis' : 'xAxis')], yAxis = series[(inverted ? 'xAxis' : 'yAxis')], width = xAxis ? xAxis.len : chart.plotWidth, height = yAxis ? yAxis.len : chart.plotHeight, x = xAxis ? xAxis.left : chart.plotLeft, y = yAxis ? yAxis.top : chart.plotTop, field = series.field;
        var left = 0, top = 0, translateX = x + width / 2, translateY = y + height / 2, initLeft = translateX, initTop = translateY, scale = series.defaultScale || 1, seriesHeight = 0, seriesWidth = 0;
        if (field) {
            seriesHeight =
                Math.max(Math.abs(field.top), Math.abs(field.bottom)) * 2;
            seriesWidth =
                Math.max(Math.abs(field.left), Math.abs(field.right)) * 2;
        }
        if (inverted) {
            _a = [seriesHeight, seriesWidth], seriesWidth = _a[0], seriesHeight = _a[1];
        }
        if (group && zooming) {
            // Uncomment this block to visualize the zooming
            // bounding box and the point, which is normalized
            // position to zoom-in
            // chart.renderer.rect(
            //    (plotSizeX - seriesWidth) / 2 + zooming.x * plotSizeX +
            //        chart.plotLeft,
            //    (plotSizeY - seriesHeight) / 2 + zooming.y * plotSizeY +
            //        chart.plotTop,
            //    zooming.width * plotSizeX,
            //    zooming.height * plotSizeY,
            //    0,
            //    2
            // ).attr({
            //    stroke: 'red'
            // }).add();
            // chart.renderer.circle(
            //    (plotSizeX - seriesWidth) / 2 + zooming.zoomX * plotSizeX +
            //        chart.plotLeft,
            //    (plotSizeY - seriesHeight) / 2 + zooming.zoomY * plotSizeY +
            //        chart.plotTop,
            //    2
            // ).attr({
            //    stroke: 'blue'
            // }).add();
            scale = Math.max(zooming.scale, series.defaultScale || 1);
            var newWidth = Math.max(seriesWidth * scale, width), newHeight = Math.max(seriesHeight * scale, height), newMiddleX = x + newWidth / 2, newMiddleY = y + newHeight / 2, scaleDiff = scale - (group.scaleX || 1);
            left = scaleDiff * ((plotSizeX - seriesWidth) / 2 +
                zooming.zoomX * plotSizeX - width / 2);
            top = scaleDiff * ((plotSizeY - seriesHeight) / 2 +
                zooming.zoomY * plotSizeY - height / 2);
            if (name === 'series') {
                zooming.x = Math.max(0, Math.min(1 - zooming.width, zooming.x + (zooming.panX / zooming.scale)));
                left += zooming.panX * plotSizeX;
                zooming.panX = 0;
                zooming.y = Math.max(0, Math.min(1 - zooming.height, zooming.y + (zooming.panY / zooming.scale)));
                top += zooming.panY * plotSizeY;
                zooming.panY = 0;
            }
            if (isNumber(group.translateX) && isNumber(group.translateY)) {
                initLeft = group.translateX;
                initTop = group.translateY;
            }
            translateX = initLeft - left;
            translateY = initTop - top;
            // Do not allow to move outside the chart
            // Vertical lock
            if (translateY > newMiddleY) {
                translateY = newMiddleY;
            }
            else if (translateY < 2 * y + height - newMiddleY) {
                translateY = 2 * y + height - newMiddleY;
            }
            // Horizontal lock
            if (translateX > newMiddleX) {
                translateX = newMiddleX;
            }
            else if (translateX < 2 * x + width - newMiddleX) {
                translateX = 2 * x + width - newMiddleX;
            }
        }
        return {
            translateX: translateX,
            translateY: translateY,
            scaleX: scale,
            scaleY: scale
        };
    };
    /* *
     *
     *  Static properties
     *
     * */
    WordcloudSeries.defaultOptions = merge(ColumnSeries.defaultOptions, WordcloudSeriesDefaults);
    return WordcloudSeries;
}(ColumnSeries));
extend(WordcloudSeries.prototype, {
    animate: noop,
    animateDrilldown: noop,
    animateDrillupFrom: noop,
    isCartesian: false,
    pointClass: WordcloudPoint,
    setClip: noop,
    // Strategies used for deciding rotation and initial position of a word. To
    // implement a custom strategy, have a look at the function random for
    // example.
    placementStrategy: {
        random: function (point, options) {
            var field = options.field, r = options.rotation;
            return {
                x: getRandomPosition(field.width) - (field.width / 2),
                y: getRandomPosition(field.height) - (field.height / 2),
                rotation: getRotation(r.orientations, point.index, r.from, r.to)
            };
        },
        center: function (point, options) {
            var r = options.rotation;
            return {
                x: 0,
                y: 0,
                rotation: getRotation(r.orientations, point.index, r.from, r.to)
            };
        }
    },
    pointArrayMap: ['weight'],
    // Spirals used for placing a word after the initial position experienced a
    // collision with either another word or the borders. To implement a custom
    // spiral, look at the function archimedeanSpiral for example.
    spirals: {
        'archimedean': archimedeanSpiral,
        'rectangular': rectangularSpiral,
        'square': squareSpiral
    },
    utils: {
        extendPlayingField: extendPlayingField,
        getRotation: getRotation,
        isPolygonsColliding: isPolygonsColliding,
        rotate2DToOrigin: rotate2DToOrigin,
        rotate2DToPoint: rotate2DToPoint
    }
});
SeriesRegistry.registerSeriesType('wordcloud', WordcloudSeries);
/* *
 *
 *  Default Export
 *
 * */
export default WordcloudSeries;
