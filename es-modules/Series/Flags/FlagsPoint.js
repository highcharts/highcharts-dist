/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import { isNumber } from '../../Shared/Utilities.js';
const { column: { prototype: { pointClass: ColumnPoint } } } = SeriesRegistry.seriesTypes;
/* *
 *
 *  Class
 *
 * */
/** @internal */
class FlagsPoint extends ColumnPoint {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        super(...arguments);
        this.ttBelow = false;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @internal
     */
    isValid() {
        // #9233 - Prevent from treating flags as null points (even if
        // they have no y values defined).
        return isNumber(this.y) || typeof this.y === 'undefined';
    }
    /**
     * @internal
     */
    hasNewShapeType() {
        const shape = this.options.shape || this.series.options.shape;
        return this.graphic && shape && shape !== this.graphic.symbolKey;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default FlagsPoint;
