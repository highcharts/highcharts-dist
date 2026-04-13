/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import { extend, merge, pick } from '../../Shared/Utilities.js';
/* *
 *
 *  Namespace
 *
 * */
var LegendSymbol;
(function (LegendSymbol) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Draw a line, a point marker and an area in the legend.
     *
     * @function Highcharts.LegendSymbolMixin.areaMarker
     *
     * @param {Highcharts.Legend} legend
     * The legend object.
     */
    function areaMarker(legend, item) {
        lineMarker.call(this, legend, item, true);
    }
    LegendSymbol.areaMarker = areaMarker;
    /**
     * Draw a line and a point marker in the legend.
     *
     * @function Highcharts.LegendSymbolMixin.lineMarker
     *
     * @param {Highcharts.Legend} legend
     * The legend object.
     */
    function lineMarker(legend, item, hasArea) {
        const legendItem = this.legendItem = this.legendItem || {}, { chart, options } = this, { baseline = 0, symbolWidth, symbolHeight } = legend, symbol = this.symbol || 'circle', generalRadius = symbolHeight / 2, renderer = chart.renderer, legendItemGroup = legendItem.group, verticalCenter = baseline - Math.round((legend.fontMetrics?.b || symbolHeight) *
            // Render line and marker slightly higher to make room for the
            // area
            (hasArea ? 0.4 : 0.3)), attr = {};
        let legendSymbol, markerOptions = options.marker, lineSizer = 0;
        // Draw the line
        if (!chart.styledMode) {
            attr['stroke-width'] = Math.min(options.lineWidth || 0, 24);
            if (options.dashStyle) {
                attr.dashstyle = options.dashStyle;
            }
            else if (options.linecap !== 'square') {
                attr['stroke-linecap'] = 'round';
            }
        }
        legendItem.line = renderer
            .path()
            .addClass('highcharts-graph')
            .attr(attr)
            .add(legendItemGroup);
        if (hasArea) {
            legendItem.area = renderer
                .path()
                .addClass('highcharts-area')
                .add(legendItemGroup);
        }
        if (attr['stroke-linecap']) {
            lineSizer = Math.min(legendItem.line.strokeWidth(), symbolWidth) / 2;
        }
        if (symbolWidth) {
            const d = [
                ['M', lineSizer, verticalCenter],
                ['L', symbolWidth - lineSizer, verticalCenter]
            ];
            legendItem.line.attr({ d });
            legendItem.area?.attr({
                d: [
                    ...d,
                    ['L', symbolWidth - lineSizer, baseline],
                    ['L', lineSizer, baseline]
                ]
            });
        }
        // Draw the marker
        if (markerOptions && markerOptions.enabled !== false && symbolWidth) {
            // Do not allow the marker to be larger than the symbolHeight
            let radius = Math.min(pick(markerOptions.radius, generalRadius), generalRadius);
            // Restrict symbol markers size
            if (symbol.indexOf('url') === 0) {
                markerOptions = merge(markerOptions, {
                    width: symbolHeight,
                    height: symbolHeight
                });
                radius = 0;
            }
            legendItem.symbol = legendSymbol = renderer
                .symbol(symbol, (symbolWidth / 2) - radius, verticalCenter - radius, 2 * radius, 2 * radius, extend({ context: 'legend' }, markerOptions))
                .addClass('highcharts-point')
                .add(legendItemGroup);
            legendSymbol.isMarker = true;
        }
    }
    LegendSymbol.lineMarker = lineMarker;
})(LegendSymbol || (LegendSymbol = {}));
/* *
 *
 *  Default Export
 *
 * */
export default LegendSymbol;
