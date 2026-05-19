import type AnnotationChart from '../../Extensions/Annotations/AnnotationChart';
import type { AnnotationPoint } from '../../Extensions/Annotations/AnnotationSeries';
import type { ControllableLabelType } from '../../Extensions/Annotations/Controllables/ControllableType';
/**
 * Describe an annotation label.
 *
 * @private
 * @param {Object} label The annotation label object to describe
 * @return {string} The description for the label.
 */
declare function getAnnotationLabelDescription(label: ControllableLabelType): string;
/**
 * Return array of HTML strings for each annotation label in the chart.
 *
 * @private
 * @param {Highcharts.Chart} chart The chart to get annotation info on.
 * @return {Array<string>} Array of strings with HTML content for each annotation label.
 */
declare function getAnnotationListItems(chart: AnnotationChart): string[];
/**
 * Return the annotation info for a chart as string.
 *
 * @private
 * @param {Highcharts.Chart} chart The chart to get annotation info on.
 * @return {string} String with HTML content or empty string if no annotations.
 */
declare function getAnnotationsInfoHTML(chart: AnnotationChart): string;
/**
 * Return the texts for the annotation(s) connected to a point, or empty array
 * if none.
 *
 * @private
 * @param {Highcharts.Point} point The data point to get the annotation info from.
 * @return {Array<string>} Annotation texts
 */
declare function getPointAnnotationTexts(point: AnnotationPoint): Array<string>;
declare const AnnotationsA11y: {
    getAnnotationsInfoHTML: typeof getAnnotationsInfoHTML;
    getAnnotationLabelDescription: typeof getAnnotationLabelDescription;
    getAnnotationListItems: typeof getAnnotationListItems;
    getPointAnnotationTexts: typeof getPointAnnotationTexts;
};
export default AnnotationsA11y;
