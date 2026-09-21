// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.6.2 (2026-09-21)
 * @module highcharts/themes/gray
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import H from '../../Core/Globals.js';
import GrayTheme from '../../Extensions/Themes/Gray.js';
H.theme = GrayTheme.options;
GrayTheme.apply();
export default H;
