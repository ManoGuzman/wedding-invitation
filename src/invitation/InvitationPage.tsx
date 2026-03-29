'use client'

import { motion } from 'framer-motion'
import WeddingInvitation from '@/invitation/WeddingInvitation'
import GradientOverlays from '@/invitation/GradientOverlays'

const SECTIONS = 9
const GUEST_NAME = ""
const GUEST_AMOUNT = "1"

/**
 * Home page component displaying the public wedding invitation.
 * Renders the SVG-based invitation with animated scroll overlays.
 *
 * @returns The main page component with wedding invitation
 */
export default function Home() {
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
                    name={GUEST_NAME}
                    amount={GUEST_AMOUNT}
                    className="w-full h-auto block"
                />

                {Array.from({ length: SECTIONS }, (_, i) => (
                    <motion.div
                        id="section-overlay"
                        key={i}
                        className="absolute left-0 right-0 pointer-events-none z-10"
                        style={{
                            top: `${(i / SECTIONS) * 100}%`,
                            height: `${100 / SECTIONS + 1}%`,
                            background: '#062923',
                        }}
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                        }}
                    />
                ))}
            </div>
        </main>
    )
}