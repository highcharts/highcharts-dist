declare namespace RendererUtilities {
    interface BoxObject {
        align?: number;
        pos?: number;
        rank?: (number | null);
        size: number;
        target: number;
        targets?: Array<number>;
    }
    interface DistributedBoxArray<T extends BoxObject> extends Array<(T & DistributedBoxObject)> {
        reducedLen?: number;
    }
    interface DistributedBoxObject extends BoxObject {
        pos?: number;
    }
    /**
     * General distribution algorithm for distributing labels of differing size
     * along a confined length in two dimensions. The algorithm takes an array
     * of objects containing a size, a target and a rank. It will place the
     * labels as close as possible to their targets, skipping the lowest ranked
     * labels if necessary.
     * @private
     */
    function distribute<T extends BoxObject>(boxes: DistributedBoxArray<T>, len: number, maxDistance?: number): DistributedBoxArray<T>;
}
export default RendererUtilities;
