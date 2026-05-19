/* *
 *
 *  Highcharts module to hide overlapping data labels.
 *  This module is included in Highcharts.
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import GeometryUtilities from '../Geometry/GeometryUtilities.js';
var pointInPolygon = GeometryUtilities.pointInPolygon;
import { addEvent, fireEvent, getAlignFactor, objectEach, pick } from '../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * Hide overlapping labels. Labels are moved and faded in and out on zoom to
 * provide a smooth visual impression.
 *
 * @internal
 * @function Highcharts.Chart#hideOverlappingLabels
 * @param {Array<Highcharts.SVGElement>} labels
 *        Rendered data labels
 */
function chartHideOverlappingLabels(labels) {
    var chart = this, len = labels.length, isIntersectRect = function (box1, box2) { return !(box2.x >= box1.x + box1.width ||
        box2.x + box2.width <= box1.x ||
        box2.y >= box1.y + box1.height ||
        box2.y + box2.height <= box1.y); }, isPolygonOverlap = function (box1Poly, box2Poly) {
        for (var _i = 0, box1Poly_1 = box1Poly; _i < box1Poly_1.length; _i++) {
            var p = box1Poly_1[_i];
            if (pointInPolygon({ x: p[0], y: p[1] }, box2Poly)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Get the box with its position inside the chart, as opposed to getBBox
     * that only reports the position relative to the parent.
     */
    function getAbsoluteBox(label) {
        var _a, _b, _c;
        if (label && (!label.alignAttr || label.placed)) {
            var padding = label.box ? 0 : (label.padding || 0), pos = ((_a = label.dataLabelPosition) === null || _a === void 0 ? void 0 : _a.posAttribs) || // #21725
                label.alignAttr ||
                {
                    x: label.attr('x'),
                    y: label.attr('y')
                }, _d = label.getBBox(), height = _d.height, polygon = _d.polygon, width = _d.width, alignOffset = getAlignFactor(label.alignValue) * width;
            label.width = width;
            label.height = height;
            return {
                x: pos.x + (((_b = label.parentGroup) === null || _b === void 0 ? void 0 : _b.translateX) || 0) + padding - alignOffset,
                y: pos.y + (((_c = label.parentGroup) === null || _c === void 0 ? void 0 : _c.translateY) || 0) + padding,
                width: width - 2 * padding,
                height: height - 2 * padding,
                polygon: polygon
            };
        }
    }
    var label, label1, label2, box1, box2, isLabelAffected = false;
    for (var i = 0; i < len; i++) {
        label = labels[i];
        if (label) {
            // Mark with initial opacity
            label.oldOpacity = label.opacity;
            label.newOpacity = 1;
            label.absoluteBox = getAbsoluteBox(label);
        }
    }
    // Prevent a situation in a gradually rising slope, that each label will
    // hide the previous one because the previous one always has lower rank.
    labels.sort(function (a, b) { return ((b === null || b === void 0 ? void 0 : b.labelrank) || 0) - ((a === null || a === void 0 ? void 0 : a.labelrank) || 0); });
    // Detect overlapping labels
    for (var i = 0; i < len; ++i) {
        label1 = labels[i];
        box1 = label1 && label1.absoluteBox;
        var box1Poly = box1 === null || box1 === void 0 ? void 0 : box1.polygon;
        for (var j = i + 1; j < len; ++j) {
            label2 = labels[j];
            box2 = label2 && label2.absoluteBox;
            var toHide = false;
            if (box1 &&
                box2 &&
                label1 !== label2 && // #6465, polar chart with connectEnds
                (label1 === null || label1 === void 0 ? void 0 : label1.newOpacity) !== 0 &&
                (label2 === null || label2 === void 0 ? void 0 : label2.newOpacity) !== 0 &&
                // #15863 dataLabels are no longer hidden by translation
                (label1 === null || label1 === void 0 ? void 0 : label1.visibility) !== 'hidden' &&
                (label2 === null || label2 === void 0 ? void 0 : label2.visibility) !== 'hidden') {
                var box2Poly = box2.polygon;
                // If labels have polygons, only evaluate
                // based on polygons
                if (box1Poly &&
                    box2Poly &&
                    box1Poly !== box2Poly) {
                    if (isPolygonOverlap(box1Poly, box2Poly)) {
                        toHide = true;
                    }
                    // If there are no polygons, evaluate rectangles colliding
                }
                else if (isIntersectRect(box1, box2)) {
                    toHide = true;
                }
                if (toHide) {
                    var overlappingLabel = ((label1 === null || label1 === void 0 ? void 0 : label1.labelrank) < (label2 === null || label2 === void 0 ? void 0 : label2.labelrank) ?
                        label1 :
                        label2), labelText = overlappingLabel === null || overlappingLabel === void 0 ? void 0 : overlappingLabel.text;
                    if (overlappingLabel) {
                        overlappingLabel.newOpacity = 0;
                    }
                    if (labelText === null || labelText === void 0 ? void 0 : labelText.element.querySelector('textPath')) {
                        labelText.hide();
                    }
                }
            }
        }
    }
    // Hide or show
    for (var _i = 0, labels_1 = labels; _i < labels_1.length; _i++) {
        var label_1 = labels_1[_i];
        if (label_1 && hideOrShow(label_1, chart)) {
            isLabelAffected = true;
        }
    }
    if (isLabelAffected) {
        fireEvent(chart, 'afterHideAllOverlappingLabels');
    }
}
/** @internal */
export function composeOverlappingDataLabels(ChartClass) {
    var chartProto = ChartClass.prototype;
    if (!chartProto.hideOverlappingLabels) {
        chartProto.hideOverlappingLabels = chartHideOverlappingLabels;
        addEvent(ChartClass, 'render', onChartRender);
    }
}
/**
 * Hide or show labels based on opacity.
 *
 * @internal
 * @function hideOrShow
 * @param {Highcharts.SVGElement} label
 * The label.
 * @param {Highcharts.Chart} chart
 * The chart that contains the label.
 * @return {boolean}
 * Whether label is affected
 */
function hideOrShow(label, chart) {
    var complete, newOpacity, isLabelAffected = false;
    if (label) {
        newOpacity = label.newOpacity;
        if (label.oldOpacity !== newOpacity) {
            // Toggle data labels
            if (label.hasClass('highcharts-data-label')) {
                // Make sure the label is completely hidden to avoid catching
                // clicks (#4362)
                label[newOpacity ? 'removeClass' : 'addClass']('highcharts-data-label-hidden');
                complete = function () {
                    if (!chart.styledMode) {
                        label.css({
                            pointerEvents: newOpacity ? 'auto' : 'none'
                        });
                    }
                };
                isLabelAffected = true;
                // Animate or set the opacity
                label[label.isOld || label.placed ? 'animate' : 'attr']({ opacity: newOpacity }, void 0, complete);
                fireEvent(chart, 'afterHideOverlappingLabel');
                // Toggle other labels, tick labels
            }
            else {
                label.attr({
                    opacity: newOpacity
                });
            }
        }
        label.isOld = true;
    }
    return isLabelAffected;
}
/**
 * Collect potential overlapping data labels. Stack labels probably don't need
 * to be considered because they are usually accompanied by data labels that lie
 * inside the columns.
 * @internal
 */
function onChartRender() {
    var _a;
    var chart = this;
    var labels = [];
    // Consider external label collectors
    for (var _i = 0, _b = (chart.labelCollectors || []); _i < _b.length; _i++) {
        var collector = _b[_i];
        labels = labels.concat(collector());
    }
    for (var _c = 0, _d = (chart.yAxis || []); _c < _d.length; _c++) {
        var yAxis = _d[_c];
        if (yAxis.stacking &&
            yAxis.options.stackLabels &&
            !yAxis.options.stackLabels.allowOverlap) {
            objectEach(yAxis.stacking.stacks, function (stack) {
                objectEach(stack, function (stackItem) {
                    if (stackItem.label) {
                        labels.push(stackItem.label);
                    }
                });
            });
        }
    }
    var _loop_1 = function (series) {
        if (series.visible && ((_a = series.hasDataLabels) === null || _a === void 0 ? void 0 : _a.call(series))) { // #3866
            var push = function (points) {
                var _loop_2 = function (point) {
                    if (point.visible) {
                        (point.dataLabels || []).forEach(function (label) {
                            var _a, _b;
                            var options = label.options || {};
                            label.labelrank = pick(options.labelrank, point.labelrank, (_a = point.shapeArgs) === null || _a === void 0 ? void 0 : _a.height); // #4118
                            // #21725: Sync target positions for generic overlap
                            // checking. During animations (e.g., toggling a
                            // point), DOM positions may overlap. We force
                            // alignAttr to the final target coordinates so
                            // getAbsoluteBox() evaluates the final resting
                            // positions.
                            /*
                            // Commented out because it caused initial overlap
                            // in the highcharts/demo/pie-semi-circle sample.
                            const pos = label.dataLabelPosition?.posAttribs;
                            if (pos) {
                                label.alignAttr = label.alignAttr || {};
                                label.alignAttr.x = pos.x;
                                label.alignAttr.y = pos.y;
                            }
                            */
                            // Allow overlap if the option is explicitly true
                            if (
                            // #13449
                            (_b = options.allowOverlap) !== null && _b !== void 0 ? _b : 
                            // Pie labels outside have a separate placement
                            // logic, skip the overlap logic
                            (series.is('pie') &&
                                Number(options.distance) > 0)) {
                                label.oldOpacity = label.opacity;
                                label.newOpacity = 1;
                                hideOrShow(label, chart);
                                // Do not allow overlap
                            }
                            else {
                                labels.push(label);
                            }
                        });
                    }
                };
                for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
                    var point = points_1[_i];
                    _loop_2(point);
                }
            };
            push(series.nodes || []);
            push(series.points);
        }
    };
    for (var _e = 0, _f = (chart.series || []); _e < _f.length; _e++) {
        var series = _f[_e];
        _loop_1(series);
    }
    this.hideOverlappingLabels(labels);
}
