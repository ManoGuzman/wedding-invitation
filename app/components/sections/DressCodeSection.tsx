import { SECTIONS, COLORS } from "@/app/constants";

// app/components/sections/DressCodeSection.tsx

/**
 * DressCodeSection component displays the wedding dress code information.
 * Shows the dress code (FORMAL) and displays color circles indicating
 * which colors guests should avoid: Blanco (white), Crema (cream),
 * Esmeralda (emerald), and Verde oscuro (dark green).
 * Includes decorative elements and styling.
 */
const DressCodeSection = () => (
    <>
        <image
            id="dress-code-image"
            xlinkHref="/images/border-decoration.png"
            width={314.854}
            height={59.269}
            y={1849.027}
            preserveAspectRatio="none"
        />
        <path
            id="Path_2"
            d="M182.005 2049.405c-2.645-1.448-4.606-1.523-8.046-.31-3.563 1.258-5.41 1.168-6.332-.309-.426-.68-1.368-1.238-2.096-1.238-1.5 0-3.01-1.493-2.44-2.413.223-.362-.828-.69-2.572-.801-3.65-.234-3.992-1.235-1.68-4.897.914-1.449 4.454-8.223 7.866-15.054 5.565-11.14 6.612-12.821 10.166-16.316 3.035-2.983 3.872-4.18 3.576-5.11-.353-1.114-.497-1.137-1.718-.282-.732.513-1.526.933-1.763.933-.555 0-3.007-3.956-3.007-4.853 0-1.144 6.36-5.05 8.223-5.05.957 0 2.525.407 3.485.903 1.51.781 1.899.784 2.909.02 1.933-1.464 3.575-1.048 6.11 1.548l2.413 2.47-1.787 1.866c-1.118 1.167-2.18 1.741-2.834 1.534-.75-.238-1.162.13-1.456 1.299-.344 1.369.07 2.143 2.575 4.815 6.42 6.85 21.827 27.961 21.827 29.909 0 1.355-3.763 5.133-5.121 5.14-.604 0-1.349.666-1.654 1.47-.6 1.579-1.798 2.25-4.01 2.25-.77 0-1.931.589-2.58 1.308-1.063 1.179-1.607 1.268-5.563.912-3.328-.3-4.819-.169-6.189.545-2.425 1.265-5.67 1.152-8.302-.289m7.476-1.318c.231-.375.614-3.155.85-6.18.292-3.723.678-5.498 1.196-5.498.421 0 1.559 2.48 2.528 5.514 1.596 4.994 1.922 5.537 3.455 5.762 2.12.312 4.299-.46 4.299-1.523 0-.445-.798-2.89-1.774-5.435-2.622-6.842-2.764-7.416-1.826-7.39.448.017 2.347 2.561 4.219 5.664 3.327 5.513 4.43 6.54 4.849 4.518.17-.82-3.812-8.159-7.772-14.325-.501-.78-.616-1.485-.276-1.695.32-.197 3.042 2.867 6.048 6.81 5.808 7.618 7.903 8.676 3.016 1.523-4.029-5.896-3.202-6.816 1.29-1.434 3.662 4.389 4.917 4.99 3.107 1.489-1.114-2.153-16.664-22.798-19.84-26.339l-2.165-2.414-1.29 1.64c-1.443 1.835-2.91 2.127-3.462.69-.2-.523-1.188-1.376-2.194-1.897-3.41-1.763-5.087.315-12.542 15.536-7.592 15.5-9.584 20.113-8.684 20.113 1.088 0 1.496-.65 3.475-5.536.892-2.202 1.936-4.108 2.32-4.236 1.103-.367.851.75-1.461 6.485-1.189 2.948-2.053 5.469-1.92 5.6.244.245 1.468-2.3 6.098-12.679q3.523-7.895 3.564-4.951c0 .425-1.419 4.734-3.167 9.574-1.749 4.84-3.016 9.227-2.816 9.747.47 1.225 2.283 1.198 6.382-.095l3.303-1.04v-3.214c0-3.76.58-7.082 1.235-7.082.254 0 .803 1.737 1.22 3.86 1.336 6.787 3.573 10.066 6.474 9.486 1.012-.202 2.03-.674 2.26-1.049zm-.05-44.202c0-1.133.31-2.252.688-2.485.401-.248.547-1.289.35-2.501-.451-2.782.428-3.15 2.057-.861.733 1.03 1.613 1.698 1.955 1.487.85-.526-2.525-3.963-3.892-3.963-.598 0-1.515.611-2.038 1.358l-.95 1.357-1.446-1.357c-1.246-1.17-3.834-2.073-2.704-.943.229.228-.017 1.067-.534 1.863-.702 1.072-.783 1.757-.311 2.639.35.655.637 1.891.637 2.747 0 .955.778 2.29 2.011 3.453l2.012 1.897 1.083-1.315c.596-.723 1.083-2.242 1.083-3.376m-5.57-2.653c0-.286.687-.832 1.526-1.215 1.846-.84 2.763.144 1.008 1.084-1.463.784-2.533.839-2.533.13zm-1.777-5.838c-.333-.333-1.594.126-3.117 1.133-2.479 1.64-2.524 1.73-1.465 2.901 1.074 1.188 1.128 1.168 3.117-1.133 1.206-1.395 1.798-2.568 1.465-2.901"
            style={{ fill: COLORS.SECONDARY, fillOpacity: 1, strokeWidth: 0.61888 }}
        />
        <path
            id="Path_3"
            d="M115.359 2049.867a586 586 0 0 1-4.265-1.503l-2.501-.893-.07-7.748-.07-7.747-.814 4.413c-1.288 6.979-2.542 11.969-3.166 12.593-.374.374-1.318.22-2.704-.44-1.926-.92-2.1-1.196-1.827-2.907.167-1.04.032-3.98-.3-6.532-.59-4.564.043-13.815 1.991-29.101.818-6.413 2.281-8.21 8.561-10.517 3.456-1.269 4.696-2.043 5.556-3.47 1.2-1.99 3.518-2.642 7.616-2.139 1.678.206 2.313.65 3.023 2.118.755 1.56 1.681 2.141 5.767 3.623 4.544 1.647 4.941 1.927 5.949 4.2 2.366 5.333 6.378 35.415 5.686 42.632-.174 1.818-.392 2.02-2.544 2.374-1.294.212-2.446.3-2.559.193s-1.24-4.115-2.505-8.91c-1.408-5.334-2.188-7.576-2.01-5.776 1.158 11.72 1.217 10.95-1.034 13.53l-2.051 2.353-6.982.131c-3.84.073-7.776-.142-8.747-.478zm5.321-9.507c-.238-4.61-.369-11.164-.29-14.561.078-3.398.125-6.708.103-7.355-.381-11.327-.768-18.132-1.057-18.6-.207-.334-1.193.055-2.326.92-2.41 1.838-2.51 1.842-2.742.105l-.186-1.395-3.087 1.179c-6.098 2.328-7.03 4.236-7.831 16.025-.286 4.207-.781 8.84-1.1 10.297-.675 3.079-.779 8.397-.25 12.796.33 2.75.523 3.09 1.76 3.09.763 0 1.394-.332 1.4-.736 0-.405.658-4.522 1.448-9.15 1.33-7.778 1.395-9.065.87-17.061-.312-4.757-.73-9.377-.929-10.267-.527-2.362.83-2.054 1.866.422.468 1.122.868 3.836.887 6.03s.275 5.315.569 6.933.804 7.924 1.135 14.014.816 11.455 1.077 11.922c.991 1.771 4.54 3.718 6.827 3.747l2.29.029zm10.563 7.42c2.438-2.438 2.542-3.08 1.656-10.214-.84-6.76-.632-28.536.305-32.04.927-3.466 1.392-1.19 1.617 7.917.207 8.387.533 11.076 2.394 19.758 2.094 9.761 2.195 10.042 3.535 9.786 1.62-.31 1.64-.576.777-11.01-.75-9.08-3.325-24.035-4.66-27.065-.896-2.031-1.516-2.535-4.53-3.677-4.258-1.614-4.202-1.613-4.434-.088l-.188 1.235-1.66-1.31c-1.387-1.096-1.895-1.205-3.089-.66-1.548.705-1.864 1.61-.699 1.998.525.175.443.531-.294 1.268-1.309 1.309-1.422 4.586-.142 4.095.485-.187.883-.045.883.312 0 .359-.265.652-.589.652s-.588 1.191-.588 2.647c0 1.961.229 2.648.882 2.648.486 0 .883.264.883.588s-.226.589-.502.589c-.756 0-1.213 13.175-.832 23.975l.338 9.56h3.986c2.91 0 4.246-.26 4.951-.964m-8.53-7.86a.59.59 0 0 1 .589-.59.59.59 0 0 1 .588.59.59.59 0 0 1-.588.587.59.59 0 0 1-.589-.588m-.588-6.473a.59.59 0 0 1 .588-.588.59.59 0 0 1 .589.588.59.59 0 0 1-.589.588.59.59 0 0 1-.588-.588m0-5.883a.59.59 0 0 1 .588-.589.59.59 0 0 1 .589.589.59.59 0 0 1-.589.588.59.59 0 0 1-.588-.588m.588-6.472a.59.59 0 0 1 .589-.589.59.59 0 0 1 .588.589.59.59 0 0 1-.588.588.59.59 0 0 1-.589-.588m-18.827 25.935c0-.297.147-.924.328-1.393.201-.526-.117-.97-.832-1.157-1.35-.353-2.275 1.867-1.092 2.62.964.612 1.596.584 1.596-.069zm38.128-1.3c.155-1.34 0-1.504-1.232-1.269-1.137.218-1.358.552-1.135 1.719.37 1.93 2.13 1.594 2.367-.45m-23.428-48.043c0-.232-.224-.76-.486-1.173-.346-.544-.668-.334-1.168.763-.931 2.044-.882 2.192.486 1.46.648-.346 1.173-.819 1.168-1.05m6.932.101c-.385-.845-.802-1.234-.926-.862-.123.371.097 1.063.491 1.537 1.068 1.286 1.22 1.05.435-.675"
            style={{ fill: COLORS.SECONDARY, fillOpacity: 1, strokeWidth: 0.588358 }}
        />
        <text
            id="vestimenta"
            xmlSpace="preserve"
            x={157.89}
            y={1960.156}
            style={{
                fontSize: "22.5778px",
                lineHeight: 0.9,
                fontFamily: "var(--font-cormorant-garamond)",
                fontVariationSettings: "&quot",
                textAlign: "center",
                textAnchor: "middle",
                fill: COLORS.SECONDARY,
                fillOpacity: 1,
                strokeWidth: 0.475326,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        >
            <tspan
                id="vestimenta-2"
                x={157.89}
                y={1960.156}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 600,
                    fontStretch: "normal",
                    fontSize: "22.5778px",
                    fontFamily: "var(--font-cormorant-garamond)",
                    fill: COLORS.SECONDARY,
                    fillOpacity: 1,
                    strokeWidth: 0.475326,
                }}
            >
                {SECTIONS.DRESS_CODE.TITLE}
            </tspan>
            <tspan
                id="formal"
                x={157.89}
                y={1980.77}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "22.5778px",
                    fontFamily: "var(--font-cormorant-garamond)",
                    fill: COLORS.SECONDARY,
                    fillOpacity: 1,
                    strokeWidth: 0.475326,
                }}
            >
                {SECTIONS.DRESS_CODE.DRESS}
            </tspan>
        </text>
        <text
            id="colors"
            xmlSpace="preserve"
            x={158.841}
            y={2081.97}
            style={{
                fontStyle: "italic",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: "19.7556px",
                lineHeight: 1,
                fontFamily: "var(--font-cormorant-garamond)",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
                textAlign: "center",
                textAnchor: "middle",
                fill: COLORS.SECONDARY,
                fillOpacity: 1,
                strokeWidth: 0.281434,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        >
            <tspan
                id="colors-2"
                x={158.841}
                y={2081.97}
                style={{
                    fontStyle: "italic",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "19.7556px",
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: COLORS.SECONDARY,
                    fillOpacity: 1,
                    strokeWidth: 0.281434,
                }}
            >
                {SECTIONS.DRESS_CODE.COLORS_TITLE}
            </tspan>
        </text>
        <circle
            id="ellipse-1"
            cx={129.936}
            cy={2126.212}
            r={23.718}
            style={{
                fontVariationSettings: "&quot",
                fill: SECTIONS.DRESS_CODE.COLOR_CODES.CREAM,
                fillOpacity: 1,
                stroke: SECTIONS.DRESS_CODE.COLOR_CODES.WHITE,
                strokeWidth: 0.424007,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeOpacity: 1,
            }}
        />
        <circle
            id="ellipse-2"
            cx={239.902}
            cy={2126.212}
            r={23.718}
            style={{
                fontVariationSettings: "&quot",
                fill: SECTIONS.DRESS_CODE.COLOR_CODES.EMERALD,
                fillOpacity: 1,
                stroke: SECTIONS.DRESS_CODE.COLOR_CODES.WHITE,
                strokeWidth: 0.424007,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeOpacity: 1,
            }}
        />
        <circle
            id="ellipse-3"
            cx={74.952}
            cy={2126.212}
            r={23.718}
            style={{
                fontVariationSettings: "&quot",
                fill: SECTIONS.DRESS_CODE.COLOR_CODES.WHITE,
                fillOpacity: 1,
                stroke: SECTIONS.DRESS_CODE.COLOR_CODES.WHITE,
                strokeWidth: 0.424007,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeOpacity: 1,
            }}
        />
        <circle
            id="ellipse-4"
            cx={184.919}
            cy={2126.212}
            r={23.718}
            style={{
                fontVariationSettings: "&quot",
                fill: SECTIONS.DRESS_CODE.COLOR_CODES.DARK_GREEN,
                fillOpacity: 1,
                stroke: SECTIONS.DRESS_CODE.COLOR_CODES.WHITE,
                strokeWidth: 0.424007,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeOpacity: 1,
            }}
        />
        <text
            id="green-dark"
            xmlSpace="preserve"
            x={185.06}
            y={2164.141}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: "9.43529px",
                lineHeight: 1,
                fontFamily: "var(--font-cormorant-garamond)",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
                fontVariationSettings: "&quot",
                textAlign: "center",
                textAnchor: "middle",
                fill: COLORS.SECONDARY,
                fillOpacity: 1,
                strokeWidth: 0.281434,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        >
            <tspan
                id="green-dark-2"
                x={185.06}
                y={2164.141}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "9.43529px",
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariationSettings: "&quot",
                    fill: COLORS.SECONDARY,
                    fillOpacity: 1,
                    strokeWidth: 0.281434,
                }}
            >
                {SECTIONS.DRESS_CODE.COLORS.DARK_GREEN}
            </tspan>
        </text>
        <text
            id="green-light"
            xmlSpace="preserve"
            x={239.703}
            y={2164.146}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: "9.43529px",
                lineHeight: 1,
                fontFamily: "var(--font-cormorant-garamond)",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
                fontVariationSettings: "&quot",
                textAlign: "center",
                textAnchor: "middle",
                fill: COLORS.SECONDARY,
                fillOpacity: 1,
                strokeWidth: 0.281434,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        >
            <tspan
                id="green-light-2"
                x={239.703}
                y={2164.146}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "9.43529px",
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariationSettings: "&quot",
                    fill: COLORS.SECONDARY,
                    fillOpacity: 1,
                    strokeWidth: 0.281434,
                }}
            >
                {SECTIONS.DRESS_CODE.COLORS.EMERALD}
            </tspan>
        </text>
        <text
            id="cream"
            xmlSpace="preserve"
            x={129.685}
            y={2163.722}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: "9.43529px",
                lineHeight: 1,
                fontFamily: "var(--font-cormorant-garamond)",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
                fontVariationSettings: "&quot",
                textAlign: "center",
                textAnchor: "middle",
                fill: COLORS.SECONDARY,
                fillOpacity: 1,
                strokeWidth: 0.281434,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        >
            <tspan
                id="cream-2"
                x={129.685}
                y={2163.722}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "9.43529px",
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariationSettings: "&quot",
                    fill: COLORS.SECONDARY,
                    fillOpacity: 1,
                    strokeWidth: 0.281434,
                }}
            >
                {SECTIONS.DRESS_CODE.COLORS.CREAM}
            </tspan>
        </text>
        <text
            id="white"
            xmlSpace="preserve"
            x={74.924}
            y={2164.141}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: "9.43529px",
                lineHeight: 1,
                fontFamily: "var(--font-cormorant-garamond)",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
                fontVariationSettings: "&quot",
                textAlign: "center",
                textAnchor: "middle",
                fill: COLORS.SECONDARY,
                fillOpacity: 1,
                strokeWidth: 0.171964,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        >
            <tspan
                id="white-2"
                x={74.924}
                y={2164.141}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "9.43529px",
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fontVariationSettings: "&quot",
                    fill: COLORS.SECONDARY,
                    fillOpacity: 1,
                    strokeWidth: 0.171964,
                }}
            >
                {SECTIONS.DRESS_CODE.COLORS.WHITE}
            </tspan>
        </text>
    </>
);

export default DressCodeSection;