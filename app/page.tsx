'use client'

import { motion } from 'framer-motion'
import WeddingInvitation from './components/WeddingInvitation'

const SECTIONS = 9
const GUEST_NAME = ""
const GUEST_AMOUNT = "1"

export default function Home() {
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
          name={GUEST_NAME}
          amount={GUEST_AMOUNT}
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