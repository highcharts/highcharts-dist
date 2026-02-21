// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highmaps JS v12.5.0-modified (2026-02-21)
 * @module highcharts/modules/tilemap
 * @requires highcharts
 * @requires highcharts/modules/map
 *
 * Tilemap module
 *
 * (c) 2010-2026 Highsoft AS
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import TilemapSeries from '../../Series/Tilemap/TilemapSeries.js';
const G = Highcharts;
TilemapSeries.compose(G.Axis);
export default Highcharts;
