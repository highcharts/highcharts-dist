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
import H from '../../Core/Globals.js';
var noop = H.noop;
import MapPointPoint from './MapPointPoint.js';
import MapPointSeriesDefaults from './MapPointSeriesDefaults.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var _a = SeriesRegistry.seriesTypes, MapSeries = _a.map, ScatterSeries = _a.scatter;
import SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer.js';
import '../../Core/Defaults.js';
import '../Scatter/ScatterSeries.js';
import { extend, fireEvent, isNumber, merge } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.mappoint
 *
 * @augments Highcharts.Series
 */
var MapPointSeries = /** @class */ (function (_super) {
    __extends(MapPointSeries, _super);
    function MapPointSeries() {
        /* *
         *
         *  Static Properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clearBounds = MapSeries.prototype.clearBounds;
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    MapPointSeries.prototype.drawDataLabels = function () {
        var _this = this;
        var _a;
        _super.prototype.drawDataLabels.call(this);
        (_a = this.dataLabelsGroups) === null || _a === void 0 ? void 0 : _a.forEach(function (g) {
            g === null || g === void 0 ? void 0 : g.clip(_this.chart.clipRect);
        });
    };
    /**
     * Resolve `lon`, `lat` or `geometry` options and project the resulted
     * coordinates.
     *
     * @private
     */
    MapPointSeries.prototype.projectPoint = function (pointOptions) {
        var mapView = this.chart.mapView;
        if (mapView) {
            var geometry = pointOptions.geometry, lon = pointOptions.lon, lat = pointOptions.lat;
            var coordinates = (geometry &&
                geometry.type === 'Point' &&
                geometry.coordinates);
            if (isNumber(lon) && isNumber(lat)) {
                coordinates = [lon, lat];
            }
            if (coordinates) {
                return mapView.lonLatToProjectedUnits({
                    lon: coordinates[0],
                    lat: coordinates[1]
                });
            }
        }
    };
    MapPointSeries.prototype.translate = function () {
        var _this = this;
        var mapView = this.chart.mapView;
        this.generatePoints();
        if (this.getProjectedBounds && this.isDirtyData) {
            delete this.bounds;
            this.getProjectedBounds(); // Added point needs bounds(#16598)
        }
        // Create map based translation
        if (mapView) {
            var mainSvgTransform_1 = mapView.getSVGTransform(), hasCoordinates_1 = mapView.projection.hasCoordinates;
            this.points.forEach(function (p) {
                var _a = p.x, x = _a === void 0 ? void 0 : _a, _b = p.y, y = _b === void 0 ? void 0 : _b;
                var svgTransform = (isNumber(p.insetIndex) &&
                    mapView.insets[p.insetIndex].getSVGTransform()) || mainSvgTransform_1;
                var xy = (_this.projectPoint(p.options) ||
                    (p.properties &&
                        _this.projectPoint(p.properties)));
                var didBounds;
                if (xy) {
                    x = xy.x;
                    y = xy.y;
                    // Map bubbles getting geometry from shape
                }
                else if (p.bounds) {
                    x = p.bounds.midX;
                    y = p.bounds.midY;
                    if (svgTransform && isNumber(x) && isNumber(y)) {
                        p.plotX = x * svgTransform.scaleX +
                            svgTransform.translateX;
                        p.plotY = y * svgTransform.scaleY +
                            svgTransform.translateY;
                        didBounds = true;
                    }
                }
                if (isNumber(x) && isNumber(y)) {
                    // Establish plotX and plotY
                    if (!didBounds) {
                        var plotCoords = mapView.projectedUnitsToPixels({ x: x, y: y });
                        p.plotX = plotCoords.x;
                        p.plotY = hasCoordinates_1 ?
                            plotCoords.y :
                            _this.chart.plotHeight - plotCoords.y;
                    }
                }
                else {
                    p.y = p.plotX = p.plotY = void 0;
                }
                p.isInside = _this.isPointInside(p);
                // Find point zone
                p.zone = _this.zones.length ? p.getZone() : void 0;
            });
        }
        fireEvent(this, 'afterTranslate');
    };
    MapPointSeries.defaultOptions = merge(ScatterSeries.defaultOptions, MapPointSeriesDefaults);
    return MapPointSeries;
}(ScatterSeries));
/* *
 *
 * Extra
 *
 * */
/* *
 * The mapmarker symbol
 */
var mapmarker = function (x, y, w, h, options) {
    var isLegendSymbol = options && options.context === 'legend';
    var anchorX, anchorY;
    if (isLegendSymbol) {
        anchorX = x + w / 2;
        anchorY = y + h;
        // Put the pin in the anchor position (dataLabel.shape)
    }
    else if (options &&
        typeof options.anchorX === 'number' &&
        typeof options.anchorY === 'number') {
        anchorX = options.anchorX;
        anchorY = options.anchorY;
        // Put the pin in the center and shift upwards (point.marker.symbol)
    }
    else {
        anchorX = x + w / 2;
        anchorY = y + h / 2;
        y -= h;
    }
    var r = isLegendSymbol ? h / 3 : h / 2;
    return [
        ['M', anchorX, anchorY],
        ['C', anchorX, anchorY, anchorX - r, y + r * 1.5, anchorX - r, y + r],
        // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
        ['A', r, r, 1, 1, 1, anchorX + r, y + r],
        ['C', anchorX + r, y + r * 1.5, anchorX, anchorY, anchorX, anchorY],
        ['Z']
    ];
};
SVGRenderer.prototype.symbols.mapmarker = mapmarker;
extend(MapPointSeries.prototype, {
    type: 'mappoint',
    axisTypes: ['colorAxis'],
    forceDL: true,
    isCartesian: false,
    pointClass: MapPointPoint,
    searchPoint: noop,
    useMapGeometry: true // #16534
});
SeriesRegistry.registerSeriesType('mappoint', MapPointSeries);
/* *
 *
 *  Default Export
 *
 * */
export default MapPointSeries;
/* *
 *
 *  API Options
 *
 * */
''; // Adds doclets above to transpiled file
