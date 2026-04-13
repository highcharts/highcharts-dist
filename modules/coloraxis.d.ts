/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * The ColorAxis object for inclusion in gradient legends.
     */
    class ColorAxis extends Axis {
        /**
         * The ColorAxis object for inclusion in gradient legends.
         *
         * @param chart
         *        The related chart of the color axis.
         *
         * @param userOptions
         *        The color axis options for initialization.
         */
        constructor(chart: Chart, userOptions: ColorAxisOptions);
        /**
         * Internal function to draw a crosshair.
         *
         * @param e
         *        The event arguments from the modified pointer event, extended
         *        with `chartX` and `chartY`
         *
         * @param point
         *        The Point object if the crosshair snaps to points.
         *
         * @fires Highcharts.ColorAxis#afterDrawCrosshair
         * @fires Highcharts.ColorAxis#drawCrosshair
         */
        drawCrosshair(e?: PointerEventObject, point?: Point): void;
        /**
         * Returns true if the series has points at all.
         *
         * @return True, if the series has points, otherwise false.
         */
        hasData(): boolean;
        /**
         * Initializes the color axis.
         *
         * @param chart
         *        The related chart of the color axis.
         *
         * @param userOptions
         *        The color axis options for initialization.
         */
        init(chart: Chart, userOptions: ColorAxisOptions): void;
        /**
         * Removes the color axis and the related legend item.
         *
         * @param redraw
         *        Whether to redraw the chart following the remove.
         */
        remove(redraw?: boolean): void;
        /**
         * Updates a color axis instance with a new set of options. The options
         * are merged with the existing options, so only new or altered options
         * need to be specified.
         *
         * @param newOptions
         *        The new options that will be merged in with existing options
         *        on the color axis.
         *
         * @param redraw
         *        Whether to redraw the chart after the color axis is altered.
         *        If doing more operations on the chart, it is a good idea to
         *        set redraw to `false` and call Highcharts.Chart#redraw after.
         */
        update(newOptions: ColorAxisOptions, redraw?: boolean): void;
    }
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
     * Get the magnitude of a number.
     *
     * @param num
     *        The number.
     *
     * @return The magnitude, where 1-9 are magnitude 1, 10-99 magnitude 2 etc.
     */
    function getMagnitude(num: number): number;
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
}
export default _Highcharts;
