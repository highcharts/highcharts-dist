/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "./globals";
import * as _Highcharts from "./highcharts";
declare module "./highcharts" {
    interface AlignObject {
        align?: AlignValue;
        alignByTranslate?: boolean;
        verticalAlign?: VerticalAlignValue;
        x?: number;
        y?: number;
    }
    interface AnimationOptionsObject {
        complete?: Function;
        defer?: number;
        duration?: number;
        easing?: (string|Function);
        step?: Function;
    }
    interface ASTNode {
        attributes?: SVGAttributes;
        children?: Array<ASTNode>;
        tagName?: string;
        textContent?: string;
    }
    interface AxisLabelsFormatterContextObject {
        axis: Axis;
        chart: Chart;
        dateTimeLabelFormat?: string;
        isFirst: boolean;
        isLast: boolean;
        pos: number;
        text?: string;
        tick: Tick;
        value: (number|string);
    }
    interface AxisPlotLinePathOptionsObject {
        acrossPanes?: boolean;
        force?: (boolean|string);
        lineWidth?: number;
        old?: boolean;
        reverse?: boolean;
        translatedValue?: number;
        value?: number;
    }
    interface AxisPointBreakEventObject {
        brk: Dictionary<number>;
        point: Point;
        preventDefault: Function;
        target: SVGElement;
        type: ("pointBreak"|"pointInBreak");
    }
    interface AxisSetExtremesEventObject extends ExtremesObject {
        preventDefault: Function;
        target: SVGElement;
        trigger: (string|AxisExtremesTriggerValue);
        type: "setExtremes";
    }
    interface AxisTickPositionsArray extends Array<number> {
        info?: TimeTicksInfoObject;
    }
    interface BBoxObject extends PositionObject {
        height: number;
        width: number;
        x: number;
        y: number;
    }
    interface BorderRadiusOptionsObject {
        radius: (number|string);
        scope: ("individual"|"point"|"stack");
        where: ("all"|"end");
    }
    interface CaptionObject extends SVGElement {
        /**
         * Modify options for the caption.
         *
         * @param captionOptions
         *        Options to modify.
         *
         * @param redraw
         *        Whether to redraw the chart after the caption is altered. If
         *        doing more operations on the chart, it is a good idea to set
         *        redraw to false and call Chart#redraw after.
         */
        update(captionOptions: CaptionOptions, redraw?: boolean): void;
    }
    interface ChartAddSeriesEventObject {
        options: SeriesOptionsType;
        preventDefault: Function;
        target: Chart;
        type: "addSeries";
    }
    interface ChartClickEventAxisObject {
        axis: Axis;
        value: number;
    }
    interface ChartClickEventObject extends PointerEventObject {
        xAxis: Array<ChartClickEventAxisObject>;
        yAxis: Array<ChartClickEventAxisObject>;
        zAxis?: Array<ChartClickEventAxisObject>;
    }
    interface ChartIsInsideOptionsObject {
        axis?: Axis;
        ignoreX?: boolean;
        ignoreY?: boolean;
        inverted?: boolean;
        paneCoordinates?: boolean;
        series?: Series;
        visiblePlotOnly?: boolean;
    }
    interface ChartPositionObject {
        left: number;
        scaleX: number;
        scaleY: number;
        top: number;
    }
    interface Class<T> extends Function {
        /**
         * Class constructor.
         *
         * @param args
         *        Constructor arguments.
         *
         * @return Class instance.
         */
        new(...args: Array<any>): T;
    }
    interface CSSObject {
        [key: string]: (boolean|number|string|undefined);
        background?: string;
        backgroundColor?: ColorString;
        border?: string;
        borderRadius?: string;
        color?: ('contrast'|ColorString);
        cursor?: CursorValue;
        fontFamily?: string;
        fontSize?: (number|string);
        fontWeight?: string;
        height?: number;
        lineClamp?: number;
        lineWidth?: number;
        opacity?: number;
        padding?: string;
        pointerEvents?: string;
        position?: string;
        textAlign?: string;
        textDecoration?: string;
        textOutline?: string;
        textOverflow?: string;
        top?: string;
        transition?: string;
        whiteSpace?: string;
        width?: number;
    }
    interface DataMappingOptionsObject {}
    interface DataTableOptionsObject {
        columns?: DataTableColumnCollection;
        id?: string;
    }
    interface DateTimeFormatOptions {
        day?: ('2-digit'|'numeric');
        era?: ('long'|'narrow'|'short');
        formatMatcher?: string;
        fractionalSecondDigits?: (1|2|3);
        hour?: ('2-digit'|'numeric');
        hour12?: ('always'|'auto'|'never');
        localeMatcher?: string;
        minute?: ('2-digit'|'numeric');
        month?: ('2-digit'|'long'|'narrow'|'numeric'|'short');
        prefix?: 'string';
        second?: ('2-digit'|'numeric');
        suffix?: 'string';
        timeZone?: string;
        timeZoneName?: ('long'|'short');
        weekday?: ('long'|'narrow'|'short');
        year?: ('2-digit'|'numeric');
    }
    interface Dictionary<T> {
        [key: string]: T;
    }
    interface EventOptionsObject {
        order: number;
        passive: boolean;
    }
    interface ExtremesObject {
        dataMax: number;
        dataMin: number;
        max: number;
        min: number;
        userMax?: number;
        userMin?: number;
    }
    interface FontMetricsObject {
        b: number;
        f: number;
        h: number;
    }
    interface GradientColorObject {
        linearGradient?: LinearGradientColorObject;
        radialGradient?: RadialGradientColorObject;
        stops: Array<GradientColorStopObject>;
    }
    interface GradientColorStopObject {
        0: number;
        1: ColorString;
        color?: Color;
    }
    interface LegendItemClickEventObject {
        browserEvent: PointerEvent;
        legendItem: (LegendItemObject|Point|Series);
        preventDefault: Function;
        target: Legend;
        type: "itemClick";
    }
    interface LegendItemObject {
        item?: SVGElement;
        label?: SVGElement;
        line?: SVGElement;
        symbol?: SVGElement;
    }
    interface LinearGradientColorObject {
        x1: number;
        x2: number;
        y1: number;
        y2: number;
    }
    interface OffsetObject {
        left: number;
        top: number;
    }
    interface PointClickEventObject extends PointerEventObject {
        point: Point;
    }
    interface PointerAxisCoordinateObject {
        axis: Axis;
        value: number;
    }
    interface PointerAxisCoordinatesObject {
        xAxis: Array<PointerAxisCoordinateObject>;
        yAxis: Array<PointerAxisCoordinateObject>;
    }
    interface PointerCoordinatesObject {
        chartX: number;
        chartY: number;
    }
    interface PointerEventObject extends PointerEvent {
        chartX: number;
        chartY: number;
    }
    interface PointEventsOptionsObject {
        /**
         * Fires when the point is selected either programmatically or following
         * a click on the point. One parameter, `event`, is passed to the
         * function. Returning `false` cancels the operation.
         */
        select?: PointSelectCallbackFunction;
        /**
         * Fires when the point is unselected either programmatically or
         * following a click on the point. One parameter, `event`, is passed to
         * the function. Returning `false` cancels the operation.
         */
        unselect?: PointUnselectCallbackFunction;
    }
    interface PointInteractionEventObject extends Event {
        accumulate: boolean;
    }
    interface PointLegendItemClickEventObject {
        browserEvent: PointerEvent;
        defaultPrevented?: boolean;
        preventDefault: Function;
        target: Point;
        type: "legendItemClick";
    }
    interface PointOptionsObject {}
    interface PointUpdateEventObject extends Event {
        options: PointOptionsType;
    }
    interface PositionObject {
        x: number;
        y: number;
    }
    interface RadialGradientColorObject {
        cx: number;
        cy: number;
        r: number;
    }
    interface RangeObject {
        max: number;
        min: number;
    }
    interface RectangleObject {
        height: number;
        width: number;
        x: number;
        y: number;
    }
    interface RGBA extends Array<number> {
        length: 4;
    }
    interface SelectDataObject {
        axis: Axis;
        max: number;
        min: number;
    }
    interface SelectEventObject {
        originalEvent: Event;
        preventDefault: Function;
        resetSelection?: boolean;
        xAxis: Array<SelectDataObject>;
        yAxis: Array<SelectDataObject>;
    }
    interface SeriesAfterAnimateEventObject {
        target: Series;
        type: "afterAnimate";
    }
    interface SeriesCheckboxClickEventObject {
        checked: boolean;
        item: Series;
        target: Series;
        type: "checkboxClick";
    }
    interface SeriesClickEventObject extends Event {
        point: Point;
    }
    interface SeriesLegendItemClickEventObject {
        browserEvent: PointerEvent;
        defaultPrevented?: boolean;
        preventDefault: Function;
        target: Series;
        type: "legendItemClick";
    }
    interface SeriesPlotBoxObject {
        scaleX: number;
        scaleY: number;
        translateX: number;
        translateY: number;
    }
    interface ShadowOptionsObject {
        color?: ColorString;
        offsetX?: number;
        offsetY?: number;
        opacity?: number;
        width?: number;
    }
    interface SizeObject {
        height: number;
        width: number;
    }
    interface StackItemObject {
        alignOptions: AlignObject;
        axis: Axis;
        cumulative: number;
        isNegative: boolean;
        label: SVGElement;
        options: YAxisStackLabelsOptions;
        total: number;
        x: number;
    }
    interface SubtitleObject extends SVGElement {
        /**
         * Modify options for the subtitle.
         *
         * @param subtitleOptions
         *        Options to modify.
         *
         * @param redraw
         *        Whether to redraw the chart after the subtitle is altered. If
         *        doing more operations on the chart, it is a good idea to set
         *        redraw to false and call Chart#redraw after.
         */
        update(subtitleOptions: SubtitleOptions, redraw?: boolean): void;
    }
    interface SVGAttributes {
        [key: string]: any;
        d?: (string|SVGPathArray);
        dx?: number;
        dy?: number;
        fill?: ColorType;
        inverted?: boolean;
        matrix?: Array<number>;
        rotation?: number;
        rotationOriginX?: number;
        rotationOriginY?: number;
        scaleX?: number;
        scaleY?: number;
        stroke?: ColorType;
        style?: (string|CSSObject);
        translateX?: number;
        translateY?: number;
        zIndex?: number;
    }
    interface SymbolDictionary {
        [key: string]: (Function|undefined);
        arc?: Function;
        callout?: Function;
        circle?: Function;
        diamond?: Function;
        square?: Function;
        triangle?: Function;
    }
    interface SymbolOptions {}
    interface SymbolOptionsObject {
        anchorX?: number;
        anchorY?: number;
        end?: number;
        open?: boolean;
        r?: number;
        start?: number;
    }
    interface TimeNormalizedObject {
        count?: number;
        unitRange: number;
    }
    interface TimeTicksInfoObject extends TimeNormalizedObject {
        boundaryTicks: Array<string>;
        totalRange: number;
    }
    interface TitleObject extends SVGElement {
        /**
         * Modify options for the title.
         *
         * @param titleOptions
         *        Options to modify.
         *
         * @param redraw
         *        Whether to redraw the chart after the title is altered. If
         *        doing more operations on the chart, it is a good idea to set
         *        redraw to false and call Chart#redraw after.
         */
        update(titleOptions: TitleOptions, redraw?: boolean): void;
    }
    interface TooltipPositionerPointObject extends Point {
        isHeader: boolean;
        plotX: number;
        plotY: number;
    }
    /**
     * The Loader class for autoloading of Highcharts modules. This class is
     * part of the `highcharts-autoload.js` bundle, and is used for dynamically
     * loading Highcharts modules on demand based on the chart configuration
     * options.
     *
     * The Loader analyzes the chart options for features that require
     * additional modules. The Loader will load the required modules
     * asynchronously before instantiating the chart.
     *
     * For styled mode and Stock Tools, the Loader also adds the required CSS
     * files. An exception is when using ESM modules, where you need to define
     * the CSS in link tags.
     *
     * No extra configuration is required to use the Loader, the static class
     * methods below are for advanced use cases.
     */
    class Loader {
        /**
         * Given a Highcharts configuration object, this function will return an
         * array of the required script files. Can be used for preloading files
         * before instanciating the chart.
         *
         * @param options
         *        The Highcharts configuration object.
         *
         * @return An array of file names.
         */
        getFiles(options: Partial<Options>): Array<string>;
        /**
         * Set the root URL and extension for script files. By default, the root
         * and extension are guessed from the script tag that loads
         * `highcharts-autoload.js`, or from the current script if running in
         * ESM mode.
         *
         * @param userRoot
         *        The root URL for script files. When loading from
         *        `code.highcharts.com`, this defaults to
         *        `https://code.highcharts.com/`.
         *
         * @param userExtension
         *        The extension for script files. This defaults to `.js` when
         *        invoked from `highcharts-autoload.js`, and `.src.js` when
         *        invoked from `highcharts-autoload.src.js`.
         */
        setRoot(userRoot?: string, userExtension?: string): void;
        /**
         * Add script files to the list of modules to load. This is useful for
         * dynamically loading modules that have no reference in the options
         * structure.
         *
         * @param files
         *        An array of files to add.
         */
        use(files: Array<string>): void;
    }
    let charts: Array<(Chart|undefined)>;
    let dateFormats: Record<string, TimeFormatCallbackFunction>;
    let theme: Options;
    /**
     * Add an event listener.
     *
     * @param el
     *        The element or object to add a listener to. It can be a
     *        HTMLDOMElement, an SVGElement or any other object.
     *
     * @param type
     *        The event type.
     *
     * @param fn
     *        The function callback to execute when the event is fired.
     *
     * @param options
     *        Options for adding the event.
     *
     * @return A callback function to remove the added event.
     */
    function addEvent<T>(el: (T|Class<T>), type: string, fn: (Function|EventCallbackFunction<T>), options?: EventOptionsObject): Function;
    /**
     * Get the animation in object form, where a disabled animation is always
     * returned as `{ duration: 0 }`.
     *
     * @param animation
     *        An animation setting. Can be an object with duration, complete and
     *        easing properties, or a boolean to enable or disable.
     *
     * @return An object with at least a duration property.
     */
    function animObject(animation?: (boolean|AnimationOptionsObject)): AnimationOptionsObject;
    /**
     * Non-recursive method to find the lowest member of an array. `Math.max`
     * raises a maximum call stack size exceeded error in Chrome when trying to
     * apply more than 150.000 points. This method is slightly slower, but safe.
     *
     * @param data
     *        An array of numbers.
     *
     * @return The highest number.
     */
    function arrayMax(data: Array<any>): number;
    /**
     * Non-recursive method to find the lowest member of an array. `Math.min`
     * raises a maximum call stack size exceeded error in Chrome when trying to
     * apply more than 150.000 points. This method is slightly slower, but safe.
     *
     * @param data
     *        An array of numbers.
     *
     * @return The lowest number.
     */
    function arrayMin(data: Array<any>): number;
    /**
     * Set or get an attribute or an object of attributes.
     *
     * To use as a setter, pass a key and a value, or let the second argument be
     * a collection of keys and values. When using a collection, passing a value
     * of `null` or `undefined` will remove the attribute.
     *
     * To use as a getter, pass only a string as the second argument.
     *
     * @param elem
     *        The DOM element to receive the attribute(s).
     *
     * @param keyOrAttribs
     *        The property or an object of key-value pairs.
     *
     * @param value
     *        The value if a single property is set.
     *
     * @return When used as a getter, return the value.
     */
    function attr(elem: (HTMLDOMElement|SVGDOMElement), keyOrAttribs?: (string|HTMLAttributes|SVGAttributes), value?: (number|string)): (string|null|undefined);
    /**
     * Factory function for basic charts.
     *
     * @param options
     *        The chart options structure.
     *
     * @param callback
     *        Function to run when the chart has loaded and all external images
     *        are loaded. Defining a chart.events.load handler is equivalent.
     *        Set to `true` to return a promise that resolves when the chart is
     *        ready.
     *
     * @return Returns the Chart object.
     */
    function chart(options: Options, callback?: (true|ChartCallbackFunction)): Chart;
    /**
     * Factory function for basic charts.
     *
     * @param renderTo
     *        The DOM element to render to, or its id.
     *
     * @param options
     *        The chart options structure.
     *
     * @param callback
     *        Function to run when the chart has loaded and all external images
     *        are loaded. Defining a chart.events.load handler is equivalent.
     *        Set to `true` to return a promise that resolves when the chart is
     *        ready.
     *
     * @return Returns the Chart object.
     */
    function chart(renderTo: (string|HTMLDOMElement), options: Options, callback?: (true|ChartCallbackFunction)): Chart;
    /**
     * Creates a color instance out of a color string.
     *
     * @param input
     *        The input color.
     *
     * @return Color instance
     */
    function color(input: ColorType): Color;
    /**
     * Fix JS round off float errors.
     *
     * @param num
     *        A float number to fix.
     *
     * @param prec
     *        The precision.
     *
     * @return The corrected float number.
     */
    function correctFloat(num: number, prec?: number): number;
    /**
     * Utility function to create an HTML element with attributes and styles.
     *
     * @param tag
     *        The HTML tag.
     *
     * @param attribs
     *        Attributes as an object of key-value pairs.
     *
     * @param styles
     *        Styles as an object of key-value pairs.
     *
     * @param parent
     *        The parent HTML object.
     *
     * @param nopad
     *        If true, remove all padding, border and margin.
     *
     * @return The created DOM element.
     */
    function createElement(tag: string, attribs?: HTMLAttributes, styles?: CSSObject, parent?: HTMLDOMElement, nopad?: boolean): HTMLDOMElement;
    /**
     * Formats a JavaScript date timestamp (milliseconds since Jan 1st 1970)
     * into a human readable date string. The format is a subset of the formats
     * for PHP's strftime function. Additional formats can be given in the
     * Highcharts.dateFormats hook.
     *
     * Since v6.0.5, all internal dates are formatted through the
     * Highcharts.Chart#time instance to respect chart-level time settings. The
     * `Highcharts.dateFormat` function only reflects global time settings set
     * with `setOptions`.
     *
     * Supported format keys:
     *
     * - `%a`: Short weekday, like 'Mon'
     *
     * - `%A`: Long weekday, like 'Monday'
     *
     * - `%d`: Two digit day of the month, 01 to 31
     *
     * - `%e`: Day of the month, 1 through 31
     *
     * - `%w`: Day of the week, 0 through 6
     *
     * - `%b`: Short month, like 'Jan'
     *
     * - `%B`: Long month, like 'January'
     *
     * - `%m`: Two digit month number, 01 through 12
     *
     * - `%y`: Two digits year, like 09 for 2009
     *
     * - `%Y`: Four digits year, like 2009
     *
     * - `%H`: Two digits hours in 24h format, 00 through 23
     *
     * - `%k`: Hours in 24h format, 0 through 23
     *
     * - `%I`: Two digits hours in 12h format, 00 through 11
     *
     * - `%l`: Hours in 12h format, 1 through 12
     *
     * - `%M`: Two digits minutes, 00 through 59
     *
     * - `%p`: Upper case AM or PM
     *
     * - `%P`: Lower case AM or PM
     *
     * - `%S`: Two digits seconds, 00 through 59
     *
     * - `%L`: Milliseconds (naming from Ruby)
     *
     * @param format
     *        The desired format where various time representations are prefixed
     *        with `%`.
     *
     * @param timestamp
     *        The JavaScript timestamp.
     *
     * @param upperCaseFirst
     *        Upper case first letter in the return.
     *
     * @return The formatted date.
     */
    function dateFormat(format: string, timestamp: number, upperCaseFirst?: boolean): string;
    /**
     * Check if an object is null or undefined.
     *
     * @param obj
     *        The object to check.
     *
     * @return False if the object is null or undefined, otherwise true.
     */
    function defined(obj: any): boolean;
    /**
     * Utility method that destroys any SVGElement instances that are properties
     * on the given object. It loops all properties and invokes destroy if there
     * is a destroy method. The property is then delete.
     *
     * @param obj
     *        The object to destroy properties on.
     *
     * @param except
     *        Exception, do not destroy this property, only delete it.
     */
    function destroyObjectProperties(obj: any, except?: any): void;
    /**
     * Discard a HTML element
     *
     * @param element
     *        The HTML node to discard.
     */
    function discardElement(element: HTMLDOMElement): void;
    /**
     * Remove the last occurrence of an item from an array.
     *
     * @param arr
     *        The array.
     *
     * @param item
     *        The item to remove.
     */
    function erase(arr: Array<any>, item: any): void;
    /**
     * Provide error messages for debugging, with links to online explanation.
     * This function can be overridden to provide custom error handling.
     *
     * @param code
     *        The error code. See errors.xml for available codes. If it is a
     *        string, the error message is printed directly in the console.
     *
     * @param stop
     *        Whether to throw an error or just log a warning in the console.
     *
     * @param chart
     *        Reference to the chart that causes the error. Used in 'debugger'
     *        module to display errors directly on the chart. Important note:
     *        This argument is undefined for errors that lack access to the
     *        Chart instance. In such case, the error will be displayed on the
     *        last created chart.
     *
     * @param params
     *        Additional parameters for the generated message.
     */
    function error(code: (number|string), stop?: boolean, chart?: Chart, params?: Dictionary<string>): void;
    /**
     * Utility function to extend an object with the members of another.
     *
     * @param a
     *        The object to be extended.
     *
     * @param b
     *        The object to add to the first one.
     *
     * @return Object a, the original object.
     */
    function extend<T>(a: (T|undefined), b: Partial<T>): T;
    /**
     * Extend a prototyped class by new members.
     *
     * @param parent
     *        The parent prototype to inherit.
     *
     * @param members
     *        A collection of prototype members to add or override compared to
     *        the parent prototype.
     *
     * @return A new prototype.
     */
    function extendClass<T>(parent: Class<T>, members: Dictionary<any>): Class<T>;
    /**
     * Return the value of the first element in the array that satisfies the
     * provided testing function.
     *
     * @param arr
     *        The array to test.
     *
     * @param callback
     *        The callback function. The function receives the item as the first
     *        argument. Return `true` if this item satisfies the condition.
     *
     * @return The value of the element.
     */
    function find<T>(arr: Array<T>, callback: Function): (T|undefined);
    /**
     * Fire an event that was registered with Highcharts#addEvent.
     *
     * @param el
     *        The object to fire the event on. It can be a HTMLDOMElement, an
     *        SVGElement or any other object.
     *
     * @param type
     *        The type of event.
     *
     * @param eventArguments
     *        Custom event arguments that are passed on as an argument to the
     *        event handler.
     *
     * @param defaultFunction
     *        The default function to execute if the other listeners haven't
     *        returned false.
     */
    function fireEvent<T>(el: T, type: string, eventArguments?: (Event|Dictionary<any>), defaultFunction?: (Function|EventCallbackFunction<T>)): void;
    /**
     * Format a string according to a subset of the rules of Python's
     * String.format method.
     *
     * @param str
     *        The string to format.
     *
     * @param ctx
     *        The context, a collection of key-value pairs where each key is
     *        replaced by its value.
     *
     * @param owner
     *        A `Chart` or `Grid` instance used to get numberFormatter and time.
     *
     * @return The formatted string.
     */
    function format(str: string, ctx: Record<string, any>, owner?: Chart): string;
    /**
     * Get the defer as a number value from series animation options.
     *
     * @param chart
     *        The chart instance.
     *
     * @param animation
     *        An animation setting. Can be an object with duration, complete and
     *        easing properties, or a boolean to enable or disable.
     *
     * @param series
     *        Series to defer animation.
     *
     * @return The numeric value.
     */
    function getDeferredAnimation(chart: Chart, animation: (boolean|AnimationOptionsObject), series?: Series): number;
    /**
     * Get the magnitude of a number.
     *
     * @param num
     *        The number.
     *
     * @return The magnitude, where 1-9 are magnitude 1, 10-99 magnitude 2 etc.
     */
    function getMagnitude(num: number): number;
    /**
     * Get the updated default options. Until 3.0.7, merely exposing
     * defaultOptions for outside modules wasn't enough because the setOptions
     * method created a new object.
     *
     * @return Default options.
     */
    function getOptions(): Options;
    /**
     * Get the computed CSS value for given element and property, only for
     * numerical properties. For width and height, the dimension of the inner
     * box (excluding padding) is returned. Used for fitting the chart within
     * the container.
     *
     * @param el
     *        An HTML element.
     *
     * @param prop
     *        The property name.
     *
     * @param toInt
     *        Parse to integer.
     *
     * @return The style value.
     */
    function getStyle(el: HTMLDOMElement, prop: string, toInt?: boolean): (number|string|undefined);
    /**
     * Utility function to check if an item is an array.
     *
     * @param obj
     *        The item to check.
     *
     * @return True if the argument is an array.
     */
    function isArray(obj: any): boolean;
    /**
     * Utility function to check if an Object is a class.
     *
     * @param obj
     *        The item to check.
     *
     * @return True if the argument is a class.
     */
    function isClass(obj: (object|undefined)): boolean;
    /**
     * Utility function to check if an Object is a HTML Element.
     *
     * @param obj
     *        The item to check.
     *
     * @return True if the argument is a HTML Element.
     */
    function isDOMElement(obj: any): boolean;
    /**
     * Utility function to check if object is a function.
     *
     * @param obj
     *        The item to check.
     *
     * @return True if the argument is a function.
     */
    function isFunction(obj: any): boolean;
    /**
     * Utility function to check if an item is a number and it is finite (not
     * NaN, Infinity or -Infinity).
     *
     * @param n
     *        The item to check.
     *
     * @return True if the item is a finite number
     */
    function isNumber(n: any): boolean;
    /**
     * Utility function to check if an item is of type object.
     *
     * @param obj
     *        The item to check.
     *
     * @param strict
     *        Also checks that the object is not an array.
     *
     * @return True if the argument is an object.
     */
    function isObject(obj: any, strict?: boolean): boolean;
    /**
     * Utility function to check for string type.
     *
     * @param s
     *        The item to check.
     *
     * @return True if the argument is a string.
     */
    function isString(s: any): boolean;
    /**
     * Utility function to deep merge two or more objects and return a third
     * object. If the first argument is true, the contents of the second object
     * is copied into the first object. The merge function can also be used with
     * a single object argument to create a deep copy of an object.
     *
     * @param extendOrSource
     *        Whether to extend the left-side object, or the first object to
     *        merge as a deep copy.
     *
     * @param sources
     *        Object(s) to merge into the previous one.
     *
     * @return The merged object. If the first argument is true, the return is
     *         the same as the second argument.
     */
    function merge<T>(extendOrSource: (true|T), ...sources: Array<(object|undefined)>): T;
    /**
     * Take an interval and normalize it to multiples of round numbers.
     *
     * @param interval
     *        The raw, un-rounded interval.
     *
     * @param multiples
     *        Allowed multiples.
     *
     * @param magnitude
     *        The magnitude of the number.
     *
     * @param allowDecimals
     *        Whether to allow decimals.
     *
     * @param hasTickAmount
     *        If it has tickAmount, avoid landing on tick intervals lower than
     *        original.
     *
     * @return The normalized interval.
     */
    function normalizeTickInterval(interval: number, multiples?: Array<any>, magnitude?: number, allowDecimals?: boolean, hasTickAmount?: boolean): number;
    /**
     * Format a number and return a string based on input settings.
     *
     * @param number
     *        The input number to format.
     *
     * @param decimals
     *        The amount of decimals. A value of -1 preserves the amount in the
     *        input number.
     *
     * @param decimalPoint
     *        The decimal point, defaults to the one given in the lang options,
     *        or a dot.
     *
     * @param thousandsSep
     *        The thousands separator, defaults to the one given in the lang
     *        options, or a space character.
     *
     * @return The formatted number.
     */
    function numberFormat(number: number, decimals: number, decimalPoint?: string, thousandsSep?: string): string;
    /**
     * Iterate over object key pairs in an object.
     *
     * @param obj
     *        The object to iterate over.
     *
     * @param fn
     *        The iterator callback. It passes three arguments:
     *
     *        * value - The property value.
     *
     *        * key - The property key.
     *
     *        * obj - The object that objectEach is being applied to.
     *
     * @param ctx
     *        The context.
     */
    function objectEach<T>(obj: any, fn: ObjectEachCallbackFunction<T>, ctx?: T): void;
    /**
     * Get the element's offset position, corrected for `overflow: auto`.
     *
     * @param el
     *        The DOM element.
     *
     * @return An object containing `left` and `top` properties for the position
     *         in the page.
     */
    function offset(el: Element): OffsetObject;
    /**
     * Left-pad a string to a given length by adding a character repetitively.
     *
     * @param number
     *        The input string or number.
     *
     * @param length
     *        The desired string length.
     *
     * @param padder
     *        The character to pad with.
     *
     * @return The padded string.
     */
    function pad(number: number, length?: number, padder?: string): string;
    /**
     * Return the first value that is not null or undefined.
     *
     * @param items
     *        Variable number of arguments to inspect.
     *
     * @return The value of the first argument that is not null or undefined.
     */
    function pick<T>(...items: Array<(T|null|undefined)>): T;
    /**
     * Return a length based on either the integer value, or a percentage of a
     * base.
     *
     * @param value
     *        A percentage string or a number.
     *
     * @param base
     *        The full length that represents 100%.
     *
     * @param offset
     *        A pixel offset to apply for percentage values. Used internally in
     *        axis positioning.
     *
     * @return The computed length.
     */
    function relativeLength(value: RelativeSize, base: number, offset?: number): number;
    /**
     * Remove an event that was added with Highcharts#addEvent.
     *
     * @param el
     *        The element to remove events on.
     *
     * @param type
     *        The type of events to remove. If undefined, all events are removed
     *        from the element.
     *
     * @param fn
     *        The specific callback to remove. If undefined, all events that
     *        match the element and optionally the type are removed.
     */
    function removeEvent<T>(el: (T|Class<T>), type?: string, fn?: EventCallbackFunction<T>): void;
    /**
     * Old factory to create new series prototypes.
     *
     * @param type
     *        The series type name.
     *
     * @param parent
     *        The parent series type name. Use `line` to inherit from the basic
     *        Series object.
     *
     * @param options
     *        The additional default options that are merged with the parent's
     *        options.
     *
     * @param seriesProto
     *        The properties (functions and primitives) to set on the new
     *        prototype.
     *
     * @param pointProto
     *        Members for a series-specific extension of the Point prototype if
     *        needed.
     *
     * @return The newly created prototype as extended from Series or its
     *         derivatives.
     */
    function seriesType(type: string, parent: string, options: (SeriesOptionsType|Dictionary<any>), seriesProto?: Dictionary<any>, pointProto?: Dictionary<any>): Series;
    /**
     * Set the global animation to either a given value, or fall back to the
     * given chart's animation option.
     *
     * @param animation
     *        The animation object.
     *
     * @param chart
     *        The chart instance.
     */
    function setAnimation(animation: (boolean|Partial<AnimationOptionsObject>|undefined), chart: Chart): void;
    /**
     * Merge the default options with custom options and return the new options
     * structure. Commonly used for defining reusable templates.
     *
     * @param options
     *        The new custom chart options.
     *
     * @return Updated options.
     */
    function setOptions(options: Options): Options;
    /**
     * Check if an element is an array, and if not, make it into an array.
     *
     * @param obj
     *        The object to splat.
     *
     * @return The produced or original array.
     */
    function splat(obj: any): any[];
    /**
     * Sort an object array and keep the order of equal items. The ECMAScript
     * standard does not specify the behavior when items are equal.
     *
     * @param arr
     *        The array to sort.
     *
     * @param sortFunction
     *        The function to sort it with, like with regular
     *        Array.prototype.sort.
     */
    function stableSort(arr: Array<any>, sortFunction: Function): void;
    /**
     * Stop running animation.
     *
     * @param el
     *        The SVGElement to stop animation on.
     *
     * @param prop
     *        The property to stop animating. If given, the stop method will
     *        stop a single property from animating, while others continue.
     */
    function stop(el: SVGElement, prop?: string): void;
    /**
     * Set a timeout if the delay is given, otherwise perform the function
     * synchronously.
     *
     * @param fn
     *        The function callback.
     *
     * @param delay
     *        Delay in milliseconds.
     *
     * @param context
     *        An optional context to send to the function callback.
     *
     * @return An identifier for the timeout that can later be cleared with
     *         Highcharts.clearTimeout. Returns -1 if there is no timeout.
     */
    function syncTimeout(fn: Function, delay: number, context?: any): number;
    /**
     * Get a unique key for using in internal element id's and pointers. The key
     * is composed of a random hash specific to this Highcharts instance, and a
     * counter.
     *
     * @return A unique key.
     */
    function uniqueKey(): string;
    /**
     * Activates a serial mode for element IDs provided by Highcharts.uniqueKey.
     * This mode can be used in automated tests, where a simple comparison of
     * two rendered SVG graphics is needed.
     *
     * **Note:** This is only for testing purposes and will break functionality
     * in webpages with multiple charts.
     *
     * @param mode
     *        Changes the state of serial mode.
     *
     * @return State of the serial mode.
     */
    function useSerialIds(mode?: boolean): (boolean|undefined);
    /**
     * Wrap a method with extended functionality, preserving the original
     * function.
     *
     * @param obj
     *        The context object that the method belongs to. In real cases, this
     *        is often a prototype.
     *
     * @param method
     *        The name of the method to extend.
     *
     * @param func
     *        A wrapper function callback. This function is called with the same
     *        arguments as the original function, except that the original
     *        function is unshifted and passed as the first argument.
     */
    function wrap(obj: any, method: string, func: WrapProceedFunction): void;
    let anchorX: (number|undefined);
    let anchorY: (number|undefined);
    let backgroundSize: ("contain"|"cover"|"within");
    let clockwise: (0|1|undefined);
    let context: (string|undefined);
    /**
     * Dependencies for the autoload feature.
     *
     * DO NOT EDIT THIS FILE. This file is generated using the 'gulp
     * dependency-mapping' task.
     */
    let DependencyMapping: any;
    let end: (number|undefined);
    let height: (number|undefined);
    let innerR: (number|undefined);
    let longArc: (0|1|undefined);
    let open: (boolean|undefined);
    let r: (number|undefined);
    let start: (number|undefined);
    let width: (number|undefined);
    let x: (number|undefined);
    let y: (number|undefined);
    /**
     * Arc symbol path.
     *
     * @param cx
     *        Center X
     *
     * @param cy
     *        Center Y
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @param options
     *        Options
     *
     * @return Path
     */
    function arc(cx: number, cy: number, w: number, h: number, options?: SymbolOptions): SVGPathArray;
    /**
     * Callout shape used for default tooltips.
     *
     * @param x
     *        Center X
     *
     * @param y
     *        Center Y
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @param options
     *        Options
     *
     * @return Path
     */
    function callout(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPathArray;
    /**
     * Set the size and position
     */
    function centerImage(): void;
    /**
     * Circle symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function circle(x: number, y: number, w: number, h: number): SVGPathArray;
    /**
     * Shorthand to get a cached `Intl.DateTimeFormat` instance.
     */
    function dateTimeFormat(): void;
    /**
     * Diamond symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function diamond(x: number, y: number, w: number, h: number): SVGPathArray;
    /**
     * Set the tick positions of a logarithmic axis.
     */
    function getLogTickPositions(): void;
    /**
     * Returns the modified (clone) or the original data table if the modified
     * one does not exist.
     *
     * @return The modified (clone) or the original data table.
     */
    function getModified(): DataTable;
    /**
     * Transform a pseudo HTML AST node tree into an SVG structure. We do as
     * much heavy lifting as we can here, before doing the final processing in
     * the modifyDOM function. The original data is mutated.
     *
     * @param nodes
     *        The AST nodes
     */
    function modifyTree(nodes: Array<ASTNode>): void;
    /**
     * Rect symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @param options
     *        Options
     *
     * @return Path
     */
    function rect(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPathArray;
    /**
     * Registers class pattern of a series.
     *
     * @param seriesType
     *        The series type as an identifier string in lower case.
     *
     * @param SeriesClass
     *        The series class as a class pattern or a constructor function with
     *        prototype.
     *
     * @return True if series type was added, false if it already exists.
     */
    function registerSeriesType(seriesType: string, SeriesClass: Function): boolean;
    /**
     * Rounded rectangle symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @param options
     *        Options
     *
     * @return Path
     */
    function roundedRect(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPathArray;
    /**
     * Take a locale-aware string format and return a full DateTimeFormat in
     * object form.
     */
    function str2dtf(): void;
    /**
     * Triangle symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function triangle(x: number, y: number, w: number, h: number): SVGPathArray;
    /**
     * Inverted triangle symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function triangleDown(x: number, y: number, w: number, h: number): SVGPathArray;
    /**
     * Un-escape HTML entities based on the public `renderer.escapes` list
     *
     * @param inputStr
     *        The string to unescape
     *
     * @param except
     *        Exceptions
     *
     * @return The processed string
     */
    function unescapeEntities(inputStr: string, except?: Array<string>): string;
}
declare global {
    /**
     * Highcharts-extended JQuery.
     */
    interface JQuery {
        /**
         * Helper function to return the chart of the current JQuery selector
         * element.
         *
         * @param className
         *        Name of the factory class in the Highcharts namespace.
         *
         * @param options
         *        The chart options structure.
         *
         * @param callback
         *        Function to run when the chart has loaded and all external
         *        images are loaded. Defining a chart.events.load handler is
         *        equivalent. Set to `true` to return a promise that resolves
         *        when the chart is ready.
         *
         * @return The chart that is linked to the JQuery selector element.
         */
        highcharts(className?: (string|'Chart'|'Map'|'StockChart'), options?: Highcharts.Options, callback?: (true|Highcharts.ChartCallbackFunction)): Highcharts.Chart;
        /**
         * Factory function to create a chart in the current JQuery selector
         * element.
         *
         * @param className
         *        Name of the factory class in the Highcharts namespace.
         *
         * @param options
         *        The chart options structure.
         *
         * @param callback
         *        Function to run when the chart has loaded and all external
         *        images are loaded. Defining a chart.events.load handler is
         *        equivalent. Set to `true` to return a promise that resolves
         *        when the chart is ready.
         *
         * @return The current JQuery selector.
         */
        highcharts(className?: (string|'Chart'|'Map'|'StockChart'), options?: Highcharts.Options, callback?: (true|Highcharts.ChartCallbackFunction)): JQuery;
    }
}
export default _Highcharts;
