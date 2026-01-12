// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0 (2026-01-12)
 * @module highcharts/modules/pattern-fill
 * @requires highcharts
 *
 * Module for adding patterns and images as point fills.
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi, Øystein Moseng
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import PatternFill from '../../Extensions/PatternFill.js';
const G = Highcharts;
G.patterns = PatternFill.patterns;
PatternFill.compose(G.Chart, G.Series, G.SVGRenderer);
export default Highcharts;
