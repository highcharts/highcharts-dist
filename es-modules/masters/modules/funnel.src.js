// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/modules/funnel
 * @requires highcharts
 *
 * Highcharts funnel module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import FunnelSeries from '../../Series/Funnel/FunnelSeries.js';
import '../../Series/Pyramid/PyramidSeries.js';
const G = Highcharts;
FunnelSeries.compose(G.Chart);
export default Highcharts;
