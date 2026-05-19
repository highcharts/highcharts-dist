/* *
 *
 *  Popup generator for Stock tools
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
import BaseForm from '../../../Shared/BaseForm.js';
import Color from '../../../Core/Color/Color.js';
import H from '../../../Core/Globals.js';
var doc = H.doc;
import D from '../../../Core/Defaults.js';
var getOptions = D.getOptions;
import PopupAnnotations from './PopupAnnotations.js';
import PopupIndicators from './PopupIndicators.js';
import PopupTabs from './PopupTabs.js';
import { addEvent, clamp, createElement, extend, fireEvent, pick } from '../../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * Get values from all inputs and selections then create JSON.
 *
 * @internal
 *
 * @param {Highcharts.HTMLDOMElement} parentDiv
 * The container where inputs and selections are created.
 *
 * @param {string} type
 * Type of the popup bookmark (add|edit|remove).
 */
function getFields(parentDiv, type) {
    var inputList = Array.prototype.slice.call(parentDiv.querySelectorAll('input')), selectList = Array.prototype.slice.call(parentDiv.querySelectorAll('select')), optionSeries = '#highcharts-select-series > option:checked', optionVolume = '#highcharts-select-volume > option:checked', linkedTo = parentDiv.querySelectorAll(optionSeries)[0], volumeTo = parentDiv.querySelectorAll(optionVolume)[0];
    var fieldsOutput = {
        actionType: type,
        linkedTo: linkedTo && linkedTo.getAttribute('value') || '',
        fields: {}
    };
    inputList.forEach(function (input) {
        var param = input.getAttribute('highcharts-data-name'), seriesId = input.getAttribute('highcharts-data-series-id');
        // Params
        if (seriesId) {
            fieldsOutput.seriesId = input.value;
        }
        else if (param) {
            var wrapper = input.closest('.highcharts-popup-color-wrapper'), opacityInput = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector('.highcharts-popup-opacity-percentage'), opacity = opacityInput ?
                Number(opacityInput.value) / 100 : 1;
            if (opacityInput) {
                var rgba = Color.parse(input.value).rgba;
                fieldsOutput.fields[param] = !Number.isNaN(rgba[0]) ?
                    "rgba(".concat(rgba[0], ",").concat(rgba[1], ",").concat(rgba[2], ",").concat(opacity, ")") :
                    input.value;
            }
            else {
                fieldsOutput.fields[param] = input.value;
            }
        }
        else {
            // Type like sma / ema
            fieldsOutput.type = input.value;
        }
    });
    selectList.forEach(function (select) {
        var id = select.id;
        // Get inputs only for the parameters, not for series and volume.
        if (id !== 'highcharts-select-series' &&
            id !== 'highcharts-select-volume') {
            var parameter = id.split('highcharts-select-')[1];
            fieldsOutput.fields[parameter] = select.value;
        }
    });
    if (volumeTo) {
        fieldsOutput.fields['params.volumeSeriesID'] = volumeTo
            .getAttribute('value') || '';
    }
    return fieldsOutput;
}
/**
 * Resolve CSS 'var()', 'color-mix()' and 'rgba()' values to hex and alpha.
 * @internal
 */
function resolveColorValue(value, contextElement) {
    var toHex = function (n) {
        return ('0' + Math.round(n).toString(16)).slice(-2).toUpperCase();
    };
    var rgbaToHex = function (value) {
        var _a = Color.parse(value).rgba, r = _a[0], g = _a[1], b = _a[2], a = _a[3];
        return { value: '#' + toHex(r) + toHex(g) + toHex(b), alpha: a };
    };
    // If 'rgb()' or 'rgba()', use built-in parser.
    if (value.startsWith('rgb') || value.startsWith('rgba')) {
        return rgbaToHex(value);
    }
    // If 'color()' or 'var()', use a dummy element and getComputedStyle.
    if (value.startsWith('color') || value.startsWith('var')) {
        // Create a dummy span element and get the computed style from it.
        var dummy = doc.createElement('span');
        dummy.style.setProperty('color', value);
        contextElement.appendChild(dummy);
        var computed = window.getComputedStyle(dummy).color;
        contextElement.removeChild(dummy);
        // Parse color(srgb r g b / a) directly to hex and alpha.
        if (computed.startsWith('color')) {
            var srgbMatch = computed.match(new RegExp('color\\s*\\(\\s*srgb\\s+([\\d.]+)\\s+([\\d.]+)\\s+' +
                '([\\d.]+)\\s+(?:\\s*\\/\\s*([\\d.]+))?\\s*\\)'));
            if (srgbMatch) {
                var r = Math.round(parseFloat(srgbMatch[1]) * 255), g = Math.round(parseFloat(srgbMatch[2]) * 255), b = Math.round(parseFloat(srgbMatch[3]) * 255), alpha = srgbMatch[4] ? parseFloat(srgbMatch[4]) : 1;
                return { value: '#' + toHex(r) + toHex(g) + toHex(b), alpha: alpha };
            }
        }
        // If 'rgb()' or 'rgba()', use built-in parser.
        if (computed.startsWith('rgb') || computed.startsWith('rgba')) {
            return rgbaToHex(computed);
        }
    }
    // Don't parse hex colors and other non-color values like contrast, none.
    return { value: value, alpha: 1 };
}
/* *
 *
 *  Class
 *
 * */
/** @internal */
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    /* *
     *
     *  Constructor
     *
     * */
    function Popup(parentDiv, iconsURL, chart) {
        var _this = _super.call(this, parentDiv, iconsURL) || this;
        _this.chart = chart;
        _this.lang = (getOptions().lang.navigation || {}).popup || {};
        addEvent(_this.container, 'mousedown', function () {
            var activeAnnotation = chart &&
                chart.navigationBindings &&
                chart.navigationBindings.activeAnnotation;
            if (activeAnnotation) {
                activeAnnotation.cancelClick = true;
                var unbind_1 = addEvent(doc, 'click', function () {
                    setTimeout(function () {
                        activeAnnotation.cancelClick = false;
                    }, 0);
                    unbind_1();
                });
            }
        });
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Create input with label.
     *
     * @param {string} option
     *        Chain of fields i.e params.styles.fontSize separated by the dot.
     *
     * @param {string} indicatorType
     *        Type of the indicator i.e. sma, ema...
     *
     * @param {HTMLDOMElement} parentDiv
     *        HTML parent element.
     *
     * @param {Highcharts.InputAttributes} inputAttributes
     *        Attributes of the input.
     *
     * @return {HTMLInputElement}
     *         Return created input element.
     */
    Popup.prototype.addInput = function (option, indicatorType, parentDiv, inputAttributes) {
        var _a;
        var optionParamList = option.split('.'), optionName = optionParamList[optionParamList.length - 1], lang = this.lang, inputName = 'highcharts-' + indicatorType + '-' + pick(inputAttributes.htmlFor, optionName);
        if (!optionName.match(/^\d+$/)) {
            // Add label
            createElement('label', {
                htmlFor: inputName,
                className: inputAttributes.labelClassName
            }, void 0, parentDiv).appendChild(doc.createTextNode(lang[optionName] || optionName));
        }
        if (inputAttributes.type === 'color' && ((_a = this.chart) === null || _a === void 0 ? void 0 : _a.container)) {
            return this.createColorInput(option, inputName, inputAttributes, parentDiv, this.chart.container);
        }
        // Add input
        var input = createElement('input', {
            name: inputName,
            value: inputAttributes.value,
            type: inputAttributes.type,
            className: 'highcharts-popup-field'
        }, void 0, parentDiv);
        input.setAttribute('highcharts-data-name', option);
        return input;
    };
    /**
     * Create color input group with color picker, text field and opacity
     * controls.
     */
    Popup.prototype.createColorInput = function (option, inputName, inputAttributes, parentDiv, container) {
        var _a = resolveColorValue(inputAttributes.value || '', container), value = _a.value, alpha = _a.alpha;
        var parsedOpacity = Color.parse(inputAttributes.value || '').rgba[3], opacity = isNaN(parsedOpacity) ? alpha : parsedOpacity;
        var wrapper = createElement('div', { className: 'highcharts-popup-color-wrapper' }, void 0, parentDiv);
        var colorInput = createElement('input', {
            type: 'color',
            value: value,
            className: ('highcharts-popup-field highcharts-popup-field-color')
        }, void 0, wrapper);
        var textInput = createElement('input', {
            name: inputName,
            id: inputName,
            value: value,
            type: 'text',
            className: ('highcharts-popup-field highcharts-popup-field-text')
        }, void 0, wrapper);
        textInput.setAttribute('highcharts-data-name', option);
        var separator = createElement('span', { className: 'highcharts-popup-color-separator' }, void 0, wrapper);
        var opacityPercentInput = createElement('input', {
            type: 'number',
            value: String(Math.round(opacity * 100)),
            className: ('highcharts-popup-field highcharts-popup-opacity-percentage'),
            min: '0',
            max: '100',
            step: '1'
        }, void 0, wrapper);
        var opacityPercentSuffix = createElement('span', { className: 'highcharts-popup-opacity-percent-suffix' }, void 0, wrapper);
        opacityPercentSuffix.appendChild(doc.createTextNode(' %'));
        var opacitySlider = createElement('input', {
            type: 'range',
            value: String(Math.round(opacity * 100)),
            className: 'highcharts-popup-opacity-slider',
            min: '0',
            max: '100',
            step: '1'
        }, void 0, parentDiv);
        opacitySlider.style.setProperty('--highcharts-popup-opacity-track-color', value);
        opacitySlider.style.setProperty('display', 'none');
        var setOpacityGroupVisibility = function () {
            var isHex = /^#[0-9A-Fa-f]{6}$/.test(textInput.value);
            separator.style.display = isHex ? '' : 'none';
            opacityPercentInput.style.display = isHex ? '' : 'none';
            opacityPercentSuffix.style.display = isHex ? '' : 'none';
        };
        setOpacityGroupVisibility();
        var syncOpacityInputs = function (e) {
            var target = e.target, val = clamp(Number(target.value), 0, 100);
            opacitySlider.value = String(val);
            opacityPercentInput.value = String(Math.round(val));
        };
        var syncColorInputs = function (e) {
            if (e.target === colorInput) {
                textInput.value = colorInput.value.toUpperCase();
            }
            else {
                colorInput.value = textInput.value;
            }
            opacitySlider.style.setProperty('--highcharts-popup-opacity-track-color', colorInput.value);
            setOpacityGroupVisibility();
        };
        addEvent(parentDiv, 'mousedown', function (e) {
            if (e.target !== opacityPercentInput &&
                e.target !== opacitySlider) {
                opacitySlider.style.display = 'none';
            }
        });
        addEvent(opacityPercentInput, 'focus', function () {
            opacitySlider.style.display = '';
        });
        addEvent(opacityPercentInput, 'input', syncOpacityInputs);
        addEvent(opacitySlider, 'input', syncOpacityInputs);
        addEvent(colorInput, 'input', syncColorInputs);
        addEvent(textInput, 'input', syncColorInputs);
        return wrapper;
    };
    Popup.prototype.closeButtonEvents = function () {
        if (this.chart) {
            var navigationBindings = this.chart.navigationBindings;
            fireEvent(navigationBindings, 'closePopup');
            if (navigationBindings &&
                navigationBindings.selectedButtonElement) {
                fireEvent(navigationBindings, 'deselectButton', { button: navigationBindings.selectedButtonElement });
            }
        }
        else {
            _super.prototype.closeButtonEvents.call(this);
        }
    };
    /**
     * Create button.
     *
     * @param {Highcharts.HTMLDOMElement} parentDiv
     * Container where elements should be added
     * @param {string} label
     * Text placed as button label
     * @param {string} type
     * add | edit | remove
     * @param {Highcharts.HTMLDOMElement} fieldsDiv
     * Container where inputs are generated
     * @param {Function} callback
     * On click callback
     * @return {Highcharts.HTMLDOMElement}
     * HTML button
     */
    Popup.prototype.addButton = function (parentDiv, label, type, fieldsDiv, callback) {
        var _this = this;
        var button = createElement('button', void 0, void 0, parentDiv);
        button.appendChild(doc.createTextNode(label));
        if (callback) {
            ['click', 'touchstart'].forEach(function (eventName) {
                addEvent(button, eventName, function () {
                    _this.closePopup();
                    return callback(getFields(fieldsDiv, type));
                });
            });
        }
        return button;
    };
    /**
     * Create content and show popup.
     *
     * @param {string} type
     *        Type of popup i.e indicators
     * @param {Highcharts.Chart} chart
     *        Chart instance
     * @param {Highcharts.AnnotationsOptions} options
     *        Annotation options
     * @param {Function} callback
     *        On click callback
     */
    Popup.prototype.showForm = function (type, chart, options, callback) {
        if (!chart) {
            return;
        }
        // Show blank popup
        this.showPopup();
        // Indicator form
        if (type === 'indicators') {
            this.indicators.addForm.call(this, chart, options, callback);
        }
        // Annotation small toolbar
        if (type === 'annotation-toolbar') {
            this.annotations.addToolbar.call(this, chart, options, callback);
        }
        // Annotation edit form
        if (type === 'annotation-edit') {
            this.annotations.addForm.call(this, chart, options, callback);
        }
        // Flags form - add / edit
        if (type === 'flag') {
            this.annotations.addForm.call(this, chart, options, callback, true);
        }
        this.type = type;
        // Explicit height is needed to make inner elements scrollable
        this.container.style.height = this.container.offsetHeight + 'px';
    };
    return Popup;
}(BaseForm));
extend(Popup.prototype, {
    annotations: PopupAnnotations,
    indicators: PopupIndicators,
    tabs: PopupTabs
});
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default Popup;
