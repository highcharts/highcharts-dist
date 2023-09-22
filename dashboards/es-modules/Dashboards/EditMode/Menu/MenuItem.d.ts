import type CSSJSONObject from '../../CSSJSONObject';
import { HTMLDOMElement } from '../../../Core/Renderer/DOMElementType.js';
import Menu from './Menu.js';
declare class MenuItem {
    static defaultOptions: Partial<MenuItem.Options>;
    constructor(menu: Menu, options: MenuItem.Options);
    menu: Menu;
    options: MenuItem.Options;
    container: HTMLDOMElement;
    innerElement?: HTMLDOMElement;
    isActive: boolean;
    private setContainer;
    setInnerElement(): HTMLDOMElement | undefined;
    update(): void;
    activate(): void;
    deactivate(): void;
}
declare namespace MenuItem {
    interface ItemOptions {
        id: string;
        name?: string;
        type: 'icon' | 'toggle' | 'text' | 'button';
        className?: string;
        text?: string;
        langKey?: string;
        style?: CSSJSONObject;
        events?: {
            update?: Function;
        };
    }
    interface ButtonOptions extends ItemOptions {
        type: 'button';
        text?: string;
        events?: {
            update?: Function;
            click?: Function;
        };
    }
    interface IconOptions extends ItemOptions {
        type: 'icon';
        icon: string;
        events: {
            update?: Function;
            onmousedown?: Function;
            click?: Function;
        };
    }
    interface ToggleOptions extends ItemOptions {
        type: 'toggle';
        getValue?: (item: MenuItem) => boolean;
        events: {
            update?: Function;
            click: Function;
        };
    }
    interface TextOptions extends ItemOptions {
        type: 'text';
    }
    type Type = 'icon' | 'toggle' | 'text' | 'button';
    type Options = ButtonOptions | IconOptions | ToggleOptions | TextOptions;
}
export default MenuItem;
