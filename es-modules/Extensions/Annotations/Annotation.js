/* *
 *
 *  (c) 2009-2025 Highsoft, Black Label
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import A from '../../Core/Animation/AnimationUtilities.js';
const { getDeferredAnimation } = A;
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
const { defaultOptions } = D;
import EventEmitter from './EventEmitter.js';
import MockPoint from './MockPoint.js';
import PopupComposition from './Popup/PopupComposition.js';
import U from '../../Core/Utilities.js';
const { destroyObjectProperties, erase, fireEvent, merge, pick, splat } = U;
/* *
 *
 *  Functions
 *
 * */
/**
 * Hide or show annotation attached to points.
 * @private
 */
function adjustVisibility(item) {
    const label = item.graphic, hasVisiblePoints = item.points.some((point) => (point.series.visible !== false &&
        point.visible !== false));
    if (label) {
        if (!hasVisiblePoints) {
            label.hide();
        }
        else if (label.visibility === 'hidden') {
            label.show();
        }
    }
}
/**
 * @private
 */
function getLabelsAndShapesOptions(baseOptions, newOptions) {
    const mergedOptions = {};
    ['labels', 'shapes'].forEach((name) => {
        const someBaseOptions = baseOptions[name], newOptionsValue = newOptions[name];
        if (someBaseOptions) {
            if (newOptionsValue) {
                mergedOptions[name] = splat(newOptionsValue).map((basicOptions, i) => merge(someBaseOptions[i], basicOptions));
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
 * existing points or created mock points
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
class Annotation extends EventEmitter {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * @private
     */
    static compose(ChartClass, NavigationBindingsClass, PointerClass, SVGRendererClass) {
        AnnotationChart.compose(Annotation, ChartClass, PointerClass);
        ControllableLabel.compose(SVGRendererClass);
        ControllablePath.compose(ChartClass, SVGRendererClass);
        NavigationBindingsClass.compose(Annotation, ChartClass);
        PopupComposition.compose(NavigationBindingsClass, PointerClass);
    }
    /* *
     *
     *  Constructors
     *
     * */
    constructor(chart, userOptions) {
        super();
        this.coll = 'annotations';
        /**
         * The chart that the annotation belongs to.
         *
         * @name Highcharts.Annotation#chart
         * @type {Highcharts.Chart}
         */
        this.chart = chart;
        /**
         * The array of points which defines the annotation.
         * @private
         * @name Highcharts.Annotation#points
         * @type {Array<Highcharts.Point>}
         */
        this.points = [];
        /**
         * The array of control points.
         * @private
         * @name Highcharts.Annotation#controlPoints
         * @type {Array<Annotation.ControlPoint>}
         */
        this.controlPoints = [];
        this.coll = 'annotations';
        this.index = -1;
        /**
         * The array of labels which belong to the annotation.
         * @private
         * @name Highcharts.Annotation#labels
         * @type {Array<Highcharts.AnnotationLabelType>}
         */
        this.labels = [];
        /**
         * The array of shapes which belong to the annotation.
         * @private
         * @name Highcharts.Annotation#shapes
         * @type {Array<Highcharts.AnnotationShapeType>}
         */
        this.shapes = [];
        /**
         * The options for the annotations.
         *
         * @name Highcharts.Annotation#options
         * @type {Highcharts.AnnotationsOptions}
         */
        this.setOptions(userOptions);
        /**
         * The user options for the annotations.
         *
         * @name Highcharts.Annotation#userOptions
         * @type {Highcharts.AnnotationsOptions}
         */
        this.userOptions = userOptions;
        // Handle labels and shapes - those are arrays
        // Merging does not work with arrays (stores reference)
        const labelsAndShapes = getLabelsAndShapesOptions(this.options, userOptions);
        this.options.labels = labelsAndShapes.labels;
        this.options.shapes = labelsAndShapes.shapes;
        /**
         * The callback that reports to the overlapping labels logic which
         * labels it should account for.
         * @private
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
        this.init(chart, this.options);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    addClipPaths() {
        this.setClipAxes();
        if (this.clipXAxis &&
            this.clipYAxis &&
            this.options.crop // #15399
        ) {
            this.clipRect = this.chart.renderer.clipRect(this.getClipBox());
        }
    }
    /**
     * @private
     */
    addLabels() {
        const labelsOptions = (this.options.labels || []);
        labelsOptions.forEach((labelOptions, i) => {
            const label = this.initLabel(labelOptions, i);
            merge(true, labelsOptions[i], label.options);
        });
    }
    /**
     * @private
     */
    addShapes() {
        const shapes = this.options.shapes || [];
        shapes.forEach((shapeOptions, i) => {
            const shape = this.initShape(shapeOptions, i);
            merge(true, shapes[i], shape.options);
        });
    }
    /**
     * Destroy the annotation. This function does not touch the chart
     * that the annotation belongs to (all annotations are kept in
     * the chart.annotations array) - it is recommended to use
     * {@link Highcharts.Chart#removeAnnotation} instead.
     * @private
     */
    destroy() {
        const chart = this.chart, destroyItem = function (item) {
            item.destroy();
        };
        this.labels.forEach(destroyItem);
        this.shapes.forEach(destroyItem);
        this.clipXAxis = null;
        this.clipYAxis = null;
        erase(chart.labelCollectors, this.labelCollector);
        super.destroy();
        this.destroyControlTarget();
        destroyObjectProperties(this, chart);
    }
    /**
     * Destroy a single item.
     * @private
     */
    destroyItem(item) {
        // Erase from shapes or labels array
        erase(this[item.itemType + 's'], item);
        item.destroy();
    }
    /**
     * @private
     */
    getClipBox() {
        if (this.clipXAxis && this.clipYAxis) {
            return {
                x: this.clipXAxis.left,
                y: this.clipYAxis.top,
                width: this.clipXAxis.width,
                height: this.clipYAxis.height
            };
        }
    }
    /**
     * Initialize the annotation properties.
     * @private
     */
    initProperties(chart, userOptions) {
        this.setOptions(userOptions);
        const labelsAndShapes = getLabelsAndShapesOptions(this.options, userOptions);
        this.options.labels = labelsAndShapes.labels;
        this.options.shapes = labelsAndShapes.shapes;
        this.chart = chart;
        this.points = [];
        this.controlPoints = [];
        this.coll = 'annotations';
        this.userOptions = userOptions;
        this.labels = [];
        this.shapes = [];
    }
    /**
     * Initialize the annotation.
     * @private
     */
    init(_annotationOrChart, _userOptions, index = this.index) {
        const chart = this.chart, animOptions = this.options.animation;
        this.index = index;
        this.linkPoints();
        this.addControlPoints();
        this.addShapes();
        this.addLabels();
        this.setLabelCollector();
        this.animationConfig = getDeferredAnimation(chart, animOptions);
    }
    /**
     * Initialisation of a single label
     * @private
     */
    initLabel(labelOptions, index) {
        const options = merge(this.options.labelOptions, {
            controlPointOptions: this.options.controlPointOptions
        }, labelOptions), label = new ControllableLabel(this, options, index);
        label.itemType = 'label';
        this.labels.push(label);
        return label;
    }
    /**
     * Initialisation of a single shape
     * @private
     * @param {Object} shapeOptions
     * a config object for a single shape
     * @param {number} index
     * annotation may have many shapes, this is the shape's index saved in
     * shapes.index.
     */
    initShape(shapeOptions, index) {
        const options = merge(this.options.shapeOptions, {
            controlPointOptions: this.options.controlPointOptions
        }, shapeOptions), shape = new (Annotation.shapesMap[options.type])(this, options, index);
        shape.itemType = 'shape';
        this.shapes.push(shape);
        return shape;
    }
    /**
     * @private
     */
    redraw(animation) {
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
    }
    /**
     * Redraw a single item.
     * @private
     */
    redrawItem(item, animation) {
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
    }
    /**
     * @private
     */
    redrawItems(items, animation) {
        let i = items.length;
        // Needs a backward loop. Labels/shapes array might be modified due to
        // destruction of the item
        while (i--) {
            this.redrawItem(items[i], animation);
        }
    }
    /**
     * See {@link Highcharts.Chart#removeAnnotation}.
     * @private
     */
    remove() {
        // Let chart.update() remove annotations on demand
        return this.chart.removeAnnotation(this);
    }
    /**
     * @private
     */
    render() {
        const renderer = this.chart.renderer;
        this.graphic = renderer
            .g('annotation')
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
    }
    /**
     * @private
     */
    renderItem(item) {
        item.render(item.itemType === 'label' ?
            this.labelsGroup :
            this.shapesGroup);
    }
    /**
     * @private
     */
    renderItems(items) {
        let i = items.length;
        while (i--) {
            this.renderItem(items[i]);
        }
    }
    /**
     * @private
     */
    setClipAxes() {
        const xAxes = this.chart.xAxis, yAxes = this.chart.yAxis, linkedAxes = (this.options.labels || [])
            .concat(this.options.shapes || [])
            .reduce((axes, labelOrShape) => {
            const point = labelOrShape &&
                (labelOrShape.point ||
                    (labelOrShape.points && labelOrShape.points[0]));
            return [
                xAxes[point && point.xAxis] || axes[0],
                yAxes[point && point.yAxis] || axes[1]
            ];
        }, []);
        this.clipXAxis = linkedAxes[0];
        this.clipYAxis = linkedAxes[1];
    }
    /**
     * @private
     */
    setControlPointsVisibility(visible) {
        const setItemControlPointsVisibility = function (item) {
            item.setControlPointsVisibility(visible);
        };
        this.controlPoints.forEach((controlPoint) => {
            controlPoint.setVisibility(visible);
        });
        this.shapes.forEach(setItemControlPointsVisibility);
        this.labels.forEach(setItemControlPointsVisibility);
    }
    /**
     * @private
     */
    setLabelCollector() {
        const annotation = this;
        annotation.labelCollector = function () {
            return annotation.labels.reduce(function (labels, label) {
                if (!label.options.allowOverlap) {
                    labels.push(label.graphic);
                }
                return labels;
            }, []);
        };
        annotation.chart.labelCollectors.push(annotation.labelCollector);
    }
    /**
     * Set an annotation options.
     * @private
     * @param {Highcharts.AnnotationsOptions} userOptions
     *        User options for an annotation
     */
    setOptions(userOptions) {
        this.options = merge(
        // Shared for all annotation types
        this.defaultOptions, 
        // The static typeOptions from the class
        (userOptions.type &&
            this.defaultOptions.types[userOptions.type]) || {}, userOptions);
    }
    /**
     * Set the annotation's visibility.
     * @private
     * @param {boolean} [visible]
     * Whether to show or hide an annotation. If the param is omitted, the
     * annotation's visibility is toggled.
     */
    setVisibility(visible) {
        const options = this.options, navigation = this.chart.navigationBindings, visibility = pick(visible, !options.visible);
        this.graphic.attr('visibility', visibility ? 'inherit' : 'hidden');
        if (!visibility) {
            const setItemControlPointsVisibility = function (item) {
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
    }
    /**
     * Updates an annotation.
     *
     * @function Highcharts.Annotation#update
     *
     * @param {Partial<Highcharts.AnnotationsOptions>} userOptions
     *        New user options for the annotation.
     *
     */
    update(userOptions, redraw) {
        const chart = this.chart, labelsAndShapes = getLabelsAndShapesOptions(this.userOptions, userOptions), userOptionsIndex = chart.annotations.indexOf(this), options = merge(true, this.userOptions, userOptions);
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
    }
}
/**
 * @private
 */
Annotation.ControlPoint = ControlPoint;
/**
 * @private
 */
Annotation.MockPoint = MockPoint;
/**
 * An object uses for mapping between a shape type and a constructor.
 * To add a new shape type extend this object with type name as a key
 * and a constructor as its value.
 *
 * @private
 */
Annotation.shapesMap = {
    'rect': ControllableRect,
    'circle': ControllableCircle,
    'ellipse': ControllableEllipse,
    'path': ControllablePath,
    'image': ControllableImage
};
/**
 * @private
 */
Annotation.types = {};
Annotation.prototype.defaultOptions = AnnotationDefaults;
defaultOptions.annotations = AnnotationDefaults;
/**
 * List of events for `annotation.options.events` that should not be
 * added to `annotation.graphic` but to the `annotation`.
 *
 * @private
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
 * @private
 * @typedef {
 *          Highcharts.AnnotationControllableCircle|
 *          Highcharts.AnnotationControllableImage|
 *          Highcharts.AnnotationControllablePath|
 *          Highcharts.AnnotationControllableRect
 *     } Highcharts.AnnotationShapeType
 * @requires modules/annotations
 */
/**
 * @private
 * @typedef {
 *          Highcharts.AnnotationControllableLabel
 *     } Highcharts.AnnotationLabelType
 * @requires modules/annotations
 */
/**
 * A point-like object, a mock point or a point used in series.
 * @private
 * @typedef {
 *          Highcharts.AnnotationMockPoint|
 *          Highcharts.Point
 *     } Highcharts.AnnotationPointType
 * @requires modules/annotations
 */
/**
 * Shape point as string, object or function.
 *
 * @typedef {
 *          string|
 *          Highcharts.AnnotationMockPointOptionsObject|
 *          Highcharts.AnnotationMockPointFunction
 *     } Highcharts.AnnotationShapePointOptions
 */
(''); // Keeps doclets above in JS file
