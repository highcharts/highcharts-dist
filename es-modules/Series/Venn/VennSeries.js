/* *
 *
 *  Experimental Highcharts module which enables visualization of a Venn
 *  diagram.
 *
 *  (c) 2016-2025 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  Layout algorithm by Ben Frederickson:
 *  https://www.benfrederickson.com/better-venn-diagrams/
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import A from '../../Core/Animation/AnimationUtilities.js';
const { animObject } = A;
import Color from '../../Core/Color/Color.js';
const { parse: color } = Color;
import CU from '../../Core/Geometry/CircleUtilities.js';
const { getAreaOfIntersectionBetweenCircles, getCirclesIntersectionPolygon, isCircle1CompletelyOverlappingCircle2, isPointInsideAllCircles, isPointOutsideAllCircles } = CU;
import DPU from '../DrawPointUtilities.js';
import GU from '../../Core/Geometry/GeometryUtilities.js';
const { getCenterOfPoints } = GU;
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { scatter: ScatterSeries } = SeriesRegistry.seriesTypes;
import VennPoint from './VennPoint.js';
import VennSeriesDefaults from './VennSeriesDefaults.js';
import VennUtils from './VennUtils.js';
import U from '../../Core/Utilities.js';
const { addEvent, extend, isArray, isNumber, isObject, merge } = U;
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.venn
 *
 * @augments Highcharts.Series
 */
class VennSeries extends ScatterSeries {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Finds the optimal label position by looking for a position that has a low
     * distance from the internal circles, and as large possible distance to the
     * external circles.
     * @private
     * @todo Optimize the intial position.
     * @todo Add unit tests.
     * @param {Array<Highcharts.CircleObject>} internal
     * Internal circles.
     * @param {Array<Highcharts.CircleObject>} external
     * External circles.
     * @return {Highcharts.PositionObject}
     * Returns the found position.
     */
    static getLabelPosition(internal, external) {
        // Get the best label position within the internal circles.
        let best = internal.reduce((best, circle) => {
            const d = circle.r / 2;
            // Give a set of points with the circle to evaluate as the best
            // label position.
            return [
                { x: circle.x, y: circle.y },
                { x: circle.x + d, y: circle.y },
                { x: circle.x - d, y: circle.y },
                { x: circle.x, y: circle.y + d },
                { x: circle.x, y: circle.y - d }
            ]
                // Iterate the given points and return the one with the
                // largest margin.
                .reduce((best, point) => {
                const margin = VennUtils.getMarginFromCircles(point, internal, external);
                // If the margin better than the current best, then
                // update sbest.
                if (best.margin < margin) {
                    best.point = point;
                    best.margin = margin;
                }
                return best;
            }, best);
        }, {
            point: void 0,
            margin: -Number.MAX_VALUE
        }).point;
        // Use nelder mead to optimize the initial label position.
        const optimal = VennUtils.nelderMead((p) => -(VennUtils.getMarginFromCircles({ x: p[0], y: p[1] }, internal, external)), [
            best.x,
            best.y
        ]);
        // Update best to be the point which was found to have the best margin.
        best = {
            x: optimal[0],
            y: optimal[1]
        };
        if (!(isPointInsideAllCircles(best, internal) &&
            isPointOutsideAllCircles(best, external))) {
            // If point was either outside one of the internal, or inside one of
            // the external, then it was invalid and should use a fallback.
            if (internal.length > 1) {
                best = getCenterOfPoints(getCirclesIntersectionPolygon(internal));
            }
            else {
                best = {
                    x: internal[0].x,
                    y: internal[0].y
                };
            }
        }
        // Return the best point.
        return best;
    }
    /**
     * Calculates data label values for a given relations object.
     *
     * @private
     * @todo add unit tests
     * @param {Highcharts.VennRelationObject} relation A relations object.
     * @param {Array<Highcharts.VennRelationObject>} setRelations The list of
     * relations that is a set.
     * @return {Highcharts.VennLabelValuesObject}
     * Returns an object containing position and width of the label.
     */
    static getLabelValues(relation, setRelations) {
        const sets = relation.sets;
        // Create a list of internal and external circles.
        const data = setRelations.reduce((data, set) => {
            // If the set exists in this relation, then it is internal,
            // otherwise it will be external.
            const isInternal = sets.indexOf(set.sets[0]) > -1;
            const property = isInternal ? 'internal' : 'external';
            // Add the circle to the list.
            if (set.circle) {
                data[property].push(set.circle);
            }
            return data;
        }, {
            internal: [],
            external: []
        });
        // Filter out external circles that are completely overlapping all
        // internal
        data.external = data.external.filter((externalCircle) => data.internal.some((internalCircle) => !isCircle1CompletelyOverlappingCircle2(externalCircle, internalCircle)));
        // Calculate the label position.
        const position = VennSeries.getLabelPosition(data.internal, data.external);
        // Calculate the label width
        const width = VennUtils.getLabelWidth(position, data.internal, data.external);
        return {
            position,
            width
        };
    }
    /**
     * Calculates the positions, and the label values of all the sets in the
     * venn diagram.
     *
     * @private
     * @todo Add support for constrained MDS.
     * @param {Array<Highchats.VennRelationObject>} relations
     * List of the overlap between two or more sets, or the size of a single
     * set.
     * @return {Highcharts.Dictionary<*>}
     * List of circles and their calculated positions.
     */
    static layout(relations) {
        const mapOfIdToShape = {};
        const mapOfIdToLabelValues = {};
        // Calculate best initial positions by using greedy layout.
        if (relations.length > 0) {
            const mapOfIdToCircles = VennUtils.layoutGreedyVenn(relations);
            const setRelations = relations.filter(VennUtils.isSet);
            for (const relation of relations) {
                const sets = relation.sets;
                const id = sets.join();
                // Get shape from map of circles, or calculate intersection.
                const shape = VennUtils.isSet(relation) ?
                    mapOfIdToCircles[id] :
                    getAreaOfIntersectionBetweenCircles(sets.map((set) => mapOfIdToCircles[set]));
                // Calculate label values if the set has a shape
                if (shape) {
                    mapOfIdToShape[id] = shape;
                    mapOfIdToLabelValues[id] = VennSeries.getLabelValues(relation, setRelations);
                }
            }
        }
        return { mapOfIdToShape, mapOfIdToLabelValues };
    }
    /**
     * Calculates the proper scale to fit the cloud inside the plotting area.
     * @private
     * @todo add unit test
     * @param {number} targetWidth
     * Width of target area.
     * @param {number} targetHeight
     * Height of target area.
     * @param {Highcharts.PolygonBoxObject} field
     * The playing field.
     * @return {Highcharts.Dictionary<number>}
     * Returns the value to scale the playing field up to the size of the target
     * area, and center of x and y.
     */
    static getScale(targetWidth, targetHeight, field) {
        const height = field.bottom - field.top, // Top is smaller than bottom
        width = field.right - field.left, scaleX = width > 0 ? 1 / width * targetWidth : 1, scaleY = height > 0 ? 1 / height * targetHeight : 1, adjustX = (field.right + field.left) / 2, adjustY = (field.top + field.bottom) / 2, scale = Math.min(scaleX, scaleY);
        return {
            scale: scale,
            centerX: targetWidth / 2 - adjustX * scale,
            centerY: targetHeight / 2 - adjustY * scale
        };
    }
    /**
     * If a circle is outside a give field, then the boundaries of the field is
     * adjusted accordingly. Modifies the field object which is passed as the
     * first parameter.
     * @private
     * @todo NOTE: Copied from wordcloud, can probably be unified.
     * @param {Highcharts.PolygonBoxObject} field
     * The bounding box of a playing field.
     * @param {Highcharts.CircleObject} circle
     * The bounding box for a placed point.
     * @return {Highcharts.PolygonBoxObject}
     * Returns a modified field object.
     */
    static updateFieldBoundaries(field, circle) {
        const left = circle.x - circle.r, right = circle.x + circle.r, bottom = circle.y + circle.r, top = circle.y - circle.r;
        // TODO improve type checking.
        if (!isNumber(field.left) || field.left > left) {
            field.left = left;
        }
        if (!isNumber(field.right) || field.right < right) {
            field.right = right;
        }
        if (!isNumber(field.top) || field.top > top) {
            field.top = top;
        }
        if (!isNumber(field.bottom) || field.bottom < bottom) {
            field.bottom = bottom;
        }
        return field;
    }
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    animate(init) {
        if (!init) {
            const series = this, animOptions = animObject(series.options.animation);
            for (const point of series.points) {
                const args = point.shapeArgs;
                if (point.graphic && args) {
                    const attr = {}, animate = {};
                    if (args.d) {
                        // If shape is a path, then animate opacity.
                        attr.opacity = 0.001;
                    }
                    else {
                        // If shape is a circle, then animate radius.
                        attr.r = 0;
                        animate.r = args.r;
                    }
                    point.graphic
                        .attr(attr)
                        .animate(animate, animOptions);
                    // If shape is path, then fade it in after the circles
                    // animation
                    if (args.d) {
                        setTimeout(() => {
                            point?.graphic?.animate({
                                opacity: 1
                            });
                        }, animOptions.duration);
                    }
                }
            }
        }
    }
    /**
     * Draw the graphics for each point.
     * @private
     */
    drawPoints() {
        const series = this, 
        // Series properties
        chart = series.chart, group = series.group, points = series.points || [], 
        // Chart properties
        renderer = chart.renderer;
        // Iterate all points and calculate and draw their graphics.
        for (const point of points) {
            const attribs = {
                zIndex: isArray(point.sets) ? point.sets.length : 0
            }, shapeArgs = point.shapeArgs;
            // Add point attribs
            if (!chart.styledMode) {
                extend(attribs, series.pointAttribs(point, point.state));
            }
            // Draw the point graphic.
            DPU.draw(point, {
                isNew: !point.graphic,
                animatableAttribs: shapeArgs,
                attribs: attribs,
                group: group,
                renderer: renderer,
                shapeType: shapeArgs?.d ? 'path' : 'circle'
            });
        }
    }
    init() {
        ScatterSeries.prototype.init.apply(this, arguments);
        // Venn's opacity is a different option from other series
        delete this.opacity;
    }
    /**
     * Calculates the style attributes for a point. The attributes can vary
     * depending on the state of the point.
     * @private
     * @param {Highcharts.Point} point
     * The point which will get the resulting attributes.
     * @param {string} [state]
     * The state of the point.
     * @return {Highcharts.SVGAttributes}
     * Returns the calculated attributes.
     */
    pointAttribs(point, state) {
        const series = this, seriesOptions = series.options || {}, pointOptions = point?.options || {}, stateOptions = (state && seriesOptions.states[state]) || {}, options = merge(seriesOptions, { color: point?.color }, pointOptions, stateOptions);
        // Return resulting values for the attributes.
        return {
            'fill': color(options.color)
                .brighten(options.brightness)
                .get(),
            // Set opacity directly to the SVG element, not to pattern #14372.
            opacity: options.opacity,
            'stroke': options.borderColor,
            'stroke-width': options.borderWidth,
            'dashstyle': options.borderDashStyle
        };
    }
    translate() {
        const chart = this.chart;
        this.dataTable.modified = this.dataTable;
        this.generatePoints();
        // Process the data before passing it into the layout function.
        const relations = VennUtils.processVennData(this.options.data, VennSeries.splitter);
        // Calculate the positions of each circle.
        const { mapOfIdToShape, mapOfIdToLabelValues } = VennSeries.layout(relations);
        // Calculate the scale, and center of the plot area.
        const field = Object.keys(mapOfIdToShape)
            .filter((key) => {
            const shape = mapOfIdToShape[key];
            return shape && isNumber(shape.r);
        })
            .reduce((field, key) => VennSeries.updateFieldBoundaries(field, mapOfIdToShape[key]), {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }), scaling = VennSeries.getScale(chart.plotWidth, chart.plotHeight, field), scale = scaling.scale, centerX = scaling.centerX, centerY = scaling.centerY;
        // Iterate all points and calculate and draw their graphics.
        for (const point of this.points) {
            const sets = isArray(point.sets) ? point.sets : [], id = sets.join(), shape = mapOfIdToShape[id], dataLabelValues = mapOfIdToLabelValues[id] || {}, dlOptions = point.options?.dataLabels;
            let shapeArgs, dataLabelWidth = dataLabelValues.width, dataLabelPosition = dataLabelValues.position;
            if (shape) {
                if (shape.r) {
                    shapeArgs = {
                        x: centerX + shape.x * scale,
                        y: centerY + shape.y * scale,
                        r: shape.r * scale
                    };
                }
                else if (shape.d) {
                    const d = shape.d;
                    d.forEach((seg) => {
                        if (seg[0] === 'M') {
                            seg[1] = centerX + seg[1] * scale;
                            seg[2] = centerY + seg[2] * scale;
                        }
                        else if (seg[0] === 'A') {
                            seg[1] = seg[1] * scale;
                            seg[2] = seg[2] * scale;
                            seg[6] = centerX + seg[6] * scale;
                            seg[7] = centerY + seg[7] * scale;
                        }
                    });
                    shapeArgs = { d };
                }
                // Scale the position for the data label.
                if (dataLabelPosition) {
                    dataLabelPosition.x = centerX + dataLabelPosition.x * scale;
                    dataLabelPosition.y = centerY + dataLabelPosition.y * scale;
                }
                else {
                    dataLabelPosition = {};
                }
                if (isNumber(dataLabelWidth)) {
                    dataLabelWidth = Math.round(dataLabelWidth * scale);
                }
            }
            point.shapeArgs = shapeArgs;
            // Placement for the data labels
            if (dataLabelPosition && shapeArgs) {
                point.plotX = dataLabelPosition.x;
                point.plotY = dataLabelPosition.y;
            }
            // Add width for the data label
            if (dataLabelWidth && shapeArgs) {
                point.dlOptions = merge(true, {
                    style: {
                        width: dataLabelWidth
                    }
                }, isObject(dlOptions, true) ? dlOptions : void 0);
            }
            // Set name for usage in tooltip and in data label.
            point.name = point.options.name || sets.join('∩');
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
VennSeries.splitter = 'highcharts-split';
VennSeries.defaultOptions = merge(ScatterSeries.defaultOptions, VennSeriesDefaults);
extend(VennSeries.prototype, {
    axisTypes: [],
    directTouch: true,
    isCartesian: false,
    pointArrayMap: ['value'],
    pointClass: VennPoint,
    utils: VennUtils
});
// Modify final series options.
addEvent(VennSeries, 'afterSetOptions', function (e) {
    const options = e.options, states = options.states || {};
    if (this.is('venn')) {
        // Explicitly disable all halo options.
        for (const state of Object.keys(states)) {
            states[state].halo = false;
        }
    }
});
SeriesRegistry.registerSeriesType('venn', VennSeries);
/* *
 *
 *  Default Export
 *
 * */
export default VennSeries;
