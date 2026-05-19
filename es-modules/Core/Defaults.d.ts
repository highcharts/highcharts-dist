import type { DeepPartial } from '../Shared/Types';
import type { DefaultOptions, Options } from './Options';
import Time from './Time.js';
declare module './GlobalsBase' {
    interface GlobalsBase {
        /**
         * Global default settings.
         *
         * @name Highcharts.defaultOptions
         * @type {Highcharts.Options}
         */
        defaultOptions: DefaultOptions;
        time: Time;
    }
}
/**
 * Get the updated default options. Until 3.0.7, merely exposing defaultOptions
 * for outside modules wasn't enough because the setOptions method created a new
 * object.
 *
 * @function Highcharts.getOptions
 *
 * @return {Highcharts.Options}
 * Default options.
 */
export declare function getOptions(): DefaultOptions;
/**
 * Merge the default options with custom options and return the new options
 * structure. Commonly used for defining reusable templates.
 *
 * @sample highcharts/members/setoptions Applying a global theme
 *
 * @function Highcharts.setOptions
 *
 * @param {Highcharts.Options} options
 * The new custom chart options.
 *
 * @return {Highcharts.Options}
 * Updated options.
 */
declare function setOptions(options: DeepPartial<DefaultOptions>): Options;
declare const DefaultOptions: {
    defaultOptions: DefaultOptions;
    defaultTime: Time;
    getOptions: typeof getOptions;
    setOptions: typeof setOptions;
};
export default DefaultOptions;
