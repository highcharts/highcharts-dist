// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.1 (2026-08-17)
 * @module highcharts/modules/no-data-to-display
 * @requires highcharts
 *
 * Plugin for displaying a message when there is no data visible in chart.
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Øystein Moseng
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import NoDataToDisplay from '../../Extensions/NoDataToDisplay/NoDataToDisplay.js';
const G = Highcharts;
NoDataToDisplay.compose(G.Chart, G.defaultOptions);
export default Highcharts;
