/**
 * @license Highmaps JS v13.0.0-beta.2 (2026-05-20)
 * @module highcharts/modules/contour
 * @requires highcharts
 *
 * (c) 2009-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import './coloraxis.src.js';
import ContourSeries from '../../Series/Contour/ContourSeries.js';
const G = Highcharts;
ContourSeries.compose(G.Renderer);
export default Highcharts;
