import type Component from './Component.js';
declare class EditableOptions {
    static defaultBindings: EditableOptions.OptionsBindings;
    static defaultTypeMap: Record<string, string>;
    component: Component;
    bindings: EditableOptions.OptionsBindings;
    constructor(component: Component, bindings?: EditableOptions.OptionsBindings);
    getOptions(): (Array<EditableOptions.Options>);
}
declare namespace EditableOptions {
    /**
     * Configuration for a single option in editable options. If type is
     * `nested` the options are rendered in the accordion menu, with rest of the
     * options defined in the detailed options.
     */
    interface Options {
        /**
         * Name of the option which will be displayed on the label.
         */
        name: string;
        /**
         * Type of the editable element.
         */
        type: ElementType;
        /**
         * Detailed options that should be included in the accordion menu.
         * Available for `nested` type.
         */
        nestedOptions?: Array<NestedOptions>;
        /**
         * Relative path to the option, that should be changed in the component.
         * eg: `['chart', 'title', 'text']`
         */
        propertyPath?: Array<string>;
        /**
         * Items that should be included in the select element.
         */
        selectOptions?: Array<SelectOptions>;
    }
    /**
     * Options of the single option in the select dropdown.
     */
    interface SelectOptions {
        /**
         * Name of the item that should be displayed.
         */
        name: string;
        /**
         * URL of the icon that should be displayed. It is concatenated with
         * `iconURLPrefix` option.
         */
        iconURL?: string;
    }
    /**
     * Type of the input to be displayed.
     */
    type ElementType = 'input' | 'text' | 'textarea' | 'toggle' | 'select' | 'nested';
    /**
     * Configuration for a single option in detailed options.
     */
    interface NestedOptions {
        /**
         * Name of the option that should be displayed.
         */
        name: string;
        /**
         * whether the option should have a toggle to be enabled or disabled.
         */
        showToggle?: boolean;
        /**
         * Relative path to the option, that should be changed in the component.
         */
        propertyPath?: Array<string>;
        /**
         * Options that should be included in the folded menu.
         */
        options: Array<Options>;
    }
    interface OptionsBindings {
        keyMap: Record<string, string>;
        typeMap: Record<string, string>;
        skipRedraw: string[];
    }
}
export default EditableOptions;
