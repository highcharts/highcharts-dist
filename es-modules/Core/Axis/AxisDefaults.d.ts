import type { DeepPartial } from '../../Shared/Types';
import type { XAxisOptions, YAxisOptions } from './AxisOptions';
declare namespace AxisDefaults {
    /**
     * The X axis or category axis. Normally this is the horizontal axis,
     * though if the chart is inverted this is the vertical axis. In case of
     * multiple axes, the xAxis node is an array of configuration objects.
     *
     * See the [Axis class](/class-reference/Highcharts.Axis) for programmatic
     * access to the axis.
     *
     * @productdesc {highmaps}
     * In Highmaps, the axis is hidden, but it is used behind the scenes to
     * control features like zooming and panning. Zooming is in effect the same
     * as setting the extremes of one of the exes.
     *
     * @type         {*|Array<*>}
     * @optionparent xAxis
     */
    const xAxis: XAxisOptions;
    /**
     * The Z axis or depth axis for 3D plots.
     *
     * See the [Axis class](/class-reference/Highcharts.Axis) for programmatic
     * access to the axis.
     *
     * @sample {highcharts} highcharts/3d/scatter-zaxis-categories/
     *         Z-Axis with Categories
     * @sample {highcharts} highcharts/3d/scatter-zaxis-grid/
     *         Z-Axis with styling
     *
     * @type      {*|Array<*>}
     * @extends   xAxis
     * @since     5.0.0
     * @product   highcharts
     * @excluding breaks, crosshair, height, left, lineColor, lineWidth,
     *            nameToX, showEmpty, top, width
     * @apioption zAxis
     */
    /**
     * The Y axis or value axis. Normally this is the vertical axis,
     * though if the chart is inverted this is the horizontal axis.
     * In case of multiple axes, the yAxis node is an array of
     * configuration objects.
     *
     * See [the Axis object](/class-reference/Highcharts.Axis) for programmatic
     * access to the axis.
     *
     * @type         {*|Array<*>}
     * @extends      xAxis
     * @excluding    currentDateIndicator,ordinal,overscroll
     * @optionparent yAxis
     */
    const yAxis: DeepPartial<YAxisOptions>;
}
export default AxisDefaults;
