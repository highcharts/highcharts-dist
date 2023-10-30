import type DataTable from '../Data/DataTable';
declare const DataGridUtils: {
    dataTableCellToString(cell: DataTable.CellType): string;
    emptyHTMLElement(element: HTMLElement): void;
    makeDiv: (className: string, id?: string) => HTMLElement;
};
export default DataGridUtils;
