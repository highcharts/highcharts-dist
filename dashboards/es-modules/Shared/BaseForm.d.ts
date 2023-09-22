declare abstract class BaseForm {
    constructor(parentDiv: HTMLElement, iconsURL: string);
    container: HTMLElement;
    closeButton: HTMLElement;
    type?: string;
    iconsURL: string;
    /**
     * Create popup div container.
     *
     * @param {HTMLElement} parentDiv
     * Parent div to attach popup.
     *
     * @param  {string} className
     * Class name of the popup.
     *
     * @return {HTMLElement}
     * Popup div.
     */
    protected createPopupContainer(parentDiv: HTMLElement, className?: string): HTMLElement;
    /**
     * Create HTML element and attach click event to close popup.
     *
     * @param {string} className
     * Class name of the close button.
     *
     * @return {HTMLElement}
     * Close button.
     */
    protected addCloseButton(className?: string): HTMLElement;
    /**
     * Close button events.
     * @return {void}
     */
    closeButtonEvents(): void;
    /**
     * Reset content of the current popup and show.
     *
     * @param {string} toolbarClass
     * Class name of the toolbar which styles should be reset.
     */
    showPopup(toolbarClass?: string): void;
    /**
     * Hide popup.
     */
    closePopup(): void;
}
interface BaseForm {
}
export default BaseForm;
