import type { PaletteOptions } from './PaletteOptions';
import type SVGRenderer from '../Renderer/SVG/SVGRenderer';
declare module '../Chart/ChartBase' {
    interface ChartBase {
        palette: Palette | undefined;
    }
}
type CSSVars = {
    light: {
        [key: string]: string;
    };
    dark: {
        [key: string]: string;
    };
};
/**
 * A Palette class holding the palette colors and lifecycle methods for each
 * chart.
 *
 * @class
 * @name Highcharts.Palette
 *
 * @param {Highcharts.Chart} chart
 *        The chart instance
 * @param {Highcharts.PaletteOptions} options
 *        Palette options
 */
export default class Palette {
    defaultOptions: PaletteOptions;
    options: PaletteOptions;
    renderer: SVGRenderer;
    cssVars: CSSVars;
    constructor(renderer: SVGRenderer, options: PaletteOptions);
    /**
     * Update the palette with new options. May be called directly as
     * `chart.palette.update()` or indirectly from `chart.update({ palette })`.
     *
     * @function Highcharts.Palette#update
     *
     * @param {Highcharts.PaletteOptions} options
     *        New palette options
     */
    update(options: PaletteOptions): void;
}
export {};
