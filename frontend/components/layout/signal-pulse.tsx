"use client";

/**
 * The one deliberate motion moment in this UI: an ambient waveform that
 * reads as "the platform is continuously listening." Pure CSS animation,
 * disabled automatically when the user prefers reduced motion.
 */
export function SignalPulse() {
  return (
    <svg
      viewBox="0 0 160 24"
      className="h-6 w-32 text-signal-amber motion-reduce:[&_path]:animate-none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 12 H30 L38 3 L46 21 L54 3 L62 21 L70 12 H160"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="signal-pulse-path"
      />
      <style>{`
        .signal-pulse-path {
          stroke-dasharray: 6 8;
          animation: signal-pulse-flow 2.4s linear infinite;
        }
        @keyframes signal-pulse-flow {
          to { stroke-dashoffset: -140; }
        }
      `}</style>
    </svg>
  );
}
