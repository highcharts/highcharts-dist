/**
 * @license Highcharts Dashboards v@product.version@ (@product.date@)
 * @module dashboards/datagrid
 * @requires dashboards
 *
 * (c) 2009-2023 Highsoft AS
 *
 * License: www.highcharts.com/license
 */
import Globals from '../DataGrid/Globals.js';
import _DataGrid from '../DataGrid/DataGrid.js';
declare global {
    interface DataGrid {
        win: typeof Globals.win;
        DataGrid: typeof _DataGrid;
    }
    interface Window {
        DataGrid: DataGrid;
    }
    let DataGrid: DataGrid;
}
declare const G: DataGrid;
export default G;
