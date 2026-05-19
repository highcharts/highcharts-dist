import type Accessibility from '../../Accessibility';
import type { PointMarkerOptions } from '../../../Core/Series/PointOptions';
import type Series from '../../../Core/Series/Series.js';
declare namespace ForcedMarkersComposition {
    class PointComposition extends Accessibility.PointComposition {
        hasForcedA11yMarker?: boolean;
    }
    class SeriesComposition extends Accessibility.SeriesComposition {
        a11yMarkersForced?: boolean;
        points: Array<PointComposition>;
        resetA11yMarkerOptions?: PointMarkerOptions;
    }
    /**
     * @private
     */
    function compose<T extends typeof Series>(SeriesClass: T): void;
}
export default ForcedMarkersComposition;
