// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts Gantt JS v12.5.0-modified (2026-02-21)
 * @module highcharts/modules/static-scale
 * @requires highcharts
 *
 * StaticScale
 *
 * (c) 2016-2026 Highsoft AS
 * Author: Torstein Honsi, Lars A. V. Cabrera
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import StaticScale from '../../Extensions/StaticScale.js';
const G = Highcharts;
StaticScale.compose(G.Axis, G.Chart);
export default Highcharts;
