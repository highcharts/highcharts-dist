import SVGAttributes from '../Core/Renderer/SVG/SVGAttributes';
import { DeepPartial } from '../Shared/Types';
declare module '../Core/Series/DataLabelOptions' {
    interface DataLabelOptions {
        /**
         * Options for a label text which should follow marker's shape.
         * Border and background are disabled for a label that follows a
         * path.
         *
         * **Note:** Only SVG-based renderer supports this option. Setting
         * `useHTML` to true will disable this option.
         *
         * Text path support is not bundled into `highcharts.js`, and requires
         * the `modules/textpath.js` file. However, it is included in the script
         * files of those series types that use it by default.
         *
         * @since 7.1.0
         */
        textPath?: DeepPartial<DataLabelTextPathOptions>;
    }
}
export interface DataLabelTextPathOptions {
    /**
     * Presentation attributes for the text path.
     *
     * @default { dy:-5, startOffset:'50%', textAnchor:'middle' }
     * @since 7.1.0
     */
    attributes: TextPathAttributes;
    /**
     * Enable or disable `textPath` option for link's or marker's data
     * labels.
     *
     * @default true
     * @since 7.1.0
     */
    enabled: boolean;
}
export interface TextPathAttributes extends SVGAttributes {
    startOffset: string;
    textAnchor: 'start' | 'middle' | 'end';
    dy?: number;
}
