/**
 * SvgDefs component defines reusable SVG definitions (filters, gradients, etc.)
 * that can be referenced throughout the wedding invitation SVG.
 * Currently contains a blur filter (prefix__a) used for visual effects.
 */
const SvgAssets = () => (
    <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter
                id="prefix__a"
                width={1.002}
                height={1.003}
                x={-0.001}
                y={-0.001}
                style={{ colorInterpolationFilters: "sRGB" }}
            >
                <feGaussianBlur stdDeviation={0.079} />
            </filter>
        </defs>
    </svg>


);

export default SvgAssets;
