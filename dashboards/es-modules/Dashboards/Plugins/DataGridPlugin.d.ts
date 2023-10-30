import type DataGrid from '../../DataGrid/DataGrid';
import type PluginHandler from '../PluginHandler';
import DataGridComponent from './DataGridComponent.js';
declare module '../Components/ComponentType' {
    interface ComponentTypeRegistry {
        DataGrid: typeof DataGridComponent;
    }
}
/**
 * Connects DataGrid with the Dashboard plugin.
 *
 * @param {Dashboards.DataGrid} dataGrid DataGrid core to connect.
 */
declare function connectDataGrid(DataGridClass: typeof DataGrid): void;
declare const DataGridCustom: {
    connectDataGrid: typeof connectDataGrid;
};
declare const DataGridPlugin: PluginHandler.DashboardsPlugin<typeof DataGridCustom>;
export default DataGridPlugin;
