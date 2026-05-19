/* *
 *
 *  Exporting module
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import AST from '../../Core/Renderer/HTML/AST.js';
import Chart from '../../Core/Chart/Chart.js';
import ChartNavigationComposition from '../../Core/Chart/ChartNavigationComposition.js';
import D from '../../Core/Defaults.js';
var defaultOptions = D.defaultOptions, setOptions = D.setOptions;
import { downloadURL, getScript } from '../../Shared/DownloadURL.js';
import ExportingDefaults from './ExportingDefaults.js';
import ExportingSymbols from './ExportingSymbols.js';
import Fullscreen from './Fullscreen.js';
import G from '../../Core/Globals.js';
var composed = G.composed, doc = G.doc, isFirefox = G.isFirefox, isMS = G.isMS, isSafari = G.isSafari, SVG_NS = G.SVG_NS, win = G.win;
import HU from '../../Core/HttpUtilities.js';
import { addEvent, createElement, css, discardElement, extend, find, fireEvent, internalClearTimeout, isObject, merge, objectEach, pick, pushUnique, removeEvent, splat } from '../../Shared/Utilities.js';
import { error, uniqueKey } from '../../Core/Utilities.js';
AST.allowedAttributes.push('data-z-index', 'fill-opacity', 'filter', 'preserveAspectRatio', 'rx', 'ry', 'stroke-dasharray', 'stroke-linejoin', 'stroke-opacity', 'text-anchor', 'transform', 'transform-origin', 'version', 'viewBox', 'visibility', 'xmlns', 'xmlns:xlink');
AST.allowedTags.push('desc', 'clippath', 'fedropshadow', 'femorphology', 'g', 'image');
/* *
 *
 *  Constants
 *
 * */
var domurl = win.URL || win.webkitURL || win;
/* *
 *
 *  Class
 *
 * */
/**
 * The Exporting class provides methods for exporting charts to images. If the
 * exporting module is loaded, this class is instantiated on the chart and
 * available through the `chart.exporting` property. Read more about the
 * [exporting module](https://www.highcharts.com/docs/export-module-overview).
 *
 * @class
 * @name Highcharts.Exporting
 *
 * @param {Highcharts.Chart} chart
 * The chart instance.
 */
var Exporting = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function Exporting(chart, options) {
        /** @internal */
        this.options = {};
        this.chart = chart;
        this.options = options;
        this.btnCount = 0;
        this.buttonOffset = 0;
        this.divElements = [];
        this.svgElements = [];
    }
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Make hyphenated property names out of camelCase.
     *
     * @internal
     * @static
     * @function Highcharts.Exporting#hyphenate
     *
     * @param {string} property
     * Property name in camelCase.
     *
     * @return {string}
     * Hyphenated property name.
     *
     * @requires modules/exporting
     */
    Exporting.hyphenate = function (property) {
        return property.replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
        });
    };
    /**
     * Get data:URL from image URL.
     *
     * @internal
     * @static
     * @async
     * @function Highcharts.Exporting#imageToDataURL
     *
     * @param {string} imageURL
     * The address or URL of the image.
     * @param {number} scale
     * The scale of the image.
     * @param {string} imageType
     * The export type of the image.
     *
     * @requires modules/exporting
     */
    Exporting.imageToDataURL = function (imageURL, scale, imageType) {
        return __awaiter(this, void 0, void 0, function () {
            var img, canvas, ctx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Exporting.loadImage(imageURL)];
                    case 1:
                        img = _a.sent(), canvas = doc.createElement('canvas'), ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
                        if (!ctx) {
                            throw new Error('No canvas found!');
                        }
                        else {
                            canvas.height = img.height * scale;
                            canvas.width = img.width * scale;
                            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                            // Now we try to get the contents of the canvas
                            return [2 /*return*/, canvas.toDataURL(imageType)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** @internal */
    Exporting.fetchCSS = function (href) {
        return __awaiter(this, void 0, void 0, function () {
            var res, content, newSheet, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(href)];
                    case 1:
                        res = _b.sent();
                        return [4 /*yield*/, res.text()];
                    case 2:
                        content = _b.sent();
                        newSheet = new CSSStyleSheet();
                        newSheet.replaceSync(content);
                        return [2 /*return*/, newSheet];
                    case 3:
                        _a = _b.sent();
                        error("Warning: Failed to fetch CSS from ".concat(href), false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /** @internal */
    /**
     * Extract an array of font family names from a `font-family` string.
     * Handles trimming and removal of surrounding quotes.
     *
     * @param {string|undefined} fontFamily
     * The font-family CSS value to extract font names from.
     *
     * @return {string[]}
     * Array of font family names.
     */
    Exporting.extractFontFamilies = function (fontFamily) {
        if (!fontFamily) {
            return [];
        }
        return fontFamily
            .split(',')
            .map(function (font) { return font.trim().replace(/^['"]|['"]$/g, ''); })
            .filter(Boolean);
    };
    /**
     * Checks if a given CSS selector affects the SVG element or any of
     * its descendants. Returns true if either the SVG element itself
     * matches the selector, or if any element within the SVG matches it.
     *
     * @internal
     *
     * @param {string} selector
     * The CSS selector to test against the SVG element and its descendants.
     * @param {SVGSVGElement} svg
     * The SVG element to check for matches with the selector.
     *
     * @return {boolean}
     * True if the selector matches the SVG or any of its descendants,
     * false otherwise.
     */
    Exporting.selectorAffectsSVG = function (selector, svg) {
        try {
            if (svg.matches(selector)) {
                return true;
            }
            return !!svg.querySelector(selector);
        }
        catch (_a) {
            // Ignore invalid/unsupported selectors for matching.
            return false;
        }
    };
    /** @internal */
    /**
     * Collects all unique font family names used inline
     * within <text> and <tspan> elements of an SVG by inspecting
     * their style attributes and font-family attributes.
     *
     * @param {SVGSVGElement} svg
     * The SVG element in which to search for inline font families.
     * @param {Set<string>} usedFontFamilies
     * The set to store and accumulate unique font family names.
     */
    Exporting.collectSVGInlineFonts = function (svg, usedFontFamilies) {
        var textNodes = svg.querySelectorAll('text, tspan');
        for (var _i = 0, _a = Array.from(textNodes); _i < _a.length; _i++) {
            var textNode = _a[_i];
            var styleAttr = textNode.getAttribute('style') || '';
            var inlineFontFamily = textNode.getAttribute('font-family') || '';
            if (styleAttr.indexOf('font-family') > -1) {
                var match = styleAttr.match(/font-family\s*:\s*([^;]+)/i);
                var families = Exporting.extractFontFamilies(match === null || match === void 0 ? void 0 : match[1]);
                for (var _b = 0, families_1 = families; _b < families_1.length; _b++) {
                    var family = families_1[_b];
                    usedFontFamilies.add(family);
                }
            }
            for (var _c = 0, _d = Exporting.extractFontFamilies(inlineFontFamily); _c < _d.length; _c++) {
                var family = _d[_c];
                usedFontFamilies.add(family);
            }
        }
    };
    /** @internal */
    Exporting.handleStyleSheet = function (sheet_1, fontFaceRules_1, usedFontFamilies_1, svg_1) {
        return __awaiter(this, arguments, void 0, function (sheet, fontFaceRules, usedFontFamilies, svg, visited) {
            var href, sheetOrigin, _loop_1, _i, _a, rule, e_1, newSheet, _b;
            if (visited === void 0) { visited = new Set(); }
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        href = sheet.href;
                        if (href) {
                            if (visited.has(href)) {
                                return [2 /*return*/];
                            }
                            visited.add(href);
                            try {
                                sheetOrigin = new URL(href, doc.baseURI).origin;
                                if (sheetOrigin !== win.location.origin) {
                                    // We skip all cross-origin stylesheets on purpose.
                                    // This prevents DOM SecurityErrors and unhandled network
                                    // rejections when the browser blocks cssRules access.
                                    return [2 /*return*/];
                                }
                            }
                            catch (_d) {
                                // URL parsing failed, proceed to try/catch
                            }
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 13]);
                        _loop_1 = function (rule) {
                            var importedSheet, _e, _f, _g, family, cssText, baseUrl_1, regexp;
                            return __generator(this, function (_h) {
                                switch (_h.label) {
                                    case 0:
                                        if (!(rule instanceof CSSImportRule)) return [3 /*break*/, 6];
                                        _h.label = 1;
                                    case 1:
                                        _h.trys.push([1, 5, , 6]);
                                        return [4 /*yield*/, Exporting.fetchCSS(rule.href)];
                                    case 2:
                                        importedSheet = _h.sent();
                                        if (!importedSheet) return [3 /*break*/, 4];
                                        return [4 /*yield*/, Exporting.handleStyleSheet(importedSheet, fontFaceRules, usedFontFamilies, svg, visited)];
                                    case 3:
                                        _h.sent();
                                        _h.label = 4;
                                    case 4: return [3 /*break*/, 6];
                                    case 5:
                                        _e = _h.sent();
                                        return [3 /*break*/, 6];
                                    case 6:
                                        if (rule instanceof CSSStyleRule &&
                                            Exporting.selectorAffectsSVG(rule.selectorText, svg)) {
                                            for (_f = 0, _g = Exporting.extractFontFamilies(rule.style.fontFamily); _f < _g.length; _f++) {
                                                family = _g[_f];
                                                usedFontFamilies.add(family);
                                            }
                                        }
                                        if (rule instanceof CSSFontFaceRule) {
                                            cssText = rule.cssText;
                                            if (href) {
                                                baseUrl_1 = href, regexp = /url\(\s*(['"]?)(?![a-z]+:|\/\/)([^'")]+?)\1\s*\)/gi;
                                                // Replace relative URLs
                                                cssText = cssText.replace(regexp, function (_, quote, relPath) {
                                                    var absolutePath = new URL(relPath, baseUrl_1).href;
                                                    return "url(".concat(quote).concat(absolutePath).concat(quote, ")");
                                                });
                                            }
                                            fontFaceRules.push(cssText);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _i = 0, _a = Array.from(sheet.cssRules);
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        rule = _a[_i];
                        return [5 /*yield**/, _loop_1(rule)];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 13];
                    case 6:
                        e_1 = _c.sent();
                        if (!(e_1.name === 'SecurityError' && href)) return [3 /*break*/, 12];
                        _c.label = 7;
                    case 7:
                        _c.trys.push([7, 11, , 12]);
                        return [4 /*yield*/, Exporting.fetchCSS(href)];
                    case 8:
                        newSheet = _c.sent();
                        if (!newSheet) return [3 /*break*/, 10];
                        return [4 /*yield*/, Exporting.handleStyleSheet(newSheet, fontFaceRules, usedFontFamilies, svg, visited)];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        _b = _c.sent();
                        return [3 /*break*/, 12];
                    case 12: return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    /** @internal */
    Exporting.fetchStyleSheets = function (svg) {
        return __awaiter(this, void 0, void 0, function () {
            var fontFaceRules, usedFontFamilies, _i, _a, sheet;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fontFaceRules = [], usedFontFamilies = new Set();
                        Exporting.collectSVGInlineFonts(svg, usedFontFamilies);
                        _i = 0, _a = Array.from(doc.styleSheets);
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        sheet = _a[_i];
                        return [4 /*yield*/, Exporting.handleStyleSheet(sheet, fontFaceRules, usedFontFamilies, svg)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (!usedFontFamilies.size) {
                            return [2 /*return*/, fontFaceRules];
                        }
                        return [2 /*return*/, fontFaceRules.filter(function (cssText) {
                                var familyMatch = cssText.match(/font-family\s*:\s*([^;]+);?/i), families = Exporting.extractFontFamilies(familyMatch === null || familyMatch === void 0 ? void 0 : familyMatch[1]);
                                return families.some(function (family) { return usedFontFamilies.has(family); });
                            })];
                }
            });
        });
    };
    /** @internal */
    Exporting.inlineFonts = function (svg) {
        return __awaiter(this, void 0, void 0, function () {
            var cssTexts, urlRegex, urls, cssText, match, m, arrayBufferToBase64, replacements, _i, urls_1, url, res, contentType, b64, _a, _b, styleEl;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Exporting.fetchStyleSheets(svg)];
                    case 1:
                        cssTexts = _c.sent(), urlRegex = /url\(([^)]+)\)/g, urls = [];
                        cssText = cssTexts.join('\n');
                        while ((match = urlRegex.exec(cssText))) {
                            m = match[1].replace(/['"]/g, '');
                            if (!urls.includes(m)) {
                                urls.push(m);
                            }
                        }
                        arrayBufferToBase64 = function (buffer) {
                            var binary = '';
                            var bytes = new Uint8Array(buffer);
                            for (var i = 0; i < bytes.byteLength; i++) {
                                binary += String.fromCharCode(bytes[i]);
                            }
                            return btoa(binary);
                        };
                        replacements = {};
                        _i = 0, urls_1 = urls;
                        _c.label = 2;
                    case 2:
                        if (!(_i < urls_1.length)) return [3 /*break*/, 8];
                        url = urls_1[_i];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, fetch(url)];
                    case 4:
                        res = _c.sent(), contentType = res.headers.get('Content-Type') || '';
                        _a = arrayBufferToBase64;
                        return [4 /*yield*/, res.arrayBuffer()];
                    case 5:
                        b64 = _a.apply(void 0, [_c.sent()]);
                        replacements[url] = "data:".concat(contentType, ";base64,").concat(b64);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = _c.sent();
                        return [3 /*break*/, 7];
                    case 7:
                        _i++;
                        return [3 /*break*/, 2];
                    case 8:
                        cssText = cssText.replace(urlRegex, function (_, url) {
                            var strippedUrl = url.replace(/['"]/g, '');
                            return "url(".concat(replacements[strippedUrl] || strippedUrl, ")");
                        });
                        styleEl = document.createElementNS('http://www.w3.org/2000/svg', 'style');
                        styleEl.textContent = cssText;
                        // Needs to be appended to pass sanitization
                        svg.append(styleEl);
                        return [2 /*return*/, svg];
                }
            });
        });
    };
    /**
     * Loads an image from the provided URL.
     *
     * @internal
     * @static
     * @function Highcharts.Exporting#loadImage
     *
     * @param {string} imageURL
     * The address or URL of the image.
     *
     * @return {Promise<HTMLImageElement>}
     * Returns a Promise that resolves with the loaded HTMLImageElement.
     *
     * @requires modules/exporting
     */
    Exporting.loadImage = function (imageURL) {
        return new Promise(function (resolve, reject) {
            // Create an image
            var image = new win.Image();
            // Must be set prior to loading image source
            image.crossOrigin = 'Anonymous';
            // Return the image in case of success
            image.onload = function () {
                // IE bug where image is not always ready despite load event
                setTimeout(function () {
                    resolve(image);
                }, Exporting.loadEventDeferDelay);
            };
            // Reject in case of fail
            image.onerror = function (error) {
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(error);
            };
            // Provide the image URL
            image.src = imageURL;
        });
    };
    /**
     * Prepares and returns the image export options with default values where
     * necessary.
     *
     * @internal
     * @static
     * @function Highcharts.Exporting#prepareImageOptions
     *
     * @param {Highcharts.ExportingOptions} exportingOptions
     * The exporting options.
     *
     * @return {Exporting.ImageOptions}
     * The finalized image export options with ensured values.
     *
     * @requires modules/exporting
     */
    Exporting.prepareImageOptions = function (exportingOptions) {
        var _a;
        var type = (exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.type) || 'image/png', libURL = ((exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.libURL) ||
            ((_a = defaultOptions.exporting) === null || _a === void 0 ? void 0 : _a.libURL));
        return {
            type: type,
            filename: (((exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.filename) || 'chart') +
                '.' +
                (type === 'image/svg+xml' ? 'svg' : type.split('/')[1])),
            scale: (exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.scale) || 1,
            // Allow libURL to end with or without forward slash
            libURL: (libURL === null || libURL === void 0 ? void 0 : libURL.slice(-1)) !== '/' ? libURL + '/' : libURL
        };
    };
    /**
     * Prepare the SVG DOM for exporting
     *
     * @private
     */
    Exporting.sanitizeDOM = function (svg) {
        // Increase the size of foreignObjects to avoid clipping when the
        // applied font size in the export is larger than the on-screen font
        // size.
        svg.querySelectorAll('foreignObject').forEach(function (fo) {
            ['width', 'height'].forEach(function (attr) {
                var value = fo.getAttribute(attr);
                if (value) {
                    fo.setAttribute(attr, Math.ceil(parseInt(value, 10) * 1.15));
                }
            });
        });
    };
    /**
     * A collection of fixes on the produced SVG to account for expand
     * properties and browser bugs. Returns a cleaned SVG.
     *
     * @internal
     * @static
     * @function Highcharts.Exporting#sanitizeSVG
     *
     * @param {string} svg
     * SVG code to sanitize.
     * @param {Highcharts.Options} options
     * Chart options to apply.
     *
     * @return {string}
     * Sanitized SVG code.
     *
     * @requires modules/exporting
     */
    Exporting.sanitizeSVG = function (svg, 
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    options) {
        svg = svg
            // Some tags needs to be closed in xhtml (#13726)
            .replace(/(<(?:img|br).*?(?=\>))>/g, '$1 />')
            .replace(/(<svg(?![^>]*xmlns=)[^>]*)>/g, '$1 xmlns="http://www.w3.org/2000/svg">')
            .replace(/zIndex="[^"]+"/g, '')
            .replace(/symbolName="[^"]+"/g, '')
            .replace(/jQuery\d+="[^"]+"/g, '')
            .replace(/url\(("|&quot;)(.*?)("|&quot;)\;?\)/g, 'url($2)')
            .replace(/url\([^#]+#/g, 'url(#')
            .replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ')
            .replace(/ (NS\d+\:)?href=/g, ' xlink:href=') // #3567
            // #24102- restore href for image elements (boost)
            .replace(/(<image[^>]*) xlink:href=/g, '$1 href=')
            .replace(/\n+/g, ' ')
            // Replace HTML entities, issue #347
            .replace(/&nbsp;/g, '\u00A0') // No-break space
            .replace(/&shy;/g, '\u00AD'); // Soft hyphen
        return svg;
    };
    /**
     * Get blob URL from SVG code. Falls back to normal data URI.
     *
     * @internal
     * @static
     * @function Highcharts.Exporting#svgToDataURL
     *
     * @param {string} svg
     * SVG to get the URL from.
     *
     * @return {string}
     * The data URL.
     *
     * @requires modules/exporting
     */
    Exporting.svgToDataURL = function (svg) {
        // Webkit and not chrome
        var userAgent = win.navigator.userAgent;
        var webKit = (userAgent.indexOf('WebKit') > -1 &&
            userAgent.indexOf('Chrome') < 0);
        try {
            // Safari requires data URI since it doesn't allow navigation to
            // blob URLs. ForeignObjects also don't work well in Blobs in Chrome
            // (#14780).
            if (!webKit && svg.indexOf('<foreignObject') === -1) {
                return domurl.createObjectURL(new win.Blob([svg], {
                    type: 'image/svg+xml;charset-utf-16'
                }));
            }
        }
        catch (_a) {
            // Ignore
        }
        return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Add the export button to the chart, with options.
     *
     * @internal
     * @function Highcharts.Exporting#addButton
     *
     * @param {Highcharts.ExportingButtonOptions} options
     * The exporting button options object.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.addButton = function (options) {
        var _a;
        var exporting = this, chart = exporting.chart, renderer = chart.renderer, btnOptions = merge((_a = chart.options.navigation) === null || _a === void 0 ? void 0 : _a.buttonOptions, options), onclick = btnOptions.onclick, menuItems = btnOptions.menuItems, symbolSize = btnOptions.symbolSize || 12;
        var symbol;
        if (btnOptions.enabled === false || !btnOptions.theme) {
            return;
        }
        var theme = chart.styledMode ? {} : btnOptions.theme;
        var callback = (function () { });
        if (onclick) {
            callback = function (e) {
                if (e) {
                    e.stopPropagation();
                }
                onclick.call(chart, e, chart);
            };
        }
        else if (menuItems) {
            callback = function (e) {
                // Consistent with onclick call (#3495)
                if (e) {
                    e.stopPropagation();
                }
                exporting.contextMenu(button.menuClassName, menuItems, button.translateX || 0, button.translateY || 0, button.width || 0, button.height || 0, button);
                button.setState(2);
            };
        }
        if (btnOptions.text && btnOptions.symbol) {
            theme.paddingLeft = pick(theme.paddingLeft, 30);
        }
        else if (!btnOptions.text) {
            extend(theme, {
                width: btnOptions.width,
                height: btnOptions.height,
                padding: 0
            });
        }
        var button = renderer
            .button(btnOptions.text || '', 0, 0, callback, theme, void 0, void 0, void 0, void 0, btnOptions.useHTML)
            .addClass(options.className || '')
            .attr({
            title: pick(chart.options.lang[(btnOptions._titleKey ||
                btnOptions.titleKey)], '')
        });
        button.menuClassName = (options.menuClassName ||
            'highcharts-menu-' + exporting.btnCount++);
        if (btnOptions.symbol) {
            symbol = renderer
                .symbol(btnOptions.symbol, Math.round((btnOptions.symbolX || 0) - (symbolSize / 2)), Math.round((btnOptions.symbolY || 0) - (symbolSize / 2)), symbolSize, symbolSize, 
            // If symbol is an image, scale it (#7957)
            {
                width: symbolSize,
                height: symbolSize
            })
                .addClass('highcharts-button-symbol')
                .attr({
                zIndex: 1
            })
                .add(button);
            if (!chart.styledMode) {
                symbol.attr({
                    stroke: btnOptions.symbolStroke,
                    fill: btnOptions.symbolFill,
                    'stroke-width': btnOptions.symbolStrokeWidth || 1
                });
            }
        }
        button
            .add(exporting.group)
            .align(extend(btnOptions, {
            width: button.width,
            x: pick(btnOptions.x, exporting.buttonOffset) // #1654
        }), true, 'spacingBox');
        exporting.buttonOffset += (((button.width || 0) + (btnOptions.buttonSpacing || 0)) *
            (btnOptions.align === 'right' ? -1 : 1));
        exporting.svgElements.push(button, symbol);
    };
    /**
     * Clean up after printing a chart.
     *
     * @internal
     * @function Highcharts.Exporting#afterPrint
     *
     * @emits Highcharts.Chart#event:afterPrint
     *
     * @requires modules/exporting
     */
    Exporting.prototype.afterPrint = function () {
        var chart = this.chart;
        if (!this.printReverseInfo) {
            return void 0;
        }
        var _a = this.printReverseInfo, childNodes = _a.childNodes, origDisplay = _a.origDisplay, resetParams = _a.resetParams;
        // Put the chart back in
        this.moveContainers(chart.renderTo);
        // Restore all body content
        [].forEach.call(childNodes, function (node, i) {
            if (node.nodeType === 1) {
                node.style.display = (origDisplay[i] || '');
            }
        });
        this.isPrinting = false;
        // Reset printMaxWidth
        if (resetParams) {
            chart.setSize.apply(chart, resetParams);
        }
        delete this.printReverseInfo;
        Exporting.printingChart = void 0;
        fireEvent(chart, 'afterPrint');
    };
    /**
     * Prepare chart and document before printing a chart.
     *
     * @internal
     * @function Highcharts.Exporting#beforePrint
     *
     * @emits Highcharts.Chart#event:beforePrint
     *
     * @requires modules/exporting
     */
    Exporting.prototype.beforePrint = function () {
        var _a;
        var chart = this.chart, body = doc.body, printMaxWidth = this.options.printMaxWidth, printReverseInfo = {
            childNodes: body.childNodes,
            origDisplay: [],
            resetParams: void 0
        };
        this.isPrinting = true;
        (_a = chart.pointer) === null || _a === void 0 ? void 0 : _a.reset(void 0, 0);
        fireEvent(chart, 'beforePrint');
        // Handle printMaxWidth
        if (printMaxWidth && chart.chartWidth > printMaxWidth) {
            printReverseInfo.resetParams = [
                chart.options.chart.width,
                void 0,
                false
            ];
            chart.setSize(printMaxWidth, void 0, false);
        }
        // Hide all body content
        [].forEach.call(printReverseInfo.childNodes, function (node, i) {
            if (node.nodeType === 1) {
                printReverseInfo.origDisplay[i] = node.style.display;
                node.style.display = 'none';
            }
        });
        // Pull out the chart
        this.moveContainers(body);
        // Storage details for undo action after printing
        this.printReverseInfo = printReverseInfo;
    };
    /**
     * Display a popup menu for choosing the export type.
     *
     * @internal
     * @function Highcharts.Exporting#contextMenu
     *
     * @param {string} className
     * An identifier for the menu.
     * @param {Array<(string | Highcharts.ExportingMenuObject)>} items
     * A collection with text and onclicks for the items.
     * @param {number} x
     * The x position of the opener button.
     * @param {number} y
     * The y position of the opener button.
     * @param {number} width
     * The width of the opener button.
     * @param {number} height
     * The height of the opener button.
     * @param {SVGElement} button
     * The SVG button element.
     *
     * @emits Highcharts.Chart#event:exportMenuHidden
     * @emits Highcharts.Chart#event:exportMenuShown
     *
     * @requires modules/exporting
     */
    Exporting.prototype.contextMenu = function (className, items, x, y, width, height, button) {
        var _a, _b, _c;
        var exporting = this, chart = exporting.chart, navOptions = chart.options.navigation, chartWidth = chart.chartWidth, chartHeight = chart.chartHeight, cacheName = 'cache-' + className, 
        // For mouse leave detection
        menuPadding = Math.max(width, height);
        var innerMenu, menu = chart[cacheName];
        // Create the menu only the first time
        if (!menu) {
            // Create a HTML element above the SVG
            exporting.contextMenuEl = chart[cacheName] = menu =
                createElement('div', {
                    className: className
                }, __assign({ position: 'absolute', zIndex: 1000, padding: menuPadding + 'px', pointerEvents: 'auto' }, chart.renderer.style), ((_a = chart.scrollablePlotArea) === null || _a === void 0 ? void 0 : _a.fixedDiv) || chart.container);
            innerMenu = createElement('ul', { className: 'highcharts-menu' }, chart.styledMode ? {} : {
                listStyle: 'none',
                margin: 0,
                padding: 0
            }, menu);
            // Presentational CSS
            if (!chart.styledMode) {
                css(innerMenu, extend({
                    MozBoxShadow: '3px 3px 10px #0008',
                    WebkitBoxShadow: '3px 3px 10px #0008',
                    boxShadow: '3px 3px 10px #0008'
                }, (navOptions === null || navOptions === void 0 ? void 0 : navOptions.menuStyle) || {}));
            }
            // Hide on mouse out
            menu.hideMenu = function () {
                css(menu, { display: 'none' });
                if (button) {
                    button.setState(0);
                }
                if (chart.exporting) {
                    chart.exporting.openMenu = false;
                }
                // #10361, #9998
                css(chart.renderTo, { overflow: 'hidden' });
                css(chart.container, { overflow: 'hidden' });
                internalClearTimeout(menu.hideTimer);
                fireEvent(chart, 'exportMenuHidden');
            };
            // Hide the menu some time after mouse leave (#1357)
            (_b = exporting.events) === null || _b === void 0 ? void 0 : _b.push(addEvent(menu, 'mouseleave', function () {
                menu.hideTimer = win.setTimeout(menu.hideMenu, 500);
            }), addEvent(menu, 'mouseenter', function () {
                internalClearTimeout(menu.hideTimer);
            }), 
            // Hide it on clicking or touching outside the menu (#2258,
            // #2335, #2407)
            addEvent(doc, 'mouseup', function (e) {
                var _a;
                if (!((_a = chart.pointer) === null || _a === void 0 ? void 0 : _a.inClass(e.target, className))) {
                    menu.hideMenu();
                }
            }), addEvent(menu, 'click', function () {
                var _a;
                if ((_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.openMenu) {
                    menu.hideMenu();
                }
            }));
            // Create the items
            items.forEach(function (item) {
                var _a;
                if (typeof item === 'string') {
                    if ((_a = exporting.options.menuItemDefinitions) === null || _a === void 0 ? void 0 : _a[item]) {
                        item = exporting.options.menuItemDefinitions[item];
                    }
                }
                if (isObject(item, true)) {
                    var element = void 0;
                    if (item.separator) {
                        element = createElement('li', {
                            className: 'highcharts-menu-item highcharts-separator',
                            role: 'separator'
                        }, void 0, innerMenu);
                        if (!chart.styledMode) {
                            css(element, {
                                border: 'none',
                                backgroundColor: 'var(--highcharts-neutral-color-40)',
                                height: '0.5px',
                                margin: '10px 0',
                                padding: 0,
                                listStyle: 'none',
                                'pointer-events': 'none'
                            });
                        }
                    }
                    else {
                        // When chart initialized with the table, wrong button
                        // text displayed, #14352.
                        if (item.textKey === 'viewData' &&
                            exporting.isDataTableVisible) {
                            item.textKey = 'hideData';
                        }
                        element = createElement('li', {
                            className: 'highcharts-menu-item',
                            onclick: function (e) {
                                if (e) { // IE7
                                    e.stopPropagation();
                                }
                                menu.hideMenu();
                                if (typeof item !== 'string' && item.onclick) {
                                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                                    item.onclick.apply(chart, arguments);
                                }
                            }
                        }, void 0, innerMenu);
                        AST.setElementHTML(element, item.text || chart.options.lang[item.textKey]);
                        if (!chart.styledMode) {
                            element.onmouseover = function () {
                                css(this, (navOptions === null || navOptions === void 0 ? void 0 : navOptions.menuItemHoverStyle) || {});
                            };
                            element.onmouseout = function () {
                                css(this, (navOptions === null || navOptions === void 0 ? void 0 : navOptions.menuItemStyle) || {});
                            };
                            css(element, extend({ cursor: 'pointer' }, (navOptions === null || navOptions === void 0 ? void 0 : navOptions.menuItemStyle) || {}));
                        }
                    }
                    // Keep references to menu divs to be able to destroy them
                    exporting.divElements.push(element);
                }
            });
            // Keep references to menu and innerMenu div to be able to destroy
            // them
            exporting.divElements.push(innerMenu, menu);
            exporting.menuHeight = menu.offsetHeight;
            exporting.menuWidth = menu.offsetWidth;
        }
        var menuStyle = { display: 'block' };
        // If outside right, right align it
        if (x + (exporting.menuWidth || 0) > chartWidth) {
            menuStyle.right = (chartWidth - x - width - menuPadding) + 'px';
        }
        else {
            menuStyle.left = (x - menuPadding) + 'px';
        }
        // If outside bottom, bottom align it
        if (y + height + (exporting.menuHeight || 0) >
            chartHeight &&
            ((_c = button.alignOptions) === null || _c === void 0 ? void 0 : _c.verticalAlign) !== 'top') {
            menuStyle.bottom = (chartHeight - y - menuPadding) + 'px';
        }
        else {
            menuStyle.top = (y + height - menuPadding) + 'px';
        }
        css(menu, menuStyle);
        // #10361, #9998
        css(chart.renderTo, { overflow: '' });
        css(chart.container, { overflow: '' });
        if (chart.exporting) {
            chart.exporting.openMenu = true;
        }
        fireEvent(chart, 'exportMenuShown');
    };
    /**
     * Destroy the export buttons.
     *
     * @internal
     * @function Highcharts.Exporting#destroy
     *
     * @param {global.Event} [e]
     * Event object.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.destroy = function (e) {
        var exporting = this, chart = e ? e.target : exporting.chart, divElements = exporting.divElements, events = exporting.events, svgElements = exporting.svgElements;
        var cacheName;
        // Destroy the extra buttons added
        svgElements.forEach(function (elem, i) {
            // Destroy and null the svg elements
            if (elem) { // #1822
                elem.onclick = elem.ontouchstart = null;
                cacheName = 'cache-' + elem.menuClassName;
                if (chart[cacheName]) {
                    delete chart[cacheName];
                }
                svgElements[i] = elem.destroy();
            }
        });
        svgElements.length = 0;
        // Destroy the exporting group
        if (exporting.group) {
            exporting.group.destroy();
            delete exporting.group;
        }
        // Destroy the divs for the menu
        divElements.forEach(function (elem, i) {
            if (elem) {
                // Remove the event handler
                internalClearTimeout(elem.hideTimer); // #5427
                removeEvent(elem, 'mouseleave');
                // Remove inline events
                divElements[i] =
                    elem.onmouseout =
                        elem.onmouseover =
                            elem.ontouchstart =
                                elem.onclick = null;
                // Destroy the div by moving to garbage bin
                discardElement(elem);
            }
        });
        divElements.length = 0;
        if (events) {
            events.forEach(function (unbind) {
                unbind();
            });
            events.length = 0;
        }
    };
    /**
     * Get data URL to an image of an SVG and call download on its options
     * object:
     *
     * - **filename:** Name of resulting downloaded file without extension.
     * Default is based on the chart title.
     * - **type:** File type of resulting download. Default is `image/png`.
     * - **scale:** Scaling factor of downloaded image compared to source.
     * Default is `2`.
     * - **libURL:** URL pointing to location of dependency scripts to download
     * on demand.
     *
     * @async
     * @function Highcharts.Exporting#downloadSVG
     *
     * @param {string} svg
     * The generated SVG.
     * @param {Highcharts.ExportingOptions} exportingOptions
     * The exporting options.
     *
     * @requires modules/exporting
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    Exporting.prototype.downloadSVG = function (svg, exportingOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var eventArgs, _a, type, filename, scale, libURL, svgURL, blob, dataURL, error_1, canvas_1, ctx_1, matchedImageWidth, matchedImageHeight, imageWidth, imageHeight, downloadWithCanVG;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        eventArgs = {
                            svg: svg,
                            exportingOptions: exportingOptions,
                            exporting: this
                        };
                        // Fire a custom event before the export starts
                        fireEvent(Exporting.prototype, 'downloadSVG', eventArgs);
                        // If the event was prevented, do not proceed with the export
                        if (eventArgs.defaultPrevented) {
                            return [2 /*return*/];
                        }
                        _a = Exporting.prepareImageOptions(exportingOptions), type = _a.type, filename = _a.filename, scale = _a.scale, libURL = _a.libURL;
                        if (!(type === 'application/pdf')) return [3 /*break*/, 1];
                        // Error in case of offline-exporting module is not loaded
                        throw new Error('Offline exporting logic for PDF type is not found.');
                    case 1:
                        if (!(type === 'image/svg+xml')) return [3 /*break*/, 2];
                        // SVG download. In this case, we want to use Microsoft specific
                        // Blob if available
                        if (typeof win.MSBlobBuilder !== 'undefined') {
                            blob = new win.MSBlobBuilder();
                            blob.append(svg);
                            svgURL = blob.getBlob('image/svg+xml');
                        }
                        else {
                            svgURL = Exporting.svgToDataURL(svg);
                        }
                        // Download the chart
                        downloadURL(svgURL, filename);
                        return [3 /*break*/, 10];
                    case 2:
                        // PNG/JPEG download - create bitmap from SVG
                        svgURL = Exporting.svgToDataURL(svg);
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, 9, 10]);
                        Exporting.objectURLRevoke = true;
                        return [4 /*yield*/, Exporting.imageToDataURL(svgURL, scale, type)];
                    case 4:
                        dataURL = _b.sent();
                        downloadURL(dataURL, filename);
                        return [3 /*break*/, 10];
                    case 5:
                        error_1 = _b.sent();
                        // No need for the below logic to run in case no canvas is
                        // found
                        if (error_1.message === 'No canvas found!') {
                            throw error_1;
                        }
                        // Or in case of exceeding the input length
                        if (svg.length > 100000000 /* RegexLimits.svgLimit */) {
                            throw new Error('Input too long');
                        }
                        canvas_1 = doc.createElement('canvas'), ctx_1 = canvas_1.getContext('2d'), matchedImageWidth = svg.match(
                        // eslint-disable-next-line max-len
                        /^<svg[^>]*\s{,1000}width\s{,1000}=\s{,1000}\"?(\d+)\"?[^>]*>/), matchedImageHeight = svg.match(
                        // eslint-disable-next-line max-len
                        /^<svg[^>]*\s{0,1000}height\s{,1000}=\s{,1000}\"?(\d+)\"?[^>]*>/);
                        if (!(ctx_1 &&
                            matchedImageWidth &&
                            matchedImageHeight)) return [3 /*break*/, 8];
                        imageWidth = +matchedImageWidth[1] * scale, imageHeight = +matchedImageHeight[1] * scale, downloadWithCanVG = function () {
                            var v = win.canvg.Canvg.fromString(ctx_1, svg);
                            v.start();
                            downloadURL(win.navigator.msSaveOrOpenBlob ?
                                canvas_1.msToBlob() :
                                canvas_1.toDataURL(type), filename);
                        };
                        canvas_1.width = imageWidth;
                        canvas_1.height = imageHeight;
                        if (!!win.canvg) return [3 /*break*/, 7];
                        if (!libURL) {
                            throw new Error('Image export requires canvg. Set ' +
                                'exporting.libURL or preload canvg.');
                        }
                        Exporting.objectURLRevoke = true;
                        return [4 /*yield*/, getScript(libURL + 'canvg.js')];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        // Use loaded canvg
                        downloadWithCanVG();
                        _b.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        if (Exporting.objectURLRevoke) {
                            try {
                                domurl.revokeObjectURL(svgURL);
                            }
                            catch (_c) {
                                // Ignore
                            }
                        }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Submit an SVG version of the chart along with some parameters for local
     * conversion (PNG, JPEG, and SVG) or conversion on a server (PDF).
     *
     * @sample highcharts/members/chart-exportchart/
     * Export with no options
     * @sample highcharts/members/chart-exportchart-filename/
     * PDF type and custom filename
     * @sample highcharts/exporting/menuitemdefinitions-webp/
     * Export to WebP
     * @sample highcharts/members/chart-exportchart-custom-background/
     * Different chart background in export
     * @sample stock/members/chart-exportchart/
     * Export with Highcharts Stock
     *
     * @async
     * @function Highcharts.Exporting#exportChart
     *
     * @param {Highcharts.ExportingOptions} [exportingOptions]
     * Exporting options in addition to those defined in
     * [exporting](https://api.highcharts.com/highcharts/exporting).
     * @param {Highcharts.Options} [chartOptions]
     * Additional chart options for the exported chart. For example a different
     * background color can be added here, or `dataLabels` for export only.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.exportChart = function (exportingOptions, chartOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var svg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Merge the options
                        exportingOptions = merge(this.options, exportingOptions);
                        if (!exportingOptions.local) return [3 /*break*/, 2];
                        // Trigger the local export logic
                        return [4 /*yield*/, this.localExport(exportingOptions, chartOptions || {})];
                    case 1:
                        // Trigger the local export logic
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.getSVGForExport(exportingOptions, chartOptions)];
                    case 3:
                        svg = _a.sent();
                        if (!exportingOptions.url) return [3 /*break*/, 5];
                        return [4 /*yield*/, HU.post(exportingOptions.url, {
                                filename: exportingOptions.filename ?
                                    exportingOptions.filename.replace(/\//g, '-') :
                                    this.getFilename(),
                                type: exportingOptions.type,
                                width: exportingOptions.width,
                                scale: exportingOptions.scale,
                                svg: svg
                            }, exportingOptions.fetchOptions)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handles the fallback to the export server when a local export fails.
     *
     * @internal
     * @async
     * @function Highcharts.Exporting#fallbackToServer
     *
     * @param {Highcharts.ExportingOptions} exportingOptions
     * The exporting options.
     * @param {Error} err
     * The error that caused the local export to fail.
     *
     * @return {Promise<void>}
     * A promise that resolves when the fallback process is complete.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.fallbackToServer = function (exportingOptions, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(exportingOptions.fallbackToExportServer === false)) return [3 /*break*/, 1];
                        if (exportingOptions.error) {
                            exportingOptions.error(exportingOptions, err);
                        }
                        else {
                            // Fallback disabled
                            error((err === null || err === void 0 ? void 0 : err.message) || 28, true, this.chart);
                        }
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(exportingOptions.type === 'application/pdf')) return [3 /*break*/, 3];
                        // The local must be false to fallback to server for PDF export
                        exportingOptions.local = false;
                        // Allow fallback to server only for PDFs that failed locally
                        return [4 /*yield*/, this.exportChart(exportingOptions)];
                    case 2:
                        // Allow fallback to server only for PDFs that failed locally
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Return the unfiltered innerHTML of the chart container. Used as hook for
     * plugins. In styled mode, it also takes care of inlining CSS style rules.
     *
     * @see Chart#getSVG
     *
     * @function Highcharts.Exporting#getChartHTML
     *
     * @param {boolean} [applyStyleSheets]
     * whether or not to apply the style sheets.
     *
     * @return {string}
     * The unfiltered SVG of the chart.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.getChartHTML = function (applyStyleSheets) {
        var chart = this.chart;
        if (applyStyleSheets) {
            this.inlineStyles();
        }
        this.resolveCSSVariables();
        Exporting.sanitizeDOM(chart.renderer.box);
        // Move canvas contents over to SVG image elements
        chart.container.querySelectorAll('canvas').forEach(function (canvas) {
            var imageDataURL = canvas.toDataURL('image/png'), foreignObject = canvas.parentNode, imageElem = chart.renderer.image(imageDataURL, 0, 0, canvas.width, canvas.height);
            css(imageElem.element, {
                width: canvas.style.width,
                height: canvas.style.height
            });
            foreignObject.parentNode.insertBefore(imageElem.element, foreignObject);
            foreignObject.remove();
        });
        return chart.container.innerHTML;
    };
    /**
     * Get the default file name used for exported charts. By default it creates
     * a file name based on the chart title.
     *
     * @function Highcharts.Exporting#getFilename
     *
     * @return {string}
     * A file name without extension.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.getFilename = function () {
        var _a;
        var titleText = (_a = this.chart.userOptions.title) === null || _a === void 0 ? void 0 : _a.text;
        var filename = this.options.filename;
        if (filename) {
            return filename.replace(/\//g, '-');
        }
        if (typeof titleText === 'string') {
            filename = titleText
                .toLowerCase()
                .replace(/<\/?[^>]+(>|$)/g, '') // Strip HTML tags
                .replace(/[\s_]+/g, '-')
                .replace(/[^a-z\d\-]/g, '') // Preserve only latin
                .replace(/^[\-]+/g, '') // Dashes in the start
                .replace(/[\-]+/g, '-') // Dashes in a row
                .substr(0, 24)
                .replace(/[\-]+$/g, ''); // Dashes in the end;
        }
        if (!filename || filename.length < 5) {
            filename = 'chart';
        }
        return filename;
    };
    /**
     * Return an SVG representation of the chart.
     *
     * @sample highcharts/members/chart-getsvg/
     * View the SVG from a button
     *
     * @function Highcharts.Exporting#getSVG
     *
     * @param {Highcharts.Options} [chartOptions]
     * Additional chart options for the generated SVG representation. For
     * collections like `xAxis`, `yAxis` or `series`, the additional options is
     * either merged in to the original item of the same `id`, or to the first
     * item if a common id is not found.
     *
     * @param {boolean} [async=false]
     * Whether to get the SVG synchronously or asynchronously. The async mode
     * should be used when additional resources like WebGPU canvas needs to be
     * inlined before getting the SVG. In async mode, `getSVG` returns a
     * Promise.
     *
     * @return {string|Promise<string>}
     * The SVG representation of the rendered chart.
     *
     * @emits Highcharts.Chart#event:getSVG
     *
     * @requires modules/exporting
     */
    Exporting.prototype.getSVG = function (chartOptions, async) {
        var _this = this;
        var _a, _b;
        var chart = this.chart;
        var svg, seriesOptions, 
        // Copy the options and add extra options
        options = merge(chart.options, chartOptions);
        // Use userOptions to make the options chain in series right (#3881)
        options.plotOptions = merge(chart.userOptions.plotOptions, chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions.plotOptions);
        // ... and likewise with time, avoid that undefined time properties are
        // merged over legacy global time options
        options.time = merge(chart.userOptions.time, chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions.time);
        // Create a sandbox where a new chart will be generated
        var sandbox = createElement('div', void 0, {
            position: 'absolute',
            top: '-9999em',
            width: chart.chartWidth + 'px',
            height: chart.chartHeight + 'px'
        }, doc.body);
        // Get the source size
        var cssWidth = chart.renderTo.style.width, cssHeight = chart.renderTo.style.height, sourceWidth = ((_a = options.exporting) === null || _a === void 0 ? void 0 : _a.sourceWidth) ||
            options.chart.width ||
            (/px$/.test(cssWidth) && parseInt(cssWidth, 10)) ||
            (options.isGantt ? 800 : 600), sourceHeight = ((_b = options.exporting) === null || _b === void 0 ? void 0 : _b.sourceHeight) ||
            options.chart.height ||
            (/px$/.test(cssHeight) && parseInt(cssHeight, 10)) ||
            400;
        // Override some options
        extend(options.chart, {
            animation: false,
            renderTo: sandbox,
            forExport: true,
            renderer: 'SVGRenderer',
            width: sourceWidth,
            height: sourceHeight
        });
        if (options.exporting) {
            options.exporting.enabled = false; // Hide buttons in print
        }
        delete options.data; // #3004
        // Prepare for replicating the chart
        options.series = [];
        chart.series.forEach(function (s) {
            var _a;
            seriesOptions = merge(s.userOptions, {
                animation: false, // Turn off animation
                enableMouseTracking: false,
                showCheckbox: false,
                visible: s.visible
            });
            // Used for the navigator series that has its own option set
            if (!seriesOptions.isInternal) {
                (_a = options === null || options === void 0 ? void 0 : options.series) === null || _a === void 0 ? void 0 : _a.push(seriesOptions);
            }
        });
        var colls = {};
        chart.axes.forEach(function (axis) {
            // Assign an internal key to ensure a one-to-one mapping (#5924)
            if (!axis.userOptions.internalKey) { // #6444
                axis.userOptions.internalKey = uniqueKey();
            }
            if (options && !axis.options.isInternal) {
                if (!colls[axis.coll]) {
                    colls[axis.coll] = true;
                    options[axis.coll] = [];
                }
                options[axis.coll].push(merge(axis.userOptions, {
                    visible: axis.visible,
                    // Force some options that could have be set directly on
                    // the axis while missing in the userOptions or options.
                    type: axis.type,
                    uniqueNames: axis.uniqueNames
                }));
            }
        });
        // Make sure the `colorAxis` object of the `defaultOptions` isn't used
        // in the chart copy's user options, because a color axis should only be
        // added when the user actually applies it.
        options.colorAxis = chart.userOptions.colorAxis;
        // Operations to carry out on the chart copy when created. We need to do
        // this in a callback so that we can handle both sync and async calls.
        var postprocessAndGetSVG = function (chartCopy) {
            var _a;
            // Axis options and series options  (#2022, #3900, #5982)
            if (chartOptions) {
                ['xAxis', 'yAxis', 'series'].forEach(function (coll) {
                    var _a;
                    if (chartOptions[coll]) {
                        chartCopy.update((_a = {},
                            _a[coll] = chartOptions[coll],
                            _a));
                    }
                });
            }
            // Reflect axis extremes in the export (#5924)
            chart.axes.forEach(function (axis) {
                var axisCopy = find(chartCopy.axes, function (copy) {
                    return copy.options.internalKey === axis.userOptions.internalKey;
                });
                if (axisCopy) {
                    var extremes = axis.getExtremes(), 
                    // Make sure min and max overrides in the
                    // `exporting.chartOptions.xAxis` settings are
                    // reflected. These should override user-set extremes
                    // via zooming, scrollbar etc (#7873).
                    exportOverride = splat((chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions[axis.coll]) || {})[0], userMin = 'min' in exportOverride ?
                        exportOverride.min :
                        extremes.userMin, userMax = 'max' in exportOverride ?
                        exportOverride.max :
                        extremes.userMax;
                    if (((typeof userMin !== 'undefined' &&
                        userMin !== axisCopy.min) || (typeof userMax !== 'undefined' &&
                        userMax !== axisCopy.max))) {
                        axisCopy.setExtremes(userMin !== null && userMin !== void 0 ? userMin : void 0, userMax !== null && userMax !== void 0 ? userMax : void 0, true, false);
                    }
                }
            });
            var exporting = chartCopy.exporting;
            // Prepare shadow DOM styles
            if (exporting === null || exporting === void 0 ? void 0 : exporting.options.applyStyleSheets) {
                _this.applyShadowDOMStyles(chartCopy);
            }
            // Get the SVG from the container's innerHTML
            svg = (exporting === null || exporting === void 0 ? void 0 : exporting.getChartHTML(chart.styledMode ||
                ((_a = options === null || options === void 0 ? void 0 : options.exporting) === null || _a === void 0 ? void 0 : _a.applyStyleSheets))) || '';
            fireEvent(chart, 'getSVG', { chartCopy: chartCopy });
            svg = Exporting.sanitizeSVG(svg, options);
            // Free up memory
            options = void 0;
            chartCopy.destroy();
            discardElement(sandbox);
            return svg;
        };
        // Return a string in sync mode
        if (!async) {
            var chartCopy = new chart.constructor(options, chart.callback);
            return postprocessAndGetSVG(chartCopy);
        }
        // Otherwise return a promise
        return new Promise(function (resolve) {
            return new chart.constructor(options || {}, function (e) {
                var _a;
                (_a = chart.callback) === null || _a === void 0 ? void 0 : _a.call(this, e);
                resolve(postprocessAndGetSVG(this));
            });
        });
    };
    /**
     * Apply styles from the shadow DOM.
     *
     * @internal
     * @function Highcharts.Exporting#applyShadowDOMStyles
     *
     * @param {Highcharts.Chart} chartCopy
     * The copy of a chart for the export process.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.applyShadowDOMStyles = function (chartCopy) {
        // Get the original chart
        var chart = this.chart, shadowStyles = [];
        // Set the original chart's container as the first node
        var node = chart.container, rootNode;
        // Find the shadow DOM root node
        while (node) {
            rootNode = node.getRootNode();
            if (rootNode && typeof rootNode.host === 'object') {
                break;
            }
            node = node.parentNode;
            rootNode = null;
        }
        // Append shadow DOM styles into copied chart's container so the
        // getComputedStyle sees them
        rootNode === null || rootNode === void 0 ? void 0 : rootNode.querySelectorAll('style').forEach(function (style) {
            var clonedStyle = style.cloneNode(true);
            chartCopy.container.appendChild(clonedStyle);
            // Store for the later removal
            shadowStyles.push(clonedStyle);
        });
        addEvent(chart, 'getSVG', function () {
            // Remove temporary Shadow DOM styles
            shadowStyles.forEach(function (style) {
                style.remove();
            });
        });
    };
    /**
     * Gets the SVG for export using the getSVG function with additional
     * options.
     *
     * @internal
     * @function Highcharts.Exporting#getSVGForExport
     *
     * @param {Highcharts.ExportingOptions} [exportingOptions]
     * The exporting options.
     * @param {Highcharts.Options} [chartOptions]
     * Additional chart options for the exported chart.
     *
     * @return {string}
     * The SVG representation of the rendered chart.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.getSVGForExport = function (exportingOptions, chartOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var currentExportingOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentExportingOptions = this.options;
                        return [4 /*yield*/, this.getSVG(merge({ chart: { borderRadius: 0 } }, currentExportingOptions.chartOptions, chartOptions, {
                                exporting: {
                                    sourceWidth: ((exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.sourceWidth) ||
                                        currentExportingOptions.sourceWidth),
                                    sourceHeight: ((exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.sourceHeight) ||
                                        currentExportingOptions.sourceHeight)
                                }
                            }), true)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Analyze inherited styles from stylesheets and add them inline.
     *
     * @internal
     * @function Highcharts.Exporting#inlineStyles
     *
     * @todo What are the border styles for text about? In general, text has a
     * lot of properties.
     *
     * @todo Make it work with IE9 and IE10.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.inlineStyles = function () {
        var _a;
        var denylist = Exporting.inlineDenylist, allowlist = Exporting.inlineAllowlist, // For IE
        defaultStyles = {};
        var dummySVG;
        // Create an iframe where we read default styles without pollution from
        // this body
        var iframe = createElement('iframe', void 0, {
            width: '1px',
            height: '1px',
            visibility: 'hidden'
        }, doc.body);
        var iframeDoc = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document;
        if (iframeDoc) {
            iframeDoc.body.appendChild(iframeDoc.createElementNS(SVG_NS, 'svg'));
        }
        /**
         * Call this on all elements and recurse to children.
         *
         * @internal
         * @function recurse
         *
         * @param {Highcharts.HTMLDOMElement | Highcharts.SVGSVGElement} node
         * Element child.
         */
        function recurse(node) {
            var filteredStyles = {};
            var styles, parentStyles, dummy, denylisted, allowlisted, i;
            /**
             * Check computed styles and whether they are in the allow/denylist
             * for styles or attributes.
             *
             * @internal
             * @function filterStyles
             *
             * @param {string|number|Highcharts.GradientColorObject|Highcharts.PatternObject|undefined} val
             * Style value.
             * @param {string} prop
             * Style property name.
             */
            function filterStyles(val, prop) {
                // Check against allowlist & denylist
                denylisted = allowlisted = false;
                if (allowlist.length) {
                    // Styled mode in IE has a allowlist instead. Exclude all
                    // props not in this list.
                    i = allowlist.length;
                    while (i-- && !allowlisted) {
                        allowlisted = allowlist[i].test(prop);
                    }
                    denylisted = !allowlisted;
                }
                // Explicitly remove empty transforms
                if (prop === 'transform' && val === 'none') {
                    denylisted = true;
                }
                i = denylist.length;
                while (i-- && !denylisted) {
                    if (prop.length > 1000 /* RegexLimits.shortLimit */) {
                        throw new Error('Input too long');
                    }
                    denylisted = (denylist[i].test(prop) ||
                        typeof val === 'function');
                }
                if (!denylisted) {
                    // If parent node has the same style, it gets inherited, no
                    // need to inline it. Top-level props should be diffed
                    // against parent (#7687).
                    if ((parentStyles[prop] !== val ||
                        node.nodeName === 'svg') &&
                        (defaultStyles[node.nodeName])[prop] !== val) {
                        // Attributes
                        if (!Exporting.inlineToAttributes ||
                            Exporting.inlineToAttributes.indexOf(prop) !== -1) {
                            if (val) {
                                node.setAttribute(Exporting.hyphenate(prop), val);
                            }
                            // Styles
                        }
                        else {
                            filteredStyles[prop] = val;
                        }
                    }
                }
            }
            if (iframeDoc &&
                node.nodeType === 1 &&
                Exporting.unstyledElements.indexOf(node.nodeName) === -1) {
                styles =
                    win.getComputedStyle(node, null);
                parentStyles = node.nodeName === 'svg' ?
                    {} :
                    win.getComputedStyle(node.parentNode, null);
                // Get default styles from the browser so that we don't have to
                // add these
                if (!defaultStyles[node.nodeName]) {
                    /*
                    If (!dummySVG) {
                        dummySVG = doc.createElementNS(H.SVG_NS, 'svg');
                        dummySVG.setAttribute('version', '1.1');
                        doc.body.appendChild(dummySVG);
                    }
                    */
                    dummySVG =
                        iframeDoc.getElementsByTagName('svg')[0];
                    dummy = iframeDoc.createElementNS(node.namespaceURI, node.nodeName);
                    dummySVG.appendChild(dummy);
                    // Get the defaults into a standard object (simple merge
                    // won't do)
                    var s = win.getComputedStyle(dummy, null), defaults = {};
                    // eslint-disable-next-line @typescript-eslint/no-for-in-array
                    for (var key in s) {
                        if (key.length < 1000 /* RegexLimits.shortLimit */ &&
                            typeof s[key] === 'string' &&
                            !/^\d+$/.test(key)) {
                            defaults[key] = s[key];
                        }
                    }
                    defaultStyles[node.nodeName] = defaults;
                    // Remove default fill, otherwise text disappears when
                    // exported
                    if (node.nodeName === 'text') {
                        delete defaultStyles.text.fill;
                    }
                    dummySVG.removeChild(dummy);
                }
                // Loop through all styles and add them inline if they are ok
                for (var p in styles) {
                    if (
                    // Some browsers put lots of styles on the prototype...
                    isFirefox ||
                        isMS ||
                        isSafari || // #16902
                        // ... Chrome puts them on the instance
                        Object.hasOwnProperty.call(styles, p)) {
                        filterStyles(styles[p], p);
                    }
                }
                // Apply styles
                css(node, filteredStyles);
                // Set default stroke width (needed at least for IE)
                if (node.nodeName === 'svg') {
                    node.setAttribute('stroke-width', '1px');
                }
                if (node.nodeName === 'text') {
                    return;
                }
                // Recurse
                [].forEach.call(node.children || node.childNodes, recurse);
            }
        }
        /**
         * Remove the dummy objects used to get defaults.
         *
         * @internal
         * @function tearDown
         */
        function tearDown() {
            dummySVG.parentNode.removeChild(dummySVG);
            // Remove trash from DOM that stayed after each exporting
            iframe.parentNode.removeChild(iframe);
        }
        recurse(this.chart.container.querySelector('svg'));
        tearDown();
    };
    /**
     * Get SVG of chart prepared for client side export. This converts embedded
     * images in the SVG to data URIs. It requires the regular exporting module.
     * The options and chartOptions arguments are passed to the getSVGForExport
     * function.
     *
     * @internal
     * @async
     * @function Highcharts.Exporting#localExport
     *
     * @param {Highcharts.ExportingOptions} exportingOptions
     * The exporting options.
     * @param {Highcharts.Options} chartOptions
     * Additional chart options for the exported chart.
     *
     * @return {Promise<string>}
     * The sanitized SVG.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.localExport = function (exportingOptions, chartOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var chart, exporting, 
            // After grabbing the SVG of the chart's copy container we need
            // to do sanitation on the SVG
            sanitize, 
            // Return true if the SVG contains images with external data.
            // With the boost module there are `image` elements with encoded
            // PNGs, these are supported by svg2pdf and should pass (#10243)
            hasExternalImages, chartCopyContainer, chartCopyOptions, href, images, unbindGetSVG, imagesArray, _i, imagesArray_1, image, dataURL, svgElement, sanitizedSVG, error_2;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        chart = this.chart, exporting = this, sanitize = function (svg) { return Exporting.sanitizeSVG(svg || '', chartCopyOptions); }, hasExternalImages = function () {
                            return [].some.call(chart.container.getElementsByTagName('image'), function (image) {
                                var href = image.getAttribute('href');
                                return (href !== '' &&
                                    typeof href === 'string' &&
                                    href.indexOf('data:') !== 0);
                            });
                        };
                        href = null;
                        // If we are on IE and in styled mode, add an allowlist to the
                        // renderer for inline styles that we want to pass through. There
                        // are so many styles by default in IE that we don't want to
                        // denylist them all
                        if (isMS && chart.styledMode && !Exporting.inlineAllowlist.length) {
                            Exporting.inlineAllowlist.push(/^blockSize/, /^border/, /^caretColor/, /^color/, /^columnRule/, /^columnRuleColor/, /^cssFloat/, /^cursor/, /^fill$/, /^fillOpacity/, /^font/, /^inlineSize/, /^length/, /^lineHeight/, /^opacity/, /^outline/, /^parentRule/, /^rx$/, /^ry$/, /^stroke/, /^textAlign/, /^textAnchor/, /^textDecoration/, /^transform/, /^vectorEffect/, /^visibility/, /^x$/, /^y$/);
                        }
                        if (!((isMS &&
                            (exportingOptions.type === 'application/pdf' ||
                                chart.container.getElementsByTagName('image').length &&
                                    exportingOptions.type !== 'image/svg+xml')) || (exportingOptions.type === 'application/pdf' &&
                            hasExternalImages()))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fallbackToServer(exportingOptions, new Error('Image type not supported for this chart/browser.'))];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                    case 2:
                        unbindGetSVG = addEvent(chart, 'getSVG', function (e) {
                            chartCopyOptions = e.chartCopy.options;
                            chartCopyContainer =
                                e.chartCopy.container.cloneNode(true);
                            images = chartCopyContainer && chartCopyContainer
                                .getElementsByTagName('image') || [];
                        });
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 15, 17, 18]);
                        // Trigger hook to get chart copy
                        return [4 /*yield*/, this.getSVGForExport(exportingOptions, chartOptions)];
                    case 4:
                        // Trigger hook to get chart copy
                        _d.sent();
                        imagesArray = images ? Array.from(images) : [];
                        _i = 0, imagesArray_1 = imagesArray;
                        _d.label = 5;
                    case 5:
                        if (!(_i < imagesArray_1.length)) return [3 /*break*/, 9];
                        image = imagesArray_1[_i];
                        href = image.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
                        if (!href) return [3 /*break*/, 7];
                        Exporting.objectURLRevoke = false;
                        return [4 /*yield*/, Exporting.imageToDataURL(href, (exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.scale) || 1, (exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.type) || 'image/png')];
                    case 6:
                        dataURL = _d.sent();
                        // Change image href in chart copy
                        image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', dataURL);
                        return [3 /*break*/, 8];
                    case 7:
                        image.parentNode.removeChild(image);
                        _d.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 5];
                    case 9:
                        svgElement = chartCopyContainer === null || chartCopyContainer === void 0 ? void 0 : chartCopyContainer.querySelector('svg');
                        if (!(svgElement &&
                            !((_c = (_b = (_a = exportingOptions.chartOptions) === null || _a === void 0 ? void 0 : _a.chart) === null || _b === void 0 ? void 0 : _b.style) === null || _c === void 0 ? void 0 : _c.fontFamily))) return [3 /*break*/, 11];
                        return [4 /*yield*/, Exporting.inlineFonts(svgElement)];
                    case 10:
                        _d.sent();
                        _d.label = 11;
                    case 11:
                        sanitizedSVG = sanitize(chartCopyContainer === null || chartCopyContainer === void 0 ? void 0 : chartCopyContainer.innerHTML);
                        if (!(sanitizedSVG.indexOf('<foreignObject') > -1 &&
                            exportingOptions.type !== 'image/svg+xml' &&
                            (isMS ||
                                exportingOptions.type === 'application/pdf'))) return [3 /*break*/, 12];
                        throw new Error('Image type not supported for charts with embedded HTML');
                    case 12: 
                    // Trigger SVG download
                    return [4 /*yield*/, exporting.downloadSVG(sanitizedSVG, extend({ filename: exporting.getFilename() }, exportingOptions))];
                    case 13:
                        // Trigger SVG download
                        _d.sent();
                        _d.label = 14;
                    case 14: 
                    // Return the sanitized SVG
                    return [2 /*return*/, sanitizedSVG];
                    case 15:
                        error_2 = _d.sent();
                        return [4 /*yield*/, this.fallbackToServer(exportingOptions, error_2)];
                    case 16:
                        _d.sent();
                        return [3 /*break*/, 18];
                    case 17:
                        // Clean up
                        unbindGetSVG();
                        return [7 /*endfinally*/];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Move the chart container(s) to another div.
     *
     * @internal
     * @function Highcharts.Exporting#moveContainers
     *
     * @param {Highcharts.HTMLDOMElement} moveTo
     * Move target.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.moveContainers = function (moveTo) {
        var chart = this.chart, scrollablePlotArea = chart.scrollablePlotArea;
        (
        // When scrollablePlotArea is active (#9533)
        scrollablePlotArea ?
            [
                scrollablePlotArea.fixedDiv,
                scrollablePlotArea.scrollingContainer
            ] :
            [chart.container]).forEach(function (div) {
            moveTo.appendChild(div);
        });
    };
    /**
     * Clears away other elements in the page and prints the chart as it is
     * displayed. By default, when the exporting module is enabled, a context
     * button with a drop down menu in the upper right corner accesses this
     * function.
     *
     * @sample highcharts/members/chart-print/
     * Print from a HTML button
     *
     * @function Highcharts.Exporting#print
     *
     * @emits Highcharts.Chart#event:beforePrint
     * @emits Highcharts.Chart#event:afterPrint
     *
     * @requires modules/exporting
     */
    Exporting.prototype.print = function () {
        var chart = this.chart;
        // Block the button while in printing mode
        if (this.isPrinting) {
            return;
        }
        Exporting.printingChart = chart;
        if (!isSafari) {
            this.beforePrint();
        }
        // Give the browser time to draw WebGL content, an issue that randomly
        // appears (at least) in Chrome ~67 on the Mac (#8708).
        setTimeout(function () {
            win.focus(); // #1510
            win.print();
            // Allow the browser to prepare before reverting
            if (!isSafari) {
                setTimeout(function () {
                    var _a;
                    (_a = chart.exporting) === null || _a === void 0 ? void 0 : _a.afterPrint();
                }, 1000);
            }
        }, 1);
    };
    /**
     * Add the buttons on chart load.
     *
     * @internal
     * @function Highcharts.Exporting#render
     *
     * @requires modules/exporting
     */
    Exporting.prototype.render = function () {
        var exporting = this, chart = exporting.chart, options = exporting.options, isDirty = (exporting === null || exporting === void 0 ? void 0 : exporting.isDirty) || !(exporting === null || exporting === void 0 ? void 0 : exporting.svgElements.length);
        exporting.buttonOffset = 0;
        if (exporting.isDirty) {
            exporting.destroy();
        }
        if (isDirty && options.enabled !== false) {
            exporting.events = [];
            exporting.group || (exporting.group = chart.renderer.g('exporting-group').attr({
                zIndex: 3 // #4955, // #8392
            }).add());
            objectEach(options === null || options === void 0 ? void 0 : options.buttons, function (button) {
                exporting.addButton(button);
            });
            exporting.isDirty = false;
        }
    };
    /**
     * Resolve CSS variables into hex colors.
     *
     * @internal
     * @function Highcharts.Exporting#resolveCSSVariables
     *
     * @requires modules/exporting
     */
    Exporting.prototype.resolveCSSVariables = function () {
        Array.from(this.chart.container.querySelectorAll('*')).forEach(function (element) {
            ['color', 'fill', 'stop-color', 'stroke'].forEach(function (prop) {
                var _a;
                var attrValue = element.getAttribute(prop);
                if (attrValue === null || attrValue === void 0 ? void 0 : attrValue.includes('var(')) {
                    element.setAttribute(prop, getComputedStyle(element).getPropertyValue(prop));
                }
                var styleValue = (_a = element.style) === null || _a === void 0 ? void 0 : _a[prop];
                if (styleValue === null || styleValue === void 0 ? void 0 : styleValue.includes('var(')) {
                    element.style[prop] =
                        getComputedStyle(element).getPropertyValue(prop);
                }
            });
        });
    };
    /**
     * Updates the exporting object with the provided exporting options.
     *
     * @internal
     * @function Highcharts.Exporting#update
     *
     * @param {Highcharts.ExportingOptions} exportingOptions
     * The exporting options to update with.
     * @param {boolean} [redraw=true]
     * Whether to redraw or not.
     *
     * @requires modules/exporting
     */
    Exporting.prototype.update = function (exportingOptions, redraw) {
        this.isDirty = true;
        merge(true, this.options, exportingOptions);
        if (pick(redraw, true)) {
            this.chart.redraw();
        }
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /** @internal */
    Exporting.inlineAllowlist = [];
    /**
     * These CSS properties are not inlined. Remember camelCase.
     *
     * @internal
     */
    Exporting.inlineDenylist = [
        /-/, // In Firefox, both hyphened and camelCased names are listed
        /^(clipPath|cssText|d|height|width)$/, // Full words
        /^font$/, // More specific props are set
        /[lL]ogical(Width|Height)$/,
        /^parentRule$/,
        /^(cssRules|ownerRules)$/, // #19516 read-only properties
        /perspective/,
        /TapHighlightColor/,
        /^transition/,
        /^length$/, // #7700
        /^\d+$/ // #17538
    ];
    /**
     * These ones are translated to attributes rather than styles.
     *
     * @internal
     */
    Exporting.inlineToAttributes = [
        'fill',
        'stroke',
        'strokeLinecap',
        'strokeLinejoin',
        'strokeWidth',
        'textAnchor',
        'x',
        'y'
    ];
    /**
     * Milliseconds to defer image load event handlers to offset IE bug
     *
     * @internal
     */
    Exporting.loadEventDeferDelay = isMS ? 150 : 0;
    /** @internal */
    Exporting.unstyledElements = [
        'clipPath',
        'defs',
        'desc'
    ];
    return Exporting;
}());
export { Exporting };
/* *
 *
 *  Class Namespace
 *
 * */
(function (Exporting) {
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
     * @param {SVGRendererClass} SVGRendererClass
     * SVGRenderer class.
     *
     * @requires modules/exporting
     */
    function compose(ChartClass, SVGRendererClass) {
        ExportingSymbols.compose(SVGRendererClass);
        Fullscreen.compose(ChartClass);
        // Check the composition registry for the Exporting
        if (!pushUnique(composed, 'Exporting')) {
            return;
        }
        // Adding wrappers for the deprecated functions
        extend(Chart.prototype, {
            exportChart: function (exportingOptions, chartOptions) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, ((_a = this.exporting) === null || _a === void 0 ? void 0 : _a.exportChart(exportingOptions, chartOptions))];
                            case 1:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            },
            getChartHTML: function (applyStyleSheets) {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.getChartHTML(applyStyleSheets);
            },
            getFilename: function () {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.getFilename();
            },
            getSVG: function (chartOptions) {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.getSVG(chartOptions, false);
            },
            print: function () {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.print();
            }
        });
        ChartClass.prototype.callbacks.push(chartCallback);
        addEvent(ChartClass, 'afterInit', onChartAfterInit);
        addEvent(ChartClass, 'layOutTitle', onChartLayOutTitle);
        if (isSafari) {
            win.matchMedia('print').addListener(function (mqlEvent) {
                var _a, _b;
                if (!Exporting.printingChart) {
                    return void 0;
                }
                if (mqlEvent.matches) {
                    (_a = Exporting.printingChart.exporting) === null || _a === void 0 ? void 0 : _a.beforePrint();
                }
                else {
                    (_b = Exporting.printingChart.exporting) === null || _b === void 0 ? void 0 : _b.afterPrint();
                }
            });
        }
        // Update with defaults of the exporting module
        setOptions(ExportingDefaults);
    }
    Exporting.compose = compose;
    /**
     * Function that is added to the callbacks array that runs on chart load.
     *
     * @internal
     * @function Highcharts#chartCallback
     *
     * @param {Highcharts.Chart} chart
     * The chart instance.
     *
     * @requires modules/exporting
     */
    function chartCallback(chart) {
        var exporting = chart.exporting;
        if (exporting) {
            exporting.render();
            // Add the exporting buttons on each chart redraw
            addEvent(chart, 'redraw', function () {
                var _a;
                (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.render();
            });
            // Destroy the export elements at chart destroy
            addEvent(chart, 'destroy', function () {
                var _a;
                (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.destroy();
            });
        }
        // Uncomment this to see a button directly below the chart, for quick
        // testing of export
        // let button, viewImage, viewSource;
        // if (!chart.renderer.forExport) {
        //     viewImage = async function (): Promise<void> {
        //         const div = doc.createElement('div');
        //         div.style.margin = '10px';
        //         div.innerHTML = await chart.exporting?.getSVGForExport() ||
        //             '';
        //         chart.renderTo.parentNode.appendChild(div);
        //     };
        //     viewSource = async function (): Promise<void> {
        //         const pre = doc.createElement('pre');
        //         pre.style.margin = '10px';
        //         pre.innerHTML = (
        //             await chart.exporting?.getSVGForExport() || ''
        //         )
        //             .replace(/</g, '\n&lt;')
        //             .replace(/>/g, '&gt;');
        //         chart.renderTo.parentNode.appendChild(pre);
        //     };
        //     viewImage().catch;
        //     // View SVG Image
        //     button = doc.createElement('button');
        //     button.style.margin = '10px';
        //     button.innerHTML = 'View SVG Image';
        //     chart.renderTo.parentNode.appendChild(button);
        //     button.onclick = viewImage;
        //     // View SVG Source
        //     button = doc.createElement('button');
        //     button.innerHTML = 'View SVG Source';
        //     chart.renderTo.parentNode.appendChild(button);
        //     button.onclick = viewSource;
        // }
    }
    /**
     * Add update methods to handle chart.update and chart.exporting.update and
     * chart.navigation.update. These must be added to the chart instance rather
     * than the Chart prototype in order to use the chart instance inside the
     * update function.
     *
     * @internal
     * @function Highcharts#onChartAfterInit
     *
     * @requires modules/exporting
     */
    function onChartAfterInit() {
        var chart = this;
        // Create the exporting instance
        if (chart.options.exporting) {
            /**
             * Exporting object.
             *
             * @name Highcharts.Chart#exporting
             * @type {Highcharts.Exporting}
             */
            chart.exporting = new Exporting(chart, chart.options.exporting);
            // Register update() method for navigation. Cannot be set the same
            // way as for exporting, because navigation options are shared with
            // bindings which has separate update() logic.
            ChartNavigationComposition
                .compose(chart).navigation
                .addUpdate(function (options, redraw) {
                if (chart.exporting) {
                    chart.exporting.isDirty = true;
                    merge(true, chart.options.navigation, options);
                    if (pick(redraw, true)) {
                        chart.redraw();
                    }
                }
            });
        }
    }
    /**
     * On layout of titles (title, subtitle and caption), adjust the `alignTo`
     * box to avoid the context menu button.
     *
     * @internal
     * @function Highcharts#onChartLayOutTitle
     *
     * @requires modules/exporting
     */
    function onChartLayOutTitle(_a) {
        var _b, _c, _d, _e;
        var alignTo = _a.alignTo, key = _a.key, textPxLength = _a.textPxLength;
        var exportingOptions = this.options.exporting, _f = merge((_b = this.options.navigation) === null || _b === void 0 ? void 0 : _b.buttonOptions, (_c = exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.buttons) === null || _c === void 0 ? void 0 : _c.contextButton), align = _f.align, _g = _f.buttonSpacing, buttonSpacing = _g === void 0 ? 0 : _g, verticalAlign = _f.verticalAlign, _h = _f.width, width = _h === void 0 ? 0 : _h, space = alignTo.width - textPxLength, widthAdjust = width + buttonSpacing;
        if (((_d = exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.enabled) !== null && _d !== void 0 ? _d : true) &&
            key === 'title' &&
            align === 'right' &&
            verticalAlign === 'top') {
            if (space < 2 * widthAdjust) {
                if (space < widthAdjust) {
                    alignTo.width -= widthAdjust;
                }
                else if (((_e = this.title) === null || _e === void 0 ? void 0 : _e.alignValue) !== 'left') {
                    alignTo.x -= widthAdjust - space / 2;
                }
            }
        }
    }
})(Exporting || (Exporting = {}));
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Gets fired after a chart is printed through the context menu item or the
 * Chart.print method.
 *
 * @callback Highcharts.ExportingAfterPrintCallbackFunction
 *
 * @param {Highcharts.Chart} this
 * The chart on which the event occurred.
 * @param {global.Event} event
 * The event that occurred.
 */
/**
 * Gets fired before a chart is printed through the context menu item or the
 * Chart.print method.
 *
 * @callback Highcharts.ExportingBeforePrintCallbackFunction
 *
 * @param {Highcharts.Chart} this
 * The chart on which the event occurred.
 * @param {global.Event} event
 * The event that occurred.
 */
/**
 * Function to call if the offline-exporting module fails to export a chart on
 * the client side.
 *
 * @callback Highcharts.ExportingErrorCallbackFunction
 *
 * @param {Highcharts.ExportingOptions} options
 * The exporting options.
 * @param {global.Error} err
 * The error from the module.
 */
/**
 * Definition for a menu item in the context menu.
 *
 * @interface Highcharts.ExportingMenuObject
 */ /**
* The text for the menu item.
*
* @name Highcharts.ExportingMenuObject#text
* @type {string | undefined}
*/ /**
* If internationalization is required, the key to a language string.
*
* @name Highcharts.ExportingMenuObject#textKey
* @type {string | undefined}
*/ /**
* The click handler for the menu item.
*
* @name Highcharts.ExportingMenuObject#onclick
* @type {Highcharts.EventCallbackFunction<Highcharts.Chart> | undefined}
*/ /**
* Indicates a separator line instead of an item.
*
* @name Highcharts.ExportingMenuObject#separator
* @type {boolean | undefined}
*/
/**
 * Possible MIME types for exporting.
 *
 * @typedef {"image/png" | "image/jpeg" | "application/pdf" | "image/svg+xml"} Highcharts.ExportingMimeTypeValue
 */
(''); // Keeps doclets above in transpiled file
/* *
 *
 *  API Options
 *
 * */
/**
 * Fires after a chart is printed through the context menu item or the
 * `Chart.print` method.
 *
 * @sample highcharts/chart/events-beforeprint-afterprint/
 * Rescale the chart to print
 *
 * @type {Highcharts.ExportingAfterPrintCallbackFunction}
 * @since 4.1.0
 * @context Highcharts.Chart
 * @requires modules/exporting
 * @apioption chart.events.afterPrint
 */
/**
 * Fires before a chart is printed through the context menu item or
 * the `Chart.print` method.
 *
 * @sample highcharts/chart/events-beforeprint-afterprint/
 * Rescale the chart to print
 *
 * @type {Highcharts.ExportingBeforePrintCallbackFunction}
 * @since 4.1.0
 * @context Highcharts.Chart
 * @requires modules/exporting
 * @apioption chart.events.beforePrint
 */
(''); // Keeps doclets above in transpiled file
