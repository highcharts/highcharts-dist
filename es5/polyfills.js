// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/polyfills
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("highcharts/polyfills", [], function (amd1) {return factory(amd1);});
	else if(typeof exports === 'object')
		exports["highcharts/polyfills"] = factory();
	else
		root["Highcharts"] = factory();
})(typeof window === 'undefined' ? this : window, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


if (!Array.prototype.includes) {
    // eslint-disable-next-line no-extend-native
    Array.prototype.includes = function (searchElement, fromIndex) {
        return this.indexOf(searchElement, fromIndex) > -1;
    };
}
if (!Array.prototype.find) {
    // eslint-disable-next-line no-extend-native
    Array.prototype.find = function (predicate, thisArg) {
        for (var i = 0; i < this.length; i++) {
            if (predicate.call(thisArg, this[i], i, this)) {
                return this[i];
            }
        }
    };
}
if (!Array.prototype.fill) {
    // eslint-disable-next-line no-extend-native
    Array.prototype.fill = function (value, start, end) {
        var O = Object(this), len = O.length >>> 0, relativeStart = Number(start) || 0;
        var k = relativeStart === -Infinity ? 0 : relativeStart < 0 ?
            Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
        var relativeEnd = end === void 0 ? len : Number(end), final = relativeEnd === -Infinity ? 0 : relativeEnd < 0 ?
            Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);
        while (k < final) {
            O[k++] = value;
        }
        return O;
    };
}
if (!Object.entries) {
    Object.entries = function (obj) {
        var keys = Object.keys(obj), iEnd = keys.length, entries = [];
        for (var i = 0; i < iEnd; ++i) {
            entries.push([keys[i], obj[keys[i]]]);
        }
        return entries;
    };
}
if (!Object.values) {
    Object.values = function (obj) {
        var keys = Object.keys(obj), iEnd = keys.length, values = [];
        for (var i = 0; i < iEnd; ++i) {
            values.push(obj[keys[i]]);
        }
        return values;
    };
}
var ElementPrototype = window.Element.prototype;
if (typeof ElementPrototype.matches !== 'function') {
    ElementPrototype.matches = function matches(selector) {
        var element = this;
        var elements = element.ownerDocument.querySelectorAll(selector);
        var index = 0;
        while (elements[index] && elements[index] !== element) {
            ++index;
        }
        return Boolean(elements[index]);
    };
}
if (typeof ElementPrototype.closest !== 'function') {
    ElementPrototype.closest = function closest(selector) {
        var element = this;
        while (element && element.nodeType === 1) {
            if (element === null || element === void 0 ? void 0 : element.matches(selector)) {
                return element;
            }
            element = element.parentNode || null;
        }
        return null;
    };
}
(function () {
    if (typeof window === 'undefined' ||
        window.CustomEvent ||
        !window.document ||
        !window.Event) {
        return false;
    }
    function CustomEvent(type, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = window.document.createEvent('CustomEvent');
        evt.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
// Replace \p{L} and \p{M} with language ranges and remove 'u' flag, #23462.
(function () {
    var languages = 'a-zA-Z' + // ASCII
        '\u00C0-\u017F' + // Latin Extended
        '\u0370-\u03FF' + // Greek
        '\u0400-\u04FF\u0500-\u052F' + // Cyrillic
        '\u0590-\u05FF' + // Hebrew
        '\u0600-\u06FF\u0750-\u077F' + // Arabic + Extended
        '\u0900-\u097F' + // Devanagari
        '\u0980-\u09FF' + // Bengali
        '\u3040-\u30FF' + // Hiragana + Katakana
        '\u3130-\u318F\uAC00-\uD7AF' + // Hangul Jamo + Syllables
        '\u4E00-\u9FFF'; // CJK Unified Ideographs
    var combiningMarks = '\u0300-\u036F' + // Combining Diacritical Marks
        '\u0483-\u0489' +
        '\u0591-\u05C7' + // Hebrew
        '\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED' + // Arabic
        '\u09BC\u09BE-\u09C4\u09C7-\u09C8\u09CB-\u09CD\u09D7\u09E2-\u09E3'; // Bengali
    var OriginalRegExp = RegExp;
    window.RegExp = function (pattern, flags) {
        var source = typeof pattern === 'string' ? pattern : pattern.source, finalFlags = flags !== undefined
            ? flags
            : typeof pattern !== 'string'
                ? pattern.flags
                : '';
        if (source.indexOf('\\p{L}') !== -1) {
            source = source.replace(/\\p\{L\}/g, languages);
            if (finalFlags) {
                finalFlags = finalFlags.replace('u', '');
            }
        }
        if (source.indexOf('\\p{M}') !== -1) {
            source = source.replace(/\\p\{M\}/g, combiningMarks);
            if (finalFlags) {
                finalFlags = finalFlags.replace('u', '');
            }
        }
        if (typeof finalFlags !== 'string') {
            finalFlags = '';
        }
        return new OriginalRegExp(source, finalFlags);
    };
    window.RegExp.prototype = OriginalRegExp.prototype;
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});