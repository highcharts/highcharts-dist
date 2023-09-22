import type Component from './Components/Component';
import type DataPoolOptions from '../Data/DataPoolOptions';
import type JSON from './JSON';
import Bindings from './Actions/Bindings.js';
import DashboardsAccessibility from './Accessibility/DashboardsAccessibility.js';
import DataCursor from '../Data/DataCursor.js';
import DataCursorHelper from './SerializeHelper/DataCursorHelper.js';
import DataPool from '../Data/DataPool.js';
import EditMode from './EditMode/EditMode.js';
import Fullscreen from './EditMode/Fullscreen.js';
import Globals from './Globals.js';
import Layout from './Layout/Layout.js';
import Serializable from './Serializable.js';
import ComponentType from './Components/ComponentType';
/**
 * Class that represents a dashboard.
 *
 * @example
 * const dashboard = Dashboards.board('container', {
 *      gui: {
 *          layouts: [{
 *              id: 'layout-1',
 *              rows: [{
 *                  cells: [{
 *                      id: 'dashboard-col-0'
 *                  }]
 *              }]
 *          }]
 *      },
 *      components: [{
 *          cell: 'dashboard-col-0',
 *          type: 'Highcharts',
 *          chartOptions: {
 *              series: [{
 *                  data: [1, 2, 3, 4]
 *              }]
 *          }
 *      }]
 * });
 */
declare class Board implements Serializable<Board, Board.JSON> {
    /**
     * Factory function for creating a new dashboard.
     *
     * @param renderTo
     * The DOM element to render to, or its id.
     *
     * @param options
     * The options for the dashboard.
     *
     * @param async
     * Whether to initialize the dashboard asynchronously. When false or
     * undefined, the function returns the dashboard instance.
     */
    static board(renderTo: (string | globalThis.HTMLElement), options: Board.Options, async?: boolean): Board;
    /**
     * Factory function for creating a new dashboard.
     *
     * @param renderTo
     * The DOM element to render to, or its id.
     *
     * @param options
     * The options for the dashboard.
     *
     * @param async
     * Whether to initialize the dashboard asynchronously. When true, the
     * function returns a promise that resolves with the dashboard instance.
     */
    static board(renderTo: (string | globalThis.HTMLElement), options: Board.Options, async: true): Promise<Board>;
    /**
     * Creates a dashboard with components like charts, tables, and HTML
     * elements.
     *
     * @internal
     * @param renderTo
     * The DOM element to render to, or its id.
     *
     * @param options
     * The options for the dashboard.
     */
    protected constructor(renderTo: (string | HTMLElement), options: Board.Options);
    /**
     * The accessibility module for the dashboard.
     * @internal
     * */
    a11y: DashboardsAccessibility;
    /**
     * The container referenced by the `renderTo` option when creating the
     * dashboard.
     * @internal
     * */
    boardWrapper: HTMLElement;
    /**
     * The main container for the dashboard. Created inside the element
     * specified by user when creating the dashboard.
     * */
    container: HTMLElement;
    /**
     * The data cursor instance used for interacting with the data.
     * @internal
     * */
    dataCursor: DataCursor;
    /**
     * The data pool instance with all the connectors.
     * */
    dataPool: DataPool;
    /**
     * The edit mode instance. Used to handle editing the dashboard.
     * @internal
     * */
    editMode?: EditMode;
    /**
     * The fullscreen instance. Controls the fullscreen mode.
     * @internal
     * */
    fullscreen?: Fullscreen;
    /**
     * Flag to determine if the GUI is enabled.
     * @internal
     * */
    guiEnabled: (boolean | undefined);
    /**
     * The unique id of the dashboard, it is generated automatically.
     * */
    readonly id: string;
    /**
     * Index of the board in the global boards array. Allows to access the
     * specific one when having multiple dashboards.
     * */
    readonly index: number;
    /**
     * An array of generated layouts.
     * */
    layouts: Array<Layout>;
    /**
     * The wrapper for the layouts.
     * @internal
     * */
    layoutsWrapper: globalThis.HTMLElement;
    /**
     * An array of mounted components on the dashboard.
     * */
    mountedComponents: Array<Bindings.MountedComponent>;
    /**
     * The options for the dashboard.
     * */
    options: Board.Options;
    /**
     * Reference to ResizeObserver, which allows running 'unobserve'.
     * @internal
     */
    private resizeObserver?;
    /**
     * Init the layouts and components on the dashboard.
     *
     * @internal
     * @param async Whether to initialize the dashboard asynchronously. When
     * false or undefined the function returns the dashboard isntance.
     *  instance.
     *
     * @returns
     * Board instance
     */
    protected init(async?: boolean): Board;
    /**
     * Init the layouts and components on the dashboard, and attaches connectors
     * if they are defined on component level.
     *
     * @internal
     * @param async Whether to initialize the dashboard asynchronously. When
     * true, the function returns a promise that resolves with the dashboard
     *  instance.
     *
     * @returns
     * A promise that resolves with the dashboard instance.
     */
    protected init(async: true): Promise<Board>;
    /**
     * Initializes the events.
     * @internal
     */
    private initEvents;
    /**
     * Initialize the container for the dashboard.
     * @internal
     *
     * @param renderTo
     * The DOM element to render to, or its id.
     */
    private initContainer;
    /**
     * Creates a new layouts and adds it to the dashboard based on the options.
     * @internal
     *
     * @param guiOptions
     * The GUI options for the layout.
     *
     */
    private setLayouts;
    /**
     * Set the layouts from JSON.
     * @internal
     *
     * @param json
     * An array of layout JSON objects.
     *
     */
    private setLayoutsFromJSON;
    /**
     * Set the components from options.
     * @internal
     *
     * @param components
     * An array of component options.
     *
     */
    setComponents(components: Array<Partial<ComponentType['options']>>): Array<Promise<Component | void>>;
    /**
     * Returns the current size of the layout container based on the selected
     * responsive breakpoints.
     * @internal
     *
     * @returns Return current size of the layout container in px.
     */
    getLayoutContainerSize(): string;
    /**
     * Destroy the whole dashboard, its layouts and elements.
     */
    destroy(): void;
    /**
     * Export layouts to the local storage.
     */
    exportLocal(): void;
    /**
     * Import the dashboard's layouts from the local storage.
     *
     * @param id
     * The id of the layout to import.
     *
     * @returns Returns the imported layout.
     */
    importLayoutLocal(id: string): Layout | undefined;
    /**
     * Reflow the dashboard. Hide the toolbars and context pointer. Reflow the
     * layouts and its cells.
     */
    reflow(): void;
    reflowLayout(layout: Layout, cntSize: string): void;
    /**
     * Converts the given JSON to a class instance.
     *
     * @param json
     * JSON to deserialize as a class instance or object.
     *
     * @returns Returns the class instance or object.
     */
    fromJSON(json: Board.JSON): Board;
    /**
     * Converts the class instance to a class JSON.
     *
     * @returns Class JSON of this Dashboard instance.
     */
    toJSON(): Board.JSON;
    /**
     * Convert the current state of board's options into JSON. The function does
     * not support converting functions or events into JSON object.
     *
     * @returns
     * The JSON of boards's options.
     */
    getOptions(): Globals.DeepPartial<Board.Options>;
}
declare namespace Board {
    /**
     * Options to configure the board.
     **/
    interface Options {
        /**
         * Data pool with all of the connectors.
         **/
        dataPool?: DataPoolOptions;
        /**
         * Options for the GUI. Allows to define graphical elements and its
         * layout.
         **/
        gui?: GUIOptions;
        /**
         * Options for the edit mode. Can be used to enable the edit mode and
         * define all things related to it like the context menu.
         **/
        editMode?: EditMode.Options;
        /**
         * List of components to add to the board.
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/components/component-highcharts | Highcharts component}
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/components/component-html | HTML component}
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/components/component-kpi | KPI component}
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/components/custom-component | Custom component}
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/datagrid-component/datagrid-options | Datagrid component}
         *
         **/
        components?: Array<Partial<ComponentType['options']>>;
        /**
         * General options for the components.
         **/
        componentOptions?: Partial<Component.ComponentOptions>;
        /**
         * A list of serialized layouts to add to the board.
         * @internal
         **/
        layoutsJSON?: Array<Layout.JSON>;
        /**
         * Responsive breakpoints for the board - small, medium and large.
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/responsive/responsive-breakpoints/ | Change responsive breakpoints}
         **/
        responsiveBreakpoints?: ResponsiveBreakpoints;
    }
    /**
     * Serialized options to configure the board.
     * @internal
     **/
    interface OptionsJSON extends JSON.Object {
        /**
         * General options for the components in JSON format.
         **/
        componentOptions?: Partial<Component.ComponentOptionsJSON>;
        /**
         * List of components to add to the board in JSON fromat.
         **/
        components?: Array<Component.ComponentOptionsJSON>;
        /**
         * Id of the container to which the board is added.
         **/
        containerId: string;
        /**
         * Data pool with all of the connectors.
         **/
        dataPool?: DataPoolOptions & JSON.Object;
        /**
         * An array of serialized layouts options and their elements to add to
         * the board.
         **/
        layouts: Array<Layout.JSON>;
        /**
         * Whether the GUI is enabled or not.
         **/
        guiEnabled?: boolean;
        /**
         * Responsive breakpoints for the board - small, medium and large.
         **/
        responsiveBreakpoints?: ResponsiveBreakpoints;
    }
    /**
     * Responsive breakpoints for the board - small, medium and large.
     **/
    interface ResponsiveBreakpoints extends JSON.Object {
        /**
         * Value in px to test the dashboard is in small mode.
         **/
        small: number;
        /**
         * Value in px to test the dashboard is in medium mode.
         **/
        medium: number;
        /**
         * Value in px to test the dashboard is in large mode.
         **/
        large: number;
    }
    interface GUIOptions {
        /**
         * Whether the GUI is enabled or not.
         *
         * @default true
         **/
        enabled?: boolean;
        /**
         * General options for the layouts applied to all layouts.
         **/
        layoutOptions?: Partial<Layout.Options>;
        /**
         * Allows to define graphical elements and its layout. The layout is
         * defined by the row and cells. The row is a horizontal container for
         * the cells. The cells are containers for the elements. The layouts
         * can be nested inside the cells.
         **/
        layouts: Array<Layout.Options>;
    }
    /** @internal */
    interface JSON extends Serializable.JSON<'Board'> {
        /**
         * Serialized data cursor of the board.
         **/
        dataCursor: DataCursorHelper.JSON;
        /**
         * Serialized options to configure the board.
         **/
        options: OptionsJSON;
    }
    /**
     * Global dashboard settings.
     * @internal
     *
     */
    const defaultOptions: Board.Options;
    /**
     * @internal
     */
    const componentTypes: import("./Components/ComponentType").ComponentTypeRegistry;
    /**
     * Import layouts from the local storage.
     *
     * @returns Returns the Dashboard instance or undefined.
     */
    function importLocal(): (Board | undefined);
}
export default Board;
