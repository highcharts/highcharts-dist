import type ComponentType from './ComponentType.js';
import SharedState from './SharedComponentState.js';
type componentID = ComponentType['id'];
interface ComponentGroup {
    id: string;
    state: SharedState;
    components: componentID[];
    addComponents(components: componentID[]): void;
    removeComponents(components: componentID[]): void;
}
declare class ComponentGroup {
    private static componentGroups;
    static getComponentGroup(groupID: ComponentGroup['id']): ComponentGroup | undefined;
    static addComponentGroup(group: ComponentGroup): void;
    static getGroupsFromComponent(componentID: componentID): ComponentGroup[];
    state: SharedState;
    components: componentID[];
    id: string;
    constructor(id: ComponentGroup['id']);
    getSharedState(): ComponentGroup['state'];
    on(): void;
    emit(): void;
}
export default ComponentGroup;
