// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0-modified (2026-03-17)
 * @module highcharts/modules/export-data
 * @requires highcharts
 * @requires highcharts/modules/exporting
 *
 * Export data module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Honsi
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// external ["../highcharts.src.js","default"]
const external_highcharts_src_js_default_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"];
var external_highcharts_src_js_default_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_namespaceObject);
;// ./code/es-modules/Shared/DownloadURL.js
/* *
 *
 *  (c) 2015-2026 Highsoft AS
 *  Author: Oystein Moseng
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Mixin for downloading content in the browser
 *
 * */

/* *
 *
 *  Imports
 *
 * */


const { isSafari, win, win: { document: doc } } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
const domurl = win.URL || win.webkitURL || win;
/* *
 *
 *  Functions
 *
 * */
/**
 * Convert base64 dataURL to Blob if supported, otherwise returns undefined.
 *
 * @internal
 * @function Highcharts.dataURLtoBlob
 *
 * @param {string} dataURL
 * URL to convert.
 *
 * @return {string | undefined}
 * Blob.
 */
function dataURLtoBlob(dataURL) {
    const parts = dataURL
        .replace(/filename=.*;/, '')
        .match(/data:([^;]*)(;base64)?,([A-Z+\d\/]+)/i);
    if (parts &&
        parts.length > 3 &&
        (win.atob) &&
        win.ArrayBuffer &&
        win.Uint8Array &&
        win.Blob &&
        (domurl.createObjectURL)) {
        // Try to convert data URL to Blob
        const binStr = win.atob(parts[3]), buf = new win.ArrayBuffer(binStr.length), binary = new win.Uint8Array(buf);
        for (let i = 0; i < binary.length; ++i) {
            binary[i] = binStr.charCodeAt(i);
        }
        return domurl
            .createObjectURL(new win.Blob([binary], { 'type': parts[1] }));
    }
}
/**
 * Download a data URL in the browser. Can also take a blob as first param.
 *
 * @internal
 * @function Highcharts.downloadURL
 *
 * @param {string | global.URL} dataURL
 * The dataURL/Blob to download.
 * @param {string} filename
 * The name of the resulting file (w/extension).
 */
function downloadURL(dataURL, filename) {
    const nav = win.navigator, a = doc.createElement('a');
    // IE specific blob implementation
    // Don't use for normal dataURLs
    if (typeof dataURL !== 'string' &&
        !(dataURL instanceof String) &&
        nav.msSaveOrOpenBlob) {
        nav.msSaveOrOpenBlob(dataURL, filename);
        return;
    }
    dataURL = '' + dataURL;
    if (nav.userAgent.length > 1000 /* RegexLimits.shortLimit */) {
        throw new Error('Input too long');
    }
    const // Some browsers have limitations for data URL lengths. Try to convert
    // to Blob or fall back. Edge always needs that blob.
    isOldEdgeBrowser = /Edge\/\d+/.test(nav.userAgent), 
    // Safari on iOS needs Blob in order to download PDF
    safariBlob = (isSafari &&
        typeof dataURL === 'string' &&
        dataURL.indexOf('data:application/pdf') === 0);
    if (safariBlob || isOldEdgeBrowser || dataURL.length > 2000000) {
        dataURL = dataURLtoBlob(dataURL) || '';
        if (!dataURL) {
            throw new Error('Failed to convert to blob');
        }
    }
    // Try HTML5 download attr if supported
    if (typeof a.download !== 'undefined') {
        a.href = dataURL;
        a.download = filename; // HTML5 download attribute
        doc.body.appendChild(a);
        a.click();
        doc.body.removeChild(a);
    }
    else {
        // No download attr, just opening data URI
        try {
            if (!win.open(dataURL, 'chart')) {
                throw new Error('Failed to open window');
            }
        }
        catch {
            // If window.open failed, try location.href
            win.location.href = dataURL;
        }
    }
}
/**
 * Asynchronously downloads a script from a provided location.
 *
 * @internal
 * @function Highcharts.getScript
 *
 * @param {string} scriptLocation
 * The location for the script to fetch.
 */
function getScript(scriptLocation) {
    return new Promise((resolve, reject) => {
        const head = doc.getElementsByTagName('head')[0], script = doc.createElement('script');
        // Set type and location for the script
        script.type = 'text/javascript';
        script.src = scriptLocation;
        // Resolve in case of a succesful script fetching
        script.onload = () => {
            resolve();
        };
        // Reject in case of fail
        script.onerror = () => {
            const msg = `Error loading script ${scriptLocation}`;
            (0,external_highcharts_src_js_default_namespaceObject.error)(msg);
            reject(new Error(msg));
        };
        // Append the newly created script
        head.appendChild(script);
    });
}
/**
 * Get a blob object from content, if blob is supported.
 *
 * @internal
 * @function Highcharts.getBlobFromContent
 *
 * @param {string} content
 * The content to create the blob from.
 * @param {string} type
 * The type of the content.
 *
 * @return {string | undefined}
 * The blob object, or undefined if not supported.
 *
 * @requires modules/exporting
 * @requires modules/export-data
 */
function getBlobFromContent(content, type) {
    const nav = win.navigator, domurl = win.URL || win.webkitURL || win;
    try {
        // MS specific
        if ((nav.msSaveOrOpenBlob) && win.MSBlobBuilder) {
            const blob = new win.MSBlobBuilder();
            blob.append(content);
            return blob.getBlob('image/svg+xml');
        }
        return domurl.createObjectURL(new win.Blob(['\uFEFF' + content], // #7084
        { type: type }));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (e) {
        // Ignore
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const DownloadURL = {
    dataURLtoBlob,
    downloadURL,
    getBlobFromContent,
    getScript
};
/** @internal */
/* harmony default export */ const Shared_DownloadURL = (DownloadURL);

;// external ["../highcharts.src.js","default","AST"]
const external_highcharts_src_js_default_AST_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].AST;
var external_highcharts_src_js_default_AST_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_AST_namespaceObject);
;// external ["../highcharts.src.js","default","Chart"]
const external_highcharts_src_js_default_Chart_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Chart;
var external_highcharts_src_js_default_Chart_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Chart_namespaceObject);
;// ./code/es-modules/Extensions/ExportData/ExportDataDefaults.js
/* *
 *
 *  Experimental data export module for Highcharts
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */

/* *
 *
 *  Constants
 *
 * */
/**
 * @optionparent exporting
 * @internal
 */
const exporting = {
    /**
     * Caption for the data table. Same as chart title by default. Set to
     * `false` to disable.
     *
     * @sample highcharts/export-data/multilevel-table
     *         Multiple table headers
     *
     * @type      {boolean | string}
     * @since     6.0.4
     * @requires  modules/export-data
     * @apioption exporting.tableCaption
     */
    /**
     * Options for exporting data to CSV or Excel, or displaying the data
     * in a HTML table or a JavaScript structure.
     *
     * This module adds data export options to the export menu and provides
     * functions like `Exporting.getCSV`, `Exporting.getTable`,
     * `Exporting.getDataRows` and `Exporting.viewData`.
     *
     * The XLS converter is limited and only creates a HTML string that is
     * passed for download, which works but creates a warning before
     * opening. The workaround for this is to use a third party XLSX
     * converter, as demonstrated in the sample below.
     *
     * @sample  highcharts/export-data/categorized/ Categorized data
     * @sample  highcharts/export-data/stock-timeaxis/ Highcharts Stock time axis
     * @sample  highcharts/export-data/xlsx/
     *          Using a third party XLSX converter
     *
     * @since    6.0.0
     * @requires modules/export-data
     */
    csv: {
        /**
         * Options for annotations in the export-data table.
         *
         * @since    8.2.0
         * @requires modules/export-data
         * @requires modules/annotations
         */
        annotations: {
            /**
             * The way to mark the separator for annotations
             * combined in one export-data table cell.
             *
             * @since    8.2.0
             * @requires modules/annotations
             */
            itemDelimiter: '; ',
            /**
             * When several labels are assigned to a specific point,
             * they will be displayed in one field in the table.
             *
             * @sample highcharts/export-data/join-annotations/
             *         Concatenate point annotations with itemDelimiter set.
             *
             * @since    8.2.0
             * @requires modules/annotations
             */
            join: false
        },
        /**
         * Formatter callback for the column headers. Parameters are:
         * - `item` - The series or axis object)
         * - `key` -  The point key, for example y or z
         * - `keyLength` - The amount of value keys for this item, for
         *   example a range series has the keys `low` and `high` so the
         *   key length is 2.
         *
         * If [useMultiLevelHeaders](#exporting.useMultiLevelHeaders) is
         * true, columnHeaderFormatter by default returns an object with
         * columnTitle and topLevelColumnTitle for each key. Columns with
         * the same topLevelColumnTitle have their titles merged into a
         * single cell with colspan for table/Excel export.
         *
         * If `useMultiLevelHeaders` is false, or for CSV export, it returns
         * the series name, followed by the key if there is more than one
         * key.
         *
         * For the axis it returns the axis title or "Category" or
         * "DateTime" by default.
         *
         * Return `false` to use Highcharts' proposed header.
         *
         * @sample highcharts/export-data/multilevel-table
         *         Multiple table headers
         *
         * @type {Function | null}
         */
        columnHeaderFormatter: null,
        /**
         * Which date format to use for exported dates on a datetime X axis.
         * See `Highcharts.dateFormat`.
         */
        dateFormat: '%Y-%m-%d %H:%M:%S',
        /**
         * Which decimal point to use for exported CSV. Defaults to the same
         * as the browser locale, typically `.` (English) or `,` (German,
         * French etc).
         *
         * @type  {string | null}
         * @since 6.0.4
         */
        decimalPoint: null,
        /**
         * The item delimiter in the exported data. Use `;` for direct
         * exporting to Excel. Defaults to a best guess based on the browser
         * locale. If the locale _decimal point_ is `,`, the `itemDelimiter`
         * defaults to `;`, otherwise the `itemDelimiter` defaults to `,`.
         *
         * @type {string | null}
         */
        itemDelimiter: null,
        /**
         * The line delimiter in the exported data, defaults to a newline.
         */
        lineDelimiter: '\n'
    },
    menuItemDefinitions: {
        /**
         * @requires modules/export-data
         */
        downloadCSV: {
            /**
             * @see [lang.downloadCSV](#lang.downloadCSV)
             * @default downloadCSV
             */
            textKey: 'downloadCSV',
            onclick: function () {
                this.exporting?.downloadCSV();
            }
        },
        /**
         * @requires modules/export-data
         */
        downloadXLS: {
            /**
             * @see [lang.downloadXLS](#lang.downloadXLS)
             * @default downloadXLS
             */
            textKey: 'downloadXLS',
            onclick: function () {
                this.exporting?.downloadXLS();
            }
        },
        /**
         * @requires modules/export-data
         */
        viewData: {
            /**
             * @see [lang.viewData](#lang.viewData)
             * @default viewData
             */
            textKey: 'viewData',
            onclick: function () {
                this.exporting?.wrapLoading(this.exporting.toggleDataTable);
            }
        }
    },
    /**
     * Display a message when export is in progress. Uses
     * [Chart.showLoading()](/class-reference/Highcharts.Chart#showLoading).
     *
     * The message can be altered by changing
     * [lang.exportInProgress](#lang.exportInProgress).
     *
     * @since    11.3.0
     * @requires modules/export-data
     */
    showExportInProgress: true,
    /**
     * Show a HTML table below the chart with the chart's current data.
     *
     * @sample highcharts/export-data/showtable/
     *         Show the table
     * @sample highcharts/studies/exporting-table-html
     *         Experiment with putting the table inside the subtitle to
     *         allow exporting it.
     *
     * @since    6.0.0
     * @requires modules/export-data
     */
    showTable: false,
    /**
     * Use multi level headers in data table. If [csv.columnHeaderFormatter
     * ](#exporting.csv.columnHeaderFormatter) is defined, it has to return
     * objects in order for multi level headers to work.
     *
     * @sample highcharts/export-data/multilevel-table
     *         Multiple table headers
     *
     * @since    6.0.4
     * @requires modules/export-data
     */
    useMultiLevelHeaders: true,
    /**
     * If using multi level table headers, use rowspans for headers that
     * have only one level.
     *
     * @sample highcharts/export-data/multilevel-table
     *         Multiple table headers
     *
     * @since    6.0.4
     * @requires modules/export-data
     */
    useRowspanHeaders: true
};
// TODO: no need to be a partial when Options are fully optional.
/**
 * @optionparent lang
 * @internal
 */
const lang = {
    /**
     * The text for the menu item.
     *
     * @since    6.0.0
     * @requires modules/export-data
     */
    downloadCSV: 'Download CSV',
    /**
     * The text for the menu item.
     *
     * @since    6.0.0
     * @requires modules/export-data
     */
    downloadXLS: 'Download XLS',
    /**
     * The text for exported table.
     *
     * @since    8.1.0
     * @requires modules/export-data
     */
    exportData: {
        /**
         * The annotation column title.
         */
        annotationHeader: 'Annotations',
        /**
         * The category column title.
         */
        categoryHeader: 'Category',
        /**
         * The category column title when axis type set to "datetime".
         */
        categoryDatetimeHeader: 'DateTime'
    },
    /**
     * The text for the menu item.
     *
     * @since    6.0.0
     * @requires modules/export-data
     */
    viewData: 'View data table',
    /**
     * The text for the menu item.
     *
     * @since    8.2.0
     * @requires modules/export-data
     */
    hideData: 'Hide data table',
    /**
     * Text to show when export is in progress.
     *
     * @since    11.3.0
     * @requires modules/export-data
     */
    exportInProgress: 'Exporting...'
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const ExportDataDefaults = {
    exporting,
    lang
};
/** @internal */
/* harmony default export */ const ExportData_ExportDataDefaults = (ExportDataDefaults);
/* *
 *
 *  API Options
 *
 * */
/**
 * Callback that fires while exporting data. This allows the modification of
 * data rows before processed into the final format.
 *
 * @type      {Highcharts.ExportDataCallbackFunction}
 * @since     7.2.0
 * @context   Highcharts.Chart
 * @requires  modules/exporting
 * @requires  modules/export-data
 * @apioption chart.events.exportData
 */
/**
 * When set to `false` will prevent the series data from being included in
 * any form of data export.
 *
 * Since version 6.0.0 until 7.1.0 the option was existing undocumented
 * as `includeInCSVExport`.
 *
 * @type      {boolean}
 * @since     7.1.0
 * @requires  modules/export-data
 * @apioption plotOptions.series.includeInDataExport
 */
(''); // Keep doclets above in JS file

;// ./code/es-modules/Shared/Utilities.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */

const { doc: Utilities_doc, win: Utilities_win } = (external_highcharts_src_js_default_default());
/* eslint-disable valid-jsdoc */
/**
 * Add an event listener.
 *
 * @function Highcharts.addEvent<T>
 *
 * @param  {Highcharts.Class<T>|T} el
 *         The element or object to add a listener to. It can be a
 *         {@link HTMLDOMElement}, an {@link SVGElement} or any other object.
 *
 * @param  {string} type
 *         The event type.
 *
 * @param  {Highcharts.EventCallbackFunction<T>|Function} fn
 *         The function callback to execute when the event is fired.
 *
 * @param  {Highcharts.EventOptionsObject} [options]
 *         Options for adding the event.
 *
 * @sample highcharts/members/addevent
 *         Use a general `render` event to draw shapes on a chart
 *
 * @return {Function}
 *         A callback function to remove the added event.
 */
function addEvent(el, type, fn, options = {}) {
    /* eslint-enable valid-jsdoc */
    // Add hcEvents to either the prototype (in case we're running addEvent on a
    // class) or the instance. If hasOwnProperty('hcEvents') is false, it is
    // inherited down the prototype chain, in which case we need to set the
    // property on this instance (which may itself be a prototype).
    const owner = typeof el === 'function' && el.prototype || el;
    if (!Object.hasOwnProperty.call(owner, 'hcEvents')) {
        owner.hcEvents = {};
    }
    const events = owner.hcEvents;
    // Allow click events added to points, otherwise they will be prevented by
    // the TouchPointer.pinch function after a pinch zoom operation (#7091).
    if ((external_highcharts_src_js_default_default()).Point && // Without H a dependency loop occurs
        el instanceof (external_highcharts_src_js_default_default()).Point &&
        el.series &&
        el.series.chart) {
        el.series.chart.runTrackerClick = true;
    }
    // Handle DOM events
    // If the browser supports passive events, add it to improve performance
    // on touch events (#11353).
    const addEventListener = el.addEventListener;
    if (addEventListener) {
        addEventListener.call(el, type, fn, (external_highcharts_src_js_default_default()).supportsPassiveEvents ? {
            passive: options.passive === void 0 ?
                type.indexOf('touch') !== -1 : options.passive,
            capture: false
        } : false);
    }
    if (!events[type]) {
        events[type] = [];
    }
    const eventObject = {
        fn,
        order: typeof options.order === 'number' ? options.order : Infinity
    };
    events[type].push(eventObject);
    // Order the calls
    events[type].sort((a, b) => a.order - b.order);
    // Return a function that can be called to remove this event.
    return function () {
        removeEvent(el, type, fn);
    };
}
/**
 * Non-recursive method to find the lowest member of an array. `Math.min` raises
 * a maximum call stack size exceeded error in Chrome when trying to apply more
 * than 150.000 points. This method is slightly slower, but safe.
 *
 * @function Highcharts.arrayMin
 *
 * @param {Array<*>} data
 *        An array of numbers.
 *
 * @return {number}
 *         The lowest number.
 */
function arrayMin(data) {
    let i = data.length, min = data[0];
    while (i--) {
        if (data[i] < min) {
            min = data[i];
        }
    }
    return min;
}
/**
 * Non-recursive method to find the lowest member of an array. `Math.max` raises
 * a maximum call stack size exceeded error in Chrome when trying to apply more
 * than 150.000 points. This method is slightly slower, but safe.
 *
 * @function Highcharts.arrayMax
 *
 * @param {Array<*>} data
 *        An array of numbers.
 *
 * @return {number}
 *         The highest number.
 */
function arrayMax(data) {
    let i = data.length, max = data[0];
    while (i--) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}
/**
 * Set or get an attribute or an object of attributes.
 *
 * To use as a setter, pass a key and a value, or let the second argument be a
 * collection of keys and values. When using a collection, passing a value of
 * `null` or `undefined` will remove the attribute.
 *
 * To use as a getter, pass only a string as the second argument.
 *
 * @function Highcharts.attr
 *
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} elem
 *        The DOM element to receive the attribute(s).
 *
 * @param {string|Highcharts.HTMLAttributes|Highcharts.SVGAttributes} [keyOrAttribs]
 *        The property or an object of key-value pairs.
 *
 * @param {number|string} [value]
 *        The value if a single property is set.
 *
 * @return {string|null|undefined}
 *         When used as a getter, return the value.
 */
function attr(elem, keyOrAttribs, value) {
    const isGetter = isString(keyOrAttribs) && !defined(value);
    let ret;
    const attrSingle = (value, key) => {
        // Set the value
        if (defined(value)) {
            elem.setAttribute(key, value);
            // Get the value
        }
        else if (isGetter) {
            ret = elem.getAttribute(key);
            // IE7 and below cannot get class through getAttribute (#7850)
            if (!ret && key === 'class') {
                ret = elem.getAttribute(key + 'Name');
            }
            // Remove the value
        }
        else {
            elem.removeAttribute(key);
        }
    };
    // If keyOrAttribs is a string
    if (isString(keyOrAttribs)) {
        attrSingle(value, keyOrAttribs);
        // Else if keyOrAttribs is defined, it is a hash of key/value pairs
    }
    else {
        objectEach(keyOrAttribs, attrSingle);
    }
    return ret;
}
/**
 * Constrain a value to within a lower and upper threshold.
 *
 * @internal
 * @param {number} value The initial value
 * @param {number} min The lower threshold
 * @param {number} max The upper threshold
 * @return {number} Returns a number value within min and max.
 */
function clamp(value, min, max) {
    return value > min ? value < max ? value : max : min;
}
/**
 * Fix JS round off float errors.
 *
 * @function Highcharts.correctFloat
 *
 * @param {number} num
 *        A float number to fix.
 *
 * @param {number} [prec=14]
 *        The precision.
 *
 * @return {number}
 *         The corrected float number.
 */
function correctFloat(num, prec) {
    // When the number is higher than 1e14 use the number (#16275)
    return num > 1e14 ? num : parseFloat(num.toPrecision(prec || 14));
}
/**
 * Utility function to create an HTML element with attributes and styles.
 *
 * @function Highcharts.createElement
 *
 * @param {string} tag
 *        The HTML tag.
 *
 * @param {Highcharts.HTMLAttributes} [attribs]
 *        Attributes as an object of key-value pairs.
 *
 * @param {Highcharts.CSSObject} [styles]
 *        Styles as an object of key-value pairs.
 *
 * @param {Highcharts.HTMLDOMElement} [parent]
 *        The parent HTML object.
 *
 * @param {boolean} [nopad=false]
 *        If true, remove all padding, border and margin.
 *
 * @return {Highcharts.HTMLDOMElement}
 *         The created DOM element.
 */
function createElement(tag, attribs, styles, parent, nopad) {
    const el = Utilities_doc.createElement(tag);
    if (attribs) {
        extend(el, attribs);
    }
    if (nopad) {
        css(el, { padding: '0', border: 'none', margin: '0' });
    }
    if (styles) {
        css(el, styles);
    }
    if (parent) {
        parent.appendChild(el);
    }
    return el;
}
/**
 * Utility for crisping a line position to the nearest full pixel depening on
 * the line width
 *
 * @internal
 * @param {number} value       The raw pixel position
 * @param {number} lineWidth   The line width
 * @param {boolean} [inverted] Whether the containing group is inverted.
 *                             Crisping round numbers on the y-scale need to go
 *                             to the other side because the coordinate system
 *                             is flipped (scaleY is -1)
 * @return {number}            The pixel position to use for a crisp display
 */
function crisp(value, lineWidth = 0, inverted) {
    const mod = lineWidth % 2 / 2, inverter = inverted ? -1 : 1;
    return (Math.round(value * inverter - mod) + mod) * inverter;
}
/**
 * Set CSS on a given element.
 *
 * @function Highcharts.css
 *
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} el
 *        An HTML DOM element.
 *
 * @param {Highcharts.CSSObject} styles
 *        Style object with camel case property names.
 *
 * @return {void}
 */
function css(el, styles) {
    extend(el.style, styles);
}
/**
 * Check if an object is null or undefined.
 *
 * @function Highcharts.defined
 *
 * @param {*} obj
 *        The object to check.
 *
 * @return {boolean}
 *         False if the object is null or undefined, otherwise true.
 */
function defined(obj) {
    return typeof obj !== 'undefined' && obj !== null;
}
/**
 * Utility method that destroys any SVGElement instances that are properties on
 * the given object. It loops all properties and invokes destroy if there is a
 * destroy method. The property is then delete.
 *
 * @function Highcharts.destroyObjectProperties
 *
 * @param {*} obj
 *        The object to destroy properties on.
 *
 * @param {*} [except]
 *        Exception, do not destroy this property, only delete it.
 */
function destroyObjectProperties(obj, except, destructablesOnly) {
    objectEach(obj, function (val, n) {
        // If the object is non-null and destroy is defined
        if (val !== except && val?.destroy) {
            // Invoke the destroy
            val.destroy();
        }
        // Delete the property from the object
        if (val?.destroy || !destructablesOnly) {
            delete obj[n];
        }
    });
}
/**
 * Discard a HTML element
 *
 * @function Highcharts.discardElement
 *
 * @param {Highcharts.HTMLDOMElement} element
 *        The HTML node to discard.
 */
function discardElement(element) {
    element?.parentElement?.removeChild(element);
}
// eslint-disable-next-line valid-jsdoc
/**
 * Return the deep difference between two objects. It can either return the new
 * properties, or optionally return the old values of new properties.
 * @internal
 */
function diffObjects(newer, older, keepOlder, collectionsWithUpdate) {
    const ret = {};
    /**
     * Recurse over a set of options and its current values, and store the
     * current values in the ret object.
     */
    function diff(newer, older, ret, depth) {
        const keeper = keepOlder ? older : newer;
        objectEach(newer, function (newerVal, key) {
            if (!depth &&
                collectionsWithUpdate &&
                collectionsWithUpdate.indexOf(key) > -1 &&
                older[key]) {
                newerVal = splat(newerVal);
                ret[key] = [];
                // Iterate over collections like series, xAxis or yAxis and map
                // the items by index.
                for (let i = 0; i < Math.max(newerVal.length, older[key].length); i++) {
                    // Item exists in current data (#6347)
                    if (older[key][i]) {
                        // If the item is missing from the new data, we need to
                        // save the whole config structure. Like when
                        // responsively updating from a dual axis layout to a
                        // single axis and back (#13544).
                        if (newerVal[i] === void 0) {
                            ret[key][i] = older[key][i];
                            // Otherwise, proceed
                        }
                        else {
                            ret[key][i] = {};
                            diff(newerVal[i], older[key][i], ret[key][i], depth + 1);
                        }
                    }
                }
            }
            else if (isObject(newerVal, true) &&
                !newerVal.nodeType // #10044
            ) {
                ret[key] = isArray(newerVal) ? [] : {};
                diff(newerVal, older[key] || {}, ret[key], depth + 1);
                // Delete empty nested objects
                if (Object.keys(ret[key]).length === 0 &&
                    // Except colorAxis which is a special case where the empty
                    // object means it is enabled. Which is unfortunate and we
                    // should try to find a better way.
                    !(key === 'colorAxis' && depth === 0)) {
                    delete ret[key];
                }
            }
            else if (newer[key] !== older[key] ||
                // If the newer key is explicitly undefined, keep it (#10525)
                (key in newer && !(key in older))) {
                if (key !== '__proto__' && key !== 'constructor') {
                    ret[key] = keeper[key];
                }
            }
        });
    }
    diff(newer, older, ret, 0);
    return ret;
}
/**
 * Remove the last occurence of an item from an array.
 *
 * @function Highcharts.erase
 *
 * @param {Array<*>} arr
 *        The array.
 *
 * @param {*} item
 *        The item to remove.
 *
 * @return {void}
 */
function erase(arr, item) {
    let i = arr.length;
    while (i--) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            break;
        }
    }
}
/**
 * Utility function to extend an object with the members of another.
 *
 * @function Highcharts.extend<T>
 *
 * @param {T|undefined} a
 *        The object to be extended.
 *
 * @param {Partial<T>} b
 *        The object to add to the first one.
 *
 * @return {T}
 *         Object a, the original object.
 */
function extend(a, b) {
    /* eslint-enable valid-jsdoc */
    let n;
    if (!a) {
        a = {};
    }
    for (n in b) { // eslint-disable-line guard-for-in
        a[n] = b[n];
    }
    return a;
}
// eslint-disable-next-line valid-jsdoc
/**
 * Extend a prototyped class by new members.
 *
 * @deprecated
 * @function Highcharts.extendClass<T>
 *
 * @param {Highcharts.Class<T>} parent
 *        The parent prototype to inherit.
 *
 * @param {Highcharts.Dictionary<*>} members
 *        A collection of prototype members to add or override compared to the
 *        parent prototype.
 *
 * @return {Highcharts.Class<T>}
 *         A new prototype.
 */
function extendClass(parent, members) {
    const obj = (function () { });
    obj.prototype = new parent(); // eslint-disable-line new-cap
    extend(obj.prototype, members);
    return obj;
}
/* eslint-disable valid-jsdoc */
/**
 * Fire an event that was registered with {@link Highcharts#addEvent}.
 *
 * @function Highcharts.fireEvent<T>
 *
 * @param {T} el
 *        The object to fire the event on. It can be a {@link HTMLDOMElement},
 *        an {@link SVGElement} or any other object.
 *
 * @param {string} type
 *        The type of event.
 *
 * @param {Highcharts.Dictionary<*>|Event} [eventArguments]
 *        Custom event arguments that are passed on as an argument to the event
 *        handler.
 *
 * @param {Highcharts.EventCallbackFunction<T>|Function} [defaultFunction]
 *        The default function to execute if the other listeners haven't
 *        returned false.
 *
 * @return {void}
 */
function fireEvent(el, type, eventArguments, defaultFunction) {
    /* eslint-enable valid-jsdoc */
    eventArguments = eventArguments || {};
    if (Utilities_doc?.createEvent &&
        (el.dispatchEvent ||
            (el.fireEvent &&
                // Enable firing events on Highcharts instance.
                el !== (external_highcharts_src_js_default_default())))) {
        const e = Utilities_doc.createEvent('Events');
        e.initEvent(type, true, true);
        eventArguments = extend(e, eventArguments);
        if (el.dispatchEvent) {
            el.dispatchEvent(eventArguments);
        }
        else {
            el.fireEvent(type, eventArguments);
        }
    }
    else if (el.hcEvents) {
        if (!eventArguments.target) {
            // We're running a custom event
            extend(eventArguments, {
                // Attach a simple preventDefault function to skip
                // default handler if called. The built-in
                // defaultPrevented property is not overwritable (#5112)
                preventDefault: function () {
                    eventArguments.defaultPrevented = true;
                },
                // Setting target to native events fails with clicking
                // the zoom-out button in Chrome.
                target: el,
                // If the type is not set, we're running a custom event
                // (#2297). If it is set, we're running a browser event.
                type: type
            });
        }
        const events = [];
        let object = el;
        let multilevel = false;
        // Recurse up the inheritance chain and collect hcEvents set as own
        // objects on the prototypes.
        while (object.hcEvents) {
            if (Object.hasOwnProperty.call(object, 'hcEvents') &&
                object.hcEvents[type]) {
                if (events.length) {
                    multilevel = true;
                }
                events.unshift.apply(events, object.hcEvents[type]);
            }
            object = Object.getPrototypeOf(object);
        }
        // For performance reasons, only sort the event handlers in case we are
        // dealing with multiple levels in the prototype chain. Otherwise, the
        // events are already sorted in the addEvent function.
        if (multilevel) {
            // Order the calls
            events.sort((a, b) => a.order - b.order);
        }
        // Call the collected event handlers
        events.forEach((obj) => {
            // If the event handler returns false, prevent the default handler
            // from executing
            if (obj.fn.call(el, eventArguments, el) === false) {
                eventArguments.preventDefault();
            }
        });
    }
    // Run the default if not prevented
    if (defaultFunction && !eventArguments.defaultPrevented) {
        defaultFunction.call(el, eventArguments);
    }
}
/**
 * Convenience function to get the align factor, used several places for
 * computing positions
 * @internal
 */
const getAlignFactor = (align = '') => ({
    center: 0.5,
    right: 1,
    middle: 0.5,
    bottom: 1
}[align] || 0);
/**
 * Find the closest distance between two values of a two-dimensional array
 * @internal
 * @function Highcharts.getClosestDistance
 *
 * @param {Array<Array<number>>} arrays
 *          An array of arrays of numbers
 *
 * @return {number | undefined}
 *          The closest distance between values
 */
function getClosestDistance(arrays, onError) {
    const allowNegative = !onError;
    let closest, loopLength, distance, i;
    arrays.forEach((xData) => {
        if (xData.length > 1) {
            loopLength = xData.length - 1;
            for (i = loopLength; i > 0; i--) {
                distance = xData[i] - xData[i - 1];
                if (distance < 0 && !allowNegative) {
                    onError?.();
                    // Only one call
                    onError = void 0;
                }
                else if (distance && (typeof closest === 'undefined' || distance < closest)) {
                    closest = distance;
                }
            }
        }
    });
    return closest;
}
/**
 * Get the magnitude of a number.
 *
 * @function Highcharts.getMagnitude
 *
 * @param {number} num
 *        The number.
 *
 * @return {number}
 *         The magnitude, where 1-9 are magnitude 1, 10-99 magnitude 2 etc.
 */
function getMagnitude(num) {
    return Math.pow(10, Math.floor(Math.log(num) / Math.LN10));
}
/**
 * Returns the value of a property path on a given object.
 *
 * @internal
 * @function getNestedProperty
 *
 * @param {string} path
 * Path to the property, for example `custom.myValue`.
 *
 * @param {unknown} obj
 * Instance containing the property on the specific path.
 *
 * @return {unknown}
 * The unknown property value.
 */
function getNestedProperty(path, parent) {
    const pathElements = path.split('.');
    while (pathElements.length && defined(parent)) {
        const pathElement = pathElements.shift();
        // Filter on the key
        if (typeof pathElement === 'undefined' ||
            pathElement === '__proto__') {
            return; // Undefined
        }
        if (pathElement === 'this') {
            let thisProp;
            if (isObject(parent)) {
                thisProp = parent['@this'];
            }
            return thisProp ?? parent;
        }
        const child = parent[pathElement.replace(/[\\'"]/g, '')];
        // Filter on the child
        if (!defined(child) ||
            typeof child === 'function' ||
            typeof child.nodeType === 'number' ||
            child === Utilities_win) {
            return; // Undefined
        }
        // Else, proceed
        parent = child;
    }
    return parent;
}
/**
 * Get the computed CSS value for given element and property, only for numerical
 * properties. For width and height, the dimension of the inner box (excluding
 * padding) is returned. Used for fitting the chart within the container.
 *
 * @function Highcharts.getStyle
 *
 * @param {Highcharts.HTMLDOMElement} el
 * An HTML element.
 *
 * @param {string} prop
 * The property name.
 *
 * @param {boolean} [toInt=true]
 * Parse to integer.
 *
 * @return {number|string|undefined}
 * The style value.
 */
function getStyle(el, prop, toInt) {
    let style;
    // For width and height, return the actual inner pixel size (#4913)
    if (prop === 'width') {
        let offsetWidth = Math.min(el.offsetWidth, el.scrollWidth);
        // In flex boxes, we need to use getBoundingClientRect and floor it,
        // because scrollWidth doesn't support subpixel precision (#6427) ...
        const boundingClientRectWidth = el.getBoundingClientRect?.().width;
        // ...unless if the containing div or its parents are transform-scaled
        // down, in which case the boundingClientRect can't be used as it is
        // also scaled down (#9871, #10498).
        if (boundingClientRectWidth < offsetWidth &&
            boundingClientRectWidth >= offsetWidth - 1) {
            offsetWidth = Math.floor(boundingClientRectWidth);
        }
        return Math.max(0, // #8377
        (offsetWidth -
            (getStyle(el, 'padding-left', true) || 0) -
            (getStyle(el, 'padding-right', true) || 0)));
    }
    if (prop === 'height') {
        return Math.max(0, // #8377
        (Math.min(el.offsetHeight, el.scrollHeight) -
            (getStyle(el, 'padding-top', true) || 0) -
            (getStyle(el, 'padding-bottom', true) || 0)));
    }
    // Otherwise, get the computed style
    const css = Utilities_win.getComputedStyle(el, void 0); // eslint-disable-line no-undefined
    if (css) {
        style = css.getPropertyValue(prop);
        if (pick(toInt, prop !== 'opacity')) {
            style = pInt(style);
        }
    }
    return style;
}
/**
 * Return the value of the first element in the array that satisfies the
 * provided testing function.
 *
 * @function Highcharts.find<T>
 *
 * @param {Array<T>} arr
 *        The array to test.
 *
 * @param {Function} callback
 *        The callback function. The function receives the item as the first
 *        argument. Return `true` if this item satisfies the condition.
 *
 * @return {T|undefined}
 *         The value of the element.
 */
const find = Array.prototype.find ?
    function (arr, callback) {
        return arr.find(callback);
    } :
    // Legacy implementation. PhantomJS, IE <= 11 etc. #7223.
    function (arr, callback) {
        let i;
        const length = arr.length;
        for (i = 0; i < length; i++) {
            if (callback(arr[i], i)) { // eslint-disable-line node/callback-return
                return arr[i];
            }
        }
    };
/**
 * Internal clear timeout. The function checks that the `id` was not removed
 * (e.g. by `chart.destroy()`). For the details see
 * [issue #7901](https://github.com/highcharts/highcharts/issues/7901).
 *
 * @internal
 *
 * @function Highcharts.clearTimeout
 *
 * @param {number|undefined} id
 * Id of a timeout.
 */
function internalClearTimeout(id) {
    if (defined(id)) {
        clearTimeout(id);
    }
}
/**
 * Utility function to check if an Object is a HTML Element.
 *
 * @function Highcharts.isDOMElement
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a HTML Element.
 */
function isDOMElement(obj) {
    return isObject(obj) && typeof obj.nodeType === 'number';
}
/**
 * Utility function to check if an Object is a class.
 *
 * @function Highcharts.isClass
 *
 * @param {object|undefined} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a class.
 */
function isClass(obj) {
    const c = obj?.constructor;
    return !!(isObject(obj, true) &&
        !isDOMElement(obj) &&
        (c?.name && c.name !== 'Object'));
}
/**
 * Utility function to check if an item is a number and it is finite (not NaN,
 * Infinity or -Infinity).
 *
 * @function Highcharts.isNumber
 *
 * @param {*} n
 *        The item to check.
 *
 * @return {boolean}
 *         True if the item is a finite number
 */
function isNumber(n) {
    return typeof n === 'number' && !isNaN(n) && n < Infinity && n > -Infinity;
}
/**
 * Utility function to check for string type.
 *
 * @function Highcharts.isString
 *
 * @param {*} s
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a string.
 */
function isString(s) {
    return typeof s === 'string';
}
/**
 * Utility function to check if an item is an array.
 *
 * @function Highcharts.isArray
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is an array.
 */
function isArray(obj) {
    const str = Object.prototype.toString.call(obj);
    return str === '[object Array]' || str === '[object Array Iterator]';
}
/**
 * Utility function to check if object is a function.
 *
 * @function Highcharts.isFunction
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a function.
 */
function isFunction(obj) {
    return typeof obj === 'function';
}
/**
 * Utility function to check if an item is of type object.
 *
 * @function Highcharts.isObject
 *
 * @param {*} obj
 *        The item to check.
 *
 * @param {boolean} [strict=false]
 *        Also checks that the object is not an array.
 *
 * @return {boolean}
 *         True if the argument is an object.
 */
function isObject(obj, strict) {
    return (!!obj &&
        typeof obj === 'object' &&
        (!strict || !isArray(obj))); // eslint-disable-line @typescript-eslint/no-explicit-any
}
/**
 * Utility function to deep merge two or more objects and return a third object.
 * If the first argument is true, the contents of the second object is copied
 * into the first object. The merge function can also be used with a single
 * object argument to create a deep copy of an object.
 *
 * @function Highcharts.merge<T>
 *
 * @param {true | T} extendOrSource
 *        Whether to extend the left-side object,
 *        or the first object to merge as a deep copy.
 *
 * @param {...Array<object|undefined>} [sources]
 *        Object(s) to merge into the previous one.
 *
 * @return {T}
 *         The merged object. If the first argument is true, the return is the
 *         same as the second argument.
 */
function merge(extendOrSource, ...sources) {
    let i, args = [extendOrSource, ...sources], ret = {};
    const doCopy = function (copy, original) {
        // An object is replacing a primitive
        if (typeof copy !== 'object') {
            copy = {};
        }
        objectEach(original, function (value, key) {
            // Prototype pollution (#14883)
            if (key === '__proto__' || key === 'constructor') {
                return;
            }
            // Copy the contents of objects, but not arrays or DOM nodes
            if (isObject(value, true) &&
                !isClass(value) &&
                !isDOMElement(value)) {
                copy[key] = doCopy(copy[key] || {}, value);
                // Primitives and arrays are copied over directly
            }
            else {
                copy[key] = original[key];
            }
        });
        return copy;
    };
    // If first argument is true, copy into the existing object. Used in
    // setOptions.
    if (extendOrSource === true) {
        ret = args[1];
        args = Array.prototype.slice.call(args, 2);
    }
    // For each argument, extend the return
    const len = args.length;
    for (i = 0; i < len; i++) {
        ret = doCopy(ret, args[i]);
    }
    return ret;
}
/**
 * Take an interval and normalize it to multiples of round numbers.
 *
 * @deprecated
 * @function Highcharts.normalizeTickInterval
 *
 * @param {number} interval
 *        The raw, un-rounded interval.
 *
 * @param {Array<*>} [multiples]
 *        Allowed multiples.
 *
 * @param {number} [magnitude]
 *        The magnitude of the number.
 *
 * @param {boolean} [allowDecimals]
 *        Whether to allow decimals.
 *
 * @param {boolean} [hasTickAmount]
 *        If it has tickAmount, avoid landing on tick intervals lower than
 *        original.
 *
 * @return {number}
 *         The normalized interval.
 *
 * @todo
 * Move this function to the Axis prototype. It is here only for historical
 * reasons.
 */
function normalizeTickInterval(interval, multiples, magnitude, allowDecimals, hasTickAmount) {
    let i, retInterval = interval;
    // Round to a tenfold of 1, 2, 2.5 or 5
    magnitude = pick(magnitude, getMagnitude(interval));
    const normalized = interval / magnitude;
    // Multiples for a linear scale
    if (!multiples) {
        multiples = hasTickAmount ?
            // Finer grained ticks when the tick amount is hard set, including
            // when alignTicks is true on multiple axes (#4580).
            [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] :
            // Else, let ticks fall on rounder numbers
            [1, 2, 2.5, 5, 10];
        // The allowDecimals option
        if (allowDecimals === false) {
            if (magnitude === 1) {
                multiples = multiples.filter(function (num) {
                    return num % 1 === 0;
                });
            }
            else if (magnitude <= 0.1) {
                multiples = [1 / magnitude];
            }
        }
    }
    // Normalize the interval to the nearest multiple
    for (i = 0; i < multiples.length; i++) {
        retInterval = multiples[i];
        // Only allow tick amounts smaller than natural
        if ((hasTickAmount &&
            retInterval * magnitude >= interval) ||
            (!hasTickAmount &&
                (normalized <=
                    (multiples[i] +
                        (multiples[i + 1] || multiples[i])) / 2))) {
            break;
        }
    }
    // Multiply back to the correct magnitude. Correct floats to appropriate
    // precision (#6085).
    retInterval = correctFloat(retInterval * magnitude, -Math.round(Math.log(0.001) / Math.LN10));
    return retInterval;
}
/* eslint-disable valid-jsdoc */
/**
 * Iterate over object key pairs in an object.
 *
 * @function Highcharts.objectEach<T>
 *
 * @param {*} obj
 *        The object to iterate over.
 *
 * @param {Highcharts.ObjectEachCallbackFunction<T>} fn
 *        The iterator callback. It passes three arguments:
 *        * value - The property value.
 *        * key - The property key.
 *        * obj - The object that objectEach is being applied to.
 *
 * @param {T} [ctx]
 *        The context.
 */
function objectEach(obj, fn, ctx) {
    /* eslint-enable valid-jsdoc */
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            fn.call(ctx || obj[key], obj[key], key, obj);
        }
    }
}
/**
 * Get the element's offset position, corrected for `overflow: auto`.
 *
 * @function Highcharts.offset
 *
 * @param {global.Element} el
 *        The DOM element.
 *
 * @return {Highcharts.OffsetObject}
 *         An object containing `left` and `top` properties for the position in
 *         the page.
 */
function offset(el) {
    const docElem = Utilities_doc.documentElement, box = (el.parentElement || el.parentNode) ?
        el.getBoundingClientRect() :
        { top: 0, left: 0, width: 0, height: 0 };
    return {
        top: box.top + (Utilities_win.pageYOffset || docElem.scrollTop) -
            (docElem.clientTop || 0),
        left: box.left + (Utilities_win.pageXOffset || docElem.scrollLeft) -
            (docElem.clientLeft || 0),
        width: box.width,
        height: box.height
    };
}
/**
 * Left-pad a string to a given length by adding a character repetitively.
 *
 * @function Highcharts.pad
 *
 * @param {number} number
 *        The input string or number.
 *
 * @param {number} [length]
 *        The desired string length.
 *
 * @param {string} [padder=0]
 *        The character to pad with.
 *
 * @return {string}
 *         The padded string.
 */
function pad(number, length, padder) {
    return new Array((length || 2) +
        1 -
        String(number)
            .replace('-', '')
            .length).join(padder || '0') + number;
}
/* eslint-disable valid-jsdoc */
/**
 * Return the first value that is not null or undefined.
 *
 * @function Highcharts.pick<T>
 *
 * @param {...Array<T|null|undefined>} items
 *        Variable number of arguments to inspect.
 *
 * @return {T}
 *         The value of the first argument that is not null or undefined.
 */
function pick() {
    const args = arguments;
    const length = args.length;
    for (let i = 0; i < length; i++) {
        const arg = args[i];
        if (typeof arg !== 'undefined' && arg !== null) {
            return arg;
        }
    }
}
/**
 * Shortcut for parseInt
 *
 * @internal
 * @function Highcharts.pInt
 *
 * @param {*} s
 *        any
 *
 * @param {number} [mag]
 *        Magnitude
 *
 * @return {number}
 *         number
 */
function pInt(s, mag) {
    return parseInt(s, mag || 10);
}
/**
 * Adds an item to an array, if it is not present in the array.
 *
 * @internal
 *
 * @function Highcharts.pushUnique
 *
 * @param {Array<unknown>} array
 * The array to add the item to.
 *
 * @param {unknown} item
 * The item to add.
 *
 * @return {boolean}
 * Returns true, if the item was not present and has been added.
 */
function pushUnique(array, item) {
    return array.indexOf(item) < 0 && !!array.push(item);
}
/**
 * Return a length based on either the integer value, or a percentage of a base.
 *
 * @function Highcharts.relativeLength
 *
 * @param {Highcharts.RelativeSize} value
 *        A percentage string or a number.
 *
 * @param {number} base
 *        The full length that represents 100%.
 *
 * @param {number} [offset=0]
 *        A pixel offset to apply for percentage values. Used internally in
 *        axis positioning.
 *
 * @return {number}
 *         The computed length.
 */
function relativeLength(value, base, offset) {
    return (/%$/).test(value) ?
        (base * parseFloat(value) / 100) + (offset || 0) :
        parseFloat(value);
}
/**
 * Replaces text in a string with a given replacement in a loop to catch nested
 * matches after previous replacements.
 *
 * @internal
 *
 * @function Highcharts.replaceNested
 *
 * @param {string} text
 * Text to search and modify.
 *
 * @param {...Array<(RegExp|string)>} replacements
 * One or multiple tuples with search pattern (`[0]: (string|RegExp)`) and
 * replacement (`[1]: string`) for matching text.
 *
 * @return {string}
 * Text with replacements.
 */
function replaceNested(text, ...replacements) {
    let previous, replacement;
    do {
        previous = text;
        for (replacement of replacements) {
            text = text.replace(replacement[0], replacement[1]);
        }
    } while (text !== previous);
    return text;
}
/* eslint-disable valid-jsdoc */
/**
 * Remove an event that was added with {@link Highcharts#addEvent}.
 *
 * @function Highcharts.removeEvent<T>
 *
 * @param {Highcharts.Class<T>|T} el
 *        The element to remove events on.
 *
 * @param {string} [type]
 *        The type of events to remove. If undefined, all events are removed
 *        from the element.
 *
 * @param {Highcharts.EventCallbackFunction<T>} [fn]
 *        The specific callback to remove. If undefined, all events that match
 *        the element and optionally the type are removed.
 *
 * @return {void}
 */
function removeEvent(el, type, fn) {
    /* eslint-enable valid-jsdoc */
    /** @internal */
    function removeOneEvent(type, fn) {
        const removeEventListener = el.removeEventListener;
        if (removeEventListener) {
            removeEventListener.call(el, type, fn, false);
        }
    }
    /** @internal */
    function removeAllEvents(eventCollection) {
        let types, len;
        if (!el.nodeName) {
            return; // Break on non-DOM events
        }
        if (type) {
            types = {};
            types[type] = true;
        }
        else {
            types = eventCollection;
        }
        objectEach(types, function (_val, n) {
            if (eventCollection[n]) {
                len = eventCollection[n].length;
                while (len--) {
                    removeOneEvent(n, eventCollection[n][len].fn);
                }
            }
        });
    }
    const owner = typeof el === 'function' && el.prototype || el;
    if (Object.hasOwnProperty.call(owner, 'hcEvents')) {
        const events = owner.hcEvents;
        if (type) {
            const typeEvents = (events[type] || []);
            if (fn) {
                events[type] = typeEvents.filter(function (obj) {
                    return fn !== obj.fn;
                });
                removeOneEvent(type, fn);
            }
            else {
                removeAllEvents(events);
                events[type] = [];
            }
        }
        else {
            removeAllEvents(events);
            delete owner.hcEvents;
        }
    }
}
/**
 * Check if an element is an array, and if not, make it into an array.
 *
 * @function Highcharts.splat
 *
 * @param {*} obj
 *        The object to splat.
 *
 * @return {Array}
 *         The produced or original array.
 */
function splat(obj) {
    return isArray(obj) ? obj : [obj];
}
/**
 * Sort an object array and keep the order of equal items. The ECMAScript
 * standard does not specify the behaviour when items are equal.
 *
 * @function Highcharts.stableSort
 *
 * @param {Array<*>} arr
 *        The array to sort.
 *
 * @param {Function} sortFunction
 *        The function to sort it with, like with regular Array.prototype.sort.
 */
function stableSort(arr, sortFunction) {
    // @todo It seems like Chrome since v70 sorts in a stable way internally,
    // plus all other browsers do it, so over time we may be able to remove this
    // function
    const length = arr.length;
    let sortValue, i;
    // Add index to each item
    for (i = 0; i < length; i++) {
        arr[i].safeI = i; // Stable sort index
    }
    arr.sort(function (a, b) {
        sortValue = sortFunction(a, b);
        return sortValue === 0 ? a.safeI - b.safeI : sortValue;
    });
    // Remove index from items
    for (i = 0; i < length; i++) {
        delete arr[i].safeI; // Stable sort index
    }
}
/**
 * Set a timeout if the delay is given, otherwise perform the function
 * synchronously.
 *
 * @function Highcharts.syncTimeout
 *
 * @param {Function} fn
 *        The function callback.
 *
 * @param {number} delay
 *        Delay in milliseconds.
 *
 * @param {*} [context]
 *        An optional context to send to the function callback.
 *
 * @return {number}
 *         An identifier for the timeout that can later be cleared with
 *         Highcharts.clearTimeout. Returns -1 if there is no timeout.
 */
function syncTimeout(fn, delay, context) {
    if (delay > 0) {
        return setTimeout(fn, delay, context);
    }
    fn.call(0, context);
    return -1;
}
/**
 * @internal
 */
function ucfirst(s) {
    return ((isString(s) ?
        s.substring(0, 1).toUpperCase() + s.substring(1) :
        String(s)));
}
/**
 * Wrap a method with extended functionality, preserving the original function.
 *
 * @function Highcharts.wrap
 *
 * @param {*} obj
 *        The context object that the method belongs to. In real cases, this is
 *        often a prototype.
 *
 * @param {string} method
 *        The name of the method to extend.
 *
 * @param {Highcharts.WrapProceedFunction} func
 *        A wrapper function callback. This function is called with the same
 *        arguments as the original function, except that the original function
 *        is unshifted and passed as the first argument.
 */
function wrap(obj, method, func) {
    const proceed = obj[method];
    obj[method] = function () {
        const outerArgs = arguments, scope = this;
        return func.apply(this, [
            function () {
                return proceed.apply(scope, arguments.length ? arguments : outerArgs);
            }
        ].concat([].slice.call(arguments)));
    };
}

;// ./code/es-modules/Extensions/ExportData/ExportData.js
/* *
 *
 *  Experimental data export module for Highcharts
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
// @todo
// - Set up systematic tests for all series types, paired with tests of the data
//   module importing the same data.




const { getOptions, setOptions } = (external_highcharts_src_js_default_default());



const { composed, doc: ExportData_doc, win: ExportData_win } = (external_highcharts_src_js_default_default());

/* *
 *
 *  Composition
 *
 * */
/** @internal */
var ExportData;
(function (ExportData) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Composition function.
     *
     * @internal
     * @function Highcharts.Exporting#compose
     *
     * @param {ChartClass} ChartClass
     * Chart class.
     * @param {ExportingClass} ExportingClass
     * Exporting class.
     * @param {SeriesClass} SeriesClass
     * Series class.
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function compose(ChartClass, ExportingClass, SeriesClass) {
        // Check the composition registry for the Exporting
        if (!pushUnique(composed, 'ExportData')) {
            return;
        }
        // Adding wrappers for the deprecated functions
        extend((external_highcharts_src_js_default_Chart_default()).prototype, {
            downloadCSV: function () {
                return this.exporting?.downloadCSV();
            },
            downloadXLS: function () {
                return this.exporting?.downloadXLS();
            },
            getCSV: function (useLocalDecimalPoint) {
                return this.exporting?.getCSV(useLocalDecimalPoint);
            },
            getDataRows: function (multiLevelHeaders) {
                return this.exporting?.getDataRows(multiLevelHeaders);
            },
            getTable: function (useLocalDecimalPoint) {
                return this.exporting?.getTable(useLocalDecimalPoint);
            },
            getTableAST: function (useLocalDecimalPoint) {
                return this.exporting?.getTableAST(useLocalDecimalPoint);
            },
            hideData: function () {
                return this.exporting?.hideData();
            },
            toggleDataTable: function (show) {
                return this.exporting?.toggleDataTable(show);
            },
            viewData: function () {
                return this.exporting?.viewData();
            }
        });
        const exportingProto = ExportingClass.prototype;
        if (!exportingProto.downloadCSV) {
            // Add an event listener to handle the showTable option
            addEvent(ChartClass, 'afterViewData', onChartAfterViewData);
            addEvent(ChartClass, 'render', onChartRenderer);
            addEvent(ChartClass, 'destroy', onChartDestroy);
            // Adding functions to the Exporting prototype
            exportingProto.downloadCSV = downloadCSV;
            exportingProto.downloadXLS = downloadXLS;
            exportingProto.getCSV = getCSV;
            exportingProto.getDataRows = getDataRows;
            exportingProto.getTable = getTable;
            exportingProto.getTableAST = getTableAST;
            exportingProto.hideData = hideData;
            exportingProto.toggleDataTable = toggleDataTable;
            exportingProto.wrapLoading = wrapLoading;
            exportingProto.viewData = viewData;
            // Update with defaults of the export data module
            setOptions(ExportData_ExportDataDefaults);
            // Additionally, extend the menuItems with the export data variants
            const menuItems = getOptions().exporting?.buttons?.contextButton?.menuItems;
            menuItems && menuItems.push('separator', 'downloadCSV', 'downloadXLS', 'viewData');
            const { arearange: AreaRangeSeries, gantt: GanttSeries, map: MapSeries, mapbubble: MapBubbleSeries, treemap: TreemapSeries, xrange: XRangeSeries } = SeriesClass.types;
            if (AreaRangeSeries) {
                AreaRangeSeries.prototype.keyToAxis = {
                    low: 'y',
                    high: 'y'
                };
            }
            if (GanttSeries) {
                GanttSeries.prototype.exportKey = 'name';
                GanttSeries.prototype.keyToAxis = {
                    start: 'x',
                    end: 'x'
                };
            }
            if (MapSeries) {
                MapSeries.prototype.exportKey = 'name';
            }
            if (MapBubbleSeries) {
                MapBubbleSeries.prototype.exportKey = 'name';
            }
            if (TreemapSeries) {
                TreemapSeries.prototype.exportKey = 'name';
            }
            if (XRangeSeries) {
                XRangeSeries.prototype.keyToAxis = {
                    x2: 'x'
                };
            }
        }
    }
    ExportData.compose = compose;
    /**
     * Generates a data URL of CSV for local download in the browser. This is
     * the default action for a click on the 'Download CSV' button.
     *
     * See {@link Highcharts.Exporting#getCSV} to get the CSV data itself.
     *
     * @function Highcharts.Exporting#downloadCSV
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function downloadCSV() {
        this.wrapLoading(() => {
            const csv = this.getCSV(true);
            downloadURL(getBlobFromContent(csv, 'text/csv') ||
                'data:text/csv,\uFEFF' + encodeURIComponent(csv), this.getFilename() + '.csv');
        });
    }
    /**
     * Generates a data URL of an XLS document for local download in the
     * browser. This is the default action for a click on the 'Download XLS'
     * button.
     *
     * See {@link Highcharts.Exporting#getTable} to get the table data itself.
     *
     * @function Highcharts.Exporting#downloadXLS
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function downloadXLS() {
        this.wrapLoading(() => {
            const uri = 'data:application/vnd.ms-excel;base64,', template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
                'xmlns:x="urn:schemas-microsoft-com:office:excel" ' +
                'xmlns="http://www.w3.org/TR/REC-html40">' +
                '<head><!--[if gte mso 9]><xml><x:ExcelWorkbook>' +
                '<x:ExcelWorksheets><x:ExcelWorksheet>' +
                '<x:Name>Ark1</x:Name>' +
                '<x:WorksheetOptions><x:DisplayGridlines/>' +
                '</x:WorksheetOptions>' +
                '</x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook>' +
                '</xml><![endif]-->' +
                '<style>td{border:none;font-family: Calibri, sans-serif;} ' +
                '.number{mso-number-format:"0.00";} ' +
                '.text{ mso-number-format:"\@";}</style>' +
                '<meta name=ProgId content=Excel.Sheet>' +
                '<meta charset=UTF-8>' +
                '</head><body>' +
                this.getTable(true) +
                '</body></html>', base64 = function (s) {
                return ExportData_win.btoa(unescape(encodeURIComponent(s))); // #50
            };
            downloadURL(getBlobFromContent(template, 'application/vnd.ms-excel') ||
                uri + base64(template), this.getFilename() + '.xls');
        });
    }
    /**
     * Returns the current chart data as a CSV string.
     *
     * @function Highcharts.Exporting#getCSV
     *
     * @param {boolean} [useLocalDecimalPoint]
     * Whether to use the local decimal point as detected from the browser. This
     * makes it easier to export data to Excel in the same locale as the user
     * is.
     *
     * @return {string}
     * CSV representation of the data.
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function getCSV(useLocalDecimalPoint) {
        let csv = '';
        const rows = this.getDataRows(), csvOptions = this.options?.csv, decimalPoint = pick(csvOptions?.decimalPoint, csvOptions?.itemDelimiter !== ',' && useLocalDecimalPoint ?
            (1.1).toLocaleString()[1] :
            '.'), 
        // Use ';' for direct to Excel
        itemDelimiter = pick(csvOptions?.itemDelimiter, decimalPoint === ',' ? ';' : ','), 
        // '\n' isn't working with the js csv data extraction
        lineDelimiter = csvOptions?.lineDelimiter;
        // Transform the rows to CSV
        rows.forEach((row, i) => {
            let val = '', j = row.length;
            while (j--) {
                val = row[j];
                if (typeof val === 'string') {
                    val = `"${val}"`;
                }
                if (typeof val === 'number') {
                    if (decimalPoint !== '.') {
                        val = val.toString().replace('.', decimalPoint);
                    }
                }
                row[j] = val;
            }
            // The first row is the header - it defines the number of columns.
            // Empty columns between not-empty cells are covered in the
            // getDataRows method.
            // Now add empty values only to the end of the row so all rows have
            // the same number of columns, #17186
            row.length = rows.length ? rows[0].length : 0;
            // Add the values
            csv += row.join(itemDelimiter);
            // Add the line delimiter
            if (i < rows.length - 1) {
                csv += lineDelimiter;
            }
        });
        return csv;
    }
    /**
     * Returns a two-dimensional array containing the current chart data.
     *
     * @function Highcharts.Exporting#getDataRows
     *
     * @param {boolean} [multiLevelHeaders]
     * Use multilevel headers for the rows by default. Adds an extra row with
     * top level headers. If a custom columnHeaderFormatter is defined, this can
     * override the behavior.
     *
     * @return {Array<Array<(number | string)>>}
     * The current chart data
     *
     * @emits Highcharts.Chart#event:exportData
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function getDataRows(multiLevelHeaders) {
        const chart = this.chart, hasParallelCoords = chart.hasParallelCoordinates, time = chart.time, csvOptions = this.options?.csv || {}, xAxes = chart.xAxis, rows = {}, rowArr = [], topLevelColumnTitles = [], columnTitles = [], langOptions = chart.options.lang, exportDataOptions = langOptions.exportData, categoryHeader = exportDataOptions?.categoryHeader, categoryDatetimeHeader = exportDataOptions?.categoryDatetimeHeader, 
        // Options
        columnHeaderFormatter = function (item, key, keyLength) {
            if (csvOptions.columnHeaderFormatter) {
                const s = csvOptions.columnHeaderFormatter(item, key, keyLength);
                if (s !== false) {
                    return s;
                }
            }
            if (!item && categoryHeader) {
                return categoryHeader;
            }
            if (!item.bindAxes &&
                categoryDatetimeHeader &&
                categoryHeader) {
                return (item.options.title &&
                    item.options.title.text) || (item.dateTime ?
                    categoryDatetimeHeader :
                    categoryHeader);
            }
            if (multiLevelHeaders) {
                return {
                    columnTitle: ((keyLength || 0) > 1 ?
                        key :
                        item.name) || '',
                    topLevelColumnTitle: item.name
                };
            }
            return item.name + ((keyLength || 0) > 1 ? ' (' + key + ')' : '');
        }, 
        // Map the categories for value axes
        getCategoryAndDateTimeMap = function (series, pointArrayMap, pIdx) {
            const categoryMap = {}, dateTimeValueAxisMap = {};
            pointArrayMap.forEach(function (prop) {
                const axisName = ((series.keyToAxis && series.keyToAxis[prop]) ||
                    prop) + 'Axis', 
                // Points in parallel coordinates refers to all yAxis
                // not only `series.yAxis`
                axis = isNumber(pIdx) ?
                    series.chart[axisName][pIdx] :
                    series[axisName];
                categoryMap[prop] = (axis && axis.categories) || [];
                dateTimeValueAxisMap[prop] = (axis && axis.dateTime);
            });
            return {
                categoryMap: categoryMap,
                dateTimeValueAxisMap: dateTimeValueAxisMap
            };
        }, 
        // Create point array depends if xAxis is category
        // or point.name is defined #13293
        getPointArray = function (series, xAxis) {
            const pointArrayMap = series.pointArrayMap || ['y'], namedPoints = series.data.some((d) => (typeof d.y !== 'undefined') && d.name);
            // If there are points with a name, we also want the x value in
            // the table
            if (namedPoints &&
                xAxis &&
                !xAxis.categories &&
                series.exportKey !== 'name') {
                return ['x', ...pointArrayMap];
            }
            return pointArrayMap;
        }, xAxisIndices = [];
        let xAxis, dataRows, columnTitleObj, i = 0, // Loop the series and index values
        x, xTitle;
        chart.series.forEach(function (series) {
            const keys = series.options.keys, xAxis = series.xAxis, pointArrayMap = keys || getPointArray(series, xAxis), valueCount = pointArrayMap.length, xTaken = !series.requireSorting && {}, xAxisIndex = xAxes.indexOf(xAxis);
            let categoryAndDatetimeMap = getCategoryAndDateTimeMap(series, pointArrayMap), mockSeries, j;
            if (series.options.includeInDataExport !== false &&
                !series.options.isInternal &&
                series.visible !== false // #55
            ) {
                // Build a lookup for X axis index and the position of the first
                // series that belongs to that X axis. Includes -1 for non-axis
                // series types like pies.
                if (!find(xAxisIndices, function (index) {
                    return index[0] === xAxisIndex;
                })) {
                    xAxisIndices.push([xAxisIndex, i]);
                }
                // Compute the column headers and top level headers, usually the
                // same as series names
                j = 0;
                while (j < valueCount) {
                    columnTitleObj = columnHeaderFormatter(series, pointArrayMap[j], pointArrayMap.length);
                    columnTitles.push(columnTitleObj.columnTitle ||
                        columnTitleObj);
                    if (multiLevelHeaders) {
                        topLevelColumnTitles.push(columnTitleObj.topLevelColumnTitle ||
                            columnTitleObj);
                    }
                    j++;
                }
                mockSeries = {
                    chart: series.chart,
                    autoIncrement: series.autoIncrement,
                    options: series.options,
                    pointArrayMap: series.pointArrayMap,
                    index: series.index
                };
                // Export directly from options.data because we need the
                // uncropped data (#7913), and we need to support Boost (#7026).
                series.options.data?.forEach(function eachData(options, pIdx) {
                    const mockPoint = { series: mockSeries };
                    let key, prop, val;
                    // In parallel coordinates chart, each data point is
                    // connected to a separate yAxis, conform this
                    if (hasParallelCoords) {
                        categoryAndDatetimeMap = getCategoryAndDateTimeMap(series, pointArrayMap, pIdx);
                    }
                    series.pointClass.prototype.applyOptions.apply(mockPoint, [options]);
                    const name = series.data[pIdx] && series.data[pIdx].name;
                    key = (mockPoint.x ?? '') + ',' + name;
                    j = 0;
                    // Pies, funnels, geo maps etc. use point name in X row
                    if (!xAxis ||
                        series.exportKey === 'name' ||
                        (!hasParallelCoords && xAxis && xAxis.hasNames) && name) {
                        key = name;
                    }
                    if (xTaken) {
                        if (xTaken[key]) {
                            key += '|' + pIdx;
                        }
                        xTaken[key] = true;
                    }
                    if (!rows[key]) {
                        rows[key] = [];
                        rows[key].xValues = [];
                        // ES5 replacement for Array.from / fill.
                        const arr = [];
                        for (let i = 0; i < series.chart.series.length; i++) {
                            arr[i] = 0;
                        }
                        // Create pointers array, holding information how many
                        // duplicates of specific x occurs in each series.
                        // Used for creating rows with duplicates.
                        rows[key].pointers = arr;
                        rows[key].pointers[series.index] = 1;
                    }
                    else {
                        // Handle duplicates (points with the same x), by
                        // creating extra rows based on pointers for better
                        // performance.
                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                        const modifiedKey = `${key},${rows[key].pointers[series.index]}`, originalKey = key;
                        if (rows[key].pointers[series.index]) {
                            if (!rows[modifiedKey]) {
                                rows[modifiedKey] = [];
                                rows[modifiedKey].xValues = [];
                                rows[modifiedKey].pointers = [];
                            }
                            key = modifiedKey;
                        }
                        rows[originalKey].pointers[series.index] += 1;
                    }
                    rows[key].x = mockPoint.x;
                    rows[key].name = name;
                    rows[key].xValues[xAxisIndex] = mockPoint.x;
                    while (j < valueCount) {
                        prop = pointArrayMap[j]; // `y`, `z` etc
                        val =
                            series.pointClass.prototype.getNestedProperty.apply(mockPoint, [prop]);
                        // Allow values from nested properties (#20470)
                        rows[key][i + j] = pick(
                        // Y axis category if present
                        categoryAndDatetimeMap.categoryMap[prop][val], 
                        // Datetime yAxis
                        categoryAndDatetimeMap.dateTimeValueAxisMap[prop] ?
                            time.dateFormat(csvOptions.dateFormat, val) :
                            null, 
                        // Linear/log yAxis
                        val);
                        j++;
                    }
                });
                i = i + j;
            }
        });
        // Make a sortable array
        for (x in rows) {
            if (Object.hasOwnProperty.call(rows, x)) {
                rowArr.push(rows[x]);
            }
        }
        let xAxisIndex, column;
        // Add computed column headers and top level headers to final row set
        dataRows = multiLevelHeaders ? [topLevelColumnTitles, columnTitles] :
            [columnTitles];
        i = xAxisIndices.length;
        while (i--) { // Start from end to splice in
            xAxisIndex = xAxisIndices[i][0];
            column = xAxisIndices[i][1];
            xAxis = xAxes[xAxisIndex];
            // Sort it by X values
            rowArr.sort(function (// eslint-disable-line no-loop-func
            a, b) {
                return a.xValues[xAxisIndex] - b.xValues[xAxisIndex];
            });
            // Add header row
            xTitle = columnHeaderFormatter(xAxis);
            dataRows[0].splice(column, 0, xTitle);
            if (multiLevelHeaders && dataRows[1]) {
                // If using multi level headers, we just added top level header.
                // Also add for sub level
                dataRows[1].splice(column, 0, xTitle);
            }
            // Add the category column
            rowArr.forEach(function (// eslint-disable-line no-loop-func
            row) {
                let category = row.name;
                if (xAxis && !defined(category)) {
                    if (xAxis.dateTime) {
                        if (row.x instanceof Date) {
                            row.x = row.x.getTime();
                        }
                        category = time.dateFormat(csvOptions.dateFormat, row.x);
                    }
                    else if (xAxis.categories) {
                        category = pick(xAxis.names[row.x], xAxis.categories[row.x], row.x);
                    }
                    else {
                        category = row.x;
                    }
                }
                // Add the X/date/category
                row.splice(column, 0, category);
            });
        }
        dataRows = dataRows.concat(rowArr);
        fireEvent(chart, 'exportData', { dataRows });
        return dataRows;
    }
    /**
     * Build a HTML table with the chart's current data.
     *
     * @sample highcharts/export-data/viewdata/
     * View the data from the export menu
     *
     * @function Highcharts.Exporting#getTable
     *
     * @param {boolean} [useLocalDecimalPoint]
     * Whether to use the local decimal point as detected from the browser. This
     * makes it easier to export data to Excel in the same locale as the user
     * is.
     *
     * @return {string}
     * HTML representation of the data.
     *
     * @emits Highcharts.Chart#event:afterGetTable
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function getTable(useLocalDecimalPoint) {
        const serialize = (node) => {
            if (!node.tagName || node.tagName === '#text') {
                // Text node
                return node.textContent || '';
            }
            const attributes = node.attributes;
            let html = `<${node.tagName}`;
            if (attributes) {
                Object.keys(attributes)
                    .forEach((key) => {
                    const value = attributes[key];
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    html += ` ${key}="${value}"`;
                });
            }
            html += '>';
            html += node.textContent || '';
            (node.children || []).forEach((child) => {
                html += serialize(child);
            });
            html += `</${node.tagName}>`;
            return html;
        };
        const tree = this.getTableAST(useLocalDecimalPoint);
        return serialize(tree);
    }
    /**
     * Get the AST of a HTML table representing the chart data.
     *
     * @internal
     * @function Highcharts.Exporting#getTableAST
     *
     * @param {boolean} [useLocalDecimalPoint]
     * Whether to use the local decimal point as detected from the browser. This
     * makes it easier to export data to Excel in the same locale as the user
     * is.
     *
     * @return {Highcharts.ASTNode}
     * The abstract syntax tree
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function getTableAST(useLocalDecimalPoint) {
        let rowLength = 0;
        const treeChildren = [], exporting = this, chart = exporting.chart, options = chart.options, decimalPoint = useLocalDecimalPoint ? (1.1).toLocaleString()[1] : '.', useMultiLevelHeaders = pick(exporting.options.useMultiLevelHeaders, true), rows = exporting.getDataRows(useMultiLevelHeaders), topHeaders = useMultiLevelHeaders ? rows.shift() : null, subHeaders = rows.shift(), 
        // Compare two rows for equality
        isRowEqual = function (row1, row2) {
            let i = row1.length;
            if (row2.length === i) {
                while (i--) {
                    if (row1[i] !== row2[i]) {
                        return false;
                    }
                }
            }
            else {
                return false;
            }
            return true;
        }, 
        // Get table cell HTML from value
        getCellHTMLFromValue = function (tagName, classes, attributes, value) {
            let textContent = pick(value, ''), className = 'highcharts-text' + (classes ? ' ' + classes : '');
            // Convert to string if number
            if (typeof textContent === 'number') {
                textContent = chart.numberFormatter(textContent, -1, decimalPoint, tagName === 'th' ? '' : void 0);
                className = 'highcharts-number';
            }
            else if (!value) {
                className = 'highcharts-empty';
            }
            attributes = extend({ 'class': className }, attributes);
            return {
                tagName,
                attributes,
                textContent
            };
        }, 
        // Get table header markup from row data
        getTableHeaderHTML = function (topheaders, subheaders, rowLength) {
            const theadChildren = [];
            let i = 0, len = rowLength || subheaders && subheaders.length, next, cur, curColspan = 0, rowspan;
            // Clean up multiple table headers. Chart.getDataRows() returns
            // two levels of headers when using multilevel, not merged. We
            // need to merge identical headers, remove redundant headers,
            // and keep it all marked up nicely.
            if (useMultiLevelHeaders &&
                topheaders &&
                subheaders &&
                !isRowEqual(topheaders, subheaders)) {
                const trChildren = [];
                for (; i < len; ++i) {
                    cur = topheaders[i];
                    next = topheaders[i + 1];
                    if (cur === next) {
                        ++curColspan;
                    }
                    else if (curColspan) {
                        // Ended colspan
                        // Add cur to HTML with colspan.
                        trChildren.push(getCellHTMLFromValue('th', 'highcharts-table-topheading', {
                            scope: 'col',
                            colspan: curColspan + 1
                        }, cur));
                        curColspan = 0;
                    }
                    else {
                        // Cur is standalone. If it is same as sublevel,
                        // remove sublevel and add just toplevel.
                        if (cur === subheaders[i]) {
                            if (exporting.options.useRowspanHeaders) {
                                rowspan = 2;
                                // eslint-disable-next-line @typescript-eslint/no-array-delete
                                delete subheaders[i];
                            }
                            else {
                                rowspan = 1;
                                subheaders[i] = '';
                            }
                        }
                        else {
                            rowspan = 1;
                        }
                        const cell = getCellHTMLFromValue('th', 'highcharts-table-topheading', { scope: 'col' }, cur);
                        if (rowspan > 1 && cell.attributes) {
                            cell.attributes.valign = 'top';
                            cell.attributes.rowspan = rowspan;
                        }
                        trChildren.push(cell);
                    }
                }
                theadChildren.push({
                    tagName: 'tr',
                    children: trChildren
                });
            }
            // Add the subheaders (the only headers if not using
            // multilevels)
            if (subheaders) {
                const trChildren = [];
                for (i = 0, len = subheaders.length; i < len; ++i) {
                    if (typeof subheaders[i] !== 'undefined') {
                        trChildren.push(getCellHTMLFromValue('th', null, { scope: 'col' }, subheaders[i]));
                    }
                }
                theadChildren.push({
                    tagName: 'tr',
                    children: trChildren
                });
            }
            return {
                tagName: 'thead',
                children: theadChildren
            };
        };
        // Add table caption
        const { tableCaption } = exporting.options || {};
        if (tableCaption !== false) {
            treeChildren.push({
                tagName: 'caption',
                attributes: {
                    'class': 'highcharts-table-caption'
                },
                textContent: typeof tableCaption === 'string' ?
                    tableCaption :
                    options.title?.text || options.lang.chartTitle
            });
        }
        // Find longest row
        for (let i = 0, len = rows.length; i < len; ++i) {
            if (rows[i].length > rowLength) {
                rowLength = rows[i].length;
            }
        }
        // Add header
        treeChildren.push(getTableHeaderHTML(topHeaders, subHeaders || [], Math.max(rowLength, subHeaders?.length || 0)));
        // Transform the rows to HTML
        const trs = [];
        rows.forEach(function (row) {
            const trChildren = [];
            for (let j = 0; j < rowLength; j++) {
                // Make first column a header too. Especially important for
                // category axes, but also might make sense for datetime? Should
                // await user feedback on this.
                trChildren.push(getCellHTMLFromValue(j ? 'td' : 'th', null, j ? {} : { scope: 'row' }, row[j]));
            }
            trs.push({
                tagName: 'tr',
                children: trChildren
            });
        });
        treeChildren.push({
            tagName: 'tbody',
            children: trs
        });
        const e = {
            tree: {
                tagName: 'table',
                id: `highcharts-data-table-${chart.index}`,
                children: treeChildren
            }
        };
        fireEvent(chart, 'afterGetTableAST', e);
        return e.tree;
    }
    /**
     * Hide the data table when visible.
     *
     * @function Highcharts.Exporting#hideData
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function hideData() {
        this.toggleDataTable(false);
    }
    /**
     * Toggle showing data table.
     *
     * @internal
     * @function Highcharts.Exporting#toggleDataTable
     *
     * @param {boolean} [show]
     * Whether to show data table or not.
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function toggleDataTable(show) {
        const chart = this.chart, 
        // Create the div
        createContainer = (show = pick(show, !this.isDataTableVisible)) &&
            !this.dataTableDiv;
        if (createContainer) {
            this.dataTableDiv = ExportData_doc.createElement('div');
            this.dataTableDiv.className = 'highcharts-data-table';
            // Insert after the chart container
            chart.renderTo.parentNode.insertBefore(this.dataTableDiv, chart.renderTo.nextSibling);
        }
        // Toggle the visibility
        if (this.dataTableDiv) {
            const style = this.dataTableDiv.style, oldDisplay = style.display;
            style.display = show ? 'block' : 'none';
            // Generate the data table
            if (show) {
                this.dataTableDiv.innerHTML = (external_highcharts_src_js_default_AST_default()).emptyHTML;
                const ast = new (external_highcharts_src_js_default_AST_default())([this.getTableAST()]);
                ast.addToDOM(this.dataTableDiv);
                fireEvent(chart, 'afterViewData', {
                    element: this.dataTableDiv,
                    wasHidden: createContainer || oldDisplay !== style.display
                });
            }
            else {
                fireEvent(chart, 'afterHideData');
            }
        }
        // Set the flag
        this.isDataTableVisible = show;
        // Change the menu item text
        const exportDivElements = this.divElements, options = this.options, menuItems = options.buttons?.contextButton.menuItems, lang = chart.options.lang;
        if (options &&
            options.menuItemDefinitions &&
            lang &&
            lang.viewData &&
            lang.hideData &&
            menuItems &&
            exportDivElements) {
            const exportDivElement = exportDivElements[menuItems.indexOf('viewData')];
            if (exportDivElement) {
                external_highcharts_src_js_default_AST_default().setElementHTML(exportDivElement, this.isDataTableVisible ? lang.hideData : lang.viewData);
            }
        }
    }
    /**
     * View the data in a table below the chart.
     *
     * @function Highcharts.Exporting#viewData
     *
     * @emits Highcharts.Chart#event:afterViewData
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function viewData() {
        this.toggleDataTable(true);
    }
    /**
     * Wrapper function for the download functions, which handles showing and
     * hiding the loading message.
     *
     * @internal
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function wrapLoading(fn) {
        const chart = this.chart, showMessage = Boolean(this.options.showExportInProgress);
        // Prefer requestAnimationFrame if available
        const timeoutFn = ExportData_win.requestAnimationFrame || setTimeout;
        // Outer timeout avoids menu freezing on click
        timeoutFn(() => {
            showMessage &&
                chart.showLoading(chart.options.lang.exportInProgress);
            timeoutFn(() => {
                try {
                    fn.call(this);
                }
                finally {
                    showMessage && chart.hideLoading();
                }
            });
        });
    }
    /**
     * Function that runs on the chart's 'afterViewData' event.
     *
     * @internal
     * @function Highcharts.Chart#onChartAfterViewData
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function onChartAfterViewData() {
        const exporting = this.exporting, dataTableDiv = exporting?.dataTableDiv, getCellValue = (tr, index) => tr.children[index].textContent, comparer = (index, ascending) => (a, b) => {
            const sort = (v1, v2) => (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ?
                v1 - v2 :
                v1.toString().localeCompare(v2));
            return sort(getCellValue(ascending ? a : b, index), getCellValue(ascending ? b : a, index));
        };
        if (dataTableDiv && exporting.options.allowTableSorting) {
            const row = dataTableDiv.querySelector('thead tr');
            if (row) {
                row.childNodes.forEach((th) => {
                    const tableBody = dataTableDiv.querySelector('tbody');
                    th.addEventListener('click', function () {
                        const rows = [...dataTableDiv.querySelectorAll('tr:not(thead tr)')], headers = [...th.parentNode.children];
                        if (exporting) {
                            rows.sort(comparer(headers.indexOf(th), exporting.ascendingOrderInTable =
                                !exporting.ascendingOrderInTable)).forEach((tr) => {
                                tableBody?.appendChild(tr);
                            });
                            headers.forEach((th) => {
                                [
                                    'highcharts-sort-ascending',
                                    'highcharts-sort-descending'
                                ].forEach((className) => {
                                    if (th.classList.contains(className)) {
                                        th.classList.remove(className);
                                    }
                                });
                            });
                            th.classList.add(exporting.ascendingOrderInTable ?
                                'highcharts-sort-ascending' :
                                'highcharts-sort-descending');
                        }
                    });
                });
            }
        }
    }
    /**
     * Function that runs on the chart's 'render' event. Handle the showTable
     * option.
     *
     * @internal
     * @function Highcharts.Chart#onChartRenderer
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function onChartRenderer() {
        if (this.options?.exporting?.showTable &&
            !this.options.chart.forExport) {
            this.exporting?.viewData();
        }
    }
    /**
     * Function that runs on the chart's 'destroy' event. Handle cleaning up the
     * dataTableDiv element.
     *
     * @internal
     * @function Highcharts.Chart#onChartDestroy
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function onChartDestroy() {
        this.exporting?.dataTableDiv?.remove();
    }
})(ExportData || (ExportData = {}));
/* *
 *
 * Default Export
 *
 * */
/** @internal */
/* harmony default export */ const ExportData_ExportData = (ExportData);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Function callback to execute while data rows are processed for exporting.
 * This allows the modification of data rows before processed into the final
 * format.
 *
 * @callback Highcharts.ExportDataCallbackFunction
 * @extends Highcharts.EventCallbackFunction<Highcharts.Chart>
 *
 * @param {Highcharts.Chart} this
 * Chart context where the event occurred.
 *
 * @param {Highcharts.ExportDataEventObject} event
 * Event object with data rows that can be modified.
 */
/**
 * Contains information about the export data event.
 *
 * @interface Highcharts.ExportDataEventObject
 */ /**
* Contains the data rows for the current export task and can be modified.
* @name Highcharts.ExportDataEventObject#dataRows
* @type {Array<Array<string>>}
*/
(''); // Keeps doclets above in JS file

;// ./code/es-modules/masters/modules/export-data.src.js





const G = (external_highcharts_src_js_default_default());
// Compatibility
G.dataURLtoBlob = G.dataURLtoBlob || Shared_DownloadURL.dataURLtoBlob;
G.downloadURL = G.downloadURL || Shared_DownloadURL.downloadURL;
// Compose
ExportData_ExportData.compose(G.Chart, G.Exporting, G.Series);
/* harmony default export */ const export_data_src = ((external_highcharts_src_js_default_default()));

export { export_data_src as default };
