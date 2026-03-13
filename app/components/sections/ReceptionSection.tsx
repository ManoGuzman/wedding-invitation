import { SECTIONS, COLORS } from "@/app/constants";

// app/components/sections/ReceptionSection.tsx

/**
 * ReceptionSection component displays the wedding reception details.
 * Shows the venue name (Tierra Bonanza), location (El Carmen, Guadalupe),
 * time (4:30pm), and includes a "COMO LLEGAR" button linking to the venue map.
 * Also displays a decorative image related to the reception venue.
 */
const ReceptionSection = () => (
    <>
        <text
            id="reception-title"
            xmlSpace="preserve"
            x={156.889}
            y={1435.238}
            style={{
                fontSize: "22.5778px",
                fontFamily: "var(--font-cormorant-garamond)",
                fontVariationSettings: "&quot",
                textAlign: "center",
                textAnchor: "middle",
                fill: COLORS.SECONDARY,
                fillOpacity: 1,
                strokeWidth: 0.392267,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        >
            <tspan
                id="reception-title-tspan"
                x={156.889}
                y={1435.238}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "22.5778px",
                    fontFamily: "var(--font-cormorant-garamond)",
                    fill: COLORS.SECONDARY,
                    fillOpacity: 1,
                    strokeWidth: 0.392267,
                }}
            >
                {SECTIONS.RECEPTION.TITLE}
            </tspan>
        </text>
        <text
            id="reception-details"
            xmlSpace="preserve"
            x={156.69}
            y={1463.609}
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
                strokeWidth: 0.232257,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        >
            <tspan
                id="reception-details-tspan1"
                x={156.69}
                y={1463.609}
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
                    strokeWidth: 0.232257,
                }}
            >
                {SECTIONS.RECEPTION.VENUE}
            </tspan>
            <tspan
                id="reception-details-tspan2"
                x={156.69}
                y={1483.365}
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
                    strokeWidth: 0.232257,
                }}
            >
                {SECTIONS.RECEPTION.LOCATION}
            </tspan>
            <tspan
                id="reception-details-tspan3"
                x={156.69}
                y={1503.12}
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
                    strokeWidth: 0.232257,
                }}
            >
                {SECTIONS.RECEPTION.TIME}
            </tspan>
        </text>
        <path
            id="reception-path"
            d="M150.358 1400.643c-3.46-1.059-3.818-2.227-3.818-12.452 0-11.155.482-13.894 3.762-21.398l2.552-5.839-.155-7.222c-.116-5.403.044-7.349.633-7.723 1.32-.838 7.54-.609 8.298.306.44.53.64 3.395.56 8.035l-.125 7.21 2.97 6.368 2.97 6.367.032 12.059.032 12.058-1.693 1.269c-1.421 1.065-2.687 1.291-7.884 1.412-3.404.08-7.065-.124-8.134-.45m11.407-1.193c5.627-1.067 5.618-1.042 4.936-14.32l-.587-11.44-2.545-5.223c-1.662-3.411-2.667-6.407-2.898-8.641-.194-1.881-.52-3.416-.723-3.412-2.342.052-3.099.844-3.106 3.246 0 1.38-.66 4.554-1.456 7.055-.797 2.502-1.644 6.39-1.882 8.642-.335 3.16-.66 4.109-1.425 4.163-.545.038.101.307 1.435.596 1.334.29 4.54.367 7.126.17l4.7-.356v7.911c0 5.461-.224 8.05-.722 8.357-.397.245-2.853.57-5.458.72-3.951.229-4.736.446-4.736 1.308 0 2.045 1.602 2.312 7.341 1.224m-12.219-1.856c-.451-.844-.596-4.908-.437-12.28.222-10.29.345-11.276 1.863-14.914.893-2.142 1.524-3.996 1.4-4.12-.123-.123-.982 1.63-1.908 3.896-1.494 3.656-1.752 5.326-2.294 14.843-.55 9.67-.51 10.875.41 12.28 1.222 1.865 1.92 2.078.966.295m14.105-2.76c.261-.163.476-3.212.477-6.778v-6.483l-6.086.192-6.085.192.171 6.474.172 6.473 1.82.418c1.815.418 8.628.068 9.53-.489zm-9.451-4.62c-.592-2.208-.445-2.88.63-2.88.558 0 1.513-.452 2.123-1.004 1.032-.934 1.186-.934 2.218 0 .61.552 1.565 1.004 2.123 1.004 1.148 0 1.316 1.334.385 3.072-.5.935-1.285 1.173-3.87 1.173-2.851 0-3.288-.166-3.61-1.365m5.21-1.399c-1.22-.854-1.476-.854-2.695 0-1.307.915-1.265.944 1.347.944s2.654-.029 1.348-.944m-5.611-25.435c0-.334-.265-.197-.588.303s-.588 1.183-.588 1.516c0 .334.265.197.588-.303s.588-1.183.588-1.516m7.18-10.764.189-2.274-3.524.048c-1.938.026-3.182.185-2.765.353.417.169.758 1.254.758 2.413 0 2.104 0 2.107 2.577 1.92 2.502-.18 2.583-.253 2.765-2.46m-1.78-3.866c2.807-.561 2.298-1.44-.834-1.44-2.02 0-2.728.236-2.728.91 0 .997.703 1.102 3.562.53"
            style={{ fill: COLORS.SECONDARY, fillOpacity: 1, strokeWidth: 0.606424 }}
        />
        <a
            id="reception-map-link"
            href={SECTIONS.RECEPTION.MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
        >
            <rect
                id="reception-map-link-rect"
                width={154.97}
                height={32.895}
                x={80.373}
                y={1516.377}
                ry={16.448}
                style={{
                    fontVariationSettings: "&quot",
                    opacity: 0.922662,
                    fill: COLORS.SECONDARY,
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 1.61192,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                }}
            />
            <text
                id="reception-map-link-text"
                xmlSpace="preserve"
                x={157.29}
                y={1538.637}
                style={{
                    fontSize: "18.6297px",
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontVariationSettings: "&quot",
                    textAlign: "center",
                    textAnchor: "middle",
                    fill: "#1b4038",
                    fillOpacity: 1,
                    strokeWidth: 0.241222,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                }}
            >
                <tspan
                    id="reception-map-link-text-tspan"
                    x={157.29}
                    y={1538.637}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 600,
                        fontStretch: "normal",
                        fontSize: "18.6297px",
                        fontFamily: "var(--font-cormorant-garamond)",
                        fill: "#1b4038",
                        fillOpacity: 1,
                        strokeWidth: 0.241222,
                    }}
                >
                    {SECTIONS.RECEPTION.BUTTON_TEXT}
                </tspan>
            </text>
        </a>
        <image
            id="reception-image"
            xlinkHref="/images/middle-decoration.png"
            width={314.854}
            height={266.767}
            y={1582.941}
            preserveAspectRatio="none"
        />
    </>
);

export default ReceptionSection;