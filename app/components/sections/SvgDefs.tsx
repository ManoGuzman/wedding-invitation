// app/components/sections/SvgDefs.tsx
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