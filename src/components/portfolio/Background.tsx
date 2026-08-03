export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div
        className="orb animate-drift"
        style={{
          width: "44rem",
          height: "44rem",
          top: "-16rem",
          left: "-10rem",
          background: "color-mix(in oklab, var(--violet) 42%, transparent)",
          opacity: 0.5,
        }}
      />
      <div
        className="orb animate-drift-slow"
        style={{
          width: "38rem",
          height: "38rem",
          top: "22%",
          right: "-12rem",
          background: "color-mix(in oklab, var(--cyan) 34%, transparent)",
          opacity: 0.35,
        }}
      />
      <div
        className="orb animate-drift"
        style={{
          width: "40rem",
          height: "40rem",
          bottom: "-14rem",
          left: "30%",
          background: "color-mix(in oklab, var(--indigo) 38%, transparent)",
          opacity: 0.35,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
