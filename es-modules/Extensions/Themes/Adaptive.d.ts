import type { DeepPartial } from '../../Shared/Types';
import type { DefaultOptions } from '../../Core/Options';
declare namespace DynamicDefaultTheme {
    /**
     * The options are generated using the highcharts/css/palette-helper
     * sample
     */
    const options: DeepPartial<DefaultOptions>;
    /**
     * Apply the theme.
     */
    function apply(): void;
}
export default DynamicDefaultTheme;
