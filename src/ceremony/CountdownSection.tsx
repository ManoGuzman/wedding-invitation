
import React, { useEffect, useState, useMemo } from "react";
import { WEDDING_DATETIME, COLORS } from "@/invitation/invitation.constants";

/**
 * CountdownSection component that displays the time left until the wedding date
 * It updates every second to show the remaining days, hours, minutes, and seconds
 */
const targetDate = new Date(WEDDING_DATETIME);

/**
 * Function to calculate the time left until the target date
 * @returns An object containing days, hours, minutes, and seconds left until the target date
 */
const getTimeLeft = () => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
};

/**
 * Common text style for the countdown numbers and labels
 */
const textStyle = {
    fontFamily: "var(--font-cormorant-garamond)",
    fill: COLORS.SECONDARY,
    fillOpacity: 1,
    textAnchor: "middle" as const,
};

const COUNTDOWN_INITIAL = { days: 0, hours: 0, minutes: 0, seconds: 0 };

/**
 * CountdownSection component that displays the time left until the wedding date
 * It updates every second to show the remaining days, hours, minutes, and seconds
 */
const CountdownSection: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(COUNTDOWN_INITIAL);

    useEffect(() => {
        const updateTime = () => {
            const remaining = getTimeLeft();
            setTimeLeft(remaining);

            if (
                remaining.days <= 0 &&
                remaining.hours <= 0 &&
                remaining.minutes <= 0 &&
                remaining.seconds <= 0
            ) {
                clearInterval(timer);
            }
        };

        const timer = setInterval(updateTime, 1000);

        updateTime();

        return () => clearInterval(timer);
    }, []);

    const values = useMemo(
        () => [
            { label: "Días", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Minutos", value: timeLeft.minutes },
            { label: "Segundos", value: timeLeft.seconds },
        ],
        [timeLeft]
    );

    const baseX = 62.229;
    const baseY = 874.257;
    const spacing = 60;

    return (
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <g>
            <text
                xmlSpace="preserve"
                id="countdown-title"
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
                        id={`countdown-${item.label.toLowerCase()}`}
                        x={baseX + i * spacing}
                        y={baseY + 30}
                        style={{ ...textStyle, fontSize: "48px", fontWeight: 700 }}
                    >
                        {String(item.value)}
                    </text>
                    <text
                        xmlSpace="preserve"
                        id={`countdown-${item.label.toLowerCase()}-label`}
                        x={baseX + i * spacing}
                        y={baseY + 62}
                        style={{ ...textStyle, fontSize: "16px", fontWeight: 700 }}
                    >
                        {item.label}
                    </text>
                </g>
            ))}
        </g>
        </svg>
    );
};

export default CountdownSection;