/**
 * Detailed options for border radius.
 *
 * @sample {highcharts} highcharts/plotoptions/column-borderradius/
 *         Rounded columns
 * @sample highcharts/plotoptions/series-border-radius
 *         Column and pie with rounded border
 */
export interface BorderRadiusOptionsObject {
    /**
     * The border radius. A number signifies pixels. A percentage string, like
     * for example `50%`, signifies a relative size. For columns this is
     * relative to the column width, for pies it is relative to the radius and
     * the inner radius.
     *
     * @sample {highcharts} highcharts/plotoptions/column-borderradius/
     *         Rounded columns
     * @sample highcharts/plotoptions/series-border-radius
     *         Column and pie with rounded border
     */
    radius: number | string;
    /**
     * The scope of the rounding for column charts or plot bands. In a stacked
     * column chart, the value `point` means each single point will get rounded
     * corners. The value `stack` means the rounding will apply to the full
     * stack, so that only points close to the top or bottom will receive
     * rounding.
     *
     * Similarly, for plot bands, the `individual` value means each plot band
     * will get rounded corners.
     *
     * @sample {highcharts} highcharts/plotoptions/column-borderradius/
     *         Rounded columns
     */
    scope: 'individual' | 'point' | 'stack';
    /**
     * For column charts, where in the point or stack to apply rounding. The
     * `end` value means only those corners at the point value will be rounded,
     * leaving the corners at the base or threshold unrounded. This is the most
     * intuitive behavior. The `all` value means also the base will be rounded.
     *
     * @sample {highcharts} highcharts/plotoptions/column-borderradius-where-all
     *         Rounding on all corners
     *
     * @default 'end'
     */
    where?: 'end' | 'all';
}
declare module '../Core/Renderer/SVG/SVGAttributes' {
    interface SVGAttributes {
        /**
         * The border radius. A number signifies pixels. A percentage string,
         * like for example `50%`, signifies a relative size. For columns this
         * is relative to the column width, for pies it is relative to the
         * radius and the inner radius.
         */
        borderRadius?: number | string;
        /** The height of the border-radius box  */
        brBoxHeight?: number;
        /** The y position of the border-radius box  */
        brBoxY?: number;
        /** Corresponding to the `borderRadius.where` option */
        brEnd?: boolean;
    }
}
declare module '../Core/Renderer/SVG/SymbolOptions' {
    interface SymbolOptions {
        /**
         * The border radius. A number signifies pixels. A percentage string,
         * like for example `50%`, signifies a relative size. For columns this
         * is relative to the column width, for pies it is relative to the
         * radius and the inner radius.
         */
        borderRadius?: number | string;
    }
}
