import MenuItem from './Menu/MenuItem.js';
import Menu from './Menu/Menu.js';
import EditMode from './EditMode.js';
import { HTMLDOMElement } from '../../Core/Renderer/DOMElementType.js';
/**
 * Class to create context menu.
 * @internal
 */
declare class EditContextMenu extends Menu {
    protected static readonly defaultOptions: EditContextMenu.Options;
    /**
     * Default Context menu items.
     */
    static items: Record<string, MenuItem.Options> & {
        editMode: {
            id: string;
            type: string;
            getValue: (item: MenuItem) => boolean;
            langKey: string;
            events: {
                click: (this: MenuItem) => void;
            };
        };
    };
    constructor(parentElement: HTMLElement, options: EditContextMenu.Options, editMode: EditMode, parent?: HTMLElement);
    editMode: EditMode;
    options: EditContextMenu.Options;
    initEvents(): void;
    setVisible(visible: boolean): void;
    updatePosition(ctxButton?: HTMLDOMElement, x?: number, y?: number): void;
}
declare namespace EditContextMenu {
    /**
     * Options for the context menu.
     */
    interface Options extends Menu.Options {
        /**
         * The icon name.
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/edit-mode/change-ctx-icon/ | Change icon}
         */
        icon?: string;
        /**
         * Width of the context menu.
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/edit-mode/ctx-menu-width/ | Change width}
         */
        width?: number;
    }
}
export default EditContextMenu;
