import type AnimationOptions from './AnimationOptions';
import type Chart from '../Chart/Chart';
import type CSSObject from '../Renderer/CSSObject';
import type { HTMLDOMElement } from '../Renderer/DOMElementType';
import type Series from '../Series/Series';
import type SVGAttributes from '../Renderer/SVG/SVGAttributes';
import type SVGElement from '../Renderer/SVG/SVGElement';
/**
 * Set the global animation to either a given value, or fall back to the given
 * chart's animation option.
 *
 * @function Highcharts.setAnimation
 *
 * @param {boolean|Partial<Highcharts.AnimationOptionsObject>|undefined} animation
 *        The animation object.
 *
 * @param {Highcharts.Chart} chart
 *        The chart instance.
 *
 * @todo
 * This function always relates to a chart, and sets a property on the renderer,
 * so it should be moved to the SVGRenderer.
 */
declare function setAnimation(animation: (boolean | Partial<AnimationOptions> | undefined), chart: Chart): void;
/**
 * Get the animation in object form, where a disabled animation is always
 * returned as `{ duration: 0 }`.
 *
 * @function Highcharts.animObject
 *
 * @param {boolean|Highcharts.AnimationOptionsObject} [animation=0]
 *        An animation setting. Can be an object with duration, complete and
 *        easing properties, or a boolean to enable or disable.
 *
 * @return {Highcharts.AnimationOptionsObject}
 *         An object with at least a duration property.
 */
declare function animObject(animation?: (boolean | DeepPartial<AnimationOptions>)): AnimationOptions;
/**
 * Get the defer as a number value from series animation options.
 *
 * @function Highcharts.getDeferredAnimation
 *
 * @param {Highcharts.Chart} chart
 *        The chart instance.
 *
 * @param {boolean|Highcharts.AnimationOptionsObject} animation
 *        An animation setting. Can be an object with duration, complete and
 *        easing properties, or a boolean to enable or disable.
 *
 * @param {Highcharts.Series} [series]
 *        Series to defer animation.
 *
 * @return {number}
 *        The numeric value.
 */
declare function getDeferredAnimation(chart: Chart, animation: (false | Partial<AnimationOptions>), series?: Series): Partial<AnimationOptions>;
/**
 * The global animate method, which uses Fx to create individual animators.
 *
 * @function Highcharts.animate
 *
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGElement} el
 *        The element to animate.
 *
 * @param {Highcharts.CSSObject|Highcharts.SVGAttributes} params
 *        An object containing key-value pairs of the properties to animate.
 *        Supports numeric as pixel-based CSS properties for HTML objects and
 *        attributes for SVGElements.
 *
 * @param {Partial<Highcharts.AnimationOptionsObject>} [opt]
 *        Animation options.
 *
 * @return {void}
 */
declare function animate(el: (HTMLDOMElement | SVGElement), params: (CSSObject | SVGAttributes), opt?: boolean | Partial<AnimationOptions>): void;
/**
 * Stop running animation.
 *
 * @function Highcharts.stop
 *
 * @param {Highcharts.SVGElement} el
 *        The SVGElement to stop animation on.
 *
 * @param {string} [prop]
 *        The property to stop animating. If given, the stop method will stop a
 *        single property from animating, while others continue.
 *
 * @return {void}
 *
 * @todo
 * A possible extension to this would be to stop a single property, when
 * we want to continue animating others. Then assign the prop to the timer
 * in the Fx.run method, and check for the prop here. This would be an
 * improvement in all cases where we stop the animation from .attr. Instead of
 * stopping everything, we can just stop the actual attributes we're setting.
 */
declare function stop(el: SVGElement, prop?: string): void;
declare const animationExports: {
    animate: typeof animate;
    animObject: typeof animObject;
    getDeferredAnimation: typeof getDeferredAnimation;
    setAnimation: typeof setAnimation;
    stop: typeof stop;
};
export default animationExports;
