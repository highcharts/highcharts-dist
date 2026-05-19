import type { AxisAccessibilityOptions, SeriesAccessibilityOptions } from './A11yOptions';
import Chart from '../../Core/Chart/Chart.js';
declare module '../../Core/Axis/AxisOptions' {
    interface AxisOptions {
        /** @deprecated */
        description?: AxisAccessibilityOptions['description'];
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        /**
         * Deprecated. Use
         * [plotOptions.series.accessibility.description](#plotOptions.series.accessibility.description)
         * instead.
         *
         * A description of the series to add to the screen reader information
         * about the series.
         *
         * @since      5.0.0
         * @requires   modules/accessibility
         * @deprecated 8.0.0
         */
        description?: SeriesAccessibilityOptions['description'];
        /**
         * Deprecated. Use
         * [plotOptions.series.accessibility.exposeAsGroupOnly](#plotOptions.series.accessibility.exposeAsGroupOnly)
         * instead.
         *
         * Expose only the series element to screen readers, not its points.
         *
         * @since      5.0.0
         * @requires   modules/accessibility
         * @deprecated 8.0.0
         */
        exposeElementToA11y?: SeriesAccessibilityOptions['exposeAsGroupOnly'];
        /**
         * Deprecated. Use
         * [plotOptions.series.accessibility.point.descriptionFormatter](#plotOptions.series.accessibility.point.descriptionFormatter)
         * instead.
         *
         * Same as
         * [accessibility.series.descriptionFormatter](#accessibility.series.descriptionFormatter),
         * but for an individual series. Overrides the chart wide configuration.
         *
         * @requires   modules/accessibility
         * @since      5.0.12
         * @deprecated 8.0.0
         */
        pointDescriptionFormatter?: SeriesAccessibilityOptions['point']['descriptionFormatter'];
        /**
         * Deprecated. Use
         * [plotOptions.series.accessibility.point.descriptionFormat](#plotOptions.series.accessibility.point.descriptionFormat)
         * instead.
         *
         * Same as
         * [accessibility.point.descriptionFormat](#accessibility.point.descriptionFormat),
         * but for an individual series. Overrides the chart wide configuration.
         *
         * @requires   modules/accessibility
         * @since      11.1.0
         * @deprecated next
         */
        pointDescriptionFormat?: SeriesAccessibilityOptions['point']['descriptionFormat'];
        /**
         * Deprecated. Use
         * [series.accessibility.keyboardNavigation](#plotOptions.series.accessibility.keyboardNavigation)
         * instead.
         *
         * If set to `true`, the accessibility module will skip past the points
         * in this series for keyboard navigation.
         *
         * @requires   modules/accessibility
         * @since      5.0.12
         * @deprecated 8.0.0
         */
        skipKeyboardNavigation?: boolean;
    }
}
/**
 * Copy options that are deprecated over to new options. Logs warnings to
 * console if deprecated options are used.
 *
 * @private
 */
declare function copyDeprecatedOptions(chart: Chart): void;
export default copyDeprecatedOptions;
