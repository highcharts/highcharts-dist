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
import A from '../Animation/AnimationUtilities.js';
var getDeferredAnimation = A.getDeferredAnimation;
import F from '../Templating.js';
var format = F.format;
import { defined, extend, fireEvent, getAlignFactor, isArray, isNumber, isString, merge, objectEach, pick, pInt, splat } from '../../Shared/Utilities.js';
/* *
 *
 *  Composition
 *
 * */
var DataLabel;
(function (DataLabel) {
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
     * Check if this series has data labels, either a series-level setting, or
     * individual. In case of individual point labels, this method is overridden
     * to always return true.
     * @internal
     */
    function hasDataLabels() {
        return mergedDataLabelOptions(this)
            .some(function (o) {
            return o === null || o === void 0 ? void 0 : o.enabled;
        });
    }
    /**
     * Align each individual data label.
     * @internal
     */
    function alignDataLabel(point, dataLabel, options, alignTo, isNew) {
        var _a;
        var series = this, chart = this.chart, inverted = this.isCartesian && chart.inverted, condemned = point.condemned, origin = point.origin, plotX = point.plotX, plotY = point.plotY, _b = options.crop, crop = _b === void 0 ? true : _b, distance = options.distance, _c = options.overflow, overflow = _c === void 0 ? 'justify' : _c, _d = options.rotation, rotation = _d === void 0 ? 0 : _d, alignFactor = getAlignFactor(options.align), verticalAlignFactor = getAlignFactor(options.verticalAlign), justify = rotation === 0 && !condemned && overflow === 'justify', pos = point.pos(), isInsidePlot = defined(plotX) &&
            defined(plotY) &&
            chart.isInsidePlot(plotX, Math.round(plotY), {
                inverted: inverted,
                paneCoordinates: true,
                series: series
            });
        // Math.round for rounding errors (#2683), alignTo to allow column
        // labels (#2700)
        var visible = this.visible &&
            point.visible &&
            defined(plotX) &&
            (series.forceDL ||
                condemned || // Allow it to fade out
                isInsidePlot ||
                (
                // If the data label is inside the align box, it is enough
                // that parts of the align box is inside the plot area
                // (#12370). When stacking, it is always inside regardless
                // of the option (#15148).
                pick(options.inside, !!this.options.stacking) &&
                    alignTo &&
                    chart.isInsidePlot(plotX, inverted ?
                        alignTo.x + 1 :
                        alignTo.y + alignTo.height - 1, {
                        inverted: inverted,
                        paneCoordinates: true,
                        series: series
                    })));
        if (pos) {
            var bBox = dataLabel.getBBox(), unrotatedbBox = dataLabel.getBBox(void 0, 0);
            // The alignment box is a singular point
            alignTo = extend({
                x: pos[0],
                y: Math.round(pos[1]),
                width: 0,
                height: 0
            }, alignTo || {});
            // Align to plot edges
            if (options.alignTo === 'plotEdges' && series.isCartesian) {
                alignTo[inverted ? 'x' : 'y'] = 0;
                alignTo[inverted ? 'width' : 'height'] = ((_a = this.yAxis) === null || _a === void 0 ? void 0 : _a.len) || 0;
            }
            // Add the text size for alignment calculation
            extend(options, {
                width: bBox.width,
                height: bBox.height
            });
            // Apply the distance
            var distX = 0, distY = 0;
            if (isNumber(distance) && !options.inside) {
                distX = distance * (1 - 2 * alignFactor);
                distY = distance * (1 - 2 * verticalAlignFactor);
            }
            // Align the label to the adjusted box with for unrotated bBox due
            // to rotationOrigin, which is based on unrotated label
            dataLabel.align(merge(options, {
                x: (options.x || 0) + distX,
                y: (options.y || 0) + distY,
                width: unrotatedbBox.width,
                height: unrotatedbBox.height
            }), false, alignTo, false);
            // Record for later use in justifyDataLabel
            dataLabel.distX = distX;
            dataLabel.distY = distY;
            // Modify for rotation
            dataLabel.alignAttr.x += alignFactor *
                (unrotatedbBox.width - bBox.width);
            dataLabel.alignAttr.y += verticalAlignFactor *
                (unrotatedbBox.height - bBox.height);
            // The placement attributes before justifyDataLabel correction
            var x = dataLabel.alignAttr.x +
                (bBox.width - unrotatedbBox.width) / 2, y = dataLabel.alignAttr.y +
                (bBox.height - unrotatedbBox.height) / 2;
            // Handle the data label position for entrance animation. Simply
            // offset the computed position by the difference between current
            // position and the origin.
            if (origin) {
                var originPos = point.pos(false, origin.x, origin.y);
                if (originPos) {
                    var offset = [
                        originPos[0] - pos[0],
                        originPos[1] - pos[1]
                    ];
                    if (series.is('column') || point.plotHigh) {
                        offset[inverted ? 0 : 1] = 0;
                    }
                    dataLabel.attr({
                        x: x + offset[0],
                        y: y + offset[1],
                        // Start at non-zero to avoid overlapping logic treating
                        // it as hidden
                        opacity: 0.01
                    });
                    dataLabel.placed = true;
                    isNew = false;
                }
            }
            // Set the position before potential justification
            var placeAttribs = {
                'text-align': dataLabel.alignAttr['text-align'] || 'center',
                x: x,
                y: y,
                rotationOriginX: (dataLabel.width || 0) / 2,
                rotationOriginY: (dataLabel.height || 0) / 2
            };
            if (condemned || !visible) {
                placeAttribs.opacity = 0;
            }
            dataLabel[dataLabel.placed ? 'animate' : 'attr'](placeAttribs);
            // Uncomment this block to visualize the bounding boxes used for
            // determining visibility
            // chart.renderer.rect(
            //     (dataLabel.alignAttr.x || 0) + chart.plotLeft,
            //     (dataLabel.alignAttr.y || 0) + chart.plotTop,
            //     bBox.width,
            //     bBox.height
            // ).attr({
            //     stroke: 'rgba(0, 0, 0, 0.3)',
            //     'stroke-width': 1,
            //     zIndex: 20
            // }).add();
            // chart.renderer.circle(
            //     chart.plotLeft + pick(dataLabel.alignAttr.x, 0),
            //     chart.plotTop + pick(dataLabel.alignAttr.y, 0),
            //     2
            // ).attr({
            //     fill: 'red',
            //     zIndex: 20
            // }).add();
            if (justify && visible && alignTo.height >= 0) { // #8830
                this.justifyDataLabel(dataLabel, options, dataLabel.alignAttr, bBox, alignTo, isNew);
            }
            else if (crop && !condemned) {
                var _e = dataLabel.alignAttr, x_1 = _e.x, y_1 = _e.y, correction = 1;
                // Check if the dataLabel should be visible.
                visible =
                    chart.isInsidePlot(x_1, y_1, {
                        paneCoordinates: true,
                        series: series
                    }) &&
                        chart.isInsidePlot(x_1 + bBox.width - correction, y_1 + bBox.height - correction, {
                            paneCoordinates: true,
                            series: series
                        });
            }
            // When we're using a shape, make it possible with a connector or an
            // arrow pointing to this point
            if (options.shape && !rotation) {
                dataLabel[isNew ? 'attr' : 'animate']({
                    anchorX: pos[0],
                    anchorY: pos[1]
                });
            }
        }
        // Show or hide based on the final aligned position
        dataLabel[isNew ? 'attr' : 'animate']({
            visibility: visible ? 'inherit' : 'hidden'
        });
        dataLabel.placed = visible;
    }
    /**
     * Handle the dataLabels.filter option.
     * @internal
     */
    function applyFilter(point, options) {
        var filter = options.filter;
        if (filter) {
            var op = filter.operator, prop = point[filter.property], val = filter.value;
            if ((op === '>' && prop > val) ||
                (op === '<' && prop < val) ||
                (op === '>=' && prop >= val) ||
                (op === '<=' && prop <= val) ||
                (op === '==' && prop == val) || // eslint-disable-line eqeqeq
                (op === '===' && prop === val) ||
                (op === '!=' && prop != val) || // eslint-disable-line eqeqeq
                (op === '!==' && prop !== val)) {
                return true;
            }
            return false;
        }
        return true;
    }
    /**
     * Compose the data label composition onto a series class.
     *
     * @internal
     * @function compose
     *
     * @param {Highcharts.Series} SeriesClass
     * The series class to compose onto.
     *
     * @return {void}
     */
    function compose(SeriesClass) {
        var seriesProto = SeriesClass.prototype;
        if (!seriesProto.initDataLabels) {
            seriesProto.initDataLabels = initDataLabels;
            seriesProto.initDataLabelsGroup = initDataLabelsGroup;
            seriesProto.alignDataLabel = alignDataLabel;
            seriesProto.drawDataLabels = drawDataLabels;
            seriesProto.justifyDataLabel = justifyDataLabel;
            seriesProto.mergeArrays = mergeArrays;
            seriesProto.hasDataLabels = hasDataLabels;
        }
    }
    DataLabel.compose = compose;
    /**
     * Create the SVGElement group for dataLabels.
     *
     * @internal
     * @function initDataLabelsGroup
     *
     * @param {number} index
     * The index of the data labels group.
     * @param {Highcharts.DataLabelOptions} [dataLabelsOptions]
     * Data label options for the group.
     *
     * @return {Highcharts.SVGElement}
     * The SVGElement group.
     */
    function initDataLabelsGroup(index, dataLabelsOptions) {
        var _a, _b, _c;
        fireEvent(this, 'initDataLabelsGroup', {
            index: index,
            zIndex: dataLabelsOptions === null || dataLabelsOptions === void 0 ? void 0 : dataLabelsOptions.zIndex
        });
        // Existing group or first time
        this.dataLabelsGroup = (_a = this.dataLabelsGroups) === null || _a === void 0 ? void 0 : _a[index];
        var group = this.plotGroup('dataLabelsGroup', 'data-labels', this.hasRendered ? 'inherit' : 'hidden', // #5133, #10220
        (_b = dataLabelsOptions === null || dataLabelsOptions === void 0 ? void 0 : dataLabelsOptions.zIndex) !== null && _b !== void 0 ? _b : 6, (_c = this.dataLabelsParentGroups) === null || _c === void 0 ? void 0 : _c[index]);
        this.dataLabelsGroups || (this.dataLabelsGroups = []);
        this.dataLabelsGroups[index] = group;
        // Keep reference to the 1st group
        this.dataLabelsGroup = this.dataLabelsGroups[0];
        return group;
    }
    /**
     * Init the data labels with the correct animation.
     *
     * @internal
     * @function initDataLabels
     *
     * @param {number} index
     * The index of the data labels group.
     * @param {Highcharts.AnimationOptions} animationConfig
     * The animation options.
     * @param {Highcharts.DataLabelOptions} [dataLabelsOptions]
     * Data label options for the group.
     *
     * @return {Highcharts.SVGElement}
     * The SVGElement group.
     */
    function initDataLabels(index, animationConfig, dataLabelsOptions) {
        var series = this, hasRendered = !!series.hasRendered;
        // Create a separate group for the data labels to avoid rotation
        var dataLabelsGroup = this.initDataLabelsGroup(index, dataLabelsOptions)
            .attr({ opacity: +hasRendered }); // #3300
        if (!hasRendered && dataLabelsGroup) {
            if (series.visible) { // #2597, #3023, #3024
                dataLabelsGroup.show();
            }
            if (series.options.animation) {
                dataLabelsGroup.animate({ opacity: 1 }, animationConfig);
            }
            else {
                dataLabelsGroup.attr({ opacity: 1 });
            }
        }
        return dataLabelsGroup;
    }
    /**
     * Draw the data labels.
     * @internal
     */
    function drawDataLabels(points) {
        var _this = this;
        var _a;
        points = points || this.points;
        var series = this, chart = series.chart, seriesOptions = series.options, renderer = chart.renderer, _b = chart.options.chart, backgroundColor = _b.backgroundColor, plotBackgroundColor = _b.plotBackgroundColor, contrastColor = renderer.getContrast((isString(plotBackgroundColor) && plotBackgroundColor) ||
            (isString(backgroundColor) && backgroundColor) ||
            'var(--highcharts-background-color)'), groupByIndex = [], seriesDlOptions = mergedDataLabelOptions(series);
        // Resolve the animation
        var _c = seriesDlOptions[0], animation = _c.animation, defer = _c.defer, animationConfig = defer ?
            getDeferredAnimation(chart, animation, series) :
            { defer: 0, duration: 0 };
        fireEvent(this, 'drawDataLabels');
        if ((_a = series.hasDataLabels) === null || _a === void 0 ? void 0 : _a.call(series)) {
            // Make the labels for each point
            points.concat(series.condemnedPoints).forEach(function (point) {
                var _a, _b, _c;
                var dataLabels = point.dataLabels || [], pointColor = point.color || series.color, 
                // Merge in series options for the point.
                // @note
                // dataLabelAttribs (like pointAttribs) would eradicate the
                // need for dlOptions, and simplify the section below.
                pointOptions = splat(mergeArrays(seriesDlOptions, 
                // The dlOptions prop is used in treemap
                point.dlOptions || ((_a = point.options) === null || _a === void 0 ? void 0 : _a.dataLabels)));
                // Handle each individual data label for this point
                pointOptions.forEach(function (labelOptions, i) {
                    var _a, _b;
                    // Options for one dataLabel
                    var labelEnabled = (labelOptions.enabled &&
                        (point.visible || point.dataLabelOnHidden) &&
                        // #2282, #4641, #7112, #10049
                        (!point.isNull || point.dataLabelOnNull) &&
                        applyFilter(point, labelOptions)), backgroundColor = labelOptions.backgroundColor, borderColor = labelOptions.borderColor, distance = labelOptions.distance, _c = labelOptions.style, style = _c === void 0 ? {} : _c, padding = splat(labelOptions.padding || 0);
                    var formatString, labelText, rotation, attr = {}, dataLabel = dataLabels[i], isNew = !dataLabel, labelBgColor;
                    if (labelEnabled) {
                        // Create individual options structure that can be
                        // extended without affecting others
                        formatString = pick(labelOptions[point.formatPrefix + 'Format'], labelOptions.format);
                        labelText = defined(formatString) ?
                            format(formatString, point, chart) :
                            (labelOptions[point.formatPrefix + 'Formatter'] ||
                                labelOptions.formatter).call(point, labelOptions, point);
                        rotation = labelOptions.rotation;
                        if (!chart.styledMode) {
                            // Determine the color
                            style.color = pick(labelOptions.color, style.color, isString(series.color) ? series.color : void 0, 'var(--highcharts-neutral-color-100)');
                            // Get automated contrast color
                            if (style.color === 'contrast') {
                                if (backgroundColor !== 'none') {
                                    labelBgColor = backgroundColor;
                                }
                                point.contrastColor = renderer.getContrast((labelBgColor !== 'auto' &&
                                    labelBgColor !== 'contrast' &&
                                    isString(labelBgColor) &&
                                    labelBgColor) ||
                                    (isString(pointColor) ? pointColor : ''));
                                style.color = ((labelBgColor &&
                                    labelBgColor !== 'contrast') || // #20007
                                    labelOptions.inside ||
                                    pInt(distance || 0) < 0 ||
                                    seriesOptions.stacking) ?
                                    point.contrastColor :
                                    contrastColor;
                            }
                            else {
                                delete point.contrastColor;
                            }
                            if (seriesOptions.cursor) {
                                style.cursor = seriesOptions.cursor;
                            }
                        }
                        attr = {
                            r: (_a = labelOptions.borderRadius) !== null && _a !== void 0 ? _a : 3,
                            rotation: rotation,
                            padding: padding[0],
                            paddingLeft: padding[3 % padding.length],
                            paddingRight: padding[1 % padding.length],
                            zIndex: 1
                        };
                        if (!chart.styledMode) {
                            attr.fill = backgroundColor === 'auto' ?
                                point.color :
                                backgroundColor;
                            attr.stroke = borderColor === 'auto' ?
                                point.color :
                                borderColor;
                            attr['stroke-width'] = labelOptions.borderWidth;
                        }
                        // Remove unused attributes (#947)
                        objectEach(attr, function (val, name) {
                            if (typeof val === 'undefined') {
                                delete attr[name];
                            }
                        });
                    }
                    // If the point is outside the plot area, or the label
                    // changes properties that we cannot change, destroy it and
                    // build a new one below. #678, #820.
                    if (dataLabel && (!labelEnabled ||
                        !defined(labelText) ||
                        // Changed useHTML value
                        !!(dataLabel.div ||
                            ((_b = dataLabel.text) === null || _b === void 0 ? void 0 : _b.foreignObject)) !== !!labelOptions.useHTML ||
                        (
                        // Change from no rotation to rotation and
                        // vice versa. Don't use defined() because
                        // rotation = 0 means also rotation = undefined
                        (!dataLabel.rotation ||
                            !labelOptions.rotation) &&
                            dataLabel.rotation !== labelOptions.rotation))) {
                        dataLabel = void 0;
                        isNew = true;
                    }
                    // Individual labels are disabled if the are explicitly
                    // disabled in the point options, or if they fall outside
                    // the plot area.
                    if (labelEnabled &&
                        defined(labelText) &&
                        labelText !== '') {
                        if (!dataLabel) {
                            // Create new label element
                            dataLabel = renderer.label(labelText, 0, 0, labelOptions.shape, void 0, void 0, labelOptions.useHTML, void 0, 'data-label');
                            dataLabel.addClass(' highcharts-data-label-color-' +
                                point.colorIndex +
                                ' ' + (labelOptions.className || '') +
                                ( // #3398
                                labelOptions.useHTML ?
                                    ' highcharts-tracker' :
                                    ''));
                        }
                        else {
                            // Use old element and just update text
                            attr.text = labelText;
                        }
                        // Store data label options for later access
                        if (dataLabel) {
                            dataLabel.options = labelOptions;
                            dataLabel.attr(attr);
                            if (!chart.styledMode) {
                                // Styles must be applied before add in order to
                                // read text bounding box
                                dataLabel.css(style).shadow(labelOptions.shadow);
                            }
                            else if (style.width) {
                                // In styled mode with a width property set,
                                // the width should be applied to the
                                // dataLabel. (#20499). These properties affect
                                // layout and must be applied also in styled
                                // mode.
                                dataLabel.css({
                                    width: style.width,
                                    textOverflow: style.textOverflow,
                                    whiteSpace: style.whiteSpace
                                });
                            }
                            fireEvent(dataLabel, 'beforeAddingDataLabel', { labelOptions: labelOptions, point: point });
                            // On the first occurrence, create a dataLabelsGroup
                            // for each data labels config (#24626)
                            var dataLabelsGroup = groupByIndex[i] = (groupByIndex[i] || _this.initDataLabels(i, animationConfig, labelOptions));
                            if (!dataLabel.added) {
                                dataLabel.add(dataLabelsGroup);
                            }
                            // Now the data label is created and placed at 0,0,
                            // so we need to align it
                            series.alignDataLabel(point, dataLabel, labelOptions, void 0, isNew);
                            dataLabel.isActive = true;
                            if (dataLabels[i] && dataLabels[i] !== dataLabel) {
                                dataLabels[i].destroy();
                            }
                            dataLabels[i] = dataLabel;
                        }
                    }
                });
                // Destroy and remove the inactive ones
                var j = dataLabels.length;
                while (j--) {
                    // The item can be undefined if a disabled data label is
                    // succeeded by an enabled one (#19457)
                    if (!((_b = dataLabels[j]) === null || _b === void 0 ? void 0 : _b.isActive)) {
                        (_c = dataLabels[j]) === null || _c === void 0 ? void 0 : _c.destroy();
                        dataLabels.splice(j, 1);
                    }
                    else {
                        dataLabels[j].isActive = false;
                    }
                }
                // Write back
                point.dataLabel = dataLabels[0];
                point.dataLabels = dataLabels;
            });
        }
        fireEvent(this, 'afterDrawDataLabels');
    }
    /**
     * If data labels fall partly outside the plot area, align them back in, in
     * a way that doesn't hide the point.
     * @internal
     */
    function justifyDataLabel(dataLabel, options, alignAttr, bBox, alignTo, isNew) {
        var chart = this.chart, align = options.align, verticalAlign = options.verticalAlign, _a = dataLabel.distX, distX = _a === void 0 ? 0 : _a, _b = dataLabel.distY, distY = _b === void 0 ? 0 : _b, padding = dataLabel.box ? 0 : (dataLabel.padding || 0), horizontalAxis = chart.inverted ? this.yAxis : this.xAxis, horizontalAxisShift = horizontalAxis ?
            horizontalAxis.left - chart.plotLeft : 0, verticalAxis = chart.inverted ? this.xAxis : this.yAxis, verticalAxisShift = verticalAxis ?
            verticalAxis.top - chart.plotTop : 0;
        var _c = options.x, x = _c === void 0 ? 0 : _c, _d = options.y, y = _d === void 0 ? 0 : _d, off, justifiedX, justifiedY;
        // Off left
        off = (alignAttr.x || 0) - distX + padding + horizontalAxisShift;
        if (off < 0) {
            if (align === 'right' && x >= 0) {
                options.align = 'left';
                options.inside = true;
                x -= distX;
            }
            else {
                x -= off;
            }
            justifiedX = true;
        }
        // Off right
        off = (alignAttr.x || 0) + bBox.width - distX - padding +
            horizontalAxisShift;
        if (off > chart.plotWidth) {
            if (align === 'left' && x <= 0) {
                options.align = 'right';
                options.inside = true;
                x -= distX;
            }
            else {
                x += chart.plotWidth - off;
            }
            justifiedX = true;
        }
        // Off top
        off = (alignAttr.y || 0) - distY + padding + verticalAxisShift;
        if (off < 0) {
            if (verticalAlign === 'bottom' && y >= 0) {
                options.verticalAlign = 'top';
                options.inside = true;
                y -= distY;
            }
            else {
                y -= off;
            }
            justifiedY = true;
        }
        // Off bottom
        off = (alignAttr.y || 0) + bBox.height - distY - padding +
            verticalAxisShift;
        if (off > chart.plotHeight) {
            if (verticalAlign === 'top' && y <= 0) {
                options.verticalAlign = 'bottom';
                options.inside = true;
                y -= distY;
            }
            else {
                y += chart.plotHeight - off;
            }
            justifiedY = true;
        }
        if (justifiedX || justifiedY) {
            options.x = justifiedX ? x : x + distX;
            options.y = justifiedY ? y : y + distY;
            dataLabel.placed = !isNew;
            dataLabel.align(options, void 0, alignTo);
        }
        return justifiedX || justifiedY;
    }
    /**
     * Merge two objects that can be arrays. If one of them is an array, the
     * other is merged into each element. If both are arrays, each element is
     * merged by index. If neither are arrays, we use normal merge.
     * @internal
     */
    function mergeArrays(one, two) {
        var res = [], i;
        if (isArray(one) && !isArray(two)) {
            res = one.map(function (el) {
                return merge(el, two);
            });
        }
        else if (isArray(two) && !isArray(one)) {
            res = two.map(function (el) {
                return merge(one, el);
            });
        }
        else if (!isArray(one) && !isArray(two)) {
            res = merge(one, two);
        }
        else if (isArray(one) && isArray(two)) {
            i = Math.max(one.length, two.length);
            while (i--) {
                res[i] = merge(one[i], two[i]);
            }
        }
        return res;
    }
    /**
     * Merge plotOptions and series options for dataLabels.
     * @internal
     */
    function mergedDataLabelOptions(series) {
        var _a, _b;
        var plotOptions = series.chart.options.plotOptions;
        return splat(mergeArrays(mergeArrays((_a = plotOptions === null || plotOptions === void 0 ? void 0 : plotOptions.series) === null || _a === void 0 ? void 0 : _a.dataLabels, (_b = plotOptions === null || plotOptions === void 0 ? void 0 : plotOptions[series.type]) === null || _b === void 0 ? void 0 : _b.dataLabels), series.options.dataLabels));
    }
})(DataLabel || (DataLabel = {}));
/* *
 *
 *  Default Export
 *
 * */
export default DataLabel;
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Callback JavaScript function to format the data label as a string. Note that
 * if a `format` is defined, the format takes precedence and the formatter is
 * ignored.
 *
 * @callback Highcharts.DataLabelsFormatterCallbackFunction
 *
 * @param {Highcharts.Point} this
 * Data label context to format
 *
 * @param {Highcharts.DataLabelsOptions} options
 * [API options](/highcharts/plotOptions.series.dataLabels) of the data label
 *
 * @return {number|string|null|undefined}
 * Formatted data label text
 */
/**
 * Values for handling data labels that flow outside the plot area.
 *
 * @typedef {"allow"|"justify"} Highcharts.DataLabelsOverflowValue
 */
''; // Keeps doclets above in JS file
