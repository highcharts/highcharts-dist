interface Callback {
    type: string;
    func: Function;
}
interface CallbackJSON {
    type: string;
    func: string;
}
declare class CallbackRegistry {
    registry: Record<string, Callback>;
    addCallback(id: string, callback: Callback): void;
    getCallback(id: string): Callback;
    /** @internal */
    toJSON(): Record<string, CallbackJSON>;
}
export default CallbackRegistry;
