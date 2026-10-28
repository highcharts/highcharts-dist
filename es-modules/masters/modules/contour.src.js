// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highmaps JS v13.1.1-modified (2026-10-28)
 * @module highcharts/modules/contour
 * @requires highcharts
 * @requires highcharts/modules/coloraxis
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
