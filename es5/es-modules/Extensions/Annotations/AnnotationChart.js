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
'use strict';
import { addEvent, erase, find, fireEvent, isArray, isObject, pick, wrap } from '../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * Add an annotation to the chart after render time.
 *
 * @sample highcharts/annotations/add-annotation/
 *         Add annotation
 *
 * @function Highcharts.Chart#addAnnotation
 *
 * @param  {Highcharts.AnnotationsOptions} options
 *         The annotation options for the new, detailed annotation.
 *
 * @param {boolean} [redraw]
 *
 * @return {Highcharts.Annotation}
 *         The newly generated annotation.
 */
function chartAddAnnotation(options, redraw) {
    var annotation = this.initAnnotation(options);
    this.options.annotations.push(annotation.options);
    if (pick(redraw, true)) {
        annotation.redraw();
        annotation.graphic.attr({
            opacity: 1
        });
    }
    return annotation;
}
/** @internal */
function chartCallback() {
    var chart = this;
    chart.plotBoxClip = this.renderer.clipRect(this.plotBox);
    chart.controlPointsGroup = chart.renderer
        .g('control-points')
        .attr({ zIndex: 99 })
        .clip(chart.plotBoxClip)
        .add();
    chart.options.annotations.forEach(function (annotationOptions, i) {
        if (
        // Verify that it has not been previously added in a responsive rule
        !chart.annotations.some(function (annotation) {
            return annotation.options === annotationOptions;
        })) {
            var annotation = chart.initAnnotation(annotationOptions);
            chart.options.annotations[i] = annotation.options;
        }
    });
    chart.drawAnnotations();
    addEvent(chart, 'redraw', chart.drawAnnotations);
    addEvent(chart, 'destroy', function () {
        chart.plotBoxClip.destroy();
        chart.controlPointsGroup.destroy();
    });
    addEvent(chart, 'exportData', function (event) {
        var _a, _b, _c, _d, _e, _f;
        var annotations = chart.annotations, csvColumnHeaderFormatter = ((this.options.exporting &&
            this.options.exporting.csv) ||
            {}).columnHeaderFormatter, 
        // If second row doesn't have xValues
        // then it is a title row thus multiple level header is in use.
        multiLevelHeaders = !event.dataRows[1].xValues, annotationHeader = (chart.options.lang &&
            chart.options.lang.exportData &&
            chart.options.lang.exportData.annotationHeader), columnHeaderFormatter = function (index) {
            var s;
            if (csvColumnHeaderFormatter) {
                s = csvColumnHeaderFormatter(index);
                if (s !== false) {
                    return s;
                }
            }
            s = annotationHeader + ' ' + index;
            if (multiLevelHeaders) {
                return {
                    columnTitle: s,
                    topLevelColumnTitle: s
                };
            }
            return s;
        }, startRowLength = event.dataRows[0].length, annotationSeparator = (_c = (_b = (_a = chart.options.exporting) === null || _a === void 0 ? void 0 : _a.csv) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c.itemDelimiter, joinAnnotations = (_f = (_e = (_d = chart.options.exporting) === null || _d === void 0 ? void 0 : _d.csv) === null || _e === void 0 ? void 0 : _e.annotations) === null || _f === void 0 ? void 0 : _f.join;
        annotations.forEach(function (annotation) {
            var _a;
            if ((_a = annotation.options.labelOptions) === null || _a === void 0 ? void 0 : _a.includeInDataExport) {
                annotation.labels.forEach(function (label) {
                    if (label.options.text) {
                        var annotationText_1 = label.options.text;
                        label.points.forEach(function (points) {
                            var annotationX = points.x, xAxisIndex = points.series.xAxis ?
                                points.series.xAxis.index :
                                -1;
                            var wasAdded = false;
                            // Annotation not connected to any xAxis -
                            // add new row.
                            if (xAxisIndex === -1) {
                                var n = event.dataRows[0].length, newRow = new Array(n);
                                for (var i = 0; i < n; ++i) {
                                    newRow[i] = '';
                                }
                                newRow.push(annotationText_1);
                                newRow.xValues = [];
                                newRow.xValues[xAxisIndex] = annotationX;
                                event.dataRows.push(newRow);
                                wasAdded = true;
                            }
                            // Annotation placed on a exported data point
                            // - add new column
                            if (!wasAdded) {
                                event.dataRows.forEach(function (row) {
                                    if (!wasAdded &&
                                        row.xValues &&
                                        xAxisIndex !== void 0 &&
                                        annotationX === row.xValues[xAxisIndex]) {
                                        if (joinAnnotations &&
                                            row.length > startRowLength) {
                                            row[row.length - 1] += (annotationSeparator +
                                                annotationText_1);
                                        }
                                        else {
                                            row.push(annotationText_1);
                                        }
                                        wasAdded = true;
                                    }
                                });
                            }
                            // Annotation not placed on any exported data point,
                            // but connected to the xAxis - add new row
                            if (!wasAdded) {
                                var n = event.dataRows[0].length, newRow = new Array(n);
                                for (var i = 0; i < n; ++i) {
                                    newRow[i] = '';
                                }
                                newRow[0] = annotationX;
                                newRow.push(annotationText_1);
                                newRow.xValues = [];
                                if (xAxisIndex !== void 0) {
                                    newRow.xValues[xAxisIndex] = annotationX;
                                }
                                event.dataRows.push(newRow);
                            }
                        });
                    }
                });
            }
        });
        var maxRowLen = 0;
        event.dataRows.forEach(function (row) {
            maxRowLen = Math.max(maxRowLen, row.length);
        });
        var newRows = maxRowLen - event.dataRows[0].length;
        for (var i = 0; i < newRows; i++) {
            var header = columnHeaderFormatter(i + 1);
            if (multiLevelHeaders) {
                event.dataRows[0].push(header.topLevelColumnTitle);
                event.dataRows[1].push(header.columnTitle);
            }
            else {
                event.dataRows[0].push(header);
            }
        }
    });
}
/** @internal */
function chartDrawAnnotations() {
    this.plotBoxClip.attr(this.plotBox);
    this.annotations.forEach(function (annotation) {
        annotation.redraw();
        annotation.graphic.animate({
            opacity: 1
        }, annotation.animationConfig);
    });
}
/**
 * Remove an annotation from the chart.
 *
 * @function Highcharts.Chart#removeAnnotation
 *
 * @param {number|string|Highcharts.Annotation} idOrAnnotation
 *        The annotation's id or direct annotation object.
 */
function chartRemoveAnnotation(idOrAnnotation) {
    var annotations = this.annotations, annotation = (idOrAnnotation.coll === 'annotations') ?
        idOrAnnotation :
        find(annotations, function (annotation) {
            return annotation.options.id === idOrAnnotation;
        });
    if (annotation) {
        fireEvent(annotation, 'remove');
        erase(this.options.annotations, annotation.options);
        erase(annotations, annotation);
        annotation.destroy();
    }
}
/**
 * Create lookups initially.
 * @internal
 */
function onChartAfterInit() {
    var chart = this, annotationsOption = this.options.annotations, annotationsUserOption = this.userOptions.annotations;
    chart.annotations = [];
    if (!isArray(this.options.annotations)) {
        this.options.annotations = [];
    }
    if (isObject(annotationsUserOption, true) &&
        isObject(annotationsOption, true)) {
        this.options.annotations.push(annotationsOption);
    }
}
/** @internal */
function wrapPointerOnContainerMouseDown(proceed) {
    if (!this.chart.hasDraggedAnnotation) {
        proceed.apply(this, Array.prototype.slice.call(arguments, 1));
    }
}
/* *
 *
 *  Composition
 *
 * */
/** @internal */
var AnnotationChart;
(function (AnnotationChart) {
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    function compose(AnnotationClass, ChartClass, PointerClass) {
        var chartProto = ChartClass.prototype;
        if (!chartProto.addAnnotation) {
            var pointerProto = PointerClass.prototype;
            addEvent(ChartClass, 'afterInit', onChartAfterInit);
            chartProto.addAnnotation = chartAddAnnotation;
            chartProto.callbacks.push(chartCallback);
            chartProto.collectionsWithInit.annotations = [chartAddAnnotation];
            chartProto.collectionsWithUpdate.push('annotations');
            chartProto.drawAnnotations = chartDrawAnnotations;
            chartProto.removeAnnotation = chartRemoveAnnotation;
            chartProto.initAnnotation = function chartInitAnnotation(userOptions) {
                var Constructor = (AnnotationClass.types[userOptions.type] ||
                    AnnotationClass), annotation = new Constructor(this, userOptions);
                this.annotations.push(annotation);
                return annotation;
            };
            wrap(pointerProto, 'onContainerMouseDown', wrapPointerOnContainerMouseDown);
        }
    }
    AnnotationChart.compose = compose;
})(AnnotationChart || (AnnotationChart = {}));
/* *
 *
 *  Default Export
 *
 * */
export default AnnotationChart;
