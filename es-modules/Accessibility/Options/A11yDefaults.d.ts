import type A11yOptions from './A11yOptions';
import type { DeepPartial } from '../../Shared/Types';
/**
 * Formatter callback for the accessibility announcement.
 *
 * @callback Highcharts.AccessibilityAnnouncementFormatter
 *
 * @param {Array<Highcharts.Series>} updatedSeries
 * Array of all series that received updates. If an announcement is already
 * queued, the series that received updates for that announcement are also
 * included in this array.
 *
 * @param {Highcharts.Series} [addedSeries]
 * This is provided if {@link Highcharts.Chart#addSeries} was called, and there
 * is a new series. In that case, this argument is a reference to the new
 * series.
 *
 * @param {Highcharts.Point} [addedPoint]
 * This is provided if {@link Highcharts.Series#addPoint} was called, and there
 * is a new point. In that case, this argument is a reference to the new point.
 *
 * @return {false|string}
 * The function should return a string with the text to announce to the user.
 * Return empty string to not announce anything. Return `false` to use the
 * default announcement format.
 */
/**
 * @interface Highcharts.PointAccessibilityOptionsObject
 */ /**
* Provide a description of the data point, announced to screen readers.
* @name Highcharts.PointAccessibilityOptionsObject#description
* @type {string|undefined}
* @requires modules/accessibility
* @since 7.1.0
*/ /**
* Enable or disable exposing the point to assistive technology
* @name Highcharts.PointAccessibilityOptionsObject#enabled
* @type {boolean|undefined}
* @requires modules/accessibility
* @since 9.0.1
*/
/**
* @name Highcharts.PointOptionsObject#accessibility
* @type {Highcharts.PointAccessibilityOptionsObject|undefined}
* @requires modules/accessibility
* @since 7.1.0
*/
/**
 * @callback Highcharts.ScreenReaderClickCallbackFunction
 *
 * @param {global.MouseEvent} evt
 *        Mouse click event
 *
 * @param {Highcharts.Chart} [chart]
 *        Chart context.
 *
 * @param {global.GlobalEventHandlers} [ctx]
 *        Since v12.6.0, the global event handlers context passed as an extra
 *        argument for arrow functions.
 *
 * @return {void}
 */
/**
 * Creates a formatted string for the screen reader module.
 *
 * @callback Highcharts.ScreenReaderFormatterCallbackFunction<T>
 *
 * @param {T} context
 *        Context to format
 *
 * @param {*} [outerContext]
 *        Since v12.6.0, the outer context passed as an extra argument for
 *        arrow functions.
 *
 * @return {string}
 *         Formatted string for the screen reader module.
 */
declare const Options: DeepPartial<A11yOptions>;
export default Options;
