import type ColorType from '../Color/ColorType';
declare module '../Chart/ChartBase' {
    interface ChartBase {
        is3d(): boolean;
    }
}
declare module '../Chart/ChartOptions' {
    interface ChartOptions {
        /**
         * Options to render chart in 3 dimensions.
         *
         * @since    4.0
         * @product  highcharts
         * @requires highcharts-3d
         */
        options3d?: ChartOptions3D;
    }
}
/**
 * Options to render charts in 3 dimensions. This feature requires
 * `highcharts-3d.js`, found in the download package or online at
 * [code.highcharts.com/highcharts-3d.js](https://code.highcharts.com/highcharts-3d.js).
 *
 * @since    4.0
 * @product  highcharts
 * @requires highcharts-3d
 */
interface ChartOptions3D {
    /**
     * One of the two rotation angles for the chart.
     *
     * @since   4.0
     * @product highcharts
     */
    alpha?: number;
    axisLabelPosition?: ('auto' | null);
    /**
     * One of the two rotation angles for the chart.
     *
     * @since   4.0
     * @product highcharts
     */
    beta?: number;
    /**
     * The total depth of the chart.
     *
     * @since   4.0
     * @product highcharts
     */
    depth?: number;
    /**
     * Whether to render the chart using the 3D functionality.
     *
     * @since   4.0
     * @product highcharts
     */
    enabled?: boolean;
    /**
     * Whether the 3d box should automatically adjust to the chart
     * plot area.
     *
     * @since   4.2.4
     * @product highcharts
     */
    fitToPlot?: boolean;
    /**
     * Provides the option to draw a frame around the charts by
     * defining a bottom, front and back panel.
     *
     * @since    4.0
     * @product  highcharts
     * @requires highcharts-3d
     */
    frame?: Chart3D.FrameOptions;
    viewDistance?: number;
}
declare namespace Chart3D {
    /**
     * Provides the option to draw a frame around the charts by
     * defining a bottom, front and back panel.
     *
     * @since    4.0
     * @product  highcharts
     * @requires highcharts-3d
     */
    interface FrameOptions {
        /**
         * The back side of the frame around a 3D chart.
         */
        back?: FrameSideOptions;
        /**
         * The bottom of the frame around a 3D chart.
         */
        bottom?: FrameSideOptions;
        /**
         * The front of the frame around a 3D chart.
         */
        front?: FrameSideOptions;
        /**
         * The left side of the frame around a 3D chart.
         */
        left?: FrameSideOptions;
        /**
         * The right of the frame around a 3D chart.
         */
        right?: FrameSideOptions;
        /**
         * General pixel thickness for the frame faces.
         */
        size?: number;
        /**
         * The top of the frame around a 3D chart.
         */
        top?: FrameSideOptions;
        /**
         * Whether the frames are visible.
         *
         * @default default
         */
        visible?: string;
    }
    /**
     * A side of the frame around a 3D chart.
     *
     * @since    4.0
     * @product  highcharts
     * @requires highcharts-3d
     */
    interface FrameSideOptions {
        /**
         * The color of the panel.
         *
         * @default transparent
         * @since   4.0
         * @product highcharts
         */
        color?: ColorType;
        /**
         * The thickness of the panel.
         *
         * @default 1
         * @since   4.0
         * @product highcharts
         */
        size?: number;
        /**
         * Whether to display the frame. Possible values are `true`, `false`,
         * `"auto"` to display only the frames behind the data, and `"default"`
         * to display faces behind the data based on the axis layout, ignoring
         * the point of view.
         *
         * @sample {highcharts} highcharts/3d/scatter-frame/
         *         Auto frames
         *
         * @default default
         * @since   5.0.12
         * @product highcharts
         */
        visible?: ('auto' | 'default' | boolean);
    }
    /**
     * @optionparent
     */
    const defaultOptions: {
        chart: {
            /**
             * Options to render charts in 3 dimensions. This feature requires
             * `highcharts-3d.js`, found in the download package or online at
             * [code.highcharts.com/highcharts-3d.js](https://code.highcharts.com/highcharts-3d.js).
             *
             * @since    4.0
             * @product  highcharts
             * @requires highcharts-3d
             */
            options3d: {
                /**
                 * Whether to render the chart using the 3D functionality.
                 *
                 * @since   4.0
                 * @product highcharts
                 */
                enabled: boolean;
                /**
                 * One of the two rotation angles for the chart.
                 *
                 * @since   4.0
                 * @product highcharts
                 */
                alpha: number;
                /**
                 * One of the two rotation angles for the chart.
                 *
                 * @since   4.0
                 * @product highcharts
                 */
                beta: number;
                /**
                 * The total depth of the chart.
                 *
                 * @since   4.0
                 * @product highcharts
                 */
                depth: number;
                /**
                 * Whether the 3d box should automatically adjust to the chart
                 * plot area.
                 *
                 * @since   4.2.4
                 * @product highcharts
                 */
                fitToPlot: boolean;
                /**
                 * Defines the distance the viewer is standing in front of the
                 * chart, this setting is important to calculate the perspective
                 * effect in column and scatter charts. It is not used for 3D
                 * pie charts.
                 *
                 * @since   4.0
                 * @product highcharts
                 */
                viewDistance: number;
                /**
                 * Set it to `"auto"` to automatically move the labels to the
                 * best edge.
                 *
                 * @type    {"auto"|null}
                 * @since   5.0.12
                 * @product highcharts
                 */
                axisLabelPosition: null;
                /**
                 * Provides the option to draw a frame around the charts by
                 * defining a bottom, front and back panel.
                 *
                 * @since    4.0
                 * @product  highcharts
                 * @requires highcharts-3d
                 */
                frame: {
                    /**
                     * Whether the frames are visible.
                     */
                    visible: string;
                    /**
                     * General pixel thickness for the frame faces.
                     */
                    size: number;
                    /**
                     * The bottom of the frame around a 3D chart.
                     *
                     * @since    4.0
                     * @product  highcharts
                     * @requires highcharts-3d
                     */
                    /**
                     * The color of the panel.
                     *
                     * @type      {Highcharts.ColorType}
                     * @default   transparent
                     * @since     4.0
                     * @product   highcharts
                     * @apioption chart.options3d.frame.bottom.color
                     */
                    /**
                     * The thickness of the panel.
                     *
                     * @type      {number}
                     * @default   1
                     * @since     4.0
                     * @product   highcharts
                     * @apioption chart.options3d.frame.bottom.size
                     */
                    /**
                     * Whether to display the frame. Possible values are `true`,
                     * `false`, `"auto"` to display only the frames behind the
                     * data, and `"default"` to display faces behind the data
                     * based on the axis layout, ignoring the point of view.
                     *
                     * @sample {highcharts} highcharts/3d/scatter-frame/
                     *         Auto frames
                     *
                     * @type      {boolean|"default"|"auto"}
                     * @default   default
                     * @since     5.0.12
                     * @product   highcharts
                     * @apioption chart.options3d.frame.bottom.visible
                     */
                    /**
                     * The bottom of the frame around a 3D chart.
                     */
                    bottom: {};
                    /**
                     * The top of the frame around a 3D chart.
                     *
                     * @extends chart.options3d.frame.bottom
                     */
                    top: {};
                    /**
                     * The left side of the frame around a 3D chart.
                     *
                     * @extends chart.options3d.frame.bottom
                     */
                    left: {};
                    /**
                     * The right of the frame around a 3D chart.
                     *
                     * @extends chart.options3d.frame.bottom
                     */
                    right: {};
                    /**
                     * The back side of the frame around a 3D chart.
                     *
                     * @extends chart.options3d.frame.bottom
                     */
                    back: {};
                    /**
                     * The front of the frame around a 3D chart.
                     *
                     * @extends chart.options3d.frame.bottom
                     */
                    front: {};
                };
            };
        };
    };
    class Additions {
    }
}
export default Chart3D;
