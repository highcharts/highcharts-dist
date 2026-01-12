/* *
 *
 *  (c) 2019-2026 Highsoft AS
 *
 *  Boost module: stripped-down renderer for higher performance
 *
 *  License: highcharts.com/license
 *
 *
 * */
'use strict';
/* *
 *
 *  Constants
 *
 * */
/** @internal */
const WGLDrawMode = {
    'area': 'LINES',
    'arearange': 'LINES',
    'areaspline': 'LINES',
    'column': 'LINES',
    'columnrange': 'LINES',
    'bar': 'LINES',
    'line': 'LINE_STRIP',
    'scatter': 'POINTS',
    'heatmap': 'TRIANGLES',
    'treemap': 'TRIANGLES',
    'bubble': 'POINTS'
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default WGLDrawMode;
