import type { AnnotationShapeOptionsOptions } from '../AnnotationOptions';
import InfinityLine from './InfinityLine.js';
declare namespace Pitchfork {
    /**
     * Options for the pitchfork annotation type.
     *
     * @sample highcharts/annotations-advanced/pitchfork/
     *         Pitchfork
     *
     * @extends      annotations.types.infinityLine
     * @product      highstock
     * @optionparent annotations.types.pitchfork
     */
    interface Options extends InfinityLine.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends InfinityLine.TypeOptions {
        /**
         * Inner background options.
         *
         * @extends   annotations.shapeOptions
         * @excluding height, r, type, width
         */
        innerBackground: AnnotationShapeOptionsOptions;
        /**
         * Outer background options.
         *
         * @extends   annotations.shapeOptions
         * @excluding height, r, type, width
         */
        outerBackground: AnnotationShapeOptionsOptions;
    }
}
export default Pitchfork;
