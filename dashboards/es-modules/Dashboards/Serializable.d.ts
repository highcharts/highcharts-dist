import type Globals from './Globals';
import type JSON from './JSON';
/**
 * Interface to convert objects from and to JSON.
 * @internal
 *
 * @interface Serializable
 */
interface Serializable<T extends Globals.AnyRecord, TJSON extends Serializable.JSON<string>> {
    /**
     * Converts the given JSON to a class instance.
     *
     * @function Serializable.fromJSON
     *
     * @param {Serializable.JSON} json
     * JSON to deserialize as a class instance or object.
     *
     * @return {Globals.AnyRecord}
     * Returns the class instance or object, or throws an exception.
     */
    fromJSON(json: TJSON): T;
    /**
     * Converts the given class instance to JSON.
     *
     * @function Serializable.toJSON
     *
     * @return {Serializable.JSON}
     * Returns the JSON of the class instance or object.
     */
    toJSON(): TJSON;
}
/**
 * Contains the toolset to serialize class instance to JSON and deserialize JSON
 * to class instances.
 * @internal
 * @private
 */
declare namespace Serializable {
    /**
     * @private
     */
    interface Helper<T extends Globals.AnyRecord, TJSON extends Serializable.JSON<string>> {
        /**
         * @name Serializer.$class
         * @type {string}
         */
        $class: TJSON['$class'];
        /**
         * Converts the given JSON to an object.
         *
         * @function Serializer.fromJSON
         *
         * @param {Serializable.JSON} json
         * JSON to deserialize as an object.
         *
         * @return {Globals.AnyRecord}
         * Returns the object, or throws an exception.
         */
        fromJSON(json: TJSON): T;
        /**
         * Validates the given object for JSON support.
         *
         * @function Serializer.jsonSupportFor
         *
         * @param {Globals.AnyRecord} obj
         * Object to validate.
         *
         * @return {boolean}
         * Returns true, if the helper functions can convert the given object,
         * otherwise false.
         */
        jsonSupportFor(obj: Globals.AnyRecord): obj is T;
        /**
         * Converts the given object to JSON.
         *
         * @function Serializer.toJSON
         *
         * @param {Globals.AnyRecord} obj
         * Object to serialize as JSON.
         *
         * @return {Serializable.JSON}
         * Returns the JSON of the object.
         */
        toJSON(obj: T): TJSON;
    }
    /**
     * JSON of a serializable class.
     */
    interface JSON<T extends string> extends JSON.Object {
        $class: T;
    }
    /**
     * Creates a class instance from the given JSON, if a suitable serializer
     * has been found.
     *
     * @function Serializable.fromJSON
     *
     * @param {Serializable.JSON} json
     * JSON to create a class instance or object from.
     *
     * @return {Globals.AnyRecord}
     * Returns the class instance or object, or throws an exception.
     */
    function fromJSON(json: JSON<string>): Globals.AnyRecord;
    /**
     * Registers a class prototype for the given JSON $class.
     *
     * @function Serializable.registerClassPrototype
     *
     * @param {string} $class
     * JSON $class to register for.
     *
     * @param {Serializable} classPrototype
     * Class to register.
     */
    function registerClassPrototype<T extends Globals.AnyRecord, TJSON extends JSON<string>>($class: TJSON['$class'], classPrototype: Serializable<T, TJSON>): void;
    /**
     * Registers helper functions for the given JSON $class.
     *
     * @function Serializable.registerHelper
     *
     * @param {Helper} helperFunctions
     * Helper functions to register.
     */
    function registerHelper<T extends Globals.AnyRecord, TJSON extends JSON<string>>(helperFunctions: Helper<T, TJSON>): void;
    function toJSON<T extends Globals.AnyRecord, TJSON extends JSON<string>>(obj: Serializable<T, TJSON>): TJSON;
    function toJSON(obj: Globals.AnyRecord): JSON<string>;
}
export default Serializable;
