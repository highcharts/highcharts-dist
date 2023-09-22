import type Cell from '../Layout/Cell.js';
import AST from '../../Core/Renderer/HTML/AST.js';
import Component from './Component.js';
/**
 *
 * Class that represents a HTML component.
 *
 */
declare class HTMLComponent extends Component {
    /**
     * Default options of the HTML component.
     */
    static defaultOptions: Partial<Component.ComponentOptions> & {
        type: string;
        elements: never[];
    };
    /**
     * Creates component from JSON.
     *
     * @param json
     * Set of component options, used for creating the HTML component.
     *
     * @param cell
     * Instance of cell, where component is attached.
     *
     * @returns
     * HTML component based on config from JSON.
     *
     * @internal
     */
    static fromJSON(json: HTMLComponent.ClassJSON, cell: Cell): HTMLComponent;
    /**
     * Array of HTML elements, declared as string or node.
     */
    private elements;
    /**
     * HTML component's options.
     */
    options: HTMLComponent.HTMLComponentOptions;
    /**
     * Reference to sync component that allows to sync.
     *
     * @internal
     */
    sync: Component['sync'];
    /**
     * Creates a HTML component in the cell.
     *
     * @param options
     * The options for the component.
     */
    constructor(cell: Cell, options: Partial<HTMLComponent.HTMLComponentOptions>);
    /** @internal */
    load(): Promise<this>;
    render(): this;
    resize(width?: number | string | null, height?: number | string | null): this;
    /**
     * Handles updating via options.
     * @param options
     * The options to apply.
     */
    update(options: Partial<HTMLComponent.HTMLComponentOptions>): Promise<void>;
    /**
     * TODO: Could probably use the serialize function moved on
     * the exportdata branch
     *
     * @internal
     */
    private constructTree;
    /**
     * Converts the class instance to a class JSON.
     *
     * @returns
     * Class JSON of this Component instance.
     *
     * @internal
     */
    toJSON(): HTMLComponent.ClassJSON;
    /**
     * Get the HTML component's options.
     * @returns
     * The JSON of HTML component's options.
     *
     * @internal
     *
     */
    getOptions(): Partial<HTMLComponent.HTMLComponentOptions>;
    /**
     * @internal
     */
    onTableChanged(e: Component.EventTypes): void;
}
declare namespace HTMLComponent {
    /** @internal */
    type ComponentType = HTMLComponent;
    interface HTMLComponentOptions extends Component.ComponentOptions {
        /**
         * Array of HTML elements, declared as string or node.
         * ```
         * Example:
         *
         * elements: [{
         *   tagName: 'img',
         *   attributes: {
         *       src: 'http://path.to.image'
         *   }
         * }]
         * ```
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/html-component/single-element/ | HTML component with one image.}
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/html-component/nested-elements/ | HTML component with nested images.}
         *
         */
        elements?: (AST.Node | string)[];
        type: 'HTML';
    }
    /** @internal */
    interface HTMLComponentOptionsJSON extends Component.ComponentOptionsJSON {
        type: 'HTML';
    }
    /** @internal */
    type HTMLComponentEvents = Component.EventTypes | JSONEvent;
    /** @internal */
    type JSONEvent = Component.Event<'toJSON' | 'fromJSON', {
        json: HTMLComponent.ClassJSON;
    }>;
    /** @internal */
    interface ClassJSON extends Component.JSON {
        elements?: string[];
        events?: string[];
        options: HTMLComponentOptionsJSON;
    }
}
declare module './ComponentType' {
    interface ComponentTypeRegistry {
        HTML: typeof HTMLComponent;
    }
}
export default HTMLComponent;
