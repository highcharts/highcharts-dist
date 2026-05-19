export declare namespace JSON {
    /**
     * Array structure as supported in JSON.
     */
    interface Array extends globalThis.Array<(Primitive | Type)> {
        [index: number]: (Primitive | Type);
    }
    /**
     * Class API for toJSON implementation based on JSON.stringify.
     */
    interface Builder {
        toJSON(): Type;
    }
    /**
     * Type structure of a record object as it is supported in JSON.
     */
    interface Object {
        [key: string]: (Primitive | Type);
    }
    /**
     * All primitive types, that are supported in JSON.
     */
    type Primitive = (boolean | number | string | null | undefined);
    /**
     * All object types, that are supported in JSON.
     */
    type Type = (Array | Object);
}
export default JSON;
