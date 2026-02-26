'use client';

import React from 'react';
import { motion } from 'framer-motion';
import guestsData from '../data/guests.json';
import WeddingInvitation from '../components/WeddingInvitation';

const SECTIONS = 9;

interface InvitePageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function InvitePage({ params }: InvitePageProps) {
    const { id } = React.use(params);

    const guest = guestsData.guests.find(
        (g: { id: string }) => g.id === id
    );

    if (!guest) {
        console.log(`Guest with id "${id}" not found.`);
        return <div>Invitado no encontrado</div>;
    }

    return (
        <main className="bg-[#062923]">
            <div
                className="fixed top-0 inset-x-0 h-14 md:h-20 pointer-events-none z-30"
                style={{ background: 'linear-gradient(to bottom, #062923 20%, transparent)' }}
            />
            <div
                className="fixed bottom-0 inset-x-0 h-14 md:h-20 pointer-events-none z-30"
                style={{ background: 'linear-gradient(to top, #062923 20%, transparent)' }}
            />

            <div
                className="relative mx-auto"
                style={{ maxWidth: '600px', width: '100%' }}
            >
                <WeddingInvitation
                    name={guest.name}
                    amount={guest.amount}
                    className="w-full h-auto block"
                />

                {Array.from({ length: SECTIONS }, (_, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-0 right-0 pointer-events-none z-10"
                        style={{
                            top: `${(i / SECTIONS) * 100}%`,
                            height: `${100 / SECTIONS + 1}%`,
                            background: '#062923',
                        }}
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        exit={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                        }}
                    />
                ))}
            </div>
        </main>
    );
}