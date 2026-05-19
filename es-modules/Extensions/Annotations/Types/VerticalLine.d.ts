import type { AnnotationLabelOptions, AnnotationOptions, AnnotationShapeOptionsOptions, AnnotationTypeOptions } from '../AnnotationOptions';
declare namespace VerticalLine {
    /**
     * Options for the vertical line annotation type.
     *
     * @sample highcharts/annotations-advanced/vertical-line/
     *         Vertical line
     *
     * @extends      annotations.types.crookedLine
     * @excluding    labels, shapes, controlPointOptions
     * @product      highstock
     * @optionparent annotations.types.verticalLine
     */
    interface Options extends AnnotationOptions {
        typeOptions?: TypeOptions;
    }
    interface TypeLabelOptions extends AnnotationLabelOptions {
        offset?: number;
    }
    interface TypeOptions extends AnnotationTypeOptions {
        /**
         * Connector options.
         *
         * @excluding height, r, type, width
         */
        connector?: TypeConnectorOptions;
        /**
         * Label options.
         */
        label?: TypeLabelOptions;
    }
    interface TypeConnectorOptions extends AnnotationShapeOptionsOptions {
        height?: undefined;
        r?: undefined;
        type?: undefined;
        width?: undefined;
    }
}
export default VerticalLine;
