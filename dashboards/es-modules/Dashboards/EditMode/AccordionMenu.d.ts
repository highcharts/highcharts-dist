import type Component from '../Components/Component';
import type EditableOptions from '../Components/EditableOptions';
/**
 * Accordion menu class.
 */
declare class AccordionMenu {
    constructor(iconsURLPrefix: string, closeSidebar: Function);
    private iconsURLPrefix;
    private closeSidebar;
    private changedOptions;
    private chartOptionsJSON;
    /**
     * Renders the menu for given component.
     *
     * @param container
     * The HTML Element to render the menu in.
     * @param component
     * The component to render the menu for.
     */
    renderContent(container: HTMLElement, component: Component): void;
    /**
     * Update the options object with new nested value, based on the property
     * path. If the objects in the path are not defined, the function will
     * create them.
     *
     * @param propertyPath
     * Path of the property for which the value should be updated.
     * Example: ```['chartOptions', 'chart', 'type']```
     * @param value
     * New value of the property.
     */
    updateOptions(propertyPath: Array<string>, value: boolean | string | number): void;
    /**
     * Renders either a basic or nested element. This function can be recursivly
     * called, if there are multiple nested options.
     *
     * @param options
     * Configuration object of the Component options.
     * @param parentNode
     * A container where the accordion is rendered.
     * @param component
     * the component for which the menu should be rendered.
     */
    renderAccordion(options: EditableOptions.Options, parentNode: HTMLElement, component: Component): void;
    /**
     * Render nested menu for the component.
     *
     * @param parentElement
     * HTML element to which the nested structure should be rendered to
     * @param options
     * configuration object for the options
     * @param component
     * The component instance for the options should be rendered
     */
    renderNested(parentElement: HTMLElement, options: EditableOptions.Options, component: Component): void;
}
export default AccordionMenu;
