/* *
 *
 *  (c) 2009-2025 Highsoft AS
 *
 *  Authors: Øystein Moseng, Torstein Hønsi, Jon A. Nygård
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import DDU from './DragDropUtilities.js';
const { addEvents, getNormalizedEvent } = DDU;
import DraggableChart from './DraggableChart.js';
const { initDragDrop } = DraggableChart;
import DragDropDefaults from './DragDropDefaults.js';
import DragDropProps from './DragDropProps.js';
import U from '../../Core/Utilities.js';
const { addEvent, clamp, isNumber, merge } = U;
/* *
 *
 *  Functions
 *
 * */
/* @todo
Add drag/drop support to specific data props for different series types.

The dragDrop.draggableX/Y user options on series enable/disable all of these per
direction unless they are specifically set in options using
dragDrop.{optionName}. If the prop does not specify an optionName here, it can
only be enabled/disabled by the user with draggableX/Y.

Supported options for each prop:
    optionName: User option in series.dragDrop that enables/disables
        dragging this prop.
    axis: Can be 'x' or 'y'. Whether this prop is linked to x or y axis.
    move: Whether or not this prop should be updated when moving points.
    resize: Whether or not to draw a drag handle and allow user to drag and
        update this prop by itself.
    beforeResize: Hook to perform tasks before a resize is made. Gets
        the guide box, the new points values, and the point as args.
    resizeSide: Which side of the guide box to resize when dragging the
        handle. Can be "left", "right", "top", "bottom". Chart.inverted is
        handled automatically. Can also be a function, taking the new point
        values as parameter, as well as the point, and returning a string
        with the side.
    propValidate: Function that takes the prop value and the point as
        arguments, and returns true if the prop value is valid, false if
        not. It is used to prevent e.g. resizing "low" above "high".
    handlePositioner: For resizeable props, return 0,0 in SVG plot coords of
        where to place the dragHandle. Gets point as argument. Should return
        object with x and y properties.
    handleFormatter: For resizeable props, return the path of the drag
        handle as an SVG path array. Gets the point as argument. The handle
        is translated according to handlePositioner.
    handleOptions: Options to merge with the default handle options.

    TODO:
    - It makes sense to have support for resizing the size of bubbles and
        e.g variwide columns. This requires us to support dragging along a
        z-axis, somehow computing a relative value from old to new pixel
        size.
    - Moving maps could be useful, although we would have to compute new
        point.path values in order to do it properly (using SVG translate
        is easier, but won't update the data).
*/
/** @private */
function compose(ChartClass, SeriesClass) {
    DraggableChart.compose(ChartClass);
    const seriesProto = SeriesClass.prototype;
    if (!seriesProto.dragDropProps) {
        const PointClass = SeriesClass.prototype.pointClass, seriesTypes = SeriesClass.types, pointProto = PointClass.prototype;
        pointProto.getDropValues = pointGetDropValues;
        pointProto.showDragHandles = pointShowDragHandles;
        addEvent(PointClass, 'mouseOut', onPointMouseOut);
        addEvent(PointClass, 'mouseOver', onPointMouseOver);
        addEvent(PointClass, 'remove', onPointRemove);
        seriesProto.dragDropProps = DragDropProps.line;
        seriesProto.getGuideBox = seriesGetGuideBox;
        // Custom props for certain series types
        const seriesWithDragDropProps = [
            'arearange',
            'boxplot',
            'bullet',
            'column',
            'columnrange',
            'errorbar',
            'flags',
            'gantt',
            'ohlc',
            'waterfall',
            'xrange'
        ];
        for (const seriesType of seriesWithDragDropProps) {
            if (seriesTypes[seriesType]) {
                seriesTypes[seriesType].prototype.dragDropProps =
                    DragDropProps[seriesType];
            }
        }
        // Don't support certain series types
        const seriesWithoutDragDropProps = [
            'bellcurve',
            'gauge',
            'histogram',
            'map',
            'mapline',
            'pareto',
            'pie',
            'sankey',
            'sma',
            'sunburst',
            'treemap',
            'vector',
            'windbarb',
            'wordcloud'
        ];
        for (const seriesType of seriesWithoutDragDropProps) {
            if (seriesTypes[seriesType]) {
                seriesTypes[seriesType].prototype.dragDropProps = null;
            }
        }
    }
}
/**
 * On point mouse out. Hide drag handles, depending on state.
 *
 * @private
 * @function mouseOut
 * @param {Highcharts.Point} point
 *        The point mousing out of.
 */
function mouseOut(point) {
    const chart = point.series && point.series.chart, dragDropData = chart && chart.dragDropData;
    if (chart &&
        chart.dragHandles &&
        !(dragDropData &&
            (dragDropData.isDragging &&
                dragDropData.draggedPastSensitivity ||
                dragDropData.isHoveringHandle === point.id))) {
        chart.hideDragHandles();
    }
}
/**
 * Mouseover on a point. Show drag handles if the conditions are right.
 *
 * @private
 * @function mouseOver
 * @param {Highcharts.Point} point
 *        The point mousing over.
 */
function mouseOver(point) {
    const series = point.series, chart = series && series.chart, dragDropData = chart && chart.dragDropData, is3d = chart && chart.is3d && chart.is3d();
    if (chart &&
        !(dragDropData &&
            dragDropData.isDragging && // Ignore if dragging a point
            dragDropData.draggedPastSensitivity) &&
        !chart.isDragDropAnimating && // Ignore if animating
        series.options.dragDrop && // No need to compute handles without this
        !is3d // No 3D support
    ) {
        // Hide the handles if they exist on another point already
        if (chart.dragHandles) {
            chart.hideDragHandles();
        }
        point.showDragHandles();
    }
}
/**
 * Point mouseleave event. See above function for explanation of the timeout.
 * @private
 */
function onPointMouseOut() {
    const point = this;
    setTimeout(() => {
        if (point.series) {
            mouseOut(point);
        }
    }, 10);
}
/**
 * Point hover event. We use a short timeout due to issues with coordinating
 * point mouseover/out events on dragHandles and points.
 *
 * Particularly arearange series are finicky since the markers are not
 * individual points. This logic should preferably be improved in the future.
 *
 * Notice that the mouseOut event below must have a shorter timeout to ensure
 * event order.
 */
function onPointMouseOver() {
    const point = this;
    setTimeout(() => mouseOver(point), 12);
}
/**
 * Hide drag handles on a point if it is removed.
 * @private
 */
function onPointRemove() {
    const chart = this.series.chart, dragHandles = chart.dragHandles;
    if (dragHandles && dragHandles.point === this.id) {
        chart.hideDragHandles();
    }
}
/**
 * Mouseout on resize handle. Handle states, and possibly run mouseOut on point.
 *
 * @private
 * @function onResizeHandleMouseOut
 * @param {Highcharts.Point} point
 *        The point mousing out of.
 */
function onResizeHandleMouseOut(point) {
    const chart = point.series.chart;
    if (chart.dragDropData &&
        point.id === chart.dragDropData.isHoveringHandle) {
        delete chart.dragDropData.isHoveringHandle;
    }
    if (!chart.hoverPoint) {
        mouseOut(point);
    }
}
/**
 * Mousedown on resize handle. Init a drag if the conditions are right.
 *
 * @private
 * @function onResizeHandleMouseDown
 * @param {Highcharts.PointerEventObject} e
 *        The mousedown event.
 * @param {Highcharts.Point} point
 *        The point mousing down on.
 * @param {string} updateProp
 *        The data property this resize handle is attached to for this point.
 */
function onResizeHandleMouseDown(e, point, updateProp) {
    const chart = point.series.chart;
    // Ignore if zoom/pan key is pressed
    if (chart.zoomOrPanKeyPressed(e)) {
        return;
    }
    // Prevent zooming
    chart.mouseIsDown = false;
    // We started a drag
    initDragDrop(e, point);
    chart.dragDropData.updateProp =
        e.updateProp = updateProp;
    point.firePointEvent('dragStart', e);
    // Prevent default to avoid point click for dragging too
    e.stopPropagation();
    e.preventDefault();
}
/**
 * Get updated point values when dragging a point.
 *
 * @private
 * @function Highcharts.Point#getDropValues
 *
 * @param {Object} origin
 *        Mouse position (chartX/Y) and point props at current data values.
 *        Point props should be organized per point.id in a hashmap.
 *
 * @param {Highcharts.PointerEventObject} newPos
 *        New mouse position (chartX/Y).
 *
 * @param {Highcharts.Dictionary<Highcharts.Dictionary<Highcharts.Dictionary<string>>>} updateProps
 *        Point props to modify. Map of prop objects where each key refers to
 *        the prop, and the value is an object with an axis property. Example:
 *        {
 *            x: {
 *                axis: 'x'
 *            },
 *            x2: {
 *                axis: 'x'
 *            }
 *        }
 *
 * @return {Highcharts.Dictionary<number>}
 *         An object with updated data values.
 */
function pointGetDropValues(origin, newPos, updateProps) {
    const point = this, series = point.series, chart = series.chart, mapView = chart.mapView, options = merge(series.options.dragDrop, point.options.dragDrop), result = {}, pointOrigin = origin.points[point.id], updateSingleProp = Object.keys(updateProps).length === 1;
    /**
     * Utility function to apply precision and limit a value within the
     * draggable range.
     * @private
     * @param {number} val
     *        Value to limit
     * @param {string} direction
     *        Axis direction
     * @return {number}
     *         Limited value
     */
    const limitToRange = (val, dir) => {
        const direction = dir.toUpperCase(), time = series.chart.time, defaultPrecision = series[`${dir}Axis`].categories ? 1 : 0, precision = options[`dragPrecision${direction}`] ??
            defaultPrecision, min = time.parse(options[`dragMin${direction}`]) ??
            -Infinity, max = time.parse(options[`dragMax${direction}`]) ??
            Infinity;
        let res = val;
        if (precision) {
            res = Math.round(res / precision) * precision;
        }
        return clamp(res, min, max);
    };
    /**
     * Utility function to apply precision and limit a value within the
     * draggable range used only for Highcharts Maps.
     * @private
     * @param {PointerEvent} newPos
     *        PointerEvent, which is used to get the value
     * @param {string} direction
     *        Axis direction
     * @param {string} key
     *        Key for choosing between longitude and latitude
     * @return {number | undefined}
     *         Limited value
     */
    const limitToMapRange = (newPos, dir, key) => {
        if (mapView) {
            const direction = dir.toUpperCase(), precision = options[`dragPrecision${direction}`] ?? 0, lonLatMin = mapView.pixelsToLonLat({
                x: 0,
                y: 0
            }), lonLatMax = mapView.pixelsToLonLat({
                x: chart.plotBox.width,
                y: chart.plotBox.height
            });
            let min = options[`dragMin${direction}`] ??
                lonLatMin?.[key] ??
                -Infinity, max = options[`dragMax${direction}`] ??
                lonLatMax?.[key] ??
                Infinity, res = newPos[key];
            if (mapView.projection.options.name === 'Orthographic') {
                return res;
            }
            if (key === 'lat') {
                // If map is bigger than possible projection range
                if (isNaN(min) || min > mapView.projection.maxLatitude) {
                    min = mapView.projection.maxLatitude;
                }
                if (isNaN(max) || max < -1 * mapView.projection.maxLatitude) {
                    max = -1 * mapView.projection.maxLatitude;
                }
                // Swap for latitude
                const temp = max;
                max = min;
                min = temp;
            }
            if (!mapView.projection.hasCoordinates) {
                // Establish y value
                const lonLatRes = mapView.pixelsToLonLat({
                    x: newPos.chartX - chart.plotLeft,
                    y: chart.plotHeight - newPos.chartY + chart.plotTop
                });
                if (lonLatRes) {
                    res = lonLatRes[key];
                }
            }
            if (precision) {
                res = Math.round(res / precision) * precision;
            }
            return clamp(res, min, max);
        }
    };
    // Assign new value to property. Adds dX/YValue to the old value, limiting
    // it within min/max ranges.
    for (const key of Object.keys(updateProps)) {
        const val = updateProps[key], oldVal = pointOrigin.point[key], axis = series[val.axis + 'Axis'], newVal = mapView ?
            limitToMapRange(newPos, val.axis, key) :
            limitToRange(axis.toValue((axis.horiz ? newPos.chartX : newPos.chartY) +
                pointOrigin[key + 'Offset']), val.axis);
        // If we are updating a single prop, and it has a validation function
        // for the prop, run it. If it fails, don't update the value.
        if (isNumber(newVal) &&
            !(updateSingleProp &&
                val.propValidate &&
                !val.propValidate(newVal, point)) &&
            typeof oldVal !== 'undefined') {
            result[key] = newVal;
        }
    }
    return result;
}
/**
 * Render drag handles on a point - depending on which handles are enabled - and
 * attach events to them.
 *
 * @private
 * @function Highcharts.Point#showDragHandles
 */
function pointShowDragHandles() {
    const point = this, series = point.series, chart = series.chart, { inverted, renderer } = chart, options = merge(series.options.dragDrop, point.options.dragDrop), dragDropProps = series.dragDropProps || {};
    let dragHandles = chart.dragHandles;
    // Go through each updateProp and see if we are supposed to create a handle
    // for it.
    for (const key of Object.keys(dragDropProps)) {
        const val = dragDropProps[key], handleOptions = merge(DragDropDefaults.dragHandle, val.handleOptions, options.dragHandle), handleAttrs = {
            'class': handleOptions.className,
            'stroke-width': handleOptions.lineWidth,
            fill: handleOptions.color,
            stroke: handleOptions.lineColor
        }, pathFormatter = handleOptions.pathFormatter || val.handleFormatter, handlePositioner = val.handlePositioner, 
        // Run validation function on whether or not we allow individual
        // updating of this prop.
        validate = val.validateIndividualDrag ?
            val.validateIndividualDrag(point) : true;
        let pos, handle, path;
        if (val.resize &&
            validate &&
            val.resizeSide &&
            pathFormatter &&
            (options['draggable' + val.axis.toUpperCase()] ||
                options[val.optionName]) &&
            options[val.optionName] !== false) {
            // Create handle if it doesn't exist
            if (!dragHandles) {
                dragHandles = chart.dragHandles = {
                    group: renderer
                        .g('drag-drop-handles')
                        .add(series.markerGroup || series.group),
                    point: point.id
                };
                // Store which point this is
            }
            else {
                dragHandles.point = point.id;
            }
            // Find position and path of handle
            pos = handlePositioner(point);
            handleAttrs.d = path = pathFormatter(point);
            // Correct left edge value depending on the xAxis' type, #16596
            const minEdge = point.series.xAxis.categories ? -0.5 : 0;
            if (!path || pos.x < minEdge || pos.y < 0) {
                return;
            }
            // If cursor is not set explicitly, use axis direction
            handleAttrs.cursor = handleOptions.cursor ||
                ((val.axis === 'x') !== !!inverted ?
                    'ew-resize' : 'ns-resize');
            // Create and add the handle element if it doesn't exist
            handle = dragHandles[val.optionName];
            if (!handle) {
                handle = dragHandles[val.optionName] = renderer
                    .path()
                    .add(dragHandles.group);
            }
            // Move and update handle
            handleAttrs.translateX = inverted ?
                series.yAxis.len - pos.y :
                pos.x;
            handleAttrs.translateY = inverted ?
                series.xAxis.len - pos.x :
                pos.y;
            if (inverted) {
                handleAttrs.rotation = -90;
            }
            handle.attr(handleAttrs);
            // Add events
            addEvents(handle.element, ['touchstart', 'mousedown'], (e) => {
                onResizeHandleMouseDown(getNormalizedEvent(e, chart), point, key);
            }, {
                passive: false
            });
            addEvent(dragHandles.group.element, 'mouseover', () => {
                chart.dragDropData = chart.dragDropData || {};
                chart.dragDropData.isHoveringHandle = point.id;
            });
            addEvents(dragHandles.group.element, ['touchend', 'mouseout'], () => {
                onResizeHandleMouseOut(point);
            });
        }
    }
}
/**
 * Returns an SVGElement to use as the guide box for a set of points.
 *
 * @private
 * @function Highcharts.Series#getGuideBox
 *
 * @param {Array<Highcharts.Point>} points
 *        The state to set the guide box to.
 *
 * @return {Highcharts.SVGElement}
 *         An SVG element for the guide box, not added to DOM.
 */
function seriesGetGuideBox(points) {
    const chart = this.chart;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, changed;
    // Find bounding box of all points
    for (const point of points) {
        const bBox = (point.graphic && point.graphic.getBBox() || point.shapeArgs);
        if (bBox) {
            let plotX2;
            const x2 = point.x2;
            if (isNumber(x2)) {
                plotX2 = point.series.xAxis.translate(x2, false, false, false, true);
            }
            // Avoid a 0 min when some of the points being dragged are
            // completely outside the plot
            const skipBBox = !(bBox.width || bBox.height || bBox.x || bBox.y);
            changed = true;
            minX = Math.min(point.plotX || 0, plotX2 || 0, skipBBox ? Infinity : bBox.x || 0, minX);
            maxX = Math.max(point.plotX || 0, plotX2 || 0, (bBox.x || 0) + (bBox.width || 0), maxX);
            minY = Math.min(point.plotY || 0, skipBBox ? Infinity : bBox.y || 0, minY);
            maxY = Math.max((bBox.y || 0) + (bBox.height || 0), maxY);
        }
    }
    return changed ? chart.renderer.rect(minX, minY, maxX - minX, maxY - minY) : chart.renderer.g();
}
/* *
 *
 *  Default Export
 *
 * */
const DraggablePoints = {
    compose
};
export default DraggablePoints;
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Current drag and drop position.
 *
 * @interface Highcharts.DragDropPositionObject
 */ /**
* Chart x position
* @name Highcharts.DragDropPositionObject#chartX
* @type {number}
*/ /**
* Chart y position
* @name Highcharts.DragDropPositionObject#chartY
* @type {number}
*/ /**
* Drag and drop guide box.
* @name Highcharts.DragDropPositionObject#guideBox
* @type {Highcharts.BBoxObject|undefined}
*/ /**
* Updated point data.
* @name Highcharts.DragDropPositionObject#points
* @type {Highcharts.Dictionary<Highcharts.Dictionary<number>>}
*/ /**
* Delta of previous x position.
* @name Highcharts.DragDropPositionObject#prevdX
* @type {number|undefined}
*/ /**
* Delta of previous y position.
* @name Highcharts.DragDropPositionObject#prevdY
* @type {number|undefined}
*/
/**
 * Function callback to execute while series points are dragged. Return false to
 * stop the default drag action.
 *
 * @callback Highcharts.PointDragCallbackFunction
 *
 * @param {Highcharts.Point} this
 *        Point where the event occurred.
 *
 * @param {Highcharts.PointDragEventObject} event
 *        Event arguments.
 */
/**
 * Contains information about a points new values.
 *
 * @interface Highcharts.PointDragDropObject
 */ /**
* New values.
* @name Highcharts.PointDragDropObject#newValues
* @type {Highcharts.Dictionary<number>}
*/ /**
* Updated point.
* @name Highcharts.PointDragDropObject#point
* @type {Highcharts.Point}
*/
/**
 * Contains common information for a drag event on series points.
 *
 * @interface Highcharts.PointDragEventObject
 */ /**
* New point after drag if only a single one.
* @name Highcharts.PointDropEventObject#newPoint
* @type {Highcharts.PointDragDropObject|undefined}
*/ /**
* New point id after drag if only a single one.
* @name Highcharts.PointDropEventObject#newPointId
* @type {string|undefined}
*/ /**
* New points during drag.
* @name Highcharts.PointDragEventObject#newPoints
* @type {Highcharts.Dictionary<Highcharts.PointDragDropObject>}
*/ /**
* Original data.
* @name Highcharts.PointDragEventObject#origin
* @type {Highcharts.DragDropPositionObject}
*/ /**
* Prevent default drag action.
* @name Highcharts.PointDragEventObject#preventDefault
* @type {Function}
*/ /**
* Target point that caused the event.
* @name Highcharts.PointDragEventObject#target
* @type {Highcharts.Point}
*/ /**
* Event type.
* @name Highcharts.PointDragEventObject#type
* @type {"drag"}
*/
/**
 * Function callback to execute when a series point is dragged.
 *
 * @callback Highcharts.PointDragStartCallbackFunction
 *
 * @param {Highcharts.Point} this
 *        Point where the event occurred.
 *
 * @param {Highcharts.PointDragStartEventObject} event
 *        Event arguments.
 */
/**
 * Contains common information for a drag event on series point.
 *
 * @interface Highcharts.PointDragStartEventObject
 * @extends global.MouseEvent
 */ /**
* Data property being dragged.
* @name Highcharts.PointDragStartEventObject#updateProp
* @type {string|undefined}
*/
/**
 * Function callback to execute when series points are dropped.
 *
 * @callback Highcharts.PointDropCallbackFunction
 *
 * @param {Highcharts.Point} this
 *        Point where the event occurred.
 *
 * @param {Highcharts.PointDropEventObject} event
 *        Event arguments.
 */
/**
 * Contains common information for a drop event on series points.
 *
 * @interface Highcharts.PointDropEventObject
 */ /**
* New point after drop if only a single one.
* @name Highcharts.PointDropEventObject#newPoint
* @type {Highcharts.PointDragDropObject|undefined}
*/ /**
* New point id after drop if only a single one.
* @name Highcharts.PointDropEventObject#newPointId
* @type {string|undefined}
*/ /**
* New points after drop.
* @name Highcharts.PointDropEventObject#newPoints
* @type {Highcharts.Dictionary<Highcharts.PointDragDropObject>}
*/ /**
* Number of new points.
* @name Highcharts.PointDropEventObject#numNewPoints
* @type {number}
*/ /**
* Original data.
* @name Highcharts.PointDropEventObject#origin
* @type {Highcharts.DragDropPositionObject}
*/ /**
* Prevent default drop action.
* @name Highcharts.PointDropEventObject#preventDefault
* @type {Function}
*/ /**
* Target point that caused the event.
* @name Highcharts.PointDropEventObject#target
* @type {Highcharts.Point}
*/ /**
* Event type.
* @name Highcharts.PointDropEventObject#type
* @type {"drop"}
*/
''; // Detaches doclets above
