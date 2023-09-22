import type Cell from '../Layout/Cell';
import type Globals from '../Globals';
import Component from './Component.js';
declare class ThresholdComponent extends Component {
    static defaultOptions: Partial<Component.ComponentOptions> & {
        valueName: string;
    };
    static fromJSON(json: ThresholdComponent.ComponentOptions, cell: Cell): ThresholdComponent;
    constructor(cell: Cell, options: Partial<ThresholdComponent.ComponentOptions>);
    options: ThresholdComponent.ComponentOptions;
    component?: Component;
    sync: Component['sync'];
    private undoOptions?;
    /**
     * @internal
     */
    onTableChanged(): void;
    render(): this;
}
declare namespace ThresholdComponent {
    type ComponentType = ThresholdComponent;
    type ComponentConstructor = new (...a: any[]) => Component;
    interface ComponentOptions extends Component.ComponentOptions {
        component: ComponentConstructor;
        options?: Globals.AnyRecord;
        thresholds?: Array<ThresholdOptions>;
        type: 'Threshold';
        value?: number;
        valueName?: string;
    }
    interface ThresholdOptions {
        component?: ComponentConstructor;
        max?: number;
        min?: number;
        options?: Globals.AnyRecord;
    }
    /**
     * Get the current values for a given set of options.
     *
     * @private
     */
    function currentOptions(options: Globals.AnyRecord, curr: Globals.AnyRecord): Globals.AnyRecord;
}
declare module './ComponentType' {
    interface ComponentTypeRegistry {
        Threshold: typeof ThresholdComponent;
    }
}
export default ThresholdComponent;
