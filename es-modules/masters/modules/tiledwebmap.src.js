/**
 * @license Highcharts JS v11.1.0 (2023-10-12)
 * @module highcharts/modules/tiledwebmap
 * @requires highcharts
 *
 * (c) 2009-2022
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import '../../Series/TiledWebMap/TiledWebMapSeries.js';
import TilesProviderRegistry from '../../Maps/TilesProviders/TilesProviderRegistry.js';
const G = Highcharts;
G.TilesProviderRegistry = TilesProviderRegistry;
