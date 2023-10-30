import type ComponentType from '../ComponentType';
export type EmitterFunction = (this: ComponentType) => Function | void;
/**
 *  Class responsible for adding event listeners on a component
 *  @internal
 */
declare class SyncEmitter {
    /**
     * Registry for reusable emitter.
     * The emitter is stored by ID.
     */
    static registry: Record<string, SyncEmitter>;
    /**
     * Adds an emitter to the emitter registry.
     *
     * @param emitter the emitter to add to the registry.
     */
    static register(emitter: SyncEmitter): void;
    /**
     * Gets an emitter from emitter registry.
     *
     * @param emitterID The ID of the emitter to get.
     */
    static get(emitterID: string): SyncEmitter | undefined;
    /**
     * The ID of the emitter.
     * @remark Can be any string, but should be unique.
     */
    id: string;
    /**
     * The function to be called when the emitter is activated.
     */
    func: EmitterFunction;
    /**
     * Callback function that is called when the emitter is removed.
     * Normally provided as the return value of {@link func}.
     */
    callback?: ReturnType<EmitterFunction>;
    /**
     * Creates a new emitter instance.
     *
     * @param id An unique ID for the emitter.
     *
     * @param func
     * The function to be called when the emitter is activated.
     */
    constructor(id: string, func: EmitterFunction);
    /**
     * Attaches the emitter to a component.
     *
     * @param component The component to attach to.
     */
    create(component: ComponentType): void;
    /**
     * To be used when removing the emitter from the component.
     * Calls the {@link callback} function.
     */
    remove(): void;
}
export default SyncEmitter;
