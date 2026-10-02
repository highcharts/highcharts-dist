/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Class that can keep track of events added, and clean them up on destroy.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import { addEvent } from '../../Shared/Utilities.js';
import H from '../../Core/Globals.js';
/** @internal */
class EventProvider {
    /* *
     *
     *  Constructor
     *
     * */
    constructor() {
        this.eventRemovers = [];
    }
    /**
     * Add an event to an element and keep track of it for later removal.
     * Same args as Highcharts.addEvent.
     *
     * @internal
     */
    addEvent() {
        const remover = addEvent.apply(H, arguments);
        this.eventRemovers.push({
            element: arguments[0], // HTML element
            remover
        });
        return remover;
    }
    /**
     * Remove added event.
     *
     * @internal
     */
    removeEvent(event) {
        const pos = this.eventRemovers.map((e) => e.remover).indexOf(event);
        this.eventRemovers[pos].remover();
        this.eventRemovers.splice(pos, 1);
    }
    /**
     * Remove all added events.
     *
     * @internal
     */
    removeAddedEvents() {
        this.eventRemovers.map((e) => e.remover)
            .forEach((remover) => remover());
        this.eventRemovers = [];
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default EventProvider;
