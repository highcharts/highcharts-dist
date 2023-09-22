declare namespace Types {
    /**
     * Any type for objects with mixed property types.
     *
     * **Note:** This is not type safe and should be used only for property
     *           loops.
     */
    type AnyRecord = Record<string, any>;
    /**
     * Utility type to mark recursively all properties and sub-properties
     * optional.
     */
    type DeepPartial<T> = {
        [K in keyof T]?: (T[K] | DeepPartial<T[K]>);
    };
}
export default Types;
