/**
 * @license Highcharts JS v12.2.0 (2025-04-07)
 * @module highcharts/modules/treemap
 * @requires highcharts
 *
 * (c) 2014-2025 Highsoft AS
 * Authors: Jon Arild Nygard / Oystein Moseng
 *
 * License: www.highcharts.com/license
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
