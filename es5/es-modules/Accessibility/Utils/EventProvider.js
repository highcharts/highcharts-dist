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
/* *
 *
 *  Imports
 *
 * */
import { addEvent } from '../../Shared/Utilities.js';
import H from '../../Core/Globals.js';
/**
 * @private
 */
var EventProvider = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function EventProvider() {
        this.eventRemovers = [];
    }
    /**
     * Add an event to an element and keep track of it for later removal.
     * Same args as Highcharts.addEvent.
     * @private
     */
    EventProvider.prototype.addEvent = function () {
        var remover = addEvent.apply(H, arguments);
        this.eventRemovers.push({
            element: arguments[0], // HTML element
            remover: remover
        });
        return remover;
    };
    /**
     * Remove added event.
     * @private
     */
    EventProvider.prototype.removeEvent = function (event) {
        var pos = this.eventRemovers.map(function (e) { return e.remover; }).indexOf(event);
        this.eventRemovers[pos].remover();
        this.eventRemovers.splice(pos, 1);
    };
    /**
     * Remove all added events.
     * @private
     */
    EventProvider.prototype.removeAddedEvents = function () {
        this.eventRemovers.map(function (e) { return e.remover; })
            .forEach(function (remover) { return remover(); });
        this.eventRemovers = [];
    };
    return EventProvider;
}());
/* *
 *
 *  Default Export
 *
 * */
export default EventProvider;
