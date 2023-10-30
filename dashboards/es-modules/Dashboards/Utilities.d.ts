/**
 * Utility function to deep merge two or more objects and return a third object.
 * If the first argument is true, the contents of the second object is copied
 * into the first object. The merge function can also be used with a single
 * object argument to create a deep copy of an object.
 *
 * @function Highcharts.merge<T>
 *
 * @param {boolean} extend
 *        Whether to extend the left-side object (a) or return a whole new
 *        object.
 *
 * @param {T|undefined} a
 *        The first object to extend. When only this is given, the function
 *        returns a deep copy.
 *
 * @param {...Array<object|undefined>} [n]
 *        An object to merge into the previous one.
 *
 * @return {T}
 *         The merged object. If the first argument is true, the return is the
 *         same as the second argument.
 */ /**
* Utility function to deep merge two or more objects and return a third object.
* The merge function can also be used with a single object argument to create a
* deep copy of an object.
*
* @function Highcharts.merge<T>
*
* @param {T|undefined} a
*        The first object to extend. When only this is given, the function
*        returns a deep copy.
*
* @param {...Array<object|undefined>} [n]
*        An object to merge into the previous one.
*
* @return {T}
*         The merged object. If the first argument is true, the return is the
*         same as the second argument.
*/
declare function merge<T>(): T;
/**
 * Creates a session-dependent unique key string for reference purposes.
 *
 * @function Dashboards.uniqueKey
 *
 * @return {string}
 * Unique key string
 */
declare function uniqueKey(): string;
declare const Utilities: {
    merge: typeof merge;
    uniqueKey: typeof uniqueKey;
};
export default Utilities;
