import Board from '../Board.js';
declare class Fullscreen {
    constructor(DashboardClass: Board);
    board: Board;
    isOpen: boolean;
    private unbindFullscreenEvent?;
    /**
     * Toggles displaying the board in fullscreen mode.
     */
    toggle(): void;
    /**
     * Display board in fullscreen.
     */
    open(): void;
    /**
     * Stops displaying the dashboard in fullscreen mode.
     */
    close(): void;
    /**
     * Set the correct text depending of the fullscreen is on or of.
     */
    setButtonText(): void;
}
declare namespace Fullscreen {
}
export default Fullscreen;
