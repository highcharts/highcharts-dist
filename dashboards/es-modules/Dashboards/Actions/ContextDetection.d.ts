import type Cell from '../Layout/Cell.js';
declare class ContextDetection {
    static isGUIElementOnParentEdge(mouseContext: Cell, side: string): boolean;
    static getContextLevel(mouseContext: Cell, offset: number, sideOffset: number, side: string): number;
    static getContext(mouseCellContext: Cell, e: PointerEvent, offset: number): ContextDetection.ContextDetails;
}
declare namespace ContextDetection {
    interface ContextDetails {
        cell: Cell;
        side: string;
    }
}
export default ContextDetection;
