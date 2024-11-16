/**
 * @license Highmaps JS v11.4.8 (2024-11-16)
 * @module highcharts/modules/tilemap
 * @requires highcharts
 * @requires highcharts/modules/map
 *
 * Tilemap module
 *
 * (c) 2010-2024 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import TilemapSeries from '../../Series/Tilemap/TilemapSeries.js';
const G = Highcharts;
TilemapSeries.compose(G.Axis);
export default Highcharts;
