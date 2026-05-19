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
import D from '../../Core/Defaults.js';
var defaultOptions = D.defaultOptions;
import H from '../../Core/Globals.js';
var composed = H.composed;
import NavigatorAxisAdditions from '../../Core/Axis/NavigatorAxisComposition.js';
import NavigatorDefaults from './NavigatorDefaults.js';
import NavigatorSymbols from './NavigatorSymbols.js';
import SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer.js';
import StockUtilities from '../../Stock/Utilities/StockUtilities.js';
var setFixedRange = StockUtilities.setFixedRange;
import { addEvent, extend, pushUnique } from '../../Shared/Utilities.js';
/* *
 *
 *  Variables
 *
 * */
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function compose(ChartClass, AxisClass, SeriesClass) {
    NavigatorAxisAdditions.compose(AxisClass);
    if (pushUnique(composed, 'Navigator')) {
        ChartClass.prototype.setFixedRange = setFixedRange;
        extend(SVGRenderer.prototype.symbols, NavigatorSymbols);
        extend(defaultOptions, { navigator: NavigatorDefaults });
        addEvent(SeriesClass, 'afterUpdate', onSeriesAfterUpdate);
    }
}
/**
 * Handle updating series
 * @internal
 */
function onSeriesAfterUpdate() {
    if (this.chart.navigator && !this.options.isInternal) {
        this.chart.navigator.setBaseSeries(null, false);
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
var NavigatorComposition = {
    compose: compose
};
/** @internal */
export default NavigatorComposition;
