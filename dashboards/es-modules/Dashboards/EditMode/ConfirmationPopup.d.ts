import { HTMLDOMElement } from '../../Core/Renderer/DOMElementType.js';
import BaseForm from '../../Shared/BaseForm.js';
import CellEditToolbar from './Toolbar/CellEditToolbar.js';
import RowEditToolbar from './Toolbar/RowEditToolbar.js';
import EditMode from './EditMode.js';
/**
 * Class to create confirmation popup.
 */
declare class ConfirmationPopup extends BaseForm {
    /**
     * Constructs an instance of the ConfirmationPopup.
     *
     * @param parentDiv
     * Parent div where the popup will be added.
     *
     * @param iconsURL
     * URL to the icons.
     *
     * @param editMode
     * The EditMode instance.
     *
     * @param options
     * Options for confirmation popup.
     */
    constructor(parentDiv: HTMLElement, iconsURL: string, editMode: EditMode, options?: ConfirmationPopup.Options);
    /**
     * Container for buttons.
     */
    buttonContainer: HTMLDOMElement | undefined;
    /**
     * Container for popup content.
     */
    contentContainer: HTMLDOMElement | undefined;
    /**
     * The EditMode instance.
     */
    editMode: EditMode;
    /**
     * Options for confirmation popup.
     */
    options?: ConfirmationPopup.Options;
    /**
     * Returns popup container.
     *
     * @param parentDiv
     * Parent div where the popup will be added.
     *
     * @param className
     * Class name added to the popup container.
     */
    protected createPopupContainer(parentDiv: HTMLElement, className?: string): HTMLElement;
    /**
     * Adds close button to the popup.
     *
     * @param className
     * Class name added to the close button.
     */
    protected addCloseButton(className?: string): HTMLElement;
    /**
     * Adds content inside the popup.
     *
     * @param options
     * Options for confirmation popup.
     */
    renderContent(options: ConfirmationPopup.ContentOptions): void;
    /**
     * Shows confirmation popup.
     *
     * @param options
     * Options for confirmation popup.
     */
    show(options: ConfirmationPopup.ContentOptions): void;
    /**
     * Hides confirmation popup.
     */
    closePopup(): void;
}
declare namespace ConfirmationPopup {
    /**
     * Options for confirmation popup.
     */
    interface Options {
        /**
         * Close icon
         *
         * Try it:
         *
         * {@link https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/dashboards/edit-mode/change-close-icon/ | Change close icon}
         */
        close: CloseIcon;
    }
    /**
     * Close icon options.
     */
    interface CloseIcon {
        /**
         * Icon's URL.
         */
        icon: string;
    }
    interface ContentOptions {
        confirmButton: ConfirmButton;
        cancelButton: ConfirmButton;
        text: string;
    }
    interface ConfirmButton {
        value: string;
        callback: Function;
        context: RowEditToolbar | CellEditToolbar;
    }
    interface CancelButton {
        value: string;
        callback: Function;
    }
}
export default ConfirmationPopup;
