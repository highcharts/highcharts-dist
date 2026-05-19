import type AccessibilityComponent from './AccessibilityComponent';
import type Chart from '../Core/Chart/Chart';
import type Legend from '../Core/Legend/Legend';
import type { Options } from '../Core/Options';
import type Point from '../Core/Series/Point';
import type RangeSelector from '../Stock/RangeSelector/RangeSelector';
import type Series from '../Core/Series/Series';
import type SeriesOptions from '../Core/Series/SeriesOptions';
import type SVGElement from '../Core/Renderer/SVG/SVGElement';
import A11yI18n from './A11yI18n.js';
import ContainerComponent from './Components/ContainerComponent.js';
import InfoRegionsComponent from './Components/InfoRegionsComponent.js';
import KeyboardNavigation from './KeyboardNavigation.js';
import LegendComponent from './Components/LegendComponent.js';
import MenuComponent from './Components/MenuComponent.js';
import NavigatorComponent from './Components/NavigatorComponent.js';
import NewDataAnnouncer from './Components/SeriesComponent/NewDataAnnouncer.js';
import ProxyProvider from './ProxyProvider.js';
import RangeSelectorComponent from './Components/RangeSelectorComponent.js';
import SeriesComponent from './Components/SeriesComponent/SeriesComponent.js';
import ZoomComponent from './Components/ZoomComponent.js';
declare module '../Core/Chart/ChartBase' {
    interface ChartBase {
        a11yDirty?: boolean;
        accessibility?: Accessibility;
        types?: Array<string>;
        /** @requires modules/accessibility */
        updateA11yEnabled(): void;
    }
}
/**
 * The Accessibility class
 *
 * @private
 * @requires modules/accessibility
 *
 * @class
 * @name Highcharts.Accessibility
 *
 * @param {Highcharts.Chart} chart
 * Chart object
 */
declare class Accessibility {
    constructor(chart: Chart);
    chart: Accessibility.ChartComposition;
    components: Accessibility.ComponentsObject;
    keyboardNavigation: KeyboardNavigation;
    proxyProvider: ProxyProvider;
    zombie?: boolean;
    /**
     * Initialize the accessibility class
     * @private
     * @param {Highcharts.Chart} chart
     *        Chart object
     */
    init(chart: Chart): void;
    /**
     * @private
     */
    initComponents(): void;
    /**
     * Get order to update components in.
     * @private
     */
    getComponentOrder(): string[];
    /**
     * Update all components.
     */
    update(): void;
    /**
     * Destroy all elements.
     */
    destroy(): void;
    /**
     * Return a list of the types of series we have in the chart.
     * @private
     */
    getChartTypes(): Array<string>;
}
declare namespace Accessibility {
    interface ComponentsObject {
        [key: string]: AccessibilityComponent;
        container: ContainerComponent;
        infoRegions: InfoRegionsComponent;
        legend: LegendComponent;
        chartMenu: MenuComponent;
        rangeSelector: RangeSelectorComponent;
        series: SeriesComponent;
        zoom: ZoomComponent;
        navigator: NavigatorComponent;
    }
    class ChartComposition extends Chart {
        options: Required<Options>;
        series: Array<SeriesComposition>;
    }
    class PointComposition extends Point {
        accessibility?: PointStateObject;
        series: SeriesComposition;
        value?: (number | null);
    }
    interface PointStateObject {
        valueDescription?: string;
    }
    class SeriesComposition extends Series {
        chart: ChartComposition;
        newDataAnnouncer?: NewDataAnnouncer;
        options: Required<SeriesOptions>;
        points: Array<PointComposition>;
    }
    const i18nFormat: typeof A11yI18n.i18nFormat;
    /**
     * @private
     */
    function compose(ChartClass: typeof Chart, LegendClass: typeof Legend, PointClass: typeof Point, SeriesClass: typeof Series, SVGElementClass: typeof SVGElement, RangeSelectorClass?: typeof RangeSelector): void;
}
export default Accessibility;
