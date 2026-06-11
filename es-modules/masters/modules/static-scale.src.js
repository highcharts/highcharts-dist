// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts Gantt JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/static-scale
 * @requires highcharts
 *
 * StaticScale
 *
 * (c) 2016-2026 Highsoft AS
 * Author: Torstein Hønsi, Lars A. V. Cabrera
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import { composeStaticScale } from '../../Extensions/StaticScale.js';
const G = Highcharts;
composeStaticScale(G.Axis, G.Chart);
export default Highcharts;
