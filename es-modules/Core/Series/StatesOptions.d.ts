import type ColorType from '../Color/ColorType';
import type DashStyleValue from '../Renderer/DashStyleValue';
import type { DeepPartial } from '../../Shared/Types';
import type { PointMarkerOptions } from './PointOptions';
import type SeriesOptions from './SeriesOptions';
export interface StateClassWithOptions {
}
export type StateGenericOptions<T extends SeriesOptions | PointMarkerOptions> = (DeepPartial<Omit<T, ('states' | 'data')>>);
export interface StateHoverOptions {
    color?: ColorType;
    dashStyle?: DashStyleValue;
}
export interface StateInactiveOptions {
    color?: ColorType;
    dashStyle?: DashStyleValue;
}
export interface StateNormalOptions {
    color?: ColorType;
    dashStyle?: DashStyleValue;
}
export interface StateSelectOptions extends StateHoverOptions {
    color?: ColorType;
    dashStyle?: DashStyleValue;
}
export interface StatesOptions {
    hover?: StateHoverOptions;
    inactive?: StateInactiveOptions;
    normal?: StateNormalOptions;
    select?: StateSelectOptions;
}
/**
 * Possible key values for the series state options.
 */
export type StatesOptionsKey = ('' | keyof StatesOptions);
/**
 * Possible key values for the point state options.
 *
 * @typedef {"hover"|"inactive"|"normal"|"select"} Highcharts.PointStateValue
 */
export type PointStateValue = StatesOptionsKey;
export default StatesOptions;
