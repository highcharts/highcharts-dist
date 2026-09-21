/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * An array of GeoJSON or TopoJSON objects or strings used as map data for
     * series.
     */
    type MapDataType = (string|GeoJSON|TopoJSON|Array<any>);
    interface Chart {
        /**
         * Deprecated. Use `MapView.lonLatToProjectedUnits` instead.
         *
         * @param lonLat
         *        Coordinates.
         *
         * @return X and Y coordinates in terms of projected values
         */
        fromLatLonToPoint(lonLat: MapLonLatObject): ProjectedXY;
        /**
         * Deprecated. Use `MapView.projectedUnitsToLonLat` instead.
         *
         * @param point
         *        A `Point` instance or anything containing `x` and `y`
         *        properties with numeric values.
         *
         * @return An object with `lat` and `lon` properties.
         */
        fromPointToLatLon(point: (Point|ProjectedXY)): (MapLonLatObject|undefined);
        /**
         * Highcharts Maps only. Zoom in or out of the map. See also
         * Point#zoomTo. See Chart#fromLatLonToPoint for how to get the
         * `centerX` and `centerY` parameters for a geographic location.
         *
         * Deprecated as of v9.3 in favor of MapView.zoomBy.
         *
         * @param howMuch
         *        How much to zoom the map. Values less than 1 zooms in. 0.5
         *        zooms in to half the current view. 2 zooms to twice the
         *        current view. If omitted, the zoom is reset.
         *
         * @param xProjected
         *        The projected x position to keep stationary when zooming, if
         *        available space.
         *
         * @param yProjected
         *        The projected y position to keep stationary when zooming, if
         *        available space.
         *
         * @param chartX
         *        Keep this chart position stationary if possible. This is used
         *        for example in `mousewheel` events, where the area under the
         *        mouse should be fixed as we zoom in.
         *
         * @param chartY
         *        Keep this chart position stationary if possible.
         */
        mapZoom(howMuch?: number, xProjected?: number, yProjected?: number, chartX?: number, chartY?: number): void;
        /**
         * Highcharts Maps only. Get point from latitude and longitude using
         * specified transform definition.
         *
         * @param latLon
         *        A latitude/longitude object.
         *
         * @param transform
         *        The transform definition to use as explained in the
         *        documentation.
         *
         * @return An object with `x` and `y` properties.
         */
        transformFromLatLon(latLon: MapLonLatObject, transform: any): ProjectedXY;
        /**
         * Highcharts Maps only. Get latLon from point using specified transform
         * definition. The method returns an object with the numeric properties
         * `lat` and `lon`.
         *
         * @param point
         *        A `Point` instance, or any object containing the properties
         *        `x` and `y` with numeric values.
         *
         * @param transform
         *        The transform definition to use as explained in the
         *        documentation.
         *
         * @return An object with `lat` and `lon` properties.
         */
        transformToLatLon(point: (Point|ProjectedXY), transform: any): (MapLonLatObject|undefined);
    }
    /**
     * Object containing the bounds of the map. All coordinates are in projected
     * units.
     */
    interface MapBounds {
        /**
         * The center of the bounding box.
         */
        midX: any;
        /**
         * The center of the bounding box.
         */
        midY: any;
        /**
         * First point's X of the bounding box.
         */
        x1: any;
        /**
         * Second point's X of the bounding box.
         */
        x2: any;
        /**
         * First point's Y of the bounding box.
         */
        y1: any;
        /**
         * Second point's Y of the bounding box.
         */
        y2: any;
    }
    interface Point {
        pointPadding?: number;
        /**
         * In Highcharts Maps, when data is loaded from GeoJSON, the GeoJSON
         * item's properties are copied over here.
         */
        properties: any;
        value?: (number|null);
        /**
         * Highmaps only. Zoom in on the point using the global animation.
         */
        zoomTo(): void;
    }
    interface PointOptionsObject {
        pointPadding?: number;
        value?: (number|null);
    }
    /**
     * Result object of a map transformation.
     */
    interface ProjectedXY {
        /**
         * X coordinate in projected units.
         */
        x: number;
        /**
         * Y coordinate in projected units
         */
        y: number;
    }
    /**
     * The Equal Earth map projection is an equal-area pseudocylindrical
     * projection for world maps, invented by Bojan Šavrič, Bernhard Jenny, and
     * Tom Patterson in 2018. It is inspired by the widely used Robinson
     * projection, but unlike the Robinson projection, retains the relative size
     * of areas. The projection equations are simple to implement and fast to
     * evaluate.
     *
     * We chose this as the default world map projection for Highcharts because
     * it is visually pleasing like Robinson, but avoids the political problem
     * of rendering high-latitude regions like Europe and North America larger
     * than tropical regions.
     */
    class EqualEarth {}
    /**
     * The Lambert conformal conic projection (LCC) is a conic map projection
     * used for many national and regional mapping systems.
     *
     * Its advantage lies in mapping smaller areas like countries or continents.
     * Two standard parallels are given, and between these, the distortion is
     * minimal.
     *
     * In Highcharts, LCC is the default projection when loading a map smaller
     * than 180 degrees width and 90 degrees height.
     *
     * For custom use, `rotation` should be set to adjust the reference
     * longitude, in addition to the `parallels` option.
     */
    class LambertConformalConic {
        /**
         * The Lambert conformal conic projection (LCC) is a conic map
         * projection used for many national and regional mapping systems.
         *
         * Its advantage lies in mapping smaller areas like countries or
         * continents. Two standard parallels are given, and between these, the
         * distortion is minimal.
         *
         * In Highcharts, LCC is the default projection when loading a map
         * smaller than 180 degrees width and 90 degrees height.
         *
         * For custom use, `rotation` should be set to adjust the reference
         * longitude, in addition to the `parallels` option.
         *
         * @param options
         *        The projection options, with support for `parallels`.
         */
        constructor(options: MapViewProjectionOptions);
    }
    /**
     * Map-optimized chart. Use Chart for common charts.
     */
    class MapChart extends Chart {
        /**
         * The map view handles zooming and centering on the map, and various
         * client-side projection capabilities.
         */
        mapView?: MapView;
        /**
         * Initializes the chart. The constructor's arguments are passed on
         * directly.
         *
         * @param userOptions
         *        Custom options.
         *
         * @param callback
         *        Function to run when the chart has loaded and all external
         *        images are loaded.
         *
         * @fires Highcharts.MapChart#init
         * @fires Highcharts.MapChart#afterInit
         */
        init(userOptions: Options, callback?: Function): void;
        /**
         * A wrapper for the chart's update function that will additionally run
         * recommendMapView on chart.map change.
         *
         * @param options
         *        The chart options.
         */
        update(options: Options): void;
    }
    /**
     * The map view handles zooming and centering on the map, and various
     * client-side projection capabilities.
     *
     * On a chart instance of `MapChart`, the map view is available as
     * `chart.mapView`.
     */
    class MapView {
        /**
         * The map view handles zooming and centering on the map, and various
         * client-side projection capabilities.
         *
         * On a chart instance of `MapChart`, the map view is available as
         * `chart.mapView`.
         *
         * @param chart
         *        The MapChart instance
         *
         * @param options
         *        MapView options
         */
        constructor(chart: MapChart, options: MapViewOptions);
        /**
         * The current center of the view in terms of `[longitude, latitude]`.
         */
        readonly center: LonLatArray;
        /**
         * The current zoom level of the view.
         */
        readonly zoom: number;
        /**
         * Fit the view to the given bounds.
         *
         * @param bounds
         *        Bounds in terms of projected units given as `{ x1, y1, x2, y2
         *        }`. If not set, fit to the bounds of the current data set
         *
         * @param padding
         *        Padding inside the bounds. A number signifies pixels, while a
         *        percentage string (like `5%`) can be used as a fraction of the
         *        plot area size.
         *
         * @param redraw
         *        Whether to redraw the chart immediately
         *
         * @param animation
         *        What animation to use for redraw
         */
        fitToBounds(bounds: MapBounds, padding?: MapViewPaddingType, redraw?: boolean, animation?: (boolean|Partial<AnimationOptionsObject>)): void;
        /**
         * Convert map coordinates in longitude/latitude to pixels
         *
         * @param lonLat
         *        The map coordinates
         *
         * @return The pixel position
         */
        lonLatToPixels(lonLat: MapLonLatObject): (PositionObject|undefined);
        /**
         * Get projected units from longitude/latitude. Insets are accounted
         * for. Returns an object with x and y values corresponding to positions
         * on the projected plane.
         *
         * @param lonLat
         *        Coordinates.
         *
         * @return X and Y coordinates in terms of projected values
         */
        lonLatToProjectedUnits(lonLat: MapLonLatObject): ProjectedXY;
        /**
         * Convert pixel position to longitude and latitude.
         *
         * @param pos
         *        The position in pixels
         *
         * @return The map coordinates
         */
        pixelsToLonLat(pos: PositionObject): (MapLonLatObject|undefined);
        /**
         * Convert pixel position to projected units
         *
         * @param pos
         *        The position in pixels
         *
         * @return The position in projected units
         */
        pixelsToProjectedUnits(pos: PositionObject): PositionObject;
        /**
         * Calculate longitude/latitude values for a point or position. Returns
         * an object with the numeric properties `lon` and `lat`.
         *
         * @param point
         *        A `Point` instance or anything containing `x` and `y`
         *        properties with numeric values.
         *
         * @return An object with `lat` and `lon` properties.
         */
        projectedUnitsToLonLat(point: (Point|ProjectedXY)): (MapLonLatObject|undefined);
        /**
         * Convert projected units to pixel position
         *
         * @param pos
         *        The position in projected units
         *
         * @return The position in pixels
         */
        projectedUnitsToPixels(pos: PositionObject): PositionObject;
        /**
         * Calculate and set the recommended map view based on provided map data
         * from series.
         *
         * @param chart
         *        Chart object
         *
         * @param mapDataArray
         *        Array of map data from all series.
         *
         * @param update
         *        Whether to update the chart with recommended map view.
         *
         * @return Best suitable map view.
         */
        recommendMapView(chart: Chart, mapDataArray: Array<(MapDataType|undefined)>, update?: boolean): (MapViewOptions|undefined);
        /**
         * Set the view to given center and zoom values.
         *
         * @param center
         *        The center point
         *
         * @param zoom
         *        The zoom level
         *
         * @param redraw
         *        Whether to redraw immediately
         *
         * @param animation
         *        Animation options for the redraw
         */
        setView(center: (LonLatArray|undefined), zoom: number, redraw?: boolean, animation?: (boolean|Partial<AnimationOptionsObject>)): void;
        /**
         * Update the view with given options
         *
         * @param options
         *        The new map view options to apply
         *
         * @param redraw
         *        Whether to redraw immediately
         *
         * @param animation
         *        The animation to apply to a the redraw
         */
        update(options: Partial<MapViewOptions>, redraw?: boolean, animation?: (boolean|Partial<AnimationOptionsObject>)): void;
        /**
         * Zoom the map view by a given number
         *
         * @param howMuch
         *        The amount of zoom to apply. 1 zooms in on half the current
         *        view, -1 zooms out. Pass `undefined` to zoom to the full
         *        bounds of the map.
         *
         * @param coords
         *        Optional map coordinates to keep fixed
         *
         * @param chartCoords
         *        Optional chart coordinates to keep fixed, in pixels
         *
         * @param animation
         *        The animation to apply to a the redraw
         */
        zoomBy(howMuch?: number, coords?: LonLatArray, chartCoords?: Array<number>, animation?: (boolean|Partial<AnimationOptionsObject>)): void;
    }
    /**
     * The Miller cylindrical projection is a modified Mercator projection,
     * proposed by Osborn Maitland Miller in 1942. Compared to Mercator, the
     * vertical exaggeration of polar areas is smaller, so the relative size of
     * areas is more correct.
     *
     * Highcharts used this as the default map projection for world maps until
     * the Map Collection v2.0 and Highcharts v10.0, when projection math was
     * moved to the client side and EqualEarth chosen as the default world map
     * projection.
     */
    class Miller {}
    /**
     * The orthographic projection is an azimuthal perspective projection,
     * projecting the Earth's surface from an infinite distance to a plane. It
     * gives the illusion of a three-dimensional globe.
     *
     * Its disadvantage is that it fails to render the whole world in one view.
     * However, since the distortion is small at the center of the view, it is
     * great at rendering limited areas of the globe, or at showing the
     * positions of areas on the globe.
     */
    class Orthographic {}
    /**
     * Web Mercator is a variant of the Mercator map projection and is the de
     * facto standard for Web mapping applications.
     *
     * Web Mercator is primarily created for tiled map services, as when zooming
     * in to smaller scales, the angle between lines on the surface is
     * approximately retained.
     *
     * The great disadvantage of Web Mercator is that areas inflate with
     * distance from the equator. For example, in the world map, Greenland
     * appears roughly the same size as Africa. In reality Africa is 14 times
     * larger, as is apparent from the Equal Earth or Orthographic projections.
     */
    class WebMercator {}
    /**
     * Contains all loaded map data for Highmaps.
     */
    let maps: Record<string, any>;
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
     * Find color of point based on color axis.
     *
     * @param value
     *        Value to find corresponding color on the color axis.
     *
     * @param point
     *        Point to find it's color from color axis.
     *
     * @return Color in RGBa array.
     */
    function colorFromPoint(value: (number|null), point: Point): Array<number>;
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
     * Highcharts Maps only. Restructure a GeoJSON or TopoJSON object in
     * preparation to be read directly by the series.mapData option. The object
     * will be broken down to fit a specific Highcharts type, either `map`,
     * `mapline` or `mappoint`. Meta data in GeoJSON's properties object will be
     * copied directly over to Point.properties in Highcharts Maps.
     *
     * @param json
     *        The GeoJSON or TopoJSON structure to parse, represented as a
     *        JavaScript object.
     *
     * @param hType
     *        The Highcharts Maps series type to prepare for. Setting "map" will
     *        return GeoJSON polygons and multipolygons. Setting "mapline" will
     *        return GeoJSON linestrings and multilinestrings. Setting
     *        "mappoint" will return GeoJSON points and multipoints.
     *
     * @return An object ready for the `mapData` option.
     */
    function geojson(json: (GeoJSON|TopoJSON), hType?: string): Array<any>;
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
     * The factory function for creating new map charts. Creates a new MapChart
     * object with different default options than the basic Chart.
     *
     * @param options
     *        The chart options structure as described in the options reference.
     *
     * @param callback
     *        A function to execute when the chart object is finished rendering
     *        and all external image files (`chart.backgroundImage`,
     *        `chart.plotBackgroundImage` etc) are loaded. Defining a
     *        chart.events.load handler is equivalent.
     *
     * @return The chart object.
     */
    function mapChart(options: Options, callback?: ChartCallbackFunction): MapChart;
    /**
     * The factory function for creating new map charts. Creates a new MapChart
     * object with different default options than the basic Chart.
     *
     * @param renderTo
     *        The DOM element to render to, or its id.
     *
     * @param options
     *        The chart options structure as described in the options reference.
     *
     * @param callback
     *        A function to execute when the chart object is finished rendering
     *        and all external image files (`chart.backgroundImage`,
     *        `chart.plotBackgroundImage` etc) are loaded. Defining a
     *        chart.events.load handler is equivalent.
     *
     * @return The chart object.
     */
    function mapChart(renderTo: (string|HTMLDOMElement), options: Options, callback?: ChartCallbackFunction): MapChart;
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
     * Utility for reading SVG paths directly.
     *
     * @param path
     *        Path to split.
     *
     * @return Splitted SVG path
     */
    function splitPath(path: (string|Array<(string|number)>)): SVGPathArray;
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
    /**
     * If ranges are not specified, determine ranges from rendered bubble series
     * and render legend again.
     */
    function chartDrawChartBox(): void;
    /**
     * Calculate the haversine of an angle.
     */
    function hav(): void;
    /**
     * Calculate the haversine of an angle from two coordinates.
     */
    function havFromCoords(): void;
    /**
     * Add logic to pad each axis with the amount of pixels necessary to avoid
     * the bubbles to overflow.
     */
    function onAxisFoundExtremes(): void;
    /**
     * Retranslate the legend items after render
     */
    function onLegendAfterRender(): void;
    /**
     * Toggle bubble legend depending on the visible status of bubble series.
     */
    function onLegendItemClick(): void;
    /**
     * Keep longitude within -180 and 180. This is faster than using the modulo
     * operator, and preserves the distinction between -180 and 180.
     */
    function wrapLon(): void;
}
export default _Highcharts;
