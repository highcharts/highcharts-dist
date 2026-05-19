import type { DOMElementType, HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
import AccessibilityComponent from '../AccessibilityComponent.js';
import Announcer from '../Utils/Announcer.js';
import AST from '../../Core/Renderer/HTML/AST.js';
import Chart from '../../Core/Chart/Chart.js';
/**
 * The InfoRegionsComponent class
 *
 * @private
 * @class
 * @name Highcharts.InfoRegionsComponent
 */
declare class InfoRegionsComponent extends AccessibilityComponent {
    announcer: Announcer;
    dataTableButtonId?: string;
    dataTableDiv?: HTMLDOMElement;
    linkedDescriptionElement: (HTMLDOMElement | undefined);
    screenReaderSections: Record<string, InfoRegionsComponent.ScreenReaderSectionObject>;
    sonifyButton?: (DOMElementType | null);
    sonifyButtonId?: string;
    viewDataTableButton?: ('' | DOMElementType | null);
    /**
     * Init the component
     * @private
     */
    init(): void;
    /**
     * @private
     */
    initRegionsDefinitions(): void;
    /**
     * Called on chart render. Have to update the sections on render, in order
     * to get a11y info from series.
     */
    onChartRender(): void;
    updateAllScreenReaderSections(): void;
    /**
     * @private
     */
    getLinkedDescriptionElement(): (HTMLDOMElement | undefined);
    /**
     * @private
     */
    setLinkedDescriptionAttrs(): void;
    /**
     * @private
     * @param {string} regionKey
     * The name/key of the region to update
     */
    updateScreenReaderSection(regionKey: string): void;
    /**
     * Apply a11y attributes to a screen reader info section
     * @private
     * @param {Highcharts.HTMLDOMElement} sectionDiv The section element
     * @param {string} regionKey Name/key of the region we are setting attrs for
     */
    setScreenReaderSectionAttribs(sectionDiv: HTMLDOMElement, regionKey: string): void;
    /**
     * @private
     */
    defaultBeforeChartFormatter(): string;
    /**
     * @private
     */
    defaultAfterChartFormatter(): string;
    /**
     * @private
     */
    getLinkedDescription(): string;
    /**
     * @private
     */
    getLongdescText(): string;
    /**
     * @private
     */
    getTypeDescriptionText(): string;
    /**
     * @private
     */
    getDataTableButtonText(buttonId: string): string;
    /**
     * @private
     */
    getSonifyButtonText(buttonId: string): string;
    /**
     * @private
     */
    getSubtitleText(): string;
    /**
     * @private
     */
    getEndOfChartMarkerText(): string;
    /**
     * @private
     * @param {Highcharts.Dictionary<string>} e
     */
    onDataTableCreated(e: {
        tree: AST.Node;
    }): void;
    /**
     * @private
     */
    focusDataTable(): void;
    /**
     * @private
     * @param {string} sonifyButtonId
     */
    initSonifyButton(sonifyButtonId: string): void;
    /**
     * Set attribs and handlers for default viewAsDataTable button if exists.
     * @private
     * @param {string} tableButtonId
     */
    initDataTableButton(tableButtonId: string): void;
    /**
     * Return object with text description of each of the chart's axes.
     * @private
     */
    getAxesDescription(): Record<string, string>;
    /**
     * @private
     */
    getAxisDescriptionText(collectionKey: ('xAxis' | 'yAxis')): string;
    /**
     * Remove component traces
     */
    destroy(): void;
}
declare namespace InfoRegionsComponent {
    interface ScreenReaderSectionObject {
        afterInserted?: Function;
        element: (HTMLDOMElement | null);
        buildContent: Function;
        insertIntoDOM: Function;
    }
    interface TypeDescFormatContextObject {
        chart: Chart;
        mapTitle: (string | undefined);
        numSeries: number;
        numPoints: number;
    }
}
export default InfoRegionsComponent;
