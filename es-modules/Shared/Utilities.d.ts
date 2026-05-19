import type CSSObject from '../Core/Renderer/CSSObject';
import type { DOMElementType, HTMLDOMElement } from '../Core/Renderer/DOMElementType';
import type HTMLAttributes from '../Core/Renderer/HTML/HTMLAttributes';
import type SVGAttributes from '../Core/Renderer/SVG/SVGAttributes';
import type { AnyRecord, DeepPartial, TypedArray } from './Types.js';
import { EventCallback } from '../Core/Callback';
interface Class<T = any> extends Function {
    new (...args: Array<any>): T;
}
type ArrowFunction = (...args: Array<any>) => any;
type FunctionsOf<T> = {
    [K in keyof T as T[K] extends Function ? K : never]: T[K];
};
type FunctionNamesOf<T> = keyof FunctionsOf<T>;
/**
 * Add an event listener.
 *
 * @function Highcharts.addEvent<T>
 *
 * @param  {Highcharts.Class<T>|T} el
 *         The element or object to add a listener to. It can be a
 *         {@link HTMLDOMElement}, an {@link SVGElement} or any other object.
 *
 * @param  {string} type
 *         The event type.
 *
 * @param  {Highcharts.EventCallbackFunction<T>|Function} fn
 *         The function callback to execute when the event is fired.
 *
 * @param  {Highcharts.EventOptionsObject} [options]
 *         Options for adding the event.
 *
 * @sample highcharts/members/addevent
 *         Use a general `render` event to draw shapes on a chart
 *
 * @return {Function}
 *         A callback function to remove the added event.
 */
export declare function addEvent<T>(el: (Class<T> | T), type: string, fn: (EventCallback<T> | Function), options?: EventOptions): Function;
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
export declare function arrayMin(data: Array<any> | TypedArray): number;
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
export declare function arrayMax(data: Array<any> | TypedArray): number;
export declare function attr(elem: DOMElementType, prop: (HTMLAttributes | SVGAttributes)): undefined;
export declare function attr(elem: DOMElementType, prop: string, value?: undefined): (string | null);
export declare function attr(elem: DOMElementType, prop: string, value: (number | string)): undefined;
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
export declare function correctFloat(num: number, prec?: number): number;
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
export declare function createElement(tag: string, attribs?: HTMLAttributes, styles?: CSSObject, parent?: HTMLDOMElement, nopad?: boolean): HTMLDOMElement;
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
export declare function css(el: DOMElementType, styles: CSSObject): void;
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
export declare function defined<T>(obj: T): obj is NonNullable<T>;
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
export declare function destroyObjectProperties(obj: any, except?: any, destructablesOnly?: boolean): void;
/**
 * Discard a HTML element
 *
 * @function Highcharts.discardElement
 *
 * @param {Highcharts.HTMLDOMElement} element
 *        The HTML node to discard.
 */
export declare function discardElement(element?: HTMLDOMElement): void;
/**
 * Remove the last occurrence of an item from an array.
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
export declare function erase(arr: Array<unknown>, item: unknown): void;
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
export declare function extend<T>(a: (T | undefined), b: Partial<T>): T;
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
export declare function extendClass<T, TReturn = T>(parent: Class<T>, members: any): Class<TReturn>;
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
export declare function fireEvent<T>(el: T, type: string, eventArguments?: (AnyRecord | Event), defaultFunction?: (EventCallback<T> | Function)): void;
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
export declare function getMagnitude(num: number): number;
export declare function getStyle(el: HTMLDOMElement, prop: string, toInt: true): (number | undefined);
export declare function getStyle(el: HTMLDOMElement, prop: string, toInt?: false): (number | string | undefined);
/**
 * Return the value of the first element in the array that satisfies the
 * provided testing function.
 *
 * @function Highcharts.find<T>
 *
 * @param {Array<T>} arr
 *        The array to test.
 *
 * @param {Function} callback
 *        The callback function. The function receives the item as the first
 *        argument. Return `true` if this item satisfies the condition.
 *
 * @return {T|undefined}
 *         The value of the element.
 */
export declare const find: <T>(arr: Array<T>, callback: FindCallback<T>) => (T | undefined);
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
export declare function isDOMElement(obj: unknown): obj is HTMLDOMElement;
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
export declare function isClass<T>(obj: (object | undefined)): obj is Class<T>;
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
export declare function isNumber(n: unknown): n is number;
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
export declare function isString(s: unknown): s is string;
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
export declare function isArray(obj: unknown): obj is Array<unknown>;
/**
 * Utility function to check if object is a function.
 *
 * @function Highcharts.isFunction
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a function.
 */
export declare function isFunction(obj: unknown): obj is Function;
export declare function isObject<T>(obj: T, strict: true): obj is object & NonArray<NonFunction<NonNullable<T>>>;
export declare function isObject<T>(obj: T, strict?: false): obj is object & NonFunction<NonNullable<T>>;
export declare function merge<T = object>(extend: true, a?: T, ...n: Array<DeepPartial<T> | undefined>): (T);
export declare function merge<T1 extends object = object, T2 = unknown, T3 = unknown, T4 = unknown, T5 = unknown, T6 = unknown, T7 = unknown, T8 = unknown, T9 = unknown>(a?: T1, b?: T2, c?: T3, d?: T4, e?: T5, f?: T6, g?: T7, h?: T8, i?: T9): (T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9);
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
export declare function normalizeTickInterval(interval: number, multiples?: Array<number>, magnitude?: number, allowDecimals?: boolean, hasTickAmount?: boolean): number;
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
export declare function objectEach<TObject, TContext>(obj: TObject, fn: ObjectEachCallback<TObject, TContext>, ctx?: TContext): void;
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
export declare function offset(el: Element): OffsetObject;
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
export declare function pad(number: number, length?: number, padder?: string): string;
export declare function pick<T1, T2, T3, T4, T5>(...args: [T1, T2, T3, T4, T5]): T1 extends NullType ? T2 extends NullType ? T3 extends NullType ? T4 extends NullType ? T5 extends NullType ? undefined : T5 : T4 : T3 : T2 : T1;
export declare function pick<T1, T2, T3, T4>(...args: [T1, T2, T3, T4]): T1 extends NullType ? T2 extends NullType ? T3 extends NullType ? T4 extends NullType ? undefined : T4 : T3 : T2 : T1;
export declare function pick<T1, T2, T3>(...args: [T1, T2, T3]): T1 extends NullType ? T2 extends NullType ? T3 extends NullType ? undefined : T3 : T2 : T1;
export declare function pick<T1, T2>(...args: [T1, T2]): T1 extends NullType ? T2 extends NullType ? undefined : T2 : T1;
export declare function pick<T1>(...args: [T1]): T1 extends NullType ? undefined : T1;
export declare function pick<T>(...args: Array<T | null | undefined>): T | undefined;
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
export declare function relativeLength(value: RelativeSize, base: number, offset?: number): number;
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
export declare function removeEvent<T>(el: (Class<T> | T), type?: string, fn?: (EventCallback<T> | Function)): void;
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
export declare function splat<T>(obj: T | Array<T>): Array<T>;
/**
 * Sort an object array and keep the order of equal items. The ECMAScript
 * standard does not specify the behavior when items are equal.
 *
 * @function Highcharts.stableSort
 *
 * @param {Array<*>} arr
 *        The array to sort.
 *
 * @param {Function} sortFunction
 *        The function to sort it with, like with regular Array.prototype.sort.
 */
export declare function stableSort<T>(arr: Array<T>, sortFunction: (a: T, b: T) => number): void;
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
export declare function syncTimeout(fn: Function, delay: number, context?: unknown): number;
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
export declare function wrap<T, K extends FunctionNamesOf<T>>(obj: T, method: K, func: WrapProceedFunction<T[K] & ArrowFunction>): void;
type NullType = (null | undefined);
type NonArray<T> = T extends Array<unknown> ? never : T;
type NonFunction<T> = T extends Function ? never : T;
export interface FindCallback<T> {
    (value: T, index: number): unknown;
}
export interface ObjectEachCallback<TObject, TContext> {
    (this: TContext, value: TObject[keyof TObject], key: Extract<keyof TObject, string>, obj: TObject): void;
}
export interface OffsetObject {
    /**
     * Height of the element.
     */
    height: number;
    /**
     * Left distance to the page border.
     */
    left: number;
    /**
     * Top distance to the page border.
     */
    top: number;
    /**
     * Width of the element.
     */
    width: number;
}
export interface EventOptions {
    /**
     * The order the event handler should be called. This opens for having
     * one handler be called before another, independent of in which order
     * they were added.
     */
    order?: number;
    /**
     * Whether an event should be passive or not. When set to `true`, the
     * function specified by listener will never call `preventDefault()`.
     */
    passive?: boolean;
}
export interface EventWrapperObject<T> {
    /**
     * The function callback to execute when the event is fired.
     */
    fn: EventCallback<T>;
    /**
     * The order the event handler should be called.
     */
    order: number;
}
export type RelativeSize = (number | string);
interface WrapProceedFunction<T extends ArrowFunction> {
    (proceed: (T & ArrowFunction), ...args: Array<any>): ReturnType<T>;
}
export {};
