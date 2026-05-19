import type Time from '../Time';
export interface TimeTicksInfoObject extends Time.TimeNormalizedObject {
    boundaryTicks: Record<number, Time.TimeUnit>;
    totalRange: number;
}
export default TimeTicksInfoObject;
