/* *
 *
 *  Arc diagram module
 *
 *  (c) 2018-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import NodesComposition from '../NodesComposition.js';
import SankeySeries from '../Sankey/SankeySeries.js';
import { extend } from '../../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
const SankeyPoint = SankeySeries.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
class ArcDiagramPoint extends SankeyPoint {
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    isValid() {
        // No null points here
        return true;
    }
}
extend(ArcDiagramPoint.prototype, {
    setState: NodesComposition.setNodeState
});
/* *
 *
 *  Default Export
 *
 * */
export default ArcDiagramPoint;
