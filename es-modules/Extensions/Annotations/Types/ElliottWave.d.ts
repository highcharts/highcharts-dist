import type ColorType from '../../../Core/Color/ColorType';
import CrookedLine from './CrookedLine.js';
import { AnnotationLabelOptionsOptions } from '../AnnotationOptions';
declare namespace ElliottWave {
    interface LabelOptions extends AnnotationLabelOptionsOptions {
        backgroundColor: ColorType;
        borderWidth: number;
        y: number;
    }
    /**
     * Options for the elliott wave annotation type.
     *
     * @sample highcharts/annotations-advanced/elliott-wave/
     *         Elliott wave
     *
     * @extends      annotations.types.crookedLine
     * @product      highstock
     * @optionparent annotations.types.elliottWave
     */
    interface Options extends CrookedLine.Options {
        labelOptions: LabelOptions;
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends CrookedLine.TypeOptions {
    }
}
export default ElliottWave;
