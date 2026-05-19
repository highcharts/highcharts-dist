import { type EventOptions } from '../../Shared/Utilities.js';
import type { EventCallback } from '../../Core/Callback';
import DOMElementType from '../../Core/Renderer/DOMElementType';
interface ElementsFocusEventRemovers {
    element: DOMElementType;
    remover: Function;
}
/**
 * @private
 */
declare class EventProvider {
    constructor();
    eventRemovers: Array<ElementsFocusEventRemovers>;
    addEvent<T>(el: (Class<T> | T), type: string, fn: (EventCallback<T> | Function), options?: EventOptions): Function;
    /**
     * Remove added event.
     * @private
     */
    removeEvent(event: Function): void;
    /**
     * Remove all added events.
     * @private
     */
    removeAddedEvents(): void;
}
export default EventProvider;
