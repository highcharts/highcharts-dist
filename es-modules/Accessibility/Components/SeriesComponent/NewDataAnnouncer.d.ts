import type Accessibility from '../../Accessibility';
import type Series from '../../../Core/Series/Series';
import Announcer from '../../Utils/Announcer.js';
import EventProvider from '../../Utils/EventProvider.js';
/**
 * @private
 * @class
 */
declare class NewDataAnnouncer {
    constructor(chart: Accessibility.ChartComposition);
    announcer: Announcer;
    chart: Accessibility.ChartComposition;
    dirty: NewDataAnnouncer.DirtyObject;
    eventProvider: EventProvider;
    lastAnnouncementTime: number;
    queuedAnnouncement?: NewDataAnnouncer.QueuedAnnouncementObject;
    queuedAnnouncementTimer?: number;
    /**
     * Initialize the new data announcer.
     * @private
     */
    init(): void;
    /**
     * Remove traces of announcer.
     * @private
     */
    destroy(): void;
    /**
     * Add event listeners for the announcer
     * @private
     */
    addEventListeners(): void;
    /**
     * On new data series added, update dirty list.
     * @private
     * @param {Highcharts.Series} series
     */
    onSeriesAdded(series: Accessibility.SeriesComposition): void;
    /**
     * Gather what we know and announce the data to user.
     * @private
     */
    announceDirtyData(): void;
    /**
     * Announce to user that there is new data.
     * @private
     * @param {Array<Highcharts.Series>} dirtySeries
     *          Array of series with new data.
     * @param {Highcharts.Series} [newSeries]
     *          If a single new series was added, a reference to this series.
     * @param {Highcharts.Point} [newPoint]
     *          If a single point was added, a reference to this point.
     */
    queueAnnouncement(dirtySeries: Array<Accessibility.SeriesComposition>, newSeries?: Accessibility.SeriesComposition, newPoint?: Accessibility.PointComposition): void;
    /**
     * Get announcement message for new data.
     * @private
     * @param {Array<Highcharts.Series>} dirtySeries
     *          Array of series with new data.
     * @param {Highcharts.Series} [newSeries]
     *          If a single new series was added, a reference to this series.
     * @param {Highcharts.Point} [newPoint]
     *          If a single point was added, a reference to this point.
     *
     * @return {string|null}
     * The announcement message to give to user.
     */
    buildAnnouncementMessage(dirtySeries: Array<Accessibility.SeriesComposition>, newSeries?: Accessibility.SeriesComposition, newPoint?: Accessibility.PointComposition): (string | null);
}
declare namespace NewDataAnnouncer {
    interface DirtyObject {
        allSeries: Record<string, Accessibility.SeriesComposition>;
        hasDirty?: boolean;
        newPoint?: Accessibility.PointComposition;
        newSeries?: Accessibility.SeriesComposition;
    }
    interface QueuedAnnouncementObject {
        message: string;
        series: Array<Accessibility.SeriesComposition>;
        time: number;
    }
    /**
     * @private
     */
    function compose(SeriesClass: typeof Series): void;
}
export default NewDataAnnouncer;
