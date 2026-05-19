import type { GraphIntegrationObject } from '../GraphLayoutComposition';
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        temperature?: number;
    }
}
declare const EulerIntegration: GraphIntegrationObject;
export default EulerIntegration;
