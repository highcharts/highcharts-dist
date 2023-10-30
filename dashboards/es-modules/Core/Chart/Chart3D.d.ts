import type ColorType from '../Color/ColorType';
import type Options from '../Options';
import type Position3DObject from '../Renderer/Position3DObject';
import type SVGElement3D from '../Renderer/SVG/SVGElement3D';
import Chart from './Chart.js';
import Fx from '../Animation/Fx.js';
import Series from '../Series/Series.js';
declare module '../Animation/FxLike' {
    interface FxLike {
        matrixSetter?(): void;
    }
}
declare module '../Chart/ChartLike' {
    interface ChartLike {
        chart3d?: Chart3D.Additions;
        frameShapes?: Record<string, SVGElement3D>;
        is3d(): boolean;
    }
}
declare module '../Chart/ChartOptions' {
    interface ChartOptions {
        options3d?: Options;
    }
}
declare module '../Options' {
    interface Options {
        alpha?: number;
        axisLabelPosition?: ('auto' | null);
        beta?: number;
        depth?: number;
        enabled?: boolean;
        fitToPlot?: boolean;
        frame?: Chart3D.FrameOptions;
        viewDistance?: number;
    }
}
declare namespace Chart3D {
    interface Composition extends Chart {
        chart3d: Additions;
    }
    interface Edge3DObject extends Position3DObject {
        xDir: Position3DObject;
    }
    interface FrameObject extends FrameOptions {
        axes: Record<string, Record<string, (Edge3DObject | null)>>;
        back: FrameSideObject;
        bottom: FrameSideObject;
        front: FrameSideObject;
        left: FrameSideObject;
        right: FrameSideObject;
        top: FrameSideObject;
    }
    interface FrameOptions {
        back?: FrameSideOptions;
        bottom?: FrameSideOptions;
        front?: FrameSideOptions;
        left?: FrameSideOptions;
        right?: FrameSideOptions;
        size?: number;
        top?: FrameSideOptions;
        visible?: string;
    }
    interface FrameSideObject extends FrameSideOptions {
        frontFacing: boolean;
        size: number;
    }
    interface FrameSideOptions {
        color?: ColorType;
        size?: number;
        visible?: ('auto' | 'default' | boolean);
    }
    interface Stack3DDictionary {
        [index: number]: Stack3DDictionaryObject;
        totalStacks: number;
    }
    interface Stack3DDictionaryObject {
        position: number;
        series: Array<Series>;
    }
    /**
     * @optionparent
     * @private
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
                     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
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
    /**
     * @private
     */
    function compose(ChartClass: typeof Chart, FxClass: typeof Fx): void;
    class Additions {
        constructor(chart: Chart);
        chart: Composition;
        frame3d: FrameObject;
        get3dFrame(): Chart3D.FrameObject;
        /**
         * Calculate scale of the 3D view. That is required to fit chart's 3D
         * projection into the actual plotting area. Reported as #4933.
         *
         * **Note:**
         * This function should ideally take the plot values instead of a chart
         * object, but since the chart object is needed for perspective it is
         * not practical. Possible to make both getScale and perspective more
         * logical and also immutable.
         *
         * @private
         * @function getScale
         *
         * @param {number} depth
         * The depth of the chart
         *
         * @return {number}
         * The scale to fit the 3D chart into the plotting area.
         *
         * @requires highcharts-3d
         */
        getScale(depth: number): number;
    }
}
export default Chart3D;
