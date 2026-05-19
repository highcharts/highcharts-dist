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
import AST from './AST.js';
import H from '../../Globals.js';
var composed = H.composed, isFirefox = H.isFirefox;
import SVGElement from '../SVG/SVGElement.js';
import { css, defined, extend, getAlignFactor, isNumber, pInt, pushUnique } from '../../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
var HTMLElement = /** @class */ (function (_super) {
    __extends(HTMLElement, _super);
    /* *
     *
     *  Functions
     *
     * */
    function HTMLElement(renderer, nodeName) {
        var _this = _super.call(this, renderer, nodeName) || this;
        _this.foreignObject = renderer.createElement('foreignObject')
            .attr({
            zIndex: 2
        });
        _this.element.style.whiteSpace = 'nowrap';
        return _this;
    }
    /**
     * Compose
     * @internal
     */
    HTMLElement.compose = function (SVGRendererClass) {
        if (pushUnique(composed, 'HTMLElement')) {
            /**
             * Create a HTML text node. This is used by the SVG renderer `text`
             * and `label` functions through the `useHTML` parameter.
             *
             * @internal
             */
            SVGRendererClass.prototype.html = function (str, x, y) {
                return new HTMLElement(this, 'div')
                    // Set the default attributes
                    .attr({
                    text: str,
                    x: Math.round(x),
                    y: Math.round(y)
                });
            };
        }
    };
    /**
     * Get the correction in X and Y positioning as the element is rotated.
     * @internal
     */
    HTMLElement.prototype.getSpanCorrection = function (width, baseline, alignCorrection) {
        this.xCorr = -width * alignCorrection;
        this.yCorr = -baseline;
    };
    /**
     * Apply CSS to HTML elements. This is used in text within SVG rendering.
     * @internal
     */
    HTMLElement.prototype.css = function (styles) {
        var element = this.element, 
        // When setting or unsetting the width style, we need to update
        // transform (#8809)
        isSettingWidth = styles && 'width' in styles, textWidth = isSettingWidth && styles.width;
        var doTransform;
        if (isSettingWidth) {
            delete styles.width;
            this.textWidth = pInt(textWidth) || void 0;
            doTransform = true;
        }
        // Some properties require other properties to be set
        if ((styles === null || styles === void 0 ? void 0 : styles.textOverflow) === 'ellipsis') {
            styles.overflow = 'hidden';
            styles.whiteSpace = 'nowrap';
        }
        // Apply line clamp
        if (styles === null || styles === void 0 ? void 0 : styles.lineClamp) {
            styles.display = '-webkit-box';
            styles.WebkitLineClamp = styles.lineClamp;
            styles.WebkitBoxOrient = 'vertical';
            styles.overflow = 'hidden';
        }
        else if ((styles === null || styles === void 0 ? void 0 : styles.lineClamp) === 0) {
            // Disable the clamp by breaking the -webkit-box context (#22961)
            styles.display = 'inline-block';
        }
        // SVG natively supports setting font size as numbers. With HTML, the
        // font size should behave in the same way (#21624).
        if (isNumber(Number(styles === null || styles === void 0 ? void 0 : styles.fontSize))) {
            styles.fontSize += 'px';
        }
        extend(this.styles, styles);
        css(element, styles);
        // Now that all styles are applied, to the transform
        if (doTransform) {
            this.updateTransform();
        }
        return this;
    };
    /**
     * The useHTML method for calculating the bounding box based on offsets.
     * Called internally from the `SVGElement.getBBox` function and subsequently
     * rotated.
     *
     * @internal
     */
    HTMLElement.prototype.htmlGetBBox = function () {
        var element = this.element;
        return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    /**
     * Batch update styles and attributes related to transform
     *
     * @internal
     */
    HTMLElement.prototype.updateTransform = function () {
        var _this = this;
        // Aligning non added elements is expensive
        if (!this.added) {
            this.alignOnAdd = true;
            return;
        }
        var _a = this, element = _a.element, foreignObject = _a.foreignObject, oldTextWidth = _a.oldTextWidth, renderer = _a.renderer, rotation = _a.rotation, scaleX = _a.scaleX, _b = _a.styles, _c = _b.display, display = _c === void 0 ? 'inline-block' : _c, whiteSpace = _b.whiteSpace, _d = _a.textAlign, textAlign = _d === void 0 ? 'left' : _d, textWidth = _a.textWidth, _e = _a.x, x = _e === void 0 ? 0 : _e, _f = _a.y, y = _f === void 0 ? 0 : _f;
        // Get the pixel length of the text
        var getTextPxLength = function () {
            if (_this.textPxLength) {
                return _this.textPxLength;
            }
            // Reset multiline/ellipsis in order to read width (#4928, #5417)
            css(element, {
                width: '',
                whiteSpace: whiteSpace || 'nowrap'
            });
            return element.offsetWidth;
        };
        var currentTextTransform = [
            rotation,
            textAlign,
            element.innerHTML,
            textWidth,
            this.textAlign
        ].join(',');
        var baseline;
        css(element, {
            // Inline block must be set before we can read the offset width
            display: 'inline-block',
            verticalAlign: 'top'
        });
        // Update textWidth. Use the memoized textPxLength if possible, to avoid
        // the getTextPxLength function using elem.offsetWidth. Calling
        // offsetWidth affects rendering time as it forces layout (#7656).
        if (textWidth !== oldTextWidth) { // #983, #1254
            var textPxLength = getTextPxLength(), textWidthNum = textWidth || 0, willOverWrap = !renderer.styledMode &&
                element.style.textOverflow === '' &&
                element.style.webkitLineClamp;
            if ((textWidthNum > oldTextWidth ||
                textPxLength > textWidthNum ||
                willOverWrap) && (
            // Only set the width if the text is able to word-wrap, or
            // text-overflow is ellipsis (#9537)
            /[\-\s\u00AD]/.test(element.textContent || element.innerText) ||
                element.style.textOverflow === 'ellipsis')) {
                var usePxWidth = rotation ||
                    scaleX ||
                    textPxLength > textWidthNum;
                css(element, {
                    // #16261
                    width: usePxWidth && isNumber(textWidth) ?
                        textWidth + 'px' :
                        // Set width to prevent over-wrapping (#22609)
                        (willOverWrap ?
                            Math.min(
                            // +1 for rounding errors
                            textPxLength + 1, textWidthNum) + 'px' :
                            'auto'),
                    display: display,
                    whiteSpace: whiteSpace || 'normal' // #3331
                });
                this.oldTextWidth = textWidth;
            }
        }
        // In many cases (Firefox always, others on title layout) we need the
        // foreign object to have a larger width and height than its content, in
        // order to read its content's size
        foreignObject.attr({
            width: renderer.width,
            height: renderer.height
        });
        // Do the calculations and DOM access only if properties changed
        if (currentTextTransform !== this.cTT) {
            baseline = renderer.fontMetrics(element).b;
            this.getSpanCorrection(
            // Avoid elem.offsetWidth if we can, it affects rendering time
            // heavily (#7656)
            ((!defined(rotation) &&
                !this.textWidth &&
                this.textPxLength) || // #7920
                element.offsetWidth), baseline, getAlignFactor(textAlign));
        }
        // Move the foreign object
        _super.prototype.updateTransform.call(this);
        if (isNumber(x) && isNumber(y)) {
            foreignObject.attr({
                x: x + (this.xCorr || 0),
                y: y + (this.yCorr || 0),
                // Add 4px to avoid ellipsis, since the body adds 3 px right
                // margin. We need one more because of rounding.
                width: element.offsetWidth + 4,
                // Add 1px to account for subpixel bounding boxes
                height: element.offsetHeight + 1,
                'transform-origin': element
                    .getAttribute('transform-origin') || '0 0'
            });
            // Reset, otherwise lineClamp will not work
            css(element, { display: display, textAlign: textAlign });
        }
        else if (isFirefox) {
            foreignObject.attr({
                width: 0,
                height: 0
            });
        }
        // Record current text transform
        this.cTT = currentTextTransform;
    };
    /**
     * Add the element to a group wrapper. For HTML elements, a parallel div
     * will be created for each ancestor SVG `g` element.
     *
     * @internal
     */
    HTMLElement.prototype.add = function (parentGroup) {
        var _a = this, foreignObject = _a.foreignObject, renderer = _a.renderer;
        // Foreign object
        foreignObject.add(parentGroup);
        _super.prototype.add.call(this, 
        // Create a body inside the foreignObject
        renderer.createElement('body')
            .attr({ xmlns: 'http://www.w3.org/1999/xhtml' })
            .css({
            background: 'transparent',
            // 3px is to avoid clipping on the right
            margin: '0 3px 0 0'
        })
            .add(foreignObject));
        if (this.alignOnAdd) {
            this.updateTransform();
        }
        return this;
    };
    /**
     * Text setter
     * @internal
     */
    HTMLElement.prototype.textSetter = function (value) {
        if (value !== this.textStr) {
            delete this.oldTextWidth;
            AST.setElementHTML(this.element, value !== null && value !== void 0 ? value : '');
            this.textStr = value;
            this.doTransform = true;
        }
    };
    /**
     * Align setter
     *
     * @internal
     */
    HTMLElement.prototype.alignSetter = function (value) {
        this.alignValue = this.textAlign = value;
        this.doTransform = true;
    };
    /**
     * Various setters which rely on update transform
     * @internal
     */
    HTMLElement.prototype.xSetter = function (value, key) {
        this[key] = value;
        this.doTransform = true;
    };
    return HTMLElement;
}(SVGElement));
// Some shared setters
var proto = HTMLElement.prototype;
proto.ySetter = proto.xSetter;
/* *
 *
 *  Default Export
 *
 * */
export default HTMLElement;
