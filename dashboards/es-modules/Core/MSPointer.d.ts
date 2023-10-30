import type Chart from './Chart/Chart';
import type Options from './Options';
import type PointerEvent from './PointerEvent';
import Pointer from './Pointer.js';
declare global {
    /** @deprecated */
    interface MSPointerEvent extends Partial<PointerEvent> {
        /** @deprecated */
        readonly MSPOINTER_TYPE_TOUCH: string;
        readonly currentTarget?: EventTarget;
        readonly pointerId: number;
        readonly pointerType?: undefined;
        /** @deprecated */
        readonly toElement: Element;
    }
    interface Window {
        /** @deprecated */
        MSPointerEvent?: Class<MSPointerEvent>;
    }
}
/** @private */
declare class MSPointer extends Pointer {
    static isRequired(): boolean;
    /**
     * Add or remove the MS Pointer specific events
     * @private
     * @function Highcharts.Pointer#batchMSEvents
     */
    private batchMSEvents;
    destroy(): void;
    init(chart: Chart, options: Options): void;
    /**
     * @private
     * @function Highcharts.Pointer#onContainerPointerDown
     */
    private onContainerPointerDown;
    /**
     * @private
     * @function Highcharts.Pointer#onContainerPointerMove
     */
    private onContainerPointerMove;
    /**
     * @private
     * @function Highcharts.Pointer#onDocumentPointerUp
     */
    private onDocumentPointerUp;
    setDOMEvents(): void;
}
declare namespace MSPointer {
    /**
     * @private
     */
    function compose(ChartClass: typeof Chart): void;
}
export default MSPointer;
