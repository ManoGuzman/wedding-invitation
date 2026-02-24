'use client'

import { motion } from 'framer-motion'
import WeddingInvitation from './components/WeddingInvitation'

const SECTIONS = 9

export default function Home() {
  return (
    <main className="min-h-screen bg-[#062923] overflow-x-hidden">
      {/* Fixed viewport edge gradients for continuous scroll fade effect */}
      <div
        className="fixed top-0 inset-x-0 h-14 md:h-20 pointer-events-none z-30"
        style={{ background: 'linear-gradient(to bottom, #062923 20%, transparent)' }}
      />
      <div
        className="fixed bottom-0 inset-x-0 h-14 md:h-20 pointer-events-none z-30"
        style={{ background: 'linear-gradient(to top, #062923 20%, transparent)' }}
      />

      {/* Responsive centered container */}
      <div className="relative w-full max-w-150 mx-auto">
        {/* SVG invitation — completely untouched */}
        <WeddingInvitation className="w-full h-auto block" />

        {/* Scroll-reveal overlay sections: solid panels that fade out when scrolled into view */}
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
            viewport={{ once: true, amount: i === 0 ? 0.1 : 0.25 }}
            transition={{
              duration: i === 0 ? 2 : 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i === 0 ? 0.5 : 0,
            }}
          />
        ))}
      </div>
    </main>
  )
}