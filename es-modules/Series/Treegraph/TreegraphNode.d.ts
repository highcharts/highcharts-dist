import type TreegraphSeries from './TreegraphSeries.js';
import TreegraphPoint from './TreegraphPoint.js';
declare const TreemapNode: typeof import("../Treemap/TreemapNode.js").default;
/**
 * @private
 * @class
 */
declare class TreegraphNode extends TreemapNode {
    mod: number;
    thread?: TreegraphNode;
    shift: number;
    change: number;
    children: Array<TreegraphNode>;
    x?: number;
    y?: number;
    preX: number;
    oldParentNode?: TreegraphNode;
    hidden: boolean;
    nodeHeight?: number;
    wasVisited: boolean;
    collapsed: boolean;
    /**
     * Get the next left node which is either first child or thread.
     *
     * @return {TreegraphNode|undefined}
     *         Next left node child or thread.
     */
    nextLeft(this: TreegraphNode): (TreegraphNode | undefined);
    /**
     * Get the next right node which is either last child or thread.
     *
     * @return {TreegraphNode|undefined}
     *         Next right node child or thread.
     */
    nextRight(this: TreegraphNode): (TreegraphNode | undefined);
    /**
     * Return the left one of the greatest uncommon ancestors of a
     * leftInternal node and it's right neighbor.
     *
     * @param {TreegraphNode} leftIntNode
     * @param {TreegraphNode} defaultAncestor
     * @return {TreegraphNode}
     *         Left one of the greatest uncommon ancestors of a leftInternal
     *         node and it's right neighbor.
     *
     */
    getAncestor(this: TreegraphNode, leftIntNode: TreegraphNode, defaultAncestor: TreegraphNode): TreegraphNode;
    /**
     * Get node's first sibling, which is not hidden.
     *
     * @return {TreegraphNode|undefined}
     *         First sibling of the node which is not hidden or undefined, if it
     *         does not exists.
     */
    getLeftMostSibling(this: TreegraphNode): (TreegraphNode | undefined);
    /**
     * Check if the node is a leaf (if it has any children).
     *
     * @return {boolean}
     *         If the node has no visible children return true.
     */
    hasChildren(): (boolean | undefined);
    /**
     * Get node's left sibling (if it exists).
     *
     * @return {TreegraphNode|undefined}
     *         Left sibling of the node
     */
    getLeftSibling(this: TreegraphNode): TreegraphNode | undefined;
    /**
     * Get the node's first child (if it exists).
     *
     * @return {TreegraphNode|undefined}
     *         Node's first child which isn't hidden.
     */
    getLeftMostChild(this: TreegraphNode): (TreegraphNode | undefined);
    /**
     * Get the node's last child (if it exists).
     *
     * @return {TreegraphNode|undefined}
     *         Node's last child which isn't hidden.
     */
    getRightMostChild(this: TreegraphNode): (TreegraphNode | undefined);
    /**
     * Get the parent of current node or return undefined for root of the
     * tree.
     *
     * @return {TreegraphNode|undefined}
     *         Node's parent or undefined for root.
     */
    getParent(this: TreegraphNode): (TreegraphNode | undefined);
    /**
     * Get node's first child which is not hidden.
     *
     * @return {TreegraphNode|undefined}
     *         First child.
     */
    getFirstChild(this: TreegraphNode): (TreegraphNode | undefined);
}
interface TreegraphNode {
    point: TreegraphPoint;
    ancestor: TreegraphNode;
    column: number;
    parentNode: TreegraphNode;
    relativeXPosition: number;
    xPosition: number;
    yPosition: number;
    nodeSizeX: number;
    nodeSizeY: number;
    series: TreegraphSeries;
}
export default TreegraphNode;
