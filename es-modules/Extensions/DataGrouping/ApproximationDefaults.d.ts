import type { ApproximationArray } from './ApproximationType';
declare function average(arr: ApproximationArray): (null | number | undefined);
/**
 * The same as average, but for series with multiple values, like area ranges.
 */
declare function averages(): (Array<(null | number | undefined)> | undefined);
declare function close(arr: ApproximationArray): (null | number | undefined);
declare function high(arr: ApproximationArray): (null | number | undefined);
/**
 * HLC, OHLC and range are special cases where a multidimensional array is input
 * and an array is output.
 */
declare function hlc(high: ApproximationArray, low: ApproximationArray, close: ApproximationArray): ([number, number, number] | undefined);
declare function low(arr: ApproximationArray): (null | number | undefined);
declare function ohlc(open: ApproximationArray, high: ApproximationArray, low: ApproximationArray, close: ApproximationArray): ([number, number, number, number] | undefined);
declare function open(arr: ApproximationArray): (null | number | undefined);
declare function range(low: ApproximationArray, high: ApproximationArray): ([number, number] | null | undefined);
declare function sum(arr: ApproximationArray): (null | number | undefined);
declare module './ApproximationType' {
    interface ApproximationTypeRegistry {
        average: typeof average;
        averages: typeof averages;
        close: typeof close;
        high: typeof high;
        hlc: typeof hlc;
        low: typeof low;
        ohlc: typeof ohlc;
        open: typeof open;
        range: typeof range;
        sum: typeof sum;
    }
}
export {};
