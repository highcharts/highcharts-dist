import type { AlignValue } from '../../Core/Renderer/AlignObject';
import type { BubbleSizeByValue } from './BubbleSeriesOptions';
import type ColorType from '../../Core/Color/ColorType';
import type CSSObject from '../../Core/Renderer/CSSObject';
import type Templating from '../../Core/Templating';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
declare module '../../Core/Legend/LegendOptions' {
    interface LegendOptions {
        /**
         * The bubble legend is an additional element in legend which
         * presents the scale of the bubble series. Individual bubble ranges
         * can be defined by user or calculated from series. In the case of
         * automatically calculated ranges, a 1px margin of error is
         * permitted.
         *
         * @optionparent legend.bubbleLegend
         */
        bubbleLegend?: BubbleLegendItem.Options;
    }
}
declare namespace BubbleLegendItem {
    interface FormatterContextObject {
        center: number;
        radius: (number | null);
        value: number;
    }
    interface LabelsOptions {
        /**
         * The alignment of the labels compared to the bubble
         * legend. Can be one of `left`, `center` or `right`.
         *
         * @sample highcharts/bubble-legend/connectorandlabels/
         *         Labels on left
         *
         * @type {Highcharts.AlignValue}
         */
        align?: AlignValue;
        /**
         * Whether to allow data labels to overlap.
         */
        allowOverlap?: boolean;
        /**
         * An additional class name to apply to the bubble legend
         * label graphical elements. This option does not replace
         * default class names of the graphical element.
         *
         * @sample {highcharts} highcharts/css/bubble-legend/
         *         Styling by CSS
         *
         * @type {string}
         */
        className?: string;
        /**
         * A format string for the bubble legend labels. Available
         * variables are the same as for `formatter`.
         *
         * @sample highcharts/bubble-legend/format/
         *         Add a unit
         *
         * @type {string}
         */
        format?: string;
        /**
         * Available `this` properties are:
         *
         * - `this.value`: The bubble value.
         *
         * - `this.radius`: The radius of the bubble range.
         *
         * - `this.center`: The center y position of the range.
         *
         * @type {Highcharts.FormatterCallbackFunction<Highcharts.BubbleLegendFormatterContextObject>}
         */
        formatter?: Templating.FormatterCallback<FormatterContextObject>;
        /**
         * CSS styles for the labels.
         *
         * @type {Highcharts.CSSObject}
         */
        style?: CSSObject;
        /**
         * The x position offset of the label relative to the
         * connector.
         */
        x?: number;
        /**
         * The y position offset of the label relative to the
         * connector.
         */
        y?: number;
    }
    /**
     * Options for `legend.bubbleLegend`. Member doclets mirror
     * `BubbleLegendDefaults` for API parity (`@optionparent` stays on
     * the defaults object).
     */
    interface Options {
        /**
         * The color of the ranges borders, can be also defined for an
         * individual range.
         *
         * @sample highcharts/bubble-legend/similartoseries/
         *         Similar look to the bubble series
         * @sample highcharts/bubble-legend/bordercolor/
         *         Individual bubble border color
         *
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        borderColor?: ColorType;
        /**
         * The width of the ranges borders in pixels, can be also
         * defined for an individual range.
         */
        borderWidth?: number;
        /**
         * An additional class name to apply to the bubble legend'
         * circle graphical elements. This option does not replace
         * default class names of the graphical element.
         *
         * @sample {highcharts} highcharts/css/bubble-legend/
         *         Styling by CSS
         *
         * @type {string}
         */
        className?: string;
        /**
         * The main color of the bubble legend. Applies to ranges, if
         * individual color is not defined.
         *
         * @sample highcharts/bubble-legend/similartoseries/
         *         Similar look to the bubble series
         * @sample highcharts/bubble-legend/color/
         *         Individual bubble color
         *
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        color?: ColorType;
        /**
         * An additional class name to apply to the bubble legend's
         * connector graphical elements. This option does not replace
         * default class names of the graphical element.
         *
         * @sample {highcharts} highcharts/css/bubble-legend/
         *         Styling by CSS
         *
         * @type {string}
         */
        connectorClassName?: string;
        /**
         * The color of the connector, can be also defined
         * for an individual range.
         *
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        connectorColor?: ColorType;
        /**
         * The length of the connectors in pixels. If labels are
         * centered, the distance is reduced to 0.
         *
         * @sample highcharts/bubble-legend/connectorandlabels/
         *         Increased connector length
         */
        connectorDistance?: number;
        /**
         * The width of the connectors in pixels.
         *
         * @sample highcharts/bubble-legend/connectorandlabels/
         *         Increased connector width
         */
        connectorWidth?: number;
        /**
         * Enable or disable the bubble legend.
         */
        enabled?: boolean;
        /**
         * Options for the bubble legend labels.
         */
        labels?: LabelsOptions;
        /**
         * The position of the bubble legend in the legend.
         * @sample highcharts/bubble-legend/connectorandlabels/
         *         Bubble legend as last item in legend
         */
        legendIndex?: number;
        /**
         * Maximum bubble legend range size. If values for ranges are
         * not specified, the `minSize` and the `maxSize` are calculated
         * from bubble series.
         */
        maxSize?: number;
        /**
         * Minimum bubble legend range size. If values for ranges are
         * not specified, the `minSize` and the `maxSize` are calculated
         * from bubble series.
         */
        minSize?: number;
        /**
         * Options for specific range. One range consists of bubble,
         * label and connector.
         *
         * @sample highcharts/bubble-legend/ranges/
         *         Manually defined ranges
         * @sample highcharts/bubble-legend/autoranges/
         *         Auto calculated ranges
         *
         * @type {Array<*>}
         */
        ranges?: Array<RangesOptions>;
        /**
         * Whether the bubble legend range value should be represented
         * by the area or the width of the bubble. The default, area,
         * corresponds best to the human perception of the size of each
         * bubble.
         *
         * @sample highcharts/bubble-legend/ranges/
         *         Size by width
         *
         * @type {Highcharts.BubbleSizeByValue}
         */
        sizeBy?: BubbleSizeByValue;
        /**
         * When this is true, the absolute value of z determines the
         * size of the bubble. This means that with the default
         * zThreshold of 0, a bubble of value -1 will have the same size
         * as a bubble of value 1, while a bubble of value 0 will have a
         * smaller size according to minSize.
         */
        sizeByAbsoluteValue?: boolean;
        /**
         * Define the visual z index of the bubble legend.
         */
        zIndex?: number;
        /**
         * Ranges with lower value than zThreshold are skipped.
         */
        zThreshold?: number;
    }
    interface RangesOptions extends Partial<FormatterContextObject> {
        autoRanges?: boolean;
        /**
         * The color of the border for individual range.
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        borderColor?: ColorType;
        /**
         * The color of the bubble for individual range.
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        color?: ColorType;
        /**
         * The color of the connector for individual range.
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        connectorColor?: ColorType;
        bubbleAttribs?: SVGAttributes;
        connectorAttribs?: SVGAttributes;
        labelAttribs?: SVGAttributes;
        /**
         * Range size value, similar to bubble Z data.
         * @type {number}
         */
        value?: any;
    }
}
export default BubbleLegendItem;
