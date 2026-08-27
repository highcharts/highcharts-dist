// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts Gantt JS v13.0.2 (2026-08-27)
 * @module highcharts/modules/current-date-indicator
 * @requires highcharts
 *
 * CurrentDateIndicator
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Lars A. V. Cabrera
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import { composeCurrentDateIndication } from '../../Extensions/CurrentDateIndication.js';
const G = Highcharts;
composeCurrentDateIndication(G.Axis, G.PlotLineOrBand);
export default Highcharts;
