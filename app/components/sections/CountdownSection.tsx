// app/components/sections/CountdownSection.tsx
import React, { useEffect, useState } from "react";

const targetDate = new Date("2026-04-18T15:00:00"); // Set your wedding date/time here

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
    fontFamily: "serif",
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

    const baseX = 157;
    const baseY = 1060;
    const spacing = 55;
    const startX = baseX - (spacing * 1.5);

    return (
        <g>
            <text
                xmlSpace="preserve"
                x={baseX}
                y={baseY}
                style={{ ...textStyle, fontSize: "22px", fontWeight: "bold" }}
            >
                {"FALTAN"}
            </text>
            {values.map((item, i) => (
                <g key={item.label}>
                    <text
                        xmlSpace="preserve"
                        x={startX + i * spacing}
                        y={baseY + 40}
                        style={{ ...textStyle, fontSize: "28px", fontWeight: "bold" }}
                    >
                        {String(item.value)}
                    </text>
                    <text
                        xmlSpace="preserve"
                        x={startX + i * spacing}
                        y={baseY + 58}
                        style={{ ...textStyle, fontSize: "12px" }}
                    >
                        {item.label}
                    </text>
                </g>
            ))}
        </g>
    );
};

export default CountdownSection;