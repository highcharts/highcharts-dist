import type Point from '../../Core/Series/Point';
/**
 * The QuadTree node class. Used in Networkgraph chart as a base for Barnes-Hut
 * approximation.
 *
 * @private
 * @class
 * @name Highcharts.QuadTreeNode
 *
 * @param {Highcharts.Dictionary<number>} box
 *        Available space for the node
 */
declare class QuadTreeNode {
    constructor(box: Record<string, number>);
    /**
     * Read only. If QuadTreeNode is an external node, Point is stored in
     * `this.body`.
     *
     * @name Highcharts.QuadTreeNode#body
     * @type {boolean|Highcharts.Point}
     */
    body: (boolean | Point);
    box: Record<string, number>;
    boxSize: number;
    /**
     * Read only. Internal nodes when created are empty to reserve the
     * space. If Point is added to this QuadTreeNode, QuadTreeNode is no
     * longer empty.
     *
     * @name Highcharts.QuadTreeNode#isEmpty
     * @type {boolean}
     */
    isEmpty: boolean;
    /**
     * Read only. Flag to determine if QuadTreeNode is internal (and has
     * subnodes with mass and central position) or external (bound to
     * Point).
     *
     * @name Highcharts.QuadTreeNode#isInternal
     * @type {boolean}
     */
    isInternal: boolean;
    isRoot?: boolean;
    mass?: number;
    /**
     * Read only. Array of subnodes. Empty if QuadTreeNode has just one
     * Point. When added another Point to this QuadTreeNode, array is
     * filled with four subnodes.
     *
     * @name Highcharts.QuadTreeNode#nodes
     * @type {Array<Highcharts.QuadTreeNode>}
     */
    nodes: Array<QuadTreeNode>;
    plotX?: number;
    plotY?: number;
    /**
     * When inserting another node into the box, that already hove one node,
     * divide the available space into another four quadrants.
     *
     * Indexes of quadrants are:
     * ```
     * -------------               -------------
     * |           |               |     |     |
     * |           |               |  0  |  1  |
     * |           |   divide()    |     |     |
     * |     1     | ----------->  -------------
     * |           |               |     |     |
     * |           |               |  3  |  2  |
     * |           |               |     |     |
     * -------------               -------------
     * ```
     */
    divideBox(): void;
    /**
     * Determine which of the quadrants should be used when placing node in
     * the QuadTree. Returned index is always in range `< 0 , 3 >`.
     * @private
     */
    getBoxPosition(point: Point): number;
    /**
     * Insert recursively point(node) into the QuadTree. If the given
     * quadrant is already occupied, divide it into smaller quadrants.
     *
     * @param {Highcharts.Point} point
     *        Point/node to be inserted
     * @param {number} depth
     *        Max depth of the QuadTree
     */
    insert(point: Point, depth: number): void;
    /**
     * Each quad node requires it's mass and center position. That mass and
     * position is used to imitate real node in the layout by approximation.
     */
    updateMassAndCenter(): void;
}
export default QuadTreeNode;
