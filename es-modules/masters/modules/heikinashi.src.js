// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v12.5.0-modified (2026-02-21)
 * @module highcharts/modules/heikinashi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * HeikinAshi series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Karol Kolodziej
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import HeikinAshiSeries from '../../Series/HeikinAshi/HeikinAshiSeries.js';
const G = Highcharts;
HeikinAshiSeries.compose(G.Series, G.Axis);
export default Highcharts;
