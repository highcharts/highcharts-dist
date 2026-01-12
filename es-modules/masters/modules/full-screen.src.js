// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/modules/full-screen
 * @requires highcharts
 *
 * Advanced Highcharts Stock tools
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Honsi
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Fullscreen from '../../Extensions/Exporting/Fullscreen.js';
const G = Highcharts;
G.Fullscreen = G.Fullscreen || Fullscreen;
G.Fullscreen.compose(G.Chart);
export default Highcharts;
