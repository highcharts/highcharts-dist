// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.1.0 (2026-09-18)
 * @module highcharts/modules/variwide
 * @requires highcharts
 *
 * Highcharts variwide module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import VariwideSeries from '../../Series/Variwide/VariwideSeries.js';
const G = Highcharts;
VariwideSeries.compose(G.Axis, G.Tick);
export default Highcharts;
