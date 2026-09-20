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
import { addEvent, extend, isNumber, splat } from '../../../Shared/Utilities.js';
/* *
 *
 *  Composition
 *
 * */
var PlotLineOrBandAxis;
(function (PlotLineOrBandAxis) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Variables
     *
     * */
    let PlotLineOrBandClass;
    /* *
     *
     *  Functions
     *
     * */
    const getAdderFunction = (coll) => 
    /**
     * Add a plot band or plot line after render time. Called from
     * addPlotBand and addPlotLine internally.
     *
     * @internal
     * @function Highcharts.Axis#addPlotBandOrLine
     * @param {Highcharts.AxisPlotBandsOptions|Highcharts.AxisPlotLinesOptions} options
     *        The `plotBand` or `plotLine` configuration object.
     */
    function addPlotLineOrBand(options) {
        var _a;
        const plotItem = new PlotLineOrBandClass(this, options, coll);
        if (this.visible) {
            plotItem.render();
        }
        (_a = this.options)[coll] || (_a[coll] = this.userOptions[coll] = []);
        this.options[coll].push(options);
        this[coll].push(plotItem);
        return plotItem;
    };
    /** @internal */
    function compose(PlotLineOrBandType, AxisClass) {
        const axisProto = AxisClass.prototype;
        if (!axisProto.addPlotBand) {
            PlotLineOrBandClass = PlotLineOrBandType;
            extend(axisProto, {
                addPlotBand: getAdderFunction('plotBands'),
                addPlotLine: getAdderFunction('plotLines'),
                getPlotBandPath,
                removePlotBand: removePlotBandOrLine,
                removePlotLine: removePlotBandOrLine
            });
            addEvent(AxisClass, 'afterInit', function () {
                // First time only, not on Axis.update()
                if (!this.plotBands) {
                    // Placeholder for plotlines and plotbands groups
                    this.plotLinesAndBandsGroups = {};
                    // Plot lines and bands from options
                    for (const coll of ['plotBands', 'plotLines']) {
                        this[coll] = [];
                        for (const pOptions of splat(this.options[coll] || [])) {
                            this[coll].push(new PlotLineOrBandClass(this, pOptions, coll));
                        }
                    }
                }
            });
            // Update plot bands and lines one to one
            addEvent(AxisClass, 'update', function ({ options }) {
                for (const coll of ['plotBands', 'plotLines']) {
                    // Check if we have new options to process, otherwise do
                    // nothing with existing plot lines and bands
                    if (options[coll]) {
                        const plotItems = this[coll];
                        splat(options[coll]).forEach((pOptions = {}, i) => {
                            // Match by id
                            let pItem;
                            if (pOptions?.id) {
                                pItem = plotItems.find((p) => p.id === pOptions.id);
                            }
                            // Match by index
                            pItem || (pItem = plotItems[i]);
                            // Update
                            if (pItem) {
                                pItem.update(pOptions, false);
                                options[coll][i] = pItem.options;
                                // Add
                            }
                            else {
                                pItem = this[coll === 'plotBands' ?
                                    'addPlotBand' :
                                    'addPlotLine'](pOptions);
                            }
                            pItem.isActive = true;
                        });
                        // Remove inactive items from end to start
                        let i = plotItems.length;
                        while (i--) {
                            if (!plotItems[i].isActive) {
                                plotItems[i].remove();
                            }
                            else {
                                delete plotItems[i].isActive;
                            }
                        }
                    }
                }
            });
        }
        return AxisClass;
    }
    PlotLineOrBandAxis.compose = compose;
    /**
     * Internal function to create the SVG path definition for a plot band.
     *
     * @function Highcharts.Axis#getPlotBandPath
     *
     * @param {number} from
     * The axis value to start from.
     *
     * @param {number} to
     * The axis value to end on.
     *
     * @param {Highcharts.AxisPlotBandsOptions|Highcharts.AxisPlotLinesOptions} options
     * The plotBand or plotLine configuration object.
     *
     * @return {Highcharts.SVGPathArray}
     * The SVG path definition in array form.
     */
    function getPlotBandPath(from, to, options) {
        options = options || this.options;
        const toPath = this.getPlotLinePath({
            value: to,
            force: true,
            acrossPanes: options.acrossPanes
        }), result = [], horiz = this.horiz, outside = !isNumber(this.min) ||
            !isNumber(this.max) ||
            (from < this.min && to < this.min) ||
            (from > this.max && to > this.max), path = this.getPlotLinePath({
            value: from,
            force: true,
            acrossPanes: options.acrossPanes
        });
        let i, 
        // #4964 check if chart is inverted or plot band is on yAxis
        plus = 1, isFlat;
        if (path && toPath) {
            // Flat paths don't need labels (#3836)
            if (outside) {
                isFlat = path.toString() === toPath.toString();
                plus = 0;
            }
            // Go over each subpath - for panes in Highcharts Stock
            for (i = 0; i < path.length; i += 2) {
                const pathStart = path[i], pathEnd = path[i + 1], toPathStart = toPath[i], toPathEnd = toPath[i + 1];
                // Type checking all affected path segments. Consider
                // something smarter.
                if ((pathStart[0] === 'M' || pathStart[0] === 'L') &&
                    (pathEnd[0] === 'M' || pathEnd[0] === 'L') &&
                    (toPathStart[0] === 'M' || toPathStart[0] === 'L') &&
                    (toPathEnd[0] === 'M' || toPathEnd[0] === 'L')) {
                    // Add 1 pixel when coordinates are the same
                    if (horiz && toPathStart[1] === pathStart[1]) {
                        toPathStart[1] += plus;
                        toPathEnd[1] += plus;
                    }
                    else if (!horiz && toPathStart[2] === pathStart[2]) {
                        toPathStart[2] += plus;
                        toPathEnd[2] += plus;
                    }
                    result.push(['M', pathStart[1], pathStart[2]], ['L', pathEnd[1], pathEnd[2]], ['L', toPathEnd[1], toPathEnd[2]], ['L', toPathStart[1], toPathStart[2]], ['Z']);
                }
                result.isFlat = isFlat;
            }
        }
        return result;
    }
    /**
     * Remove a plot band or plot line from the chart by id. Called
     * internally from `removePlotBand` and `removePlotLine`.
     * @internal
     * @function Highcharts.Axis#removePlotBandOrLine
     */
    function removePlotBandOrLine(id) {
        [...this.plotBands || [], ...this.plotLines || []].find((plotItem) => plotItem.id === id)?.remove();
    }
})(PlotLineOrBandAxis || (PlotLineOrBandAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
export default PlotLineOrBandAxis;
