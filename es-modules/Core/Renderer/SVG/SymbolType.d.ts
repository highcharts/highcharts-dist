import type SVGPath from './SVGPath';
import type SymbolOptions from './SymbolOptions';
export interface SymbolFunction {
    (x: number, y: number, width: number, height: number, options?: SymbolOptions): SVGPath;
}
export type SymbolKey = keyof SymbolTypeRegistry;
export type SymbolType = SymbolTypeRegistry[SymbolKey];
export interface SymbolTypeRegistry {
}
export default SymbolType;
