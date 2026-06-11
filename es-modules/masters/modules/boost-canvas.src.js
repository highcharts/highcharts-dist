// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/boost-canvas
 * @requires highcharts
 *
 * Boost module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import BoostCanvas from '../../Extensions/BoostCanvas.js';
const G = Highcharts;
/**
 * Initialize the canvas boost.
 *
 * @function Highcharts.initCanvasBoost
 */
G.initCanvasBoost = function () {
    BoostCanvas.compose(G.Chart, G.Series, G.seriesTypes);
};
export default Highcharts;
