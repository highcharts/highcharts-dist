/**
 * @license Highcharts JS v12.2.0 (2025-04-07)
 * @module highcharts/modules/navigator
 * @requires highcharts
 *
 * Standalone navigator module
 *
 * (c) 2009-2025 Mateusz Bernacik
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import StandaloneNavigator from '../../Stock/Navigator/StandaloneNavigator.js';
import NavigatorComposition from '../../Stock/Navigator/NavigatorComposition.js';
const G = Highcharts;
G.StandaloneNavigator = G.StandaloneNavigator || StandaloneNavigator;
G.navigator = G.StandaloneNavigator.navigator;
NavigatorComposition.compose(G.Chart, G.Axis, G.Series);
export default Highcharts;
