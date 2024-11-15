/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts" {
    interface Chart {
        hoverSeries: (Series|null);
    }
    interface DataSortingOptionsObject {
        enabled?: boolean;
        matchByName?: boolean;
        sortKey?: string;
    }
    interface FontMetricsObject {
        b: number;
        f: number;
        h: number;
    }
    interface Point {
        graphic?: SVGElement;
        index: number;
        plotX?: number;
        plotY?: number;
    }
    interface PositionObject {
        x: number;
        y: number;
    }
    interface RectangleObject {
        height: number;
        width: number;
        x: number;
        y: number;
    }
    interface SeriesAfterAnimateEventObject {
        target: Series;
        type: "afterAnimate";
    }
    interface SeriesCheckboxClickEventObject {
        checked: boolean;
        item: Series;
        target: Series;
        type: "checkboxClick";
    }
    interface SeriesClickEventObject extends Event {
        point: Point;
    }
    interface SeriesLegendItemClickEventObject {
        browserEvent: PointerEvent;
        preventDefault: Function;
    }
    interface SeriesPlotBoxObject {
        scaleX: number;
        scaleY: number;
        translateX: number;
        translateY: number;
    }
    interface ShadowOptionsObject {
        color?: ColorString;
        offsetX?: number;
        offsetY?: number;
        opacity?: number;
        width?: number;
    }
    interface SizeObject {
        height: number;
        width: number;
    }
    interface SymbolDictionary {
        [key: string]: (Function|undefined);
        arc?: Function;
        callout?: Function;
        circle?: Function;
        diamond?: Function;
        square?: Function;
        triangle?: Function;
    }
    interface SymbolOptionsObject {
        anchorX?: number;
        anchorY?: number;
        end?: number;
        open?: boolean;
        r?: number;
        start?: number;
    }
    /**
     * Callout shape used for default tooltips.
     */
    function callout(): void;
    /**
     * Set the size and position
     */
    function centerImage(): void;
    function circle(): void;
    function diamond(): void;
    /**
     * Gets a registered renderer class. If no renderer type is provided or the
     * requested renderer was not founded, the default renderer is returned.
     *
     * @param rendererType
     *        Renderer type or the default renderer.
     *
     * @return Returns the requested renderer class or the default renderer
     *         class.
     */
    function getRendererType(rendererType?: string): Class<SVGRenderer>;
    function rect(): void;
    /**
     * Register a renderer class.
     *
     * @param rendererType
     *        Renderer type to register.
     *
     * @param rendererClass
     *        Returns the requested renderer class or the default renderer
     *        class.
     *
     * @param setAsDefault
     *        Sets the renderer class as the default renderer.
     */
    function registerRendererType(rendererType: string, rendererClass: Class<SVGRenderer>, setAsDefault: boolean): void;
    function triangle(): void;
    function triangleDown(): void;
}
export default factory;
export let Highcharts: typeof _Highcharts;
