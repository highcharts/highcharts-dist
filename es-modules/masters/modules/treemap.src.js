// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.6.2 (2026-09-21)
 * @module highcharts/modules/treemap
 * @requires highcharts
 *
 * (c) 2014-2026 Highsoft AS
 * Authors: Jon Arild Nygård / Øystein Moseng
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Breadcrumbs from '../../Extensions/Breadcrumbs/Breadcrumbs.js';
import TreemapSeries from '../../Series/Treemap/TreemapSeries.js';
const G = Highcharts;
G.Breadcrumbs = G.Breadcrumbs || Breadcrumbs;
G.Breadcrumbs.compose(G.Chart, G.defaultOptions);
TreemapSeries.compose(G.Series);
export default Highcharts;
