// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/debugger
 * @requires highcharts
 *
 * Debugger module
 *
 * (c) 2012-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Debugger from '../../Extensions/Debugger/Debugger.js';
import ErrorMessages from '../../Extensions/Debugger/ErrorMessages.js';
const G = Highcharts;
G.errorMessages = G.errorMessages || ErrorMessages;
Debugger.compose(G.Chart);
export default Highcharts;
