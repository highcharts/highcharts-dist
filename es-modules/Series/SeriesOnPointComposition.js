/* *
 *
 *  (c) 2010-2025 Rafal Sebestjanski, Piotr Madej
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import DataTableCore from '../Data/DataTableCore.js';
import H from '../Core/Globals.js';
const { composed } = H;
import Point from '../Core/Series/Point.js';
import Series from '../Core/Series/Series.js';
import SeriesRegistry from '../Core/Series/SeriesRegistry.js';
const { bubble } = SeriesRegistry.seriesTypes;
import SVGRenderer from '../Core/Renderer/SVG/SVGRenderer.js';
import U from '../Core/Utilities.js';
const { addEvent, defined, find, isNumber, pushUnique } = U;
/* *
 *
 *  Composition
 *
 * */
var SeriesOnPointComposition;
(function (SeriesOnPointComposition) {
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
    /**
     * Extends the series with a small addition.
     *
     * @private
     *
     * @param SeriesClass
     * Series class to use.
     *
     * @param ChartClass
     * Chart class to use.
     */
    function compose(SeriesClass, ChartClass) {
        if (pushUnique(composed, 'SeriesOnPoint')) {
            const { chartGetZData, seriesAfterInit, seriesAfterRender, seriesGetCenter, seriesShowOrHide, seriesTranslate } = Additions.prototype;
            // We can mark support for pie series here because it's in the core.
            // But all other series outside the core should be marked in its
            // module. This is crucial when loading series-on-point before
            // loading a module, e.g. sunburst.
            // Supported series types:
            // - pie
            // - sunburst
            SeriesClass.types.pie.prototype.onPointSupported = true;
            addEvent(SeriesClass, 'afterInit', seriesAfterInit);
            addEvent(SeriesClass, 'afterRender', seriesAfterRender);
            addEvent(SeriesClass, 'afterGetCenter', seriesGetCenter);
            addEvent(SeriesClass, 'hide', seriesShowOrHide);
            addEvent(SeriesClass, 'show', seriesShowOrHide);
            addEvent(SeriesClass, 'translate', seriesTranslate);
            addEvent(ChartClass, 'beforeRender', chartGetZData);
            addEvent(ChartClass, 'beforeRedraw', chartGetZData);
        }
        return SeriesClass;
    }
    SeriesOnPointComposition.compose = compose;
    /* *
     *
     *  Classes
     *
     * */
    /**
     * @private
     */
    class Additions {
        /* *
         *
         *  Constructors
         *
         * */
        /**
         * @private
         */
        constructor(series) {
            /**
             * @ignore
             */
            this.getColumn = bubble.prototype.getColumn;
            /**
             * @ignore
             */
            this.getRadii = bubble.prototype.getRadii;
            /**
             * @ignore
             */
            this.getRadius = bubble.prototype.getRadius;
            /**
             * @ignore
             */
            this.getPxExtremes = bubble.prototype.getPxExtremes;
            /**
             * @ignore
             */
            this.getZExtremes = bubble.prototype.getZExtremes;
            this.chart = series.chart;
            this.series = series;
            this.options = series.options.onPoint;
        }
        /**
         * Draw connector line that starts from the initial point's position
         * and ends in the center of the series.
         * @private
         */
        drawConnector() {
            if (!this.connector) {
                this.connector = this.series.chart.renderer.path()
                    .addClass('highcharts-connector-seriesonpoint')
                    .attr({
                    zIndex: -1
                })
                    .add(this.series.markerGroup);
            }
            const attribs = this.getConnectorAttributes();
            attribs && this.connector.animate(attribs);
        }
        /**
         * Get connector line path and styles that connects series and point.
         *
         * @private
         *
         * @return {Highcharts.SVGAttributes} attribs - the path and styles.
         */
        getConnectorAttributes() {
            const chart = this.series.chart, onPointOptions = this.options;
            if (!onPointOptions) {
                return;
            }
            const connectorOpts = onPointOptions.connectorOptions || {}, position = onPointOptions.position, connectedPoint = chart.get(onPointOptions.id);
            if (!(connectedPoint instanceof Point) ||
                !position ||
                !defined(connectedPoint.plotX) ||
                !defined(connectedPoint.plotY)) {
                return;
            }
            const xFrom = defined(position.x) ?
                position.x :
                connectedPoint.plotX, yFrom = defined(position.y) ?
                position.y :
                connectedPoint.plotY, xTo = xFrom + (position.offsetX || 0), yTo = yFrom + (position.offsetY || 0), width = connectorOpts.width || 1, color = connectorOpts.stroke || this.series.color, dashStyle = connectorOpts.dashstyle, attribs = {
                d: SVGRenderer.prototype.crispLine([
                    ['M', xFrom, yFrom],
                    ['L', xTo, yTo]
                ], width),
                'stroke-width': width
            };
            if (!chart.styledMode) {
                attribs.stroke = color;
                attribs.dashstyle = dashStyle;
            }
            return attribs;
        }
        /**
         * Initialize Series on point on series init.
         *
         * @ignore
         */
        seriesAfterInit() {
            if (this.onPointSupported && this.options.onPoint) {
                this.bubblePadding = true;
                this.useMapGeometry = true;
                this.onPoint = new Additions(this);
            }
        }
        /**
         * @ignore
         */
        seriesAfterRender() {
            // Clear bubbleZExtremes to reset z calculations on update.
            delete this.chart.bubbleZExtremes;
            this.onPoint && this.onPoint.drawConnector();
        }
        /**
         * Recalculate series.center (x, y and size).
         *
         * @ignore
         */
        seriesGetCenter(e) {
            const onPointOptions = this.options.onPoint, center = e.positions;
            if (onPointOptions) {
                const connectedPoint = this.chart.get(onPointOptions.id);
                if (connectedPoint instanceof Point &&
                    defined(connectedPoint.plotX) &&
                    defined(connectedPoint.plotY)) {
                    center[0] = connectedPoint.plotX;
                    center[1] = connectedPoint.plotY;
                }
                const position = onPointOptions.position;
                if (position) {
                    if (defined(position.x)) {
                        center[0] = position.x;
                    }
                    if (defined(position.y)) {
                        center[1] = position.y;
                    }
                    if (position.offsetX) {
                        center[0] += position.offsetX;
                    }
                    if (position.offsetY) {
                        center[1] += position.offsetY;
                    }
                }
            }
            // Get and set the size
            const radius = this.radii && this.radii[this.index];
            if (isNumber(radius)) {
                center[2] = radius * 2;
            }
            e.positions = center;
        }
        /**
         * @ignore
         */
        seriesShowOrHide() {
            const allSeries = this.chart.series;
            // When toggling a series visibility, loop through all points
            this.points?.forEach((point) => {
                // Find all series that are on toggled points
                const series = find(allSeries, (series) => {
                    const id = ((series.onPoint || {}).options || {}).id;
                    if (!id) {
                        return false;
                    }
                    return id === point.id;
                });
                // And also toggle series that are on toggled points. Redraw is
                // not needed because it's fired later after showOrHide event
                series && series.setVisible(!series.visible, false);
            });
        }
        /**
         * Calculate required radius (z data) before original translate.
         *
         * @ignore
         * @function Highcharts.Series#translate
         */
        seriesTranslate() {
            if (this.onPoint) {
                this.onPoint.getRadii();
                this.radii = this.onPoint.radii;
            }
        }
        /**
         * @ignore
         */
        chartGetZData() {
            const zData = [];
            this.series.forEach((series) => {
                const onPointOpts = series.options.onPoint;
                zData.push(onPointOpts?.z ?? null);
            });
            const dataTable = new DataTableCore({
                columns: {
                    z: zData
                }
            });
            this.series.forEach((series) => {
                // Save z values of all the series
                if (series.onPoint) {
                    series.onPoint.dataTable = series.dataTable = dataTable;
                }
            });
        }
    }
    SeriesOnPointComposition.Additions = Additions;
})(SeriesOnPointComposition || (SeriesOnPointComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
export default SeriesOnPointComposition;
/* *
 *
 *  API Options
 *
 * */
/**
 * Options for the _Series on point_ feature. Only `pie` and `sunburst` series
 * are supported at this moment.
 *
 * @sample      {highcharts} highcharts/series-on-point/series-on-point
 *              Series on point
 * @sample      {highmaps} maps/demo/map-pies
 *              Pies on a map
 * @requires    modules/series-on-point
 * @since 10.2.0
 * @type        {object}
 * @apioption   plotOptions.series.onPoint
 */
/**
 * Options for the connector in the _Series on point_ feature.
 *
 * In styled mode, the connector can be styled with the
 * `.highcharts-connector-seriesonpoint` class name.
 *
 * @requires    modules/series-on-point
 * @since 10.2.0
 * @type        {Highcharts.SVGAttributes}
 * @apioption   plotOptions.series.onPoint.connectorOptions
 */
/**
 * Color of the connector line. By default it's the series' color.
 *
 * @requires    modules/series-on-point
 * @since 10.2.0
 * @type        {string}
 * @apioption   plotOptions.series.onPoint.connectorOptions.stroke
 */
/**
 * A name for the dash style to use for the connector.
 *
 * @requires    modules/series-on-point
 * @since 10.2.0
 * @type        {string}
 * @apioption   plotOptions.series.onPoint.connectorOptions.dashstyle
 */
/**
 * Pixel width of the connector line.
 *
 * @default     1
 * @requires    modules/series-on-point
 * @type        {number}
 * @since 10.2.0
 * @apioption   plotOptions.series.onPoint.connectorOptions.width
 */
/**
 * The `id` of the point that we connect the series to. Only points with a given
 * `plotX` and `plotY` values and map points are valid.
 *
 * @requires   modules/series-on-point
 * @since 10.2.0
 * @type       {string}
 * @apioption  plotOptions.series.onPoint.id
 */
/**
 * Options allowing to set a position and an offset of the series in the
 * _Series on point_ feature.
 *
 * @requires    modules/series-on-point
 * @since 10.2.0
 * @type        {object}
 * @apioption   plotOptions.series.onPoint.position
 */
/**
 * Series center offset from the original x position. If defined, the connector
 * line is drawn connecting original position with new position.
 *
 * @requires   modules/series-on-point
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.offsetX
 */
/**
 * Series center offset from the original y position. If defined, the connector
 * line is drawn from original position to a new position.
 *
 * @requires   modules/series-on-point
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.offsetY
 */
/**
 * X position of the series center. By default, the series is displayed on the
 * point that it is connected to.
 *
 * @requires   modules/series-on-point
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.x
 */
/**
 * Y position of the series center. By default, the series is displayed on the
 * point that it is connected to.
 *
 * @requires   modules/series-on-point
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.y
 */
''; // Keeps doclets above in transpiled file
