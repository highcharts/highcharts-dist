// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0-modified (2026-02-21)
 * @module highcharts/modules/tiledwebmap
 * @requires highcharts
 *
 * (c) 2009-2026
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import TilesProviderRegistry from '../../Maps/TilesProviders/TilesProviderRegistry.js';
import TiledWebMapSeries from '../../Series/TiledWebMap/TiledWebMapSeries.js';
const G = Highcharts;
G.TilesProviderRegistry = G.TilesProviderRegistry || TilesProviderRegistry;
TiledWebMapSeries.compose(G.MapView);
export default Highcharts;
