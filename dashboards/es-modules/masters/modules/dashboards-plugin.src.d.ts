/**
 * @license Highcharts Dashboards v@product.version@ (@product.date@)
 * @module dashboards/modules/dashboards-plugin
 * @requires dashboards
 *
 * (c) 2009-2023 Highsoft AS
 *
 * License: www.highcharts.com/license
 * */
import type GlobalsLike from '../../Core/GlobalsLike';
import DataGridPlugin from '../../Dashboards/Plugins/DataGridPlugin.js';
import HighchartsPlugin from '../../Dashboards/Plugins/HighchartsPlugin.js';
declare global {
    interface Dashboards {
        DataGridPlugin: typeof DataGridPlugin;
        HighchartsPlugin: typeof HighchartsPlugin;
    }
    interface Window {
        Highcharts?: GlobalsLike;
    }
}
declare const G: Dashboards;
export default G;
