import type Cell from '../Layout/Cell';
import type ComponentType from '../Components/ComponentType';
import type EditMode from './EditMode';
import type Row from '../Layout/Row';
import AccordionMenu from './AccordionMenu.js';
import BaseForm from '../../Shared/BaseForm.js';
/**
 * Class which creates the sidebar and handles its behaviour.
 */
declare class SidebarPopup extends BaseForm {
    static components: Array<SidebarPopup.AddComponentDetails>;
    /**
     * Constructor of the SidebarPopup class.
     *
     * @param parentDiv
     * Element to which the sidebar will be appended.
     * @param iconsURL
     * URL to the icons.
     * @param editMode
     * Instance of EditMode.
     */
    constructor(parentDiv: HTMLElement, iconsURL: string, editMode: EditMode);
    /**
     * Instance of EditMode.
     */
    editMode: EditMode;
    /**
     * Whether the sidebar is visible.
     */
    isVisible: boolean;
    accordionMenu: AccordionMenu;
    /**
     * Function to detect on which side of the screen should the sidebar be.
     *
     * @param context
     * The cell or row which is the context of the sidebar.
     * @returns
     * Whether the sidebar should be on the right side of the screen.
     */
    private detectRightSidebar;
    /**
     * Function to remove the class names from the sidebar.
     */
    private removeClassNames;
    /**
     * Function to add the class names to the sidebar depending on the position
     * of the sidebar.
     *
     * @param isRightSidebar
     * Whether the sidebar should be on the right side of the screen.
     */
    private addClassNames;
    /**
     * Function to show the sidebar.
     *
     * @param context
     * The cell or row which is the context of the sidebar.
     */
    show(context?: Cell | Row): void;
    generateContent(context?: Cell | Row): void;
    renderAddComponentsList(): void;
    onDropNewComponent(dropContext: Cell | Row, componentOptions: Partial<ComponentType['options']>): Cell | void;
    /**
     * Function to hide the sidebar.
     */
    hide(): void;
    /**
     * Function called when the close button is pressed.
     */
    closeButtonEvents(): void;
    renderHeader(title: string, iconURL: string): void;
    /**
     * Function to create and add the close button to the sidebar.
     *
     * @param className
     * Class name of the close button.
     * @returns Close button element
     */
    protected addCloseButton(className?: string): HTMLElement;
    /**
     * Function that creates the container of the sidebar.
     *
     * @param parentDiv
     * The parent div to which the sidebar will be appended.
     * @param className
     * Class name of the sidebar.
     * @returns The container of the sidebar.
     */
    protected createPopupContainer(parentDiv: HTMLElement, className?: string): HTMLElement;
}
declare namespace SidebarPopup {
    interface Options {
    }
    interface AddComponentDetails {
        text: string;
        onDrop: Function;
    }
}
export default SidebarPopup;
