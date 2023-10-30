declare namespace ComponentUtilities {
    function getMargins(element: HTMLElement, includeBorders?: boolean): {
        x: number;
        y: number;
    };
    function getPaddings(element: HTMLElement): {
        x: number;
        y: number;
    };
    function getStyles(element: HTMLElement, styles: Array<keyof CSSStyleDeclaration>): string[];
    function sumPixels(accumulator: number, value: (string | number | undefined)): number;
}
export default ComponentUtilities;
