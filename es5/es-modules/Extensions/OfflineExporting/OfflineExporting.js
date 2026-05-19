/* *
 *
 *  Client side exporting module
 *
 *  (c) 2015-2026 Highsoft AS
 *  Author: Torstein Hønsi / Øystein Moseng
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
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
import D from '../../Core/Defaults.js';
var getOptions = D.getOptions, setOptions = D.setOptions;
import { downloadURL, getScript } from '../../Shared/DownloadURL.js';
import G from '../../Core/Globals.js';
var composed = G.composed, doc = G.doc, win = G.win;
import OfflineExportingDefaults from './OfflineExportingDefaults.js';
import { error } from '../../Core/Utilities.js';
import { addEvent, extend, pushUnique } from '../../Shared/Utilities.js';
/* *
 *
 *  Composition
 *
 * */
var OfflineExporting;
(function (OfflineExporting) {
    /* *
     *
     *  Constants
     *
     * */
    var invalidLibURLErrorPrefix = 'Invalid exporting.libURL:';
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Check if the PDF export dependencies are already loaded on window.
     *
     * @private
     */
    function hasPdfDependencies() {
        var _a;
        return !!(win &&
            ((_a = win.jspdf) === null || _a === void 0 ? void 0 : _a.jsPDF) &&
            win.svg2pdf);
    }
    /**
     * Validate and normalize an opt-in libURL.
     *
     * @private
     */
    function normalizeOptInLibURL(optInLibURL) {
        var _a;
        if (!optInLibURL) {
            return void 0;
        }
        var normalizedLibURL = optInLibURL.slice(-1) !== '/' ?
            optInLibURL + '/' :
            optInLibURL;
        var isValidLibURL;
        if ((_a = win.URL) === null || _a === void 0 ? void 0 : _a.canParse) {
            isValidLibURL = win.URL.canParse(normalizedLibURL, doc.baseURI);
        }
        else {
            try {
                // The baseURI allows both absolute and relative paths.
                var parsedURL = new win.URL(normalizedLibURL, doc.baseURI);
                isValidLibURL = !!parsedURL.href;
            }
            catch (_b) {
                isValidLibURL = false;
            }
        }
        if (!isValidLibURL) {
            throw new Error("".concat(invalidLibURLErrorPrefix, " \"").concat(optInLibURL, "\". ") +
                'Provide a valid URL or path to the jsPDF and svg2pdf ' +
                'scripts.');
        }
        return normalizedLibURL;
    }
    /**
     * Composition function.
     *
     * @internal
     * @function compose
     *
     * @param {ExportingClass} ExportingClass
     * Exporting class.
     *
     * @requires modules/exporting
     * @requires modules/offline-exporting
     */
    function compose(ExportingClass) {
        var _a, _b, _c;
        // Add the downloadSVG event to the Exporting class for local PDF export
        addEvent(ExportingClass, 'downloadSVG', function (e) {
            return __awaiter(this, void 0, void 0, function () {
                var svg, exportingOptions, exporting, preventDefault, chart, _a, type, filename, scale, optInLibURL, normalizedLibURL, caughtError_1, exportError;
                var _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            svg = e.svg, exportingOptions = e.exportingOptions, exporting = e.exporting, preventDefault = e.preventDefault;
                            chart = exporting === null || exporting === void 0 ? void 0 : exporting.chart;
                            if (!((exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.type) === 'application/pdf')) return [3 /*break*/, 10];
                            // Prevent the default export behavior
                            preventDefault === null || preventDefault === void 0 ? void 0 : preventDefault();
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 8, , 10]);
                            _a = G.Exporting.prepareImageOptions(exportingOptions), type = _a.type, filename = _a.filename, scale = _a.scale;
                            optInLibURL = exportingOptions.libURL ||
                                ((_b = chart === null || chart === void 0 ? void 0 : chart.options.exporting) === null || _b === void 0 ? void 0 : _b.libURL);
                            normalizedLibURL = normalizeOptInLibURL(optInLibURL);
                            if (!(type === 'application/pdf')) return [3 /*break*/, 7];
                            if (!!hasPdfDependencies()) return [3 /*break*/, 5];
                            if (!normalizedLibURL) {
                                throw new Error('PDF export requires jsPDF and svg2pdf.');
                            }
                            if (!!((_c = win.jspdf) === null || _c === void 0 ? void 0 : _c.jsPDF)) return [3 /*break*/, 3];
                            return [4 /*yield*/, getScript("".concat(normalizedLibURL, "jspdf.js"))];
                        case 2:
                            _d.sent();
                            _d.label = 3;
                        case 3:
                            if (!!win.svg2pdf) return [3 /*break*/, 5];
                            return [4 /*yield*/, getScript("".concat(normalizedLibURL, "svg2pdf.js"))];
                        case 4:
                            _d.sent();
                            _d.label = 5;
                        case 5: 
                        // Call the PDF download if SVG element found
                        return [4 /*yield*/, downloadPDF(svg, scale, filename, exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.pdfFont)];
                        case 6:
                            // Call the PDF download if SVG element found
                            _d.sent();
                            _d.label = 7;
                        case 7: return [3 /*break*/, 10];
                        case 8:
                            caughtError_1 = _d.sent();
                            exportError = caughtError_1;
                            if ((exportingOptions === null || exportingOptions === void 0 ? void 0 : exportingOptions.fallbackToExportServer) !==
                                false &&
                                exportError.message.indexOf(invalidLibURLErrorPrefix) === 0) {
                                error("".concat(exportError.message, " Falling back to ") +
                                    'export server.', false, chart);
                            }
                            // Try to fallback to the server
                            return [4 /*yield*/, (exporting === null || exporting === void 0 ? void 0 : exporting.fallbackToServer(exportingOptions, exportError))];
                        case 9:
                            // Try to fallback to the server
                            _d.sent();
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        });
        // Check the composition registry for the OfflineExporting
        if (!pushUnique(composed, 'OfflineExporting')) {
            return;
        }
        addEvent(Chart, 'load', function () {
            var _a;
            // The load event also runs for server-export chart copies.
            // Skip warnings in that case.
            if (this.renderer.forExport || hasPdfDependencies()) {
                return;
            }
            if (!((_a = this.options.exporting) === null || _a === void 0 ? void 0 : _a.libURL)) {
                error('Warning: exporting.libURL not defined, PDF client side ' +
                    'export will not work', false, this);
            }
        });
        // Adding wrappers for the deprecated functions
        extend(Chart.prototype, {
            exportChartLocal: function (exportingOptions, chartOptions) {
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
            }
        });
        // Update with defaults of the offline exporting module
        setOptions(OfflineExportingDefaults);
        // Additionally, extend menuItems with the offline exporting variants
        var menuItems = (_c = (_b = (_a = getOptions().exporting) === null || _a === void 0 ? void 0 : _a.buttons) === null || _b === void 0 ? void 0 : _b.contextButton) === null || _c === void 0 ? void 0 : _c.menuItems;
        menuItems === null || menuItems === void 0 ? void 0 : menuItems.push('downloadPDF');
    }
    OfflineExporting.compose = compose;
    /**
     * Get data URL to an image of an SVG and call download on it options
     * object:
     * - **filename:** Name of resulting downloaded file without extension.
     * Default is `chart`.
     *
     * - **type:** File type of resulting download. Default is `image/png`.
     *
     * - **scale:** Scaling factor of downloaded image compared to source.
     * Default is `1`.
     * - **libURL:** URL pointing to location of dependency scripts to download
     * on demand.
     *
     * @function Highcharts.downloadSVGLocal
     * @deprecated
     *
     * @param {string} svg
     * The generated SVG
     *
     * @param {Highcharts.ExportingOptions} options
     * The exporting options
     *
     */
    function downloadSVGLocal(svg, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, G.Exporting.prototype.downloadSVG.call(void 0, svg, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    OfflineExporting.downloadSVGLocal = downloadSVGLocal;
    /**
     * Converts an SVG string into a PDF file and triggers its download. This
     * function processes the SVG, applies necessary font adjustments, converts
     * it to a PDF, and initiates the file download.
     *
     * @internal
     * @async
     * @function downloadPDF
     *
     * @param {string} svg
     * A string representation of the SVG markup to be converted into a PDF.
     * @param {number} scale
     * The scaling factor for the PDF output.
     * @param {string} filename
     * The name of the downloaded PDF file.
     * @param {Highcharts.PdfFontOptions} [pdfFont]
     * An optional object specifying URLs for different font variants (normal,
     * bold, italic, bolditalic).
     *
     * @return {Promise<void>}
     * A promise that resolves when the PDF has been successfully generated and
     * downloaded.
     *
     * @requires modules/exporting
     * @requires modules/offline-exporting
     */
    function downloadPDF(svg, scale, filename, pdfFont) {
        return __awaiter(this, void 0, void 0, function () {
            var svgNode, pdfData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        svgNode = preparePDF(svg, pdfFont);
                        if (!svgNode) return [3 /*break*/, 3];
                        // Loads all required fonts
                        return [4 /*yield*/, loadPdfFonts(svgNode, pdfFont)];
                    case 1:
                        // Loads all required fonts
                        _a.sent();
                        return [4 /*yield*/, svgToPdf(svgNode, 0, scale)];
                    case 2:
                        pdfData = _a.sent();
                        // Download the PDF
                        downloadURL(pdfData, filename);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Loads and registers custom fonts for PDF export if non-ASCII characters
     * are detected in the given SVG element. This function ensures that text
     * content with special characters is properly rendered in the exported PDF.
     *
     * It fetches font files (if provided in `pdfFont`), converts them to
     * base64, and registers them with jsPDF.
     *
     * @internal
     * @function loadPdfFonts
     *
     * @param {SVGElement} svgElement
     * The generated SVG element containing the text content to be exported.
     * @param {Highcharts.PdfFontOptions} [pdfFont]
     * An optional object specifying URLs for different font variants (normal,
     * bold, italic, bolditalic). If non-ASCII characters are not detected,
     * fonts are not loaded.
     *
     * @requires modules/exporting
     * @requires modules/offline-exporting
     */
    function loadPdfFonts(svgElement, pdfFont) {
        return __awaiter(this, void 0, void 0, function () {
            var hasNonASCII, addFont, variants, normalBase64, _loop_1, _i, variants_1, variant;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasNonASCII = function (s) { return (
                        // eslint-disable-next-line no-control-regex
                        /[^\u0000-\u007F\u200B]+/.test(s)); };
                        addFont = function (variant, base64) {
                            win.jspdf.jsPDF.API.events.push([
                                'initialized',
                                function () {
                                    var _a;
                                    this.addFileToVFS(variant, base64);
                                    this.addFont(variant, 'HighchartsFont', variant);
                                    if (!((_a = this.getFontList()) === null || _a === void 0 ? void 0 : _a.HighchartsFont)) {
                                        this.setFont('HighchartsFont');
                                    }
                                }
                            ]);
                        };
                        // If there are no non-ASCII characters in the SVG, do not use bother
                        // downloading the font files
                        if (pdfFont && !hasNonASCII(svgElement.textContent || '')) {
                            pdfFont = void 0;
                        }
                        variants = ['normal', 'italic', 'bold', 'bolditalic'];
                        _loop_1 = function (variant) {
                            var url, response, blob_1, reader_1, base64, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        url = pdfFont === null || pdfFont === void 0 ? void 0 : pdfFont[variant];
                                        if (!url) return [3 /*break*/, 7];
                                        _c.label = 1;
                                    case 1:
                                        _c.trys.push([1, 5, , 6]);
                                        return [4 /*yield*/, win.fetch(url)];
                                    case 2:
                                        response = _c.sent();
                                        if (!response.ok) {
                                            throw new Error("Failed to fetch font: ".concat(url));
                                        }
                                        return [4 /*yield*/, response.blob()];
                                    case 3:
                                        blob_1 = _c.sent(), reader_1 = new FileReader();
                                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                                reader_1.onloadend = function () {
                                                    if (typeof reader_1.result === 'string') {
                                                        resolve(reader_1.result.split(',')[1]);
                                                    }
                                                    else {
                                                        reject(new Error('Failed to read font as base64'));
                                                    }
                                                };
                                                reader_1.onerror = reject;
                                                reader_1.readAsDataURL(blob_1);
                                            })];
                                    case 4:
                                        base64 = _c.sent();
                                        addFont(variant, base64);
                                        if (variant === 'normal') {
                                            normalBase64 = base64;
                                        }
                                        return [3 /*break*/, 6];
                                    case 5:
                                        _b = _c.sent();
                                        return [3 /*break*/, 6];
                                    case 6: return [3 /*break*/, 8];
                                    case 7:
                                        // For other variants, fall back to normal text weight/style
                                        if (normalBase64) {
                                            addFont(variant, normalBase64);
                                        }
                                        _c.label = 8;
                                    case 8: return [2 /*return*/];
                                }
                            });
                        };
                        _i = 0, variants_1 = variants;
                        _a.label = 1;
                    case 1:
                        if (!(_i < variants_1.length)) return [3 /*break*/, 4];
                        variant = variants_1[_i];
                        return [5 /*yield**/, _loop_1(variant)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Prepares an SVG for PDF export by ensuring proper text styling and
     * removing unnecessary elements. This function extracts an SVG element from
     * a given SVG string, applies font styles inherited from parent elements,
     * and removes text outlines and title elements to improve PDF rendering.
     *
     * @internal
     * @function preparePDF
     *
     * @param {string} svg
     * A string representation of the SVG markup.
     * @param {Highcharts.PdfFontOptions} [pdfFont]
     * An optional object specifying URLs for different font variants (normal,
     * bold, italic, bolditalic). If provided, the text elements are assigned a
     * custom PDF font.
     *
     * @return {SVGSVGElement | null}
     * Returns the parsed SVG element from the container or `null` if the SVG is
     * not found.
     *
     * @requires modules/exporting
     * @requires modules/offline-exporting
     */
    function preparePDF(svg, pdfFont) {
        var dummySVGContainer = doc.createElement('div');
        AST.setElementHTML(dummySVGContainer, svg);
        var textElements = dummySVGContainer.getElementsByTagName('text'), 
        // Copy style property to element from parents if it's not there.
        // Searches up hierarchy until it finds prop, or hits the chart
        // container
        setStylePropertyFromParents = function (el, propName) {
            var curParent = el;
            while (curParent && curParent !== dummySVGContainer) {
                if (curParent.style[propName]) {
                    var value = curParent.style[propName];
                    if (propName === 'fontSize' && /em$/.test(value)) {
                        value = Math.round(parseFloat(value) * 16) + 'px';
                    }
                    el.style[propName] = value;
                    break;
                }
                curParent = curParent.parentNode;
            }
        };
        var titleElements, outlineElements;
        // Workaround for the text styling. Making sure it does pick up
        // settings for parent elements.
        [].forEach.call(textElements, function (el) {
            // Workaround for the text styling. making sure it does pick up
            // the root element
            ['fontFamily', 'fontSize']
                .forEach(function (property) {
                setStylePropertyFromParents(el, property);
            });
            el.style.fontFamily = (pdfFont === null || pdfFont === void 0 ? void 0 : pdfFont.normal) ?
                // Custom PDF font
                'HighchartsFont' :
                // Generic font (serif, sans-serif etc)
                String(el.style.fontFamily &&
                    el.style.fontFamily.split(' ').splice(-1));
            // Workaround for plotband with width, removing title from text
            // nodes
            titleElements = el.getElementsByTagName('title');
            [].forEach.call(titleElements, function (titleElement) {
                el.removeChild(titleElement);
            });
            // Remove all .highcharts-text-outline elements, #17170
            outlineElements =
                el.getElementsByClassName('highcharts-text-outline');
            while (outlineElements.length > 0) {
                var outline = outlineElements[0];
                if (outline.parentNode) {
                    outline.parentNode.removeChild(outline);
                }
            }
        });
        return dummySVGContainer.querySelector('svg');
    }
    /**
     * Transform from PDF to SVG.
     *
     * @async
     * @internal
     * @function svgToPdf
     *
     * @param {Highcharts.SVGElement} svgElement
     * The SVG element to convert.
     * @param {number} margin
     * The margin to apply.
     * @param {number} scale
     * The scale of the SVG.
     *
     * @requires modules/exporting
     * @requires modules/offline-exporting
     */
    function svgToPdf(svgElement, margin, scale) {
        return __awaiter(this, void 0, void 0, function () {
            var width, height, pdfDoc, gradients, index, gradient, stops, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        width = (Number(svgElement.getAttribute('width')) + 2 * margin) *
                            scale, height = (Number(svgElement.getAttribute('height')) + 2 * margin) *
                            scale, pdfDoc = new win.jspdf.jsPDF(// eslint-disable-line new-cap
                        // Setting orientation to portrait if height exceeds width
                        height > width ? 'p' : 'l', 'pt', [width, height]);
                        // Workaround for #7090, hidden elements were drawn anyway. It comes
                        // down to https://github.com/yWorks/svg2pdf.js/issues/28. Check this
                        // later.
                        [].forEach.call(svgElement.querySelectorAll('*[visibility="hidden"]'), function (node) {
                            node.parentNode.removeChild(node);
                        });
                        gradients = svgElement.querySelectorAll('linearGradient');
                        for (index = 0; index < gradients.length; index++) {
                            gradient = gradients[index];
                            stops = gradient.querySelectorAll('stop');
                            i = 0;
                            while (i < stops.length &&
                                stops[i].getAttribute('offset') === '0' &&
                                stops[i + 1].getAttribute('offset') === '0') {
                                stops[i].remove();
                                i++;
                            }
                        }
                        // Workaround for #15135, zero width spaces, which Highcharts uses
                        // to break lines, are not correctly rendered in PDF. Replace it
                        // with a regular space and offset by some pixels to compensate.
                        [].forEach.call(svgElement.querySelectorAll('tspan'), function (tspan) {
                            if (tspan.textContent === '\u200B') {
                                tspan.textContent = ' ';
                                tspan.setAttribute('dx', -5);
                            }
                        });
                        // Transform from PDF to SVG
                        return [4 /*yield*/, pdfDoc.svg(svgElement, {
                                x: 0,
                                y: 0,
                                width: width,
                                height: height,
                                removeInvalid: true
                            })];
                    case 1:
                        // Transform from PDF to SVG
                        _a.sent();
                        // Return the output
                        return [2 /*return*/, pdfDoc.output('datauristring')];
                }
            });
        });
    }
})(OfflineExporting || (OfflineExporting = {}));
/* *
 *
 *  Default Export
 *
 * */
export default OfflineExporting;
