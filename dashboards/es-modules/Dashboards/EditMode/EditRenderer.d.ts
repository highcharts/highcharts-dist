import type MenuItem from './Menu/MenuItem.js';
import type CSSObject from '../../Core/Renderer/CSSObject';
import type EditMode from './EditMode.js';
import EditGlobals from './EditGlobals.js';
/**
 * Function to create a context button.
 * @internal
 *
 * @param parentElement
 * The element to which the new element should be appended.
 *
 * @param editMode
 * EditMode instance.
 *
 * @returns
 * Context button element.
 */
declare function renderContextButton(parentNode: HTMLElement, editMode: EditMode): HTMLElement | undefined;
/**
 * Creates the collapsable header element.
 * @internal
 *
 * @param parentElement
 * The HTMLElement to which the element should be rendered to.
 *
 * @param options
 * Nested header options.
 *
 * @returns the outer element and content in the collapsable div.
 */
declare function renderCollapseHeader(parentElement: HTMLElement, options: NestedHeaderFormFieldOptions): {
    outerElement: HTMLElement;
    content: HTMLElement;
};
/**
 * Function to create select element.
 *
 * @param parentElement
 * The element to which the new element should be appended.
 *
 * @param options
 * Select form field options.
 *
 * @returns
 * Select element
 */
declare function renderSelect(parentElement: HTMLElement, options: SelectFormFieldOptions): HTMLElement | undefined;
/**
 * Function to create toggle element.
 *
 * @param parentElement
 * The element to which the new element should be appended.
 *
 * @param options
 * Form field options
 *
 * @returns
 * Toggle element
 */
declare function renderToggle(parentElement: HTMLElement, options: ToggleFormFieldOptions): HTMLElement | undefined;
/**
 * Function to create text element.
 *
 * @param parentElement
 * The element to which the new element should be appended
 *
 * @param text
 * Text to be displayed
 *
 * @param callback
 * Callback function to be fired on the click
 *
 * @returns text Element
 */
declare function renderText(parentElement: HTMLElement, options: TextOptions): HTMLElement | undefined;
/**
 * Function to create Icon element.
 *
 * @param parentElement
 * The element to which the new element should be appended.
 *
 * @param icon
 * Icon URL
 *
 * @param callback
 * Callback function
 *
 * @returns
 * Icon Element
 */
declare function renderIcon(parentElement: HTMLElement, options: IconFormFieldOptions): HTMLElement | undefined;
/**
 * Function to create input element.
 *
 * @param parentElement
 * the element to which the new element should be appended
 *
 * @param options
 * Form field options
 *
 * @returns
 * Input Element
 */
declare function renderInput(parentElement: HTMLElement, options: FormFieldOptions): HTMLElement | undefined;
/**
 * Function to create textarea element.
 *
 * @param parentElement
 * The element to which the new element should be appended
 *
 * @param options
 * Form field options
 *
 * @returns
 * textarea Element
 */
declare function renderTextarea(parentElement: HTMLElement, options: FormFieldOptions): HTMLElement | undefined;
/**
 * Function to render the input of type checkbox.
 *
 * @param parentElement
 * An element to which render the checkbox to
 *
 * @param checked
 * Whether the checkbox should be checked or not.
 *
 * @returns
 * The checkbox element
 */
declare function renderCheckbox(parentElement: HTMLElement, checked?: boolean): HTMLElement | undefined;
/**
 * Function to create button element.
 *
 * @param parentElement
 * the element to which the new element should be appended
 *
 * @param options
 * Button field options
 *
 * @returns
 * Button Element
 */
declare function renderButton(parentElement: HTMLElement, options: ButtonOptions): HTMLElement | undefined;
/**
 * Get the renderer function based on the type of the element to render.
 *
 * @param type
 * Type of the element to render
 *
 * @returns
 * function to render a specific element
 */
declare function getRendererFunction(type: RendererElement): Function | undefined;
declare const EditRenderer: {
    renderSelect: typeof renderSelect;
    renderToggle: typeof renderToggle;
    renderText: typeof renderText;
    renderCollapseHeader: typeof renderCollapseHeader;
    renderIcon: typeof renderIcon;
    renderContextButton: typeof renderContextButton;
    renderInput: typeof renderInput;
    renderTextarea: typeof renderTextarea;
    renderCheckbox: typeof renderCheckbox;
    renderButton: typeof renderButton;
    getRendererFunction: typeof getRendererFunction;
};
export default EditRenderer;
export interface ButtonOptions {
    callback?: Function;
    text?: string;
    className?: string;
    icon?: string;
    isDisabled?: boolean;
    style?: CSSObject;
}
export interface IconFormFieldOptions {
    className?: string;
    icon: string;
    click?: Function;
    mousedown?: Function;
    item?: MenuItem;
    callback?: Function;
}
export interface FormFieldOptions {
    propertyPath?: Array<string>;
    iconsURLPrefix?: string;
    icon?: string;
    id: string;
    name: string;
    callback?: Function;
    title?: string;
    onchange?: Function;
    value?: string;
    className?: string;
    enabledOnOffLabels?: boolean;
}
export interface SelectFormFieldOptions extends FormFieldOptions {
    title: string;
    value: string;
    selectOptions: Array<SelectFormFieldItemOptions>;
}
export interface SelectFormFieldItemOptions {
    iconsURLPrefix: string;
    name: string;
    iconURL: string;
}
export interface TextOptions {
    title: string;
    className?: string;
    isLabel?: boolean;
}
export interface ToggleFormFieldOptions {
    title?: string;
    value: boolean;
    enabledOnOffLabels?: boolean;
    className?: string;
    onchange?: (value: boolean) => void;
    id: string;
    name: string;
    lang: EditGlobals.LangOptions;
}
export interface NestedHeaderFormFieldOptions {
    name: string;
    showToggle?: boolean;
    onchange?: (value: boolean) => void;
    isEnabled?: boolean;
    isNested?: boolean;
    iconsURLPrefix?: string;
    lang: EditGlobals.LangOptions;
}
export type RendererElement = ('select' | 'toggle' | 'text' | 'collapse' | 'icon' | 'contextButton' | 'input' | 'textarea' | 'checkbox' | 'button');
