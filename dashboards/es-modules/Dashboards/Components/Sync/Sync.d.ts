import type ComponentType from '../ComponentType';
import SyncEmitter from './Emitter.js';
import SyncHandler from './Handler.js';
/** @internal */
declare class Sync {
    constructor(component: ComponentType, syncHandlers?: Sync.OptionsRecord);
    /**
     * Array of listeners that should be removed when the sync is stopped.
     */
    private listeners;
    /**
     * Default handlers for the sync class. This property is extended by
     * different Components, where default syncs are added. Allows overwriting
     * the configuration before creating the dashboard.
     */
    static defaultHandlers: Record<string, Sync.OptionsEntry>;
    /**
     * Registry for the sync handlers used within the component.
     */
    private registeredSyncHandlers;
    /**
     * Registry for the sync emitters used within the component.
     */
    private registeredSyncEmitters;
    /**
     * The component to which the emitters and handlers are attached.
     */
    component: ComponentType;
    /**
     * The emitters and handlers to use for each event
     */
    syncConfig: Sync.OptionsRecord;
    /**
     * Whether the component is currently syncing.
     */
    isSyncing: boolean;
    /**
     * Creates an instance of the sync class.
     *
     * @param component
     * The component to which the emitters and handlers are attached.
     *
     * @param syncHandlers
     * The emitters and handlers to use for each event.
     */
    /**
     * Add new emitter to the registered emitters.
     * @param emitter
     The emitter to register.
     */
    registerSyncEmitter(emitter: SyncEmitter): void;
    /**
     * Method that checks if the emitter is registered.
     *
     * @param id
     * The id of the emitter to check.
     *
     * @returns
     * Whether the emitter is registered.
     */
    isRegisteredEmitter(id: string): boolean;
    /**
     * Register new handler to the registered handlers.
     *
     * @param handler
     * The handler to register.
     */
    registerSyncHandler(handler: SyncHandler): void;
    /**
     * Method that checks if the handler is registered.
     *
     * @param handlerID
     * The id of the handler to check.
     *
     * @returns
     * Whether the handler is registered.
     */
    isRegisteredHandler(handlerID: string): boolean;
    /**
     * Registers the handlers and emitters on the component
     */
    start(): void;
    /**
     * Removes the handlers and emitters from the component.
     */
    stop(): void;
}
declare namespace Sync {
    type EventType = ('extremes' | 'visibility' | 'highlight');
    /** @internal */
    type EmitterConfig = ([SyncEmitter['id'], SyncEmitter['func']] | SyncEmitter['func']);
    /** @internal */
    type HandlerConfig = ([
        SyncHandler['id'],
        SyncHandler['presentationStateTrigger'],
        SyncHandler['func']
    ] | SyncHandler['func']);
    interface OptionsEntry {
        /**
         * Responsible for communicating to the component group that the action
         * has been triggered on the component.
         *
         * If `true` the default emitter will be used, if `false` or `null` it
         * will be disabled
         */
        emitter?: EmitterConfig | null | boolean;
        /**
         * Responsible for _handling_ incoming action from the synced component
         * group.
         *
         * If `true` the default handler will be used, if `false` or `null` it
         * will be disabled
         */
        handler?: HandlerConfig | null | boolean;
    }
    /** @internal */
    type OptionsRecord = (Record<(SyncEmitter['id'] | SyncHandler['id']), OptionsEntry>);
}
export default Sync;
