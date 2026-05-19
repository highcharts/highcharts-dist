import type { HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
/**
 * @private
 */
declare class DOMElementProvider {
    constructor();
    elements: Array<HTMLDOMElement>;
    createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
    /**
     * Destroy created element, removing it from the DOM.
     * @private
     */
    removeElement(element: HTMLDOMElement): void;
    /**
     * Destroy all created elements, removing them from the DOM.
     * @private
     */
    destroyCreatedElements(): void;
}
export default DOMElementProvider;
