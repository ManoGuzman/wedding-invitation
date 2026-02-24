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

const CountdownSection: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number }>(getTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-gray-700 text-gray-200 text-center py-12 font-serif">
            <div className="text-5xl font-bold mb-6">FALTAN</div>
            <div className="flex justify-center gap-12 mb-4">
                <div className="text-7xl font-bold">{timeLeft.days}</div>
                <div className="text-7xl font-bold">{timeLeft.hours}</div>
                <div className="text-7xl font-bold">{timeLeft.minutes}</div>
                <div className="text-7xl font-bold">{timeLeft.seconds}</div>
            </div>
            <div className="flex justify-center gap-12 text-2xl">
                <div>Días</div>
                <div>horas</div>
                <div>minutos</div>
                <div>segundos</div>
            </div>
        </section>
    );
};

export default CountdownSection;