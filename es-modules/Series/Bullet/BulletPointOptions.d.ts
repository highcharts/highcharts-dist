import type { BulletTargetOptions } from './BulletSeriesOptions';
import type ColumnPointOptions from '../Column/ColumnPointOptions';
export interface BulletPointOptions extends ColumnPointOptions {
    /**
     * The target value of a point.
     *
     * @product highcharts
     */
    target?: number;
    /**
     * Individual target options for each point.
     *
     * @since 6.0.0
     */
    targetOptions?: BulletTargetOptions;
}
export default BulletPointOptions;
