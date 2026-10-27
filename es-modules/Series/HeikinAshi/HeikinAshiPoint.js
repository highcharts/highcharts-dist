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
import CandlestickSeries from '../Candlestick/CandlestickSeries.js';
/* *
 *
 *  Constants
 *
 * */
const CandlestickPoint = CandlestickSeries.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
class HeikinAshiPoint extends CandlestickPoint {
}
/* *
 *
 *  Default Export
 *
 * */
export default HeikinAshiPoint;
