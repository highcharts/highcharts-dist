import CrookedLine from './CrookedLine.js';
declare namespace InfinityLine {
    /**
     * Options for the infinity line annotation type.
     *
     * @sample highcharts/annotations-advanced/infinity-line/
     *         Infinity line
     *
     * @extends      annotations.types.crookedLine
     * @product      highstock
     * @optionparent annotations.types.infinityLine
     */
    interface Options extends CrookedLine.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends CrookedLine.TypeOptions {
        type: string;
    }
}
export default InfinityLine;
