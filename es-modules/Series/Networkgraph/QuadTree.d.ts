import type Point from '../../Core/Series/Point';
import QuadTreeNode from './QuadTreeNode.js';
/**
 * The QuadTree class. Used in Networkgraph chart as a base for Barnes-Hut
 * approximation.
 *
 * @private
 * @class
 * @name Highcharts.QuadTree
 *
 * @param {number} x
 *        Left position of the plotting area
 * @param {number} y
 *        Top position of the plotting area
 * @param {number} width
 *        Width of the plotting area
 * @param {number} height
 *        Height of the plotting area
 */
declare class QuadTree {
    constructor(x: number, y: number, width: number, height: number);
    box: Record<string, number>;
    maxDepth: number;
    root: QuadTreeNode;
    /**
     * Calculate mass of the each QuadNode in the tree.
     */
    calculateMassAndCenter(): void;
    /**
     * Insert nodes into the QuadTree
     *
     * @param {Array<Highcharts.Point>} points
     *        Points as nodes
     */
    insertNodes(points: Array<Point>): void;
    /**
     * Depth first traversal (DFS). Using `before` and `after` callbacks,
     * we can get two results: preorder and postorder traversals, reminder:
     *
     * ```
     *     (a)
     *     / \
     *   (b) (c)
     *   / \
     * (d) (e)
     * ```
     *
     * DFS (preorder): `a -> b -> d -> e -> c`
     *
     * DFS (postorder): `d -> e -> b -> c -> a`
     *
     * @param {Highcharts.QuadTreeNode|null} node
     *        QuadTree node
     * @param {Function} [beforeCallback]
     *        Function to be called before visiting children nodes.
     * @param {Function} [afterCallback]
     *        Function to be called after visiting children nodes.
     */
    visitNodeRecursive(node: (QuadTreeNode | null), beforeCallback?: (Function | null), afterCallback?: (Function | null)): void;
}
export default QuadTree;
