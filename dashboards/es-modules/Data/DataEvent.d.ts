/**
 * The event object to pass to a callback.
 */
interface DataEvent {
    /**
     * Additional event detail
     */
    detail?: DataEvent.Detail;
    /**
     * The event type
     */
    type: string;
}
/**
 * Additional types for the event object and the event callback.
 */
declare namespace DataEvent {
    /**
     * Describes the callbacks expected types. This generic interface can be
     * extended by implementing classes.
     */
    interface Callback<T, E extends DataEvent> {
        /**
         *
         * @param this
         * Event scope pointing to the class instance, where the event happens.
         *
         * @param e
         * Event object with additional event information.
         */
        (this: T, e: E): void;
    }
    /**
     * Additional detail of the event object.
     */
    type Detail = Record<string, (boolean | number | string | null | undefined)>;
    /**
     * Describes methods to attach callbacks to events of a class instance.
     */
    interface Emitter {
        /**
         * Registered events managed by Highcharts utility functions.
         */
        hcEvents?: HCEventsCollection;
        /**
         * Emits an event on the class instance to all registered callbacks of
         * this event.
         *
         * @param {DataEvent} detail
         * Detail object containing event information.
         */
        emit<E extends DataEvent>(e: E): void;
        /**
         * Registers a callback for a specific event.
         *
         * @param {string} type
         * Event type as a string.
         *
         * @param {DataEvent.Callback} callback
         * Function to register for an event callback.
         *
         * @return {Function}
         * Function to unregister callback from the event.
         */
        on<E extends DataEvent>(type: E['type'], callback: Callback<this, E>): Function;
    }
    /** @internal */
    interface HCEventObject {
        fn: Callback<unknown, DataEvent>;
        order?: number;
    }
    /** @internal */
    type HCEventsCollection = (Record<string, Array<HCEventObject>>);
}
export default DataEvent;
