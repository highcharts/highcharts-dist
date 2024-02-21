/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import ApproximationRegistry from './ApproximationRegistry.js';
import DataGroupingDefaults from './DataGroupingDefaults.js';
import DateTimeAxis from '../../Core/Axis/DateTimeAxis.js';
import D from '../../Core/Defaults.js';
import H from '../../Core/Globals.js';
const { composed } = H;
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { series: { prototype: seriesProto } } = SeriesRegistry;
import U from '../../Core/Utilities.js';
const { addEvent, defined, error, extend, isNumber, merge, pick, pushUnique } = U;
/* *
 *
 *  Constants
 *
 * */
const baseGeneratePoints = seriesProto.generatePoints;
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function adjustExtremes(xAxis, groupedXData) {
    // Make sure the X axis extends to show the first group (#2533)
    // But only for visible series (#5493, #6393)
    if (defined(groupedXData[0]) &&
        isNumber(xAxis.min) &&
        isNumber(xAxis.dataMin) &&
        groupedXData[0] < xAxis.min) {
        if ((!defined(xAxis.options.min) &&
            xAxis.min <= xAxis.dataMin) ||
            xAxis.min === xAxis.dataMin) {
            xAxis.min = Math.min(groupedXData[0], xAxis.min);
        }
        xAxis.dataMin = Math.min(groupedXData[0], xAxis.dataMin);
    }
    // When the last anchor set, change the extremes that
    // the last point is visible (#12455).
    if (defined(groupedXData[groupedXData.length - 1]) &&
        isNumber(xAxis.max) &&
        isNumber(xAxis.dataMax) &&
        groupedXData[groupedXData.length - 1] > xAxis.max) {
        if ((!defined(xAxis.options.max) &&
            isNumber(xAxis.dataMax) &&
            xAxis.max >= xAxis.dataMax) || xAxis.max === xAxis.dataMax) {
            xAxis.max = Math.max(groupedXData[groupedXData.length - 1], xAxis.max);
        }
        xAxis.dataMax = Math.max(groupedXData[groupedXData.length - 1], xAxis.dataMax);
    }
}
/**
 * @private
 */
function anchorPoints(series, groupedXData, xMax) {
    const options = series.options, dataGroupingOptions = options.dataGrouping, totalRange = (series.currentDataGrouping && series.currentDataGrouping.gapSize);
    if (!(dataGroupingOptions &&
        series.xData &&
        totalRange &&
        series.groupMap)) {
        return;
    }
    const groupedDataLastIndex = groupedXData.length - 1, anchor = dataGroupingOptions.anchor, firstAnchor = dataGroupingOptions.firstAnchor, lastAnchor = dataGroupingOptions.lastAnchor;
    let anchorIndexIterator = groupedXData.length - 1, anchorFirstIndex = 0;
    // Change the first point position, but only when it is
    // the first point in the data set not in the current zoom.
    if (firstAnchor && series.xData[0] >= groupedXData[0]) {
        anchorFirstIndex++;
        const groupStart = series.groupMap[0].start, groupLength = series.groupMap[0].length;
        let firstGroupEnd;
        if (isNumber(groupStart) && isNumber(groupLength)) {
            firstGroupEnd = groupStart + (groupLength - 1);
        }
        groupedXData[0] = {
            start: groupedXData[0],
            middle: groupedXData[0] + 0.5 * totalRange,
            end: groupedXData[0] + totalRange,
            firstPoint: series.xData[0],
            lastPoint: firstGroupEnd && series.xData[firstGroupEnd]
        }[firstAnchor];
    }
    // Change the last point position but only when it is
    // the last point in the data set not in the current zoom,
    // or if it is not the 1st point simutainously.
    if (groupedDataLastIndex > 0 &&
        lastAnchor &&
        totalRange &&
        groupedXData[groupedDataLastIndex] >= xMax - totalRange) {
        anchorIndexIterator--;
        const lastGroupStart = series.groupMap[series.groupMap.length - 1].start;
        groupedXData[groupedDataLastIndex] = {
            start: groupedXData[groupedDataLastIndex],
            middle: groupedXData[groupedDataLastIndex] + 0.5 * totalRange,
            end: groupedXData[groupedDataLastIndex] + totalRange,
            firstPoint: lastGroupStart && series.xData[lastGroupStart],
            lastPoint: series.xData[series.xData.length - 1]
        }[lastAnchor];
    }
    if (anchor && anchor !== 'start') {
        const shiftInterval = (totalRange *
            { middle: 0.5, end: 1 }[anchor]);
        // Anchor the rest of the points apart from the ones, that were
        // previously moved.
        while (anchorIndexIterator >= anchorFirstIndex) {
            groupedXData[anchorIndexIterator] += shiftInterval;
            anchorIndexIterator--;
        }
    }
}
/**
 * For the processed data, calculate the grouped data if needed.
 *
 * @private
 * @function Highcharts.Series#applyGrouping
 */
function applyGrouping(hasExtremesChanged) {
    const series = this, chart = series.chart, options = series.options, dataGroupingOptions = options.dataGrouping, groupingEnabled = series.allowDG !== false && dataGroupingOptions &&
        pick(dataGroupingOptions.enabled, chart.options.isStock), reserveSpace = series.reserveSpace(), lastDataGrouping = this.currentDataGrouping;
    let currentDataGrouping, croppedData, revertRequireSorting = false;
    // Data needs to be sorted for dataGrouping
    if (groupingEnabled && !series.requireSorting) {
        series.requireSorting = revertRequireSorting = true;
    }
    // Skip if skipDataGrouping method returns false or if grouping is disabled
    // (in that order).
    const skip = skipDataGrouping(series, hasExtremesChanged) === false || !groupingEnabled;
    // Revert original requireSorting value if changed
    if (revertRequireSorting) {
        series.requireSorting = false;
    }
    if (skip) {
        return;
    }
    series.destroyGroupedData();
    const processedXData = dataGroupingOptions.groupAll ?
        series.xData :
        series.processedXData, processedYData = dataGroupingOptions.groupAll ?
        series.yData :
        series.processedYData, plotSizeX = chart.plotSizeX, xAxis = series.xAxis, ordinal = xAxis.options.ordinal, groupPixelWidth = series.groupPixelWidth;
    let i, hasGroupedData;
    // Execute grouping if the amount of points is greater than the limit
    // defined in groupPixelWidth
    if (groupPixelWidth &&
        processedXData &&
        processedXData.length &&
        plotSizeX) {
        hasGroupedData = true;
        // Force recreation of point instances in series.translate, #5699
        series.isDirty = true;
        series.points = null; // #6709
        const extremes = xAxis.getExtremes(), xMin = extremes.min, xMax = extremes.max, groupIntervalFactor = (ordinal &&
            xAxis.ordinal &&
            xAxis.ordinal.getGroupIntervalFactor(xMin, xMax, series)) || 1, interval = (groupPixelWidth * (xMax - xMin) / plotSizeX) *
            groupIntervalFactor, groupPositions = xAxis.getTimeTicks(DateTimeAxis.Additions.prototype.normalizeTimeTickInterval(interval, dataGroupingOptions.units ||
            DataGroupingDefaults.units), 
        // Processed data may extend beyond axis (#4907)
        Math.min(xMin, processedXData[0]), Math.max(xMax, processedXData[processedXData.length - 1]), xAxis.options.startOfWeek, processedXData, series.closestPointRange), groupedData = seriesProto.groupData.apply(series, [
            processedXData,
            processedYData,
            groupPositions,
            dataGroupingOptions.approximation
        ]);
        let groupedXData = groupedData.groupedXData, groupedYData = groupedData.groupedYData, gapSize = 0;
        // The smoothed option is deprecated, instead, there is a fallback
        // to the new anchoring mechanism. #12455.
        if (dataGroupingOptions &&
            dataGroupingOptions.smoothed &&
            groupedXData.length) {
            dataGroupingOptions.firstAnchor = 'firstPoint';
            dataGroupingOptions.anchor = 'middle';
            dataGroupingOptions.lastAnchor = 'lastPoint';
            error(32, false, chart, {
                'dataGrouping.smoothed': 'use dataGrouping.anchor'
            });
        }
        // Record what data grouping values were used
        for (i = 1; i < groupPositions.length; i++) {
            // The grouped gapSize needs to be the largest distance between
            // the group to capture varying group sizes like months or DST
            // crossing (#10000). Also check that the gap is not at the
            // start of a segment.
            if (!groupPositions.info.segmentStarts ||
                groupPositions.info.segmentStarts.indexOf(i) === -1) {
                gapSize = Math.max(groupPositions[i] - groupPositions[i - 1], gapSize);
            }
        }
        currentDataGrouping = groupPositions.info;
        currentDataGrouping.gapSize = gapSize;
        series.closestPointRange = groupPositions.info.totalRange;
        series.groupMap = groupedData.groupMap;
        series.currentDataGrouping = currentDataGrouping;
        anchorPoints(series, groupedXData, xMax);
        if (reserveSpace) {
            adjustExtremes(xAxis, groupedXData);
        }
        // We calculated all group positions but we should render
        // only the ones within the visible range
        if (dataGroupingOptions.groupAll) {
            // Keep the reference to all grouped points
            // for further calculation (eg. heikinashi).
            series.allGroupedData = groupedYData;
            croppedData = series.cropData(groupedXData, groupedYData, xAxis.min, xAxis.max);
            groupedXData = croppedData.xData;
            groupedYData = croppedData.yData;
            series.cropStart = croppedData.start; // #15005
        }
        // Set series props
        series.processedXData = groupedXData;
        series.processedYData = groupedYData;
    }
    else {
        series.groupMap = null;
    }
    series.hasGroupedData = hasGroupedData;
    series.preventGraphAnimation =
        (lastDataGrouping && lastDataGrouping.totalRange) !==
            (currentDataGrouping && currentDataGrouping.totalRange);
}
/**
 * @private
 */
function compose(SeriesClass) {
    const PointClass = SeriesClass.prototype.pointClass;
    if (pushUnique(composed, compose)) {
        // Override point prototype to throw a warning when trying to update
        // grouped points.
        addEvent(PointClass, 'update', function () {
            if (this.dataGroup) {
                error(24, false, this.series.chart);
                return false;
            }
        });
        addEvent(SeriesClass, 'afterSetOptions', onAfterSetOptions);
        addEvent(SeriesClass, 'destroy', destroyGroupedData);
        extend(SeriesClass.prototype, {
            applyGrouping,
            destroyGroupedData,
            generatePoints,
            getDGApproximation,
            groupData
        });
    }
}
/**
 * Destroy the grouped data points. #622, #740
 * @private
 */
function destroyGroupedData() {
    // Clear previous groups
    if (this.groupedData) {
        this.groupedData.forEach(function (point, i) {
            if (point) {
                this.groupedData[i] = point.destroy ?
                    point.destroy() : null;
            }
        }, this);
        // Clears all:
        // - `this.groupedData`
        // - `this.points`
        // - `preserve` object in series.update()
        this.groupedData.length = 0;
        delete this.allGroupedData; // #19892
    }
}
/**
 * Override the generatePoints method by adding a reference to grouped data
 * @private
 */
function generatePoints() {
    baseGeneratePoints.apply(this);
    // Record grouped data in order to let it be destroyed the next time
    // processData runs
    this.destroyGroupedData(); // #622
    this.groupedData = this.hasGroupedData ? this.points : null;
}
/**
 * Set default approximations to the prototypes if present. Properties are
 * inherited down. Can be overridden for individual series types.
 * @private
 */
function getDGApproximation() {
    if (this.is('arearange')) {
        return 'range';
    }
    if (this.is('ohlc')) {
        return 'ohlc';
    }
    if (this.is('hlc')) {
        return 'hlc';
    }
    if (
    // #18974, default approximation for cumulative
    // should be `sum` when `dataGrouping` is enabled
    this.is('column') ||
        this.options.cumulative) {
        return 'sum';
    }
    return 'average';
}
/**
 * Highcharts Stock only. Takes parallel arrays of x and y data and groups the
 * data into intervals defined by groupPositions, a collection of starting x
 * values for each group.
 *
 * @product highstock
 *
 * @function Highcharts.Series#groupData
 * @param {Array<number>} xData
 *        Parallel array of x data.
 * @param {Array<(number|null|undefined)>|Array<Array<(number|null|undefined)>>} yData
 *        Parallel array of y data.
 * @param {Array<number>} groupPositions
 *        Group positions.
 * @param {string|Function} [approximation]
 *        Approximation to use.
 * @return {Highcharts.DataGroupingResultObject}
 *         Mapped groups.
 */
function groupData(xData, yData, groupPositions, approximation) {
    const series = this, data = series.data, dataOptions = series.options && series.options.data, groupedXData = [], groupedYData = [], groupMap = [], dataLength = xData.length, 
    // when grouping the fake extended axis for panning,
    // we don't need to consider y
    handleYData = !!yData, values = [], pointArrayMap = series.pointArrayMap, pointArrayMapLength = pointArrayMap && pointArrayMap.length, extendedPointArrayMap = ['x'].concat(pointArrayMap || ['y']), groupAll = (this.options.dataGrouping &&
        this.options.dataGrouping.groupAll);
    let pointX, pointY, groupedY, pos = 0, start = 0;
    const approximationFn = (typeof approximation === 'function' ?
        approximation :
        approximation && ApproximationRegistry[approximation] ?
            ApproximationRegistry[approximation] :
            ApproximationRegistry[(series.getDGApproximation && series.getDGApproximation() ||
                'average')]);
    // Calculate values array size from pointArrayMap length
    if (pointArrayMapLength) {
        let len = pointArrayMap.length;
        while (len--) {
            values.push([]);
        }
    }
    else {
        values.push([]);
    }
    const valuesLen = pointArrayMapLength || 1;
    for (let i = 0; i <= dataLength; i++) {
        // Start with the first point within the X axis range (#2696)
        if (xData[i] < groupPositions[0]) {
            continue; // with next point
        }
        // when a new group is entered, summarize and initialize
        // the previous group
        while ((typeof groupPositions[pos + 1] !== 'undefined' &&
            xData[i] >= groupPositions[pos + 1]) ||
            i === dataLength) { // get the last group
            // get group x and y
            pointX = groupPositions[pos];
            series.dataGroupInfo = {
                start: groupAll ? start : (series.cropStart + start),
                length: values[0].length,
                groupStart: pointX
            };
            groupedY = approximationFn.apply(series, values);
            // By default, let options of the first grouped point be passed over
            // to the grouped point. This allows preserving properties like
            // `name` and `color` or custom properties. Implementers can
            // override this from the approximation function, where they can
            // write custom options to `this.dataGroupInfo.options`.
            if (series.pointClass && !defined(series.dataGroupInfo.options)) {
                // Convert numbers and arrays into objects
                series.dataGroupInfo.options = merge(series.pointClass.prototype
                    .optionsToObject.call({ series: series }, series.options.data[series.cropStart + start]));
                // Make sure the raw data (x, y, open, high etc) is not copied
                // over and overwriting approximated data.
                extendedPointArrayMap.forEach(function (key) {
                    delete series.dataGroupInfo.options[key];
                });
            }
            // push the grouped data
            if (typeof groupedY !== 'undefined') {
                groupedXData.push(pointX);
                groupedYData.push(groupedY);
                groupMap.push(series.dataGroupInfo);
            }
            // reset the aggregate arrays
            start = i;
            for (let j = 0; j < valuesLen; j++) {
                values[j].length = 0; // faster than values[j] = []
                values[j].hasNulls = false;
            }
            // Advance on the group positions
            pos += 1;
            // don't loop beyond the last group
            if (i === dataLength) {
                break;
            }
        }
        // break out
        if (i === dataLength) {
            break;
        }
        // for each raw data point, push it to an array that contains all values
        // for this specific group
        if (pointArrayMap) {
            const index = (series.options.dataGrouping &&
                series.options.dataGrouping.groupAll ?
                i : series.cropStart + i), point = (data && data[index]) ||
                series.pointClass.prototype.applyOptions.apply({
                    series: series
                }, [dataOptions[index]]);
            let val;
            for (let j = 0; j < pointArrayMapLength; j++) {
                val = point[pointArrayMap[j]];
                if (isNumber(val)) {
                    values[j].push(val);
                }
                else if (val === null) {
                    values[j].hasNulls = true;
                }
            }
        }
        else {
            pointY = handleYData ? yData[i] : null;
            if (isNumber(pointY)) {
                values[0].push(pointY);
            }
            else if (pointY === null) {
                values[0].hasNulls = true;
            }
        }
    }
    return {
        groupedXData,
        groupedYData,
        groupMap
    };
}
/**
 * Handle default options for data grouping. This must be set at runtime because
 * some series types are defined after this.
 * @private
 */
function onAfterSetOptions(e) {
    const options = e.options, type = this.type, plotOptions = this.chart.options.plotOptions, 
    // External series, for example technical indicators should also inherit
    // commonOptions which are not available outside this module
    baseOptions = (this.useCommonDataGrouping &&
        DataGroupingDefaults.common), seriesSpecific = DataGroupingDefaults.seriesSpecific;
    let defaultOptions = D.defaultOptions.plotOptions[type].dataGrouping;
    if (plotOptions && (seriesSpecific[type] || baseOptions)) { // #1284
        const rangeSelector = this.chart.rangeSelector;
        if (!defaultOptions) {
            defaultOptions = merge(DataGroupingDefaults.common, seriesSpecific[type]);
        }
        options.dataGrouping = merge(baseOptions, defaultOptions, plotOptions.series && plotOptions.series.dataGrouping, // #1228
        // Set by the StockChart constructor:
        plotOptions[type].dataGrouping, this.userOptions.dataGrouping, !options.isInternal &&
            rangeSelector &&
            isNumber(rangeSelector.selected) &&
            rangeSelector.buttonOptions[rangeSelector.selected].dataGrouping);
    }
}
/**
 * @private
 */
function skipDataGrouping(series, force) {
    return !(series.isCartesian &&
        !series.isDirty &&
        !series.xAxis.isDirty &&
        !series.yAxis.isDirty &&
        !force);
}
/* *
 *
 *  Default Export
 *
 * */
const DataGroupingSeriesComposition = {
    compose,
    groupData
};
export default DataGroupingSeriesComposition;
