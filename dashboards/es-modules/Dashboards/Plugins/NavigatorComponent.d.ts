import type { Chart, Highcharts as H } from './HighchartsTypes';
import type Cell from '../Layout/Cell';
import type { NavigatorComponentOptions } from './NavigatorComponentOptions';
import type Sync from '../Components/Sync/Sync';
import Component from '../Components/Component.js';
/**
 * Setup a component with data navigation.
 */
declare class NavigatorComponent extends Component {
    /** @private */
    static charter: H;
    /**
     * Default options of the Navigator component.
     */
    static defaultOptions: Partial<NavigatorComponentOptions>;
    /**
     * Creates component from JSON.
     *
     * @param json
     * Set of component options, used for creating the Highcharts component.
     *
     * @returns
     * Highcharts component based on config from JSON.
     *
     * @private
     */
    static fromJSON(json: Component.JSON, cell: Cell): NavigatorComponent;
    constructor(cell: Cell, options: NavigatorComponentOptions);
    /**
     * Reference to the navigator chart.
     */
    chart: Chart;
    /**
     * HTML element where the navigator is created.
     */
    chartContainer: HTMLElement;
    /**
     * Options for the navigator component
     */
    options: NavigatorComponentOptions;
    /**
     * Reference to the sync system that allow to sync i.e tooltips.
     * @private
     */
    sync: Sync;
    /** @private */
    private adjustNavigator;
    /**
     * Returns the first column of columnAssignments to use for navigator data.
     * @private
     *
     * @return
     * Navigator column assignment.
     */
    getColumnAssignment(): [string, string];
    /**
     * Gets the component's options.
     * @internal
     */
    getOptions(): Partial<NavigatorComponentOptions>;
    /** @private */
    load(): Promise<this>;
    onTableChanged(): void;
    /** @private */
    private redrawNavigator;
    /** @private */
    render(): this;
    /** @private */
    private renderNavigator;
    /** @private */
    resize(width?: (number | string | null), height?: (number | string | null)): this;
    /**
     * Handles updating via options.
     *
     * @param options
     * The options to apply.
     */
    update(options: Partial<NavigatorComponentOptions>, shouldRerender?: boolean): Promise<void>;
}
export default NavigatorComponent;
