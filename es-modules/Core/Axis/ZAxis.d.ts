import type AxisBase from './AxisBase';
import type { XAxisOptions } from './AxisOptions';
import type Chart from '../Chart/Chart.js';
import type { DeepPartial } from '../../Shared/Types';
import Axis from './Axis.js';
declare module './AxisType' {
    interface AxisTypeRegistry {
        ZAxis: ZAxis;
    }
}
declare module '../Chart/ChartBase' {
    interface ChartBase {
        zAxis?: Array<ZAxis>;
        addZAxis(options: DeepPartial<XAxisOptions>): Axis;
    }
}
declare module '../Options' {
    interface Options {
        /**
         * The Z axis or depth axis for 3D plots.
         *
         * See the [Axis class](/class-reference/Highcharts.Axis) for
         * programmatic access to the axis.
         *
         * @sample {highcharts} highcharts/3d/scatter-zaxis-categories/
         *         Z-Axis with Categories
         * @sample {highcharts} highcharts/3d/scatter-zaxis-grid/
         *         Z-Axis with styling
         *
         * @since     5.0.0
         * @product   highcharts
         * @excluding breaks, crosshair, height, left, lineColor, lineWidth,
         *            nameToX, showEmpty, top, width
         */
        zAxis?: (DeepPartial<XAxisOptions> | Array<DeepPartial<XAxisOptions>>);
    }
}
/**
 * 3D axis for z coordinates.
 */
declare class ZAxis extends Axis implements AxisBase {
    init(chart: Chart, userOptions: XAxisOptions): void;
    isZAxis: true;
}
export default ZAxis;
