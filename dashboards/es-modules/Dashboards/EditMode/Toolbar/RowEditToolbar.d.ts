import EditMode from '../EditMode.js';
import Row from '../../Layout/Row.js';
import MenuItem from '../Menu/MenuItem.js';
import EditToolbar from './EditToolbar.js';
/**
 * @internal
 */
declare class RowEditToolbar extends EditToolbar {
    protected static readonly defaultOptions: RowEditToolbar.Options;
    static getMenuItemsConfig(options: EditMode.Options, iconURLPrefix: string): MenuItem.Options[];
    constructor(editMode: EditMode);
    row?: Row;
    editedRow?: Row;
    refreshOutline(x: number, y: number): void;
    showToolbar(row: Row): void;
    onRowOptions(e: any): void;
    onRowDestroy(e: any): void;
    resetEditedRow(): void;
}
declare namespace RowEditToolbar {
    interface Options extends EditToolbar.Options {
    }
}
export default RowEditToolbar;
