import type EditMode from '../EditMode';
import { HTMLDOMElement } from '../../../Core/Renderer/DOMElementType.js';
import MenuItem from './MenuItem.js';
declare class Menu {
    static items: Record<string, MenuItem.Options>;
    constructor(parentElement: HTMLDOMElement, options: Menu.Options, editMode: EditMode, parent?: any);
    parentElement: HTMLDOMElement;
    editMode: EditMode;
    options: Menu.Options;
    container: HTMLDOMElement;
    isVisible: boolean;
    items: Record<string, MenuItem>;
    activeItems: Array<MenuItem>;
    parent: any;
    currentElementId?: string;
    private setContainer;
    initItems(itemsSchemas: Record<string, MenuItem.Options>, activeItems?: boolean): void;
    setActiveItems(items: Array<string>): void;
    deactivateActiveItems(): void;
    updateActiveItems(): void;
    destroy(): void;
}
declare namespace Menu {
    interface Options {
        /**
         * The class name of the menu's container.
         */
        className?: string;
        /**
         * The list of items in the context menu.
         * @default ['editMode']
         */
        items?: Array<MenuItem.Options | string>;
        /**
         * The class name of the menu's items.
         * Applied to each item in the context menu.
         */
        itemsClassName?: string;
        /**
         * Whether to enable the context menu.
         */
        enabled?: boolean;
    }
}
export default Menu;
