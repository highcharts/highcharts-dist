/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Øystein Moseng
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *  Accessible high-contrast theme for Highcharts. Considers colorblindness and
 *  monochrome rendering.
 *
 *
 * */
'use strict';
import D from '../../Core/Defaults.js';
const { setOptions } = D;
/* *
 *
 *  Theme
 *
 * */
var AvocadoTheme;
(function (AvocadoTheme) {
    /* *
     *
     *  Constants
     *
     * */
    AvocadoTheme.options = {
        colors: ['#F3E796', '#95C471', '#35729E', '#251735'],
        colorAxis: {
            maxColor: '#05426E',
            minColor: '#F3E796'
        },
        plotOptions: {
            map: {
                nullColor: '#FCFEFE'
            }
        },
        navigator: {
            maskFill: 'rgba(170, 205, 170, 0.5)',
            series: {
                color: '#95C471',
                lineColor: '#35729E'
            }
        }
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Apply the theme.
     */
    function apply() {
        setOptions(AvocadoTheme.options);
    }
    AvocadoTheme.apply = apply;
})(AvocadoTheme || (AvocadoTheme = {}));
/* *
 *
 *  Default Export
 *
 * */
export default AvocadoTheme;
