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

/**
 * InvitePage is a React component that renders a personalized wedding invitation based on the guest's ID. It retrieves the guest's information from a JSON file and displays the invitation with the guest's name and the number of attendees. The page includes gradient overlays for visual effects as the user scrolls through the invitation sections.
 * If the guest ID is not found in the data, it displays a message indicating that the guest was not found.
 * @param param0
 * @returns 
 */
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
                id="top-gradient"
                className="fixed top-0 inset-x-0 h-14 md:h-20 pointer-events-none z-30"
                style={{ background: 'linear-gradient(to bottom, #062923 20%, transparent)' }}
            />
            <div
                id="bottom-gradient"
                className="fixed bottom-0 inset-x-0 h-14 md:h-20 pointer-events-none z-30"
                style={{ background: 'linear-gradient(to top, #062923 20%, transparent)' }}
            />

            <div
                id="invitation-container"
                className="relative mx-auto"
                style={{ maxWidth: '600px', width: '100%' }}
            >
                <WeddingInvitation
                    id="wedding-invitation"
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