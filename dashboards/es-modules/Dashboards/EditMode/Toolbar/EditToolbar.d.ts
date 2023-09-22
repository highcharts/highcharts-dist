import EditMode from '../EditMode.js';
import Menu from '../Menu/Menu.js';
import { HTMLDOMElement } from '../../../Core/Renderer/DOMElementType.js';
import GUIElement from '../../Layout/GUIElement.js';
/**
 * Abstract Class of Edit Toolbar.
 * @internal
 */
declare abstract class EditToolbar {
    constructor(editMode: EditMode, options: EditToolbar.Options);
    container: HTMLDOMElement;
    editMode: EditMode;
    menu: Menu;
    isVisible: boolean;
    iconURLPrefix: string;
    options: EditToolbar.Options;
    outline?: HTMLDOMElement;
    hide(): void;
    refreshOutline(x: number, y: number, guiElement?: GUIElement, offset?: number): void;
    hideOutline(): void;
    setPosition(x?: number, y?: number): void;
}
declare namespace EditToolbar {
    interface Options {
        /**
         * Class name for the toolbar.
         */
        className: string;
        /**
         * Whether or not the toolbar is enabled.
         */
        enabled: boolean;
        /**
         * Options for the toolbar menu.
         */
        menu: Menu.Options;
        /**
         * Whether or not to show the outline.
         */
        outline: boolean;
        /**
         * Class name for the outline.
         */
        outlineClassName: string;
    }
}
export default EditToolbar;
