import type Globals from './Globals';
import Board from './Board.js';
import Sync from './Components/Sync/Sync.js';
import ComponentRegistry from './Components/ComponentRegistry.js';
declare namespace PluginHandler {
    interface DashboardsPlugin<T = (Globals.AnyRecord | undefined)> {
        /** @internal */
        custom: T;
        /**
         * Maximal version of plugin that is compatible with dashboard
         */
        maxRevision?: number;
        /**
         * Minimal version of plugin that is compatible with dashboard
         */
        minRevision?: number;
        /**
         * Name of plugin
         */
        name: string;
        /** @internal */
        onRegister: PluginHandler.EventCallback;
        /** @internal */
        onUnregister: PluginHandler.EventCallback;
    }
    /** @internal */
    interface Event {
        ComponentRegistry: typeof ComponentRegistry;
        Board: typeof Board;
        Sync: typeof Sync;
        revision: number;
    }
    /** @internal */
    type EventCallback = (e: Event) => void;
    /** @internal */
    const registry: Record<string, DashboardsPlugin>;
    /**
     * Revision of the Dashboard plugin API.
     *
     * @internal
     */
    const revision: number;
    /**
     * Adds a dashboard plugin.
     *
     * @param {Dashboards.Plugin} plugin
     * Dashboard plugin to register.
     *
     * @param {string} [key]
     * Plugin key for the registry. (Default: `plugin.name`)
     */
    function addPlugin(plugin: DashboardsPlugin, key?: string): void;
    /**
     * Removes a dashboard plugin.
     *
     * @param {string} key
     * Plugin key in the registry.
     */
    function removePlugin(key: string): void;
}
export default PluginHandler;
