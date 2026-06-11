// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/stock-tools
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Advanced Highcharts Stock tools
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
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
;// ./code/es-modules/Core/Chart/ChartNavigationComposition.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Paweł Fus
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 * */

/* *
 *
 *  Composition
 *
 * */
/** @internal */
var ChartNavigationComposition;
(function (ChartNavigationComposition) {
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
    /** @internal */
    function compose(chart) {
        if (!chart.navigation) {
            chart.navigation = new Additions(chart);
        }
        return chart;
    }
    ChartNavigationComposition.compose = compose;
    /* *
     *
     *  Class
     *
     * */
    /**
     * Initializes `chart.navigation` object which delegates `update()` methods
     * to all other common classes (used in exporting and navigationBindings).
     * @internal
     */
    class Additions {
        /* *
         *
         *  Constructor
         *
         * */
        /** @internal */
        constructor(chart) {
            /** @internal */
            this.updates = [];
            this.chart = chart;
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Registers an `update()` method in the `chart.navigation` object.
         *
         * @internal
         * @param {UpdateFunction} updateFn
         * The `update()` method that will be called in `chart.update()`.
         */
        addUpdate(updateFn) {
            this.chart.navigation.updates.push(updateFn);
        }
        /** @internal */
        update(options, redraw) {
            this.updates.forEach((updateFn) => {
                updateFn.call(this.chart, options, redraw);
            });
        }
    }
    ChartNavigationComposition.Additions = Additions;
})(ChartNavigationComposition || (ChartNavigationComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Chart_ChartNavigationComposition = (ChartNavigationComposition);

;// external ["../highcharts.src.js","default","Templating"]
const external_highcharts_src_js_default_Templating_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Templating;
var external_highcharts_src_js_default_Templating_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Templating_namespaceObject);
;// ./code/es-modules/Extensions/Annotations/NavigationBindingsUtilities.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Highsoft, Black Label
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


/* *
 *
 *  Constants
 *
 * */
/**
 * Define types for editable fields per annotation. There is no need to define
 * numbers, because they won't change their type to string.
 * @internal
 */
const annotationsFieldsTypes = {
    backgroundColor: 'color',
    backgroundColors: 'color',
    borderColor: 'color',
    borderRadius: 'string',
    color: 'color',
    fill: 'color',
    fontSize: 'string',
    labels: 'string',
    name: 'string',
    stroke: 'color',
    title: 'string'
};
/* *
 *
 *  Functions
 *
 * */
/**
 * Returns the first xAxis or yAxis that was clicked with its value.
 *
 * @internal
 *
 * @param {Array<Highcharts.PointerAxisCoordinateObject>} coords
 *        All the chart's x or y axes with a current pointer's axis value.
 *
 * @return {Highcharts.PointerAxisCoordinateObject}
 *         Object with a first found axis and its value that pointer
 *         is currently pointing.
 */
function getAssignedAxis(coords) {
    return coords.filter((coord) => {
        const extremes = coord.axis.getExtremes(), axisMin = extremes.min, axisMax = extremes.max, 
        // Correct axis edges when axis has series
        // with pointRange (like column)
        minPointOffset = (0,external_highcharts_src_js_default_namespaceObject.pick)(coord.axis.minPointOffset, 0);
        return (0,external_highcharts_src_js_default_namespaceObject.isNumber)(axisMin) && (0,external_highcharts_src_js_default_namespaceObject.isNumber)(axisMax) &&
            coord.value >= (axisMin - minPointOffset) &&
            coord.value <= (axisMax + minPointOffset) &&
            // Don't count navigator axis
            !coord.axis.options.isInternal;
    })[0]; // If the axes overlap, return the first axis that was found.
}
/**
 * Get field type according to value
 *
 * @internal
 *
 * @return {'checkbox'|'color'|'number'|'text'}
 * Field type (one of: text, number, checkbox, color)
 */
function getFieldType(key, value) {
    const predefinedType = annotationsFieldsTypes[key];
    let fieldType = typeof value;
    if ((0,external_highcharts_src_js_default_namespaceObject.defined)(predefinedType)) {
        fieldType = predefinedType;
    }
    return {
        'string': 'text',
        'number': 'number',
        'boolean': 'checkbox',
        'color': 'color'
    }[fieldType];
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const NavigationBindingUtilities = {
    annotationsFieldsTypes,
    getAssignedAxis,
    getFieldType
};
/** @internal */
/* harmony default export */ const NavigationBindingsUtilities = (NavigationBindingUtilities);

;// ./code/es-modules/Extensions/Annotations/NavigationBindingsDefaults.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Highsoft, Black Label
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { getAssignedAxis: NavigationBindingsDefaults_getAssignedAxis } = NavigationBindingsUtilities;

/* *
 *
 *  Constants
 *
 * */
/**
 * @optionparent lang
 */
const lang = {
    /**
     * Configure the Popup strings in the chart. Requires the
     * `annotations.js` or `annotations-advanced.src.js` module to be
     * loaded.
     * @since   7.0.0
     * @product highcharts highstock
     */
    navigation: {
        /**
         * Translations for all field names used in popup.
         *
         * @product highcharts highstock
         */
        popup: {
            simpleShapes: 'Simple shapes',
            lines: 'Lines',
            circle: 'Circle',
            ellipse: 'Ellipse',
            rectangle: 'Rectangle',
            label: 'Label',
            shapeOptions: 'Shape options',
            typeOptions: 'Details',
            fill: 'Fill',
            format: 'Text',
            strokeWidth: 'Line width',
            stroke: 'Line color',
            title: 'Title',
            name: 'Name',
            labelOptions: 'Label options',
            labels: 'Labels',
            backgroundColor: 'Background color',
            backgroundColors: 'Background colors',
            borderColor: 'Border color',
            borderRadius: 'Border radius',
            borderWidth: 'Border width',
            style: 'Style',
            padding: 'Padding',
            fontSize: 'Font size',
            color: 'Color',
            height: 'Height',
            shapes: 'Shape options'
        }
    }
};
/**
 * @optionparent navigation
 * @product      highcharts highstock
 */
const navigation = {
    /**
     * A CSS class name where all bindings will be attached to. Multiple
     * charts on the same page should have separate class names to prevent
     * duplicating events.
     *
     * Default value of versions < 7.0.4 `highcharts-bindings-wrapper`
     *
     * @since     7.0.0
     * @type      {string}
     */
    bindingsClassName: 'highcharts-bindings-container',
    /**
     * Bindings definitions for custom HTML buttons. Each binding implements
     * simple event-driven interface:
     *
     * - `className`: classname used to bind event to
     *
     * - `init`: initial event, fired on button click
     *
     * - `start`: fired on first click on a chart
     *
     * - `steps`: array of sequential events fired one after another on each
     *   of users clicks
     *
     * - `end`: last event to be called after last step event
     *
     * @type         {Highcharts.Dictionary<Highcharts.NavigationBindingsOptionsObject>|*}
     *
     * @sample {highstock} stock/stocktools/stocktools-thresholds
     *               Custom bindings
     * @sample {highcharts} highcharts/annotations/bindings/
     *               Simple binding
     * @sample {highcharts} highcharts/annotations/bindings-custom-annotation/
     *               Custom annotation binding
     *
     * @since        7.0.0
     * @requires     modules/annotations
     * @product      highcharts highstock
     */
    bindings: {
        /**
         * A circle annotation bindings. Includes `start` and one event in
         * `steps` array.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-circle-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        circleAnnotation: {
            /** @ignore-option */
            className: 'highcharts-circle-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.circleAnnotation.annotationsOptions
             */
            /** @ignore-option */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis), navigation = this.chart.options.navigation;
                // Exit if clicked out of axes area
                if (!coordsX || !coordsY) {
                    return;
                }
                return this.chart.addAnnotation((0,external_highcharts_src_js_default_namespaceObject.merge)({
                    langKey: 'circle',
                    type: 'basicAnnotation',
                    shapes: [{
                            type: 'circle',
                            point: {
                                x: coordsX.value,
                                y: coordsY.value,
                                xAxis: coordsX.axis.index,
                                yAxis: coordsY.axis.index
                            },
                            r: 5
                        }]
                }, navigation.annotationsOptions, navigation.bindings.circleAnnotation
                    .annotationsOptions));
            },
            /** @ignore-option */
            steps: [
                function (e, annotation) {
                    const shapes = annotation.options.shapes, mockPointOpts = ((shapes && shapes[0] && shapes[0].point) ||
                        {});
                    let distance;
                    if ((0,external_highcharts_src_js_default_namespaceObject.isNumber)(mockPointOpts.xAxis) &&
                        (0,external_highcharts_src_js_default_namespaceObject.isNumber)(mockPointOpts.yAxis)) {
                        const inverted = this.chart.inverted, x = this.chart.xAxis[mockPointOpts.xAxis]
                            .toPixels(mockPointOpts.x), y = this.chart.yAxis[mockPointOpts.yAxis]
                            .toPixels(mockPointOpts.y);
                        distance = Math.max(Math.sqrt(Math.pow(inverted ? y - e.chartX : x - e.chartX, 2) +
                            Math.pow(inverted ? x - e.chartY : y - e.chartY, 2)), 5);
                    }
                    annotation.update({
                        shapes: [{
                                r: distance
                            }]
                    });
                }
            ]
        },
        /**
         * An ellipse annotation bindings. Includes `start` and two events in
         * `steps` array. First updates the second point, responsible for a
         * rx width, and second updates the ry width.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-ellipse-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        ellipseAnnotation: {
            className: 'highcharts-ellipse-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.ellipseAnnotation.annotationsOptions
             */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis), navigation = this.chart.options.navigation;
                if (!coordsX || !coordsY) {
                    return;
                }
                return this.chart.addAnnotation((0,external_highcharts_src_js_default_namespaceObject.merge)({
                    langKey: 'ellipse',
                    type: 'basicAnnotation',
                    shapes: [
                        {
                            type: 'ellipse',
                            xAxis: coordsX.axis.index,
                            yAxis: coordsY.axis.index,
                            points: [{
                                    x: coordsX.value,
                                    y: coordsY.value
                                }, {
                                    x: coordsX.value,
                                    y: coordsY.value
                                }],
                            ry: 1
                        }
                    ]
                }, navigation.annotationsOptions, navigation.bindings.ellipseAnnotation
                    .annotationsOptions));
            },
            steps: [
                function (e, annotation) {
                    const target = annotation.shapes[0], position = target.getAbsolutePosition(target.points[1]);
                    target.translatePoint(e.chartX - position.x, e.chartY - position.y, 1);
                    target.redraw(false);
                },
                function (e, annotation) {
                    const target = annotation.shapes[0], position = target.getAbsolutePosition(target.points[0]), position2 = target.getAbsolutePosition(target.points[1]), newR = target.getDistanceFromLine(position, position2, e.chartX, e.chartY), yAxis = target.getYAxis(), newRY = Math.abs(yAxis.toValue(0) - yAxis.toValue(newR));
                    target.setYRadius(newRY);
                    target.redraw(false);
                }
            ]
        },
        /**
         * A rectangle annotation bindings. Includes `start` and one event
         * in `steps` array.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-rectangle-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        rectangleAnnotation: {
            /** @ignore-option */
            className: 'highcharts-rectangle-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.rectangleAnnotation.annotationsOptions
             */
            /** @ignore-option */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis);
                // Exit if clicked out of axes area
                if (!coordsX || !coordsY) {
                    return;
                }
                const x = coordsX.value, y = coordsY.value, xAxis = coordsX.axis.index, yAxis = coordsY.axis.index, navigation = this.chart.options.navigation;
                return this.chart.addAnnotation((0,external_highcharts_src_js_default_namespaceObject.merge)({
                    langKey: 'rectangle',
                    type: 'basicAnnotation',
                    shapes: [{
                            type: 'path',
                            points: [
                                { xAxis, yAxis, x, y },
                                { xAxis, yAxis, x, y },
                                { xAxis, yAxis, x, y },
                                { xAxis, yAxis, x, y },
                                { command: 'Z' }
                            ]
                        }]
                }, navigation
                    .annotationsOptions, navigation
                    .bindings
                    .rectangleAnnotation
                    .annotationsOptions));
            },
            /** @ignore-option */
            steps: [
                function (e, annotation) {
                    const shapes = annotation.options.shapes, points = ((shapes && shapes[0] && shapes[0].points) ||
                        []), coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis);
                    if (coordsX && coordsY) {
                        const x = coordsX.value, y = coordsY.value;
                        // Top right point
                        points[1].x = x;
                        // Bottom right point (cursor position)
                        points[2].x = x;
                        points[2].y = y;
                        // Bottom left
                        points[3].y = y;
                        annotation.update({
                            shapes: [{
                                    points: points
                                }]
                        });
                    }
                }
            ]
        },
        /**
         * A label annotation bindings. Includes `start` event only.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-label-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        labelAnnotation: {
            /** @ignore-option */
            className: 'highcharts-label-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.labelAnnotation.annotationsOptions
             */
            /** @ignore-option */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis), navigation = this.chart.options.navigation;
                // Exit if clicked out of axes area
                if (!coordsX || !coordsY) {
                    return;
                }
                return this.chart.addAnnotation((0,external_highcharts_src_js_default_namespaceObject.merge)({
                    langKey: 'label',
                    type: 'basicAnnotation',
                    labelOptions: {
                        format: '{y:.2f}',
                        overflow: 'none',
                        crop: true
                    },
                    labels: [{
                            point: {
                                xAxis: coordsX.axis.index,
                                yAxis: coordsY.axis.index,
                                x: coordsX.value,
                                y: coordsY.value
                            }
                        }]
                }, navigation
                    .annotationsOptions, navigation
                    .bindings
                    .labelAnnotation
                    .annotationsOptions));
            }
        }
    },
    /**
     * Path where Highcharts will look for icons. Change this to use icons
     * from a different server. When undefined, icons are loaded from
     * the library's internal source.
     *
     * @type      {string|undefined}
     * @default   undefined
     * @since     7.1.3
     * @apioption navigation.iconsURL
     */
    /**
     * A `showPopup` event. Fired when selecting for example an annotation.
     *
     * @type      {Function}
     * @apioption navigation.events.showPopup
     */
    /**
     * A `closePopup` event. Fired when Popup should be hidden, for example
     * when clicking on an annotation again.
     *
     * @type      {Function}
     * @apioption navigation.events.closePopup
     */
    /**
     * Event fired on a button click.
     *
     * @type      {Function}
     * @sample    highcharts/annotations/gui/
     *            Change icon in a dropddown on event
     * @sample    highcharts/annotations/gui-buttons/
     *            Change button class on event
     * @apioption navigation.events.selectButton
     */
    /**
     * Event fired when button state should change, for example after
     * adding an annotation.
     *
     * @type      {Function}
     * @sample    highcharts/annotations/gui/
     *            Change icon in a dropddown on event
     * @sample    highcharts/annotations/gui-buttons/
     *            Change button class on event
     * @apioption navigation.events.deselectButton
     */
    /**
     * Events to communicate between Stock Tools and custom GUI.
     *
     * @since        7.0.0
     * @product      highcharts highstock
     * @optionparent navigation.events
     */
    events: {},
    /**
     * Additional options to be merged into all annotations.
     *
     * @sample stock/stocktools/navigation-annotation-options
     *         Set red color of all line annotations
     *
     * @type      {Highcharts.AnnotationsOptions}
     * @extends   annotations
     * @exclude   crookedLine, elliottWave, fibonacci, infinityLine,
     *            measure, pitchfork, tunnel, verticalLine, basicAnnotation
     * @requires     modules/annotations
     * @apioption navigation.annotationsOptions
     */
    annotationsOptions: {
        animation: {
            defer: 0
        }
    }
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const NavigationBindingDefaults = {
    lang,
    navigation
};
/** @internal */
/* harmony default export */ const NavigationBindingsDefaults = (NavigationBindingDefaults);

;// ./code/es-modules/Extensions/Annotations/NavigationBindings.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Highsoft, Black Label
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */



const { setOptions } = (external_highcharts_src_js_default_default());

const { format } = (external_highcharts_src_js_default_Templating_default());

const { composed, doc, win } = (external_highcharts_src_js_default_default());


const { getAssignedAxis: NavigationBindings_getAssignedAxis, getFieldType: NavigationBindings_getFieldType } = NavigationBindingsUtilities;

/* *
 *
 *  Functions
 *
 * */
/**
 * IE 9-11 polyfill for Element.closest():
 * @internal
 */
function closestPolyfill(el, s) {
    const ElementProto = win.Element.prototype, elementMatches = ElementProto.matches ||
        ElementProto.msMatchesSelector ||
        ElementProto.webkitMatchesSelector;
    let ret = null;
    if (ElementProto.closest) {
        ret = ElementProto.closest.call(el, s);
    }
    else {
        do {
            if (elementMatches.call(el, s)) {
                return el;
            }
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
    }
    return ret;
}
/** @internal */
function onAnnotationRemove() {
    if (this.chart.navigationBindings) {
        this.chart.navigationBindings.deselectAnnotation();
    }
}
/** @internal */
function onChartDestroy() {
    if (this.navigationBindings) {
        this.navigationBindings.destroy();
    }
}
/** @internal */
function onChartLoad() {
    const options = this.options;
    if (options && options.navigation && options.navigation.bindings) {
        this.navigationBindings = new NavigationBindings(this, options.navigation);
        this.navigationBindings.initEvents();
        this.navigationBindings.initUpdate();
    }
}
/** @internal */
function onChartRender() {
    const navigationBindings = this.navigationBindings, disabledClassName = 'highcharts-disabled-btn';
    if (this && navigationBindings) {
        // Check if the buttons should be enabled/disabled based on
        // visible series.
        let buttonsEnabled = false;
        this.series.forEach((series) => {
            if (!series.options.isInternal && series.visible) {
                buttonsEnabled = true;
            }
        });
        if (this.navigationBindings &&
            this.navigationBindings.container &&
            this.navigationBindings.container[0]) {
            const container = this.navigationBindings.container[0];
            (0,external_highcharts_src_js_default_namespaceObject.objectEach)(navigationBindings.boundClassNames, (value, key) => {
                // Get the HTML element corresponding to the className taken
                // from StockToolsBindings.
                const buttonNode = container.querySelectorAll('.' + key);
                if (buttonNode) {
                    for (let i = 0; i < buttonNode.length; i++) {
                        const button = buttonNode[i], cls = button.className;
                        if (value.noDataState === 'normal') {
                            // If button has noDataState: 'normal', and has
                            // disabledClassName, remove this className.
                            if (cls.indexOf(disabledClassName) !== -1) {
                                button.classList.remove(disabledClassName);
                            }
                        }
                        else if (!buttonsEnabled) {
                            if (cls.indexOf(disabledClassName) === -1) {
                                button.className += ' ' + disabledClassName;
                            }
                        }
                        else {
                            // Enable all buttons by deleting the className.
                            if (cls.indexOf(disabledClassName) !== -1) {
                                button.classList.remove(disabledClassName);
                            }
                        }
                    }
                }
            });
        }
    }
}
/** @internal */
function onNavigationBindingsClosePopup() {
    this.deselectAnnotation();
}
/** @internal */
function onNavigationBindingsDeselectButton() {
    this.selectedButtonElement = null;
}
/**
 * Show edit-annotation form:
 * @internal
 */
function selectableAnnotation(annotationType) {
    const originalClick = annotationType.prototype.defaultOptions.events &&
        annotationType.prototype.defaultOptions.events.click;
    /**
     * Select and show popup.
     * @internal
     */
    function selectAndShowPopup(eventArguments) {
        const annotation = this, navigation = annotation.chart.navigationBindings, prevAnnotation = navigation.activeAnnotation;
        if (originalClick) {
            originalClick.call(annotation, eventArguments);
        }
        if (prevAnnotation !== annotation) {
            // Select current:
            navigation.deselectAnnotation();
            navigation.activeAnnotation = annotation;
            annotation.setControlPointsVisibility(true);
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(navigation, 'showPopup', {
                annotation: annotation,
                formType: 'annotation-toolbar',
                options: navigation.annotationToFields(annotation),
                onSubmit: function (data) {
                    if (data.actionType === 'remove') {
                        navigation.activeAnnotation = false;
                        navigation.chart.removeAnnotation(annotation);
                    }
                    else {
                        const config = {};
                        navigation.fieldsToOptions(data.fields, config);
                        navigation.deselectAnnotation();
                        const typeOptions = config.typeOptions;
                        if (annotation.options.type === 'measure') {
                            // Manually disable crosshairs according to
                            // stroke width of the shape:
                            typeOptions.crosshairY.enabled = (typeOptions.crosshairY
                                .strokeWidth !== 0);
                            typeOptions.crosshairX.enabled = (typeOptions.crosshairX
                                .strokeWidth !== 0);
                        }
                        annotation.update(config);
                    }
                }
            });
        }
        else {
            // Deselect current:
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(navigation, 'closePopup');
        }
        // Let bubble event to chart.click:
        eventArguments.activeAnnotation = true;
    }
    // #18276, show popup on touchend, but not on touchmove
    let touchStartX, touchStartY;
    /**
     *
     */
    function saveCoords(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }
    /**
     *
     */
    function checkForTouchmove(e) {
        const hasMoved = touchStartX ? Math.sqrt(Math.pow(touchStartX - e.changedTouches[0].clientX, 2) +
            Math.pow(touchStartY - e.changedTouches[0].clientY, 2)) >= 4 : false;
        if (!hasMoved) {
            selectAndShowPopup.call(this, e);
        }
    }
    (0,external_highcharts_src_js_default_namespaceObject.merge)(true, annotationType.prototype.defaultOptions.events, {
        click: selectAndShowPopup,
        touchstart: saveCoords,
        touchend: checkForTouchmove
    });
}
/* *
 *
 *  Class
 *
 * */
/** @internal */
class NavigationBindings {
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(AnnotationClass, ChartClass) {
        if ((0,external_highcharts_src_js_default_namespaceObject.pushUnique)(composed, 'NavigationBindings')) {
            (0,external_highcharts_src_js_default_namespaceObject.addEvent)(AnnotationClass, 'remove', onAnnotationRemove);
            // Basic shapes:
            selectableAnnotation(AnnotationClass);
            // Advanced annotations:
            (0,external_highcharts_src_js_default_namespaceObject.objectEach)(AnnotationClass.types, (annotationType) => {
                selectableAnnotation(annotationType);
            });
            (0,external_highcharts_src_js_default_namespaceObject.addEvent)(ChartClass, 'destroy', onChartDestroy);
            (0,external_highcharts_src_js_default_namespaceObject.addEvent)(ChartClass, 'load', onChartLoad);
            (0,external_highcharts_src_js_default_namespaceObject.addEvent)(ChartClass, 'render', onChartRender);
            (0,external_highcharts_src_js_default_namespaceObject.addEvent)(NavigationBindings, 'closePopup', onNavigationBindingsClosePopup);
            (0,external_highcharts_src_js_default_namespaceObject.addEvent)(NavigationBindings, 'deselectButton', onNavigationBindingsDeselectButton);
            setOptions(NavigationBindingsDefaults);
        }
    }
    /* *
     *
     *  Constructor
     *
     * */
    constructor(chart, options) {
        this.boundClassNames = void 0;
        this.chart = chart;
        this.options = options;
        this.eventsToUnbind = [];
        this.container =
            this.chart.container.getElementsByClassName(this.options.bindingsClassName || '');
        if (!this.container.length) {
            this.container = doc.getElementsByClassName(this.options.bindingsClassName || '');
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    getCoords(e) {
        const coords = this.chart.pointer?.getCoordinates(e);
        return [
            coords && NavigationBindings_getAssignedAxis(coords.xAxis),
            coords && NavigationBindings_getAssignedAxis(coords.yAxis)
        ];
    }
    /**
     * Init all events connected to NavigationBindings.
     *
     * @internal
     * @function Highcharts.NavigationBindings#initEvents
     */
    initEvents() {
        const navigation = this, chart = navigation.chart, bindingsContainer = navigation.container, options = navigation.options;
        // Shorthand object for getting events for buttons:
        navigation.boundClassNames = {};
        (0,external_highcharts_src_js_default_namespaceObject.objectEach)((options.bindings || {}), (value) => {
            navigation.boundClassNames[value.className] = value;
        });
        // Handle multiple containers with the same class names:
        [].forEach.call(bindingsContainer, (subContainer) => {
            navigation.eventsToUnbind.push((0,external_highcharts_src_js_default_namespaceObject.addEvent)(subContainer, 'click', (event) => {
                const bindings = navigation.getButtonEvents(subContainer, event);
                if (bindings &&
                    (!bindings.button.classList
                        .contains('highcharts-disabled-btn'))) {
                    navigation.bindingsButtonClick(bindings.button, bindings.events, event);
                }
            }));
        });
        (0,external_highcharts_src_js_default_namespaceObject.objectEach)((options.events || {}), (callback, eventName) => {
            if ((0,external_highcharts_src_js_default_namespaceObject.isFunction)(callback)) {
                navigation.eventsToUnbind.push((0,external_highcharts_src_js_default_namespaceObject.addEvent)(navigation, eventName, callback, { passive: false }));
            }
        });
        navigation.eventsToUnbind.push((0,external_highcharts_src_js_default_namespaceObject.addEvent)(chart.container, 'click', function (e) {
            if (!chart.cancelClick &&
                chart.isInsidePlot(e.chartX - chart.plotLeft, e.chartY - chart.plotTop, {
                    visiblePlotOnly: true
                })) {
                navigation.bindingsChartClick(this, e);
            }
        }));
        navigation.eventsToUnbind.push((0,external_highcharts_src_js_default_namespaceObject.addEvent)(chart.container, (external_highcharts_src_js_default_default()).isTouchDevice ? 'touchmove' : 'mousemove', function (e) {
            navigation.bindingsContainerMouseMove(this, e);
        }, (external_highcharts_src_js_default_default()).isTouchDevice ? { passive: false } : void 0));
    }
    /**
     * Common chart.update() delegation, shared between bindings and exporting.
     *
     * @internal
     * @function Highcharts.NavigationBindings#initUpdate
     */
    initUpdate() {
        const navigation = this;
        Chart_ChartNavigationComposition
            .compose(this.chart).navigation
            .addUpdate((options) => {
            navigation.update(options);
        });
    }
    /**
     * Hook for click on a button, method selects/unselects buttons,
     * then calls `bindings.init` callback.
     *
     * @internal
     * @function Highcharts.NavigationBindings#bindingsButtonClick
     *
     * @param {Highcharts.HTMLDOMElement} [button]
     *        Clicked button
     *
     * @param {Object} events
     *        Events passed down from bindings (`init`, `start`, `step`, `end`)
     *
     * @param {Highcharts.PointerEventObject} clickEvent
     *        Browser's click event
     */
    bindingsButtonClick(button, events, clickEvent) {
        const navigation = this, chart = navigation.chart, svgContainer = chart.renderer.boxWrapper;
        let shouldEventBeFired = true;
        if (navigation.selectedButtonElement) {
            if (navigation.selectedButtonElement.classList === button.classList) {
                shouldEventBeFired = false;
            }
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(navigation, 'deselectButton', { button: navigation.selectedButtonElement });
            if (navigation.nextEvent) {
                // Remove in-progress annotations adders:
                if (navigation.currentUserDetails &&
                    navigation.currentUserDetails.coll === 'annotations') {
                    chart.removeAnnotation(navigation.currentUserDetails);
                }
                navigation.mouseMoveEvent = navigation.nextEvent = false;
            }
        }
        if (shouldEventBeFired) {
            navigation.selectedButton = events;
            navigation.selectedButtonElement = button;
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(navigation, 'selectButton', { button: button });
            // Call "init" event, for example to open modal window
            if (events.init) {
                events.init.call(navigation, button, clickEvent);
            }
            if (events.start || events.steps) {
                chart.renderer.boxWrapper.addClass('highcharts-draw-mode');
            }
        }
        else {
            chart.stockTools && button.classList.remove('highcharts-active');
            svgContainer.removeClass('highcharts-draw-mode');
            navigation.nextEvent = false;
            navigation.mouseMoveEvent = false;
            navigation.selectedButton = null;
        }
    }
    /**
     * Hook for click on a chart, first click on a chart calls `start` event,
     * then on all subsequent clicks iterate over `steps` array.
     * When finished, calls `end` event.
     *
     * @internal
     * @function Highcharts.NavigationBindings#bindingsChartClick
     *
     * @param {Highcharts.Chart} chart
     *        Chart that click was performed on.
     *
     * @param {Highcharts.PointerEventObject} clickEvent
     *        Browser's click event.
     */
    bindingsChartClick(chart, clickEvent) {
        chart = this.chart;
        const navigation = this, activeAnnotation = navigation.activeAnnotation, selectedButton = navigation.selectedButton, svgContainer = chart.renderer.boxWrapper;
        if (activeAnnotation) {
            // Click outside popups, should close them and deselect the
            // annotation
            if (!activeAnnotation.cancelClick && // #15729
                !clickEvent.activeAnnotation &&
                // Element could be removed in the child action, e.g. button
                clickEvent.target.parentNode &&
                // TO DO: Polyfill for IE11?
                !closestPolyfill(clickEvent.target, '.highcharts-popup')) {
                (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(navigation, 'closePopup');
            }
            else if (activeAnnotation.cancelClick) {
                // Reset cancelClick after the other event handlers have run
                setTimeout(() => {
                    activeAnnotation.cancelClick = false;
                }, 0);
            }
        }
        if (!selectedButton || !selectedButton.start) {
            return;
        }
        if (!navigation.nextEvent) {
            // Call init method:
            navigation.currentUserDetails = selectedButton.start.call(navigation, clickEvent);
            // If steps exists (e.g. Annotations), bind them:
            if (navigation.currentUserDetails && selectedButton.steps) {
                navigation.stepIndex = 0;
                navigation.steps = true;
                navigation.mouseMoveEvent = navigation.nextEvent =
                    selectedButton.steps[navigation.stepIndex];
            }
            else {
                (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(navigation, 'deselectButton', { button: navigation.selectedButtonElement });
                svgContainer.removeClass('highcharts-draw-mode');
                navigation.steps = false;
                navigation.selectedButton = null;
                // First click is also the last one:
                if (selectedButton.end) {
                    selectedButton.end.call(navigation, clickEvent, navigation.currentUserDetails);
                }
            }
        }
        else {
            navigation.nextEvent(clickEvent, navigation.currentUserDetails);
            if (navigation.steps) {
                navigation.stepIndex++;
                if (selectedButton.steps[navigation.stepIndex]) {
                    // If we have more steps, bind them one by one:
                    navigation.mouseMoveEvent = navigation.nextEvent = selectedButton.steps[navigation.stepIndex];
                }
                else {
                    (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(navigation, 'deselectButton', { button: navigation.selectedButtonElement });
                    svgContainer.removeClass('highcharts-draw-mode');
                    // That was the last step, call end():
                    if (selectedButton.end) {
                        selectedButton.end.call(navigation, clickEvent, navigation.currentUserDetails);
                    }
                    navigation.nextEvent = false;
                    navigation.mouseMoveEvent = false;
                    navigation.selectedButton = null;
                }
            }
        }
    }
    /**
     * Hook for mouse move on a chart's container. It calls current step.
     *
     * @internal
     */
    bindingsContainerMouseMove(_container, moveEvent) {
        if (this.mouseMoveEvent) {
            this.mouseMoveEvent(moveEvent, this.currentUserDetails);
        }
    }
    /**
     * Translate fields (e.g. `params.period` or `marker.styles.color`) to
     * Highcharts options object (e.g. `{ params: { period } }`).
     *
     * @internal
     * @function Highcharts.NavigationBindings#fieldsToOptions<T>
     *
     * @param {Highcharts.Dictionary<string>} fields
     *        Fields from popup form.
     *
     * @param {T} config
     *        Default config to be modified.
     *
     * @return {T}
     *         Modified config
     */
    fieldsToOptions(fields, config) {
        (0,external_highcharts_src_js_default_namespaceObject.objectEach)(fields, (value, field) => {
            const parsedValue = parseFloat(value), path = field.split('.'), pathLength = path.length - 1;
            // If it's a number (not "format" options), parse it:
            if ((0,external_highcharts_src_js_default_namespaceObject.isNumber)(parsedValue) &&
                !value.match(/px|em/g) &&
                !field.match(/format/g) &&
                !field.match(/title/g)) {
                value = parsedValue;
            }
            // Remove values like 0
            if (value !== 'undefined') {
                let parent = config;
                path.forEach((name, index) => {
                    if (name !== '__proto__' && name !== 'constructor') {
                        const nextName = (0,external_highcharts_src_js_default_namespaceObject.pick)(path[index + 1], '');
                        if (pathLength === index) {
                            // Last index, put value:
                            parent[name] = value;
                        }
                        else if (!parent[name]) {
                            // Create middle property:
                            parent[name] = nextName.match(/\d/g) ?
                                [] :
                                {};
                            parent = parent[name];
                        }
                        else {
                            // Jump into next property
                            parent = parent[name];
                        }
                    }
                });
            }
        });
        return config;
    }
    /**
     * Shorthand method to deselect an annotation.
     *
     * @function Highcharts.NavigationBindings#deselectAnnotation
     */
    deselectAnnotation() {
        if (this.activeAnnotation) {
            this.activeAnnotation.setControlPointsVisibility(false);
            this.activeAnnotation = false;
        }
    }
    /**
     * Generates API config for popup in the same format as options for
     * Annotation object.
     *
     * @function Highcharts.NavigationBindings#annotationToFields
     *
     * @param {Highcharts.Annotation} annotation
     *        Annotations object
     *
     * @return {Highcharts.Dictionary<string>}
     *         Annotation options to be displayed in popup box
     */
    annotationToFields(annotation) {
        const options = annotation.options, editables = NavigationBindings.annotationsEditable, nestedEditables = editables.nestedOptions, type = (0,external_highcharts_src_js_default_namespaceObject.pick)(options.type, options.shapes?.[0]?.type, options.labels?.[0]?.type, 'label'), nonEditables = NavigationBindings.annotationsNonEditable[options.langKey] || [], visualOptions = {
            langKey: options.langKey,
            type: type
        };
        /**
         * Nested options traversing. Method goes down to the options and copies
         * allowed options (with values) to new object, which is last parameter:
         * "parent".
         *
         * @internal
         *
         * @param {*} option
         *        Atomic type or object/array
         *
         * @param {string} key
         *        Option name, for example "visible" or "x", "y"
         *
         * @param {Object} parentEditables
         *        Editables from NavigationBindings.annotationsEditable
         *
         * @param {Object} parent
         *        Where new options will be assigned
         */
        function traverse(option, key, parentEditables, parent, parentKey) {
            let nextParent;
            if (parentEditables &&
                (0,external_highcharts_src_js_default_namespaceObject.defined)(option) &&
                nonEditables.indexOf(key) === -1 &&
                ((parentEditables.indexOf &&
                    parentEditables.indexOf(key)) >= 0 ||
                    parentEditables[key] || // Nested array
                    parentEditables === true // Simple array
                )) {
                // Roots:
                if ((0,external_highcharts_src_js_default_namespaceObject.isArray)(option)) {
                    parent[key] = [];
                    option.forEach((arrayOption, i) => {
                        if (!(0,external_highcharts_src_js_default_namespaceObject.isObject)(arrayOption)) {
                            // Simple arrays, e.g. [String, Number, Boolean]
                            traverse(arrayOption, 0, nestedEditables[key], parent[key], key);
                        }
                        else {
                            // Advanced arrays, e.g. [Object, Object]
                            parent[key][i] = {};
                            (0,external_highcharts_src_js_default_namespaceObject.objectEach)(arrayOption, (nestedOption, nestedKey) => {
                                traverse(nestedOption, nestedKey, nestedEditables[key], parent[key][i], key);
                            });
                        }
                    });
                }
                else if ((0,external_highcharts_src_js_default_namespaceObject.isObject)(option)) {
                    nextParent = {};
                    if ((0,external_highcharts_src_js_default_namespaceObject.isArray)(parent)) {
                        parent.push(nextParent);
                        nextParent[key] = {};
                        nextParent = nextParent[key];
                    }
                    else {
                        parent[key] = nextParent;
                    }
                    (0,external_highcharts_src_js_default_namespaceObject.objectEach)(option, (nestedOption, nestedKey) => {
                        traverse(nestedOption, nestedKey, key === 0 ?
                            parentEditables :
                            nestedEditables[key], nextParent, key);
                    });
                }
                else {
                    // Leaf:
                    if (key === 'format') {
                        parent[key] = [
                            format(option, annotation.labels[0].points[0]).toString(),
                            'text'
                        ];
                    }
                    else if ((0,external_highcharts_src_js_default_namespaceObject.isArray)(parent)) {
                        parent.push([option, NavigationBindings_getFieldType(parentKey, option)]);
                    }
                    else {
                        parent[key] = [option, NavigationBindings_getFieldType(key, option)];
                    }
                }
            }
        }
        (0,external_highcharts_src_js_default_namespaceObject.objectEach)(options, (option, key) => {
            if (key === 'typeOptions' &&
                visualOptions['type'] !== 'basicAnnotation' // #23575
            ) {
                visualOptions[key] = {};
                (0,external_highcharts_src_js_default_namespaceObject.objectEach)(options[key], (typeOption, typeKey) => {
                    traverse(typeOption, typeKey, nestedEditables, visualOptions[key], typeKey);
                });
            }
            else {
                traverse(option, key, editables[type], visualOptions, key);
            }
        });
        return visualOptions;
    }
    /**
     * Get all class names for all parents in the element. Iterates until finds
     * main container.
     *
     * @internal
     * @function Highcharts.NavigationBindings#getClickedClassNames
     *
     * @param {Highcharts.HTMLDOMElement} container
     * Container that event is bound to.
     *
     * @param {global.Event} event
     * Browser's event.
     *
     * @return {Array<Array<string, Highcharts.HTMLDOMElement>>}
     * Array of class names with corresponding elements
     */
    getClickedClassNames(container, event) {
        let element = event.target, classNames = [], elemClassName;
        while (element && element.tagName) {
            elemClassName = (0,external_highcharts_src_js_default_namespaceObject.attr)(element, 'class');
            if (elemClassName) {
                classNames = classNames.concat(elemClassName
                    .split(' ')
                    // eslint-disable-next-line no-loop-func
                    .map((name) => ([name, element])));
            }
            element = element.parentNode;
            if (element === container) {
                return classNames;
            }
        }
        return classNames;
    }
    /**
     * Get events bound to a button. It's a custom event delegation to find all
     * events connected to the element.
     *
     * @internal
     * @function Highcharts.NavigationBindings#getButtonEvents
     *
     * @param {Highcharts.HTMLDOMElement} container
     *        Container that event is bound to.
     *
     * @param {global.Event} event
     *        Browser's event.
     *
     * @return {Object}
     *         Object with events (init, start, steps, and end)
     */
    getButtonEvents(container, event) {
        const navigation = this, classNames = this.getClickedClassNames(container, event);
        let bindings;
        classNames.forEach((className) => {
            if (navigation.boundClassNames[className[0]] && !bindings) {
                bindings = {
                    events: navigation.boundClassNames[className[0]],
                    button: className[1]
                };
            }
        });
        return bindings;
    }
    /**
     * Bindings are just events, so the whole update process is simply
     * removing old events and adding new ones.
     *
     * @internal
     * @function Highcharts.NavigationBindings#update
     */
    update(options) {
        this.options = (0,external_highcharts_src_js_default_namespaceObject.merge)(true, this.options, options);
        this.removeEvents();
        this.initEvents();
    }
    /**
     * Remove all events created in the navigation.
     *
     * @internal
     * @function Highcharts.NavigationBindings#removeEvents
     */
    removeEvents() {
        this.eventsToUnbind.forEach((unbinder) => unbinder());
    }
    /**
     * @internal
     * @function Highcharts.NavigationBindings#destroy
     */
    destroy() {
        this.removeEvents();
    }
}
/* *
 *
 *  Static Properties
 *
 * */
// Define which options from annotations should show up in edit box:
NavigationBindings.annotationsEditable = {
    // `typeOptions` are always available
    // Nested and shared options:
    nestedOptions: {
        labelOptions: ['style', 'format', 'backgroundColor'],
        labels: ['style'],
        label: ['style'],
        style: ['fontSize', 'color'],
        background: ['fill', 'strokeWidth', 'stroke'],
        innerBackground: ['fill', 'strokeWidth', 'stroke'],
        outerBackground: ['fill', 'strokeWidth', 'stroke'],
        shapeOptions: ['fill', 'strokeWidth', 'stroke'],
        shapes: ['fill', 'strokeWidth', 'stroke'],
        line: ['strokeWidth', 'stroke'],
        backgroundColors: [true],
        connector: ['fill', 'strokeWidth', 'stroke'],
        crosshairX: ['strokeWidth', 'stroke'],
        crosshairY: ['strokeWidth', 'stroke']
    },
    // Simple shapes:
    circle: ['shapes'],
    ellipse: ['shapes'],
    verticalLine: [],
    label: ['labelOptions'],
    // Measure
    measure: ['background', 'crosshairY', 'crosshairX'],
    // Others:
    fibonacci: [],
    tunnel: ['background', 'line', 'height'],
    pitchfork: ['innerBackground', 'outerBackground'],
    rect: ['shapes'],
    // Crooked lines, elliots, arrows etc:
    crookedLine: [],
    basicAnnotation: ['shapes', 'labelOptions']
};
// Define non editable fields per annotation, for example Rectangle inherits
// options from Measure, but crosshairs are not available
NavigationBindings.annotationsNonEditable = {
    rectangle: ['crosshairX', 'crosshairY', 'labelOptions'],
    ellipse: ['labelOptions'],
    circle: ['labelOptions']
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Annotations_NavigationBindings = (NavigationBindings);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * A config object for navigation bindings in annotations.
 *
 * @interface Highcharts.NavigationBindingsOptionsObject
 */ /**
* ClassName of the element for a binding.
* @name Highcharts.NavigationBindingsOptionsObject#className
* @type {string|undefined}
*/ /**
* Last event to be fired after last step event.
* @name Highcharts.NavigationBindingsOptionsObject#end
* @type {Function|undefined}
*/ /**
* Initial event, fired on a button click.
* @name Highcharts.NavigationBindingsOptionsObject#init
* @type {Function|undefined}
*/ /**
* Event fired on first click on a chart.
* @name Highcharts.NavigationBindingsOptionsObject#start
* @type {Function|undefined}
*/ /**
* Last event to be fired after last step event. Array of step events to be
* called sequentially after each user click.
* @name Highcharts.NavigationBindingsOptionsObject#steps
* @type {Array<Function>|undefined}
*/
(''); // Keeps doclets above in JS file

;// external ["../highcharts.src.js","default","Series"]
const external_highcharts_src_js_default_Series_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Series;
var external_highcharts_src_js_default_Series_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Series_namespaceObject);
;// ./code/es-modules/Stock/StockTools/StockToolsUtilities.js
/* *
 *
 *  Events generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Paweł Fus
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { getOptions } = (external_highcharts_src_js_default_default());

const { getAssignedAxis: StockToolsUtilities_getAssignedAxis, getFieldType: StockToolsUtilities_getFieldType } = NavigationBindingsUtilities;



/* *
 *
 *  Constants
 *
 * */
/** @internal */
const indicatorsWithAxes = [
    'apo',
    'ad',
    'aroon',
    'aroonoscillator',
    'atr',
    'ao',
    'cci',
    'chaikin',
    'cmf',
    'cmo',
    'disparityindex',
    'dmi',
    'dpo',
    'linearregressionangle',
    'linearregressionintercept',
    'linearregressionslope',
    'klinger',
    'macd',
    'mfi',
    'momentum',
    'natr',
    'obv',
    'ppo',
    'roc',
    'rsi',
    'slowstochastic',
    'stochastic',
    'trix',
    'williamsr'
];
/** @internal */
const indicatorsWithVolume = [
    'ad',
    'cmf',
    'klinger',
    'mfi',
    'obv',
    'vbp',
    'vwap'
];
/* *
 *
 *  Functions
 *
 * */
/**
 * Generates function which will add a flag series using modal in GUI.
 * Method fires an event "showPopup" with config:
 * `{type, options, callback}`.
 *
 * Example: NavigationBindings.utils.addFlagFromForm('url(...)') - will
 * generate function that shows modal in GUI.
 *
 * @internal
 * @function bindingsUtils.addFlagFromForm
 *
 * @param {Highcharts.FlagsShapeValue} type
 *        Type of flag series, e.g. "squarepin"
 *
 * @return {Function}
 *         Callback to be used in `start` callback
 */
function addFlagFromForm(type) {
    return function (e) {
        const navigation = this, chart = navigation.chart, toolbar = chart.stockTools, point = attractToPoint(e, chart);
        if (!point) {
            return;
        }
        const pointConfig = {
            x: point.x,
            y: point.y
        };
        const seriesOptions = {
            type: 'flags',
            onSeries: point.series.id,
            shape: type,
            data: [pointConfig],
            xAxis: point.xAxis,
            yAxis: point.yAxis,
            point: {
                events: {
                    click: function () {
                        const point = this, options = point.options;
                        (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(navigation, 'showPopup', {
                            point: point,
                            formType: 'annotation-toolbar',
                            options: {
                                langKey: 'flags',
                                type: 'flags',
                                title: [
                                    options.title,
                                    StockToolsUtilities_getFieldType('title', options.title)
                                ],
                                name: [
                                    options.name,
                                    StockToolsUtilities_getFieldType('name', options.name)
                                ]
                            },
                            onSubmit: function (updated) {
                                if (updated.actionType === 'remove') {
                                    point.remove();
                                }
                                else {
                                    point.update(navigation.fieldsToOptions(updated.fields, {}));
                                }
                            }
                        });
                    }
                }
            }
        };
        if (!toolbar || !toolbar.guiEnabled) {
            chart.addSeries(seriesOptions);
        }
        (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(navigation, 'showPopup', {
            formType: 'flag',
            // Enabled options:
            options: {
                langKey: 'flags',
                type: 'flags',
                title: ['A', StockToolsUtilities_getFieldType('label', 'A')],
                name: ['Flag A', StockToolsUtilities_getFieldType('label', 'Flag A')]
            },
            // Callback on submit:
            onSubmit: function (data) {
                navigation.fieldsToOptions(data.fields, seriesOptions.data?.[0]);
                chart.addSeries(seriesOptions);
            }
        });
    };
}
/**
 * @internal
 * @todo
 * Consider using getHoverData(), but always kdTree (columns?)
 */
function attractToPoint(e, chart) {
    const coords = chart.pointer?.getCoordinates(e);
    let coordsX, coordsY, distX = Number.MAX_VALUE, closestPoint;
    if (chart.navigationBindings && coords) {
        coordsX = StockToolsUtilities_getAssignedAxis(coords.xAxis);
        coordsY = StockToolsUtilities_getAssignedAxis(coords.yAxis);
    }
    // Exit if clicked out of axes area.
    if (!coordsX || !coordsY) {
        return;
    }
    const x = coordsX.value;
    const y = coordsY.value;
    // Search by 'x' but only in yAxis' series.
    coordsY.axis.series.forEach((series) => {
        if (series.points) {
            const point = series.searchPoint(e, true);
            if (point && distX > Math.abs(point.x - x)) {
                distX = Math.abs(point.x - x);
                closestPoint = point;
            }
        }
    });
    if (closestPoint && closestPoint.x && closestPoint.y) {
        return {
            x: closestPoint.x,
            y: closestPoint.y,
            below: y < closestPoint.y,
            series: closestPoint.series,
            xAxis: closestPoint.series.xAxis.index || 0,
            yAxis: closestPoint.series.yAxis.index || 0
        };
    }
}
/**
 * Shorthand to check if given yAxis comes from navigator.
 *
 * @internal
 * @function bindingsUtils.isNotNavigatorYAxis
 *
 * @param {Highcharts.Axis} axis
 * Axis to check.
 *
 * @return {boolean}
 * True, if axis comes from navigator.
 */
function isNotNavigatorYAxis(axis) {
    return axis.userOptions.className !== 'highcharts-navigator-yaxis';
}
/**
 * Check if any of the price indicators are enabled.
 * @internal
 * @function bindingsUtils.isLastPriceEnabled
 *
 * @param {Array} series
 *        Array of series.
 *
 * @return {boolean}
 *         Tells which indicator is enabled.
 */
function isPriceIndicatorEnabled(series) {
    return series.some((s) => s.lastVisiblePrice || s.lastPrice);
}
/** @internal */
function manageIndicators(data) {
    const chart = this.chart, seriesConfig = {
        linkedTo: data.linkedTo,
        type: data.type
    };
    let yAxis, parentSeries, defaultOptions, series;
    if (data.actionType === 'edit') {
        this.fieldsToOptions(data.fields, seriesConfig);
        series = chart.get(data.seriesId);
        if (series) {
            series.update(seriesConfig, false);
        }
    }
    else if (data.actionType === 'remove') {
        series = chart.get(data.seriesId);
        if (series) {
            yAxis = series.yAxis;
            if (series.linkedSeries) {
                series.linkedSeries.forEach((linkedSeries) => {
                    linkedSeries.remove(false);
                });
            }
            series.remove(false);
            if (indicatorsWithAxes.indexOf(series.type) >= 0) {
                const removedYAxisProps = {
                    height: yAxis.options.height,
                    top: yAxis.options.top
                };
                yAxis.remove(false);
                this.resizeYAxes(removedYAxisProps);
            }
        }
    }
    else {
        seriesConfig.id = (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)();
        this.fieldsToOptions(data.fields, seriesConfig);
        parentSeries = chart.get(seriesConfig.linkedTo);
        defaultOptions = getOptions().plotOptions;
        // Make sure that indicator uses the SUM approx if SUM approx is used
        // by parent series (#13950).
        if (typeof parentSeries !== 'undefined' &&
            parentSeries instanceof (external_highcharts_src_js_default_Series_default()) &&
            parentSeries.getDGApproximation() === 'sum' &&
            // If indicator has defined approx type, use it (e.g. "ranges")
            !(0,external_highcharts_src_js_default_namespaceObject.defined)(defaultOptions && defaultOptions[seriesConfig.type] &&
                defaultOptions.dataGrouping &&
                defaultOptions.dataGrouping.approximation)) {
            seriesConfig.dataGrouping = {
                approximation: 'sum'
            };
        }
        if (indicatorsWithAxes.indexOf(data.type) >= 0) {
            yAxis = chart.addAxis({
                id: (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)(),
                offset: 0,
                opposite: true,
                title: {
                    text: ''
                },
                tickPixelInterval: 40,
                showLastLabel: false,
                labels: {
                    align: 'left',
                    y: -2
                }
            }, false, false);
            seriesConfig.yAxis = yAxis.options.id;
            this.resizeYAxes();
        }
        else {
            seriesConfig.yAxis = chart.get(data.linkedTo).options.yAxis;
        }
        if (indicatorsWithVolume.indexOf(data.type) >= 0) {
            seriesConfig.params.volumeSeriesID = chart.series.filter(function (series) {
                return series.options.type === 'column';
            })[0].options.id;
        }
        chart.addSeries(seriesConfig, false);
    }
    (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', {
        button: this.selectedButtonElement
    });
    chart.redraw();
}
/**
 * Update height for an annotation. Height is calculated as a difference
 * between last point in `typeOptions` and current position. It's a value,
 * not pixels height.
 *
 * @internal
 * @function bindingsUtils.updateHeight
 *
 * @param {Highcharts.PointerEventObject} e
 *        normalized browser event
 *
 * @param {Highcharts.Annotation} annotation
 *        Annotation to be updated
 */
function updateHeight(e, annotation) {
    const options = annotation.options.typeOptions, yAxis = (0,external_highcharts_src_js_default_namespaceObject.isNumber)(options.yAxis) && this.chart.yAxis[options.yAxis];
    if (yAxis && options.points) {
        annotation.update({
            typeOptions: {
                height: yAxis.toValue(e[yAxis.horiz ? 'chartX' : 'chartY']) -
                    (options.points[1].y || 0)
            }
        });
    }
}
/**
 * Update each point after specified index, most of the annotations use
 * this. For example crooked line: logic behind updating each point is the
 * same, only index changes when adding an annotation.
 *
 * Example: NavigationBindings.utils.updateNthPoint(1) - will generate
 * function that updates all consecutive points except point with index=0.
 *
 * @internal
 * @function bindingsUtils.updateNthPoint
 *
 * @param {number} startIndex
 *        Index from which point should update
 *
 * @return {Function}
 *         Callback to be used in steps array
 */
function updateNthPoint(startIndex) {
    return function (e, annotation) {
        const options = annotation.options.typeOptions, xAxis = (0,external_highcharts_src_js_default_namespaceObject.isNumber)(options.xAxis) && this.chart.xAxis[options.xAxis], yAxis = (0,external_highcharts_src_js_default_namespaceObject.isNumber)(options.yAxis) && this.chart.yAxis[options.yAxis];
        if (xAxis && yAxis) {
            options.points.forEach((point, index) => {
                if (index >= startIndex) {
                    point.x = xAxis.toValue(e[xAxis.horiz ? 'chartX' : 'chartY']);
                    point.y = yAxis.toValue(e[yAxis.horiz ? 'chartX' : 'chartY']);
                }
            });
            annotation.update({
                typeOptions: {
                    points: options.points
                }
            });
        }
    };
}
/**
 * Update size of background (rect) in some annotations: Measure, Simple
 * Rect.
 *
 * @internal
 * @function Highcharts.NavigationBindingsUtilsObject.updateRectSize
 *
 * @param {Highcharts.PointerEventObject} event
 * Normalized browser event
 *
 * @param {Highcharts.Annotation} annotation
 * Annotation to be updated
 */
function updateRectSize(event, annotation) {
    const chart = annotation.chart, options = annotation.options.typeOptions, xAxis = (0,external_highcharts_src_js_default_namespaceObject.isNumber)(options.xAxis) && chart.xAxis[options.xAxis], yAxis = (0,external_highcharts_src_js_default_namespaceObject.isNumber)(options.yAxis) && chart.yAxis[options.yAxis];
    if (xAxis && yAxis) {
        const x = xAxis.toValue(event[xAxis.horiz ? 'chartX' : 'chartY']), y = yAxis.toValue(event[yAxis.horiz ? 'chartX' : 'chartY']), width = x - options.point.x, height = options.point.y - y;
        annotation.update({
            typeOptions: {
                background: {
                    width: chart.inverted ? height : width,
                    height: chart.inverted ? width : height
                }
            }
        });
    }
}
/**
 * Compares two arrays of strings, checking their length and if corresponding
 * elements are equal.
 *
 * @param {string[]} a
 *        The first array to compare.
 * @param {string[]} b
 *        The second array to compare.
 * @return {boolean}
 *          Return `true` if the arrays are equal, otherwise `false`.
 */
function shallowArraysEqual(a, b) {
    if (!(0,external_highcharts_src_js_default_namespaceObject.defined)(a) || !(0,external_highcharts_src_js_default_namespaceObject.defined)(b)) {
        return false;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const StockToolsUtilities = {
    indicatorsWithAxes,
    indicatorsWithVolume,
    addFlagFromForm,
    attractToPoint,
    getAssignedAxis: StockToolsUtilities_getAssignedAxis,
    isNotNavigatorYAxis,
    isPriceIndicatorEnabled,
    manageIndicators,
    shallowArraysEqual,
    updateHeight,
    updateNthPoint,
    updateRectSize
};
/** @internal */
/* harmony default export */ const StockTools_StockToolsUtilities = (StockToolsUtilities);

;// ./code/es-modules/Shared/BaseFormUtils.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Jedrzej Ruta
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */

/**
 * Generate and/or retrieve the icon. For pre v12, icons were fetched from
 * our servers. Since v12.x, icons are generated by JS in SVG.
 *
 * @internal
 * @param {string} iconName
 *                 Name of the icon, e.g. 'edit.svg'.
 *
 * @param {string} iconsURL
 *                 Icons URL
 *
 * @param {Record<string, string>} icons
 *                 Icons object
 *
 * @return {string} Icon string
 */
const getIcon = (iconName, iconsURL, icons) => {
    let icon = icons[iconName];
    let iconString;
    if (iconsURL === 'renderer' && icon) {
        icon = encodeURIComponent(icon);
        iconString = `url("data:image/svg+xml;charset=utf-8,${icon}")`;
    }
    else if (iconsURL.startsWith('http') &&
        iconsURL.match(/\.(png|svg|jpe?g|gif)$/ig)) {
        // Absolute icon URL support
        iconString = 'url("' + iconsURL + '")';
    }
    else {
        iconString = `url("${iconsURL}${iconName}")`;
    }
    return iconString;
};
/* harmony default export */ const BaseFormUtils = (getIcon);

;// ./code/es-modules/Stock/StockTools/StockToolsIcons.js
/* *
 *
 *  (c) 2026 Highsoft AS
 *  Authors:
 *  - Paweł Fus
 *  - Jedrzej Ruta
 *
 *  License: www.highcharts.com/license
 *
 *  DO NOT EDIT THIS FILE! This file is created by 'gulp scripts-icons' task.
 *
 * */

// Auto-generated SVG JSON
/* eslint-disable max-len */
/**
 * Helper function to generate SVG icon prefix with given viewBox size.
 * @internal
 */
const stockToolsIconPrefix = (viewBox) => `<?xml version="1.0" encoding="utf-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ${viewBox} ${viewBox}">`;
/**
 * Constants
 */
const fillColor = '#4B4B4D';
/* harmony default export */ const StockToolsIcons = ({
    'annotations-hidden.svg': `${stockToolsIconPrefix(32)}
<g>
    <g>
        <path fill="${fillColor}" d="M16.001,20.25c-2.344,0-4.25-1.906-4.25-4.25c0-2.343,1.906-4.25,4.25-4.25s4.25,1.907,4.25,4.25
            C20.251,18.344,18.345,20.25,16.001,20.25z M16.001,13.25c-1.517,0-2.75,1.233-2.75,2.75s1.233,2.75,2.75,2.75
            s2.75-1.233,2.75-2.75S17.518,13.25,16.001,13.25z"/>
    </g>
    <g>
        <path fill="${fillColor}" d="M16.001,23.238L16.001,23.238c-2.729-0.001-5.302-1.062-7.246-2.988L4.465,16l4.29-4.25
            c1.945-1.926,4.519-2.987,7.246-2.987c2.729,0,5.302,1.061,7.246,2.987L27.537,16l-4.29,4.25
            C21.302,22.177,18.729,23.238,16.001,23.238z M6.454,16l3.357,3.186c1.661,1.646,3.859,2.553,6.189,2.553s4.528-0.907,6.19-2.553
            L25.548,16l-3.357-3.186c-1.661-1.646-3.859-2.553-6.189-2.553s-4.528,0.907-6.19,2.553L6.454,16z"/>
    </g>
</g>
</svg>
`,
    'annotations-visible.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="${fillColor}" d="M11.751,16c0,0.427,0.082,0.831,0.2,1.22l1.309-1.31c0.048-1.443,1.208-2.604,2.652-2.651l1.309-1.309
        c-0.389-0.118-0.793-0.2-1.22-0.2C13.657,11.75,11.751,13.656,11.751,16z"/>
    <path fill="${fillColor}" d="M16.087,18.741l-1.308,1.308c0.389,0.119,0.794,0.201,1.222,0.201c2.344,0,4.25-1.906,4.25-4.25
        c0-0.428-0.083-0.832-0.2-1.223l-1.309,1.309C18.696,17.533,17.533,18.695,16.087,18.741z"/>
    <path fill="${fillColor}" d="M23.247,11.75c-0.028-0.028-0.06-0.052-0.089-0.08l-1.061,1.062c0.029,0.029,0.062,0.054,0.093,0.083
        L25.548,16l-3.356,3.186c-1.662,1.646-3.86,2.553-6.19,2.553c-0.872,0-1.725-0.128-2.538-0.373l-1.174,1.174
        c1.17,0.453,2.422,0.698,3.712,0.699c2.728,0,5.301-1.062,7.246-2.988l4.29-4.25L23.247,11.75z"/>
    <path fill="${fillColor}" d="M8.842,20.328l1.062-1.061c-0.03-0.029-0.062-0.053-0.092-0.082L6.454,16l3.356-3.185
        c1.662-1.646,3.86-2.553,6.19-2.553c0.87,0,1.724,0.127,2.536,0.372l1.174-1.174c-1.17-0.453-2.421-0.698-3.71-0.698
        c-2.728,0-5.301,1.061-7.246,2.987L4.465,16l4.29,4.25C8.783,20.278,8.813,20.301,8.842,20.328z"/>

        <rect x="3.272" y="15.25" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.6276 15.9997)" fill="${fillColor}" width="25.456" height="1.501"/>
</g>
</svg>
`,
    'arrow-bottom.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" transform="rotate(45,15,15)" points="12.78,25.03 11.72,23.97 19.689,16 11.72,8.03 12.78,6.97 21.811,16"/>
</g>
</svg>
`,
    'arrow-left.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" points="19.22,25.03 10.189,16 19.22,6.97 20.28,8.03 12.311,16 20.28,23.97"/>
</g>
</svg>
`,
    'arrow-line.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M26.679,8.25L28,4l-4.25,1.321l0.934,0.935l-3.502,3.502c-0.212-0.083-0.44-0.133-0.682-0.133
    c-1.035,0-1.875,0.84-1.875,1.875c0,0.241,0.05,0.47,0.133,0.682l-7.576,7.576c-0.212-0.083-0.44-0.133-0.682-0.133
    c-1.035,0-1.875,0.84-1.875,1.875c0,0.241,0.05,0.47,0.133,0.682L4.97,25.97L6.03,27.03l3.788-3.788
    c0.212,0.083,0.44,0.133,0.682,0.133c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l7.576-7.576
    c0.212,0.083,0.44,0.133,0.682,0.133c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l3.502-3.502L26.679,8.25z"/>
</svg>
`,
    'arrow-ray.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M25.429,9.5L27,5l-4.5,1.571l0.934,0.935l-5.252,5.252c-0.212-0.083-0.44-0.133-0.682-0.133
    c-1.035,0-1.875,0.84-1.875,1.875c0,0.241,0.05,0.47,0.133,0.682l-7.576,7.576c-0.212-0.083-0.44-0.133-0.682-0.133
    c-1.035,0-1.875,0.84-1.875,1.875s0.84,1.875,1.875,1.875s1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l7.576-7.576
    c0.212,0.083,0.44,0.133,0.682,0.133c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l5.252-5.252L25.429,9.5z"/>
</svg>
`,
    'arrow-right.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" points="12.78,25.03 11.72,23.97 19.689,16 11.72,8.03 12.78,6.97 21.811,16"/>
</g>
</svg>
`,
    'arrow-segment.svg': `${stockToolsIconPrefix(32)}
<g>
    <circle fill="${fillColor}" cx="24.5" cy="7.5" r="1.875"/>
    <path fill="${fillColor}" d="M19.684,11.256L8.182,22.758c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875
        s0.84,1.875,1.875,1.875s1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l11.502-11.502l0.935,0.934L23,9l-4.25,1.321
        L19.684,11.256z"/>
</g>
</svg>
`,
    'arrow.svg': `${stockToolsIconPrefix(60)}
<g>
    <polyline fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" points="49,26 49,11 34,11"/>
    <line fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" x1="20" y1="40.7" x2="49" y2="11"/>
    <circle fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" cx="17" cy="44" r="5"/>
</g>
</svg>
`,
    'circle.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M26.249,15.999c0.001-2.737-1.065-5.312-3.002-7.248C21.312,6.815,18.737,5.749,16,5.75
    c-2.738,0-5.312,1.065-7.248,3.002C6.816,10.688,5.75,13.262,5.75,16c0,2.736,1.065,5.312,3.002,7.248
    c1.937,1.935,4.511,3.001,7.249,3.001c1.993,0,3.898-0.572,5.536-1.628c0.864,0.73,2.154,0.697,2.968-0.116
    c0.815-0.815,0.849-2.104,0.117-2.97C25.678,19.897,26.25,17.993,26.249,15.999z M9.813,22.186C8.16,20.533,7.25,18.336,7.25,16
    c-0.001-2.337,0.909-4.534,2.562-6.188c1.652-1.652,3.851-2.563,6.188-2.563c2.336,0,4.533,0.91,6.186,2.563
    c1.653,1.653,2.563,3.85,2.564,6.187c-0.001,1.727-0.501,3.376-1.427,4.787c-0.682-0.115-1.406,0.084-1.931,0.609
    s-0.726,1.249-0.608,1.929c-1.41,0.926-3.059,1.426-4.784,1.426C13.663,24.749,11.466,23.839,9.813,22.186z"/>
</svg>
`,
    'close.svg': `${stockToolsIconPrefix(32)}
<polygon fill="${fillColor}" points="24.308,8.756 23.248,7.695 16.002,14.941 8.757,7.695 7.695,8.754 14.941,16.001 7.696,23.246
    8.755,24.308 16.002,17.061 23.247,24.307 24.308,23.248 17.062,16.001"/>
</svg>
`,
    'crooked-3.svg': `${stockToolsIconPrefix(32)}
<g>
    <g>
        <path fill="${fillColor}" d="M5.048,22.258c-0.234,0-0.464-0.109-0.61-0.312c-0.241-0.338-0.164-0.806,0.173-1.047l14.468-10.37
            l7.497,7.447c0.294,0.292,0.296,0.767,0.004,1.061c-0.292,0.296-0.767,0.294-1.061,0.004l-6.597-6.553l-13.438,9.63
            C5.352,22.213,5.199,22.258,5.048,22.258z"/>
    </g>
</g>
</svg>
`,
    'crooked-5.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="${fillColor}" d="M27.53,14.03c0.293-0.293,0.293-0.768,0-1.061l-5.064-5.064l-7.5,8.5L10.461,11.9l-7.027,8.109
        c-0.271,0.313-0.238,0.786,0.075,1.058C3.65,21.189,3.825,21.25,4,21.25c0.21,0,0.419-0.088,0.566-0.259l5.973-6.891l4.495,4.495
        l7.5-8.5l3.936,3.936C26.763,14.323,27.237,14.323,27.53,14.03z"/>
</g>
</svg>
`,
    'current-price-hide.svg': `${stockToolsIconPrefix(32)}
<g>
    <g opacity="0.5">
        <polygon fill="${fillColor}" points="12.509,22.893 12.509,17.428 11.409,17.428 9.651,18.718 10.229,19.507 11.363,18.628
            11.363,22.893"/>
        <path fill="${fillColor}" d="M17.962,19.832c-0.341-0.326-0.759-0.492-1.242-0.492c-0.141,0-0.264,0.02-0.365,0.058l-0.276,0.104
            l0.181-0.289l1.281-1.784h-1.375l-1.339,1.996c-0.408,0.61-0.615,1.182-0.615,1.696c0,0.583,0.198,1.038,0.606,1.393
            c0.405,0.353,0.919,0.532,1.526,0.532c0.606,0,1.12-0.181,1.526-0.536c0.401-0.352,0.605-0.829,0.605-1.421
            C18.476,20.573,18.308,20.162,17.962,19.832z M17.055,21.843c-0.184,0.187-0.423,0.281-0.711,0.281s-0.527-0.098-0.713-0.29
            c-0.183-0.192-0.274-0.43-0.274-0.706c0-0.287,0.094-0.527,0.281-0.714c0.187-0.188,0.427-0.281,0.714-0.281
            c0.289,0,0.526,0.095,0.708,0.282c0.181,0.186,0.271,0.423,0.271,0.705C17.331,21.413,17.238,21.655,17.055,21.843z"/>
        <path fill="${fillColor}" d="M20.639,21.805c-0.141-0.135-0.302-0.201-0.495-0.201c-0.198,0-0.364,0.067-0.507,0.205
            c-0.141,0.136-0.21,0.295-0.21,0.487c0,0.191,0.068,0.349,0.209,0.479c0.143,0.133,0.309,0.197,0.508,0.197
            c0.193,0,0.354-0.066,0.495-0.201c0.138-0.133,0.205-0.291,0.205-0.483S20.776,21.938,20.639,21.805z"/>
        <path fill="${fillColor}" d="M22.962,19.063c0.04-0.23,0.13-0.423,0.268-0.574c0.164-0.179,0.372-0.269,0.618-0.269
            c0.24,0,0.436,0.072,0.583,0.216c0.146,0.145,0.221,0.334,0.221,0.563c0,0.316-0.166,0.634-0.495,0.944l-2.177,1.972v0.977h3.896
            v-0.969h-2.475l1.508-1.342c0.317-0.282,0.561-0.55,0.723-0.797c0.156-0.238,0.236-0.532,0.236-0.873
            c0-0.531-0.184-0.927-0.56-1.208c-0.381-0.284-0.849-0.429-1.389-0.429c-0.539,0-1.008,0.158-1.394,0.471
            c-0.358,0.29-0.578,0.683-0.654,1.168L22.962,19.063z"/>
    </g>
    <path opacity="0.5" fill="${fillColor}" d="M17.486,12.742c-0.809,0.626-1.691,1.131-2.631,1.5H27.75v11.5H8.25v-3.061l-2.939-2.689
        l2.939-2.689l0.001-2.122l-4.812,4.812l3.311,3.311v3.939h22.5v-14.5H17.486z"/>
    <g>
        <path fill="${fillColor}" d="M17.121,10.432c-1.659,1.659-3.865,2.573-6.211,2.573l0,0c-0.723,0-1.43-0.097-2.113-0.266l1.096-1.097
            c0.335,0.046,0.675,0.077,1.018,0.077c2.003,0,3.885-0.781,5.302-2.196c0.25-0.25,0.638-0.691,0.922-1.018
            c-0.284-0.327-0.672-0.769-0.922-1.018c-0.368-0.368-0.769-0.691-1.194-0.972l0.922-0.921c0.417,0.292,0.814,0.616,1.182,0.983
            c0.467,0.467,1.313,1.469,1.351,1.512l0.35,0.415l-0.35,0.414C18.435,8.963,17.588,9.964,17.121,10.432z"/>
        <path fill="${fillColor}" d="M3.351,8.091c0.035-0.043,0.882-1.045,1.351-1.512c1.658-1.66,3.864-2.574,6.209-2.574
            c0.723,0,1.43,0.098,2.114,0.266l-1.097,1.097c-0.336-0.046-0.674-0.076-1.018-0.076c-2.002,0-3.884,0.779-5.301,2.197
            c-0.25,0.249-0.639,0.69-0.922,1.018c0.283,0.326,0.672,0.767,0.922,1.017c0.367,0.367,0.768,0.69,1.192,0.97L5.88,11.414
            c-0.415-0.293-0.812-0.616-1.179-0.982C4.232,9.965,3.386,8.963,3.351,8.92L3,8.506L3.351,8.091z"/>

            <rect x="2.731" y="7.861" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.8175 10.2057)" fill="${fillColor}" width="16.359" height="1.286"/>
    </g>
</g>
</svg>
`,
    'current-price-show.svg': `${stockToolsIconPrefix(32)}
<g>
    <g>
        <polygon fill="${fillColor}" points="12.509,22.893 12.509,17.428 11.409,17.428 9.651,18.718 10.229,19.507 11.363,18.628
            11.363,22.893"/>
        <path fill="${fillColor}" d="M17.962,19.832c-0.341-0.326-0.759-0.492-1.242-0.492c-0.141,0-0.264,0.02-0.365,0.058l-0.276,0.104
            l0.181-0.289l1.281-1.784h-1.375l-1.339,1.996c-0.408,0.61-0.615,1.182-0.615,1.696c0,0.583,0.198,1.038,0.606,1.393
            c0.405,0.353,0.919,0.532,1.526,0.532c0.606,0,1.12-0.181,1.526-0.536c0.401-0.352,0.605-0.829,0.605-1.421
            C18.476,20.573,18.308,20.162,17.962,19.832z M17.055,21.843c-0.184,0.187-0.423,0.281-0.711,0.281s-0.527-0.098-0.713-0.29
            c-0.183-0.192-0.274-0.43-0.274-0.706c0-0.287,0.094-0.527,0.281-0.714c0.187-0.188,0.427-0.281,0.714-0.281
            c0.289,0,0.526,0.095,0.708,0.282c0.181,0.186,0.271,0.423,0.271,0.705C17.331,21.413,17.238,21.655,17.055,21.843z"/>
        <path fill="${fillColor}" d="M20.639,21.805c-0.141-0.135-0.302-0.201-0.495-0.201c-0.198,0-0.364,0.067-0.507,0.205
            c-0.141,0.136-0.21,0.295-0.21,0.487c0,0.191,0.068,0.349,0.209,0.479c0.143,0.133,0.309,0.197,0.508,0.197
            c0.193,0,0.354-0.066,0.495-0.201c0.138-0.133,0.205-0.291,0.205-0.483S20.776,21.938,20.639,21.805z"/>
        <path fill="${fillColor}" d="M22.962,19.063c0.04-0.23,0.13-0.423,0.268-0.574c0.164-0.179,0.372-0.269,0.618-0.269
            c0.24,0,0.436,0.072,0.583,0.216c0.146,0.145,0.221,0.334,0.221,0.563c0,0.316-0.166,0.634-0.495,0.944l-2.177,1.972v0.977h3.896
            v-0.969h-2.475l1.508-1.342c0.317-0.282,0.561-0.55,0.723-0.797c0.156-0.238,0.236-0.532,0.236-0.873
            c0-0.531-0.184-0.927-0.56-1.208c-0.381-0.284-0.849-0.429-1.389-0.429c-0.539,0-1.008,0.158-1.394,0.471
            c-0.358,0.29-0.578,0.683-0.654,1.168L22.962,19.063z"/>
    </g>
    <path fill="${fillColor}" d="M17.486,12.742c-0.809,0.626-1.691,1.131-2.631,1.5H27.75v11.5H8.25v-3.061l-2.939-2.689l2.939-2.689V14.65
        c-0.512-0.131-1.015-0.287-1.5-0.489v2.521l-3.311,3.311l3.311,3.311v3.939h22.5v-14.5H17.486z"/>
    <g>
        <path fill="${fillColor}" d="M10.911,10.741c-1.24,0-2.249-1.009-2.249-2.249s1.009-2.249,2.249-2.249s2.249,1.009,2.249,2.249
            S12.151,10.741,10.911,10.741z M10.911,7.528c-0.532,0-0.964,0.432-0.964,0.964c0,0.531,0.432,0.964,0.964,0.964
            c0.531,0,0.964-0.433,0.964-0.964C11.875,7.96,11.442,7.528,10.911,7.528z"/>
    </g>
    <g>
        <path fill="${fillColor}" d="M10.911,12.992L10.911,12.992c-2.346,0-4.553-0.915-6.211-2.573C4.233,9.951,3.387,8.949,3.35,8.906
            L3,8.492l0.35-0.415C3.387,8.034,4.233,7.033,4.7,6.565c1.658-1.66,3.865-2.573,6.211-2.573c2.345,0,4.551,0.913,6.209,2.573
            c0.469,0.468,1.315,1.469,1.351,1.512l0.351,0.415l-0.351,0.414c-0.035,0.043-0.882,1.045-1.351,1.513
            C15.462,12.077,13.256,12.992,10.911,12.992z M4.687,8.492C4.972,8.818,5.36,9.261,5.608,9.51c1.417,1.416,3.3,2.196,5.303,2.196
            c2.001,0,3.885-0.78,5.302-2.197c0.249-0.25,0.638-0.69,0.921-1.017c-0.283-0.327-0.672-0.769-0.921-1.018
            c-1.417-1.418-3.301-2.197-5.302-2.197c-2.003,0-3.886,0.779-5.303,2.197C5.36,7.724,4.972,8.165,4.687,8.492z"/>
    </g>
</g>
</svg>
`,
    'destroy.svg': `${stockToolsIconPrefix(32)}
<g>
    <rect x="12.75" y="14" fill="${fillColor}" width="1.5" height="10"/>
    <rect x="17.75" y="14" fill="${fillColor}" width="1.5" height="10"/>
    <path fill="${fillColor}" d="M25.25,10.5c0-1.517-1.233-2.75-2.75-2.75h-3.25V7c0-1.24-1.01-2.25-2.25-2.25h-2
        c-1.24,0-2.25,1.01-2.25,2.25v0.75H9.5c-1.517,0-2.75,1.233-2.75,2.75v1.751h2V27.25h14.5V12.251h2V10.5z M14.25,7
        c0-0.413,0.337-0.75,0.75-0.75h2c0.413,0,0.75,0.337,0.75,0.75v0.75h-3.5V7z M21.75,25.75h-11.5V12.251h11.5V25.75z M23.75,10.751
        H8.25V10.5c0-0.689,0.561-1.25,1.25-1.25h13c0.689,0,1.25,0.561,1.25,1.25V10.751z"/>
</g>
</svg>
`,
    'drawing.svg': `${stockToolsIconPrefix(32)}<path fill="${fillColor}" d="M18.3,8.6c-0.5,0.2-0.8,0.7-0.9,1.2l-1,7.6l0.5,0.3l3.1-4.5c-0.1-0.1-0.2-0.3-0.2-0.5c-0.1-0.7,0.3-1.3,1-1.4
    s1.3,0.3,1.4,1s-0.3,1.3-1,1.4c-0.2,0-0.4,0-0.5,0l-3.1,4.5l0.5,0.3l6.7-3.7c0.5-0.3,0.8-0.8,0.8-1.3L26,9.4l-4-2.6L18.3,8.6z
     M27.2,5.2L25.4,4c-0.6-0.4-1.3-0.2-1.7,0.3L22.5,6l3.9,2.6L27.5,7C27.9,6.4,27.8,5.7,27.2,5.2C27.2,5.3,27.2,5.2,27.2,5.2z"/>
<rect fill="none" width="32.3" height="32.3"/>
<path fill="#1A1A8E" d="M18,23.5c0,0.1,0,0.1-0.1,0.2"/>
<path fill="${fillColor}" d="M17.1,18.9c-0.8-0.2-3.8-0.2-4,1.6c0,0.9,0.1,1.9,0.5,2.7c0.4,0.7,0.7,0.9,0.7,1.4c0,0.8-0.5,1.5-1.2,1.8
    c-0.3,0.2-0.6,0.2-0.9,0.2c-1.2-0.1-1.2,0-1.4,0.1c-1,0.5-0.4,2.7-1.3,3.1c-0.4,0.1-0.7,0-1-0.2c-0.7-0.8-0.1-3.1,1.4-4.1
    c0.5-0.4,1.1-0.6,1.7-0.7c0.6,0,0.9,0.1,1-0.1s-0.1-1.1-0.4-2c-0.4-1.1-0.5-2.2-0.4-3.4c0.5-1.9,3.6-1.8,5.2-1.7
    C17.6,17.7,17.8,19.1,17.1,18.9z"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,
    'edit.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M22.125,3.814L5.817,20.122l-1.818,7.879l7.879-1.818L28.186,9.875L22.125,3.814z M26.064,9.875
    l-1.439,1.439l-3.939-3.939l1.439-1.439L26.064,9.875z M10.186,22.875l9.939-9.939l1.439,1.439l-9.939,9.939L10.186,22.875z
     M7.686,20.375l9.939-9.939l1.439,1.439l-9.939,9.939L7.686,20.375z M18.686,9.375l0.939-0.939l3.939,3.939l-0.939,0.939
    L18.686,9.375z M6.974,21.784l3.242,3.242l-4.215,0.973L6.974,21.784z"/>
</svg>
`,
    'elliott-3.svg': `${stockToolsIconPrefix(32)}
<g>
    <g>
        <path fill="${fillColor}" d="M5.048,22.258c-0.234,0-0.464-0.109-0.61-0.312c-0.241-0.338-0.164-0.806,0.173-1.047l14.468-10.37
            l7.497,7.447c0.294,0.292,0.296,0.767,0.004,1.061c-0.292,0.296-0.767,0.294-1.061,0.004l-6.597-6.553l-13.438,9.63
            C5.352,22.213,5.199,22.258,5.048,22.258z"/>
    </g>
    <g>
        <g>
            <path fill="${fillColor}" d="M6.483,24.807c0.35,0.532,0.524,1.266,0.524,2.201s-0.175,1.67-0.524,2.201
                C6.134,29.742,5.64,30.008,5,30.008c-0.646,0-1.144-0.266-1.496-0.799c-0.353-0.531-0.527-1.266-0.527-2.201
                s0.175-1.669,0.527-2.201C3.856,24.273,4.354,24.008,5,24.008C5.64,24.008,6.134,24.273,6.483,24.807z M5.976,27.693
                c0.026-0.221,0.04-0.449,0.04-0.686s-0.014-0.467-0.04-0.689s-0.074-0.455-0.141-0.697c-0.068-0.242-0.173-0.438-0.315-0.585
                S5.204,24.814,5,24.814c-0.205,0-0.379,0.074-0.524,0.222c-0.145,0.147-0.252,0.343-0.322,0.585
                c-0.069,0.242-0.119,0.475-0.146,0.697s-0.04,0.453-0.04,0.689c0,0.231,0.014,0.459,0.04,0.686
                c0.026,0.226,0.076,0.459,0.146,0.697c0.07,0.24,0.178,0.432,0.322,0.576C4.621,29.112,4.795,29.186,5,29.186
                c0.204,0,0.377-0.073,0.52-0.219c0.143-0.145,0.247-0.338,0.315-0.58C5.901,28.145,5.949,27.914,5.976,27.693z"/>
            <path fill="${fillColor}" d="M5,30.058c-0.659,0-1.177-0.276-1.538-0.82c-0.355-0.536-0.535-1.286-0.535-2.229
                c0-0.942,0.18-1.692,0.535-2.229c0.361-0.544,0.879-0.82,1.538-0.82c0.654,0,1.167,0.276,1.525,0.821
                c0.354,0.538,0.532,1.288,0.532,2.229c0,0.941-0.179,1.691-0.532,2.229C6.167,29.781,5.654,30.058,5,30.058z M5,24.058
                c-0.633,0-1.108,0.254-1.454,0.776c-0.345,0.52-0.52,1.252-0.52,2.174c0,0.923,0.175,1.654,0.52,2.174
                C3.892,29.704,4.367,29.958,5,29.958c0.618,0,1.104-0.261,1.441-0.776c0.343-0.521,0.517-1.252,0.517-2.174
                c0-0.921-0.174-1.652-0.517-2.174C6.104,24.318,5.618,24.058,5,24.058z M5,29.235c-0.217,0-0.404-0.078-0.56-0.232
                c-0.15-0.151-0.263-0.352-0.335-0.598c-0.072-0.249-0.121-0.485-0.147-0.706c-0.026-0.23-0.04-0.463-0.04-0.691
                c0-0.234,0.014-0.469,0.04-0.695c0.026-0.22,0.074-0.451,0.147-0.705c0.072-0.249,0.185-0.453,0.334-0.606
                C4.595,24.844,4.783,24.765,5,24.765s0.404,0.079,0.556,0.237c0.146,0.152,0.257,0.355,0.327,0.605
                c0.07,0.254,0.116,0.484,0.143,0.705c0.026,0.227,0.04,0.461,0.04,0.695s-0.014,0.468-0.04,0.691
                c-0.026,0.219-0.072,0.447-0.143,0.701c-0.07,0.25-0.181,0.453-0.327,0.602C5.403,29.157,5.216,29.235,5,29.235z M5,24.864
                c-0.192,0-0.352,0.067-0.488,0.207c-0.139,0.142-0.243,0.331-0.311,0.563c-0.071,0.25-0.118,0.475-0.144,0.689
                c-0.026,0.223-0.04,0.453-0.04,0.684c0,0.225,0.014,0.454,0.04,0.68c0.025,0.215,0.073,0.447,0.144,0.689
                c0.067,0.23,0.172,0.416,0.31,0.555C4.648,29.068,4.809,29.136,5,29.136s0.35-0.067,0.483-0.204
                c0.136-0.137,0.237-0.324,0.304-0.559C5.854,28.125,5.9,27.9,5.926,27.688c0.026-0.221,0.04-0.449,0.04-0.68
                s-0.014-0.461-0.04-0.684c-0.025-0.217-0.071-0.441-0.139-0.69C5.721,25.4,5.619,25.211,5.483,25.07
                C5.35,24.932,5.191,24.864,5,24.864z"/>
        </g>
    </g>
    <g>
        <g>
            <path fill="${fillColor}" d="M24,27.008v-6h2.339c0.508,0,0.942,0.125,1.301,0.373s0.538,0.627,0.538,1.135
                c0,0.328-0.093,0.605-0.28,0.831c-0.186,0.226-0.44,0.388-0.762,0.483v0.017c0.39,0.051,0.703,0.201,0.94,0.449
                c0.237,0.249,0.355,0.57,0.355,0.966c0,0.311-0.063,0.584-0.19,0.818s-0.301,0.416-0.521,0.547
                c-0.22,0.129-0.46,0.226-0.72,0.287c-0.26,0.062-0.54,0.094-0.839,0.094H24z M25.067,21.889v1.561h0.95
                c0.355,0,0.627-0.071,0.812-0.213c0.187-0.141,0.279-0.342,0.279-0.602c0-0.266-0.095-0.456-0.287-0.572
                c-0.192-0.115-0.491-0.174-0.898-0.174H25.067z M25.067,24.363v1.746h0.958c0.893,0,1.339-0.299,1.339-0.898
                c0-0.305-0.104-0.522-0.313-0.652s-0.537-0.195-0.982-0.195H25.067z"/>
        </g>
    </g>
    <g>
        <g>
            <path fill="${fillColor}" d="M15.958,9.008l2.61-6h0.924l2.584,6h-1.221l-0.559-1.373h-2.602l-0.542,1.373H15.958z M18.06,6.72h1.864
                L19,4.279L18.06,6.72z"/>
        </g>
    </g>
</g>
</svg>
`,
    'elliott-5.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="${fillColor}" d="M27.53,14.03c0.293-0.293,0.293-0.768,0-1.061l-5.064-5.064l-7.5,8.5L10.461,11.9l-7.027,8.109
        c-0.271,0.313-0.238,0.786,0.075,1.058C3.65,21.189,3.825,21.25,4,21.25c0.21,0,0.419-0.088,0.566-0.259l5.973-6.891l4.495,4.495
        l7.5-8.5l3.936,3.936C26.763,14.323,27.237,14.323,27.53,14.03z"/>
    <path fill="${fillColor}" d="M3.999,22.9c-0.569,0-1.017,0.238-1.327,0.709c-0.304,0.459-0.457,1.096-0.457,1.891
        c0,0.796,0.153,1.432,0.457,1.891C2.982,27.861,3.43,28.1,3.999,28.1c0.567,0,1.011-0.238,1.319-0.709
        c0.301-0.457,0.501-1.094,0.501-1.891s-0.2-1.433-0.501-1.891C5.01,23.139,4.566,22.9,3.999,22.9z M4.692,26.039
        c-0.021,0.17-0.058,0.354-0.111,0.543c-0.05,0.178-0.126,0.321-0.229,0.426c-0.098,0.1-0.212,0.146-0.353,0.146
        c-0.139,0-0.255-0.048-0.355-0.146c-0.104-0.105-0.183-0.247-0.234-0.424c-0.055-0.186-0.092-0.369-0.113-0.545
        c-0.021-0.177-0.032-0.357-0.032-0.539c0-0.186,0.011-0.367,0.032-0.542c0.021-0.174,0.059-0.357,0.113-0.546
        c0.052-0.178,0.131-0.322,0.235-0.43c0.101-0.101,0.216-0.15,0.354-0.15c0.14,0,0.255,0.049,0.352,0.15
        c0.104,0.106,0.18,0.251,0.229,0.43c0.054,0.188,0.09,0.372,0.111,0.546c0.021,0.175,0.032,0.356,0.032,0.542
        S4.714,25.867,4.692,26.039z"/>
    <path fill="${fillColor}" d="M9.522,9.9h1.952l0.448,1.1h1.19l-2.129-4.941L10.959,6h-0.867l-2.116,4.864L7.917,11h1.171L9.522,9.9z
         M10.5,7.337l0.639,1.686H9.851L10.5,7.337z"/>
    <path fill="${fillColor}" d="M16.416,22.34c0.151-0.079,0.279-0.182,0.383-0.307c0.163-0.198,0.246-0.443,0.246-0.729
        c0-0.438-0.158-0.771-0.473-0.988C16.27,20.106,15.899,20,15.475,20h-1.97v5h1.827c0.248,0,0.482-0.025,0.695-0.078
        c0.216-0.051,0.42-0.133,0.604-0.241c0.191-0.112,0.344-0.272,0.453-0.476c0.109-0.201,0.164-0.437,0.164-0.7
        c0-0.341-0.104-0.624-0.312-0.841C16.795,22.516,16.62,22.406,16.416,22.34z M14.553,20.9h0.59c0.307,0,0.531,0.042,0.669,0.125
        c0.124,0.075,0.185,0.197,0.185,0.375s-0.062,0.311-0.187,0.404c-0.131,0.1-0.33,0.15-0.593,0.15h-0.664V20.9z M15.224,24.086
        h-0.671v-1.203h0.705c0.338,0,0.585,0.047,0.736,0.141c0.139,0.086,0.206,0.23,0.206,0.44C16.2,23.617,16.2,24.086,15.224,24.086z"
        />
    <path fill="${fillColor}" d="M22.539,7c0.78,0,1.401-0.282,1.845-0.837l0.062-0.077l-0.808-0.568l-0.055,0.073
        c-0.242,0.331-0.582,0.492-1.038,0.492c-0.447,0-0.794-0.144-1.061-0.438c-0.266-0.293-0.4-0.684-0.4-1.159
        c0-0.453,0.141-0.834,0.419-1.134c0.276-0.298,0.638-0.449,1.074-0.449c0.186,0,0.37,0.038,0.551,0.113
        c0.176,0.073,0.315,0.182,0.416,0.321l0.058,0.079l0.768-0.608l-0.055-0.072c-0.183-0.242-0.438-0.427-0.762-0.552
        C23.233,2.062,22.905,2,22.577,2c-0.741,0-1.362,0.229-1.846,0.682C20.245,3.136,20,3.744,20,4.487c0,0.734,0.24,1.343,0.713,1.811
        C21.187,6.764,21.801,7,22.539,7z"/>
    <path fill="${fillColor}" d="M29.075,17.328c-0.163-0.338-0.386-0.604-0.66-0.792c-0.271-0.185-0.563-0.321-0.871-0.407
        C27.237,16.043,26.908,16,26.567,16h-1.8v5h1.8c0.335,0,0.664-0.05,0.976-0.146c0.314-0.098,0.609-0.246,0.877-0.439
        c0.272-0.195,0.493-0.463,0.655-0.792c0.162-0.327,0.243-0.706,0.243-1.122C29.318,18.057,29.237,17.662,29.075,17.328z
         M28.103,19.134c-0.069,0.184-0.16,0.331-0.269,0.441c-0.112,0.111-0.248,0.205-0.404,0.279c-0.159,0.075-0.321,0.129-0.482,0.159
        c-0.163,0.03-0.336,0.045-0.515,0.045h-0.617v-3.131h0.617c1.194,0,1.776,0.514,1.776,1.573
        C28.209,18.736,28.173,18.949,28.103,19.134z"/>
</g>
</svg>
`,
    'ellipse.svg': `${stockToolsIconPrefix(32)}<path fill="${fillColor}" d="M16.3,7.2C10.1,7.2,5,11.1,5,15.9s5.1,8.7,11.3,8.7s11.3-3.9,11.3-8.7S22.5,7.2,16.3,7.2z M16.3,23.3
    c-5.5,0-9.9-3.3-9.9-7.4s4.4-7.4,9.9-7.4s9.9,3.3,9.9,7.4S21.8,23.3,16.3,23.3L16.3,23.3z"/>
<circle fill="${fillColor}" cx="23.5" cy="22.2" r="2.3"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,
    'fibonacci-timezone.svg': `${stockToolsIconPrefix(32)}
<polyline fill="${fillColor}" points="5.2,7.3 5.2,5.6 3.6,5.6 3.6,23.3 3.6,24.8 3.6,27.5 5.2,27.5 5.2,8.8"/>
<polyline fill="${fillColor}" points="9.6,7.3 9.6,5.6 8,5.6 8,23.3 8,24.8 8,27.5 9.6,27.5 9.6,8.8"/>
<polyline fill="${fillColor}" points="11.6,7.3 11.6,5.6 10,5.6 10,23.3 10,24.8 10,27.5 11.6,27.5 11.6,8.8"/>
<polyline fill="${fillColor}" points="14.2,7.3 14.2,5.6 12.6,5.6 12.6,23.3 12.6,24.8 12.6,27.5 14.2,27.5 14.2,8.8"/>
<polyline fill="${fillColor}" points="19,7.3 19,5.6 17.4,5.6 17.4,23.3 17.4,24.8 17.4,27.5 19,27.5 19,8.8"/>
<polyline fill="${fillColor}" points="27.5,7.3 27.5,5.6 25.9,5.6 25.9,23.3 25.9,24.8 25.9,27.5 27.5,27.5 27.5,8.8"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,
    'fibonacci.svg': `${stockToolsIconPrefix(32)}
<g>
    <rect x="19.5" y="19.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="24.5" y="19.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="9.5" y="19.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="14.5" y="19.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="4.5" y="19.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="19.5" y="15.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="24.5" y="15.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="9.5" y="15.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="14.5" y="15.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="4.5" y="15.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="19.5" y="10.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="24.5" y="10.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="9.5" y="10.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="14.5" y="10.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="4.5" y="10.75" fill="${fillColor}" width="3" height="1.5"/>
    <rect x="4" y="4.75" fill="${fillColor}" width="24" height="1.5"/>
    <rect x="4" y="25.75" fill="${fillColor}" width="24" height="1.5"/>
</g>
</svg>
`,
    'flag-basic.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="${fillColor}" d="M27.25,4.75H15V3h-1.65v22.175c0,0.456,0.369,0.825,0.825,0.825S15,25.631,15,25.175V16.25h12.25L21.5,10.5
        L27.25,4.75z M23.689,14.75H15v-8.5h8.689l-4.25,4.25L23.689,14.75z"/>
</g>
</svg>
`,
    'flag-diamond.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="${fillColor}" d="M27.25,4.75H15V3h-1.65v20.175c0,0.456,0.369,0.825,0.825,0.825S15,23.631,15,23.175V16.25h12.25L21.5,10.5
        L27.25,4.75z M23.689,14.75H15v-8.5h8.689l-4.25,4.25L23.689,14.75z"/>
    <polygon fill="${fillColor}" points="17,22.604 21.65,24 14,26.295 6.349,24 11,22.604 11,21.195 1.651,24 14,27.705 26.35,24
        17,21.195"/>
</g>
</svg>
`,
    'flag-elipse.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="${fillColor}" d="M17,20.385v1.506c4.129,0.398,6.25,1.558,6.25,2.109c0,0.673-3.146,2.5-9.25,2.5S4.75,24.673,4.75,24
        c0-0.552,2.121-1.711,6.25-2.109v-1.506C6.879,20.757,3.25,21.922,3.25,24c0,2.576,5.572,4,10.75,4s10.75-1.424,10.75-4
        C24.75,21.922,21.121,20.757,17,20.385z"/>
    <path fill="${fillColor}" d="M27.25,4.75H15V3h-1.65v20.175c0,0.456,0.369,0.825,0.825,0.825S15,23.631,15,23.175V16.25h12.25L21.5,10.5
        L27.25,4.75z M23.689,14.75H15v-8.5h8.689l-4.25,4.25L23.689,14.75z"/>
</g>
</svg>
`,
    'flag-trapeze.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" points="19.29,20.3 17,20.3 17,21.7 18.71,21.7 23.311,26.3 6.133,26.3 8.433,21.7 11,21.7 11,20.3
        7.567,20.3 3.867,27.7 26.69,27.7"/>
    <g>
        <path fill="${fillColor}" d="M27.25,4.75H15V3h-1.65v20.175c0,0.456,0.369,0.825,0.825,0.825S15,23.631,15,23.175V16.25h12.25
            L21.5,10.5L27.25,4.75z M23.689,14.75H15v-8.5h8.689l-4.25,4.25L23.689,14.75z"/>
    </g>
</g>
</svg>
`,
    'fullscreen.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" points="22.593,21.657 19.297,18.361 18.413,19.244 21.71,22.541 20.465,23.786 24.75,24.75 23.786,20.464"/>
    <polygon fill="${fillColor}" points="11.535,8.214 7.25,7.25 8.214,11.536 9.459,10.291 12.756,13.588 13.641,12.703 10.343,9.406"/>
    <polygon fill="${fillColor}" points="19.27,13.613 22.566,10.316 23.786,11.535 24.75,7.25 20.464,8.214 21.684,9.433 18.387,12.729"/>
    <polygon fill="${fillColor}" points="12.729,18.386 9.432,21.683 8.214,20.465 7.25,24.75 11.536,23.786 10.316,22.567 13.613,19.271"/>
</g>
</svg>
`,
    'horizontal-line.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M27,14.751H15.143c-0.289-0.663-0.948-1.126-1.718-1.126s-1.429,0.463-1.718,1.126H5v1.5h6.709
    c0.289,0.661,0.947,1.124,1.716,1.124s1.427-0.463,1.716-1.124H27V14.751z"/>
</svg>
`,
    'indicators.svg': `${stockToolsIconPrefix(32)}
<g>
</g>
<g>
    <g>
        <g>
            <polygon fill="${fillColor}" points="14.138,14.794 14.697,16.26 21.328,11.074 22.156,12.134 23.723,8.25 19.576,8.834 20.404,9.893"/>
            <polygon fill="${fillColor}" points="10.841,17.372 3.761,22.909 4.685,24.091 11.401,18.838"/>
        </g>
        <g>
            <path fill="${fillColor}" d="M17.075,24.159c-0.11,0-0.221-0.006-0.332-0.019c-1.334-0.154-2.439-1.211-3.113-2.976l-2.215-5.793
                c-0.469-1.226-1.177-1.967-1.995-2.087c-0.816-0.111-1.723,0.401-2.511,1.428l-3.842,4.994c-0.254,0.328-0.723,0.39-1.052,0.138
                c-0.328-0.253-0.39-0.724-0.138-1.052l3.842-4.994c1.146-1.489,2.541-2.203,3.917-1.997c1.38,0.201,2.509,1.279,3.179,3.035
                l2.215,5.793c0.458,1.199,1.146,1.936,1.885,2.021c0.736,0.08,1.576-0.477,2.296-1.54l9.141-13.53
                c0.231-0.344,0.697-0.433,1.041-0.201c0.343,0.231,0.434,0.697,0.201,1.041l-9.141,13.53
                C19.483,23.386,18.295,24.159,17.075,24.159z"/>
        </g>
    </g>
</g>
<g>
</g>
</svg>
`,
    'label.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="${fillColor}" d="M3.75,7.749v14.5h7.939L16,26.561l4.31-4.312h7.94v-14.5H3.75z M26.75,20.749h-7.062L16,24.439l-3.689-3.69
        H5.25v-11.5h21.5V20.749z"/>
    <polygon fill="${fillColor}" points="9.291,18 10.735,18 10.735,13.251 12.426,13.251 12.426,12.018 7.601,12.018 7.601,13.251
        9.291,13.251"/>
    <polygon fill="${fillColor}" points="14.712,18 15.971,15.888 17.28,18 19.063,18 16.9,14.84 18.793,12.018 17.111,12.018
        16.013,13.876 14.897,12.018 13.157,12.018 15.084,14.84 12.988,18"/>
    <polygon fill="${fillColor}" points="21.265,18 22.709,18 22.709,13.251 24.399,13.251 24.399,12.018 19.574,12.018 19.574,13.251
        21.265,13.251"/>
</g>
</svg>
`,
    'line.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M27.03,6.03L25.97,4.97l-3.788,3.788c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875
    c0,0.241,0.05,0.47,0.133,0.682l-8.576,8.576c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875
    c0,0.241,0.05,0.47,0.133,0.682L4.97,25.97L6.03,27.03l3.788-3.788c0.212,0.083,0.44,0.133,0.682,0.133
    c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l8.576-8.576c0.212,0.083,0.44,0.133,0.682,0.133
    c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682L27.03,6.03z"/>
</svg>
`,
    'linear.svg': `${stockToolsIconPrefix(32)}<polyline fill="${fillColor}" points="8.4,7 8.4,5.3 6.8,5.3 6.8,23 6.8,24.5 6.8,27.3 8.4,27.3 8.4,8.5"/>
<polyline fill="${fillColor}" points="22.8,10.3 24.1,9 22.9,7.9 10.4,20.5 9.3,21.5 7.4,23.5 8.5,24.6 21.8,11.3"/>
<polyline fill="${fillColor}" points="25.2,25.4 26.9,25.4 26.9,23.8 9.2,23.8 7.7,23.8 4.9,23.8 4.9,25.4 23.7,25.4"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,
    'logarithmic.svg': `${stockToolsIconPrefix(32)}<g data-name="Layer 2"><g data-name="Layer 7"><g><polyline fill="${fillColor}" points="8.41 7.01 8.41 5.26 6.81 5.26 6.81 23.01 6.81 24.51 6.81 27.26 8.41 27.26 8.41 8.51"/><polyline fill="${fillColor}" points="25.17 25.37 26.92 25.37 26.92 23.77 9.17 23.77 7.67 23.77 4.92 23.77 4.92 25.37 23.67 25.37"/><path fill="${fillColor}" d="M24.66,12a2.18,2.18,0,0,0-.27-.11,12.35,12.35,0,0,0-16.64,12,9.8,9.8,0,0,0,1.88.14A10.51,10.51,0,0,1,23.77,13.61"/><rect fill="none" width="32" height="32"/></g></g></g></svg>`,
    'measure-x.svg': `${stockToolsIconPrefix(32)}
<g>
    <g>
        <polygon fill="${fillColor}" points="14.673,21 15.984,19.177 17.287,21 18.808,21 16.766,18.344 18.559,16 17.12,16 16.006,17.553
            14.923,16 13.422,16 15.225,18.344 13.193,21"/>
        <rect x="25.75" y="9.014" fill="${fillColor}" width="1.5" height="2.986"/>
        <rect x="25.75" y="24.014" fill="${fillColor}" width="1.5" height="2.986"/>
        <rect x="25.75" y="14.014" fill="${fillColor}" width="1.5" height="2.986"/>
        <rect x="25.75" y="19.014" fill="${fillColor}" width="1.5" height="2.986"/>
        <rect x="4.75" y="9.014" fill="${fillColor}" width="1.5" height="2.986"/>
        <rect x="4.75" y="4.014" fill="${fillColor}" width="1.5" height="2.986"/>
        <rect x="4.75" y="19.014" fill="${fillColor}" width="1.5" height="2.986"/>
        <rect x="4.75" y="14.014" fill="${fillColor}" width="1.5" height="2.986"/>
        <rect x="25.75" y="4" fill="${fillColor}" width="1.5" height="3"/>
        <rect x="4.75" y="24" fill="${fillColor}" width="1.5" height="2.986"/>
        <polygon fill="${fillColor}" points="24.465,13.5 21,11.5 21,13 11,13 11,11.5 7.535,13.5 11,15.5 11,14 21,14 21,15.5"/>
    </g>
</g>
</svg>
`,
    'measure-xy.svg': `${stockToolsIconPrefix(32)}
<g>
    <g>
        <rect x="26.75" y="19" fill="${fillColor}" width="1.5" height="3"/>
        <rect x="26.75" y="14" fill="${fillColor}" width="1.5" height="3"/>
        <rect x="26.75" y="9" fill="${fillColor}" width="1.5" height="3"/>
        <rect x="20" y="25.75" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="15" y="25.75" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="10" y="25.75" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="4.75" y="9.001" fill="${fillColor}" width="1.5" height="2.999"/>
        <rect x="4.75" y="14.001" fill="${fillColor}" width="1.5" height="2.999"/>
        <rect x="4.75" y="19.001" fill="${fillColor}" width="1.5" height="2.999"/>
        <rect x="10" y="3.751" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="15" y="3.751" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="20" y="3.751" fill="${fillColor}" width="3" height="1.5"/>
    </g>
    <polygon fill="${fillColor}" points="25,3.75 25,5.25 26.75,5.25 26.75,7 28.25,7 28.25,3.75"/>
    <polygon fill="${fillColor}" points="4.75,7 6.25,7 6.25,5.25 8,5.25 8,3.75 4.75,3.75"/>
    <polygon fill="${fillColor}" points="8,27.25 8,25.75 6.25,25.75 6.25,24 4.75,24 4.75,27.25"/>
    <polygon fill="${fillColor}" points="28.25,24 26.75,24 26.75,25.75 25,25.75 25,27.25 28.25,27.25"/>
    <polygon fill="${fillColor}" points="16.5,6.535 14.5,10 16,10 16,21 14.5,21 16.5,24.465 18.5,21 17,21 17,10 18.5,10"/>
    <polygon fill="${fillColor}" points="25.465,15.5 22,13.5 22,15 11,15 11,13.5 7.535,15.5 11,17.5 11,16 22,16 22,17.5"/>
</g>
</svg>
`,
    'measure-y.svg': `${stockToolsIconPrefix(32)}
<g>
    <g>
        <rect x="24" y="4.75" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="19" y="25.75" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="9" y="4.75" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="4" y="25.75" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="19" y="4.75" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="14" y="4.75" fill="${fillColor}" width="3" height="1.5"/>
        <path fill="${fillColor}" d="M18.13,19.851c-0.113,0.116-0.297,0.175-0.552,0.175c-0.163,0-0.321-0.024-0.478-0.074l-0.106,1.104
            c0.205,0.05,0.425,0.074,0.658,0.074c0.531,0,0.936-0.116,1.216-0.35c0.279-0.234,0.518-0.602,0.716-1.104l2.409-6.187h-1.326
            l-1.264,3.703h-0.021l-1.423-3.703h-1.411l2.187,5.094l-0.255,0.647C18.36,19.526,18.243,19.733,18.13,19.851z"/>
        <rect x="14" y="25.75" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="8.995" y="25.75" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="4" y="4.75" fill="${fillColor}" width="3" height="1.5"/>
        <rect x="24" y="25.75" fill="${fillColor}" width="3" height="1.5"/>
        <polygon fill="${fillColor}" points="13.5,7.535 11.5,11 13,11 13,21 11.5,21 13.5,24.465 15.5,21 14,21 14,11 15.5,11"/>
    </g>
</g>
</svg>
`,
    'panning.svg': `${stockToolsIconPrefix(32)}<path fill="${fillColor}" d="M20.8,10.7v-0.4c0-1.4-1.1-2.6-2.5-2.6c-0.2,0-0.4,0-0.7,0.1C17,6.5,15.5,6,14.3,6.6
    c-0.5,0.2-0.9,0.7-1.2,1.2c-1.4-0.3-2.8,0.5-3.1,1.9C9.9,9.8,9.9,10,9.9,10.2v4.9c-0.8-0.3-1.7-0.2-2.4,0.3C6.4,16.3,6.2,17.9,7,19
    l4.6,6.5c0.2,0.3,0.6,0.5,1,0.5h8.6c0.6,0,1.1-0.4,1.2-1l1.2-5.1c0.1-0.6,0.2-1.2,0.2-1.8v-5c0-1.4-1.1-2.6-2.5-2.6
    C21.1,10.6,21,10.6,20.8,10.7z M21.9,18.3c0,0.5,0,0.9-0.1,1.3l-1.1,4.6h-7.8L8.5,18c-0.6-0.8,0.6-1.6,1.1-0.9l1,1.5
    c0.2,0.3,0.6,0.3,0.9,0.1c0.2-0.1,0.3-0.3,0.3-0.5v-8c0-0.4,0.2-0.7,0.6-0.8c0.4,0,0.7,0.2,0.8,0.6c0,0.1,0,0.1,0,0.2v5.9
    c0,0.3,0.3,0.6,0.6,0.6c0,0,0,0,0,0H14c0.3,0,0.6-0.3,0.6-0.6c0,0,0,0,0,0V8.9c0-0.4,0.2-0.7,0.6-0.8c0.4,0,0.7,0.2,0.8,0.6
    c0,0.1,0,0.1,0,0.2v7.3c0,0.3,0.3,0.6,0.6,0.6c0,0,0,0,0,0H17c0.3,0,0.6-0.3,0.6-0.6c0,0,0,0,0,0v-6c0-0.4,0.2-0.7,0.6-0.8
    c0.4,0,0.7,0.2,0.8,0.6c0,0.1,0,0.1,0,0.2v6c0,0.3,0.3,0.6,0.6,0.6c0,0,0,0,0,0h0.3c0.3,0,0.6-0.3,0.6-0.6c0,0,0,0,0,0v-2.9
    c0-0.4,0.2-0.7,0.6-0.8c0.4,0,0.7,0.2,0.8,0.6c0,0.1,0,0.1,0,0.2L21.9,18.3L21.9,18.3z"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,
    'parallel-channel.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="${fillColor}" d="M17.258,7.802C17.487,7.896,17.737,7.95,18,7.95c1.077,0,1.95-0.873,1.95-1.95S19.077,4.05,18,4.05
        c-1.076,0-1.95,0.873-1.95,1.95c0,0.263,0.054,0.513,0.147,0.742l-9.455,9.456C6.513,16.104,6.263,16.05,6,16.05
        c-1.076,0-1.95,0.873-1.95,1.95S4.924,19.95,6,19.95c1.077,0,1.95-0.873,1.95-1.95c0-0.263-0.054-0.513-0.147-0.742L17.258,7.802z"
        />
    <path fill="${fillColor}" d="M28.03,13.03L26.97,11.97l-6.228,6.228C20.513,18.104,20.263,18.05,20,18.05c-1.077,0-1.95,0.873-1.95,1.95
        c0,0.263,0.054,0.513,0.147,0.742L11.97,26.97l1.061,1.061l6.228-6.228c0.229,0.094,0.479,0.147,0.742,0.147
        c1.077,0,1.95-0.873,1.95-1.95c0-0.263-0.054-0.513-0.147-0.742L28.03,13.03z"/>
</g>
</svg>
`,
    'pitchfork.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M28.057,15.006l-1.059-1.062l-7.865,7.863c-0.212-0.083-0.441-0.133-0.683-0.133
    c-0.243,0-0.474,0.05-0.687,0.134l-3.254-3.255l8.548-8.548l-1.06-1.061l-8.549,8.548l-3.257-3.259
    c0.083-0.213,0.133-0.442,0.133-0.685c0-0.241-0.05-0.47-0.132-0.682l7.863-7.862l-1.059-1.061l-7.865,7.862
    c-0.212-0.083-0.441-0.133-0.683-0.133c-1.036,0-1.875,0.839-1.875,1.875s0.839,1.875,1.875,1.875c0.241,0,0.47-0.05,0.681-0.132
    l3.26,3.26l-5.206,5.205c-0.213-0.083-0.442-0.133-0.685-0.133c-1.036,0-1.875,0.84-1.875,1.875c0,1.036,0.839,1.875,1.875,1.875
    s1.875-0.839,1.875-1.875c0-0.24-0.049-0.469-0.132-0.681l5.207-5.206l3.257,3.257c-0.082,0.211-0.132,0.439-0.132,0.68
    c0,1.036,0.839,1.875,1.875,1.875s1.875-0.839,1.875-1.875c0-0.241-0.05-0.47-0.132-0.682L28.057,15.006z"/>
</svg>
`,
    'ray.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M27.03,6.03L25.97,4.97l-7.788,7.788c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875
    c0,0.241,0.05,0.47,0.133,0.682l-7.576,7.576c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875
    s0.84,1.875,1.875,1.875s1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682l7.576-7.576c0.212,0.083,0.44,0.133,0.682,0.133
    c1.035,0,1.875-0.84,1.875-1.875c0-0.241-0.05-0.47-0.133-0.682L27.03,6.03z"/>
</svg>
`,
    'rectangle.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M25.25,22.783V6.75H6.75v18.5h16.033c0.29,0.662,0.949,1.125,1.717,1.125c1.035,0,1.875-0.84,1.875-1.875
    C26.375,23.731,25.912,23.073,25.25,22.783z M23.75,22.783c-0.432,0.189-0.777,0.535-0.967,0.967H8.25V8.25h15.5V22.783z"/>
</svg>
`,
    'remove-annotations.svg': `${stockToolsIconPrefix(32)}
<g>
    <rect x="5" y="23.7" fill="${fillColor}" width="3" height="1.5"/>

        <rect x="7.69" y="26.011" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -5.046 52.9314)" fill="${fillColor}" width="1.5" height="3"/>
    <path fill="${fillColor}" d="M16.311,23.7l10.625-10.625l-7.159-7.158c-1.001-1.002-2.019-0.786-2.806,0.003L6.72,16.17
        c-0.614,0.613-0.952,1.423-0.952,2.28s0.338,1.667,0.952,2.28l4.47,4.47H27v-1.5H16.311z M18.716,6.978l6.099,6.098l-0.648,0.647
        l-6.438-6.438l0.304-0.304C18.228,6.783,18.521,6.784,18.716,6.978z M11.811,23.7l-4.03-4.03c-0.331-0.33-0.513-0.764-0.513-1.22
        s0.182-0.89,0.513-1.22l1.72-1.72l5.47,5.47l1.061-1.061l-5.47-5.47l6.106-6.105l6.438,6.438L14.189,23.7H11.811z"/>
</g>
</svg>
`,
    'save-chart.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" points="8.749,21.25 12.75,21.25 12.75,26 14.25,26 14.25,19.75 12.37,19.75 15.999,16.12 19.629,19.75
        17.75,19.75 17.75,26 19.25,26 19.25,21.25 23.25,21.25 16,14"/>
    <polygon fill="${fillColor}" points="15.34,6.75 12.84,3.75 5.75,3.75 5.75,21.138 7.25,19.638 7.25,5.25 12.16,5.25 14.66,8.25
        24.75,8.25 24.75,19.555 26.25,21.055 26.25,6.75"/>
</g>
</svg>
`,
    'segment.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M24.5,5.625c-1.035,0-1.875,0.84-1.875,1.875c0,0.241,0.05,0.47,0.133,0.682L8.182,22.758
    c-0.212-0.083-0.44-0.133-0.682-0.133c-1.035,0-1.875,0.84-1.875,1.875s0.84,1.875,1.875,1.875s1.875-0.84,1.875-1.875
    c0-0.241-0.05-0.47-0.133-0.682L23.818,9.242c0.212,0.083,0.44,0.133,0.682,0.133c1.035,0,1.875-0.84,1.875-1.875
    S25.535,5.625,24.5,5.625z"/>
</svg>
`,
    'separator.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="#CDCDCC" d="M32,16.251h-3.52v-1.5H32V16.251z M24.92,16.251h-3.56v-1.5h3.56V16.251z M17.8,16.251h-3.56v-1.5h3.56
        V16.251z M10.68,16.251H7.12v-1.5h3.56V16.251z M3.56,16.251H0v-1.5h3.56V16.251z"/>
</g>
</svg>
`,
    'series-candlestick.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" points="7,26 8,26 8,23 9,23 9,18 8,18 8,14 7,14 7,18 6,18 6,23 7,23"/>
    <polygon fill="${fillColor}" points="13,20 14,20 14,17 15,17 15,11 14,11 14,6 13,6 13,11 12,11 12,17 13,17"/>
    <polygon fill="${fillColor}" points="19,25 20,25 20,22 21,22 21,18 20,18 20,14 19,14 19,18 18,18 18,22 19,22"/>
    <polygon fill="${fillColor}" points="24,17 25,17 25,14 26,14 26,10 25,10 25,6 24,6 24,10 23,10 23,14 24,14"/>
</g>
</svg>
`,
    'series-heikin-ashi.svg': `${stockToolsIconPrefix(32)}<g data-name="Layer 2"><g><g data-name="heikin-ashi-series"><rect fill="${fillColor}" x="10.77" y="7.42" width="3.11" height="16.29"/><rect fill="${fillColor}" x="11.76" y="12.19" width="1.06" height="14.01"/><rect fill="${fillColor}" x="4.83" y="5.24" width="3.11" height="5.05"/><rect fill="${fillColor}" x="5.83" y="7.96" width="1.06" height="4.68"/><rect fill="${fillColor}" x="17.71" y="13.5" width="3.11" height="5.05"/><rect fill="${fillColor}" x="18.7" y="16.21" width="1.06" height="6.74"/><polygon fill="${fillColor}" points="24.68 16.6 25.7 16.6 25.7 13.51 26.73 13.51 26.73 9.39 25.7 9.39 25.7 5.27 24.68 5.27 24.68 9.39 23.64 9.39 23.64 13.51 24.68 13.51 24.68 16.6"/><rect fill="none" width="32" height="32"/></g></g></g></svg>`,
    'series-hlc.svg': `${stockToolsIconPrefix(32)}<g data-name="Layer 2"><g><g data-name="hlc-series"><polyline fill="${fillColor}" points="5.11 12.22 5.11 24.97 6.71 24.97 6.71 20.22 9.65 20.22 9.65 18.72 6.71 18.72 6.71 6.97 5.11 6.97 5.11 10.72"/><polyline fill="${fillColor}" points="14.2 18.14 14.2 19.89 15.8 19.89 15.8 14.14 18.75 14.14 18.75 12.64 15.8 12.64 15.8 9.89 14.2 9.89 14.2 16.64"/><polyline fill="${fillColor}" points="22.2 22.77 22.2 5.02 23.8 5.02 23.8 6.77 26.75 6.77 26.75 8.27 23.8 8.27 23.8 27.02 22.2 27.02 22.2 24.27"/><rect fill="none" width="32" height="32"/></g></g></g></svg>`,
    'series-hollow-candlestick.svg': `${stockToolsIconPrefix(32)}<g data-name="Layer 2"><g><g data-name="hollow-candlestick-series"><rect fill="${fillColor}" x="11.07" y="14.05" width="3.25" height="8.37"/><rect fill="${fillColor}" x="12.11" y="6.89" width="1.11" height="10.88"/><rect fill="${fillColor}" x="12.11" y="21.4" width="1.11" height="5.38"/><path fill="${fillColor}" d="M19.77,10.19v9.58H18.68V10.19h1.09m1.08-1.07H17.6V20.84h3.25V9.12Z"/><rect fill="${fillColor}" x="18.64" y="20.55" width="1.11" height="2.88"/><rect fill="${fillColor}" x="18.64" y="5.25" width="1.11" height="3.93"/><path fill="${fillColor}" d="M6.66,17.23v5.14H5.57V17.23H6.66m1.08-1.08H4.49v7.3H7.74v-7.3Z"/><rect fill="${fillColor}" x="5.53" y="12.35" width="1.11" height="4.31"/><rect fill="${fillColor}" x="5.53" y="22.43" width="1.11" height="4.43"/><rect fill="${fillColor}" x="24.01" y="12.33" width="3.25" height="8.37"/><rect fill="${fillColor}" x="25.05" y="20.68" width="1.11" height="5.53"/><rect fill="none" width="32" height="32"/></g></g></g></svg>`,
    'series-line.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="${fillColor}" d="M4.125,28.95c-0.079,0-0.16-0.012-0.239-0.035c-0.436-0.132-0.683-0.593-0.551-1.028L8.844,9.664
        l5.229,11.505l4.674-8.413l3.879,3.031l4.602-12.081c0.163-0.426,0.641-0.64,1.064-0.477c0.426,0.162,0.641,0.639,0.479,1.064
        l-5.398,14.169l-4.121-3.219l-5.326,9.587L9.156,14.336L4.915,28.363C4.807,28.721,4.479,28.95,4.125,28.95z"/>
</g>
</svg>
`,
    'series-ohlc.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" points="8.3,6.001 6.7,6.001 6.7,9.75 3.75,9.75 3.75,11.25 6.7,11.25 6.7,24 8.3,24 8.3,19.25
        11.25,19.25 11.25,17.75 8.3,17.75"/>
    <polygon fill="${fillColor}" points="17.3,13 15.7,13 15.7,24.75 12.75,24.75 12.75,26.25 15.7,26.25 15.7,28 17.3,28 17.3,22.25
        20.25,22.25 20.25,20.75 17.3,20.75"/>
    <polygon fill="${fillColor}" points="28.25,21.75 25.3,21.75 25.3,4 23.7,4 23.7,5.75 20.75,5.75 20.75,7.25 23.7,7.25 23.7,26 25.3,26
        25.3,23.25 28.25,23.25"/>
</g>
</svg>
`,
    'text.svg': `${stockToolsIconPrefix(60)}
<g>
    <line fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" x1="31" y1="12" x2="31" y2="48"/>
    <line fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" x1="24" y1="48" x2="37" y2="48"/>
    <polyline fill="none" stroke="#666666" stroke-width="5" stroke-miterlimit="10" points="45,19 45,12 17,12 17,19"/>
</g>
</svg>
`,
    'time-cycles.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M12.1,27c0-2.2-1.8-4-4-4s-4,1.8-4,4 M5.5,27c-0.1-1.4,1-2.7,2.4-2.7c1.4-0.1,2.7,1,2.7,2.4c0,0.1,0,0.2,0,0.3"
    />
<path fill="${fillColor}" d="M20.1,27c0-2.2-1.8-4-4-4s-4,1.8-4,4 M13.5,27c-0.1-1.4,1-2.7,2.4-2.7c1.4-0.1,2.7,1,2.7,2.4c0,0.1,0,0.2,0,0.3"/>
<path fill="${fillColor}" d="M28,27c0-2.2-1.8-4-4-4s-4,1.8-4,4 M21.4,27c-0.1-1.4,1-2.7,2.4-2.7c1.4-0.1,2.7,1,2.7,2.4c0,0.1,0,0.2,0,0.3"
    />
<rect x="4.1" y="27" fill="${fillColor}" width="23.9" height="1.4"/>
<rect x="23.3" y="20.4" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="23.3" y="17.1" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="23.3" y="13.7" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="23.3" y="10.4" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="23.3" y="7" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="23.3" y="3.6" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="15.5" y="20.4" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="15.5" y="17.1" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="15.5" y="13.7" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="15.5" y="10.4" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="15.5" y="7" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="15.5" y="3.6" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="7.5" y="20.4" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="7.5" y="17.1" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="7.5" y="13.7" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="7.5" y="10.4" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="7.5" y="7" fill="${fillColor}" width="1.4" height="1.4"/>
<rect x="7.5" y="3.6" fill="${fillColor}" width="1.4" height="1.4"/>
<rect fill="none" width="32" height="32"/>
</svg>
`,
    'vertical-arrow.svg': `${stockToolsIconPrefix(32)}
<polygon fill="${fillColor}" points="16.251,23.243 16.251,4.001 14.751,4.001 14.751,23.244 13,23.244 15.5,28 18,23.243"/>
</svg>
`,
    'vertical-counter.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" points="16.251,11 14.751,11 14.751,23.244 13,23.244 15.5,28 18,23.243 16.251,23.243"/>
    <polygon fill="${fillColor}" points="9.085,5.241 9.693,6.074 10.618,5.36 10.618,9 11.794,9 11.794,4.044 10.716,4.044"/>
    <path fill="${fillColor}" d="M14.778,5.118c0.126-0.138,0.285-0.206,0.477-0.206c0.187,0,0.336,0.055,0.448,0.164
        c0.111,0.11,0.168,0.254,0.168,0.431c0,0.252-0.136,0.507-0.406,0.763l-1.933,1.75V9h3.584V7.978h-2.022l1.147-1.021
        c0.285-0.252,0.501-0.49,0.647-0.714c0.147-0.225,0.221-0.495,0.221-0.812c0-0.489-0.175-0.865-0.524-1.127
        c-0.351-0.261-0.772-0.392-1.268-0.392c-0.494,0-0.919,0.144-1.273,0.431c-0.355,0.287-0.561,0.675-0.616,1.165l1.127,0.154
        C14.578,5.437,14.652,5.256,14.778,5.118z"/>
    <path fill="${fillColor}" d="M21.656,6.826C21.479,6.614,21.25,6.476,20.97,6.41V6.389c0.247-0.065,0.448-0.194,0.603-0.388
        c0.153-0.194,0.23-0.424,0.23-0.69c0-0.447-0.172-0.793-0.515-1.035c-0.343-0.243-0.752-0.364-1.229-0.364
        c-0.434,0-0.821,0.109-1.162,0.329c-0.341,0.219-0.569,0.529-0.686,0.931l1.092,0.252c0.037-0.168,0.118-0.302,0.241-0.402
        c0.124-0.101,0.27-0.15,0.438-0.15c0.173,0,0.32,0.049,0.441,0.146c0.121,0.099,0.182,0.231,0.182,0.399
        c0,0.392-0.289,0.588-0.867,0.588h-0.344v0.861h0.315c0.284,0,0.523,0.05,0.718,0.15c0.193,0.101,0.29,0.267,0.29,0.5
        c0,0.215-0.072,0.374-0.217,0.477s-0.312,0.154-0.504,0.154c-0.215,0-0.396-0.06-0.546-0.179s-0.248-0.265-0.294-0.438
        l-1.093,0.287c0.126,0.438,0.369,0.768,0.729,0.986c0.359,0.22,0.779,0.329,1.26,0.329c0.317,0,0.613-0.054,0.889-0.161
        s0.508-0.283,0.697-0.528c0.188-0.245,0.283-0.54,0.283-0.886C21.922,7.282,21.833,7.039,21.656,6.826z"/>
</g>
</svg>
`,
    'vertical-double-arrow.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" points="18,10.243 16.251,10.243 16.251,4.001 14.751,4.001 14.751,10.244 13,10.244 15.5,15"/>
    <polygon fill="${fillColor}" points="13,21.757 14.749,21.757 14.749,27.999 16.249,27.999 16.249,21.756 18,21.756 15.5,17"/>
</g>
</svg>
`,
    'vertical-label.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" points="16.251,11 14.751,11 14.751,23.244 13,23.244 15.5,28 18,23.243 16.251,23.243"/>
    <polygon fill="${fillColor}" points="8.5,5.066 9.899,5.066 9.899,9 11.097,9 11.097,5.066 12.497,5.066 12.497,4.044 8.5,4.044"/>
    <polygon fill="${fillColor}" points="17.813,4.044 16.421,4.044 15.511,5.584 14.587,4.044 13.145,4.044 14.74,6.382 13.005,9 14.433,9
        15.476,7.25 16.561,9 18.037,9 16.245,6.382"/>
    <polygon fill="${fillColor}" points="18.504,4.044 18.504,5.066 19.903,5.066 19.903,9 21.101,9 21.101,5.066 22.501,5.066
        22.501,4.044"/>
</g>
</svg>
`,
    'vertical-line.svg': `${stockToolsIconPrefix(32)}
<path fill="${fillColor}" d="M17.375,18.574c0-0.769-0.463-1.427-1.124-1.716V5h-1.5v11.856c-0.663,0.29-1.126,0.949-1.126,1.718
    c0,0.771,0.463,1.429,1.126,1.718V27h1.5v-6.709C16.912,20.001,17.375,19.344,17.375,18.574z"/>
</svg>
`,
    'zoom-x.svg': `${stockToolsIconPrefix(32)}
<g>
    <polygon fill="${fillColor}" points="16.25,18 16.25,15.25 19,15.25 19,13.75 16.25,13.75 16.25,11 14.75,11 14.75,13.75 12,13.75
        12,15.25 14.75,15.25 14.75,18"/>
    <path fill="${fillColor}" d="M15.5,8.251c2.359,0,4.416,1.314,5.479,3.249h1.665C21.47,8.713,18.71,6.751,15.5,6.751
        S9.53,8.713,8.355,11.5h1.665C11.084,9.565,13.141,8.251,15.5,8.251z"/>
    <path fill="${fillColor}" d="M22.646,17.5H20.98c-1.062,1.936-3.121,3.251-5.48,3.251s-4.418-1.315-5.48-3.251H8.354
        c1.175,2.788,3.935,4.751,7.146,4.751c1.84,0,3.52-0.659,4.85-1.734l5.567,5.566l1.166-1.166l-5.558-5.557
        C21.98,18.799,22.361,18.175,22.646,17.5z"/>
    <polygon fill="${fillColor}" points="10,13.754 6.012,13.754 6.012,12.26 2.125,14.504 6.012,16.747 6.012,15.247 10,15.247"/>
    <polygon fill="${fillColor}" points="21,15.253 24.988,15.253 24.988,16.747 28.875,14.504 24.988,12.261 24.988,13.761 21,13.761"/>
</g>
</svg>
`,
    'zoom-xy.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="${fillColor}" d="M26.083,24.917l-5.556-5.555c1.075-1.331,1.723-3.021,1.723-4.861c0-4.273-3.477-7.75-7.75-7.75
        s-7.75,3.477-7.75,7.75s3.477,7.75,7.75,7.75c1.84,0,3.53-0.647,4.861-1.723l5.556,5.555L26.083,24.917z M8.25,14.501
        c0-3.446,2.804-6.25,6.25-6.25s6.25,2.804,6.25,6.25s-2.804,6.25-6.25,6.25S8.25,17.947,8.25,14.501z"/>
    <polygon fill="${fillColor}" points="15.25,11 13.75,11 13.75,13.75 11,13.75 11,15.25 13.75,15.25 13.75,18 15.25,18 15.25,15.25
        18,15.25 18,13.75 15.25,13.75"/>
</g>
</svg>
`,
    'zoom-y.svg': `${stockToolsIconPrefix(32)}
<g>
    <path fill="${fillColor}" d="M27.083,24.917l-5.567-5.566c1.075-1.331,1.734-3.01,1.734-4.85c0-3.21-1.962-5.97-4.75-7.146v1.665
        c1.936,1.063,3.25,3.121,3.25,5.48s-1.314,4.417-3.25,5.48v1.665c0.675-0.284,1.298-0.666,1.859-1.12l5.558,5.557L27.083,24.917z"
        />
    <polygon fill="${fillColor}" points="16.25,18 16.25,15.25 19,15.25 19,13.75 16.25,13.75 16.25,11 14.75,11 14.75,13.75 12,13.75
        12,15.25 14.75,15.25 14.75,18"/>
    <path fill="${fillColor}" d="M9.25,14.501c0-2.359,1.314-4.417,3.25-5.48V7.355c-2.788,1.176-4.75,3.936-4.75,7.146
        s1.962,5.97,4.75,7.146v-1.665C10.564,18.918,9.25,16.86,9.25,14.501z"/>
    <polygon fill="${fillColor}" points="14.753,9 16.246,9 16.246,5.01 17.74,5.01 15.496,1.125 13.253,5.01 14.753,5.01"/>
    <polygon fill="${fillColor}" points="16.239,20 14.746,20 14.746,23.986 13.252,23.986 15.496,27.874 17.739,23.986 16.239,23.986"/>
</g>
</svg>
`
});

;// ./code/es-modules/Stock/StockTools/StockToolsBindings.js
/* *
 *
 *  Events generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Paweł Fus
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */



const { addFlagFromForm: StockToolsBindings_addFlagFromForm, attractToPoint: StockToolsBindings_attractToPoint, isNotNavigatorYAxis: StockToolsBindings_isNotNavigatorYAxis, isPriceIndicatorEnabled: StockToolsBindings_isPriceIndicatorEnabled, manageIndicators: StockToolsBindings_manageIndicators, updateHeight: StockToolsBindings_updateHeight, updateNthPoint: StockToolsBindings_updateNthPoint, updateRectSize: StockToolsBindings_updateRectSize } = StockTools_StockToolsUtilities;



/* *
 *
 *  Constants
 *
 * */
/**
 * @internal
 * @sample {highstock} stock/stocktools/custom-stock-tools-bindings
 *         Custom stock tools bindings
 *
 * @type         {Highcharts.Dictionary<Highcharts.NavigationBindingsOptionsObject>}
 * @since        7.0.0
 * @optionparent navigation.bindings
 */
const StockToolsBindings = {
    // Line type annotations:
    /**
     * A segment annotation bindings. Includes `start` and one event in `steps`
     * array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-segment", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    segment: {
        /** @ignore-option */
        className: 'highcharts-segment',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.segment.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'segment',
                type: 'crookedLine',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.segment.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A segment with an arrow annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-arrow-segment", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    arrowSegment: {
        /** @ignore-option */
        className: 'highcharts-arrow-segment',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.arrowSegment.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'arrowSegment',
                type: 'crookedLine',
                typeOptions: {
                    line: {
                        markerEnd: 'arrow'
                    },
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.arrowSegment.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A ray annotation bindings. Includes `start` and one event in `steps`
     * array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-ray", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    ray: {
        /** @ignore-option */
        className: 'highcharts-ray',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.ray.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'ray',
                type: 'infinityLine',
                typeOptions: {
                    type: 'ray',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.ray.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A ray with an arrow annotation bindings. Includes `start` and one event
     * in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-arrow-ray", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    arrowRay: {
        /** @ignore-option */
        className: 'highcharts-arrow-ray',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.arrowRay.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'arrowRay',
                type: 'infinityLine',
                typeOptions: {
                    type: 'ray',
                    line: {
                        markerEnd: 'arrow'
                    },
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.arrowRay.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A line annotation. Includes `start` and one event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-infinity-line", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    infinityLine: {
        /** @ignore-option */
        className: 'highcharts-infinity-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.infinityLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'infinityLine',
                type: 'infinityLine',
                typeOptions: {
                    type: 'line',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.infinityLine.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A line with arrow annotation. Includes `start` and one event in `steps`
     * array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-arrow-infinity-line", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    arrowInfinityLine: {
        /** @ignore-option */
        className: 'highcharts-arrow-infinity-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.arrowInfinityLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'arrowInfinityLine',
                type: 'infinityLine',
                typeOptions: {
                    type: 'line',
                    line: {
                        markerEnd: 'arrow'
                    },
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.arrowInfinityLine
                .annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A horizontal line annotation. Includes `start` event.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-horizontal-line", "start": function() {}, "annotationsOptions": {}}
     */
    horizontalLine: {
        /** @ignore-option */
        className: 'highcharts-horizontal-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.horizontalLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'horizontalLine',
                type: 'infinityLine',
                draggable: 'y',
                typeOptions: {
                    type: 'horizontalLine',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.horizontalLine.annotationsOptions);
            this.chart.addAnnotation(options);
        }
    },
    /**
     * A vertical line annotation. Includes `start` event.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-vertical-line", "start": function() {}, "annotationsOptions": {}}
     */
    verticalLine: {
        /** @ignore-option */
        className: 'highcharts-vertical-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'verticalLine',
                type: 'infinityLine',
                draggable: 'x',
                typeOptions: {
                    type: 'verticalLine',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalLine.annotationsOptions);
            this.chart.addAnnotation(options);
        }
    },
    /**
     * Crooked line (three points) annotation bindings. Includes `start` and two
     * events in `steps` (for second and third points in crooked line) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-crooked3", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    // Crooked Line type annotations:
    crooked3: {
        /** @ignore-option */
        className: 'highcharts-crooked3',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.crooked3.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'crooked3',
                type: 'crookedLine',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.crooked3.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2)
        ]
    },
    /**
     * Crooked line (five points) annotation bindings. Includes `start` and four
     * events in `steps` (for all consequent points in crooked line) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-crooked5", "start": function() {}, "steps": [function() {}, function() {}, function() {}, function() {}], "annotationsOptions": {}}
     */
    crooked5: {
        /** @ignore-option */
        className: 'highcharts-crooked5',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.crooked5.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'crooked5',
                type: 'crookedLine',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.crooked5.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2),
            StockToolsBindings_updateNthPoint(3),
            StockToolsBindings_updateNthPoint(4)
        ]
    },
    /**
     * Elliott wave (three points) annotation bindings. Includes `start` and two
     * events in `steps` (for second and third points) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-elliott3", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    elliott3: {
        /** @ignore-option */
        className: 'highcharts-elliott3',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.elliott3.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'elliott3',
                type: 'elliottWave',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                },
                labelOptions: {
                    style: {
                        color: 'var(--highcharts-neutral-color-60)'
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.elliott3.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2),
            StockToolsBindings_updateNthPoint(3)
        ]
    },
    /**
     * Elliott wave (five points) annotation bindings. Includes `start` and four
     * event in `steps` (for all consequent points in Elliott wave) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-elliott3", "start": function() {}, "steps": [function() {}, function() {}, function() {}, function() {}], "annotationsOptions": {}}
     */
    elliott5: {
        /** @ignore-option */
        className: 'highcharts-elliott5',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.elliott5.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'elliott5',
                type: 'elliottWave',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.elliott5.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2),
            StockToolsBindings_updateNthPoint(3),
            StockToolsBindings_updateNthPoint(4),
            StockToolsBindings_updateNthPoint(5)
        ]
    },
    /**
     * A measure (x-dimension) annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-measure-x", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    measureX: {
        /** @ignore-option */
        className: 'highcharts-measure-x',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.measureX.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'measure',
                type: 'measure',
                typeOptions: {
                    selectType: 'x',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    point: { x, y },
                    crosshairX: {
                        strokeWidth: 1
                    },
                    crosshairY: {
                        enabled: false,
                        strokeWidth: 0
                    },
                    background: {
                        width: 0,
                        height: 0
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.measureX.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateRectSize
        ]
    },
    /**
     * A measure (y-dimension) annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-measure-y", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    measureY: {
        /** @ignore-option */
        className: 'highcharts-measure-y',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.measureY.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'measure',
                type: 'measure',
                typeOptions: {
                    selectType: 'y',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    point: { x, y },
                    crosshairX: {
                        enabled: false,
                        strokeWidth: 0
                    },
                    crosshairY: {
                        strokeWidth: 1
                    },
                    background: {
                        width: 0,
                        height: 0,
                        strokeWidth: 0
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.measureY.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateRectSize
        ]
    },
    /**
     * A measure (xy-dimension) annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-measure-xy", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    measureXY: {
        /** @ignore-option */
        className: 'highcharts-measure-xy',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.measureXY.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'measure',
                type: 'measure',
                typeOptions: {
                    selectType: 'xy',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    point: { x, y },
                    background: {
                        width: 0,
                        height: 0,
                        strokeWidth: 0
                    },
                    crosshairX: {
                        strokeWidth: 1
                    },
                    crosshairY: {
                        strokeWidth: 1
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.measureXY.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateRectSize
        ]
    },
    // Advanced type annotations:
    /**
     * A fibonacci annotation bindings. Includes `start` and two events in
     * `steps` array (updates second point, then height).
     *
     *   @sample {highstock} stock/stocktools/custom-stock-tools-bindings
     *     Custom stock tools bindings
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-fibonacci", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": { "typeOptions": { "reversed": false }}}
     */
    fibonacci: {
        className: 'highcharts-fibonacci',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.fibonacci.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'fibonacci',
                type: 'fibonacci',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.fibonacci.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateHeight
        ]
    },
    /**
     * A parallel channel (tunnel) annotation bindings. Includes `start` and
     * two events in `steps` array (updates second point, then height).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-parallel-channel", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    parallelChannel: {
        /** @ignore-option */
        className: 'highcharts-parallel-channel',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.parallelChannel.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'parallelChannel',
                type: 'tunnel',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.parallelChannel
                .annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateHeight
        ]
    },
    /**
     * An Andrew's pitchfork annotation bindings. Includes `start` and two
     * events in `steps` array (sets second and third control points).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-pitchfork", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    pitchfork: {
        /** @ignore-option */
        className: 'highcharts-pitchfork',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.pitchfork.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'pitchfork',
                type: 'pitchfork',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value,
                            controlPoint: {
                                style: {
                                    fill: 'var(--highcharts-negative-color)'
                                }
                            }
                        },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.pitchfork.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2)
        ]
    },
    // Labels with arrow and auto increments
    /**
     * A vertical counter annotation bindings. Includes `start` event. On click,
     * finds the closest point and marks it with a numeric annotation -
     * incrementing counter on each add.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-vertical-counter", "start": function() {}, "annotationsOptions": {}}
     */
    verticalCounter: {
        /** @ignore-option */
        className: 'highcharts-vertical-counter',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalCounter.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            this.verticalCounter = this.verticalCounter || 0;
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'verticalCounter',
                type: 'verticalLine',
                typeOptions: {
                    point: {
                        x: closestPoint.x,
                        y: closestPoint.y,
                        xAxis: closestPoint.xAxis,
                        yAxis: closestPoint.yAxis
                    },
                    label: {
                        offset: closestPoint.below ? 40 : -40,
                        text: this.verticalCounter.toString()
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalCounter.annotationsOptions), annotation = this.chart.addAnnotation(options);
            this.verticalCounter++;
            (annotation.options.events?.click).call(annotation, {});
        }
    },
    /**
     * A time cycles annotation bindings. Includes `start` event and 1 `step`
     * event. first click marks the beginning of the circle, and the second one
     * sets its diameter.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-time-cycles", "start": function() {}, "steps": [function (){}] "annotationsOptions": {}}
     */
    timeCycles: {
        className: 'highcharts-time-cycles',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.timeCycles.annotationsOptions
         */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'timeCycles',
                type: 'timeCycles',
                typeOptions: {
                    xAxis: closestPoint.xAxis,
                    yAxis: closestPoint.yAxis,
                    points: [{
                            x: closestPoint.x
                        }, {
                            x: closestPoint.x
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.timeCycles.annotationsOptions), annotation = this.chart.addAnnotation(options);
            (annotation.options.events?.click).call(annotation, {});
            return annotation;
        },
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    verticalLabel: {
        /** @ignore-option */
        className: 'highcharts-vertical-label',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalLabel.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'verticalLabel',
                type: 'verticalLine',
                typeOptions: {
                    point: {
                        x: closestPoint.x,
                        y: closestPoint.y,
                        xAxis: closestPoint.xAxis,
                        yAxis: closestPoint.yAxis
                    },
                    label: {
                        offset: closestPoint.below ? 40 : -40
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalLabel.annotationsOptions), annotation = this.chart.addAnnotation(options);
            (annotation.options.events?.click).call(annotation, {});
        }
    },
    /**
     * A vertical arrow annotation bindings. Includes `start` event. On click,
     * finds the closest point and marks it with an arrow.
     * `var(--highcharts-positive-color)` is the color of the arrow when
     * pointing from above and `var(--highcharts-negative-color)`
     * when pointing from below the point.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-vertical-arrow", "start": function() {}, "annotationsOptions": {}}
     */
    verticalArrow: {
        /** @ignore-option */
        className: 'highcharts-vertical-arrow',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalArrow.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                langKey: 'verticalArrow',
                type: 'verticalLine',
                typeOptions: {
                    point: {
                        x: closestPoint.x,
                        y: closestPoint.y,
                        xAxis: closestPoint.xAxis,
                        yAxis: closestPoint.yAxis
                    },
                    label: {
                        offset: closestPoint.below ? 40 : -40,
                        format: ' '
                    },
                    connector: {
                        fill: 'none',
                        stroke: closestPoint.below ?
                            'var(--highcharts-negative-color)' :
                            'var(--highcharts-positive-color)'
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalArrow.annotationsOptions), annotation = this.chart.addAnnotation(options);
            (annotation.options.events?.click).call(annotation, {});
        }
    },
    /**
     * The Fibonacci Time Zones annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-fibonacci-time-zones", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    fibonacciTimeZones: {
        /** @ignore-option */
        className: 'highcharts-fibonacci-time-zones',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.fibonacciTimeZones.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = (0,external_highcharts_src_js_default_namespaceObject.merge)({
                type: 'fibonacciTimeZones',
                langKey: 'fibonacciTimeZones',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.fibonacciTimeZones
                .annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        // eslint-disable-next-line valid-jsdoc
        steps: [
            function (e, annotation) {
                const mockPointOpts = annotation.options.typeOptions?.points, x = (mockPointOpts?.[0]).x, [coordsX, coordsY] = this.getCoords(e);
                if (coordsX && coordsY) {
                    annotation.update({
                        typeOptions: {
                            xAxis: coordsX.axis.index,
                            yAxis: coordsY.axis.index,
                            points: [{
                                    x: x
                                }, {
                                    x: coordsX.value
                                }]
                        }
                    });
                }
            }
        ]
    },
    // Flag types:
    /**
     * A flag series bindings. Includes `start` event. On click, finds the
     * closest point and marks it with a flag with `'circlepin'` shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-circlepin", "start": function() {}}
     */
    flagCirclepin: {
        /** @ignore-option */
        className: 'highcharts-flag-circlepin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('circlepin')
    },
    /**
     * A flag series bindings. Includes `start` event. On click, finds the
     * closest point and marks it with a flag with `'diamondpin'` shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-diamondpin", "start": function() {}}
     */
    flagDiamondpin: {
        /** @ignore-option */
        className: 'highcharts-flag-diamondpin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('flag')
    },
    /**
     * A flag series bindings. Includes `start` event.
     * On click, finds the closest point and marks it with a flag with
     * `'squarepin'` shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-squarepin", "start": function() {}}
     */
    flagSquarepin: {
        /** @ignore-option */
        className: 'highcharts-flag-squarepin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('squarepin')
    },
    /**
     * A flag series bindings. Includes `start` event.
     * On click, finds the closest point and marks it with a flag without pin
     * shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-simplepin", "start": function() {}}
     */
    flagSimplepin: {
        /** @ignore-option */
        className: 'highcharts-flag-simplepin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('nopin')
    },
    // Other tools:
    /**
     * Enables zooming in xAxis on a chart. Includes `start` event which
     * changes [chart.zoomType](#chart.zoomType).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-zoom-x", "init": function() {}}
     */
    zoomX: {
        /** @ignore-option */
        className: 'highcharts-zoom-x',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.update({
                chart: {
                    zooming: {
                        type: 'x'
                    }
                }
            });
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Enables zooming in yAxis on a chart. Includes `start` event which
     * changes [chart.zoomType](#chart.zoomType).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-zoom-y", "init": function() {}}
     */
    zoomY: {
        /** @ignore-option */
        className: 'highcharts-zoom-y',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.update({
                chart: {
                    zooming: {
                        type: 'y'
                    }
                }
            });
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Enables zooming in xAxis and yAxis on a chart. Includes `start` event
     * which changes [chart.zoomType](#chart.zoomType).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-zoom-xy", "init": function() {}}
     */
    zoomXY: {
        /** @ignore-option */
        className: 'highcharts-zoom-xy',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.update({
                chart: {
                    zooming: {
                        type: 'xy'
                    }
                }
            });
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'line'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-line", "init": function() {}}
     */
    seriesTypeLine: {
        /** @ignore-option */
        className: 'highcharts-series-type-line',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'line',
                useOhlcData: true
            });
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'ohlc'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-ohlc", "init": function() {}}
     */
    seriesTypeOhlc: {
        /** @ignore-option */
        className: 'highcharts-series-type-ohlc',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'ohlc'
            });
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'candlestick'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-candlestick", "init": function() {}}
     */
    seriesTypeCandlestick: {
        /** @ignore-option */
        className: 'highcharts-series-type-candlestick',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'candlestick'
            });
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'heikinashi'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-heikinashi", "init": function() {}}
     */
    seriesTypeHeikinAshi: {
        /** @ignore-option */
        className: 'highcharts-series-type-heikinashi',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'heikinashi'
            });
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Change main series to `'hlc'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-hlc", "init": function () {}}
     */
    seriesTypeHLC: {
        className: 'highcharts-series-type-hlc',
        init: function (button) {
            this.chart.series[0].update({
                type: 'hlc',
                useOhlcData: true
            });
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button });
        }
    },
    /**
     * Changes main series to `'hollowcandlestick'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-hollowcandlestick", "init": function() {}}
     */
    seriesTypeHollowCandlestick: {
        /** @ignore-option */
        className: 'highcharts-series-type-hollowcandlestick',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'hollowcandlestick'
            });
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Displays chart in fullscreen.
     *
     * **Note**: Fullscreen is not supported on iPhone due to iOS limitations.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "noDataState": "normal", "highcharts-full-screen", "init": function() {}}
     */
    fullScreen: {
        /** @ignore-option */
        className: 'highcharts-full-screen',
        noDataState: 'normal',
        /** @ignore-option */
        init: function (button) {
            if (this.chart.fullscreen) {
                this.chart.fullscreen.toggle();
            }
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Hides/shows two price indicators:
     * - last price in the dataset
     * - last price in the selected range
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-current-price-indicator", "init": function() {}}
     */
    currentPriceIndicator: {
        /** @ignore-option */
        className: 'highcharts-current-price-indicator',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            const chart = this.chart, series = chart.series, gui = chart.stockTools, priceIndicatorEnabled = StockToolsBindings_isPriceIndicatorEnabled(chart.series);
            if (gui && gui.guiEnabled) {
                series.forEach(function (series) {
                    series.update({
                        lastPrice: { enabled: !priceIndicatorEnabled },
                        lastVisiblePrice: {
                            enabled: !priceIndicatorEnabled,
                            label: { enabled: true }
                        }
                    }, false);
                });
                chart.redraw();
            }
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Indicators bindings. Includes `init` event to show a popup.
     *
     * Note: In order to show base series from the chart in the popup's
     * dropdown each series requires
     * [series.id](https://api.highcharts.com/highstock/series.line.id) to be
     * defined.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-indicators", "init": function() {}}
     */
    indicators: {
        /** @ignore-option */
        className: 'highcharts-indicators',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function () {
            const navigation = this;
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(navigation, 'showPopup', {
                formType: 'indicators',
                options: {},
                // Callback on submit:
                onSubmit: function (data) {
                    StockToolsBindings_manageIndicators.call(navigation, data);
                }
            });
        }
    },
    /**
     * Hides/shows all annotations on a chart.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-toggle-annotations", "init": function() {}}
     */
    toggleAnnotations: {
        /** @ignore-option */
        className: 'highcharts-toggle-annotations',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            const chart = this.chart, gui = chart.stockTools;
            this.toggledAnnotations = !this.toggledAnnotations;
            (chart.annotations || []).forEach(function (annotation) {
                annotation.setVisibility(!this.toggledAnnotations);
            }, this);
            if (gui && gui.guiEnabled) {
                if (this.toggledAnnotations) {
                    button.firstChild.style['background-image'] =
                        BaseFormUtils('annotations-hidden.svg', gui.iconsURL, StockToolsIcons);
                }
                else {
                    button.firstChild.style['background-image'] =
                        BaseFormUtils('annotations-visible.svg', gui.iconsURL, StockToolsIcons);
                }
            }
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Save a chart in localStorage under `highcharts-chart` key.
     * Stored items:
     * - annotations
     * - indicators (with yAxes)
     * - flags
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-save-chart", "noDataState": "normal", "init": function() {}}
     */
    saveChart: {
        /** @ignore-option */
        className: 'highcharts-save-chart',
        noDataState: 'normal',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            const navigation = this, chart = navigation.chart, annotations = [], indicators = [], flags = [], yAxes = [];
            chart.annotations.forEach(function (annotation, index) {
                annotations[index] = annotation.userOptions;
            });
            chart.series.forEach(function (series) {
                if (series.is('sma')) {
                    indicators.push(series.userOptions);
                }
                else if (series.type === 'flags') {
                    flags.push(series.userOptions);
                }
            });
            chart.yAxis.forEach(function (yAxis) {
                if (StockToolsBindings_isNotNavigatorYAxis(yAxis)) {
                    yAxes.push(yAxis.options);
                }
            });
            external_highcharts_src_js_default_default().win.localStorage.setItem('highcharts-chart', JSON.stringify({
                annotations: annotations,
                indicators: indicators,
                flags: flags,
                yAxes: yAxes
            }));
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'deselectButton', { button: button });
        }
    }
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const StockTools_StockToolsBindings = (StockToolsBindings);

;// ./code/es-modules/Stock/StockTools/StockToolsDefaults.js
/* *
 *
 *  GUI generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Sebastian Bochan
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

/* *
 *
 *  Constants
 *
 * */
/**
 * @optionparent lang
 */
const StockToolsDefaults_lang = {
    /**
     * Configure the stockTools GUI titles(hints) in the chart. Requires
     * the `stock-tools.js` module to be loaded.
     *
     * @product highstock
     * @since   7.0.0
     */
    stockTools: {
        gui: {
            // Main buttons:
            simpleShapes: 'Simple shapes',
            lines: 'Lines',
            crookedLines: 'Crooked lines',
            measure: 'Measure',
            advanced: 'Advanced',
            toggleAnnotations: 'Toggle annotations',
            verticalLabels: 'Vertical labels',
            flags: 'Flags',
            zoomChange: 'Zoom change',
            typeChange: 'Type change',
            saveChart: 'Save chart',
            indicators: 'Indicators',
            currentPriceIndicator: 'Current Price Indicators',
            // Other features:
            zoomX: 'Zoom X',
            zoomY: 'Zoom Y',
            zoomXY: 'Zooom XY',
            fullScreen: 'Fullscreen',
            typeOHLC: 'OHLC',
            typeLine: 'Line',
            typeCandlestick: 'Candlestick',
            typeHLC: 'HLC',
            typeHollowCandlestick: 'Hollow Candlestick',
            typeHeikinAshi: 'Heikin Ashi',
            // Basic shapes:
            circle: 'Circle',
            ellipse: 'Ellipse',
            label: 'Label',
            rectangle: 'Rectangle',
            // Flags:
            flagCirclepin: 'Flag circle',
            flagDiamondpin: 'Flag diamond',
            flagSquarepin: 'Flag square',
            flagSimplepin: 'Flag simple',
            // Measures:
            measureXY: 'Measure XY',
            measureX: 'Measure X',
            measureY: 'Measure Y',
            // Segment, ray and line:
            segment: 'Segment',
            arrowSegment: 'Arrow segment',
            ray: 'Ray',
            arrowRay: 'Arrow ray',
            line: 'Line',
            arrowInfinityLine: 'Arrow line',
            horizontalLine: 'Horizontal line',
            verticalLine: 'Vertical line',
            infinityLine: 'Infinity line',
            // Crooked lines:
            crooked3: 'Crooked 3 line',
            crooked5: 'Crooked 5 line',
            elliott3: 'Elliott 3 line',
            elliott5: 'Elliott 5 line',
            // Counters:
            verticalCounter: 'Vertical counter',
            verticalLabel: 'Vertical label',
            verticalArrow: 'Vertical arrow',
            // Advanced:
            fibonacci: 'Fibonacci',
            fibonacciTimeZones: 'Fibonacci Time Zones',
            pitchfork: 'Pitchfork',
            parallelChannel: 'Parallel channel',
            timeCycles: 'Time Cycles'
        }
    },
    navigation: {
        popup: {
            // Annotations:
            circle: 'Circle',
            ellipse: 'Ellipse',
            rectangle: 'Rectangle',
            label: 'Label',
            segment: 'Segment',
            arrowSegment: 'Arrow segment',
            ray: 'Ray',
            arrowRay: 'Arrow ray',
            line: 'Line',
            arrowInfinityLine: 'Arrow line',
            horizontalLine: 'Horizontal line',
            verticalLine: 'Vertical line',
            crooked3: 'Crooked 3 line',
            crooked5: 'Crooked 5 line',
            elliott3: 'Elliott 3 line',
            elliott5: 'Elliott 5 line',
            verticalCounter: 'Vertical counter',
            verticalLabel: 'Vertical label',
            verticalArrow: 'Vertical arrow',
            fibonacci: 'Fibonacci',
            fibonacciTimeZones: 'Fibonacci Time Zones',
            pitchfork: 'Pitchfork',
            parallelChannel: 'Parallel channel',
            infinityLine: 'Infinity line',
            measure: 'Measure',
            measureXY: 'Measure XY',
            measureX: 'Measure X',
            measureY: 'Measure Y',
            timeCycles: 'Time Cycles',
            // Flags:
            flags: 'Flags',
            // GUI elements:
            addButton: 'Add',
            saveButton: 'Save',
            editButton: 'Edit',
            removeButton: 'Remove',
            series: 'Series',
            volume: 'Volume',
            connector: 'Connector',
            // Field names:
            innerBackground: 'Inner background',
            outerBackground: 'Outer background',
            crosshairX: 'Crosshair X',
            crosshairY: 'Crosshair Y',
            tunnel: 'Tunnel',
            background: 'Background',
            // Indicators' searchbox (#16019):
            noFilterMatch: 'No match',
            // Indicators' params (#15170):
            searchIndicators: 'Search Indicators',
            clearFilter: '\u2715 clear filter',
            index: 'Index',
            period: 'Period',
            periods: 'Periods',
            standardDeviation: 'Standard deviation',
            periodTenkan: 'Tenkan period',
            periodSenkouSpanB: 'Senkou Span B period',
            periodATR: 'ATR period',
            multiplierATR: 'ATR multiplier',
            shortPeriod: 'Short period',
            longPeriod: 'Long period',
            signalPeriod: 'Signal period',
            decimals: 'Decimals',
            algorithm: 'Algorithm',
            topBand: 'Top band',
            bottomBand: 'Bottom band',
            initialAccelerationFactor: 'Initial acceleration factor',
            maxAccelerationFactor: 'Max acceleration factor',
            increment: 'Increment',
            multiplier: 'Multiplier',
            ranges: 'Ranges',
            highIndex: 'High index',
            lowIndex: 'Low index',
            deviation: 'Deviation',
            xAxisUnit: 'x-axis unit',
            factor: 'Factor',
            fastAvgPeriod: 'Fast average period',
            slowAvgPeriod: 'Slow average period',
            average: 'Average',
            /**
             * Configure the aliases for indicator names.
             *
             * @product highstock
             * @since 9.3.0
             */
            indicatorAliases: {
                // Overlays
                /**
                 * Acceleration Bands alias.
                 *
                 * @default ['Acceleration Bands']
                 * @type    {Array<string>}
                 */
                abands: ['Acceleration Bands'],
                /**
                 * Bollinger Bands alias.
                 *
                 * @default ['Bollinger Bands']
                 * @type    {Array<string>}
                 */
                bb: ['Bollinger Bands'],
                /**
                 * Double Exponential Moving Average alias.
                 *
                 * @default ['Double Exponential Moving Average']
                 * @type    {Array<string>}
                 */
                dema: ['Double Exponential Moving Average'],
                /**
                 *  Exponential Moving Average alias.
                 *
                 * @default ['Exponential Moving Average']
                 * @type    {Array<string>}
                 */
                ema: ['Exponential Moving Average'],
                /**
                 *  Ichimoku Kinko Hyo alias.
                 *
                 * @default ['Ichimoku Kinko Hyo']
                 * @type    {Array<string>}
                 */
                ikh: ['Ichimoku Kinko Hyo'],
                /**
                 *  Keltner Channels alias.
                 *
                 * @default ['Keltner Channels']
                 * @type    {Array<string>}
                 */
                keltnerchannels: ['Keltner Channels'],
                /**
                 *  Linear Regression alias.
                 *
                 * @default ['Linear Regression']
                 * @type    {Array<string>}
                 */
                linearRegression: ['Linear Regression'],
                /**
                 *  Pivot Points alias.
                 *
                 * @default ['Pivot Points']
                 * @type    {Array<string>}
                 */
                pivotpoints: ['Pivot Points'],
                /**
                 *  Price Channel alias.
                 *
                 * @default ['Price Channel']
                 * @type    {Array<string>}
                 */
                pc: ['Price Channel'],
                /**
                 *  Price Envelopes alias.
                 *
                 * @default ['Price Envelopes']
                 * @type    {Array<string>}
                 */
                priceenvelopes: ['Price Envelopes'],
                /**
                 *  Parabolic SAR alias.
                 *
                 * @default ['Parabolic SAR']
                 * @type    {Array<string>}
                 */
                psar: ['Parabolic SAR'],
                /**
                 *  Simple Moving Average alias.
                 *
                 * @default ['Simple Moving Average']
                 * @type    {Array<string>}
                 */
                sma: ['Simple Moving Average'],
                /**
                 *  Super Trend alias.
                 *
                 * @default ['Super Trend']
                 * @type    {Array<string>}
                 */
                supertrend: ['Super Trend'],
                /**
                 *  Triple Exponential Moving Average alias.
                 *
                 * @default ['Triple Exponential Moving Average']
                 * @type    {Array<string>}
                 */
                tema: ['Triple Exponential Moving Average'],
                /**
                 *  Volume by Price alias.
                 *
                 * @default ['Volume by Price']
                 * @type    {Array<string>}
                 */
                vbp: ['Volume by Price'],
                /**
                 *  Volume Weighted Moving Average alias.
                 *
                 * @default ['Volume Weighted Moving Average']
                 * @type    {Array<string>}
                 */
                vwap: ['Volume Weighted Moving Average'],
                /**
                 *  Weighted Moving Average alias.
                 *
                 * @default ['Weighted Moving Average']
                 * @type    {Array<string>}
                 */
                wma: ['Weighted Moving Average'],
                /**
                 *  Zig Zagalias.
                 *
                 * @default ['Zig Zag']
                 * @type    {Array<string>}
                 */
                zigzag: ['Zig Zag'],
                // Oscillators
                /**
                 *  Absolute price indicator alias.
                 *
                 * @default ['Absolute price indicator']
                 * @type    {Array<string>}
                 */
                apo: ['Absolute price indicator'],
                /**
                 * Accumulation/Distribution alias.
                 *
                 * @default ['Accumulation/Distribution’]
                 * @type    {Array<string>}
                 */
                ad: ['Accumulation/Distribution'],
                /**
                 *  Aroon alias.
                 *
                 * @default ['Aroon']
                 * @type    {Array<string>}
                 */
                aroon: ['Aroon'],
                /**
                 *  Aroon oscillator alias.
                 *
                 * @default ['Aroon oscillator']
                 * @type    {Array<string>}
                 */
                aroonoscillator: ['Aroon oscillator'],
                /**
                 *  Average True Range alias.
                 *
                 * @default ['Average True Range’]
                 * @type    {Array<string>}
                 */
                atr: ['Average True Range'],
                /**
                 *  Awesome oscillator alias.
                 *
                 * @default ['Awesome oscillator’]
                 * @type    {Array<string>}
                 */
                ao: ['Awesome oscillator'],
                /**
                 *  Commodity Channel Index alias.
                 *
                 * @default ['Commodity Channel Index’]
                 * @type    {Array<string>}
                 */
                cci: ['Commodity Channel Index'],
                /**
                 *  Chaikin alias.
                 *
                 * @default ['Chaikin’]
                 * @type    {Array<string>}
                 */
                chaikin: ['Chaikin'],
                /**
                 *  Chaikin Money Flow alias.
                 *
                 * @default ['Chaikin Money Flow’]
                 * @type    {Array<string>}
                 */
                cmf: ['Chaikin Money Flow'],
                /**
                 *  Chande Momentum Oscillator alias.
                 *
                 * @default ['Chande Momentum Oscillator’]
                 * @type    {Array<string>}
                 */
                cmo: ['Chande Momentum Oscillator'],
                /**
                 *  Disparity Index alias.
                 *
                 * @default ['Disparity Index’]
                 * @type    {Array<string>}
                 */
                disparityindex: ['Disparity Index'],
                /**
                 *  Directional Movement Index alias.
                 *
                 * @default ['Directional Movement Index’]
                 * @type    {Array<string>}
                 */
                dmi: ['Directional Movement Index'],
                /**
                 *  Detrended price oscillator alias.
                 *
                 * @default ['Detrended price oscillator’]
                 * @type    {Array<string>}
                 */
                dpo: ['Detrended price oscillator'],
                /**
                 *  Klinger Oscillator alias.
                 *
                 * @default [‘Klinger Oscillator’]
                 * @type    {Array<string>}
                 */
                klinger: ['Klinger Oscillator'],
                /**
                 *  Linear Regression Angle alias.
                 *
                 * @default [‘Linear Regression Angle’]
                 * @type    {Array<string>}
                 */
                linearRegressionAngle: ['Linear Regression Angle'],
                /**
                 *  Linear Regression Intercept alias.
                 *
                 * @default [‘Linear Regression Intercept’]
                 * @type    {Array<string>}
                 */
                linearRegressionIntercept: ['Linear Regression Intercept'],
                /**
                 *  Linear Regression Slope alias.
                 *
                 * @default [‘Linear Regression Slope’]
                 * @type    {Array<string>}
                 */
                linearRegressionSlope: ['Linear Regression Slope'],
                /**
                 *  Moving Average Convergence Divergence alias.
                 *
                 * @default ['Moving Average Convergence Divergence’]
                 * @type    {Array<string>}
                 */
                macd: ['Moving Average Convergence Divergence'],
                /**
                 *  Money Flow Index alias.
                 *
                 * @default ['Money Flow Index’]
                 * @type    {Array<string>}
                 */
                mfi: ['Money Flow Index'],
                /**
                 *  Momentum alias.
                 *
                 * @default [‘Momentum’]
                 * @type    {Array<string>}
                 */
                momentum: ['Momentum'],
                /**
                 *  Normalized Average True Range alias.
                 *
                 * @default ['Normalized Average True Range’]
                 * @type    {Array<string>}
                 */
                natr: ['Normalized Average True Range'],
                /**
                 *  On-Balance Volume alias.
                 *
                 * @default ['On-Balance Volume’]
                 * @type    {Array<string>}
                 */
                obv: ['On-Balance Volume'],
                /**
                 * Percentage Price oscillator alias.
                 *
                 * @default ['Percentage Price oscillator’]
                 * @type    {Array<string>}
                 */
                ppo: ['Percentage Price oscillator'],
                /**
                 *  Rate of Change alias.
                 *
                 * @default ['Rate of Change’]
                 * @type    {Array<string>}
                 */
                roc: ['Rate of Change'],
                /**
                 *  Relative Strength Index alias.
                 *
                 * @default ['Relative Strength Index’]
                 * @type    {Array<string>}
                 */
                rsi: ['Relative Strength Index'],
                /**
                 *  Slow Stochastic alias.
                 *
                 * @default [‘Slow Stochastic’]
                 * @type    {Array<string>}
                 */
                slowstochastic: ['Slow Stochastic'],
                /**
                 *  Stochastic alias.
                 *
                 * @default [‘Stochastic’]
                 * @type    {Array<string>}
                 */
                stochastic: ['Stochastic'],
                /**
                 *  TRIX alias.
                 *
                 * @default [‘TRIX’]
                 * @type    {Array<string>}
                 */
                trix: ['TRIX'],
                /**
                 *  Williams %R alias.
                 *
                 * @default [‘Williams %R’]
                 * @type    {Array<string>}
                 */
                williamsr: ['Williams %R']
            }
        }
    }
};
/**
 * Configure the stockTools gui strings in the chart. Requires the
 * [stockTools module]() to be loaded. For a description of the module
 * and information on its features, see [Highcharts StockTools]().
 *
 * @product highstock
 *
 * @sample stock/demo/stock-tools-gui Stock Tools GUI
 *
 * @sample stock/demo/stock-tools-custom-gui Stock Tools customized GUI
 *
 * @since        7.0.0
 *
 * @requires stock/modules/stock-tools
 * @optionparent stockTools
 */
const stockTools = {
    /**
     * Definitions of buttons in Stock Tools GUI.
     */
    gui: {
        /**
         * Path where Highcharts will look for icons. Change this to use
         * icons from a different server.
         *
         * Since 7.1.3 use [iconsURL](#navigation.iconsURL) for popup and
         * stock tools.
         *
         * @deprecated 7.1.3
         * @apioption stockTools.gui.iconsURL
         *
         */
        /**
         * Enable or disable the stockTools gui.
         */
        enabled: true,
        /**
         * A CSS class name to apply to the stocktools' div,
         * allowing unique CSS styling for each chart.
         */
        className: 'highcharts-bindings-wrapper',
        /**
         * A CSS class name to apply to the container of buttons,
         * allowing unique CSS styling for each chart.
         */
        toolbarClassName: 'stocktools-toolbar',
        /**
         * A collection of strings pointing to config options for the
         * toolbar items. Each name refers to a unique key from the
         * definitions object.
         *
         * @type    {Array<string>}
         * @default [
         *   'indicators',
         *   'separator',
         *   'simpleShapes',
         *   'lines',
         *   'crookedLines',
         *   'measure',
         *   'advanced',
         *   'toggleAnnotations',
         *   'separator',
         *   'verticalLabels',
         *   'flags',
         *   'separator',
         *   'zoomChange',
         *   'fullScreen',
         *   'typeChange',
         *   'separator',
         *   'currentPriceIndicator',
         *   'saveChart'
         * ]
         */
        buttons: [
            'indicators',
            'separator',
            'simpleShapes',
            'lines',
            'crookedLines',
            'measure',
            'advanced',
            'toggleAnnotations',
            'separator',
            'verticalLabels',
            'flags',
            'separator',
            'zoomChange',
            'fullScreen',
            'typeChange',
            'separator',
            'currentPriceIndicator',
            'saveChart'
        ],
        /**
         * An options object of the buttons definitions. Each name refers to
         * unique key from buttons array.
         */
        definitions: {
            separator: {
                elementType: 'span',
                /**
                 * A predefined background symbol for the button.
                 */
                symbol: 'separator.svg'
            },
            simpleShapes: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'label',
                 *   'circle',
                 *   'ellipse',
                 *   'rectangle'
                 * ]
                 *
                 */
                items: [
                    'label',
                    'circle',
                    'ellipse',
                    'rectangle'
                ],
                circle: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'circle.svg'
                },
                ellipse: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'ellipse.svg'
                },
                rectangle: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'rectangle.svg'
                },
                label: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'label.svg'
                }
            },
            flags: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'flagCirclepin',
                 *   'flagDiamondpin',
                 *   'flagSquarepin',
                 *   'flagSimplepin'
                 * ]
                 *
                 */
                items: [
                    'flagCirclepin',
                    'flagDiamondpin',
                    'flagSquarepin',
                    'flagSimplepin'
                ],
                flagSimplepin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'flag-basic.svg'
                },
                flagDiamondpin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'flag-diamond.svg'
                },
                flagSquarepin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'flag-trapeze.svg'
                },
                flagCirclepin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'flag-elipse.svg'
                }
            },
            lines: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'segment',
                 *   'arrowSegment',
                 *   'ray',
                 *   'arrowRay',
                 *   'line',
                 *   'arrowInfinityLine',
                 *   'horizontalLine',
                 *   'verticalLine'
                 * ]
                 */
                items: [
                    'segment',
                    'arrowSegment',
                    'ray',
                    'arrowRay',
                    'line',
                    'arrowInfinityLine',
                    'horizontalLine',
                    'verticalLine'
                ],
                segment: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'segment.svg'
                },
                arrowSegment: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'arrow-segment.svg'
                },
                ray: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'ray.svg'
                },
                arrowRay: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'arrow-ray.svg'
                },
                line: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'line.svg'
                },
                arrowInfinityLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'arrow-line.svg'
                },
                verticalLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-line.svg'
                },
                horizontalLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'horizontal-line.svg'
                }
            },
            crookedLines: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'elliott3',
                 *   'elliott5',
                 *   'crooked3',
                 *   'crooked5'
                 * ]
                 *
                 */
                items: [
                    'elliott3',
                    'elliott5',
                    'crooked3',
                    'crooked5'
                ],
                crooked3: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'crooked-3.svg'
                },
                crooked5: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'crooked-5.svg'
                },
                elliott3: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'elliott-3.svg'
                },
                elliott5: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'elliott-5.svg'
                }
            },
            verticalLabels: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'verticalCounter',
                 *   'verticalLabel',
                 *   'verticalArrow'
                 * ]
                 */
                items: [
                    'verticalCounter',
                    'verticalLabel',
                    'verticalArrow'
                ],
                verticalCounter: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-counter.svg'
                },
                verticalLabel: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-label.svg'
                },
                verticalArrow: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-arrow.svg'
                }
            },
            advanced: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'fibonacci',
                 *   'fibonacciTimeZones',
                 *   'pitchfork',
                 *   'parallelChannel',
                 *   'timeCycles'
                 * ]
                 */
                items: [
                    'fibonacci',
                    'fibonacciTimeZones',
                    'pitchfork',
                    'parallelChannel',
                    'timeCycles'
                ],
                pitchfork: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'pitchfork.svg'
                },
                fibonacci: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'fibonacci.svg'
                },
                fibonacciTimeZones: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'fibonacci-timezone.svg'
                },
                parallelChannel: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'parallel-channel.svg'
                },
                timeCycles: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type {string}
                     */
                    symbol: 'time-cycles.svg'
                }
            },
            measure: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'measureXY',
                 *   'measureX',
                 *   'measureY'
                 * ]
                 */
                items: [
                    'measureXY',
                    'measureX',
                    'measureY'
                ],
                measureX: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'measure-x.svg'
                },
                measureY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'measure-y.svg'
                },
                measureXY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'measure-xy.svg'
                }
            },
            toggleAnnotations: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'annotations-visible.svg'
            },
            currentPriceIndicator: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'current-price-show.svg'
            },
            indicators: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'indicators.svg'
            },
            zoomChange: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'zoomX',
                 *   'zoomY',
                 *   'zoomXY'
                 * ]
                 */
                items: [
                    'zoomX',
                    'zoomY',
                    'zoomXY'
                ],
                zoomX: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'zoom-x.svg'
                },
                zoomY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'zoom-y.svg'
                },
                zoomXY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'zoom-xy.svg'
                }
            },
            typeChange: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array<string>}
                 * @default [
                 *   'typeOHLC',
                 *   'typeLine',
                 *   'typeCandlestick'
                 *   'typeHollowCandlestick'
                 * ]
                 */
                items: [
                    'typeOHLC',
                    'typeLine',
                    'typeCandlestick',
                    'typeHollowCandlestick',
                    'typeHLC',
                    'typeHeikinAshi'
                ],
                typeOHLC: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-ohlc.svg'
                },
                typeLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-line.svg'
                },
                typeCandlestick: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-candlestick.svg'
                },
                typeHLC: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-hlc.svg'
                },
                typeHeikinAshi: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-heikin-ashi.svg'
                },
                typeHollowCandlestick: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-hollow-candlestick.svg'
                }
            },
            fullScreen: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'fullscreen.svg'
            },
            saveChart: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'save-chart.svg'
            }
        },
        /**
         * Whether the stock tools toolbar is visible.
         *
         * @since 11.4.4
         */
        visible: true
    }
};
/* *
 *
 *  Default Exports
 *
 * */
/** @internal */
const StockToolsDefaults = {
    lang: StockToolsDefaults_lang,
    stockTools
};
/** @internal */
/* harmony default export */ const StockTools_StockToolsDefaults = (StockToolsDefaults);

;// ./code/es-modules/Stock/StockTools/StockTools.js
/* *
 *
 *  Events generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Paweł Fus
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { setOptions: StockTools_setOptions } = (external_highcharts_src_js_default_default());



const { isNotNavigatorYAxis: StockTools_isNotNavigatorYAxis, isPriceIndicatorEnabled: StockTools_isPriceIndicatorEnabled } = StockTools_StockToolsUtilities;

/* *
 *
 *  Functions
 *
 * */
/** @internal */
function compose(NavigationBindingsClass) {
    const navigationProto = NavigationBindingsClass.prototype;
    if (!navigationProto.utils?.manageIndicators) {
        // Extends NavigationBindings to support indicators and resizers:
        navigationProto.getYAxisPositions = navigationGetYAxisPositions;
        navigationProto.getYAxisResizers = navigationGetYAxisResizers;
        navigationProto.recalculateYAxisPositions =
            navigationRecalculateYAxisPositions;
        navigationProto.resizeYAxes = navigationResizeYAxes;
        navigationProto.utils = navigationProto.utils || {};
        navigationProto.utils.indicatorsWithAxes = StockTools_StockToolsUtilities.indicatorsWithAxes;
        navigationProto.utils.indicatorsWithVolume = StockTools_StockToolsUtilities.indicatorsWithVolume;
        navigationProto.utils.getAssignedAxis = StockTools_StockToolsUtilities.getAssignedAxis;
        navigationProto.utils.isPriceIndicatorEnabled = StockTools_isPriceIndicatorEnabled;
        navigationProto.utils.manageIndicators = StockTools_StockToolsUtilities.manageIndicators;
        StockTools_setOptions(StockTools_StockToolsDefaults);
        StockTools_setOptions({
            navigation: {
                bindings: StockTools_StockToolsBindings
            }
        });
    }
}
/**
 * Get current positions for all yAxes. If new axis does not have position,
 * returned is default height and last available top place.
 *
 * @internal
 * @function Highcharts.NavigationBindings#getYAxisPositions
 *
 * @param {Array<Highcharts.Axis>} yAxes
 *        Array of yAxes available in the chart.
 *
 * @param {number} plotHeight
 *        Available height in the chart.
 *
 * @param {number} defaultHeight
 *        Default height in percents.
 *
 * @param {Highcharts.AxisPositions} removedYAxisProps
 *        Height and top value of the removed yAxis in percents.
 *
 * @return {Highcharts.YAxisPositions}
 *         An object containing an array of calculated positions
 *         in percentages. Format: `{top: Number, height: Number}`
 *         and maximum value of top + height of axes.
 */
function navigationGetYAxisPositions(yAxes, plotHeight, defaultHeight, removedYAxisProps) {
    let allAxesHeight = 0, previousAxisHeight, removedHeight, removedTop;
    /** @internal */
    function isPercentage(prop) {
        return (0,external_highcharts_src_js_default_namespaceObject.defined)(prop) && !(0,external_highcharts_src_js_default_namespaceObject.isNumber)(prop) && prop.match('%');
    }
    if (removedYAxisProps) {
        removedTop = (0,external_highcharts_src_js_default_namespaceObject.correctFloat)((parseFloat(removedYAxisProps.top) / 100));
        removedHeight = (0,external_highcharts_src_js_default_namespaceObject.correctFloat)((parseFloat(removedYAxisProps.height) / 100));
    }
    const positions = yAxes.map((yAxis, index) => {
        let height = (0,external_highcharts_src_js_default_namespaceObject.correctFloat)(isPercentage(yAxis.options.height) ?
            parseFloat(String(yAxis.options.height)) / 100 :
            yAxis.height / plotHeight), top = (0,external_highcharts_src_js_default_namespaceObject.correctFloat)(isPercentage(yAxis.options.top) ?
            parseFloat(String(yAxis.options.top)) / 100 :
            (yAxis.top - yAxis.chart.plotTop) / plotHeight);
        if (!removedHeight) {
            // New axis' height is NaN so we can check if
            // the axis is newly created this way
            if (!(0,external_highcharts_src_js_default_namespaceObject.isNumber)(height)) {
                // Check if the previous axis is the
                // indicator axis (every indicator inherits from sma)
                height = yAxes[index - 1].series
                    .every((s) => s.is('sma')) ?
                    previousAxisHeight : defaultHeight / 100;
            }
            if (!(0,external_highcharts_src_js_default_namespaceObject.isNumber)(top)) {
                top = allAxesHeight;
            }
            previousAxisHeight = height;
            allAxesHeight = (0,external_highcharts_src_js_default_namespaceObject.correctFloat)(Math.max(allAxesHeight, (top || 0) + (height || 0)));
        }
        else {
            // Move all axes which were below the removed axis up.
            if (top > removedTop) {
                top -= removedHeight;
            }
            allAxesHeight = Math.max(allAxesHeight, (top || 0) + (height || 0));
        }
        return {
            height: height * 100,
            top: top * 100
        };
    });
    return { positions, allAxesHeight };
}
/**
 * Get current resize options for each yAxis. Note that each resize is
 * linked to the next axis, except the last one which shouldn't affect
 * axes in the navigator. Because indicator can be removed with it's yAxis
 * in the middle of yAxis array, we need to bind closest yAxes back.
 *
 * @internal
 * @function Highcharts.NavigationBindings#getYAxisResizers
 *
 * @param {Array<Highcharts.Axis>} yAxes
 *        Array of yAxes available in the chart
 *
 * @return {Array<object>}
 *         An array of resizer options.
 *         Format: `{enabled: Boolean, controlledAxis: { next: [String]}}`
 */
function navigationGetYAxisResizers(yAxes) {
    const resizers = [];
    yAxes.forEach(function (_yAxis, index) {
        const nextYAxis = yAxes[index + 1];
        // We have next axis, bind them:
        if (nextYAxis) {
            resizers[index] = {
                enabled: true,
                controlledAxis: {
                    next: [
                        (0,external_highcharts_src_js_default_namespaceObject.pick)(nextYAxis.options.id, nextYAxis.index)
                    ]
                }
            };
        }
        else {
            // Remove binding:
            resizers[index] = {
                enabled: false
            };
        }
    });
    return resizers;
}
/**
 * Utility to modify calculated positions according to the remaining/needed
 * space. Later, these positions are used in `yAxis.update({ top, height })`
 *
 * @internal
 * @function Highcharts.NavigationBindings#recalculateYAxisPositions
 * @param {Array<Highcharts.Dictionary<number>>} positions
 * Default positions of all yAxes.
 * @param {number} changedSpace
 * How much space should be added or removed.
 * @param {boolean} modifyHeight
 * Update only `top` or both `top` and `height`.
 * @param {number} adder
 * `-1` or `1`, to determine whether we should add or remove space.
 *
 * @return {Array<object>}
 *         Modified positions,
 */
function navigationRecalculateYAxisPositions(positions, changedSpace, modifyHeight, adder) {
    positions.forEach(function (position, index) {
        const prevPosition = positions[index - 1];
        position.top = !prevPosition ? 0 :
            (0,external_highcharts_src_js_default_namespaceObject.correctFloat)(prevPosition.height + prevPosition.top);
        if (modifyHeight) {
            position.height = (0,external_highcharts_src_js_default_namespaceObject.correctFloat)(position.height + adder * changedSpace);
        }
    });
    return positions;
}
/**
 * Resize all yAxes (except navigator) to fit the plotting height. Method
 * checks if new axis is added, if the new axis will fit under previous
 * axes it is placed there. If not, current plot area is scaled
 * to make room for new axis.
 *
 * If axis is removed, the current plot area stretches to fit into 100%
 * of the plot area.
 *
 * @internal
 */
function navigationResizeYAxes(removedYAxisProps) {
    // The height of the new axis before rescaling. In %, but as a number.
    const defaultHeight = 20;
    const chart = this.chart, 
    // Only non-navigator axes
    yAxes = chart.yAxis.filter(StockTools_isNotNavigatorYAxis), plotHeight = chart.plotHeight, 
    // Gather current heights (in %)
    { positions, allAxesHeight } = this.getYAxisPositions(yAxes, plotHeight, defaultHeight, removedYAxisProps), resizers = this.getYAxisResizers(yAxes);
    // Check if the axis is being either added or removed and
    // if the new indicator axis will fit under existing axes.
    // if so, there is no need to scale them.
    if (!removedYAxisProps &&
        allAxesHeight <= (0,external_highcharts_src_js_default_namespaceObject.correctFloat)(0.8 + defaultHeight / 100)) {
        positions[positions.length - 1] = {
            height: defaultHeight,
            top: (0,external_highcharts_src_js_default_namespaceObject.correctFloat)(allAxesHeight * 100 - defaultHeight)
        };
    }
    else {
        positions.forEach(function (position) {
            position.height = (position.height / (allAxesHeight * 100)) * 100;
            position.top = (position.top / (allAxesHeight * 100)) * 100;
        });
    }
    positions.forEach(function (position, index) {
        yAxes[index].update({
            height: position.height + '%',
            top: position.top + '%',
            resize: resizers[index],
            offset: 0
        }, false);
    });
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const StockTools = {
    compose
};
/** @internal */
/* harmony default export */ const StockTools_StockTools = (StockTools);

;// external ["../highcharts.src.js","default","AST"]
const external_highcharts_src_js_default_AST_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].AST;
var external_highcharts_src_js_default_AST_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_AST_namespaceObject);
;// ./code/es-modules/Stock/StockTools/StockToolbar.js
/* *
 *
 *  GUI generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Sebastian Bochan
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */






const { shallowArraysEqual: StockToolbar_shallowArraysEqual } = StockTools_StockToolsUtilities;
/* *
 *
 *  Classes
 *
 * */
/**
 * Toolbar Class
 *
 * @internal
 * @class
 *
 * @param {object} options
 *        Options of toolbar
 *
 * @param {Highcharts.Dictionary<string>|undefined} langOptions
 *        Language options
 *
 * @param {Highcharts.Chart} chart
 *        Reference to chart
 */
class Toolbar {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(options, langOptions, chart) {
        this.width = 0;
        this.isDirty = false;
        this.chart = chart;
        this.options = options;
        this.iconsURL = this.getIconsURL();
        this.lang = langOptions;
        this.guiEnabled = options.enabled;
        this.visible = (0,external_highcharts_src_js_default_namespaceObject.pick)(options.visible, true);
        this.guiClassName = options.className;
        this.toolbarClassName = options.toolbarClassName;
        // General events collection which should be removed upon
        // destroy/update:
        this.eventsToUnbind = [];
        if (this.guiEnabled) {
            this.createContainer();
            this.createButtons();
            this.showHideNavigation();
        }
        (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'afterInit');
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Create and set up stockTools buttons with their events and submenus.
     * @internal
     */
    createButtons() {
        const lang = this.lang, guiOptions = this.options, toolbar = this.toolbar, buttons = guiOptions.buttons, defs = guiOptions.definitions, allButtons = toolbar.childNodes;
        this.buttonList = buttons;
        // Create buttons
        buttons.forEach((btnName) => {
            const button = this.addButton(toolbar, defs, btnName, lang);
            this.eventsToUnbind.push((0,external_highcharts_src_js_default_namespaceObject.addEvent)(button.buttonWrapper, 'click', () => this.eraseActiveButtons(allButtons, button.buttonWrapper)));
            if ((0,external_highcharts_src_js_default_namespaceObject.isArray)(defs[btnName].items)) {
                // Create submenu buttons
                this.addSubmenu(button, defs[btnName]);
            }
        });
    }
    /**
     * Create submenu (list of buttons) for the option. In example main button
     * is Line, in submenu will be buttons with types of lines.
     *
     * @internal
     *
     * @param {Highcharts.Dictionary<Highcharts.HTMLDOMElement>} parentBtn
     *        Button which has submenu
     *
     * @param {Highcharts.StockToolsGuiDefinitionsButtonsOptions} button
     *        List of all buttons
     */
    addSubmenu(parentBtn, button) {
        const submenuArrow = parentBtn.submenuArrow, buttonWrapper = parentBtn.buttonWrapper, buttonWidth = (0,external_highcharts_src_js_default_namespaceObject.getStyle)(buttonWrapper, 'width'), wrapper = this.wrapper, menuWrapper = this.listWrapper, allButtons = this.toolbar.childNodes, title = buttonWrapper.title, 
        // Create submenu container
        submenuWrapper = this.submenu = (0,external_highcharts_src_js_default_namespaceObject.createElement)('ul', {
            className: 'highcharts-submenu-wrapper',
            id: 'highcharts-submenu-wrapper-' +
                title.toLowerCase().replace(/\s+/g, '-')
        }, void 0, buttonWrapper);
        // Create submenu buttons and select the first one
        this.addSubmenuItems(buttonWrapper, button);
        submenuArrow.setAttribute('aria-controls', submenuWrapper.id);
        // Show / hide submenu
        this.eventsToUnbind.push((0,external_highcharts_src_js_default_namespaceObject.addEvent)(submenuArrow, 'click', (e) => {
            e.stopPropagation();
            // Erase active class on all other buttons
            this.eraseActiveButtons(allButtons, buttonWrapper);
            // Hide menu
            if (buttonWrapper.className
                .indexOf('highcharts-current') >= 0) {
                submenuArrow.setAttribute('aria-expanded', false);
                menuWrapper.style.width =
                    menuWrapper.startWidth + 'px';
                buttonWrapper.classList.remove('highcharts-current');
                submenuWrapper.style.display = 'none';
            }
            else {
                submenuArrow.setAttribute('aria-expanded', true);
                // Show menu
                // to calculate height of element
                submenuWrapper.style.display = 'block';
                let topMargin = submenuWrapper.offsetHeight -
                    buttonWrapper.offsetHeight - 3;
                // Calculate position of submenu in the box
                // if submenu is inside, reset top margin
                if (
                // Cut on the bottom
                !(submenuWrapper.offsetHeight +
                    buttonWrapper.offsetTop >
                    wrapper.offsetHeight &&
                    // Cut on the top
                    buttonWrapper.offsetTop > topMargin)) {
                    topMargin = 0;
                }
                // Apply calculated styles
                (0,external_highcharts_src_js_default_namespaceObject.css)(submenuWrapper, {
                    top: -topMargin + 'px',
                    left: buttonWidth + 3 + 'px'
                });
                buttonWrapper.className += ' highcharts-current';
                menuWrapper.startWidth = wrapper.offsetWidth;
                menuWrapper.style.width = menuWrapper.startWidth +
                    (0,external_highcharts_src_js_default_namespaceObject.getStyle)(menuWrapper, 'padding-left') +
                    submenuWrapper.offsetWidth + 3 + 'px';
            }
        }));
    }
    /**
     * Create buttons in submenu
     *
     * @internal
     *
     * @param {Highcharts.HTMLDOMElement} buttonWrapper
     *        Button where submenu is placed
     *
     * @param {Highcharts.StockToolsGuiDefinitionsButtonsOptions} button
     *        List of all buttons options
     */
    addSubmenuItems(buttonWrapper, button) {
        const _self = this, submenuWrapper = this.submenu, lang = this.lang, menuWrapper = this.listWrapper, items = button.items;
        let submenuBtn;
        // Add items to submenu
        items.forEach((btnName) => {
            // Add buttons to submenu
            submenuBtn = this.addButton(submenuWrapper, button, btnName, lang);
            this.eventsToUnbind.push((0,external_highcharts_src_js_default_namespaceObject.addEvent)(submenuBtn.mainButton, 'click', function () {
                _self.switchSymbol(this, buttonWrapper, true);
                menuWrapper.style.width =
                    menuWrapper.startWidth + 'px';
                submenuWrapper.style.display = 'none';
            }));
        });
        // Select first submenu item
        const firstSubmenuItem = submenuWrapper.querySelectorAll('li > .highcharts-menu-item-btn')[0];
        // Replace current symbol, in main button, with submenu's button style
        this.switchSymbol(firstSubmenuItem, false);
    }
    /**
     * Erase active class on all other buttons.
     * @internal
     */
    eraseActiveButtons(buttons, currentButton, submenuItems) {
        [].forEach.call(buttons, (btn) => {
            if (btn !== currentButton) {
                btn.classList.remove('highcharts-current');
                btn.classList.remove('highcharts-active');
                submenuItems =
                    btn.querySelectorAll('.highcharts-submenu-wrapper');
                // Hide submenu
                if (submenuItems.length > 0) {
                    submenuItems[0].style.display = 'none';
                }
            }
        });
    }
    /**
     * Create single button. Consist of HTML elements `li`, `button`, and (if
     * exists) submenu container.
     *
     * @internal
     *
     * @param {Highcharts.HTMLDOMElement} target
     *        HTML reference, where button should be added
     *
     * @param {object} options
     *        All options, by btnName refer to particular button
     *
     * @param {string} btnName
     *        Button name of functionality mapped for specific class
     *
     * @param {Highcharts.Dictionary<string>} lang
     *        All titles, by btnName refer to particular button
     *
     * @return {object}
     *         References to all created HTML elements
     */
    addButton(target, options, btnName, lang = {}) {
        const btnOptions = options[btnName], btnLabelName = lang[btnName] || btnName, arrowLabel = this.chart.options.lang.accessibility
            ?.stockTools.arrowLabel, items = btnOptions.items, classMapping = Toolbar.prototype.classMapping, userClassName = btnOptions.className || '';
        // Main button wrapper
        const buttonWrapper = (0,external_highcharts_src_js_default_namespaceObject.createElement)('li', {
            className: (0,external_highcharts_src_js_default_namespaceObject.pick)(classMapping[btnName], '') + ' ' + userClassName
        }, void 0, target);
        // Single button
        const elementType = (btnOptions.elementType || 'button');
        const mainButton = (0,external_highcharts_src_js_default_namespaceObject.createElement)(elementType, {
            className: 'highcharts-menu-item-btn',
            title: btnLabelName,
            ariaLabel: btnLabelName
        }, void 0, buttonWrapper);
        // Submenu
        if (items && items.length) {
            // Arrow is a hook to show / hide submenu
            const submenuArrow = (0,external_highcharts_src_js_default_namespaceObject.createElement)('button', {
                className: 'highcharts-submenu-item-arrow ' +
                    'highcharts-arrow-right',
                ariaLabel: arrowLabel,
                ariaExpanded: false
            }, void 0, buttonWrapper);
            submenuArrow.style.backgroundImage =
                BaseFormUtils('arrow-bottom.svg', this.iconsURL, StockToolsIcons);
            return {
                buttonWrapper,
                mainButton,
                submenuArrow
            };
        }
        mainButton.style.backgroundImage = BaseFormUtils(btnOptions.symbol, this.iconsURL, StockToolsIcons);
        return {
            buttonWrapper,
            mainButton
        };
    }
    /**
     * Create navigation's HTML elements: container and arrows.
     * @internal
     */
    addNavigation() {
        const wrapper = this.wrapper;
        // Arrow wrapper
        this.arrowWrapper = (0,external_highcharts_src_js_default_namespaceObject.createElement)('div', {
            className: 'highcharts-arrow-wrapper'
        });
        this.arrowUp = (0,external_highcharts_src_js_default_namespaceObject.createElement)('div', {
            className: 'highcharts-arrow-up'
        }, void 0, this.arrowWrapper);
        this.arrowUp.style.backgroundImage =
            BaseFormUtils('arrow-right.svg', this.iconsURL, StockToolsIcons);
        this.arrowDown = (0,external_highcharts_src_js_default_namespaceObject.createElement)('div', {
            className: 'highcharts-arrow-down'
        }, void 0, this.arrowWrapper);
        this.arrowDown.style.backgroundImage =
            BaseFormUtils('arrow-right.svg', this.iconsURL, StockToolsIcons);
        wrapper.insertBefore(this.arrowWrapper, wrapper.childNodes[0]);
        // Attach scroll events
        this.scrollButtons();
    }
    /**
     * Add events to navigation (two arrows) which allows user to scroll
     * top/down GUI buttons, if container's height is not enough.
     * @internal
     */
    scrollButtons() {
        const wrapper = this.wrapper, toolbar = this.toolbar, step = 0.1 * wrapper.offsetHeight; // 0.1 = 10%
        let targetY = 0;
        this.eventsToUnbind.push((0,external_highcharts_src_js_default_namespaceObject.addEvent)(this.arrowUp, 'click', () => {
            if (targetY > 0) {
                targetY -= step;
                toolbar.style.marginTop = -targetY + 'px';
            }
        }));
        this.eventsToUnbind.push((0,external_highcharts_src_js_default_namespaceObject.addEvent)(this.arrowDown, 'click', () => {
            if (wrapper.offsetHeight + targetY <=
                toolbar.offsetHeight + step) {
                targetY += step;
                toolbar.style.marginTop = -targetY + 'px';
            }
        }));
    }
    /*
     * Create the stockTools container and sets up event bindings.
     *
     */
    createContainer() {
        const chart = this.chart, groupLabel = chart.options.lang.accessibility
            ?.stockTools.groupLabel, guiOptions = this.options, container = chart.container, navigation = chart.options.navigation, bindingsClassName = navigation?.bindingsClassName, self = this;
        let listWrapper, toolbar;
        // Create main container
        const wrapper = this.wrapper = (0,external_highcharts_src_js_default_namespaceObject.createElement)('div', {
            className: 'highcharts-stocktools-wrapper ' +
                guiOptions.className + ' ' + bindingsClassName,
            ariaHidden: false
        });
        container.appendChild(wrapper);
        this.showHideBtn = (0,external_highcharts_src_js_default_namespaceObject.createElement)('div', {
            className: 'highcharts-toggle-toolbar highcharts-arrow-left'
        }, void 0, wrapper);
        // Toggle menu
        this.eventsToUnbind.push((0,external_highcharts_src_js_default_namespaceObject.addEvent)(this.showHideBtn, 'click', () => {
            this.update({
                gui: {
                    visible: !self.visible
                }
            });
        }));
        // Mimic event behavior of being outside chart.container
        [
            'mousedown',
            'mousemove',
            'click',
            'touchstart'
        ].forEach((eventType) => {
            (0,external_highcharts_src_js_default_namespaceObject.addEvent)(wrapper, eventType, (e) => e.stopPropagation());
        });
        (0,external_highcharts_src_js_default_namespaceObject.addEvent)(wrapper, 'mouseover', (e) => chart.pointer?.onContainerMouseLeave(e));
        // Toolbar
        this.toolbar = toolbar = (0,external_highcharts_src_js_default_namespaceObject.createElement)('ul', {
            className: 'highcharts-stocktools-toolbar ' +
                guiOptions.toolbarClassName,
            ariaLabel: groupLabel
        });
        // Add container for list of buttons
        this.listWrapper = listWrapper = (0,external_highcharts_src_js_default_namespaceObject.createElement)('div', {
            className: 'highcharts-menu-wrapper'
        });
        wrapper.insertBefore(listWrapper, wrapper.childNodes[0]);
        listWrapper.insertBefore(toolbar, listWrapper.childNodes[0]);
        this.showHideToolbar();
        // Add navigation which allows user to scroll down / top GUI buttons
        this.addNavigation();
    }
    /**
     * Function called in redraw verifies if the navigation should be visible.
     * @internal
     */
    showHideNavigation() {
        // Arrows
        // 50px space for arrows
        if (this.visible &&
            this.toolbar.offsetHeight > (this.wrapper.offsetHeight - 50)) {
            this.arrowWrapper.style.display = 'block';
        }
        else {
            // Reset margin if whole toolbar is visible
            this.toolbar.style.marginTop = '0px';
            // Hide arrows
            this.arrowWrapper.style.display = 'none';
        }
    }
    /**
     * Create button which shows or hides GUI toolbar.
     * @internal
     */
    showHideToolbar() {
        const wrapper = this.wrapper, toolbar = this.listWrapper, submenu = this.submenu, 
        // Show hide toolbar
        showHideBtn = this.showHideBtn;
        let visible = this.visible;
        showHideBtn.style.backgroundImage =
            BaseFormUtils('arrow-right.svg', this.iconsURL, StockToolsIcons);
        if (!visible) {
            // Hide
            if (submenu) {
                submenu.style.display = 'none';
            }
            showHideBtn.style.left = '0px';
            visible = this.visible = false;
            toolbar.classList.add('highcharts-hide');
            showHideBtn.classList.add('highcharts-arrow-right');
            wrapper.style.height = showHideBtn.offsetHeight + 'px';
        }
        else {
            wrapper.style.height = '100%';
            toolbar.classList.remove('highcharts-hide');
            showHideBtn.classList.remove('highcharts-arrow-right');
            showHideBtn.style.top = (0,external_highcharts_src_js_default_namespaceObject.getStyle)(toolbar, 'padding-top') + 'px';
            showHideBtn.style.left = (wrapper.offsetWidth +
                (0,external_highcharts_src_js_default_namespaceObject.getStyle)(toolbar, 'padding-left')) + 'px';
        }
    }
    /*
     * In main GUI button, replace icon and class with submenu button's
     * class / symbol.
     *
     * @param {HTMLDOMElement} - submenu button
     * @param {Boolean} - true or false
     *
     */
    switchSymbol(button, redraw) {
        const buttonWrapper = button.parentNode, buttonWrapperClass = buttonWrapper.className, 
        // Main button in first level og GUI
        mainNavButton = buttonWrapper.parentNode.parentNode;
        // If the button is disabled, don't do anything
        if (buttonWrapperClass.indexOf('highcharts-disabled-btn') > -1) {
            return;
        }
        // Set class
        mainNavButton.className = '';
        if (buttonWrapperClass) {
            mainNavButton.classList.add(buttonWrapperClass.trim());
        }
        // Set icon
        mainNavButton
            .querySelectorAll('.highcharts-menu-item-btn')[0]
            .style.backgroundImage =
            button.style.backgroundImage;
        // Set active class
        if (redraw) {
            this.toggleButtonActiveClass(mainNavButton);
        }
    }
    /**
     * Set select state (active class) on button.
     * @internal
     */
    toggleButtonActiveClass(button) {
        const classList = button.classList;
        if (classList.contains('highcharts-active')) {
            classList.remove('highcharts-active');
        }
        else {
            classList.add('highcharts-active');
        }
    }
    /**
     * Remove active class from all buttons except defined.
     * @internal
     */
    unselectAllButtons(button) {
        const activeBtns = button.parentNode
            .querySelectorAll('.highcharts-active');
        [].forEach.call(activeBtns, (activeBtn) => {
            if (activeBtn !== button) {
                activeBtn.classList.remove('highcharts-active');
            }
        });
    }
    /**
     * Update GUI with given options.
     * @internal
     */
    update(options, redraw) {
        this.isDirty = !!options.gui.definitions;
        (0,external_highcharts_src_js_default_namespaceObject.merge)(true, this.chart.options.stockTools, options);
        (0,external_highcharts_src_js_default_namespaceObject.merge)(true, this.options, options.gui);
        this.visible = (0,external_highcharts_src_js_default_namespaceObject.pick)(this.options.visible && this.options.enabled, true);
        // If Stock Tools are updated, then bindings should be updated too:
        if (this.chart.navigationBindings) {
            this.chart.navigationBindings.update();
        }
        this.chart.isDirtyBox = true;
        if ((0,external_highcharts_src_js_default_namespaceObject.pick)(redraw, true)) {
            this.chart.redraw();
        }
    }
    /**
     * Destroy all HTML GUI elements.
     * @internal
     */
    destroy() {
        const stockToolsDiv = this.wrapper, parent = stockToolsDiv && stockToolsDiv.parentNode;
        this.eventsToUnbind.forEach((unbinder) => unbinder());
        // Remove the empty element
        if (parent) {
            parent.removeChild(stockToolsDiv);
        }
    }
    /**
     * Redraws the toolbar based on the current state of the options.
     * @internal
     */
    redraw() {
        if (this.options.enabled !== this.guiEnabled) {
            this.handleGuiEnabledChange();
        }
        else {
            if (!this.guiEnabled) {
                return;
            }
            this.updateClassNames();
            this.updateButtons();
            this.updateVisibility();
            this.showHideNavigation();
            this.showHideToolbar();
        }
    }
    /**
     * Hadles the change of the `enabled` option.
     * @internal
     */
    handleGuiEnabledChange() {
        if (this.options.enabled === false) {
            this.destroy();
            this.visible = false;
        }
        if (this.options.enabled === true) {
            this.createContainer();
            this.createButtons();
        }
        this.guiEnabled = this.options.enabled;
    }
    /**
     * Updates the class names of the GUI and toolbar elements.
     * @internal
     */
    updateClassNames() {
        if (this.options.className !== this.guiClassName) {
            if (this.guiClassName) {
                this.wrapper.classList.remove(this.guiClassName);
            }
            if (this.options.className) {
                this.wrapper.classList.add(this.options.className);
            }
            this.guiClassName = this.options.className;
        }
        if (this.options.toolbarClassName !== this.toolbarClassName) {
            if (this.toolbarClassName) {
                this.toolbar.classList.remove(this.toolbarClassName);
            }
            if (this.options.toolbarClassName) {
                this.toolbar.classList.add(this.options.toolbarClassName);
            }
            this.toolbarClassName = this.options.toolbarClassName;
        }
    }
    /**
     * Updates the buttons in the toolbar if the button options have changed.
     * @internal
     */
    updateButtons() {
        if (!StockToolbar_shallowArraysEqual(this.options.buttons, this.buttonList) ||
            this.isDirty) {
            this.toolbar.innerHTML = (external_highcharts_src_js_default_AST_default()).emptyHTML;
            this.createButtons();
        }
    }
    /**
     * Updates visibility based on current options.
     * @internal
     */
    updateVisibility() {
        if ((0,external_highcharts_src_js_default_namespaceObject.defined)(this.options.visible)) {
            this.visible = this.options.visible;
        }
    }
    /**
     * Get the icons URL
     *
     * @internal
     * @return {string} Icons URL
     */
    getIconsURL() {
        return this.chart.options.navigation?.iconsURL ||
            this.options.iconsURL ||
            'renderer';
    }
}
Toolbar.prototype.classMapping = {
    circle: 'highcharts-circle-annotation',
    ellipse: 'highcharts-ellipse-annotation',
    rectangle: 'highcharts-rectangle-annotation',
    label: 'highcharts-label-annotation',
    segment: 'highcharts-segment',
    arrowSegment: 'highcharts-arrow-segment',
    ray: 'highcharts-ray',
    arrowRay: 'highcharts-arrow-ray',
    line: 'highcharts-infinity-line',
    arrowInfinityLine: 'highcharts-arrow-infinity-line',
    verticalLine: 'highcharts-vertical-line',
    horizontalLine: 'highcharts-horizontal-line',
    crooked3: 'highcharts-crooked3',
    crooked5: 'highcharts-crooked5',
    elliott3: 'highcharts-elliott3',
    elliott5: 'highcharts-elliott5',
    pitchfork: 'highcharts-pitchfork',
    fibonacci: 'highcharts-fibonacci',
    fibonacciTimeZones: 'highcharts-fibonacci-time-zones',
    parallelChannel: 'highcharts-parallel-channel',
    measureX: 'highcharts-measure-x',
    measureY: 'highcharts-measure-y',
    measureXY: 'highcharts-measure-xy',
    timeCycles: 'highcharts-time-cycles',
    verticalCounter: 'highcharts-vertical-counter',
    verticalLabel: 'highcharts-vertical-label',
    verticalArrow: 'highcharts-vertical-arrow',
    currentPriceIndicator: 'highcharts-current-price-indicator',
    indicators: 'highcharts-indicators',
    flagCirclepin: 'highcharts-flag-circlepin',
    flagDiamondpin: 'highcharts-flag-diamondpin',
    flagSquarepin: 'highcharts-flag-squarepin',
    flagSimplepin: 'highcharts-flag-simplepin',
    zoomX: 'highcharts-zoom-x',
    zoomY: 'highcharts-zoom-y',
    zoomXY: 'highcharts-zoom-xy',
    typeLine: 'highcharts-series-type-line',
    typeOHLC: 'highcharts-series-type-ohlc',
    typeHLC: 'highcharts-series-type-hlc',
    typeCandlestick: 'highcharts-series-type-candlestick',
    typeHollowCandlestick: 'highcharts-series-type-hollowcandlestick',
    typeHeikinAshi: 'highcharts-series-type-heikinashi',
    fullScreen: 'highcharts-full-screen',
    toggleAnnotations: 'highcharts-toggle-annotations',
    saveChart: 'highcharts-save-chart',
    separator: 'highcharts-separator'
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const StockToolbar = (Toolbar);

;// ./code/es-modules/Stock/StockTools/StockToolsGui.js
/* *
 *
 *  GUI generator for Stock tools
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Sebastian Bochan
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { setOptions: StockToolsGui_setOptions } = (external_highcharts_src_js_default_default());





/* *
 *
 *  Functions
 *
 * */
/**
 * Verify if Toolbar should be added.
 * @internal
 */
function chartSetStockTools(options) {
    const chartOptions = this.options, lang = chartOptions.lang, guiOptions = (0,external_highcharts_src_js_default_namespaceObject.merge)(chartOptions.stockTools && chartOptions.stockTools.gui, options && options.gui), langOptions = lang && lang.stockTools && lang.stockTools.gui;
    this.stockTools = new StockToolbar(guiOptions, langOptions, this);
    if (this.stockTools.guiEnabled) {
        this.isDirtyBox = true;
    }
}
/** @internal */
function StockToolsGui_compose(ChartClass, NavigationBindingsClass) {
    const chartProto = ChartClass.prototype;
    if (!chartProto.setStockTools) {
        (0,external_highcharts_src_js_default_namespaceObject.addEvent)(ChartClass, 'afterGetContainer', onChartAfterGetContainer);
        (0,external_highcharts_src_js_default_namespaceObject.addEvent)(ChartClass, 'beforeRedraw', onChartBeforeRedraw);
        (0,external_highcharts_src_js_default_namespaceObject.addEvent)(ChartClass, 'beforeRender', onChartBeforeRedraw);
        (0,external_highcharts_src_js_default_namespaceObject.addEvent)(ChartClass, 'destroy', StockToolsGui_onChartDestroy);
        (0,external_highcharts_src_js_default_namespaceObject.addEvent)(ChartClass, 'getMargins', onChartGetMargins, { order: 0 });
        (0,external_highcharts_src_js_default_namespaceObject.addEvent)(ChartClass, 'render', StockToolsGui_onChartRender);
        chartProto.setStockTools = chartSetStockTools;
        (0,external_highcharts_src_js_default_namespaceObject.addEvent)(NavigationBindingsClass, 'deselectButton', StockToolsGui_onNavigationBindingsDeselectButton);
        (0,external_highcharts_src_js_default_namespaceObject.addEvent)(NavigationBindingsClass, 'selectButton', onNavigationBindingsSelectButton);
        StockToolsGui_setOptions(StockTools_StockToolsDefaults);
    }
}
/**
 * Run HTML generator
 * @internal
 */
function onChartAfterGetContainer() {
    this.setStockTools();
}
/**
 * Handle beforeRedraw and beforeRender
 * @internal
 */
function onChartBeforeRedraw() {
    if (this.stockTools) {
        this.stockTools.redraw();
        setOffset(this);
    }
}
/**
 * Function to calculate and set the offset width for stock tools.
 * @internal
 */
function setOffset(chart) {
    if (chart.stockTools?.guiEnabled) {
        const optionsChart = chart.options.chart;
        const listWrapper = chart.stockTools.listWrapper;
        const offsetWidth = listWrapper && ((listWrapper.startWidth +
            (0,external_highcharts_src_js_default_namespaceObject.getStyle)(listWrapper, 'padding-left') +
            (0,external_highcharts_src_js_default_namespaceObject.getStyle)(listWrapper, 'padding-right')) || listWrapper.offsetWidth);
        chart.stockTools.width = offsetWidth;
        let dirty = false;
        if (offsetWidth < chart.plotWidth) {
            const nextX = (0,external_highcharts_src_js_default_namespaceObject.pick)(optionsChart.spacingLeft, optionsChart.spacing && optionsChart.spacing[3], 0) + offsetWidth;
            const diff = nextX - chart.spacingBox.x;
            chart.spacingBox.x = nextX;
            chart.spacingBox.width -= diff;
            dirty = true;
        }
        else if (offsetWidth === 0) {
            dirty = true;
        }
        if (offsetWidth !== chart.stockTools.prevOffsetWidth) {
            chart.stockTools.prevOffsetWidth = offsetWidth;
            if (dirty) {
                chart.isDirtyLegend = true;
            }
        }
    }
}
/** @internal */
function StockToolsGui_onChartDestroy() {
    if (this.stockTools) {
        this.stockTools.destroy();
    }
}
/** @internal */
function onChartGetMargins() {
    const offsetWidth = this.stockTools?.visible && this.stockTools.guiEnabled ?
        this.stockTools.width : 0;
    if (offsetWidth && offsetWidth < this.plotWidth) {
        this.plotLeft += offsetWidth;
        this.spacing[3] += offsetWidth;
    }
}
/**
 * Check if the correct price indicator button is displayed, #15029.
 * @internal
 */
function StockToolsGui_onChartRender() {
    const stockTools = this.stockTools, button = stockTools &&
        stockTools.toolbar &&
        stockTools.toolbar.querySelector('.highcharts-current-price-indicator');
    // Change the initial button background.
    if (stockTools &&
        this.navigationBindings &&
        this.options.series &&
        button) {
        const { iconsURL } = stockTools;
        if (this.navigationBindings.utils
            ?.isPriceIndicatorEnabled?.(this.series)) {
            button.firstChild.style['background-image'] =
                BaseFormUtils('current-price-hide.svg', iconsURL, StockToolsIcons);
        }
        else {
            button.firstChild.style['background-image'] =
                BaseFormUtils('current-price-show.svg', iconsURL, StockToolsIcons);
        }
    }
}
/** @internal */
function StockToolsGui_onNavigationBindingsDeselectButton(event) {
    const className = 'highcharts-submenu-wrapper', gui = this.chart.stockTools;
    if (gui && gui.guiEnabled) {
        let button = event.button;
        // If deselecting a button from a submenu, select state for it's parent
        if (button.parentNode.className.indexOf(className) >= 0) {
            button = button.parentNode.parentNode;
        }
        button.classList.remove('highcharts-active');
    }
}
/**
 * Communication with bindings
 * @internal
 */
function onNavigationBindingsSelectButton(event) {
    const className = 'highcharts-submenu-wrapper', gui = this.chart.stockTools;
    if (gui && gui.guiEnabled) {
        let button = event.button;
        // Unselect other active buttons
        gui.unselectAllButtons(event.button);
        // If clicked on a submenu, select state for it's parent
        if (button.parentNode.className.indexOf(className) >= 0) {
            button = button.parentNode.parentNode;
        }
        // Set active class on the current button
        gui.toggleButtonActiveClass(button);
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const StockToolsGui = {
    compose: StockToolsGui_compose
};
/** @internal */
/* harmony default export */ const StockTools_StockToolsGui = (StockToolsGui);

;// ./code/es-modules/masters/modules/stock-tools.src.js







const G = (external_highcharts_src_js_default_default());
G.NavigationBindings = G.NavigationBindings || Annotations_NavigationBindings;
G.Toolbar = StockToolbar;
StockTools_StockTools.compose(G.NavigationBindings);
StockTools_StockToolsGui.compose(G.Chart, G.NavigationBindings);
/* harmony default export */ const stock_tools_src = ((external_highcharts_src_js_default_default()));

export { stock_tools_src as default };
