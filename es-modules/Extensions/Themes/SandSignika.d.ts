import type { DeepPartial } from '../../Shared/Types';
import type { DefaultOptions } from '../../Core/Options';
declare namespace SandSignikaTheme {
    const options: DeepPartial<DefaultOptions>;
    /**
     * Apply the theme.
     */
    function apply(): void;
}
export default SandSignikaTheme;
