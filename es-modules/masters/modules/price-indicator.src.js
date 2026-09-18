// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/modules/price-indicator
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * (c) 2018-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * Price indicator for Highcharts Stock
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import { composePriceIndication } from '../../Extensions/PriceIndication.js';
const G = Highcharts;
composePriceIndication(G.Series);
export default Highcharts;
