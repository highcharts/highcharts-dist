/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Paweł Potaczek
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import BubbleLegendDefaults from './BubbleLegendDefaults.js';
import BubbleLegendItem from './BubbleLegendItem.js';
import D from '../../Core/Defaults.js';
var setOptions = D.setOptions;
import H from '../../Core/Globals.js';
var composed = H.composed;
import { addEvent, objectEach, pushUnique, wrap } from '../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * If ranges are not specified, determine ranges from rendered bubble series
 * and render legend again.
 *
 * @internal
 */
function chartDrawChartBox(proceed, options, callback) {
    var chart = this, legend = chart.legend, bubbleSeries = getVisibleBubbleSeriesIndex(chart) >= 0;
    var bubbleLegendOptions, bubbleSizes, legendItem;
    if (legend && legend.options.enabled && legend.bubbleLegend &&
        legend.options.bubbleLegend.autoRanges && bubbleSeries) {
        bubbleLegendOptions = legend.bubbleLegend.options;
        bubbleSizes = legend.bubbleLegend.predictBubbleSizes();
        legend.bubbleLegend.updateRanges(bubbleSizes[0], bubbleSizes[1]);
        // Disable animation on init
        if (!bubbleLegendOptions.placed) {
            legend.group.placed = false;
            legend.allItems.forEach(function (item) {
                legendItem = item.legendItem || {};
                if (legendItem.group) {
                    legendItem.group.translateY = void 0;
                }
            });
        }
        // Create legend with bubbleLegend
        legend.render();
        // Calculate margins after first rendering the bubble legend
        if (!bubbleLegendOptions.placed) {
            chart.getMargins();
            chart.axes.forEach(function (axis) {
                axis.setScale();
                axis.updateNames();
                // Disable axis animation on init
                objectEach(axis.ticks, function (tick) {
                    tick.isNew = true;
                    tick.isNewLabel = true;
                });
            });
            chart.getMargins();
        }
        bubbleLegendOptions.placed = true;
        // Call default 'drawChartBox' method.
        proceed.call(chart, options, callback);
        // Check bubble legend sizes and correct them if necessary.
        legend.bubbleLegend.correctSizes();
    }
    else {
        proceed.call(chart, options, callback);
        // Allow color change on static bubble legend after click on legend
        if (legend && legend.options.enabled && legend.bubbleLegend) {
            legend.render();
        }
    }
}
/**
 * Compose classes for use with Bubble series.
 *
 * @internal
 * @param {Highcharts.Chart} ChartClass
 * Core chart class to use with Bubble series.
 *
 * @param {Highcharts.Legend} LegendClass
 * Core legend class to use with Bubble series.
 */
function compose(ChartClass, LegendClass) {
    if (pushUnique(composed, 'Series.BubbleLegend')) {
        setOptions({
            // Set default bubble legend options
            legend: {
                bubbleLegend: BubbleLegendDefaults
            }
        });
        wrap(ChartClass.prototype, 'drawChartBox', chartDrawChartBox);
        addEvent(LegendClass, 'afterGetAllItems', onLegendAfterGetAllItems);
        addEvent(LegendClass, 'afterRender', onLegendAfterRender);
        addEvent(LegendClass, 'itemClick', onLegendItemClick);
    }
}
/**
 * Check if there is at least one visible bubble series.
 *
 * @internal
 * @function getVisibleBubbleSeriesIndex
 * @param {Highcharts.Chart} chart
 * Chart to check.
 * @return {number}
 * First visible bubble series index
 */
function getVisibleBubbleSeriesIndex(chart) {
    var series = chart.series;
    var i = 0;
    while (i < series.length) {
        if (series[i] &&
            series[i].isBubble &&
            series[i].visible &&
            series[i].dataTable.rowCount) {
            return i;
        }
        i++;
    }
    return -1;
}
/**
 * Calculate height for each row in legend.
 *
 * @internal
 * @function getLinesHeights
 *
 * @param {Highcharts.Legend} legend
 * Legend to calculate from.
 *
 * @return {Array<Highcharts.Dictionary<number>>}
 * Information about line height and items amount
 */
function getLinesHeights(legend) {
    var items = legend.allItems, lines = [], length = items.length;
    var lastLine, legendItem, legendItem2, i = 0, j = 0;
    for (i = 0; i < length; i++) {
        legendItem = items[i].legendItem || {};
        legendItem2 = (items[i + 1] || {}).legendItem || {};
        if (legendItem.labelHeight) {
            // For bubbleLegend
            items[i].itemHeight = legendItem.labelHeight;
        }
        if ( // Line break
        items[i] === items[length - 1] ||
            legendItem.y !== legendItem2.y) {
            lines.push({ height: 0 });
            lastLine = lines[lines.length - 1];
            // Find the highest item in line
            for (j; j <= i; j++) {
                if (items[j].itemHeight > lastLine.height) {
                    lastLine.height = items[j].itemHeight;
                }
            }
            lastLine.step = i;
        }
    }
    return lines;
}
/**
 * Start the bubble legend creation process.
 *
 * @internal
 */
function onLegendAfterGetAllItems(e) {
    var legend = this, bubbleLegend = legend.bubbleLegend, legendOptions = legend.options, options = legendOptions.bubbleLegend, bubbleSeriesIndex = getVisibleBubbleSeriesIndex(legend.chart);
    // Remove unnecessary element
    if (bubbleLegend && bubbleLegend.ranges && bubbleLegend.ranges.length) {
        // Allow change the way of calculating ranges in update
        if (options.ranges.length) {
            options.autoRanges =
                !!options.ranges[0].autoRanges;
        }
        // Update bubbleLegend dimensions in each redraw
        legend.destroyItem(bubbleLegend);
    }
    // Create bubble legend
    if (bubbleSeriesIndex >= 0 &&
        legendOptions.enabled &&
        options.enabled) {
        options.seriesIndex = bubbleSeriesIndex;
        legend.bubbleLegend = new BubbleLegendItem(options, legend);
        legend.bubbleLegend.addToLegend(e.allItems);
    }
}
/**
 * Retranslate the legend items after render
 *
 * @internal
 */
function onLegendAfterRender() {
    if (this.bubbleLegend) {
        var items = this.allItems, rtl_1 = this.options.rtl, lines_1 = getLinesHeights(this);
        var orgTranslateX_1, orgTranslateY_1, movementX_1, legendItem_1, actualLine_1 = 0;
        items.forEach(function (item, index) {
            legendItem_1 = item.legendItem || {};
            if (!legendItem_1.group) {
                return;
            }
            orgTranslateX_1 = legendItem_1.group.translateX || 0;
            orgTranslateY_1 = legendItem_1.y || 0;
            movementX_1 = item.movementX;
            if (movementX_1 || (rtl_1 && item.ranges)) {
                movementX_1 = rtl_1 ?
                    orgTranslateX_1 - item.options.maxSize / 2 :
                    orgTranslateX_1 + movementX_1;
                legendItem_1.group.attr({ translateX: movementX_1 });
            }
            if (index > lines_1[actualLine_1].step) {
                actualLine_1++;
            }
            legendItem_1.group.attr({
                translateY: Math.round(orgTranslateY_1 + lines_1[actualLine_1].height / 2)
            });
            legendItem_1.y = orgTranslateY_1 + lines_1[actualLine_1].height / 2;
        });
    }
}
/**
 * Toggle bubble legend depending on the visible status of bubble series.
 *
 * @internal
 */
function onLegendItemClick(e) {
    // #14080 don't fire this code if click function is prevented
    if (e.defaultPrevented) {
        return false;
    }
    var legend = this, series = e.legendItem, chart = legend.chart, visible = series.visible;
    var status;
    if (legend && legend.bubbleLegend) {
        // Temporary correct 'visible' property
        series.visible = !visible;
        // Save future status for getRanges method
        series.ignoreSeries = visible;
        // Check if at lest one bubble series is visible
        status = getVisibleBubbleSeriesIndex(chart) >= 0;
        // Hide bubble legend if all bubble series are disabled
        if (legend.bubbleLegend.visible !== status) {
            // Show or hide bubble legend
            legend.update({
                bubbleLegend: { enabled: status }
            });
            legend.bubbleLegend.visible = status; // Restore default status
        }
        series.visible = visible;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var BubbleLegendComposition = {
    compose: compose
};
/** @internal */
export default BubbleLegendComposition;
