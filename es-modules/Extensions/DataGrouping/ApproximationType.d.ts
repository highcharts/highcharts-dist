export interface ApproximationArray extends Array<number> {
    hasNulls?: boolean;
}
export type ApproximationKeyValue = keyof ApproximationTypeRegistry;
export interface ApproximationTypeRegistry extends Record<string, Function> {
}
export default ApproximationKeyValue;
