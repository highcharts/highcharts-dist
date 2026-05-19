/* *
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygård
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import BrokenAxis from '../BrokenAxis.js';
import GridAxis from '../GridAxis.js';
import Tree from '../../../Gantt/Tree.js';
import TreeGridTick from './TreeGridTick.js';
import TU from '../../../Series/TreeUtilities.js';
var getLevelOptions = TU.getLevelOptions;
import { addEvent, find, fireEvent, isObject, isString, merge, removeEvent, wrap } from '../../../Shared/Utilities.js';
/* *
 *
 *  Variables
 *
 * */
/** @internal */
var TickConstructor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Returns the current data
 */
function getSeriesData(s) {
    return new Array(s.dataTable.rowCount).fill(void 0)
        .map(function (_, i) {
        return s.dataTable.getRowObject(i);
    });
}
/**
 * Creates a break object from a node.
 * @internal
 * @param {Object} node
 * The node to create a break object from.
 */
function getBreakFromNode(node) {
    return {
        from: node.collapseStart || 0,
        to: node.collapseEnd || 0,
        showPoints: false
    };
}
/**
 * Creates a tree structure of the data, and the treegrid. Calculates
 * categories, and y-values of points based on the tree.
 *
 * @internal
 * @function getTreeGridFromData
 *
 * @param {Array<Highcharts.GanttPointOptions>} data
 * All the data points to display in the axis.
 *
 * @param {boolean} uniqueNames
 * Whether or not the data node with the same name should share grid cell. If
 * true they do share cell. False by default.
 *
 * @param {number} numberOfSeries
 *
 * @return {Object}
 * Returns an object containing categories, mapOfIdToNode,
 * mapOfPosToGridNode, and tree.
 *
 * @todo There should be only one point per line.
 * @todo It should be optional to have one category per point, or merge
 *       cells
 * @todo Add unit-tests.
 */
function getTreeGridFromData(data, uniqueNames, numberOfSeries) {
    var categories = [], collapsedNodes = [], mapOfIdToNode = {}, uniqueNamesEnabled = uniqueNames || false;
    var mapOfPosToGridNode = {}, posIterator = -1;
    // Build the tree from the series data.
    var treeParams = {
        // After the children has been created.
        after: function (node) {
            var gridNode = mapOfPosToGridNode[node.pos];
            var height = 0, descendants = 0;
            gridNode.children.forEach(function (child) {
                descendants += (child.descendants || 0) + 1;
                height = Math.max((child.height || 0) + 1, height);
            });
            gridNode.descendants = descendants;
            gridNode.height = height;
            if (gridNode.collapsed) {
                collapsedNodes.push(gridNode);
            }
        },
        // Before the children has been created.
        before: function (node) {
            var data = isObject(node.data, true) ?
                node.data :
                {}, name = isString(data.name) ? data.name : '', parentNode = mapOfIdToNode[node.parent], parentGridNode = (isObject(parentNode, true) ?
                mapOfPosToGridNode[parentNode.pos] :
                null), hasSameName = function (x) {
                return x.name === name;
            };
            var gridNode, pos;
            // If not unique names, look for sibling node with the same name
            if (uniqueNamesEnabled &&
                isObject(parentGridNode, true) &&
                !!(gridNode = find(parentGridNode.children, hasSameName))) {
                // If there is a gridNode with the same name, reuse position
                pos = gridNode.pos;
                // Add data node to list of nodes in the grid node.
                gridNode.nodes.push(node);
            }
            else {
                // If it is a new grid node, increment position.
                pos = posIterator++;
            }
            // Add new grid node to map.
            if (!mapOfPosToGridNode[pos]) {
                mapOfPosToGridNode[pos] = gridNode = {
                    depth: parentGridNode ? parentGridNode.depth + 1 : 0,
                    name: name,
                    id: data.id,
                    nodes: [node],
                    children: [],
                    pos: pos
                };
                // If not root, then add name to categories.
                if (pos !== -1) {
                    categories.push(name);
                }
                // Add name to list of children.
                if (isObject(parentGridNode, true)) {
                    parentGridNode.children.push(gridNode);
                }
            }
            // Add data node to map
            if (isString(node.id)) {
                mapOfIdToNode[node.id] = node;
            }
            // If one of the points are collapsed, then start the grid node
            // in collapsed state.
            if (gridNode && data.collapsed === true) {
                gridNode.collapsed = true;
            }
            // Assign pos to data node
            node.pos = pos;
        }
    };
    var updateYValuesAndTickPos = function (map, numberOfSeries) {
        var setValues = function (gridNode, start, result) {
            var nodes = gridNode.nodes, padding = 0.5;
            var end = start + (start === -1 ? 0 : numberOfSeries - 1);
            var diff = (end - start) / 2, pos = start + diff;
            nodes.forEach(function (node) {
                var data = node.data;
                if (isObject(data, true)) {
                    // Update point
                    data.y = start + (data.yIndex || 0);
                }
                node.pos = pos;
            });
            result[pos] = gridNode;
            gridNode.pos = pos;
            gridNode.tickmarkOffset = diff + padding;
            gridNode.collapseStart = end + padding;
            gridNode.children.forEach(function (child) {
                setValues(child, end + 1, result);
                end = (child.collapseEnd || 0) - padding;
            });
            // Set collapseEnd to the end of the last child node.
            gridNode.collapseEnd = end + padding;
            return result;
        };
        return setValues(map['-1'], -1, {});
    };
    // Create tree from data
    var tree = Tree.getTree(data, treeParams);
    // Update y values of data, and set calculate tick positions.
    mapOfPosToGridNode = updateYValuesAndTickPos(mapOfPosToGridNode, numberOfSeries);
    // Return the resulting data.
    return {
        categories: categories,
        mapOfIdToNode: mapOfIdToNode,
        mapOfPosToGridNode: mapOfPosToGridNode,
        collapsedNodes: collapsedNodes,
        tree: tree
    };
}
/**
 * Builds the tree of categories and calculates its positions.
 * @internal
 */
function onBeforeRender(e) {
    var chart = e.target, axes = chart.axes;
    axes.filter(function (axis) { return axis.type === 'treegrid'; }).forEach(function (axis) {
        var _a;
        var options = axis.options, labelOptions = options.labels, uniqueNames = axis.uniqueNames, max = chart.time.parse(options.max), 
        // Check whether any of series is rendering for the first
        // time, visibility has changed, or its data is dirty, and
        // only then update. #10570, #10580. Also check if
        // mapOfPosToGridNode exists. #10887
        isDirty = (!axis.treeGrid.mapOfPosToGridNode ||
            axis.series.some(function (series) {
                return !series.hasRendered ||
                    series.isDirtyData ||
                    series.isDirty;
            }));
        var numberOfSeries = 0, data, treeGrid;
        if (isDirty) {
            var seriesHasPrimitivePoints_1 = [];
            // Concatenate data from all series assigned to this axis.
            data = axis.series.reduce(function (arr, s) {
                var seriesData = getSeriesData(s), firstPoint = seriesData[0], 
                // Check if the first point is a simple array of values.
                // If so we assume that this is the case for all points.
                foundPrimitivePoint = Array.isArray(firstPoint) &&
                    !firstPoint.find(function (value) { return (typeof value === 'object'); });
                seriesHasPrimitivePoints_1.push(foundPrimitivePoint);
                if (s.visible) {
                    // Push all data to array
                    seriesData.forEach(function (pointOptions) {
                        var _a;
                        // For using keys, or when using primitive points,
                        // rebuild the data structure
                        if (foundPrimitivePoint || ((_a = s.options.keys) === null || _a === void 0 ? void 0 : _a.length)) {
                            pointOptions = s.pointClass.prototype
                                .optionsToObject
                                .call({ series: s }, pointOptions);
                            s.pointClass.setGanttPointAliases(pointOptions, chart);
                        }
                        if (isObject(pointOptions, true)) {
                            // Set series index on data. Removed again
                            // after use.
                            pointOptions.yIndex = numberOfSeries;
                            pointOptions.seriesIndex = s.index;
                            arr.push(pointOptions);
                        }
                    });
                    // Increment series index
                    if (uniqueNames === true) {
                        numberOfSeries++;
                    }
                }
                return arr;
            }, []);
            // If max is higher than set data - add a
            // dummy data to render categories #10779
            if (max && data.length < max) {
                for (var i = data.length; i <= max; i++) {
                    data.push({
                        // Use the zero-width character
                        // to avoid conflict with uniqueNames
                        name: i + '\u200B'
                    });
                }
            }
            // `setScale` is fired after all the series is initialized,
            // which is an ideal time to update the axis.categories.
            treeGrid = getTreeGridFromData(data, uniqueNames || false, (uniqueNames === true) ? numberOfSeries : 1);
            // Assign values to the axis.
            axis.categories = treeGrid.categories;
            axis.treeGrid.mapOfPosToGridNode = (treeGrid.mapOfPosToGridNode);
            axis.hasNames = true;
            axis.treeGrid.tree = treeGrid.tree;
            // Update yData now that we have calculated the y values
            axis.series.forEach(function (series) {
                var axisData = data.filter(function (point) {
                    return point.seriesIndex === series.index;
                });
                axisData.forEach(function (point) {
                    delete point.seriesIndex;
                    delete point.yIndex;
                });
                // Avoid destroying points when series is not visible
                if (series.visible) {
                    series.setData(axisData, false);
                }
            });
            // Calculate the label options for each level in the tree.
            axis.treeGrid.mapOptionsToLevel =
                getLevelOptions({
                    defaults: labelOptions,
                    from: 1,
                    levels: labelOptions === null || labelOptions === void 0 ? void 0 : labelOptions.levels,
                    to: (_a = axis.treeGrid.tree) === null || _a === void 0 ? void 0 : _a.height
                });
            // Setting initial collapsed nodes
            if (e.type === 'beforeRender') {
                axis.treeGrid.collapsedNodes = treeGrid.collapsedNodes;
            }
        }
    });
}
/**
 * Generates a tick for initial positioning.
 *
 * @internal
 * @function Highcharts.GridAxis#generateTick
 *
 * @param {Function} proceed
 * The original generateTick function.
 *
 * @param {number} pos
 * The tick position in axis values.
 */
function wrapGenerateTick(proceed, pos) {
    var axis = this, mapOptionsToLevel = axis.treeGrid.mapOptionsToLevel || {}, isTreeGrid = axis.type === 'treegrid', ticks = axis.ticks;
    var tick = ticks[pos], levelOptions, options, gridNode;
    if (isTreeGrid &&
        axis.treeGrid.mapOfPosToGridNode) {
        gridNode = axis.treeGrid.mapOfPosToGridNode[pos];
        levelOptions = mapOptionsToLevel[gridNode.depth];
        if (levelOptions) {
            options = {
                labels: levelOptions
            };
        }
        if (!tick &&
            TickConstructor) {
            ticks[pos] = tick =
                new TickConstructor(axis, pos, void 0, void 0, {
                    category: gridNode.name,
                    tickmarkOffset: gridNode.tickmarkOffset,
                    options: options
                });
        }
        else {
            // Update labels depending on tick interval
            tick.parameters.category = gridNode.name;
            tick.options = options;
            tick.addLabel();
            axis.isDirty = true;
        }
    }
    else {
        proceed.apply(axis, Array.prototype.slice.call(arguments, 1));
    }
}
/** @internal */
function wrapInit(proceed, chart, userOptions, coll) {
    var axis = this, isTreeGrid = userOptions.type === 'treegrid';
    if (!axis.treeGrid) {
        axis.treeGrid = new TreeGridAxisAdditions(axis);
    }
    // Set default and forced options for TreeGrid
    if (isTreeGrid) {
        // Add event for updating the categories of a treegrid.
        // NOTE Preferably these events should be set on the axis.
        addEvent(chart, 'beforeRender', onBeforeRender);
        addEvent(chart, 'beforeRedraw', onBeforeRender);
        // Add new collapsed nodes on addSeries
        addEvent(chart, 'addSeries', function (e) {
            if (e.options.data) {
                var treeGrid = getTreeGridFromData(e.options.data, userOptions.uniqueNames || false, 1);
                axis.treeGrid.collapsedNodes = (axis.treeGrid.collapsedNodes || []).concat(treeGrid.collapsedNodes);
            }
        });
        // Collapse all nodes in axis.treegrid.collapsedNodes
        // where collapsed equals true.
        addEvent(axis, 'foundExtremes', function () {
            var _a;
            (_a = axis.treeGrid.collapsedNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (node) {
                var breaks = axis.treeGrid.collapse(node);
                if (axis.brokenAxis) {
                    axis.brokenAxis.setBreaks(breaks, false);
                    // Remove the node from the axis collapsedNodes
                    if (axis.treeGrid.collapsedNodes) {
                        axis.treeGrid.collapsedNodes = axis.treeGrid
                            .collapsedNodes
                            .filter(function (n) { return ((node.collapseStart !==
                            n.collapseStart) ||
                            node.collapseEnd !== n.collapseEnd); });
                    }
                }
            });
        });
        // If staticScale is not defined on the yAxis
        // and chart height is set, set axis.isDirty
        // to ensure collapsing works (#12012)
        addEvent(axis, 'afterBreaks', function () {
            if (axis.coll === 'yAxis' &&
                !axis.staticScale &&
                axis.chart.options.chart.height) {
                axis.isDirty = true;
            }
        });
        userOptions = merge({
            // Default options
            grid: {
                enabled: true
            },
            // TODO: add support for align in treegrid.
            labels: {
                align: 'left',
                /**
                 * Set options on specific levels in a tree grid axis. Takes
                 * precedence over labels options.
                 *
                 * @sample {gantt} gantt/treegrid-axis/labels-levels
                 *         Levels on TreeGrid Labels
                 *
                 * @type      {Array<*>}
                 * @product   gantt
                 * @apioption yAxis.labels.levels
                 */
                levels: [{
                        /**
                        * Specify the level which the options within this object
                        * applies to.
                        *
                        * @type      {number}
                        * @product   gantt
                        * @apioption yAxis.labels.levels.level
                        *
                        * @internal
                        */
                        level: void 0
                    }, {
                        level: 1,
                        /**
                         * @type      {Highcharts.CSSObject}
                         * @product   gantt
                         * @apioption yAxis.labels.levels.style
                         *
                         * @internal
                         */
                        style: {
                            /** @ignore-option */
                            fontWeight: 'bold'
                        }
                    }],
                /**
                 * The symbol for the collapse and expand icon in a
                 * treegrid.
                 *
                 * @product      gantt
                 * @optionparent yAxis.labels.symbol
                 */
                symbol: {
                    /**
                     * The symbol type. Points to a definition function in
                     * the `Highcharts.Renderer.symbols` collection.
                     *
                     * @type {Highcharts.SymbolKeyValue}
                     */
                    type: 'triangle',
                    x: -5,
                    y: -3,
                    height: 6,
                    width: 8
                }
            },
            uniqueNames: false
        }, userOptions, {
            // Forced options
            reversed: true
        });
    }
    // Now apply the original function with the original arguments, which are
    // sliced off this function's arguments
    proceed.apply(axis, [chart, userOptions, coll]);
    if (isTreeGrid) {
        axis.hasNames = true;
        axis.options.showLastLabel = true;
    }
}
/**
 * Set the tick positions, tickInterval, axis min and max.
 *
 * @internal
 * @function Highcharts.GridAxis#setTickInterval
 *
 * @param {Function} proceed
 * The original setTickInterval function.
 */
function wrapSetTickInterval(proceed) {
    var _a, _b, _c, _d, _e, _f, _g;
    var axis = this, options = axis.options, time = axis.chart.time, linkedParent = typeof options.linkedTo === 'number' ?
        (_a = this.chart[axis.coll]) === null || _a === void 0 ? void 0 : _a[options.linkedTo] :
        void 0, isTreeGrid = axis.type === 'treegrid';
    if (isTreeGrid) {
        axis.min = (_c = (_b = axis.userMin) !== null && _b !== void 0 ? _b : time.parse(options.min)) !== null && _c !== void 0 ? _c : axis.dataMin;
        axis.max = (_e = (_d = axis.userMax) !== null && _d !== void 0 ? _d : time.parse(options.max)) !== null && _e !== void 0 ? _e : axis.dataMax;
        fireEvent(axis, 'foundExtremes');
        // `setAxisTranslation` modifies the min and max according to axis
        // breaks.
        axis.setAxisTranslation();
        axis.tickInterval = 1;
        axis.tickmarkOffset = 0.5;
        axis.tickPositions = axis.treeGrid.mapOfPosToGridNode ?
            axis.treeGrid.getTickPositions() :
            [];
        if (linkedParent) {
            var linkedParentExtremes = linkedParent.getExtremes();
            axis.min = (_f = linkedParentExtremes.min) !== null && _f !== void 0 ? _f : linkedParentExtremes.dataMin;
            axis.max = (_g = linkedParentExtremes.max) !== null && _g !== void 0 ? _g : linkedParentExtremes.dataMax;
            axis.tickPositions = linkedParent.tickPositions;
        }
        axis.linkedParent = linkedParent;
    }
    else {
        proceed.apply(axis, Array.prototype.slice.call(arguments, 1));
    }
}
/**
 * Wrap axis redraw to remove TreeGrid events from ticks
 *
 * @internal
 * @function Highcharts.GridAxis#redraw
 *
 * @param {Function} proceed
 * The original setTickInterval function.
 */
function wrapRedraw(proceed) {
    var axis = this, isTreeGrid = this.type === 'treegrid';
    if (isTreeGrid && axis.visible) {
        axis.tickPositions.forEach(function (pos) {
            var _a;
            var tick = axis.ticks[pos];
            if ((_a = tick.label) === null || _a === void 0 ? void 0 : _a.attachedTreeGridEvents) {
                removeEvent(tick.label.element);
                tick.label.attachedTreeGridEvents = false;
            }
        });
    }
    proceed.apply(axis, Array.prototype.slice.call(arguments, 1));
}
/* *
 *
 *  Classes
 *
 * */
/**
 * @internal
 * @class
 */
var TreeGridAxisAdditions = /** @class */ (function () {
    /* *
     *
     *  Constructors
     *
     * */
    /** @internal */
    function TreeGridAxisAdditions(axis) {
        /** @internal */
        this.pendingSizeAdjustment = 0;
        this.axis = axis;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    /** @internal */
    TreeGridAxisAdditions.compose = function (AxisClass, ChartClass, SeriesClass, TickClass) {
        if (!AxisClass.keepProps.includes('treeGrid')) {
            var axisProps = AxisClass.prototype;
            AxisClass.keepProps.push('treeGrid');
            wrap(axisProps, 'generateTick', wrapGenerateTick);
            wrap(axisProps, 'init', wrapInit);
            wrap(axisProps, 'setTickInterval', wrapSetTickInterval);
            wrap(axisProps, 'redraw', wrapRedraw);
            // Make utility functions available for testing.
            axisProps.utils = {
                getNode: Tree.getNode
            };
            if (!TickConstructor) {
                TickConstructor = TickClass;
            }
        }
        GridAxis.compose(AxisClass, ChartClass, TickClass);
        BrokenAxis.compose(AxisClass, SeriesClass);
        TreeGridTick.compose(TickClass);
        return AxisClass;
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Set the collapse status.
     *
     * @internal
     */
    TreeGridAxisAdditions.prototype.setCollapsedStatus = function (node) {
        var axis = this.axis, chart = axis.chart;
        axis.series.forEach(function (series) {
            var data = getSeriesData(series);
            if (node.id && data) {
                var point = chart.get(node.id), dataPoint = data[series.data.indexOf(point)];
                series.dataTable.setRow({ collapsed: node.collapsed }, series.data.indexOf(point));
                if (point && isObject(dataPoint, true)) {
                    point.collapsed = node.collapsed;
                    dataPoint.collapsed = node.collapsed;
                }
            }
        });
    };
    /**
     * Calculates the new axis breaks to collapse a node.
     *
     * @internal
     *
     * @return {Array<object>}
     * Returns an array of the new breaks for the axis.
     */
    TreeGridAxisAdditions.prototype.collapse = function (node) {
        var axis = this.axis, breaks = axis.options.breaks || [], obj = getBreakFromNode(node);
        breaks.push(obj);
        // Change the collapsed flag #13838
        node.collapsed = true;
        axis.treeGrid.setCollapsedStatus(node);
        return breaks;
    };
    /**
     * Calculates the new axis breaks to expand a node.
     *
     * @internal
     *
     * @param {Highcharts.GridNode} node
     * The node to expand.
     *
     * @return {Array<object>}
     * Returns an array of the new breaks for the axis.
     */
    TreeGridAxisAdditions.prototype.expand = function (node) {
        var _a;
        var axis = this.axis, obj = getBreakFromNode(node);
        // Change the collapsed flag #13838
        node.collapsed = false;
        axis.treeGrid.setCollapsedStatus(node);
        // Remove the break from the axis breaks array.
        return ((_a = axis.options.breaks) === null || _a === void 0 ? void 0 : _a.reduce(function (arr, b) {
            if (b.to !== obj.to || b.from !== obj.from) {
                arr.push(b);
            }
            return arr;
        }, [])) || [];
    };
    /**
     * Creates a list of positions for the ticks on the axis. Filters out
     * positions that are outside min and max, or is inside an axis break.
     *
     * @internal
     *
     * @return {Array<number>}
     * List of positions.
     */
    TreeGridAxisAdditions.prototype.getTickPositions = function () {
        var axis = this.axis, roundedMin = Math.floor(axis.min / axis.tickInterval) * axis.tickInterval, roundedMax = Math.ceil(axis.max / axis.tickInterval) * axis.tickInterval;
        return Object.keys(axis.treeGrid.mapOfPosToGridNode || {}).reduce(function (arr, key) {
            var _a;
            var pos = +key;
            if (pos >= roundedMin &&
                pos <= roundedMax &&
                !((_a = axis.brokenAxis) === null || _a === void 0 ? void 0 : _a.isInAnyBreak(pos))) {
                arr.push(pos);
            }
            return arr;
        }, []);
    };
    /**
     * Check if a node is collapsed.
     *
     * @internal
     *
     * @param {Object} node
     * The node to check if is collapsed.
     *
     * @return {boolean}
     * Returns true if collapsed, false if expanded.
     */
    TreeGridAxisAdditions.prototype.isCollapsed = function (node) {
        var axis = this.axis, breaks = (axis.options.breaks || []), obj = getBreakFromNode(node);
        return breaks.some(function (b) {
            return b.from === obj.from && b.to === obj.to;
        });
    };
    /**
     * Calculates the new axis breaks after toggling the collapse/expand
     * state of a node. If it is collapsed it will be expanded, and if it is
     * expanded it will be collapsed.
     *
     * @internal
     *
     * @param {Highcharts.GridNode} node
     * The node to toggle.
     *
     * @return {Array<object>}
     * Returns an array of the new breaks for the axis.
     */
    TreeGridAxisAdditions.prototype.toggleCollapse = function (node) {
        return (this.isCollapsed(node) ?
            this.expand(node) :
            this.collapse(node));
    };
    return TreeGridAxisAdditions;
}());
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default TreeGridAxisAdditions;
