import type { ComponentType } from '../Components/ComponentType';
import type Cell from '../Layout/Cell';
import type Layout from '../Layout/Layout';
import type Row from '../Layout/Row';
import type Component from '../Components/Component.js';
declare namespace Bindings {
    interface MountedComponent {
        cell: Cell;
        component: ComponentType;
        options: Partial<Component.ComponentOptions>;
    }
    function addComponent(options: Partial<ComponentType['options']>, cell?: Cell): Promise<(Component | void)>;
    /** @internal */
    function componentFromJSON(json: Component.JSON, cellContainer: (HTMLElement | undefined)): (Component | undefined);
    function getCell(idOrElement: string): (Cell | undefined);
    function getRow(idOrElement: string): (Row | undefined);
    function getLayout(idOrElement: string): (Layout | undefined);
}
export default Bindings;
