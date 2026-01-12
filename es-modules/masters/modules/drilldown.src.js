// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0 (2026-01-12)
 * @module highcharts/modules/drilldown
 * @requires highcharts
 *
 * Highcharts Drilldown module
 *
 * (c) 2009-2026 Highsoft AS
 *
 * Author: Torstein Honsi
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 *
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Drilldown from '../../Extensions/Drilldown/Drilldown.js';
import Breadcrumbs from '../../Extensions/Breadcrumbs/Breadcrumbs.js';
const G = Highcharts;
G.Breadcrumbs = G.Breadcrumbs || Breadcrumbs;
Drilldown.compose(G.Axis, G.Chart, G.defaultOptions, G.Series, G.seriesTypes, G.SVGRenderer, G.Tick);
export default Highcharts;
