import type DataEvent from '../DataEvent';
import type DataTable from '../DataTable';
/**
 * Benchmark event with additional event information.
 */
export interface BenchmarkEvent extends DataEvent {
    readonly type: ('afterBenchmark' | 'afterBenchmarkIteration');
    readonly results?: Array<number>;
}
/**
 * Error event with additional event information.
 */
export interface ErrorEvent extends DataEvent {
    readonly type: ('error');
    readonly table: DataTable;
}
/**
 * Event information.
 */
export type DataModifierEvent = (BenchmarkEvent | ErrorEvent | ModifyEvent);
/**
 * Modify event with additional event information.
 */
export interface ModifyEvent extends DataEvent {
    readonly type: ('modify' | 'afterModify');
    readonly table: DataTable;
}
export default DataModifierEvent;
