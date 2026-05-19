import type Accessibility from '../Accessibility';
import type Axis from '../../Core/Axis/Axis';
import type Chart from '../../Core/Chart/Chart';
import type { DOMElementType } from '../../Core/Renderer/DOMElementType';
import type Point from '../../Core/Series/Point';
import type Series from '../../Core/Series/Series';
import type HTMLElement from '../../Core/Renderer/HTML/HTMLElement';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
/**
 * Fire an event on an element that is either wrapped by Highcharts,
 * or a DOM element.
 * @private
 */
declare function fireEventOnWrappedOrUnwrappedElement(el: (HTMLElement | SVGElement | DOMElementType), eventObject: Event): void;
/**
 * @private
 */
declare function getChartTitle(chart: Accessibility.ChartComposition): string;
/**
 * Return string with the axis name/title.
 * @private
 */
declare function getAxisDescription(axis: Axis): string;
/**
 * Return string with text description of the axis range.
 * @private
 * @param {Highcharts.Axis} axis
 * The axis to get range desc of.
 * @return {string}
 * A string with the range description for the axis.
 */
declare function getAxisRangeDescription(axis: Axis): string;
/**
 * Get the DOM element for the first point in the series.
 * @private
 * @param {Highcharts.Series} series
 * The series to get element for.
 * @return {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement|undefined}
 * The DOM element for the point.
 */
declare function getSeriesFirstPointElement(series: Series): (DOMElementType | undefined);
/**
 * Get the DOM element for the series that we put accessibility info on.
 * @private
 * @param {Highcharts.Series} series
 * The series to get element for.
 * @return {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement|undefined}
 * The DOM element for the series
 */
declare function getSeriesA11yElement(series: Series): (DOMElementType | undefined);
/**
 * Remove aria-hidden from element. Also unhides parents of the element, and
 * hides siblings that are not explicitly unhidden.
 * @private
 */
declare function unhideChartElementFromAT(chart: Chart, element: DOMElementType): void;
/**
 * Hide series from screen readers.
 * @private
 */
declare function hideSeriesFromAT(series: Series): void;
/**
 * Get series objects by series name.
 * @private
 */
declare function getSeriesFromName<T extends Chart>(chart: T, name: string): T['series'];
/**
 * Get point in a series from x/y values.
 * @private
 */
declare function getPointFromXY<T extends Series>(series: Array<T>, x: number, y: number): (T['points'][0] | undefined);
/**
 * Get relative position of point on an x/y axis from 0 to 1.
 * @private
 */
declare function scrollAxisToPoint(point: Point): void;
declare const ChartUtilities: {
    fireEventOnWrappedOrUnwrappedElement: typeof fireEventOnWrappedOrUnwrappedElement;
    getChartTitle: typeof getChartTitle;
    getAxisDescription: typeof getAxisDescription;
    getAxisRangeDescription: typeof getAxisRangeDescription;
    getPointFromXY: typeof getPointFromXY;
    getSeriesFirstPointElement: typeof getSeriesFirstPointElement;
    getSeriesFromName: typeof getSeriesFromName;
    getSeriesA11yElement: typeof getSeriesA11yElement;
    unhideChartElementFromAT: typeof unhideChartElementFromAT;
    hideSeriesFromAT: typeof hideSeriesFromAT;
    scrollAxisToPoint: typeof scrollAxisToPoint;
};
export default ChartUtilities;
