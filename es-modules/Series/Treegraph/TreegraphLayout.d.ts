import type TreegraphSeries from './TreegraphSeries';
import TreegraphNode from './TreegraphNode.js';
/**
 * @private
 * @class
 */
declare class TreegraphLayout {
    /**
     * Create dummy node, which allows to manually set the level of the node.
     *
     * @param {TreegraphNode} parent
     *        Parent node, to which the dummyNode should be connected.
     * @param {TreegraphNode} child
     *        Child node, which should be connected to dummyNode.
     * @param {number} gapSize
     *        Remaining gap size.
     *
     * @return {TreegraphNode}
     *         DummyNode as a parent of nodes, which column changes.
     */
    static createDummyNode(parent: TreegraphNode, child: TreegraphNode, gapSize: number): TreegraphNode;
    /**
     * Walker algorithm of positioning the nodes in the treegraph improved by
     * Buchheim to run in the linear time. Basic algorithm consists of post
     * order traversal, which starts from going bottom up (first walk), and then
     * pre order traversal top to bottom (second walk) where adding all of the
     * modifiers is performed.
     * link to the paper: http://dirk.jivas.de/papers/buchheim02improving.pdf
     *
     * @param {TreegraphSeries} series the Treegraph series
     */
    calculatePositions(series: TreegraphSeries): void;
    /**
     * Create dummyNodes as parents for nodes, which column is changed.
     *
     * @param {Array<TreegraphNode>} nodes
     *        All of the nodes.
     */
    beforeLayout(nodes: TreegraphNode[]): void;
    /**
     * Reset the calculated values from the previous run.
     * @param {TreegraphNode[]} nodes all of the nodes.
     */
    resetValues(nodes: TreegraphNode[]): void;
    /**
     * Assigns the value to each node, which indicates, what is his sibling
     * number.
     *
     * @param {TreegraphNode} node
     *        Root node
     * @param {number} index
     *        Index to which the nodes position should be set
     */
    calculateRelativeX(node: TreegraphNode, index: number): void;
    /**
     * Recursive post order traversal of the tree, where the initial position
     * of the nodes is calculated.
     *
     * @param {TreegraphNode} node
     *        The node for which the position should be calculated.
     */
    firstWalk(node: TreegraphNode): void;
    /**
     * Pre order traversal of the tree, which sets the final xPosition of the
     * node as its preX value and sum of all if it's parents' modifiers.
     *
     * @param {TreegraphNode} node
     *        The node, for which the final position should be calculated.
     * @param {number} modSum
     *        The sum of modifiers of all of the parents.
     */
    secondWalk(node: TreegraphNode, modSum: number): void;
    /**
     *  Shift all children of the current node from right to left.
     *
     * @param {TreegraphNode} node
     *        The parent node.
     */
    executeShifts(node: TreegraphNode): void;
    /**
     * The core of the algorithm. The new subtree is combined with the previous
     * subtrees. Threads are used to traverse the inside and outside contours of
     * the left and right subtree up to the highest common level. The vertices
     * are left(right)Int(Out)node where Int means internal and Out means
     * outernal. For summing up the modifiers along the contour we use the
     * `left(right)Int(Out)mod` variable. Whenever two nodes of the inside
     * contours are in conflict we commute the left one of the greatest uncommon
     * ancestors using the getAncestor function and we call the moveSubtree
     * method to shift the subtree and prepare the shifts of smaller subtrees.
     * Finally we add a new thread (if necessary) and we adjust ancestor of
     * right outernal node or defaultAncestor.
     *
     * @param {TreegraphNode} node
     * Treegraph node.
     *
     * @param {TreegraphNode} defaultAncestor
     * The default ancestor of the passed node.
     */
    apportion(node: TreegraphNode, defaultAncestor: TreegraphNode): TreegraphNode;
    /**
     * Shifts the subtree from leftNode to rightNode.
     *
     * @param {TreegraphNode} leftNode
     * Left treegraph node.
     *
     * @param {TreegraphNode} rightNode
     * Right treegraph node.
     *
     * @param {number} shift
     * The value, by which the subtree should be moved.
     */
    moveSubtree(leftNode: TreegraphNode, rightNode: TreegraphNode, shift: number): void;
    /**
     * Clear values created in a beforeLayout.
     *
     * @param {TreegraphNode[]} nodes
     *        All of the nodes of the Treegraph Series.
     */
    afterLayout(nodes: TreegraphNode[]): void;
}
export default TreegraphLayout;
