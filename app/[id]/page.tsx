'use client';

import React from 'react';
import { motion } from 'framer-motion';
import guestsData from '../data/guests.json';
import WeddingInvitation from '../components/WeddingInvitation';
import GradientOverlays from '../components/GradientOverlays';

/**
 * Number of sections in the wedding invitation.
 * Used for calculating scroll overlay positions.
 */
const SECTIONS = 9;

/**
 * Interface for the props passed to the InvitePage component.
 */
interface InvitePageProps {
    /** The dynamic route parameters containing the guest ID */
    params: Promise<{
        /** Unique identifier for the guest (from URL) */
        id: string;
    }>;
}

/**
 * InvitePage is a React component that renders a personalized wedding invitation
 * based on the guest's ID from the URL route.
 * 
 *'s information from the It retrieves the guest guests.json file and displays
 * the invitation with the guest's name and number of attendees. The page includes
 * gradient overlays for visual effects as the user scrolls through the invitation sections.
 * 
 * @param props - The component props containing the dynamic route parameters
 * @returns The personalized invitation page or an error message if guest not found
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
            <GradientOverlays />

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