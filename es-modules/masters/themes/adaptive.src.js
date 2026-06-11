// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/themes/adaptive
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
'use strict';
import H from '../../Core/Globals.js';
import Adaptive from '../../Extensions/Themes/Adaptive.js';
H.theme = Adaptive.options;
Adaptive.apply();
export default H;
