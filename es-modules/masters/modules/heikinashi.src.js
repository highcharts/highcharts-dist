/**
 * @license Highstock JS v12.2.0 (2025-04-07)
 * @module highcharts/modules/heikinashi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * HeikinAshi series type for Highcharts Stock
 *
 * (c) 2010-2025 Karol Kolodziej
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import HeikinAshiSeries from '../../Series/HeikinAshi/HeikinAshiSeries.js';
const G = Highcharts;
HeikinAshiSeries.compose(G.Series, G.Axis);
export default Highcharts;
