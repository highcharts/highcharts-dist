import type GUIElement from './Layout/GUIElement';
import type Board from './Board';
/**
 * Global Dashboards namespace in classic `<scripts>`-based implementations.
 *
 * @namespace Dashboards
 */
declare namespace Globals {
    /**
     * Any type for objects with mixed property types.
     *
     * **Note:** This is not type safe and should be used only for property
     *           loops.
     */
    type AnyRecord = Record<string, any>;
    /**
     * Utility type to mark recursively all properties and sub-properties
     * optional.
     */
    type DeepPartial<T> = {
        [K in keyof T]?: (T[K] | DeepPartial<T[K]>);
    };
    /**
     * Prefix of a GUIElement HTML class name.
     */
    const classNamePrefix = "highcharts-dashboards-";
    /** @internal */
    const classNames: {
        layout: string;
        cell: string;
        cellHover: string;
        cellActive: string;
        cellLoading: string;
        row: string;
        layoutsWrapper: string;
        boardContainer: string;
    };
    /** @internal */
    const guiElementType: Record<string, GUIElement.GUIElementType>;
    /** @internal */
    const responsiveBreakpoints: Record<string, string>;
    /**
     * Contains all Board instances of this window.
     */
    const boards: Array<Board | undefined>;
    /**
     * Reference to the window used by Dashboards.
     */
    const win: Window & typeof globalThis;
}
export default Globals;
