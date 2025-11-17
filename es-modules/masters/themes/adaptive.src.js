/**
 * @license Highcharts JS v12.4.0-modified (2025-11-17)
 * @module highcharts/themes/adaptive
 * @requires highcharts
 *
 * (c) 2009-2025 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import H from '../../Core/Globals.js';
import Adaptive from '../../Extensions/Themes/Adaptive.js';
H.theme = Adaptive.options;
Adaptive.apply();
export default H;
