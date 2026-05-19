/* *
 *
 *  Highcharts module with textPath functionality.
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import H from '../Core/Globals.js';
import { addEvent, defined, extend, merge, pushUnique } from '../Shared/Utilities.js';
import { uniqueKey } from '../Core/Utilities.js';
var composed = H.composed, deg2rad = H.deg2rad;
/* *
 *
 *  Functions
 *
 * */
/**
 * Set a text path for a `text` or `label` element, allowing the text to
 * flow along a path.
 *
 * In order to unset the path for an existing element, call `setTextPath`
 * with `{ enabled: false }` as the second argument.
 *
 * Text path support is not bundled into `highcharts.js`, and requires the
 * `modules/textpath.js` file. However, it is included in the script files of
 * those series types that use it by default.
 *
 * @sample highcharts/members/renderer-textpath/ Text path demonstrated
 *
 * @internal
 * @function Highcharts.SVGElement#setTextPath
 *
 * @param {Highcharts.SVGElement|undefined} path
 *        Path to follow. If undefined, it allows changing options for the
 *        existing path.
 *
 * @param {Highcharts.DataLabelsTextPathOptionsObject} textPathOptions
 *        Options.
 *
 * @return {Highcharts.SVGElement} Returns the SVGElement for chaining.
 */
function setTextPath(path, textPathOptions) {
    var _this = this;
    var url = this.renderer.url, textWrapper = this.text || this, textPath = textWrapper.textPath, _a = merge(
    // Defaults
    {
        enabled: true,
        attributes: {
            dy: -5,
            startOffset: '50%',
            textAnchor: 'middle'
        }
    }, textPathOptions), attributes = _a.attributes, enabled = _a.enabled;
    path = path || (textPath && textPath.path);
    // Remove previously added event
    textPath === null || textPath === void 0 ? void 0 : textPath.undo();
    if (path && enabled) {
        var undo = addEvent(textWrapper, 'afterModifyTree', function (e) {
            if (path && enabled) {
                // Set ID for the path
                var textPathId = path.attr('id');
                if (!textPathId) {
                    path.attr('id', textPathId = uniqueKey());
                }
                // Set attributes for the <text>
                var textAttribs = {
                    // `dx`/`dy` options must by set on <text> (parent), the
                    // rest should be set on <textPath>
                    x: 0,
                    y: 0
                };
                if (defined(attributes.dx)) {
                    textAttribs.dx = attributes.dx;
                    delete attributes.dx;
                }
                if (defined(attributes.dy)) {
                    textAttribs.dy = attributes.dy;
                    delete attributes.dy;
                }
                textWrapper.attr(textAttribs);
                // Handle label properties
                _this.attr({ transform: '' });
                if (_this.box) {
                    _this.box = _this.box.destroy();
                }
                // Wrap the nodes in a textPath
                var children = e.nodes.slice(0);
                e.nodes.length = 0;
                e.nodes[0] = {
                    tagName: 'textPath',
                    attributes: extend(attributes, {
                        'text-anchor': attributes.textAnchor,
                        href: "".concat(url, "#").concat(textPathId)
                    }),
                    children: children
                };
            }
        });
        // Set the reference
        textWrapper.textPath = { path: path, undo: undo };
    }
    else {
        textWrapper.attr({ dx: 0, dy: 0 });
        delete textWrapper.textPath;
    }
    if (this.added) {
        // Rebuild text after added
        textWrapper.textCache = '';
        this.renderer.buildText(textWrapper);
    }
    return this;
}
/**
 * Attach a polygon to a bounding box if the element contains a textPath.
 *
 * @internal
 * @function Highcharts.SVGElement#setPolygon
 *
 * @param {any} event
 *        An event containing a bounding box object
 *
 * @return {Highcharts.BBoxObject} Returns the bounding box object.
 */
function setPolygon(event) {
    var _a;
    var bBox = event.bBox, tp = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector('textPath');
    if (tp) {
        var polygon = [], _b = this.renderer.fontMetrics(this.element), b_1 = _b.b, h = _b.h, descender_1 = h - b_1, lineCleanerRegex = new RegExp('(<tspan>|' +
            '<tspan(?!\\sclass="highcharts-br")[^>]*>|' +
            '<\\/tspan>)', 'g'), lines = tp
            .innerHTML
            .replace(lineCleanerRegex, '')
            .split(/<tspan class="highcharts-br"[^>]*>/), numOfLines = lines.length;
        // Calculate top and bottom coordinates for
        // either the start or the end of a single
        // character, and append it to the polygon.
        var appendTopAndBottom = function (charIndex, positionOfChar) {
            var x = positionOfChar.x, y = positionOfChar.y, rotation = (tp.getRotationOfChar(charIndex) - 90) * deg2rad, cosRot = Math.cos(rotation), sinRot = Math.sin(rotation);
            return [
                [
                    x - descender_1 * cosRot,
                    y - descender_1 * sinRot
                ],
                [
                    x + b_1 * cosRot,
                    y + b_1 * sinRot
                ]
            ];
        };
        for (var i = 0, lineIndex = 0; lineIndex < numOfLines; lineIndex++) {
            var line = lines[lineIndex], lineLen = line.length;
            for (var lineCharIndex = 0; lineCharIndex < lineLen; lineCharIndex += 5) {
                try {
                    var srcCharIndex = (i +
                        lineCharIndex +
                        lineIndex), _c = appendTopAndBottom(srcCharIndex, tp.getStartPositionOfChar(srcCharIndex)), lower = _c[0], upper = _c[1];
                    if (lineCharIndex === 0) {
                        polygon.push(upper);
                        polygon.push(lower);
                    }
                    else {
                        if (lineIndex === 0) {
                            polygon.unshift(upper);
                        }
                        if (lineIndex === numOfLines - 1) {
                            polygon.push(lower);
                        }
                    }
                }
                catch (_d) {
                    // Safari fails on getStartPositionOfChar even if the
                    // character is within the `textContent.length`
                    break;
                }
            }
            i += lineLen - 1;
            try {
                var srcCharIndex = i + lineIndex, charPos = tp.getEndPositionOfChar(srcCharIndex), _e = appendTopAndBottom(srcCharIndex, charPos), lower = _e[0], upper = _e[1];
                polygon.unshift(upper);
                polygon.unshift(lower);
            }
            catch (_f) {
                // Safari fails on getStartPositionOfChar even if the character
                // is within the `textContent.length`
                break;
            }
        }
        // Close it
        if (polygon.length) {
            polygon.push(polygon[0].slice());
        }
        bBox.polygon = polygon;
    }
    return bBox;
}
/**
 * Draw text along a textPath for a dataLabel.
 *
 * @internal
 * @function Highcharts.SVGElement#drawTextPath
 *
 * @param {any} event
 *        An event containing label options
 *
 * @return {void}
 */
function drawTextPath(event) {
    var _a;
    var labelOptions = event.labelOptions, point = event.point, textPathOptions = (labelOptions[point.formatPrefix + 'TextPath'] ||
        labelOptions.textPath);
    if (textPathOptions && !labelOptions.useHTML) {
        this.setTextPath(((_a = point.getDataLabelPath) === null || _a === void 0 ? void 0 : _a.call(point, this)) || point.graphic, textPathOptions);
        if (point.dataLabelPath &&
            !textPathOptions.enabled) {
            // Clean the DOM
            point.dataLabelPath = point.dataLabelPath.destroy();
        }
    }
}
/** @internal */
export function composeTextPath(SVGElementClass) {
    var _a;
    if (pushUnique(composed, 'TextPath')) {
        addEvent(SVGElementClass, 'afterGetBBox', setPolygon);
        addEvent(SVGElementClass, 'beforeAddingDataLabel', drawTextPath);
        SVGElementClass.prototype.setTextPath =
            (_a = SVGElementClass.prototype.setTextPath) !== null && _a !== void 0 ? _a : setTextPath;
    }
}
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Options for a label text which should follow marker's shape.
 * Border and background are disabled for a label that follows a
 * path.
 *
 * **Note:** Only SVG-based renderer supports this option. Setting
 * `useHTML` to true will disable this option.
 *
 * Text path support is not bundled into `highcharts.js`, and requires the
 * `modules/textpath.js` file. However, it is included in the script files of
 * those series types that use it by default.
 *
 * @declare   Highcharts.DataLabelsTextPathOptionsObject
 * @since     7.1.0
 * @apioption plotOptions.series.dataLabels.textPath
 */
/**
 * Presentation attributes for the text path.
 *
 * @type      {Highcharts.SVGAttributes}
 * @since     7.1.0
 * @default   { dy:-5, startOffset:'50%', textAnchor:'middle' }
 * @apioption plotOptions.series.dataLabels.textPath.attributes
 */
/**
 * Enable or disable `textPath` option for link's or marker's data
 * labels.
 *
 * @type      {boolean}
 * @since     7.1.0
 * @default   true
 * @apioption plotOptions.series.dataLabels.textPath.enabled
 */
(''); // Keep doclets above in transpiled file
