// app/components/sections/SvgDefs.tsx
/**
 * SvgDefs is a React component that defines SVG filters and other reusable elements for the wedding invitation. It currently includes a Gaussian blur filter that can be applied to various SVG elements throughout the invitation to create visual effects. This component is intended to be used within the main SVG element of the invitation, allowing for consistent styling and effects across different sections.
 * The filter defined in this component can be referenced by its ID ("prefix__a") in other SVG elements to apply the Gaussian blur effect. This helps to maintain a clean and organized structure for the SVG definitions, making it easier to manage and reuse styles across the invitation.
 * @returns 
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