/**
 * @license Highcharts JS v12.2.0 (2025-04-07)
 * @module highcharts/modules/draggable-points
 * @requires highcharts
 *
 * (c) 2009-2025 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import DraggablePoints from '../../Extensions/DraggablePoints/DraggablePoints.js';
const G = Highcharts;
DraggablePoints.compose(G.Chart, G.Series);
export default Highcharts;
