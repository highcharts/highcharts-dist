import type { AnnotationOptions, AnnotationTypeOptions } from '../AnnotationOptions';
import type { AnnotationMockPointOptionsObject } from '../AnnotationMockPointOptionsObject';
declare namespace CrookedLine {
    /**
     * Options for the crooked line annotation type.
     *
     * @sample highcharts/annotations-advanced/crooked-line/
     *         Crooked line
     *
     * @product      highstock
     * @optionparent annotations.types.crookedLine
     */
    interface Options extends AnnotationOptions {
        /**
         * Additional options for an annotation with the type.
         */
        typeOptions: AnnotationTypeOptions;
    }
    interface TypeOptions extends AnnotationTypeOptions {
        points?: Array<AnnotationMockPointOptionsObject>;
    }
}
export default CrookedLine;
