// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/pattern-fill
 * @requires highcharts
 *
 * Module for adding patterns and images as point fills.
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi, Øystein Moseng
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import { composePatternFill, patterns } from '../../Extensions/PatternFill.js';
const G = Highcharts;
G.patterns = patterns;
composePatternFill(G.Chart, G.Series, G.SVGRenderer);
export default Highcharts;
