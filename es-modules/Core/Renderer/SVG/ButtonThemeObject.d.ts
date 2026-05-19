import type SVGAttributes from './SVGAttributes';
import type CSSObject from '../CSSObject';
export interface ButtonThemeObject extends SVGAttributes {
    /**
     * The default fill exists only to capture hover events.
     *
     * @type {Highcharts.ColorType}
     * @default #ffffff
     */
    fill?: SVGAttributes['fill'];
    /**
     * Padding for the button.
     *
     * @default 5
     */
    padding?: SVGAttributes['padding'];
    /**
     * Default stroke for the buttons.
     *
     * @type {Highcharts.ColorString}
     * @default none
     */
    stroke?: SVGAttributes['stroke'];
    /**
     * Default stroke linecap for the buttons.
     *
     * @default round
     */
    'stroke-linecap'?: SVGAttributes['stroke-linecap'];
    states?: ButtonThemeStatesObject;
    style?: CSSObject;
}
export interface ButtonThemeStatesObject {
    disabled?: SVGAttributes;
    hover?: SVGAttributes;
    select?: SVGAttributes;
}
export default ButtonThemeObject;
