/**
 * @license Highcharts JS v11.1.0 (2023-06-05)
 * @module highcharts/modules/color-axis
 * @requires highcharts
 *
 * ColorAxis module
 *
 * (c) 2012-2021 Pawel Potaczek
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import ColorAxis from '../../Core/Axis/Color/ColorAxis.js';
const G = Highcharts;
G.ColorAxis = ColorAxis;
ColorAxis.compose(G.Chart, G.Fx, G.Legend, G.Series);
