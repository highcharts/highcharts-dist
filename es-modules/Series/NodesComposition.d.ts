import type Point from '../Core/Series/Point';
import type AnimationOptions from '../Core/Animation/AnimationOptions';
import type { PointOptions, PointShortOptions } from '../Core/Series/PointOptions';
import type Series from '../Core/Series/Series';
import type SeriesOptions from '../Core/Series/SeriesOptions';
import type { StatesOptionsKey } from '../Core/Series/StatesOptions';
declare module '../Core/Series/PointBase' {
    interface PointBase {
        name?: string;
    }
}
declare module '../Core/Series/SeriesBase' {
    interface SeriesBase {
        nodes?: Array<NodesComposition.PointComposition>;
    }
}
declare namespace NodesComposition {
    class PointComposition extends Point {
        from: string;
        fromNode: PointComposition;
        isNode: true;
        level?: unknown;
        linksFrom: Array<PointComposition>;
        linksTo: Array<PointComposition>;
        mass: number;
        options: PointCompositionOptions;
        outgoing?: boolean;
        series: SeriesComposition;
        to: string;
        toNode: PointComposition;
        weight?: number;
        y?: (number | null);
        getSum(): number;
        hasShape(): boolean;
        init(series: SeriesComposition, options: PointCompositionOptions): PointComposition;
        offset(point: PointComposition, coll: string): (number | undefined);
        setNodeState(state?: StatesOptionsKey): void;
    }
    interface PointCompositionOptions extends PointOptions {
        id?: string;
        level?: number;
        mass?: number;
        outgoing?: boolean;
        weight?: (number | null);
    }
    class SeriesComposition extends Series {
        data: Array<PointComposition>;
        nodeLookup: Record<string, PointComposition>;
        nodes: Array<PointComposition>;
        options: SeriesCompositionOptions;
        pointClass: typeof PointComposition;
        points: Array<PointComposition>;
        createNode(id: string): PointComposition;
        generatePoints(): void;
    }
    interface SeriesCompositionOptions extends SeriesOptions {
        mass?: number;
        nodes?: Array<PointCompositionOptions>;
    }
    /**
     * @private
     */
    function compose<T extends typeof Series>(PointClass: typeof Point, SeriesClass: T): (T & typeof SeriesComposition);
    /**
     * Create a single node that holds information on incoming and outgoing
     * links.
     * @private
     */
    function createNode(this: SeriesComposition, id: string): PointComposition;
    /**
     * Destroy all nodes and links.
     * @private
     */
    function destroy(this: SeriesComposition): void;
    /**
     * Extend generatePoints by adding the nodes, which are Point objects but
     * pushed to the this.nodes array.
     * @private
     */
    function generatePoints(this: SeriesComposition): void;
    /**
     * When hovering node, highlight all connected links. When hovering a link,
     * highlight all connected nodes.
     * @private
     */
    function setNodeState(this: PointComposition, state?: StatesOptionsKey): void;
    /**
     * When updating a node, don't update `series.options.data`, but
     * `series.options.nodes`
     * @private
     */
    function updateNode(this: PointComposition, options: (PointOptions | PointShortOptions), redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>), runEvent?: boolean): void;
}
export default NodesComposition;
