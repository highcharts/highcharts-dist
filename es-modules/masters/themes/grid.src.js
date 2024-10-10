/**
 * @license Highcharts JS v11.4.8 (2024-10-10)
 * @module highcharts/themes/grid
 * @requires highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import H from '../../Core/Globals.js';
import GridTheme from '../../Extensions/Themes/Grid.js';
H.theme = GridTheme.options;
GridTheme.apply();
export default H;
