import type PointerEvent from '../../Core/PointerEvent';
export interface AnnotationEventObject extends PointerEvent {
    prevChartX: number;
    prevChartY: number;
}
declare abstract class EventEmitter {
}
export default EventEmitter;
