'use client';

export default function GradientOverlays() {
  return (
    <>
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
    </>
  );
}
