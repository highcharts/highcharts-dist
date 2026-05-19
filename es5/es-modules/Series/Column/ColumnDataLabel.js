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
import DataLabel from '../../Core/Series/DataLabel.js';
import H from '../../Core/Globals.js';
var composed = H.composed;
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var Series = SeriesRegistry.series;
import { merge, pushUnique } from '../../Shared/Utilities.js';
/* *
 *
 *  Composition
 *
 * */
var ColumnDataLabel;
(function (ColumnDataLabel) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Override the basic data label alignment by adjusting for the position of
     * the column.
     * @internal
     */
    function alignDataLabel(point, dataLabel, dlOptions, alignTo, isNew) {
        var _a, _b, _c, _d, _e, _f, _g;
        var _h = this, chart = _h.chart, options = _h.options, inverted = chart.inverted, xLen = ((_a = this.xAxis) === null || _a === void 0 ? void 0 : _a.len) || chart.plotSizeX || 0, yLen = ((_b = this.yAxis) === null || _b === void 0 ? void 0 : _b.len) || chart.plotSizeY || 0, 
        // Data label box for alignment
        dlBox = point.dlBox || point.shapeArgs, below = (_c = point.below) !== null && _c !== void 0 ? _c : (point.plotY || 0) > ((_d = this.translatedThreshold) !== null && _d !== void 0 ? _d : yLen), 
        // Draw it inside the box?
        inside = (_e = dlOptions.inside) !== null && _e !== void 0 ? _e : !!options.stacking;
        // Align to the column itself, or the top of it
        if (dlBox) { // Area range uses this method but not alignTo
            alignTo = merge(dlBox);
            // Check for specific overflow and crop conditions (#13240, #22617)
            if (dlOptions.overflow !== 'allow' ||
                dlOptions.crop !== false ||
                options.clip !== false) {
                if (alignTo.y < 0) {
                    alignTo.height += alignTo.y;
                    alignTo.y = 0;
                }
                // If parts of the box overshoots outside the plot area, modify
                // the box to center the label inside
                var overshoot = alignTo.y + alignTo.height - yLen;
                if (overshoot > 0 && overshoot < alignTo.height - 1) {
                    alignTo.height -= overshoot;
                }
            }
            if (inverted) {
                alignTo = {
                    x: yLen - alignTo.y - alignTo.height,
                    y: xLen - alignTo.x - alignTo.width,
                    width: alignTo.height,
                    height: alignTo.width
                };
            }
            // Compute the alignment box
            if (!inside) {
                if (inverted) {
                    alignTo.x += below ? 0 : alignTo.width;
                    alignTo.width = 0;
                }
                else {
                    alignTo.y += below ? alignTo.height : 0;
                    alignTo.height = 0;
                }
            }
        }
        // When alignment is undefined (typically columns and bars), display the
        // individual point below or above the point depending on the threshold
        (_f = dlOptions.align) !== null && _f !== void 0 ? _f : (dlOptions.align = !inverted || inside ?
            'center' : below ? 'right' : 'left');
        (_g = dlOptions.verticalAlign) !== null && _g !== void 0 ? _g : (dlOptions.verticalAlign = inverted || inside ?
            'middle' : below ? 'top' : 'bottom');
        // Call the parent method
        Series.prototype.alignDataLabel.call(this, point, dataLabel, dlOptions, alignTo, isNew);
        // If label was justified and we have contrast, set it:
        if (dlOptions.inside && point.contrastColor) {
            dataLabel.css({
                color: point.contrastColor
            });
        }
    }
    /** @internal */
    function compose(ColumnSeriesClass) {
        DataLabel.compose(Series);
        if (pushUnique(composed, 'ColumnDataLabel')) {
            ColumnSeriesClass.prototype.alignDataLabel = alignDataLabel;
        }
    }
    ColumnDataLabel.compose = compose;
})(ColumnDataLabel || (ColumnDataLabel = {}));
/* *
 *
 *  Default Export
 *
 * */
export default ColumnDataLabel;
