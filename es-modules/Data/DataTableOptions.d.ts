import type { TypedArray } from '../Shared/Types';
/**
 * Options to initialize a new DataTable instance.
 */
export interface DataTableOptionsObject {
    /**
     * Initial columns with their values.
     */
    columns?: Record<string, Array<DataTableValue> | TypedArray>;
    /**
     * Custom ID to identify the new DataTable instance.
     */
    id?: string;
    /**
     * A reference to the specific data table key defined in the component's
     * connector options.
     */
    key?: string;
    /**
     * Metadata to describe the dataTable.
     */
    metadata?: Record<string, DataTableValue>;
}
export type DataTableValue = (boolean | null | number | string | undefined);
export default DataTableOptionsObject;
