import type { AlignObject } from '../../Core/Renderer/AlignObject';
import type { CSSObject } from '../../Core/Renderer/CSSObject';
import type { SVGAttributes } from '../../Core/Renderer/SVG/SVGAttributes';
export interface NoDataOptions {
    /**
     * An object of additional SVG attributes for the no-data label.
     *
     * @since    3.0.8
     * @requires modules/no-data-to-display
     */
    attr?: SVGAttributes;
    /**
     * Whether to insert the label as HTML, or as pseudo-HTML rendered with
     * SVG.
     *
     * @since    4.1.10
     * @requires modules/no-data-to-display
     * @default false
     */
    useHTML?: boolean;
    /**
     * The position of the no-data label, relative to the plot area.
     *
     * @since    3.0.8
     * @requires modules/no-data-to-display
     */
    position?: AlignObject;
    /**
     * CSS styles for the no-data label.
     *
     * @since    3.0.8
     * @requires modules/no-data-to-display
     */
    style?: CSSObject;
}
export default NoDataOptions;
