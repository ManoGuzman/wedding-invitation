// app/components/sections/SvgDefs.tsx

/**
 * SvgDefs component defines reusable SVG definitions (filters, gradients, etc.)
 * that can be referenced throughout the wedding invitation SVG.
 * Currently contains a blur filter (prefix__a) used for visual effects.
 */
const SvgDefs = () => (
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


);

export default SvgDefs;