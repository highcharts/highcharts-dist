import type { AxisOptions } from './AxisOptions';
import type ColorType from '../Color/ColorType';
declare module './AxisOptions' {
    interface AxisOptions {
        grid?: GridAxisOptions;
    }
}
/**
 * Set grid options for the axis labels. Requires Highcharts Gantt.
 *
 * @since     6.2.0
 * @product   gantt
 */
export interface GridAxisOptions {
    /**
     * Set border color for the label grid lines.
     *
     * @default   #e6e6e6
     */
    borderColor?: ColorType;
    /**
     * Set border width of the label grid lines.
     *
     * @default   1
     */
    borderWidth?: number;
    /**
     * Set cell height for grid axis labels. By default this is calculated from
     * font size. This option only applies to horizontal axes. For vertical
     * axes, check the [#yAxis.staticScale](yAxis.staticScale) option.
     *
     * @sample gantt/grid-axis/cellheight
     *         Gantt chart with custom cell height
     */
    cellHeight?: number;
    /**
     * Set specific options for each column (or row for horizontal axes) in the
     * grid. Each extra column/row is its own axis, and the axis options can be
     * set here.
     *
     * @sample gantt/demo/left-axis-table
     *         Left axis as a table
     * @sample gantt/demo/treegrid-columns
     *         Collapsible tree grid with columns
     * @sample gantt/grid-axis/horizontal-columns
     *         Horizontal grid axis with columns rendered as rows
     *
     */
    columns?: Array<AxisOptions>;
    /**
     * Enable grid on the axis labels. Defaults to true for Gantt charts.
     *
     * @default   true
     * @since     6.2.0
     * @product   gantt
     */
    enabled?: boolean;
}
