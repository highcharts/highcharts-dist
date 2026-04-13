// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.6.0 (2026-04-13)
 * @module highcharts/modules/sunburst
 * @requires highcharts
 *
 * (c) 2016-2026 Highsoft AS
 * Authors: Jon Arild Nygård
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import '../../Series/Treemap/TreemapSeries.js';
import '../../Series/Sunburst/SunburstSeries.js';
import Breadcrumbs from '../../Extensions/Breadcrumbs/Breadcrumbs.js';
const G = Highcharts;
G.Breadcrumbs = G.Breadcrumbs || Breadcrumbs;
G.Breadcrumbs.compose(G.Chart, G.defaultOptions);
export default Highcharts;
