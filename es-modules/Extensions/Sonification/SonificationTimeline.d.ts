declare global {
    namespace Sonification {
        interface TimelineFilterCallback {
            (e: Sonification.TimelineEvent, ix: number, arr: Sonification.TimelineEvent[]): boolean;
        }
    }
}
export {};
