import type SMAOptions from './SMA/SMAOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
declare namespace MultipleLinesComposition {
    interface IndicatorOptions extends SMAOptions {
        fillColor?: SVGAttributes['fill'];
        gapSize?: number;
    }
}
export default MultipleLinesComposition;
