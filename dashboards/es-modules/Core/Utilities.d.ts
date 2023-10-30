import type AxisType from './Axis/AxisType';
import type Chart from './Chart/Chart';
import type CSSObject from './Renderer/CSSObject';
import type { DOMElementType, HTMLDOMElement } from './Renderer/DOMElementType';
import type EventCallback from './EventCallback';
import type HTMLAttributes from './Renderer/HTML/HTMLAttributes';
import type Series from './Series/Series';
import type SVGAttributes from './Renderer/SVG/SVGAttributes';
import type Time from './Time';
type NonArray<T> = T extends Array<unknown> ? never : T;
type NonFunction<T> = T extends Function ? never : T;
type NullType = (null | undefined);
/**
 * Provide error messages for debugging, with links to online explanation. This
 * function can be overridden to provide custom error handling.
 *
 * @sample highcharts/chart/highcharts-error/
 *         Custom error handler
 *
 * @function Highcharts.error
 *
 * @param {number|string} code
 *        The error code. See
 *        [errors.xml](https://github.com/highcharts/highcharts/blob/master/errors/errors.xml)
 *        for available codes. If it is a string, the error message is printed
 *        directly in the console.
 *
 * @param {boolean} [stop=false]
 *        Whether to throw an error or just log a warning in the console.
 *
 * @param {Highcharts.Chart} [chart]
 *        Reference to the chart that causes the error. Used in 'debugger'
 *        module to display errors directly on the chart.
 *        Important note: This argument is undefined for errors that lack
 *        access to the Chart instance. In such case, the error will be
 *        displayed on the last created chart.
 *
 * @param {Highcharts.Dictionary<string>} [params]
 *        Additional parameters for the generated message.
 *
 * @return {void}
 */
declare function error(code: (number | string), stop?: boolean, chart?: Chart, params?: Record<string, string>): void;
declare namespace error {
    const messages: Array<string>;
}
declare function merge<T = object>(extend: true, a?: T, ...n: Array<DeepPartial<T> | undefined>): (T);
declare function merge<T1 extends object = object, T2 = unknown, T3 = unknown, T4 = unknown, T5 = unknown, T6 = unknown, T7 = unknown, T8 = unknown, T9 = unknown>(a?: T1, b?: T2, c?: T3, d?: T4, e?: T5, f?: T6, g?: T7, h?: T8, i?: T9): (T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9);
/**
 * Constrain a value to within a lower and upper threshold.
 *
 * @private
 * @param {number} value The initial value
 * @param {number} min The lower threshold
 * @param {number} max The upper threshold
 * @return {number} Returns a number value within min and max.
 */
declare function clamp(value: number, min: number, max: number): number;
/**
 * Return the deep difference between two objects. It can either return the new
 * properties, or optionally return the old values of new properties.
 * @private
 */
declare function diffObjects(newer: AnyRecord, older: AnyRecord, keepOlder?: boolean, collectionsWithUpdate?: string[]): AnyRecord;
/**
 * Shortcut for parseInt
 *
 * @private
 * @function Highcharts.pInt
 *
 * @param {*} s
 *        any
 *
 * @param {number} [mag]
 *        Magnitude
 *
 * @return {number}
 *         number
 */
declare function pInt(s: any, mag?: number): number;
/**
 * Utility function to check for string type.
 *
 * @function Highcharts.isString
 *
 * @param {*} s
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a string.
 */
declare function isString(s: unknown): s is string;
/**
 * Utility function to check if an item is an array.
 *
 * @function Highcharts.isArray
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is an array.
 */
declare function isArray(obj: unknown): obj is Array<unknown>;
declare function isObject<T>(obj: T, strict: true): obj is object & NonArray<NonFunction<NonNullable<T>>>;
declare function isObject<T>(obj: T, strict?: false): obj is object & NonFunction<NonNullable<T>>;
/**
 * Utility function to check if an Object is a HTML Element.
 *
 * @function Highcharts.isDOMElement
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a HTML Element.
 */
declare function isDOMElement(obj: unknown): obj is HTMLDOMElement;
/**
 * Utility function to check if an Object is a class.
 *
 * @function Highcharts.isClass
 *
 * @param {object|undefined} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a class.
 */
declare function isClass<T>(obj: (object | undefined)): obj is Class<T>;
/**
 * Utility function to check if an item is a number and it is finite (not NaN,
 * Infinity or -Infinity).
 *
 * @function Highcharts.isNumber
 *
 * @param {*} n
 *        The item to check.
 *
 * @return {boolean}
 *         True if the item is a finite number
 */
declare function isNumber(n: unknown): n is number;
/**
 * Remove the last occurence of an item from an array.
 *
 * @function Highcharts.erase
 *
 * @param {Array<*>} arr
 *        The array.
 *
 * @param {*} item
 *        The item to remove.
 *
 * @return {void}
 */
declare function erase(arr: Array<unknown>, item: unknown): void;
/**
 * Insert a series or an axis in a collection with other items, either the
 * chart series or yAxis series or axis collections, in the correct order
 * according to the index option and whether it is internal. Used internally
 * when adding series and axes.
 *
 * @private
 * @function Highcharts.Chart#insertItem
 * @param  {Highcharts.Series|Highcharts.Axis} item
 *         The item to insert
 * @param  {Array<Highcharts.Series>|Array<Highcharts.Axis>} collection
 *         A collection of items, like `chart.series` or `xAxis.series`.
 * @return {number} The index of the series in the collection.
 */
declare function insertItem(item: Series | AxisType, collection: Array<Series | AxisType>): number;
/**
 * Adds an item to an array, if it is not present in the array.
 *
 * @function Highcharts.pushUnique
 *
 * @param {Array<unknown>} array
 * The array to add the item to.
 *
 * @param {unknown} item
 * The item to add.
 *
 * @return {boolean}
 * Returns true, if the item was not present and has been added.
 */
declare function pushUnique(array: Array<unknown>, item: unknown): boolean;
/**
 * Check if an object is null or undefined.
 *
 * @function Highcharts.defined
 *
 * @param {*} obj
 *        The object to check.
 *
 * @return {boolean}
 *         False if the object is null or undefined, otherwise true.
 */
declare function defined<T>(obj: T): obj is NonNullable<T>;
declare function attr(elem: DOMElementType, prop: (HTMLAttributes | SVGAttributes)): undefined;
declare function attr(elem: DOMElementType, prop: string, value?: undefined): (string | null);
declare function attr(elem: DOMElementType, prop: string, value: (number | string)): undefined;
/**
 * Check if an element is an array, and if not, make it into an array.
 *
 * @function Highcharts.splat
 *
 * @param {*} obj
 *        The object to splat.
 *
 * @return {Array}
 *         The produced or original array.
 */
declare function splat(obj: any): Array<any>;
/**
 * Set a timeout if the delay is given, otherwise perform the function
 * synchronously.
 *
 * @function Highcharts.syncTimeout
 *
 * @param {Function} fn
 *        The function callback.
 *
 * @param {number} delay
 *        Delay in milliseconds.
 *
 * @param {*} [context]
 *        An optional context to send to the function callback.
 *
 * @return {number}
 *         An identifier for the timeout that can later be cleared with
 *         Highcharts.clearTimeout. Returns -1 if there is no timeout.
 */
declare function syncTimeout(fn: Function, delay: number, context?: unknown): number;
/**
 * Internal clear timeout. The function checks that the `id` was not removed
 * (e.g. by `chart.destroy()`). For the details see
 * [issue #7901](https://github.com/highcharts/highcharts/issues/7901).
 *
 * @function Highcharts.clearTimeout
 *
 * @param {number|undefined} id
 * Id of a timeout.
 */
declare function internalClearTimeout(id: (number | undefined)): void;
/**
 * Utility function to extend an object with the members of another.
 *
 * @function Highcharts.extend<T>
 *
 * @param {T|undefined} a
 *        The object to be extended.
 *
 * @param {Partial<T>} b
 *        The object to add to the first one.
 *
 * @return {T}
 *         Object a, the original object.
 */
declare function extend<T extends object>(a: (T | undefined), b: Partial<T>): T;
declare function pick<T1, T2, T3, T4, T5>(...args: [T1, T2, T3, T4, T5]): T1 extends NullType ? T2 extends NullType ? T3 extends NullType ? T4 extends NullType ? T5 extends NullType ? undefined : T5 : T4 : T3 : T2 : T1;
declare function pick<T1, T2, T3, T4>(...args: [T1, T2, T3, T4]): T1 extends NullType ? T2 extends NullType ? T3 extends NullType ? T4 extends NullType ? undefined : T4 : T3 : T2 : T1;
declare function pick<T1, T2, T3>(...args: [T1, T2, T3]): T1 extends NullType ? T2 extends NullType ? T3 extends NullType ? undefined : T3 : T2 : T1;
declare function pick<T1, T2>(...args: [T1, T2]): T1 extends NullType ? T2 extends NullType ? undefined : T2 : T1;
declare function pick<T1>(...args: [T1]): T1 extends NullType ? undefined : T1;
declare function pick<T>(...args: Array<T | null | undefined>): T | undefined;
/**
 * Set CSS on a given element.
 *
 * @function Highcharts.css
 *
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} el
 *        An HTML DOM element.
 *
 * @param {Highcharts.CSSObject} styles
 *        Style object with camel case property names.
 *
 * @return {void}
 */
declare function css(el: DOMElementType, styles: CSSObject): void;
/**
 * Utility function to create an HTML element with attributes and styles.
 *
 * @function Highcharts.createElement
 *
 * @param {string} tag
 *        The HTML tag.
 *
 * @param {Highcharts.HTMLAttributes} [attribs]
 *        Attributes as an object of key-value pairs.
 *
 * @param {Highcharts.CSSObject} [styles]
 *        Styles as an object of key-value pairs.
 *
 * @param {Highcharts.HTMLDOMElement} [parent]
 *        The parent HTML object.
 *
 * @param {boolean} [nopad=false]
 *        If true, remove all padding, border and margin.
 *
 * @return {Highcharts.HTMLDOMElement}
 *         The created DOM element.
 */
declare function createElement(tag: string, attribs?: HTMLAttributes, styles?: CSSObject, parent?: HTMLDOMElement, nopad?: boolean): HTMLDOMElement;
/**
 * Extend a prototyped class by new members.
 *
 * @deprecated
 * @function Highcharts.extendClass<T>
 *
 * @param {Highcharts.Class<T>} parent
 *        The parent prototype to inherit.
 *
 * @param {Highcharts.Dictionary<*>} members
 *        A collection of prototype members to add or override compared to the
 *        parent prototype.
 *
 * @return {Highcharts.Class<T>}
 *         A new prototype.
 */
declare function extendClass<T, TReturn = T>(parent: Class<T>, members: any): Class<TReturn>;
/**
 * Left-pad a string to a given length by adding a character repetitively.
 *
 * @function Highcharts.pad
 *
 * @param {number} number
 *        The input string or number.
 *
 * @param {number} [length]
 *        The desired string length.
 *
 * @param {string} [padder=0]
 *        The character to pad with.
 *
 * @return {string}
 *         The padded string.
 */
declare function pad(number: number, length?: number, padder?: string): string;
/**
 * Return a length based on either the integer value, or a percentage of a base.
 *
 * @function Highcharts.relativeLength
 *
 * @param {Highcharts.RelativeSize} value
 *        A percentage string or a number.
 *
 * @param {number} base
 *        The full length that represents 100%.
 *
 * @param {number} [offset=0]
 *        A pixel offset to apply for percentage values. Used internally in
 *        axis positioning.
 *
 * @return {number}
 *         The computed length.
 */
declare function relativeLength(value: Utilities.RelativeSize, base: number, offset?: number): number;
/**
 * Wrap a method with extended functionality, preserving the original function.
 *
 * @function Highcharts.wrap
 *
 * @param {*} obj
 *        The context object that the method belongs to. In real cases, this is
 *        often a prototype.
 *
 * @param {string} method
 *        The name of the method to extend.
 *
 * @param {Highcharts.WrapProceedFunction} func
 *        A wrapper function callback. This function is called with the same
 *        arguments as the original function, except that the original function
 *        is unshifted and passed as the first argument.
 */
declare function wrap<T, K extends FunctionNamesOf<T>>(obj: T, method: K, func: Utilities.WrapProceedFunction<T[K] & ArrowFunction>): void;
/**
 * Get the magnitude of a number.
 *
 * @function Highcharts.getMagnitude
 *
 * @param {number} num
 *        The number.
 *
 * @return {number}
 *         The magnitude, where 1-9 are magnitude 1, 10-99 magnitude 2 etc.
 */
declare function getMagnitude(num: number): number;
/**
 * Take an interval and normalize it to multiples of round numbers.
 *
 * @deprecated
 * @function Highcharts.normalizeTickInterval
 *
 * @param {number} interval
 *        The raw, un-rounded interval.
 *
 * @param {Array<*>} [multiples]
 *        Allowed multiples.
 *
 * @param {number} [magnitude]
 *        The magnitude of the number.
 *
 * @param {boolean} [allowDecimals]
 *        Whether to allow decimals.
 *
 * @param {boolean} [hasTickAmount]
 *        If it has tickAmount, avoid landing on tick intervals lower than
 *        original.
 *
 * @return {number}
 *         The normalized interval.
 *
 * @todo
 * Move this function to the Axis prototype. It is here only for historical
 * reasons.
 */
declare function normalizeTickInterval(interval: number, multiples?: Array<number>, magnitude?: number, allowDecimals?: boolean, hasTickAmount?: boolean): number;
/**
 * Sort an object array and keep the order of equal items. The ECMAScript
 * standard does not specify the behaviour when items are equal.
 *
 * @function Highcharts.stableSort
 *
 * @param {Array<*>} arr
 *        The array to sort.
 *
 * @param {Function} sortFunction
 *        The function to sort it with, like with regular Array.prototype.sort.
 */
declare function stableSort<T>(arr: Array<T>, sortFunction: (a: T, b: T) => number): void;
/**
 * Non-recursive method to find the lowest member of an array. `Math.min` raises
 * a maximum call stack size exceeded error in Chrome when trying to apply more
 * than 150.000 points. This method is slightly slower, but safe.
 *
 * @function Highcharts.arrayMin
 *
 * @param {Array<*>} data
 *        An array of numbers.
 *
 * @return {number}
 *         The lowest number.
 */
declare function arrayMin(data: Array<any>): number;
/**
 * Non-recursive method to find the lowest member of an array. `Math.max` raises
 * a maximum call stack size exceeded error in Chrome when trying to apply more
 * than 150.000 points. This method is slightly slower, but safe.
 *
 * @function Highcharts.arrayMax
 *
 * @param {Array<*>} data
 *        An array of numbers.
 *
 * @return {number}
 *         The highest number.
 */
declare function arrayMax(data: Array<any>): number;
/**
 * Utility method that destroys any SVGElement instances that are properties on
 * the given object. It loops all properties and invokes destroy if there is a
 * destroy method. The property is then delete.
 *
 * @function Highcharts.destroyObjectProperties
 *
 * @param {*} obj
 *        The object to destroy properties on.
 *
 * @param {*} [except]
 *        Exception, do not destroy this property, only delete it.
 */
declare function destroyObjectProperties(obj: any, except?: any): void;
/**
 * Discard a HTML element
 *
 * @function Highcharts.discardElement
 *
 * @param {Highcharts.HTMLDOMElement} element
 *        The HTML node to discard.
 */
declare function discardElement(element?: HTMLDOMElement): void;
/**
 * Fix JS round off float errors.
 *
 * @function Highcharts.correctFloat
 *
 * @param {number} num
 *        A float number to fix.
 *
 * @param {number} [prec=14]
 *        The precision.
 *
 * @return {number}
 *         The corrected float number.
 */
declare function correctFloat(num: number, prec?: number): number;
/**
 * Find the closest distance between two values of a two-dimensional array
 * @private
 * @function Highcharts.getClosestDistance
 *
 * @param {Array<Array<number>>} arrays
 *          An array of arrays of numbers
 *
 * @return {number | undefined}
 *          The closest distance between values
 */
declare function getClosestDistance(arrays: number[][], onError?: Function): (number | undefined);
/**
 * Returns the value of a property path on a given object.
 *
 * @private
 * @function getNestedProperty
 *
 * @param {string} path
 * Path to the property, for example `custom.myValue`.
 *
 * @param {unknown} obj
 * Instance containing the property on the specific path.
 *
 * @return {unknown}
 * The unknown property value.
 */
declare function getNestedProperty(path: string, parent: unknown): unknown;
declare function getStyle(el: HTMLDOMElement, prop: string, toInt: true): (number | undefined);
declare function getStyle(el: HTMLDOMElement, prop: string, toInt?: false): (number | string | undefined);
/**
 * Search for an item in an array.
 *
 * @function Highcharts.inArray
 *
 * @deprecated
 *
 * @param {*} item
 *        The item to search for.
 *
 * @param {Array<*>} arr
 *        The array or node collection to search in.
 *
 * @param {number} [fromIndex=0]
 *        The index to start searching from.
 *
 * @return {number}
 *         The index within the array, or -1 if not found.
 */
declare function inArray(item: any, arr: Array<any>, fromIndex?: number): number;
/**
 * Returns an array of a given object's own properties.
 *
 * @function Highcharts.keys
 * @deprecated
 *
 * @param {*} obj
 *        The object of which the properties are to be returned.
 *
 * @return {Array<string>}
 *         An array of strings that represents all the properties.
 */
declare function keys(obj: any): Array<string>;
/**
 * Get the element's offset position, corrected for `overflow: auto`.
 *
 * @function Highcharts.offset
 *
 * @param {global.Element} el
 *        The DOM element.
 *
 * @return {Highcharts.OffsetObject}
 *         An object containing `left` and `top` properties for the position in
 *         the page.
 */
declare function offset(el: Element): Utilities.OffsetObject;
/**
 * Iterate over object key pairs in an object.
 *
 * @function Highcharts.objectEach<T>
 *
 * @param {*} obj
 *        The object to iterate over.
 *
 * @param {Highcharts.ObjectEachCallbackFunction<T>} fn
 *        The iterator callback. It passes three arguments:
 *        * value - The property value.
 *        * key - The property key.
 *        * obj - The object that objectEach is being applied to.
 *
 * @param {T} [ctx]
 *        The context.
 */
declare function objectEach<TObject, TContext>(obj: TObject, fn: Utilities.ObjectEachCallback<TObject, TContext>, ctx?: TContext): void;
/**
 * Add an event listener.
 *
 * @function Highcharts.addEvent<T>
 *
 * @param {Highcharts.Class<T>|T} el
 *        The element or object to add a listener to. It can be a
 *        {@link HTMLDOMElement}, an {@link SVGElement} or any other object.
 *
 * @param {string} type
 *        The event type.
 *
 * @param {Highcharts.EventCallbackFunction<T>|Function} fn
 *        The function callback to execute when the event is fired.
 *
 * @param {Highcharts.EventOptionsObject} [options]
 *        Options for adding the event.
 *
 * @return {Function}
 *         A callback function to remove the added event.
 */
declare function addEvent<T>(el: (Class<T> | T), type: string, fn: (EventCallback<T> | Function), options?: Utilities.EventOptions): Function;
/**
 * Remove an event that was added with {@link Highcharts#addEvent}.
 *
 * @function Highcharts.removeEvent<T>
 *
 * @param {Highcharts.Class<T>|T} el
 *        The element to remove events on.
 *
 * @param {string} [type]
 *        The type of events to remove. If undefined, all events are removed
 *        from the element.
 *
 * @param {Highcharts.EventCallbackFunction<T>} [fn]
 *        The specific callback to remove. If undefined, all events that match
 *        the element and optionally the type are removed.
 *
 * @return {void}
 */
declare function removeEvent<T>(el: (Class<T> | T), type?: string, fn?: (EventCallback<T> | Function)): void;
/**
 * Fire an event that was registered with {@link Highcharts#addEvent}.
 *
 * @function Highcharts.fireEvent<T>
 *
 * @param {T} el
 *        The object to fire the event on. It can be a {@link HTMLDOMElement},
 *        an {@link SVGElement} or any other object.
 *
 * @param {string} type
 *        The type of event.
 *
 * @param {Highcharts.Dictionary<*>|Event} [eventArguments]
 *        Custom event arguments that are passed on as an argument to the event
 *        handler.
 *
 * @param {Highcharts.EventCallbackFunction<T>|Function} [defaultFunction]
 *        The default function to execute if the other listeners haven't
 *        returned false.
 *
 * @return {void}
 */
declare function fireEvent<T>(el: T, type: string, eventArguments?: (AnyRecord | Event), defaultFunction?: (EventCallback<T> | Function)): void;
/**
 * Activates a serial mode for element IDs provided by
 * {@link Highcharts.uniqueKey}. This mode can be used in automated tests, where
 * a simple comparison of two rendered SVG graphics is needed.
 *
 * **Note:** This is only for testing purposes and will break functionality in
 * webpages with multiple charts.
 *
 * @example
 * if (
 *   process &&
 *   process.env.NODE_ENV === 'development'
 * ) {
 *   Highcharts.useSerialIds(true);
 * }
 *
 * @function Highcharts.useSerialIds
 *
 * @param {boolean} [mode]
 * Changes the state of serial mode.
 *
 * @return {boolean|undefined}
 * State of the serial mode.
 */
declare function useSerialIds(mode?: boolean): (boolean | undefined);
declare function isFunction(obj: unknown): obj is Function;
declare namespace Utilities {
    type RelativeSize = (number | string);
    interface ErrorMessageEventObject {
        chart?: Chart;
        code: number;
        message?: string;
        params?: Record<string, string>;
    }
    interface EventOptions {
        order?: number;
        passive?: boolean;
    }
    interface EventWrapperObject<T> {
        fn: EventCallback<T>;
        order: number;
    }
    interface FindCallback<T> {
        (value: T, index: number): unknown;
    }
    interface ObjectEachCallback<TObject, TContext> {
        (this: TContext, value: TObject[keyof TObject], key: keyof TObject, obj: TObject): void;
    }
    interface OffsetObject {
        height: number;
        left: number;
        top: number;
        width: number;
    }
    interface WrapProceedFunction<T extends ArrowFunction> {
        (proceed: (T & ArrowFunction), ...args: Array<any>): ReturnType<T>;
    }
}
declare const Utilities: {
    addEvent: typeof addEvent;
    arrayMax: typeof arrayMax;
    arrayMin: typeof arrayMin;
    attr: typeof attr;
    clamp: typeof clamp;
    clearTimeout: typeof internalClearTimeout;
    correctFloat: typeof correctFloat;
    createElement: typeof createElement;
    css: typeof css;
    defined: typeof defined;
    destroyObjectProperties: typeof destroyObjectProperties;
    diffObjects: typeof diffObjects;
    discardElement: typeof discardElement;
    erase: typeof erase;
    error: typeof error;
    extend: typeof extend;
    extendClass: typeof extendClass;
    find: <T>(arr: T[], callback: Utilities.FindCallback<T>) => T | undefined;
    fireEvent: typeof fireEvent;
    getClosestDistance: typeof getClosestDistance;
    getMagnitude: typeof getMagnitude;
    getNestedProperty: typeof getNestedProperty;
    getStyle: typeof getStyle;
    inArray: typeof inArray;
    insertItem: typeof insertItem;
    isArray: typeof isArray;
    isClass: typeof isClass;
    isDOMElement: typeof isDOMElement;
    isFunction: typeof isFunction;
    isNumber: typeof isNumber;
    isObject: typeof isObject;
    isString: typeof isString;
    keys: typeof keys;
    merge: typeof merge;
    normalizeTickInterval: typeof normalizeTickInterval;
    objectEach: typeof objectEach;
    offset: typeof offset;
    pad: typeof pad;
    pick: typeof pick;
    pInt: typeof pInt;
    pushUnique: typeof pushUnique;
    relativeLength: typeof relativeLength;
    removeEvent: typeof removeEvent;
    splat: typeof splat;
    stableSort: typeof stableSort;
    syncTimeout: typeof syncTimeout;
    timeUnits: Record<Time.TimeUnit, number>;
    uniqueKey: () => string;
    useSerialIds: typeof useSerialIds;
    wrap: typeof wrap;
};
export default Utilities;
