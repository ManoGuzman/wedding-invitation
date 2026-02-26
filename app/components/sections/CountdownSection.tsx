// app/components/sections/CountdownSection.tsx
import React, { useEffect, useState } from "react";

const targetDate = new Date("2026-04-18T14:30:00"); // Set your wedding date/time here

const getTimeLeft = () => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
};

const textStyle = {
    fontFamily: "var(--font-cormorant-garamond)",
    fill: "#e5e5e5",
    fillOpacity: 1,
    textAnchor: "middle" as const,
};

const CountdownSection: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const values = timeLeft
        ? [
            { label: "Días", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Minutos", value: timeLeft.minutes },
            { label: "Segundos", value: timeLeft.seconds },
        ]
        : [
            { label: "Días", value: "--" },
            { label: "Horas", value: "--" },
            { label: "Minutos", value: "--" },
            { label: "Segundos", value: "--" },
        ];

    const baseX = 62.229;
    const baseY = 874.257;
    const spacing = 60;

    return (
        <g>
            <text
                xmlSpace="preserve"
                x={153.229}
                y={857.143}
                style={{ ...textStyle, fontSize: "32px", fontWeight: 700 }}
            >
                {"FALTAN"}
            </text>
            {values.map((item, i) => (
                <g key={item.label}>
                    <text
                        xmlSpace="preserve"
                        x={baseX + i * spacing}
                        y={baseY + 30}
                        style={{ ...textStyle, fontSize: "48px", fontWeight: 700 }}
                    >
                        {String(item.value)}
                    </text>
                    <text
                        xmlSpace="preserve"
                        x={baseX + i * spacing}
                        y={baseY + 62}
                        style={{ ...textStyle, fontSize: "16px", fontWeight: 700 }}
                    >
                        {item.label}
                    </text>
                </g>
            ))}
        </g>
    );
};

export default CountdownSection;