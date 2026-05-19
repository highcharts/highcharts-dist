declare module './AxisComposition' {
    interface AxisComposition {
        /** @deprecated */
        lin2val(val: number): number;
        /** @deprecated */
        val2lin(val: number, toIndex?: boolean): number;
    }
}
export {};
