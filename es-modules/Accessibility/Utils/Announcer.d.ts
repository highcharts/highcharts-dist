import type Chart from '../../Core/Chart/Chart';
import type { HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
/**
 * Internal types.
 * @private
 */
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        announcerContainer?: HTMLDOMElement;
    }
}
declare class Announcer {
    private chart;
    private domElementProvider;
    private announceRegion;
    private clearAnnouncementRegionTimer?;
    constructor(chart: Chart, type: Announcer.Type);
    destroy(): void;
    announce(message: string): void;
    private addAnnounceRegion;
    private createAnnouncerContainer;
}
declare namespace Announcer {
    type Type = ('assertive' | 'polite');
}
export default Announcer;
