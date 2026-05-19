import type Chart from '../../Chart/Chart';
import type { ColorAxisDataClassOptions, ColorAxisOptions } from './ColorAxisOptions';
import type { DeepPartial } from '../../../Shared/Types';
import type Point from '../../Series/Point';
import type PointerEvent from '../../PointerEvent';
import Axis from '../Axis.js';
import ColorAxisBase from './ColorAxisBase.js';
import ColorAxisComposition from './ColorAxisComposition.js';
declare module '../../Axis/AxisBase' {
    interface AxisBase {
        labelLeft?: number;
        labelRight?: number;
    }
}
declare module '../../Chart/ChartBase' {
    interface ChartBase {
        colorAxis?: Array<ColorAxis>;
    }
}
declare module '../../../Core/Options' {
    interface Options {
        colorAxis?: (DeepPartial<ColorAxisOptions> | Array<DeepPartial<ColorAxisOptions>>);
    }
}
declare module '../../Series/PointBase' {
    interface PointBase {
        dataClass?: number;
    }
}
declare module '../../Series/SeriesBase' {
    interface SeriesBase {
        axisTypes?: Array<string>;
        colorAxis?: ColorAxis;
        colorKey?: string;
        minColorValue?: number;
        maxColorValue?: number;
    }
}
/**
 * The ColorAxis object for inclusion in gradient legends.
 *
 * @class
 * @name Highcharts.ColorAxis
 * @augments Highcharts.Axis
 *
 * @param {Highcharts.Chart} chart
 * The related chart of the color axis.
 *
 * @param {Highcharts.ColorAxisOptions} userOptions
 * The color axis options for initialization.
 */
declare class ColorAxis extends Axis implements ColorAxisBase {
    /**
     * Initializes the color axis.
     *
     * @function Highcharts.ColorAxis#init
     *
     * @param {Highcharts.Chart} chart
     * The related chart of the color axis.
     *
     * @param {Highcharts.ColorAxisOptions} userOptions
     * The color axis options for initialization.
     */
    init(chart: Chart, userOptions: Partial<ColorAxisOptions>): void;
    /**
     * Returns true if the series has points at all.
     *
     * @function Highcharts.ColorAxis#hasData
     *
     * @return {boolean}
     * True, if the series has points, otherwise false.
     */
    hasData(): boolean;
    /**
     * Internal function to draw a crosshair.
     *
     * @function Highcharts.ColorAxis#drawCrosshair
     *
     * @param {Highcharts.PointerEventObject} [e]
     *        The event arguments from the modified pointer event, extended with
     *        `chartX` and `chartY`
     *
     * @param {Highcharts.Point} [point]
     *        The Point object if the crosshair snaps to points.
     *
     * @emits Highcharts.ColorAxis#event:afterDrawCrosshair
     * @emits Highcharts.ColorAxis#event:drawCrosshair
     */
    drawCrosshair(e?: PointerEvent, point?: ColorAxisComposition.PointComposition): void;
    /**
     * Updates a color axis instance with a new set of options. The options are
     * merged with the existing options, so only new or altered options need to
     * be specified.
     *
     * @function Highcharts.ColorAxis#update
     *
     * @param {Highcharts.ColorAxisOptions} newOptions
     * The new options that will be merged in with existing options on the color
     * axis.
     *
     * @param {boolean} [redraw]
     * Whether to redraw the chart after the color axis is altered. If doing
     * more operations on the chart, it is a good idea to set redraw to `false`
     * and call {@link Highcharts.Chart#redraw} after.
     */
    update(newOptions: DeepPartial<ColorAxisOptions>, redraw?: boolean): void;
    /**
     * Removes the color axis and the related legend item.
     *
     * @function Highcharts.ColorAxis#remove
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart following the remove.
     */
    remove(redraw?: boolean): void;
}
interface ColorAxis extends ColorAxisBase {
    coll: 'colorAxis';
    options: ColorAxisOptions;
}
declare namespace ColorAxis {
    interface LegendItemObject extends ColorAxisDataClassOptions {
        [key: string]: any;
        chart: Chart;
        name: string;
        options: object;
        drawLegendSymbol: Function;
        visible: boolean;
        setState: Point['setState'];
        isDataClass: true;
        setVisible: Function;
    }
}
export default ColorAxis;
