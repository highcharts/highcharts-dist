// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts Gantt JS v12.5.0-modified (2026-02-21)
 * @module highcharts/modules/grid-axis
 * @requires highcharts
 *
 * GridAxis
 *
 * (c) 2016-2026 Highsoft AS
 * Author: Lars A. V. Cabrera
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import GridAxis from '../../Core/Axis/GridAxis.js';
const G = Highcharts;
// Compositions
GridAxis.compose(G.Axis, G.Chart, G.Tick);
export default Highcharts;
