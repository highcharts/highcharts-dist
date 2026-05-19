import type { DeepPartial } from '../../Shared/Types';
import type { SeriesTypeRegistry } from './SeriesType';
import type Series from './Series.js';
declare namespace SeriesRegistry {
    /**
     * Registers class pattern of a series.
     *
     * @param {string} seriesType
     * The series type as an identifier string in lower case.
     *
     * @param {Function} SeriesClass
     * The series class as a class pattern or a constructor function with
     * prototype.
     *
     * @return {boolean}
     * True if series type was added, false if it already exists.
     */
    function registerSeriesType(seriesType: string, SeriesClass: typeof Series): boolean;
    /**
     * Old factory to create new series prototypes.
     *
     * @deprecated
     * @function Highcharts.seriesType
     *
     * @param {string} type
     * The series type name.
     *
     * @param {string} parent
     * The parent series type name. Use `line` to inherit from the basic
     * {@link Series} object.
     *
     * @param {Highcharts.SeriesOptionsType|Highcharts.Dictionary<*>} options
     * The additional default options that are merged with the parent's options.
     *
     * @param {Highcharts.Dictionary<*>} [seriesProto]
     * The properties (functions and primitives) to set on the new prototype.
     *
     * @param {Highcharts.Dictionary<*>} [pointProto]
     * Members for a series-specific extension of the {@link Point} prototype if
     * needed.
     *
     * @return {Highcharts.Series}
     * The newly created prototype as extended from {@link Series} or its
     * derivatives.
     */
    function seriesType<T extends typeof Series>(type: Extract<keyof SeriesTypeRegistry, string>, parent: (keyof SeriesTypeRegistry | undefined), options: T['prototype']['options'], seriesProto?: DeepPartial<T['prototype']>, pointProto?: DeepPartial<T['prototype']['pointClass']['prototype']>): T;
}
export default SeriesRegistry;
