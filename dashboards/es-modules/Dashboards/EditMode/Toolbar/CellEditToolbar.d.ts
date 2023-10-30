import EditMode from '../EditMode.js';
import Cell from '../../Layout/Cell.js';
import MenuItem from '../Menu/MenuItem.js';
import EditToolbar from './EditToolbar.js';
/**
 * @internal
 */
declare class CellEditToolbar extends EditToolbar {
    protected static readonly defaultOptions: CellEditToolbar.Options;
    static getItemsConfig(options: EditMode.Options, iconURLPrefix: string): MenuItem.Options[];
    constructor(editMode: EditMode);
    cell?: Cell;
    editedCell?: Cell;
    showToolbar(cell: Cell): void;
    refreshOutline(): void;
    onCellOptions(): void;
    onCellDestroy(): void;
    resetEditedCell(): void;
}
declare namespace CellEditToolbar {
    interface Options extends EditToolbar.Options {
    }
}
export default CellEditToolbar;
