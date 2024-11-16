/**
 * @license Highcharts JS v11.4.8 (2024-11-16)
 * @module highcharts/modules/drilldown
 * @requires highcharts
 *
 * Highcharts Drilldown module
 *
 * Author: Torstein Honsi
 * License: www.highcharts.com/license
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
