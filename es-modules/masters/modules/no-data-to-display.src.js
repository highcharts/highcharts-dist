/**
 * @license Highcharts JS v11.4.8 (2024-11-16)
 * @module highcharts/modules/no-data-to-display
 * @requires highcharts
 *
 * Plugin for displaying a message when there is no data visible in chart.
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Oystein Moseng
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import NoDataToDisplay from '../../Extensions/NoDataToDisplay/NoDataToDisplay.js';
const G = Highcharts;
NoDataToDisplay.compose(G.Chart, G.defaultOptions);
export default Highcharts;
