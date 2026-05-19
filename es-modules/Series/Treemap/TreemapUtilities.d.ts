declare namespace TreemapUtilities {
    interface TreemapRecursiveCallbackFunction<TContext = any, TItem = any> {
        (this: TContext, item: TItem): (boolean | TItem);
    }
    /**
     * @todo find correct name for this function.
     * @todo Similar to reduce, this function is likely redundant
     */
    export function recursive<TContext = any, TItem = any>(this: any, item: TItem, func: TreemapRecursiveCallbackFunction<TContext, TItem>, context?: TContext): void;
    export {};
}
export default TreemapUtilities;
