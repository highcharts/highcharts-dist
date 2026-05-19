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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import A from '../../Core/Animation/AnimationUtilities.js';
var getDeferredAnimation = A.getDeferredAnimation;
import AnnotationChart from './AnnotationChart.js';
import AnnotationDefaults from './AnnotationDefaults.js';
import ControllableRect from './Controllables/ControllableRect.js';
import ControllableCircle from './Controllables/ControllableCircle.js';
import ControllableEllipse from './Controllables/ControllableEllipse.js';
import ControllablePath from './Controllables/ControllablePath.js';
import ControllableImage from './Controllables/ControllableImage.js';
import ControllableLabel from './Controllables/ControllableLabel.js';
import ControlPoint from './ControlPoint.js';
import ControlTarget from './ControlTarget.js';
import D from '../../Core/Defaults.js';
var defaultOptions = D.defaultOptions;
import EventEmitter from './EventEmitter.js';
import MockPoint from './MockPoint.js';
import PopupComposition from './Popup/PopupComposition.js';
import { destroyObjectProperties, erase, fireEvent, merge, pick, splat } from '../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * Hide or show annotation attached to points.
 * @internal
 */
function adjustVisibility(item) {
    var label = item.graphic, hasVisiblePoints = item.points.some(function (point) { return (point.series.visible !== false &&
        point.visible !== false); });
    if (label) {
        if (!hasVisiblePoints) {
            label.hide();
        }
        else if (label.visibility === 'hidden') {
            label.show();
        }
    }
}
/** @internal */
function getLabelsAndShapesOptions(baseOptions, newOptions) {
    var mergedOptions = {};
    ['labels', 'shapes'].forEach(function (name) {
        var someBaseOptions = baseOptions[name], newOptionsValue = newOptions[name];
        if (someBaseOptions) {
            if (newOptionsValue) {
                mergedOptions[name] = splat(newOptionsValue).map(function (basicOptions, i) {
                    return merge(someBaseOptions[i], basicOptions);
                });
            }
            else {
                mergedOptions[name] = baseOptions[name];
            }
        }
    });
    return mergedOptions;
}
/* *
 *
 *  Class
 *
 * */
/**
 * An annotation class which serves as a container for items like labels or
 * shapes. Created items are positioned on the chart either by linking them to
 * existing points or created mock points.
 *
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.Annotation
 *
 * @param {Highcharts.Chart} chart
 *        A chart instance
 * @param {Highcharts.AnnotationsOptions} userOptions
 *        The annotation options
 */
var Annotation = /** @class */ (function (_super) {
    __extends(Annotation, _super);
    /* *
     *
     *  Constructors
     *
     * */
    function Annotation(chart, userOptions) {
        var _this = _super.call(this) || this;
        /** @internal */
        _this.coll = 'annotations';
        /**
         * The chart that the annotation belongs to.
         *
         * @name Highcharts.Annotation#chart
         * @type {Highcharts.Chart}
         */
        _this.chart = chart;
        /**
         * The array of points which defines the annotation.
         *
         * @name Highcharts.Annotation#points
         * @type {Array<Highcharts.Point>}
         */
        _this.points = [];
        /**
         * The array of control points.
         *
         * @internal
         * @name Highcharts.Annotation#controlPoints
         * @type {Array<Annotation.ControlPoint>}
         */
        _this.controlPoints = [];
        _this.coll = 'annotations';
        _this.index = -1;
        /**
         * The array of labels which belong to the annotation.
         *
         * @internal
         * @name Highcharts.Annotation#labels
         * @type {Array<Highcharts.AnnotationLabelType>}
         */
        _this.labels = [];
        /**
         * The array of shapes which belong to the annotation.
         *
         * @internal
         * @name Highcharts.Annotation#shapes
         * @type {Array<Highcharts.AnnotationShapeType>}
         */
        _this.shapes = [];
        /**
         * The options for the annotations.
         *
         * @name Highcharts.Annotation#options
         * @type {Highcharts.AnnotationsOptions}
         */
        _this.setOptions(userOptions);
        /**
         * The user options for the annotations.
         *
         * @name Highcharts.Annotation#userOptions
         * @type {Highcharts.AnnotationsOptions}
         */
        _this.userOptions = userOptions;
        // Handle labels and shapes - those are arrays
        // Merging does not work with arrays (stores reference)
        var labelsAndShapes = getLabelsAndShapesOptions(_this.options, userOptions);
        _this.options.labels = labelsAndShapes.labels;
        _this.options.shapes = labelsAndShapes.shapes;
        /**
         * The callback that reports to the overlapping labels logic which
         * labels it should account for.
         *
         * @internal
         * @name Highcharts.Annotation#labelCollector
         * @type {Function}
         */
        /**
         * The group svg element.
         *
         * @name Highcharts.Annotation#group
         * @type {Highcharts.SVGElement}
         */
        /**
         * The group svg element of the annotation's shapes.
         *
         * @name Highcharts.Annotation#shapesGroup
         * @type {Highcharts.SVGElement}
         */
        /**
         * The group svg element of the annotation's labels.
         *
         * @name Highcharts.Annotation#labelsGroup
         * @type {Highcharts.SVGElement}
         */
        _this.init(chart, _this.options);
        return _this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    /** @internal */
    Annotation.compose = function (ChartClass, NavigationBindingsClass, PointerClass, SVGRendererClass) {
        AnnotationChart.compose(Annotation, ChartClass, PointerClass);
        ControllableLabel.compose(SVGRendererClass);
        ControllablePath.compose(ChartClass, SVGRendererClass);
        NavigationBindingsClass.compose(Annotation, ChartClass);
        PopupComposition.compose(NavigationBindingsClass, PointerClass);
    };
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    Annotation.prototype.addClipPaths = function () {
        this.setClipAxes();
        if (this.clipXAxis &&
            this.clipYAxis &&
            this.options.crop // #15399
        ) {
            this.clipRect = this.chart.renderer.clipRect(this.getClipBox());
        }
    };
    /** @internal */
    Annotation.prototype.addLabels = function () {
        var _this = this;
        var labelsOptions = (this.options.labels || []);
        labelsOptions.forEach(function (labelOptions, i) {
            var label = _this.initLabel(labelOptions, i);
            merge(true, labelsOptions[i], label.options);
        });
    };
    /** @internal */
    Annotation.prototype.addShapes = function () {
        var _this = this;
        var shapes = this.options.shapes || [];
        shapes.forEach(function (shapeOptions, i) {
            var shape = _this.initShape(shapeOptions, i);
            merge(true, shapes[i], shape.options);
        });
    };
    /**
     * Destroy the annotation. This function does not touch the chart
     * that the annotation belongs to (all annotations are kept in
     * the chart.annotations array) - it is recommended to use
     * {@link Highcharts.Chart#removeAnnotation} instead.
     *
     * @internal
     */
    Annotation.prototype.destroy = function () {
        var chart = this.chart, destroyItem = function (item) {
            item.destroy();
        };
        this.labels.forEach(destroyItem);
        this.shapes.forEach(destroyItem);
        this.clipXAxis = null;
        this.clipYAxis = null;
        erase(chart.labelCollectors, this.labelCollector);
        _super.prototype.destroy.call(this);
        this.destroyControlTarget();
        destroyObjectProperties(this, chart);
    };
    /**
     * Destroy a single item.
     * @internal
     */
    Annotation.prototype.destroyItem = function (item) {
        // Erase from shapes or labels array
        erase(this[item.itemType + 's'], item);
        item.destroy();
    };
    /** @internal */
    Annotation.prototype.getClipBox = function () {
        if (this.clipXAxis && this.clipYAxis) {
            return {
                x: this.clipXAxis.left,
                y: this.clipYAxis.top,
                width: this.clipXAxis.width,
                height: this.clipYAxis.height
            };
        }
    };
    /**
     * Initialize the annotation properties.
     * @internal
     */
    Annotation.prototype.initProperties = function (chart, userOptions) {
        this.setOptions(userOptions);
        var labelsAndShapes = getLabelsAndShapesOptions(this.options, userOptions);
        this.options.labels = labelsAndShapes.labels;
        this.options.shapes = labelsAndShapes.shapes;
        this.chart = chart;
        this.points = [];
        this.controlPoints = [];
        this.coll = 'annotations';
        this.userOptions = userOptions;
        this.labels = [];
        this.shapes = [];
    };
    /**
     * Initialize the annotation.
     * @internal
     */
    Annotation.prototype.init = function (_annotationOrChart, _userOptions, index) {
        if (index === void 0) { index = this.index; }
        var chart = this.chart, animOptions = this.options.animation;
        this.index = index;
        this.linkPoints();
        this.addControlPoints();
        this.addShapes();
        this.addLabels();
        this.setLabelCollector();
        this.animationConfig = getDeferredAnimation(chart, animOptions);
    };
    /**
     * Initialization of a single label.
     * @internal
     */
    Annotation.prototype.initLabel = function (labelOptions, index) {
        var _a;
        (_a = this.options.labelOptions) === null || _a === void 0 ? void 0 : _a.align;
        var options = merge(this.options.labelOptions, {
            controlPointOptions: this.options.controlPointOptions
        }, labelOptions), label = new ControllableLabel(this, options, index);
        label.itemType = 'label';
        this.labels.push(label);
        return label;
    };
    /**
     * Initialization of a single shape.
     *
     * @internal
     * @param {Object} shapeOptions
     * a config object for a single shape
     * @param {number} index
     * annotation may have many shapes, this is the shape's index saved in
     * shapes.index.
     */
    Annotation.prototype.initShape = function (shapeOptions, index) {
        var options = merge(this.options.shapeOptions, {
            controlPointOptions: this.options.controlPointOptions
        }, shapeOptions), shape = new Annotation.shapesMap[options.type || 'rect'](this, options, index);
        shape.itemType = 'shape';
        this.shapes.push(shape);
        return shape;
    };
    /** @internal */
    Annotation.prototype.redraw = function (animation) {
        this.linkPoints();
        if (!this.graphic) {
            this.render();
        }
        if (this.clipRect) {
            this.clipRect.animate(this.getClipBox());
        }
        this.redrawItems(this.shapes, animation);
        this.redrawItems(this.labels, animation);
        this.redrawControlPoints(animation);
    };
    /**
     * Redraw a single item.
     * @internal
     */
    Annotation.prototype.redrawItem = function (item, animation) {
        item.linkPoints();
        if (!item.shouldBeDrawn()) {
            this.destroyItem(item);
        }
        else {
            if (!item.graphic) {
                this.renderItem(item);
            }
            item.redraw(pick(animation, true) && item.graphic.placed);
            if (item.points.length) {
                adjustVisibility(item);
            }
        }
    };
    /** @internal */
    Annotation.prototype.redrawItems = function (items, animation) {
        var i = items.length;
        // Needs a backward loop. Labels/shapes array might be modified due to
        // destruction of the item
        while (i--) {
            this.redrawItem(items[i], animation);
        }
    };
    /**
     * See {@link Highcharts.Chart#removeAnnotation}.
     * @internal
     */
    Annotation.prototype.remove = function () {
        // Let chart.update() remove annotations on demand
        return this.chart.removeAnnotation(this);
    };
    /** @internal */
    Annotation.prototype.render = function () {
        var renderer = this.chart.renderer;
        this.graphic = renderer
            .g('annotation')
            .addClass(this.options.className || '')
            .attr({
            opacity: 0,
            zIndex: this.options.zIndex,
            visibility: this.options.visible ?
                'inherit' :
                'hidden'
        })
            .add();
        this.shapesGroup = renderer
            .g('annotation-shapes')
            .add(this.graphic);
        if (this.options.crop) { // #15399
            this.shapesGroup.clip(this.chart.plotBoxClip);
        }
        this.labelsGroup = renderer
            .g('annotation-labels')
            .attr({
            // `hideOverlappingLabels` requires translation
            translateX: 0,
            translateY: 0
        })
            .add(this.graphic);
        this.addClipPaths();
        if (this.clipRect) {
            this.graphic.clip(this.clipRect);
        }
        // Render shapes and labels before adding events (#13070).
        this.renderItems(this.shapes);
        this.renderItems(this.labels);
        this.addEvents();
        this.renderControlPoints();
    };
    /** @internal */
    Annotation.prototype.renderItem = function (item) {
        item.render(item.itemType === 'label' ?
            this.labelsGroup :
            this.shapesGroup);
    };
    /** @internal */
    Annotation.prototype.renderItems = function (items) {
        var i = items.length;
        while (i--) {
            this.renderItem(items[i]);
        }
    };
    /** @internal */
    Annotation.prototype.setClipAxes = function () {
        var _a, _b;
        var xAxes = this.chart.xAxis, yAxes = this.chart.yAxis, linkedAxes = __spreadArray(__spreadArray([], ((_a = this.options.labels) !== null && _a !== void 0 ? _a : []), true), ((_b = this.options.shapes) !== null && _b !== void 0 ? _b : []), true).reduce(function (axes, labelOrShape) {
            var _a;
            var point = labelOrShape &&
                (labelOrShape.point ||
                    (('points' in labelOrShape) &&
                        ((_a = labelOrShape.points) === null || _a === void 0 ? void 0 : _a[0])));
            return [
                xAxes[point && point.xAxis] || axes[0],
                yAxes[point && point.yAxis] || axes[1]
            ];
        }, []);
        this.clipXAxis = linkedAxes[0];
        this.clipYAxis = linkedAxes[1];
    };
    /** @internal */
    Annotation.prototype.setControlPointsVisibility = function (visible) {
        var setItemControlPointsVisibility = function (item) {
            item.setControlPointsVisibility(visible);
        };
        this.controlPoints.forEach(function (controlPoint) {
            controlPoint.setVisibility(visible);
        });
        this.shapes.forEach(setItemControlPointsVisibility);
        this.labels.forEach(setItemControlPointsVisibility);
    };
    /** @internal */
    Annotation.prototype.setLabelCollector = function () {
        var annotation = this;
        annotation.labelCollector = function () {
            return annotation.labels.reduce(function (labels, label) {
                if (!label.options.allowOverlap) {
                    labels.push(label.graphic);
                }
                return labels;
            }, []);
        };
        annotation.chart.labelCollectors.push(annotation.labelCollector);
    };
    /**
     * Set an annotation options.
     *
     * @internal
     * @param {Highcharts.AnnotationsOptions} userOptions
     *        User options for an annotation
     */
    Annotation.prototype.setOptions = function (userOptions) {
        var _a;
        var _b;
        this.options = merge(
        // Shared for all annotation types
        this.defaultOptions, 
        // The static typeOptions from the class
        (userOptions.type &&
            ((_a = this.defaultOptions.types) === null || _a === void 0 ? void 0 : _a[userOptions.type])) || {}, userOptions);
        // Safe access for `.typeOptions!`
        (_b = this.options).typeOptions || (_b.typeOptions = {});
    };
    /**
     * Set the annotation's visibility.
     *
     * @internal
     * @param {boolean} [visible]
     * Whether to show or hide an annotation. If the param is omitted, the
     * annotation's visibility is toggled.
     */
    Annotation.prototype.setVisibility = function (visible) {
        var options = this.options, navigation = this.chart.navigationBindings, visibility = pick(visible, !options.visible);
        this.graphic.attr('visibility', visibility ? 'inherit' : 'hidden');
        if (!visibility) {
            var setItemControlPointsVisibility = function (item) {
                item.setControlPointsVisibility(visibility);
            };
            this.shapes.forEach(setItemControlPointsVisibility);
            this.labels.forEach(setItemControlPointsVisibility);
            if (navigation.activeAnnotation === this &&
                navigation.popup &&
                navigation.popup.type === 'annotation-toolbar') {
                fireEvent(navigation, 'closePopup');
            }
        }
        options.visible = visibility;
    };
    /**
     * Updates an annotation.
     *
     * @function Highcharts.Annotation#update
     *
     * @param {Highcharts.AnnotationsOptions} userOptions
     *        New user options for the annotation.
     * @param {boolean} [redraw]
     *        Whether to redraw the chart's annotations.
     */
    Annotation.prototype.update = function (userOptions, redraw) {
        var chart = this.chart, labelsAndShapes = getLabelsAndShapesOptions(this.userOptions, userOptions), userOptionsIndex = chart.annotations.indexOf(this), options = merge(true, this.userOptions, userOptions);
        options.labels = labelsAndShapes.labels;
        options.shapes = labelsAndShapes.shapes;
        this.destroy();
        this.initProperties(chart, options);
        this.init(chart, options);
        // Update options in chart options, used in exporting (#9767, #21507):
        chart.options.annotations[userOptionsIndex] = this.options;
        this.isUpdating = true;
        if (pick(redraw, true)) {
            chart.drawAnnotations();
        }
        fireEvent(this, 'afterUpdate');
        this.isUpdating = false;
    };
    /** @internal */
    Annotation.ControlPoint = ControlPoint;
    /** @internal */
    Annotation.MockPoint = MockPoint;
    /**
     * An object uses for mapping between a shape type and a constructor.
     * To add a new shape type extend this object with type name as a key
     * and a constructor as its value.
     *
     * @internal
     */
    Annotation.shapesMap = {
        'rect': ControllableRect,
        'circle': ControllableCircle,
        'ellipse': ControllableEllipse,
        'path': ControllablePath,
        'image': ControllableImage
    };
    /** @internal */
    Annotation.types = {};
    return Annotation;
}(EventEmitter));
Annotation.prototype.defaultOptions = AnnotationDefaults;
defaultOptions.annotations = AnnotationDefaults;
/**
 * List of events for `annotation.options.events` that should not be
 * added to `annotation.graphic` but to the `annotation`.
 *
 * @internal
 * @type {Array<string>}
 */
Annotation.prototype.nonDOMEvents = ['add', 'afterUpdate', 'drag', 'remove'];
ControlTarget.compose(Annotation);
/* *
 *
 *  Default Export
 *
 * */
export default Annotation;
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Possible directions for draggable annotations. An empty string (`''`)
 * makes the annotation undraggable.
 *
 * @typedef {''|'x'|'xy'|'y'} Highcharts.AnnotationDraggableValue
 * @requires modules/annotations
 */
/**
 * @internal
 * @typedef {
 *          Highcharts.AnnotationControllableCircle|
 *          Highcharts.AnnotationControllableImage|
 *          Highcharts.AnnotationControllablePath|
 *          Highcharts.AnnotationControllableRect
 *     } Highcharts.AnnotationShapeType
 * @requires modules/annotations
 */
/**
 * @internal
 * @typedef {
 *          Highcharts.AnnotationControllableLabel
 *     } Highcharts.AnnotationLabelType
 * @requires modules/annotations
 */
/**
 * A point-like object, a mock point or a point used in series.
 * @internal
 * @typedef {
 *          Highcharts.AnnotationMockPoint|
 *          Highcharts.Point
 *     } Highcharts.AnnotationPointType
 * @requires modules/annotations
 */
/**
 * Annotation point, which can be:
 * - a string: the ID of an existing series point,
 * - an object: mock point options,
 * - a function: returning either mock point options object or a point.
 *
 * @requires modules/annotations
 * @typedef {
 *          string|
 *          Highcharts.AnnotationMockPointOptionsObject|
 *          Highcharts.AnnotationMockPointFunction
 *     } Highcharts.AnnotationMockPointOptions
 */
(''); // Keeps doclets above in JS file
