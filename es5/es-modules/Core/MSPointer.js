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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import H from './Globals.js';
var charts = H.charts, composed = H.composed, doc = H.doc, noop = H.noop, win = H.win;
import Pointer from './Pointer.js';
import { addEvent, attr, css, defined, objectEach, pick, pushUnique, removeEvent } from '../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
// The touches object keeps track of the points being touched at all times
var touches = {};
var hasPointerEvent = !!win.PointerEvent;
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function getWebkitTouches() {
    var fake = [];
    fake.item = function (i) {
        return this[i];
    };
    objectEach(touches, function (touch) {
        fake.push({
            pageX: touch.pageX,
            pageY: touch.pageY,
            target: touch.target
        });
    });
    return fake;
}
/** @internal */
function translateMSPointer(e, method, wktype, func) {
    var _a, _b;
    var pointer = (_b = charts[(_a = Pointer.hoverChartIndex) !== null && _a !== void 0 ? _a : -1]) === null || _b === void 0 ? void 0 : _b.pointer;
    if (pointer &&
        (e.pointerType === 'touch' ||
            e.pointerType === e.MSPOINTER_TYPE_TOUCH)) {
        func(e);
        pointer[method]({
            type: wktype,
            target: e.currentTarget,
            preventDefault: noop,
            touches: getWebkitTouches()
        });
    }
}
/* *
 *
 *  Class
 *
 * */
/** @internal */
var MSPointer = /** @class */ (function (_super) {
    __extends(MSPointer, _super);
    // Disable default IE actions for pinch and such on chart element
    function MSPointer(chart, options) {
        var _this = _super.call(this, chart, options) || this;
        if (_this.hasZoom) { // #4014
            css(chart.container, {
                '-ms-touch-action': 'none',
                'touch-action': 'none'
            });
        }
        return _this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * The isRequired method is required for Highcharts to decide whether to use
     * this module.
     *
     * @internal
     *
     * @return {boolean}
     * Returns true if the module is required.
     */
    MSPointer.isRequired = function () {
        return !!(!win.TouchEvent && (win.PointerEvent || win.MSPointerEvent));
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Add or remove the MS Pointer specific events
     * @internal
     * @function Highcharts.Pointer#batchMSEvents
     */
    MSPointer.prototype.batchMSEvents = function (fn) {
        fn(this.chart.container, hasPointerEvent ? 'pointerdown' : 'MSPointerDown', this.onContainerPointerDown);
        fn(this.chart.container, hasPointerEvent ? 'pointermove' : 'MSPointerMove', this.onContainerPointerMove);
        fn(doc, hasPointerEvent ? 'pointerup' : 'MSPointerUp', this.onDocumentPointerUp);
    };
    // Destroy MS events also
    MSPointer.prototype.destroy = function () {
        this.batchMSEvents(removeEvent);
        _super.prototype.destroy.call(this);
    };
    /**
     * Utility to detect whether an element has, or has a parent with, a
     * specific class name. Used on detection of tracker objects and on deciding
     * whether hovering the tooltip should cause the active series to mouse out.
     *
     * @function Highcharts.Pointer#inClass
     *
     * @param {Highcharts.SVGDOMElement|Highcharts.HTMLDOMElement} element
     * The element to investigate.
     *
     * @param {string} className
     * The class name to look for.
     *
     * @return {boolean|undefined}
     * True if either the element or one of its parents has the given class
     * name.
     */
    MSPointer.prototype.inClass = function (element, className) {
        var elem = element, elemClassName;
        while (elem) {
            elemClassName = attr(elem, 'class');
            if (elemClassName) {
                if (elemClassName.indexOf(className) !== -1) {
                    return true;
                }
                if (elemClassName.indexOf('highcharts-container') !== -1) {
                    return false;
                }
            }
            // #21098 IE11 compatibility
            elem = elem.parentNode;
            if (elem && (
            // HTMLElement
            elem === document.documentElement ||
                // Document
                defined(elem.nodeType) &&
                    elem.nodeType === document.nodeType)) {
                elem = null;
            }
        }
    };
    /**
     * @internal
     * @function Highcharts.Pointer#onContainerPointerDown
     */
    MSPointer.prototype.onContainerPointerDown = function (e) {
        translateMSPointer(e, 'onContainerTouchStart', 'touchstart', function (e) {
            touches[e.pointerId] = {
                pageX: e.pageX,
                pageY: e.pageY,
                target: e.currentTarget
            };
        });
    };
    /**
     * @internal
     * @function Highcharts.Pointer#onContainerPointerMove
     */
    MSPointer.prototype.onContainerPointerMove = function (e) {
        translateMSPointer(e, 'onContainerTouchMove', 'touchmove', function (e) {
            touches[e.pointerId] = ({ pageX: e.pageX, pageY: e.pageY });
            if (!touches[e.pointerId].target) {
                touches[e.pointerId].target = e.currentTarget;
            }
        });
    };
    /**
     * @internal
     * @function Highcharts.Pointer#onDocumentPointerUp
     */
    MSPointer.prototype.onDocumentPointerUp = function (e) {
        translateMSPointer(e, 'onDocumentTouchEnd', 'touchend', function (e) {
            delete touches[e.pointerId];
        });
    };
    // Add IE specific touch events to chart
    MSPointer.prototype.setDOMEvents = function () {
        var tooltip = this.chart.tooltip;
        _super.prototype.setDOMEvents.call(this);
        if (this.hasZoom ||
            pick((tooltip === null || tooltip === void 0 ? void 0 : tooltip.options.followTouchMove), true)) {
            this.batchMSEvents(addEvent);
        }
    };
    return MSPointer;
}(Pointer));
/* *
 *
 *  Class Namespace
 *
 * */
/** @internal */
(function (MSPointer) {
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    function compose(ChartClass) {
        if (pushUnique(composed, 'Core.MSPointer')) {
            addEvent(ChartClass, 'beforeRender', function () {
                this.pointer = new MSPointer(this, this.options);
            });
        }
    }
    MSPointer.compose = compose;
})(MSPointer || (MSPointer = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default MSPointer;
