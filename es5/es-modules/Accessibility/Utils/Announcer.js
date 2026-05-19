/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Create announcer to speak messages to screen readers and other AT.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import AST from '../../Core/Renderer/HTML/AST.js';
import DOMElementProvider from './DOMElementProvider.js';
import H from '../../Core/Globals.js';
var doc = H.doc;
import HU from './HTMLUtilities.js';
var addClass = HU.addClass, visuallyHideElement = HU.visuallyHideElement;
import { attr, internalClearTimeout } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
var Announcer = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function Announcer(chart, type) {
        this.chart = chart;
        this.domElementProvider = new DOMElementProvider();
        this.announceRegion = this.addAnnounceRegion(type);
    }
    /* *
     *
     *  Functions
     *
     * */
    Announcer.prototype.destroy = function () {
        this.domElementProvider.destroyCreatedElements();
    };
    Announcer.prototype.announce = function (message) {
        var _this = this;
        AST.setElementHTML(this.announceRegion, message);
        // Delete contents after a little while to avoid user finding the live
        // region in the DOM.
        if (this.clearAnnouncementRegionTimer) {
            internalClearTimeout(this.clearAnnouncementRegionTimer);
        }
        this.clearAnnouncementRegionTimer = setTimeout(function () {
            _this.announceRegion.innerHTML = AST.emptyHTML;
            delete _this.clearAnnouncementRegionTimer;
        }, 3000);
    };
    Announcer.prototype.addAnnounceRegion = function (type) {
        var chartContainer = (this.chart.announcerContainer || this.createAnnouncerContainer()), div = this.domElementProvider.createElement('div');
        attr(div, {
            'aria-hidden': false,
            'aria-live': type,
            'aria-atomic': true
        });
        // Apply inline hidden styles too as the class alone depends on
        // `highcharts.css` being loaded
        visuallyHideElement(div);
        if (this.chart.styledMode) {
            addClass(div, 'highcharts-visually-hidden');
        }
        chartContainer.appendChild(div);
        return div;
    };
    Announcer.prototype.createAnnouncerContainer = function () {
        var chart = this.chart, container = doc.createElement('div');
        attr(container, {
            'aria-hidden': false,
            'class': 'highcharts-announcer-container'
        });
        // Hide inline so the container stays out of flow even when
        // `highcharts.css` is missing in styled mode
        visuallyHideElement(container);
        chart.renderTo.insertBefore(container, chart.renderTo.firstChild);
        chart.announcerContainer = container;
        return container;
    };
    return Announcer;
}());
/* *
 *
 *  Default Export
 *
 * */
export default Announcer;
