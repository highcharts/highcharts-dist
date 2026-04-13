// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.6.0 (2026-04-13)
 * @module highcharts/modules/parallel-coordinates
 * @requires highcharts
 *
 * Support for parallel coordinates in Highcharts
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import ParallelCoordinates from '../../Extensions/ParallelCoordinates/ParallelCoordinates.js';
const G = Highcharts;
ParallelCoordinates.compose(G.Axis, G.Chart, G.defaultOptions, G.Series);
export default Highcharts;
