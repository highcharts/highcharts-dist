// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts Gantt JS v12.5.0-modified (2026-02-21)
 * @module highcharts/modules/pathfinder
 * @requires highcharts
 *
 * Pathfinder
 *
 * (c) 2016-2026 Highsoft AS
 * Author: Øystein Moseng
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Pathfinder from '../../Gantt/Pathfinder.js';
import ArrowSymbols from '../../Extensions/ArrowSymbols.js';
const G = Highcharts;
G.Pathfinder = G.Pathfinder || Pathfinder;
ArrowSymbols.compose(G.SVGRenderer);
G.Pathfinder.compose(G.Chart, G.Point);
export default Highcharts;
