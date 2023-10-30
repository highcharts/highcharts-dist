/**
 * Global DataGrid namespace.
 *
 * @namespace DataGrid
 */
declare namespace Globals {
    /**
     * Utility type to mark recursively all properties and sub-properties
     * optional.
     */
    type DeepPartial<T> = {
        [K in keyof T]?: (T[K] | DeepPartial<T[K]>);
    };
    const classNamePrefix = "highcharts-datagrid-";
    const classNames: {
        gridContainer: string;
        outerContainer: string;
        scrollContainer: string;
        innerContainer: string;
        cell: string;
        cellInput: string;
        row: string;
        columnHeader: string;
    };
    const win: Window & typeof globalThis;
}
export default Globals;
