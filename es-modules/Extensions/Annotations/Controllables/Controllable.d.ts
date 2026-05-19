import type Annotation from '../Annotation';
import type AnnotationChart from '../AnnotationChart';
import type { AnnotationPoint } from '../AnnotationSeries';
import type ControllableBase from './ControllableBase';
import ControlTarget from '../ControlTarget.js';
declare abstract class Controllable implements ControlTarget {
    /**
     * @name Highcharts.AnnotationControllable#annotation
     * @type {Highcharts.Annotation}
     */
    annotation: Annotation;
    /**
     * @name Highcharts.AnnotationControllable#chart
     * @type {Highcharts.Chart}
     */
    chart: AnnotationChart;
    /**
     * @name Highcharts.AnnotationControllable#collection
     * @type {string}
     */
    collection: ('labels' | 'shapes');
}
/**
 * It provides methods for handling points, control points and points
 * transformations.
 *
 * @interface Highcharts.AnnotationControllable
 */
interface Controllable extends ControllableBase, ControlTarget {
    /**
     * @name Highcharts.AnnotationControllable#points
     * @type {Array<Highcharts.Point>}
     */
    points: Array<AnnotationPoint>;
}
export default Controllable;
