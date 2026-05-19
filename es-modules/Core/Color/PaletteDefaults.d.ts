import type PaletteOptions from './PaletteOptions';
/**
 * The palette object specifies colors for the charts and how to apply them.
 *
 * Each color scheme (`light` and `dark`) has three primary colors:
 * `backgroundColor`, `neutralColor`, and `highlightColor`. For the neutral and
 * highlight colors, a series of interpolated color variants are generated, and
 * accessed as CSS variables in the chart settings in their prefixed and
 * hyphenated form. For example,
 *
 * * `var(--highcharts-neutral-color-80)` is a blend of the `neutralColor` and
 *   the `backgroundColor`, with a weight of 80% `neutralColor` and 20%
 *   `backgroundColor`. It is the default for the main title
 *   (`title.style.color`), axis labels and more.
 * * `var(--highcharts-highlight-color-80)` is a blend of the `highlightColor`
 *   and the `backgroundColor`, with a weight of 80% `highlightColor` and 20%
 *   `backgroundColor`. It is used for the zoom selection marker (with opacity),
 *   Stock Range Selector date input boxes and more.
 *
 * The `colors` array is used for data series and points, and is not blended
 * with the `backgroundColor`. It is also accessible as CSS variables, and this
 * is the recommended way to hard-code colors to match series and data.
 * For example, `var(--highcharts-color-0)` is the first color in the `colors`
 * array, `var(--highcharts-color-1)` is the second color, and so on.
 *
 * The palette only accepts plain color strings in the options. Gradients and
 * patterns are only supported in other color settings, such as `series.color`
 * or `point.color`, but they can use CSS variables from the palette.
 *
 * @sample       highcharts/palette/general
 *               General palette options
 * @sample       highcharts/palette/branding
 *               Branded chart
 * @sample       highcharts/demo/pie-gradient
 *               Using palette colors in gradients
 * @type         {*}
 * @since        13.0.0
 * @optionparent palette
 */
declare const palette: PaletteOptions;
export default palette;
