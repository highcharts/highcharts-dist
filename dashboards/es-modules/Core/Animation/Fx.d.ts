import type AnimationOptions from './AnimationOptions';
import type FxLike from './FxLike';
import type { HTMLDOMElement } from '../Renderer/DOMElementType';
import type HTMLElement from '../Renderer/HTML/HTMLElement';
import type SVGElement from '../Renderer/SVG/SVGElement';
import type SVGPath from '../Renderer/SVG/SVGPath';
/**
 * An animator object used internally. One instance applies to one property
 * (attribute or style prop) on one element. Animation is always initiated
 * through {@link SVGElement#animate}.
 *
 * @example
 * let rect = renderer.rect(0, 0, 10, 10).add();
 * rect.animate({ width: 100 });
 *
 * @private
 * @class
 * @name Highcharts.Fx
 *
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGElement} elem
 * The element to animate.
 *
 * @param {Partial<Highcharts.AnimationOptionsObject>} options
 * Animation options.
 *
 * @param {string} prop
 * The single attribute or CSS property to animate.
 */
declare class Fx {
    static timers: Array<Fx.Timer>;
    constructor(elem: (HTMLElement | SVGElement), options: Partial<AnimationOptions>, prop: string);
    elem: (HTMLElement | SVGElement);
    end?: number;
    from?: number;
    now?: number;
    options: Partial<AnimationOptions>;
    paths?: [SVGPath, SVGPath];
    pos: number;
    prop: string;
    start?: number;
    startTime?: number;
    toD?: SVGPath;
    unit?: string;
    /**
     * Set the current step of a path definition on SVGElement.
     *
     * @function Highcharts.Fx#dSetter
     *
     */
    dSetter(): void;
    /**
     * Update the element with the current animation step.
     *
     * @function Highcharts.Fx#update
     *
     */
    update(): void;
    /**
     * Run an animation.
     *
     * @function Highcharts.Fx#run
     *
     * @param {number} from
     *        The current value, value to start from.
     *
     * @param {number} to
     *        The end value, value to land on.
     *
     * @param {string} unit
     *        The property unit, for example `px`.
     *
     */
    run(from: number, to: number, unit: string): void;
    /**
     * Run a single step in the animation.
     *
     * @function Highcharts.Fx#step
     *
     * @param {boolean} [gotoEnd]
     *        Whether to go to the endpoint of the animation after abort.
     *
     * @return {boolean}
     *         Returns `true` if animation continues.
     */
    step(gotoEnd?: boolean): boolean;
    /**
     * Prepare start and end values so that the path can be animated one to one.
     *
     * @function Highcharts.Fx#initPath
     *
     * @param {Highcharts.SVGElement} elem
     *        The SVGElement item.
     *
     * @param {Highcharts.SVGPathArray|undefined} fromD
     *        Starting path definition.
     *
     * @param {Highcharts.SVGPathArray} toD
     *        Ending path definition.
     *
     * @return {Array<Highcharts.SVGPathArray,Highcharts.SVGPathArray>}
     *         An array containing start and end paths in array form so that
     *         they can be animated in parallel.
     */
    initPath(elem: SVGElement, fromD: SVGPath | undefined, toD: SVGPath): [SVGPath, SVGPath];
    /**
     * Handle animation of the color attributes directly.
     *
     * @function Highcharts.Fx#fillSetter
     *
     */
    fillSetter(): void;
    /**
     * Handle animation of the color attributes directly.
     *
     * @function Highcharts.Fx#strokeSetter
     *
     */
    strokeSetter(): void;
}
interface Fx extends FxLike {
}
declare namespace Fx {
    interface Timer {
        (gotoEnd?: boolean): boolean;
        elem?: (HTMLDOMElement | SVGElement);
        prop?: string;
        stopped?: boolean;
    }
}
export default Fx;
