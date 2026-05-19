/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Grzegorz Blachliński, Sebastian Bochan
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import GraphLayout from '../GraphLayoutComposition.js';
import PackedBubbleIntegration from './PackedBubbleIntegration.js';
import ReingoldFruchtermanLayout from '../Networkgraph/ReingoldFruchtermanLayout.js';
import { addEvent, defined, pick } from '../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function chartGetSelectedParentNodes() {
    var allSeries = this.series, selectedParentsNodes = [];
    allSeries.forEach(function (series) {
        if (series.parentNode && series.parentNode.selected) {
            selectedParentsNodes.push(series.parentNode);
        }
    });
    return selectedParentsNodes;
}
/**
 * Remove accumulated data points to redistribute all of them again
 * (i.e after hiding series by legend)
 * @private
 */
function onChartBeforeRedraw() {
    if (this.allDataPoints) {
        delete this.allDataPoints;
    }
}
/* *
 *
 *  Class
 *
 * */
var PackedBubbleLayout = /** @class */ (function (_super) {
    __extends(PackedBubbleLayout, _super);
    function PackedBubbleLayout() {
        /* *
         *
         *  Static Functions
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = NaN;
        _this.nodes = [];
        _this.series = [];
        return _this;
    }
    PackedBubbleLayout.compose = function (ChartClass) {
        ReingoldFruchtermanLayout.compose(ChartClass);
        GraphLayout.integrations.packedbubble = PackedBubbleIntegration;
        GraphLayout.layouts.packedbubble = PackedBubbleLayout;
        var chartProto = ChartClass.prototype;
        if (!chartProto.getSelectedParentNodes) {
            addEvent(ChartClass, 'beforeRedraw', onChartBeforeRedraw);
            chartProto.getSelectedParentNodes = chartGetSelectedParentNodes;
        }
        if (!chartProto.allParentNodes) {
            chartProto.allParentNodes = [];
        }
    };
    /* *
     *
     *  Functions
     *
     * */
    PackedBubbleLayout.prototype.beforeStep = function () {
        if (this.options.marker) {
            this.series.forEach(function (series) {
                if (series) {
                    series.calculateParentRadius();
                }
            });
        }
    };
    // #14439, new stable check.
    PackedBubbleLayout.prototype.isStable = function () {
        var tempDiff = Math.abs(this.prevSystemTemperature -
            this.systemTemperature);
        var upScaledTemperature = 10 * this.systemTemperature /
            Math.sqrt(this.nodes.length);
        return Math.abs(upScaledTemperature) < 1 &&
            tempDiff < 0.00001 ||
            this.temperature <= 0;
    };
    PackedBubbleLayout.prototype.setCircularPositions = function () {
        var _a;
        var layout = this, box = layout.box, nodes = __spreadArray(__spreadArray([], layout.nodes, true), ((_a = layout === null || layout === void 0 ? void 0 : layout.chart) === null || _a === void 0 ? void 0 : _a.allParentNodes) || [], true), nodesLength = nodes.length + 1, angle = 2 * Math.PI / nodesLength, radius = layout.options.initialPositionRadius;
        var centerX, centerY, index = 0;
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            if (this.resolveSplitSeries(node) &&
                !node.isParentNode) {
                centerX = node.series.parentNode.plotX;
                centerY = node.series.parentNode.plotY;
            }
            else {
                centerX = box.width / 2;
                centerY = box.height / 2;
            }
            node.plotX = node.prevX = pick(node.plotX, centerX +
                radius * Math.cos(node.index || index * angle));
            node.plotY = node.prevY = pick(node.plotY, centerY +
                radius * Math.sin(node.index || index * angle));
            node.dispX = 0;
            node.dispY = 0;
            index++;
        }
    };
    PackedBubbleLayout.prototype.repulsiveForces = function () {
        var _a, _b, _c;
        var layout = this, options = layout.options, k = layout.k, _d = options.bubblePadding, bubblePadding = _d === void 0 ? 0 : _d, seriesInteraction = options.seriesInteraction, nodes = __spreadArray(__spreadArray([], layout.nodes, true), ((_a = layout === null || layout === void 0 ? void 0 : layout.chart) === null || _a === void 0 ? void 0 : _a.allParentNodes) || [], true);
        for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
            var node = nodes_2[_i];
            var nodeSeries = node.series, fixedPosition = node.fixedPosition, paddedNodeRadius = ((((_b = node.marker) === null || _b === void 0 ? void 0 : _b.radius) || 0) +
                bubblePadding);
            node.degree = node.mass;
            node.neighbors = 0;
            for (var _e = 0, nodes_3 = nodes; _e < nodes_3.length; _e++) {
                var repNode = nodes_3[_e];
                var repNodeSeries = repNode.series;
                if (
                // Node cannot repulse itself:
                node !== repNode &&
                    // Not dragged:
                    !fixedPosition &&
                    (seriesInteraction || nodeSeries === repNodeSeries) &&
                    // Avoiding collision of parentNodes and parented points
                    !(nodeSeries === repNodeSeries &&
                        (repNode.isParentNode || node.isParentNode))) {
                    var distanceXY = layout.getDistXY(node, repNode), distanceR = (layout.vectorLength(distanceXY) -
                        (paddedNodeRadius + (((_c = repNode.marker) === null || _c === void 0 ? void 0 : _c.radius) || 0)));
                    var forceTimesMass = void 0;
                    // TODO padding configurable
                    if (distanceR < 0) {
                        node.degree += 0.01;
                        forceTimesMass = (layout.repulsiveForce(-distanceR / Math.sqrt(++(node.neighbors)), k, node, repNode) *
                            repNode.mass);
                    }
                    layout.force('repulsive', node, forceTimesMass || 0, distanceXY, repNode, distanceR);
                }
            }
        }
    };
    PackedBubbleLayout.prototype.resolveSplitSeries = function (node) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var specificSeriesOpt = (_c = (_b = (_a = node
            .series) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.layoutAlgorithm) === null || _c === void 0 ? void 0 : _c.splitSeries;
        return (!defined(specificSeriesOpt) &&
            ((_h = (_g = (_f = (_e = (_d = node.series.chart) === null || _d === void 0 ? void 0 : _d.options) === null || _e === void 0 ? void 0 : _e.plotOptions) === null || _f === void 0 ? void 0 : _f.packedbubble) === null || _g === void 0 ? void 0 : _g.layoutAlgorithm) === null || _h === void 0 ? void 0 : _h.splitSeries)) ||
            specificSeriesOpt ||
            false;
    };
    PackedBubbleLayout.prototype.applyLimitBox = function (node, box) {
        var layout = this, factor = 0.01;
        var distanceXY, distanceR;
        // `parentNodeLimit` should be used together with seriesInteraction:
        // false
        if (this.resolveSplitSeries(node) &&
            !node.isParentNode &&
            layout.options.parentNodeLimit) {
            distanceXY = layout.getDistXY(node, node.series.parentNode);
            distanceR = (node.series.parentNodeRadius -
                node.marker.radius -
                layout.vectorLength(distanceXY));
            if (distanceR < 0 &&
                distanceR > -2 * node.marker.radius) {
                node.plotX -= distanceXY.x * factor;
                node.plotY -= distanceXY.y * factor;
            }
        }
        _super.prototype.applyLimitBox.call(this, node, box);
    };
    return PackedBubbleLayout;
}(ReingoldFruchtermanLayout));
/* *
 *
 *  Registry
 *
 * */
GraphLayout.layouts.packedbubble = PackedBubbleLayout;
/* *
 *
 *  Default Export
 *
 * */
export default PackedBubbleLayout;
