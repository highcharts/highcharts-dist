import type AnimationOptions from '../Animation/AnimationOptions';
import type ColorType from '../Color/ColorType';
import type PointBase from './PointBase';
import type { PointOptions, PointShortOptions } from './PointOptions';
import type Series from './Series';
import type { StatesOptionsKey } from './StatesOptions';
import type SVGAttributes from '../Renderer/SVG/SVGAttributes';
import type SVGElement from '../Renderer/SVG/SVGElement';
import type SVGPath from '../Renderer/SVG/SVGPath';
/**
 * The Point object. The point objects are generated from the `series.data`
 * configuration objects or raw numbers. They can be accessed from the
 * `Series.points` array. Other ways to instantiate points are through {@link
 * Highcharts.Series#addPoint} or {@link Highcharts.Series#setData}.
 *
 * @class
 * @name Highcharts.Point
 *
 * @param {Highcharts.Series} series
 *        The series object containing this point.
 *
 * @param {Highcharts.PointOptionsType} options
 *        The data in either number, array or object format.
 *
 * @param {number} [x]
 *        Optionally, the X value of the point.
 *
 * @emits Highcharts.Point#event:afterInit
 */
declare class Point {
    constructor(series: Series, options: (PointOptions | PointShortOptions), x?: number);
    /**
     * For categorized axes this property holds the category name for the
     * point. For other axes it holds the X value.
     */
    category: (number | string);
    /**
     * The point's current color.
     */
    color?: ColorType;
    /**
     * The point's current color index, used in styled mode instead of
     * `color`. The color index is inserted in class names used for styling.
     */
    colorIndex?: number;
    /**
     * SVG graphic representing the point in the chart. In some cases it may be
     * a hidden graphic to improve accessibility.
     *
     * Typically this is a simple shape, like a `rect` for column charts or
     * `path` for line markers, but for some complex series types like boxplot
     * or 3D charts, the graphic may be a `g` element containing other shapes.
     * The graphic is generated the first time {@link Series#drawPoints} runs,
     * and updated and moved on subsequent runs.
     *
     * @see Highcharts.Point#graphics
     *
     * @name Highcharts.Point#graphic
     * @type {Highcharts.SVGElement|undefined}
     */
    graphic?: SVGElement;
    /**
     * Array for multiple SVG graphics representing the point in the
     * chart. Only used in cases where the point can not be represented
     * by a single graphic.
     *
     * @see Highcharts.Point#graphic
     *
     * @name Highcharts.Point#graphics
     * @type {Array<Highcharts.SVGElement>|undefined}
     */
    graphics?: Array<SVGElement | undefined>;
    /**
     * The point's name if it is defined, or its category in case of a category,
     * otherwise the x value. Convenient for tooltip and data label formatting.
     *
     * @name Highcharts.Point#key
     * @type {number|string}
     */
    key: string | number;
    /**
     * The name of the point. The name can be given as the first position of the
     * point configuration array, or as a `name` property in the configuration:
     *
     * @example
     * // Array config
     * data: [
     *     ['John', 1],
     *     ['Jane', 2]
     * ]
     *
     * // Object config
     * data: [{
     *        name: 'John',
     *        y: 1
     * }, {
     *     name: 'Jane',
     *     y: 2
     * }]
     *
     * @name Highcharts.Point#name
     * @type {string}
     */
    name: string;
    /**
     * The point's options as applied in the initial configuration, or
     * extended through `Point.update`.
     *
     * In TypeScript you have to extend `PointOptionsObject` via an
     * additional interface to allow custom data options:
     *
     * ```
     * declare interface PointOptionsObject {
     *     customProperty: string;
     * }
     * ```
     *
     * @name Highcharts.Point#options
     * @type {Highcharts.PointOptionsObject}
     */
    options: PointOptions;
    /**
     * The percentage for points in a stacked series, pies or gauges.
     *
     * @name Highcharts.Point#percentage
     * @type {number|undefined}
     */
    percentage?: number;
    /**
     * Array of all hovered points when using shared tooltips.
     *
     * @name Highcharts.Point#points
     * @type {Array<Highcharts.Point>|undefined}
     */
    points?: Array<Point>;
    /**
     * Whether the point is selected or not.
     *
     * @see Point#select
     * @see Chart#getSelectedPoints
     *
     * @name Highcharts.Point#selected
     * @type {boolean}
     */
    selected?: boolean;
    /**
     * The series object associated with the point.
     *
     * @name Highcharts.Point#series
     * @type {Highcharts.Series}
     */
    series: Series;
    /**
     * The attributes of the rendered SVG shape like in `column` or `pie`
     * series.
     *
     * @readonly
     * @name Highcharts.Point#shapeArgs
     * @type {Readonly<Highcharts.SVGAttributes>|undefined}
     */
    shapeArgs?: SVGAttributes;
    /**
     * Defines the tooltip's position for a data point in a chart. It is an
     * array of numbers representing the coordinates for the tooltip's
     * placement, allowing for precise control over its location.
     *
     * @readonly
     * @name Highcharts.Point#tooltipPos
     * @type {Readonly<Array<number>>|undefined}
     */
    tooltipPos?: Array<number>;
    /**
     * The total of values in either a stack for stacked series, or a pie in a
     * pie series.
     *
     * @name Highcharts.Point#total
     * @type {number|undefined}
     */
    total?: number;
    /**
     * For certain series types, like pie charts, where individual points can
     * be shown or hidden.
     *
     * @name Highcharts.Point#visible
     * @type {boolean}
     * @default true
     */
    visible: boolean;
    /**
     * The x value of the point.
     *
     * @name Highcharts.Point#x
     * @type {number}
     */
    x: number;
    /**
     * The y value of the point.
     *
     * @name Highcharts.Point#y
     * @type {number|undefined}
     */
    y?: (number | null);
    /**
     * Get the CSS class names for individual points. Used internally where the
     * returned value is set on every point.
     *
     * @function Highcharts.Point#getClassName
     *
     * @return {string}
     *         The class names.
     */
    getClassName(): string;
    /**
     * In a series with `zones`, return the zone that the point belongs to.
     *
     * @function Highcharts.Point#getZone
     *
     * @return {Highcharts.SeriesZonesOptionsObject}
     *         The zone item.
     */
    getZone(): Series.ZoneObject;
    /**
     * Transform number or array configs into objects. Also called for object
     * configs. Used internally to unify the different configuration formats for
     * points. For example, a simple number `10` in a line series will be
     * transformed to `{ y: 10 }`, and an array config like `[1, 10]` in a
     * scatter series will be transformed to `{ x: 1, y: 10 }`.
     *
     * @function Highcharts.Point#optionsToObject
     *
     * @param {Highcharts.PointOptionsType} options
     * Series data options.
     *
     * @return {Highcharts.Dictionary<*>}
     * Transformed point options.
     */
    optionsToObject(options: (PointOptions | PointShortOptions)): this['options'];
    /**
     * Get the pixel position of the point relative to the plot area.
     *
     * @function Highcharts.Point#pos
     *
     * @sample highcharts/point/position
     *         Get point's position in pixels.
     *
     * @param {boolean} chartCoordinates
     * If true, the returned position is relative to the full chart area.
     * If false, it is relative to the plot area determined by the axes.
     *
     * @param {number|undefined} plotX
     * A custom plot x position to be computed. Used internally for getting the
     * starting point of an animation.
     *
     * @param {number|undefined} plotY
     * A custom plot y position to be computed. Used internally for getting the
     * starting point of an animation, and for some series types that have
     * multiple `y` positions, like area range (low and high values).
     *
     * @return {Array<number>|undefined}
     * Coordinates of the point if the point exists.
     */
    pos(chartCoordinates?: boolean, plotX?: number | undefined, plotY?: number | undefined): [number, number] | undefined;
    /**
     * Set a value in an object, on the property defined by key. The key
     * supports nested properties using dot notation. The function modifies the
     * input object and does not make a copy.
     *
     * @function Highcharts.Point#setNestedProperty<T>
     *
     * @param {T} object
     *        The object to set the value on.
     *
     * @param {*} value
     *        The value to set.
     *
     * @param {string} key
     *        Key to the property to set.
     *
     * @return {T}
     *         The modified object.
     */
    setNestedProperty<T>(object: T, value: any, key: string): T;
    /**
     * Extendable method for formatting each point's tooltip line.
     *
     * @function Highcharts.Point#tooltipFormatter
     *
     * @param {string} pointFormat
     *        The point format.
     *
     * @return {string}
     *         A string to be concatenated in to the common tooltip text.
     */
    tooltipFormatter(pointFormat: string): string;
    /**
     * Update point with new options (typically x/y data) and optionally redraw
     * the series.
     *
     * @sample highcharts/members/point-update-column/
     *         Update column value
     * @sample highcharts/members/point-update-pie/
     *         Update pie slice
     * @sample maps/members/point-update/
     *         Update map area value in Highmaps
     *
     * @function Highcharts.Point#update
     *
     * @param {Highcharts.PointOptionsType} options
     *        The point options. Point options are handled as described under
     *        the `series.type.data` item for each series type. For example
     *        for a line series, if options is a single number, the point will
     *        be given that number as the marin y value. If it is an array, it
     *        will be interpreted as x and y values respectively. If it is an
     *        object, advanced options are applied.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the point is updated. If doing
     *        more operations on the chart, it is best practice to set
     *        `redraw` to false and call `chart.redraw()` after.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation=true]
     *        Whether to apply animation, and optionally animation
     *        configuration.
     *
     * @emits Highcharts.Point#event:update
     */
    update(options: (PointOptions | PointShortOptions), redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>), runEvent?: boolean): void;
    /**
     * Remove a point and optionally redraw the series and if necessary the axes
     *
     * @sample highcharts/plotoptions/series-point-events-remove/
     *         Remove point and confirm
     * @sample highcharts/members/point-remove/
     *         Remove pie slice
     * @sample maps/members/point-remove/
     *         Remove selected points in Highmaps
     *
     * @function Highcharts.Point#remove
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or wait for an explicit call. When
     *        doing more operations on the chart, for example running
     *        `point.remove()` in a loop, it is best practice to set `redraw`
     *        to false and call `chart.redraw()` after.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation=false]
     *        Whether to apply animation, and optionally animation
     *        configuration.
     */
    remove(redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>)): void;
    /**
     * Toggle the selection status of a point.
     *
     * @see Highcharts.Chart#getSelectedPoints
     *
     * @sample highcharts/members/point-select/
     *         Select a point from a button
     * @sample highcharts/members/point-select-lasso/
     *         Lasso selection
     * @sample highcharts/chart/events-selection-points/
     *         Rectangle selection
     * @sample maps/series/data-id/
     *         Select a point in Highmaps
     *
     * @function Highcharts.Point#select
     *
     * @param {boolean} [selected]
     * When `true`, the point is selected. When `false`, the point is
     * unselected. When `null` or `undefined`, the selection state is toggled.
     *
     * @param {boolean} [accumulate=false]
     * When `true`, the selection is added to other selected points.
     * When `false`, other selected points are deselected. Internally in
     * Highcharts, when
     * [allowPointSelect](https://api.highcharts.com/highcharts/plotOptions.series.allowPointSelect)
     * is `true`, selected points are accumulated on Control, Shift or Cmd
     * clicking the point.
     *
     * @emits Highcharts.Point#event:select
     * @emits Highcharts.Point#event:unselect
     */
    select(selected?: boolean, accumulate?: boolean): void;
    /**
     * Runs on mouse over the point. Called internally from mouse and touch
     * events.
     *
     * @function Highcharts.Point#onMouseOver
     *
     * @param {Highcharts.PointerEventObject} [e]
     *        The event arguments.
     */
    onMouseOver(e?: PointerEvent): void;
    /**
     * Runs on mouse out from the point. Called internally from mouse and touch
     * events.
     *
     * @function Highcharts.Point#onMouseOut
     * @emits Highcharts.Point#event:mouseOut
     */
    onMouseOut(): void;
    /**
     * Set the point's state.
     *
     * @function Highcharts.Point#setState
     *
     * @param {Highcharts.PointStateValue|""} [state]
     *        The new state, can be one of `'hover'`, `'select'`, `'inactive'`,
     *        or `''` (an empty string), `'normal'` or `undefined` to set to
     *        normal state.
     * @param {boolean} [move]
     *        State for animation.
     *
     * @emits Highcharts.Point#event:afterSetState
     */
    setState(state?: StatesOptionsKey, move?: boolean): void;
    /**
     * Get the path definition for the halo, which is usually a shadow-like
     * circle around the currently hovered point.
     *
     * @function Highcharts.Point#haloPath
     *
     * @param {number} size
     *        The radius of the circular halo.
     *
     * @return {Highcharts.SVGPathArray}
     *         The path definition.
     */
    haloPath(size: number): SVGPath;
}
interface Point extends PointBase {
}
export default Point;
