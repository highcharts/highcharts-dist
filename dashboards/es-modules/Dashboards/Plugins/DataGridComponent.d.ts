import type Cell from '../Layout/Cell';
import type DataGrid from '../../DataGrid/DataGrid';
import type BaseDataGridOptions from '../../DataGrid/DataGridOptions';
import Component from '../Components/Component.js';
/**
 * DataGrid component for Highcharts Dashboards.
 * @private
 */
declare class DataGridComponent extends Component {
    /** @private */
    static syncHandlers: import("../Components/Sync/Sync").default.OptionsRecord;
    /** @private */
    static DataGridConstructor?: typeof DataGrid;
    /** @private */
    static defaultOptions: Partial<Component.ComponentOptions> & {
        dataGridClassName: string;
        dataGridID: string;
        dataGridOptions: {};
        editableOptions: {
            name: string;
            propertyPath: string[];
            type: string;
        }[];
        syncHandlers: import("../Components/Sync/Sync").default.OptionsRecord;
        onUpdate: typeof DataGridComponent.onUpdate;
    };
    /**
     * Default update function, if data grid has changed. This functionality can
     * be replaced with the {@link DataGridComponent.DataGridOptions#onUpdate}
     * option.
     *
     * @private
     *
     * @param e
     * Related keyboard event of the change.
     *
     * @param connector
     * Relate store of the change.
     */
    static onUpdate(e: KeyboardEvent, connector: Component.ConnectorTypes): void;
    /** @private */
    static fromJSON(json: DataGridComponent.ClassJSON, cell: Cell): DataGridComponent;
    /** @private */
    dataGrid?: DataGrid;
    /** @private */
    dataGridOptions: Partial<BaseDataGridOptions>;
    /** @private */
    options: DataGridComponent.ComponentOptions;
    /** @private */
    sync: Component['sync'];
    /** @private */
    private connectorListeners;
    constructor(cell: Cell, options: Partial<DataGridComponent.ComponentOptions>);
    onTableChanged(): void;
    /**
     * Disable editing of the columns that are modified by the data modifier.
     * @internal
     *
     * @param connector
     * Attached connector
     */
    private disableEditingModifiedColumns;
    /**
     * Get the column options for the data grid.
     * @internal
     */
    private getColumnOptions;
    /**
     * Triggered on component initialization.
     * @private
     */
    load(): Promise<this>;
    /** @private */
    render(): this;
    /** @private */
    resize(width?: number | null, height?: number | null): void;
    update(options: Partial<DataGridComponent.ComponentOptions>): Promise<void>;
    /** @private */
    private constructDataGrid;
    private setupConnectorUpdate;
    /**
     * Based on the `visibleColumns` option, filter the columns of the table.
     *
     * @internal
     */
    private filterColumns;
    /** @private */
    toJSON(): DataGridComponent.ClassJSON;
    /**
     * Get the DataGrid component's options.
     * @returns
     * The JSON of DataGrid component's options.
     *
     * @internal
     *
     */
    getOptions(): Partial<DataGridComponent.ComponentOptions>;
    /**
     * Destroys the data grid component.
     */
    destroy(): void;
}
declare namespace DataGridComponent {
    /** @private */
    type ComponentType = DataGridComponent;
    /** @private */
    type ChartComponentEvents = JSONEvent | Component.EventTypes;
    /** @private */
    type JSONEvent = Component.Event<'toJSON' | 'fromJSON', {
        json: ClassJSON;
    }>;
    /**
     * Options to control the DataGrid component.
     */
    interface ComponentOptions extends Component.ComponentOptions {
        /**
         * The style class to add to the rendered data grid container.
         */
        dataGridClassName?: string;
        /**
         * The identifier for the rendered data grid container.
         */
        dataGridID?: string;
        /**
         * Callback to use when a change in the data grid occurs.
         */
        onUpdate: typeof DataGridComponent.onUpdate;
        type: 'DataGrid';
        /**
         * Generic options to adjust behavior and styling of the rendered data
         * grid.
         */
        dataGridOptions?: BaseDataGridOptions;
        /**
         * The set of options like `dataGridClassName` and `dataGridID`.
         */
        chartClassName?: string;
        /**
         * The id that is applied to the chart's container.
         */
        chartID?: string;
        /** @private */
        tableAxisMap?: Record<string, string | null>;
        /**
         * If the `visibleColumns` option is not provided, the data grid will
         * calculate and include each column from the data connector.
         * When declared, the data grid will only include the columns that are
         * listed.
         *
         * Alternatively, the column visibility can be controlled by the
         * `dataGridOptions.columns` option.
         * ```
         * Example
         * visibleColumns: ['Food', 'Vitamin A']
         * ```
         */
        visibleColumns?: Array<string>;
    }
    /** @private */
    interface ComponentJSONOptions extends Component.ComponentOptionsJSON {
        /** @private */
        dataGridOptions?: string;
        /** @private */
        chartClassName?: string;
        /** @private */
        chartID?: string;
    }
    /** @private */
    interface ClassJSON extends Component.JSON {
        /** @private */
        options: ComponentJSONOptions;
    }
}
export default DataGridComponent;
