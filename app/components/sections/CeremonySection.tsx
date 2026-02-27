// app/components/sections/CeremonySection.tsx
/**
 * CeremonySection component that displays the ceremony details such as location and time
 * It also includes a button that links to the map location of the ceremony venue
 * The component uses SVG elements to create a visually appealing design for the ceremony information
 */
const CeremonySection = () => (
    <g>
        <text
            xmlSpace="preserve"
            id="ceremony-title"
            x={156.713}
            y={1191.591}
            style={{
                fontSize: "22.5778px",
                fontFamily: "var(--font-cormorant-garamond)",
                fontVariationSettings: "&quot",
                textAlign: "center",
                textAnchor: "middle",
                fill: "#e5e5e5",
                fillOpacity: 1,
                strokeWidth: 0.292344,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        >
            <tspan
                id="ceremony-title-1"
                x={156.713}
                y={1191.591}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 600,
                    fontStretch: "normal",
                    fontSize: "22.5778px",
                    fontFamily: "var(--font-cormorant-garamond)",
                    fill: "#e5e5e5",
                    fillOpacity: 1,
                    strokeWidth: 0.292344,
                }}
            >
                {"CEREMONIA"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            id="ceremony-info"
            x={156.071}
            y={1224.54}
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
                fill: "#e5e5e5",
                fillOpacity: 1,
                strokeWidth: 0.28238,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        >
            <tspan
                id="ceremony-info-1"
                x={156.071}
                y={1224.54}
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
                    fill: "#e5e5e5",
                    fillOpacity: 1,
                    strokeWidth: 0.28238,
                }}
            >
                {"Iglesia de La Soledad"}
            </tspan>
            <tspan
                id="ceremony-info-2"
                x={156.071}
                y={1244.295}
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
                    fill: "#e5e5e5",
                    fillOpacity: 1,
                    strokeWidth: 0.28238,
                }}
            >
                {"San Jos\xE9, Barrio Chino"}
            </tspan>
            <tspan
                id="ceremony-info-3"
                x={156.071}
                y={1264.051}
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
                    fill: "#e5e5e5",
                    fillOpacity: 1,
                    strokeWidth: 0.28238,
                }}
            >
                {"Hora: 2:30pm"}
            </tspan>
        </text>
        <path
            id="ceremony-decoration"
            d="M146.602 1153.467c-5.78-2.527-10.847-4.813-11.26-5.08-.49-.317-.75-2.039-.75-4.954 0-3.571-.18-4.468-.9-4.468-.496 0-.901-.294-.901-.653 0-.478 7.134-9.844 9.974-13.095.114-.13 3.47.914 7.458 2.32 3.988 1.407 7.437 2.371 7.664 2.144.228-.228-.056-.677-.632-1-.575-.321-1.046-.836-1.046-1.144s1.307-2.523 2.904-4.924c7.015-10.547 9.37-16.579 6.854-17.554-1-.388-1-.444 0-1.181.578-.426 1.051-1.201 1.051-1.724 0-1.42 1.151-1.855 1.612-.607.221.599.692 1.312 1.047 1.585.447.344.415.589-.107.8-.421.171-.75 1.34-.75 2.666 0 2.772 6.063 15.41 8.993 18.749 2.199 2.504 2.216 2.687.314 3.41-2.137.812-1.924 2.893.6 5.842 2.028 2.368 2.102 2.628 2.102 7.323v4.869l-2.101 1.002c-1.595.76-2.102 1.374-2.103 2.542 0 1.307-.706 1.918-4.653 4.029-4.574 2.446-4.687 2.472-6.616 1.537-1.867-.905-2.102-.88-4.804.5-1.563.798-2.976 1.498-3.142 1.556-.165.057-5.029-1.964-10.808-4.49m9.713-1.762-.194-4.076-4.01-1.416c-2.204-.779-6.676-2.47-9.938-3.757-3.261-1.287-5.984-2.262-6.051-2.165-.066.096.034 1.745.225 3.664l.347 3.49 9.307 4.117c5.12 2.264 9.578 4.14 9.908 4.168.364.03.524-1.556.406-4.025m-5.36.67c-.898-.358-.972-2.543-.13-3.802.521-.778.728-.738 1.515.295 1.543 2.024.637 4.317-1.385 3.508m-5.717-2.68c-1.273-.713-1.358-3.112-.147-4.117.738-.613.994-.465 1.5.867 1.135 2.982.574 4.328-1.353 3.25m-5.614-2.213c-1.573-1.05-1.518-4.314.072-4.314.854 0 1.5 1.3 1.5 3.016 0 1.305-.698 1.882-1.573 1.298zm21.123 6.996c2.136-1.26 2.192-1.383 1.835-3.987-.202-1.478-.371-4.743-.376-7.256l-.01-4.57-2.327 4.203c-2.244 4.052-2.317 4.36-2.013 8.557.173 2.394.398 4.354.5 4.354s1.176-.586 2.389-1.3zm-1.415-4.805c.137-2.9.394-3.803 1.08-3.803.701 0 .901.8.901 3.595 0 2.984-.183 3.63-1.08 3.803-.964.186-1.062-.205-.9-3.595m7.086-6.238v-11.142l-3.32-1.468c-1.826-.807-3.447-1.468-3.603-1.468s-.283.781-.283 1.736c0 1.465.375 1.887 2.402 2.698l2.402.96v9.283c0 8.207.122 9.354 1.05 9.895.579.336 1.119.62 1.202.63s.15-4.995.15-11.124m3.602 6.002c0-4.55.837-7.47 2.14-7.47 1.06 0 2.064 3.275 2.064 6.73 0 1.813.231 2.806.6 2.578.592-.366.904-21.317.318-21.317-.156 0-1.777.66-3.603 1.468l-3.32 1.468v10.823c0 9.374.12 10.776.9 10.477.688-.264.901-1.39.901-4.757m.996-10.878c-.798-.797-.388-3.838.566-4.204 1.166-.447 2.002.73 1.603 2.255-.354 1.351-1.625 2.494-2.169 1.95m7.884 3.065c.151-4.23.02-4.973-1.05-5.942-1.207-1.09-1.224-1.08-1.224.752 0 1.023.27 2.026.6 2.23.863.534.742 6.52-.15 7.445-.607.63-.52.738.45.564 1.067-.191 1.221-.759 1.374-5.05m-36.418-12.199c1.05-1.449 1.638-2.53 1.306-2.402-.783.301-8.603 9.937-8.572 10.564.029.608 4.76-4.707 7.266-8.162m30.706-.3 4.003-1.734-1.28-1.797c-.704-.989-2.72-4.735-4.48-8.325s-3.334-6.527-3.497-6.527-1.008 1.419-1.88 3.153-3.027 5.373-4.788 8.087-2.993 5.064-2.737 5.222c.397.246 3.196-3.973 8.189-12.346l1.2-2.014.167 9.202c.09 5.061.376 9.114.633 9.007s2.268-.975 4.47-1.929"
            style={{ fill: "#e5e5e5", fillOpacity: 1, strokeWidth: 0.600485 }}
        />
        <a
            id="ceremony-map-link"
            href="https://maps.app.goo.gl/iQZQ4UCMEc5zcsUK7"
            target="_blank"
            rel="noopener noreferrer"
        >
            <rect
                id="ceremony-map-button"
                width={154.97}
                height={32.895}
                x={80.373}
                y={1278.642}
                ry={16.448}
                style={{
                    fontVariationSettings: "&quot",
                    opacity: 0.922662,
                    fill: "#e5e5e5",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 1.61192,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                }}
            />
            <text
                id="ceremony-map-button-text"
                xmlSpace="preserve"
                x={157.29}
                y={1300.902}
                style={{
                    fontSize: "18.6297px",
                    fontFamily: "var(--font-cormorant-garamond)",
                    fontVariationSettings: "&quot",
                    textAlign: "center",
                    textAnchor: "middle",
                    fill: "#072f26",
                    fillOpacity: 1,
                    strokeWidth: 0.241222,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                }}
            >
                <tspan
                    id="ceremony-map-button-text-1"
                    x={157.29}
                    y={1300.902}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 600,
                        fontStretch: "normal",
                        fontSize: "18.6297px",
                        fontFamily: "var(--font-cormorant-garamond)",
                        fill: "#072f26",
                        fillOpacity: 1,
                        strokeWidth: 0.241222,
                    }}
                >
                    {"COMO LLEGAR"}
                </tspan>
            </text> </a>
    </g>
);

export default CeremonySection;