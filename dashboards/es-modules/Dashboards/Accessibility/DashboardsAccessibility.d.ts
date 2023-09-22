import Board from '../Board.js';
declare class DashboardsAccessibility {
    constructor(board: Board);
    board: Board;
    addTabIndexToCells(): void;
}
export default DashboardsAccessibility;
