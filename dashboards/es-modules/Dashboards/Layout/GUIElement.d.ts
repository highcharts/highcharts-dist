import type { HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
import type { CSSObject } from '../../Core/Renderer/CSSObject';
import type HTMLAttributes from '../../Core/Renderer/HTML/HTMLAttributes';
declare abstract class GUIElement {
    static getOffsets(guiElement: GUIElement, referenceElement?: HTMLDOMElement): Record<string, number>;
    static getDimFromOffsets(offsets: Record<string, number>): Record<string, number>;
    static createElementId(elementType: string): string;
    static getPercentageWidth(width: string): string | undefined;
    /**
     * HTML container of a GUIElement.
     */
    container?: HTMLDOMElement;
    /**
     * The type of a GUIElement instance.
     */
    protected type?: GUIElement.GUIElementType;
    /**
     * The function to remove bindedGUIElement
     * event on GUIElement container.
     */
    removeBindedEventFn?: Function;
    /**
     * The visibility flag.
     */
    isVisible?: boolean;
    /**
     * Create or get existing HTML element as a GUIElement container.
     *
     * @param {GUIElement.ContainerOptions} options
     * Options.
     */
    protected getElementContainer(options: GUIElement.GetElementContainerOptions): HTMLElement;
    /**
     * Destroy the element, its container, event hooks
     * and all properties.
     */
    protected destroy(): void;
    /**
     * Return the GUIElement instance type.
     * @return {GUIElement.GUIElementType|undefined}
     * The GUIElement instance type
     */
    getType(): GUIElement.GUIElementType | undefined;
    protected changeVisibility(setVisible?: boolean, displayStyle?: string): void;
    hide(): void;
    show(): void;
}
declare namespace GUIElement {
    interface GetElementContainerOptions {
        render?: boolean;
        parentContainer?: HTMLDOMElement;
        attribs?: HTMLAttributes;
        style?: CSSObject;
        element?: HTMLElement;
        elementId?: string;
    }
    interface BindedGUIElementEvent extends Event {
        guiElement: GUIElement;
    }
    type GUIElementType = 'row' | 'cell' | 'layout';
}
export default GUIElement;
