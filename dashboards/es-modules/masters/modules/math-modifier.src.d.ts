/**
 * @license Highcharts Dashboards Math @product.version@ (@product.date@)
 * @module dashboards/modules/math-modifier
 * @requires dashboards
 *
 * (c) 2009-2023 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
import Formula from '../../Data/Formula/Formula.js';
import '../../Data/Modifiers/MathModifier.js';
declare global {
    interface Dashboards {
        Formula: typeof Formula;
    }
}
declare const G: Dashboards;
export default G;
