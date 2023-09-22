import type Cell from '../Layout/Cell';
import type CSSObject from '../../Core/Renderer/CSSObject';
import type { Chart, Options, Highcharts as H } from '../Plugins/HighchartsTypes';
import type TextOptions from './TextOptions';
import type Types from '../../Shared/Types';
import Component from './Component.js';
/**
 *
 * Class that represents a KPI component.
 *
 */
declare class KPIComponent extends Component {
    static syncHandlers: import("./Sync/Sync").default.OptionsRecord;
    /**
     * Creates component from JSON.
     *
     * @param json
     * Set of component options, used for creating the KPI component.
     *
     * @param cell
     * Instance of cell, where component is attached.
     *
     * @returns
     * KPI component based on config from JSON.
     *
     * @internal
     */
    static fromJSON(json: KPIComponent.ClassJSON, cell: Cell): KPIComponent;
    /** @internal */
    static charter?: H;
    /**
     * Default options of the KPI component.
     */
    static defaultOptions: Partial<Component.ComponentOptions> & {
        type: string;
        className: string;
        minFontSize: number;
        syncHandlers: import("./Sync/Sync").default.OptionsRecord;
        thresholdColors: string[];
        editableOptions: import("./EditableOptions").default.Options[];
    };
    /**
     * Default options of the KPI component.
     */
    static defaultChartOptions: Types.DeepPartial<Options>;
    /**
     * KPI component's options.
     */
    options: KPIComponent.ComponentOptions;
    /**
     * HTML element where the value is created.
     *
     * @internal
     */
    value: HTMLElement;
    /**
     * The HTML element where the subtitle is created.
     */
    subtitle: HTMLElement;
    /**
     * HTML element where the chart is created.
     */
    chartContainer?: HTMLElement;
    /**
     * Reference to the chart.
     */
    chart?: Chart;
    /**
     * Reference to sync component that allows to sync.
     *
     * @internal
     */
    sync: Component['sync'];
    /**
     * Previous value of KPI.
     *
     * @internal
     */
    private prevValue?;
    /**
     * Creates a KPI component in the cell.
     *
     * @param cell
     * Instance of cell, where component is attached.
     *
     * @param options
     * The options for the component.
     */
    constructor(cell: Cell, options: Partial<KPIComponent.ComponentOptions>);
    /** @internal */
    load(): Promise<this>;
    resize(width?: number | string | null, height?: number | string | null): this;
    render(): this;
    /**
     * Internal method for handling option updates.
     *
     * @private
     */
    private setOptions;
    /**
     * Handles updating via options.
     * @param options
     * The options to apply.
     */
    update(options: Partial<KPIComponent.ComponentOptions>, shouldRerender?: boolean): Promise<void>;
    /**
     * @internal
     */
    onTableChanged(): void;
    /**
     * Gets the default value that should be displayed in the KPI.
     *
     * @returns
     * The value that should be displayed in the KPI.
     */
    private getValue;
    /**
     * Sets the value that should be displayed in the KPI.
     * @param value
     * The value to display in the KPI.
     */
    setValue(value?: number | string | undefined): void;
    /**
     * Handles updating elements via options
     *
     * @internal
     */
    private updateElements;
    /**
     * Gets KPI subtitle text.
     *
     * @returns
     * The subtitle's text.
     *
     * @internal
     */
    private getSubtitle;
    /**
     * Gets CSS class name of the KPI subtitle.
     *
     * @returns
     * The name of class.
     *
     * @internal
     */
    private getSubtitleClassName;
    /**
     * Applies title's color according to the threshold.
     *
     * @returns
     * Hex of color.
     *
     * @internal
     */
    private getValueColor;
    /**
     * Converts the class instance to a class JSON.
     *
     * @returns
     * Class JSON of this Component instance.
     *
     * @internal
     */
    toJSON(): KPIComponent.ClassJSON;
    /**
     * Get the KPI component's options.
     * @returns
     * The JSON of KPI component's options.
     *
     * @internal
     *
     */
    getOptions(): Partial<KPIComponent.ComponentOptions>;
}
declare namespace KPIComponent {
    /** @internal */
    type ComponentType = KPIComponent;
    /** @internal */
    interface ClassJSON extends Component.JSON {
        options: ComponentJSONOptions;
    }
    /** @internal */
    interface ComponentJSONOptions extends Component.ComponentOptionsJSON {
        title?: string;
        chartOptions?: string;
        threshold?: number | Array<number>;
        thresholdColors?: Array<string>;
        type: 'KPI';
        value?: number | string;
        subtitle?: string;
        valueFormat?: string;
    }
    interface ComponentOptions extends Component.ComponentOptions {
        columnName: string;
        /**
         * A full set of chart options applied into KPI chart that is displayed
         * below the value.
         *
         * [Highcharts API](https://api.highcharts.com/highcharts/)
         */
        chartOptions?: Options;
        style?: CSSObject;
        /**
         * The threshold declares the value when color is applied
         * (according to the `thresholdColors`).
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/kpi-component/threshold/ | Set a threshold}
         *
         */
        threshold?: number | Array<number>;
        /**
         * Array of two colors strings that are applied when threshold is
         * achieved.
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/kpi-component/threshold/ | Threshold colors}
         *
         */
        thresholdColors?: Array<string>;
        type: 'KPI';
        /**
         * The value that is displayed in KPI component.
         */
        value?: number | string;
        /**
         * The minimal value of the font size, that KPI component should have.
         */
        minFontSize: number;
        /**
         * The KPI's component subtitle. This can be used both to display
         * a subtitle below the main title.
         */
        subtitle?: string | SubtitleOptions;
        /**
         * A format string for the value text.
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/kpi-component/value-format/ | Add a value format}
         *
         */
        valueFormat?: string;
        /**
         * Callback function to format the text of the value from scratch.
         */
        valueFormatter?: ValueFormatterCallbackFunction;
    }
    /** @internal */
    interface SubtitleOptions extends TextOptions {
        type?: SubtitleType;
    }
    /** @internal */
    type SubtitleType = 'text' | 'diff' | 'diffpercent';
    /** @internal */
    interface ValueFormatterCallbackFunction {
        (this: KPIComponent, value: (number | string)): string;
    }
}
declare module '../../Dashboards/Components/ComponentType' {
    interface ComponentTypeRegistry {
        KPI: typeof KPIComponent;
    }
}
export default KPIComponent;
