import type { ComponentTypeRegistry } from './ComponentType';
declare namespace ComponentRegistry {
    /**
     *
     * Record of component classes
     * @todo
     *
     */
    const types: ComponentTypeRegistry;
    /**
     * Method used to register new component classes.
     *
     * @param {string} key
     * Registry key of the component class.
     *
     * @param {ComponentType} DataConnectorClass
     * Component class (aka class constructor) to register.
     */
    function registerComponent<T extends keyof ComponentTypeRegistry>(key: T, ComponentClass: ComponentTypeRegistry[T]): boolean;
}
export default ComponentRegistry;
